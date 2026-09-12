import { useCallback, useEffect, useRef, useState } from 'react';
import { useDevice } from '@ray-js/panel-sdk';
import { getDeviceInfo, onDpDataChange, offDpDataChange } from '@ray-js/ray';
import { AnomalyReason, detectAnomalies } from '@/utils/focus/anomalyDetection';
import { DP_IDS, ReportStore, READABLE_KEYS } from '@/utils/focus/reportStore';
import { queryDevice } from '@/utils/focus/deviceTransport';

export type SyncPhase = 'syncing' | 'synced' | 'sync_failed';
export function useFocusDeviceSync() {
  const devInfo = useDevice(device => device.devInfo);
  const deviceId = devInfo?.devId || '';
  const isOnline = !!devInfo?.isOnline;
  const store = useRef(new ReportStore()).current;
  const [revision, redraw] = useState(0);
  const [phase, setPhase] = useState<SyncPhase>('syncing');
  const [anomalies, setAnomalies] = useState<AnomalyReason[]>([]);
  const [attempt, setAttempt] = useState(0);
  const retrySync = useCallback(() => setAttempt(n => n + 1), []);
  useEffect(() => store.subscribe(() => redraw(n => n + 1)), [store]);
  useEffect(() => {
    if (!deviceId) return undefined;
    const listener: Parameters<typeof onDpDataChange>[0] = event => {
      if (event.deviceId === deviceId) store.ingest(event.dps);
    };
    onDpDataChange(listener);
    return () => offDpDataChange(listener);
  }, [deviceId, store]);
  useEffect(() => {
    if (!deviceId || !isOnline) return undefined;
    let alive = true;
    const baseline = store.sequence;
    setPhase('syncing'); setAnomalies([]);
    const timeout = setTimeout(() => { if (alive) setPhase('sync_failed'); }, 10000);
    const complete = () => { if (alive) { clearTimeout(timeout); setPhase('synced'); } };
    const unsubscribe = store.subscribe(() => {
      if (store.fresh(READABLE_KEYS, baseline) && store.snapshot()) complete();
    });
    getDeviceInfo({ deviceId, success: info => {
      if (!alive) return;
      const dps = { ...info.dps };
      READABLE_KEYS.forEach(k => {
        if ((store.versions[k] || 0) > baseline) { delete dps[DP_IDS[k]]; delete dps[k]; }
      });
      store.ingest(dps, false);
      if (store.snapshot()) complete();
    }, fail: () => {} });
    queryDevice(deviceId);
    return () => { alive = false; clearTimeout(timeout); unsubscribe(); };
  }, [deviceId, isOnline, attempt, store]);
  const snapshot = store.snapshot();
  const signature = JSON.stringify(snapshot);
  useEffect(() => {
    if (!snapshot || phase !== 'synced' || !isOnline) return undefined;
    if (!detectAnomalies(snapshot).length) { setAnomalies([]); return undefined; }
    let alive = true;
    const timer = setTimeout(() => {
      queryDevice(deviceId);
      getDeviceInfo({ deviceId, success: info => {
        if (!alive) return;
        const verify = new ReportStore(); verify.ingest(info.dps, false);
        const reread = verify.snapshot();
        if (reread && detectAnomalies(reread).length) setAnomalies(detectAnomalies(store.snapshot()!));
        else if (!reread) setPhase('sync_failed');
      }, fail: () => { if (alive) setPhase('sync_failed'); } });
    }, 500);
    return () => { alive = false; clearTimeout(timer); };
  }, [signature, phase, isOnline, deviceId, store]);
  return { snapshot, phase, isOnline, deviceId, deviceName: devInfo?.name,
    anomalies, retrySync, store, revision };
}
