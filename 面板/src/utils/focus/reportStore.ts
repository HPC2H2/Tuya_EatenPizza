import { DeviceSnapshot } from './anomalyDetection';
import { OperationSignal } from './cancellation';

export const DP_IDS = { total_duration:101, piece_count:102, current_piece:103,
  timer_status:104, theme:105, custom_image:106, image_upload_status:107, image_upload_progress:108 } as const;
export type ReadableKey = keyof DeviceSnapshot;
export const READABLE_KEYS = Object.keys(DP_IDS).filter(k => k !== 'custom_image') as ReadableKey[];

/** 快照只更新显示；真实 DP 事件增加版本，即使同值上报也必须保留。 */
export class ReportStore {
  values: Partial<DeviceSnapshot> = {};
  versions: Partial<Record<ReadableKey, number>> = {};
  sequence = 0;
  private listeners = new Set<() => void>();
  subscribe = (fn: () => void) => { this.listeners.add(fn); return () => { this.listeners.delete(fn); }; };
  ingest(dps: Record<string, unknown>, event = true) {
    if (event) this.sequence++;
    for (const key of READABLE_KEYS) {
      const value = dps[DP_IDS[key]] ?? dps[key];
      if (value === undefined || value === null) continue;
      (this.values as Record<string, unknown>)[key] = value;
      if (event) this.versions[key] = this.sequence;
    }
    this.listeners.forEach(fn => fn());
  }
  snapshot(): DeviceSnapshot | null {
    return READABLE_KEYS.every(k => this.values[k] !== undefined && this.values[k] !== null)
      ? { ...this.values } as DeviceSnapshot : null;
  }
  fresh(keys: ReadableKey[], after: number) { return keys.every(k => (this.versions[k] || 0) > after); }
}

/** 在发送之前注册，避免设备应答早于 API success 回调。 */
export function waitForReport(store: ReportStore, after: number, expected: Partial<DeviceSnapshot>,
  timeoutMs: number, signal: OperationSignal, rejectMismatch = false,
  freshKeys: ReadableKey[] = Object.keys(expected) as ReadableKey[]): Promise<void> {
  return new Promise((resolve, reject) => {
    let timer: ReturnType<typeof setTimeout>;
    let unsubscribe = () => {};
    const finish = (error?: Error) => {
      clearTimeout(timer); unsubscribe(); signal.removeEventListener('abort', abort);
      if (error) reject(error); else resolve();
    };
    const abort = () => finish(new Error('操作已中止'));
    const check = () => {
      const keys = Object.keys(expected) as ReadableKey[];
      /*
       * Tuya may omit unchanged values from onDpDataChange even when firmware reports
       * a complete snapshot. Only fields expected to change must therefore be fresh;
       * every expected value is still checked against the latest device snapshot.
       */
      if (!store.fresh(freshKeys, after)) return;
      if (keys.every(k => store.values[k] === expected[k])) finish();
      else if (rejectMismatch) finish(new Error('设备未接受本次设置，请重新同步后重试'));
    };
    unsubscribe = store.subscribe(check);
    timer = setTimeout(() => finish(new Error('设备未确认，请重新同步后重试')), timeoutMs);
    signal.addEventListener('abort', abort);
    if (signal.aborted) abort(); else check();
  });
}

export function bounded<T>(promise: Promise<T>, ms: number, signal: OperationSignal): Promise<T> {
  return new Promise((resolve, reject) => {
    const abort = () => done(new Error('操作已中止'));
    const timer = setTimeout(() => done(new Error('发送队列30秒未推进，上传已中止')), ms);
    const done = (error?: unknown, result?: T) => {
      clearTimeout(timer); signal.removeEventListener('abort', abort);
      if (error) reject(error); else resolve(result as T);
    };
    signal.addEventListener('abort', abort);
    promise.then(value => done(undefined, value), error => done(error));
    if (signal.aborted) abort();
  });
}
