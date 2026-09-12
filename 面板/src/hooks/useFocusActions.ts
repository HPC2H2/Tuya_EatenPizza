import { useEffect, useRef, useState } from 'react';
import { showToast } from '@ray-js/ray';
import { PieceCount, TotalDuration, isValidCombination } from '@/utils/focus/configMatrix';
import { ThemeValue, DeviceSnapshot } from '@/utils/focus/anomalyDetection';
import { ReadableKey, ReportStore, waitForReport, bounded } from '@/utils/focus/reportStore';
import { OperationController, OperationSignal } from '@/utils/focus/cancellation';
import { sendDps } from '@/utils/focus/deviceTransport';

type Pending = { kind: 'config' | 'timer' | 'theme'; requestedTheme?: ThemeValue } | null;
export function useFocusActions(store: ReportStore, deviceId: string, enabled: boolean) {
  const [pending, setPending] = useState<Pending>(null);
  const active = useRef<OperationController | null>(null);
  const cancel = () => { active.current?.abort(); active.current = null; setPending(null); };
  useEffect(() => { if (!enabled) cancel(); }, [enabled]);
  useEffect(() => () => { active.current?.abort(); active.current = null; }, []);
  async function confirm(values: Record<string, string>, expected: Partial<DeviceSnapshot>, signal: OperationSignal) {
    const requestedKeys = Object.keys(values) as ReadableKey[];
    const changedKeys = requestedKeys.filter(key => store.values[key] !== values[key]);
    const freshKeys = changedKeys.length > 0 ? changedKeys : requestedKeys;
    const report = waitForReport(store, store.sequence, expected, 15000, signal, true, freshKeys);
    await Promise.all([report, bounded(sendDps(deviceId, values), 15000, signal)]);
  }
  async function run(state: Pending, work: (signal: OperationSignal) => Promise<void>) {
    if (!enabled || active.current) return;
    const control = new OperationController(); active.current = control; setPending(state);
    try { await work(control.signal); }
    catch (error) {
      if (!control.signal.aborted) showToast({ title: error instanceof Error ? error.message : '操作失败', icon:'none' });
    } finally {
      control.abort();
      if (active.current === control) { active.current = null; setPending(null); }
    }
  }
  return { pending, isWaitingConfirm:!!pending, cancel,
    applyConfig: (duration: TotalDuration, piece: PieceCount, thenStart = false) => {
      if (!isValidCombination(duration, piece)) return;
      return run({ kind:'config' }, async signal => {
        await confirm({ total_duration:duration, piece_count:piece },
          { total_duration:duration, piece_count:piece, current_piece:0, timer_status:'idle' }, signal);
        if (thenStart && !signal.aborted) {
          setPending({ kind:'timer' });
          await confirm({ timer_status:'running' }, { timer_status:'running' }, signal);
        }
      });
    },
    setTimerStatus: (status: 'idle' | 'running') => run({ kind:'timer' },
      signal => confirm({ timer_status:status }, { timer_status:status }, signal)),
    setTheme: (theme: ThemeValue) => run({ kind:'theme', requestedTheme:theme }, async signal => {
      if (theme === 'custom' && store.values.image_upload_status !== 'ready') throw new Error('请先上传图片');
      await confirm({ theme }, { theme }, signal);
      showToast({ title:store.values.timer_status === 'completed'
        ? '主题已保存，下次开始时显示' : '主题已确认，墨水屏刷新约20秒', icon:'none' });
    }),
  };
}
