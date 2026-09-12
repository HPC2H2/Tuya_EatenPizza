import { publishDps, queryDps } from '@ray-js/ray';
import { DP_IDS, READABLE_KEYS } from './reportStore';

/** 不使用 optimistic state / set 节流，Promise 由底层 API success/fail 完成。 */
export function sendDps(deviceId: string, values: Record<string, string | number>): Promise<void> {
  const dps = {} as Parameters<typeof publishDps>[0]['dps'];
  Object.entries(values).forEach(([key, value]) => {
    const id = DP_IDS[key as keyof typeof DP_IDS];
    if (!id) throw new Error('未知功能点');
    (dps as Record<string, unknown>)[id] = value;
  });
  return new Promise((resolve, reject) => {
    publishDps({ deviceId, dps, mode:2, pipelines:[], options:{},
      success: result => result === false ? reject(new Error('下发失败')) : resolve(),
      fail: () => reject(new Error('下发失败，请检查设备连接')) });
  });
}
export function queryDevice(deviceId: string) {
  queryDps({ deviceId, dpIds: READABLE_KEYS.map(k => DP_IDS[k]), queryType:2, fail: () => {} });
}
