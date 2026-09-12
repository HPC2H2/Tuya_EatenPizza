import { buildDp106Packets } from './dp106Packets';
import { ReportStore, bounded, waitForReport } from './reportStore';
import { OperationController, OperationSignal } from './cancellation';

export type UploadPhase = 'idle' | 'waiting_receiving' | 'sending_rest' | 'waiting_final_confirm'
  | 'waiting_theme' | 'succeeded' | 'failed';

/** 一包的发送回调完成才发下一包；DP108从不参与发送节奏。 */
export async function uploadImage(bytes: Uint8Array, store: ReportStore,
  send: (bytes: Uint8Array) => Promise<void>, signal: OperationSignal,
  update: (phase: UploadPhase, sent: number) => void, packetGapMs = 120) {
  const packets = buildDp106Packets(bytes);
  const session = new OperationController();
  const abort = () => session.abort();
  signal.addEventListener('abort', abort);
  if (signal.aborted) session.abort();
  const baseline = store.sequence;
  let unsubscribe = () => {};
  let failure: Error | undefined;
  unsubscribe = store.subscribe(() => {
    if (store.fresh(['image_upload_status'], baseline) && store.values.image_upload_status === 'error') {
      failure = new Error('设备报告上传失败，请从头重新上传'); session.abort();
    }
  });
  const check = () => {
    if (session.signal.aborted) throw failure || new Error('上传已中止，请从头重新上传');
  };
  try {
    check(); update('waiting_receiving', 0);
    const receiving = waitForReport(store, baseline, { image_upload_status:'receiving' }, 10000, session.signal);
    await Promise.all([receiving, bounded(send(packets[0].bytes), 10000, session.signal)]);
    check(); update('sending_rest', 1);
    for (let i = 1; i < packets.length; i++) {
      check();
      await bounded(send(packets[i].bytes), 30000, session.signal);
      check(); update('sending_rest', i + 1);
      if (packetGapMs && i < packets.length - 1) {
        await bounded(new Promise<void>(resolve => setTimeout(resolve, packetGapMs)), 30000, session.signal);
      }
    }
    update('waiting_final_confirm', packets.length);
    await waitForReport(store, baseline, { image_upload_status:'ready', image_upload_progress:100 }, 30000, session.signal);
    check(); update('waiting_theme', packets.length);
    await waitForReport(store, baseline, { theme:'custom' }, 15000, session.signal);
    check(); update('succeeded', packets.length);
  } catch (error) { throw failure || error; }
  finally { unsubscribe(); signal.removeEventListener('abort', abort); session.abort(); }
}
