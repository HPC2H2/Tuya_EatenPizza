import { useCallback, useEffect, useRef, useState } from 'react';
import { bytesToHex } from '@/utils/focus/dp106Packets';
import { ReportStore } from '@/utils/focus/reportStore';
import { OperationController } from '@/utils/focus/cancellation';
import { sendDps } from '@/utils/focus/deviceTransport';
import { uploadImage, UploadPhase } from '@/utils/focus/uploadQueue';

export function useDp106Upload(store: ReportStore, deviceId: string, isOnline: boolean) {
  const [phase, setPhase] = useState<UploadPhase>('idle');
  const [sentCount, setSentCount] = useState(0);
  const [error, setError] = useState('');
  const active = useRef<OperationController | null>(null);
  const cancel = useCallback(() => {
    if (!active.current) return;
    active.current.abort(); active.current = null;
    setPhase('failed'); setError('上传已中断。设备接收超时后可从头重新上传。');
  }, []);
  useEffect(() => { if (!isOnline) cancel(); }, [isOnline, cancel]);
  useEffect(() => () => { active.current?.abort(); active.current = null; }, []);
  async function startUpload(bytes: Uint8Array) {
    if (active.current || !isOnline || store.values.timer_status === 'running'
      || store.values.image_upload_status === 'receiving') return false;
    const controller = new OperationController(); active.current = controller;
    setError(''); setSentCount(0);
    try {
      await uploadImage(bytes, store,
        // SDK Raw使用hex字符串表示字节，SDK解码后固件收到EPZ1，而不是ASCII十六进制文字。
        packet => sendDps(deviceId, { custom_image:bytesToHex(packet) }), controller.signal,
        (next, sent) => { if (active.current === controller) { setPhase(next); setSentCount(sent); } });
      return true;
    } catch (reason) {
      if (active.current === controller) {
        setPhase('failed'); setError(reason instanceof Error ? reason.message : '上传失败');
      }
      return false;
    } finally {
      controller.abort(); if (active.current === controller) active.current = null;
    }
  }
  const busy = !['idle', 'failed', 'succeeded'].includes(phase);
  return { phase, sentCount, error, busy, startUpload, cancel };
}
