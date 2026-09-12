import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, showModal, usePageEvent, usePageInstance } from '@ray-js/ray';
import { useTopBarTitle } from '@ray-js/panel-sdk/lib/hooks/useTopBarTitle';
import Strings from '@/i18n';
import { useFocusDeviceSync } from '@/hooks/useFocusDeviceSync';
import { useFocusActions } from '@/hooks/useFocusActions';
import { useDp106Upload } from '@/hooks/useDp106Upload';
import { PIECE_NUMBERS, PieceCount, TotalDuration } from '@/utils/focus/configMatrix';
import {
  ImageProcessInput,
  ImageProcessResult,
  packedHexToBytes,
} from '@/utils/focus/imageProcessor';
import SegmentedRing from './components/SegmentedRing';
import FocusSettingsCard from './components/FocusSettingsCard';
import ThemeGrid from './components/ThemeGrid';
import StatusBanner, { PanelPriorityState } from './components/StatusBanner';
import BottomActionButton from './components/BottomActionButton';
import bgLight from '@/assets/panel-bg-light.png';
import ImageRender from './index.rjs';

interface RjsImageResult {
  width: number;
  height: number;
  packedHex: string;
}

interface RjsImageRender {
  getImageDimensions(src: string): Promise<{ width: number; height: number }>;
  processImage(
    canvasId: string,
    src: string,
    cropRect: { x: number; y: number; size: number }
  ): Promise<RjsImageResult>;
}

const RING_STATUS_LABEL_KEY: Record<'idle_not_started' | 'idle_paused' | 'running' | 'completed', string> = {
  idle_not_started: 'ringStatusIdleNotStarted',
  idle_paused: 'ringStatusPaused',
  running: 'ringStatusRunning',
  completed: 'ringStatusCompleted',
};

export function Home() {
  useTopBarTitle(Strings.getLang('deviceName'));
  const pageInstance = usePageInstance();
  const imageRenderRef = useRef<RjsImageRender | null>(null);
  const [processorReady, setProcessorReady] = useState(false);

  usePageEvent('onReady', () => {
    try {
      imageRenderRef.current = new ImageRender(pageInstance) as RjsImageRender;
      setProcessorReady(true);
    } catch (_error) {
      imageRenderRef.current = null;
      setProcessorReady(false);
    }
  });

  const processImage = useCallback(
    async (input: ImageProcessInput): Promise<ImageProcessResult> => {
      const render = imageRenderRef.current;
      if (!render) throw new Error('[ImageProcessor] RJS render is not ready');
      const result = await render.processImage(
        'focus-image-process-canvas',
        input.tempFilePath,
        input.cropRect
      );
      if (result.width !== 400 || result.height !== 400) {
        throw new Error('[ImageProcessor] RJS returned invalid dimensions');
      }
      return {
        width: 400,
        height: 400,
        previewSrc: input.tempFilePath,
        packedBytes: packedHexToBytes(result.packedHex),
      };
    },
    []
  );

  const inspectImage = useCallback(async (src: string) => {
    const render = imageRenderRef.current;
    if (!render) throw new Error('[ImageProcessor] RJS render is not ready');
    return render.getImageDimensions(src);
  }, []);

  const { snapshot, phase, isOnline, deviceId, deviceName, anomalies, retrySync, store } = useFocusDeviceSync();
  const controlsEnabled =
    phase === 'synced' &&
    isOnline &&
    anomalies.length === 0 &&
    snapshot?.image_upload_status !== 'receiving';
  const { pending, applyConfig, setTimerStatus, setTheme, isWaitingConfirm } = useFocusActions(
    store,
    deviceId,
    controlsEnabled
  );
  const upload = useDp106Upload(store, deviceId, isOnline);

  const [hasLocalPreview, setHasLocalPreview] = useState(false);
  const [draftConfig, setDraftConfig] = useState<{
    duration: TotalDuration;
    piece: PieceCount;
    dirty: boolean;
  } | null>(null);

  // 页面隐藏/卸载时中断上传队列，不支持断点续传
  usePageEvent('onHide', () => {
    if (upload.phase !== 'idle' && upload.phase !== 'succeeded' && upload.phase !== 'failed') {
      upload.cancel();
    }
  });

  useEffect(
    () => () => {
      if (upload.phase !== 'idle' && upload.phase !== 'succeeded' && upload.phase !== 'failed') {
        upload.cancel();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // 状态优先级判定（锁定，需求第8.1节）：同步中 > 离线 > 异常 > 上传中 > 等待确认 > 专注状态
  const priorityState: PanelPriorityState = useMemo(() => {
    if (phase === 'syncing') return 'syncing';
    if (phase === 'sync_failed') return 'sync_failed';
    if (!isOnline) return 'offline';
    if (anomalies.length > 0) return 'anomaly';
    if (snapshot?.image_upload_status === 'receiving') return 'uploading';
    if (isWaitingConfirm) return 'waiting_confirm';
    return 'normal';
  }, [phase, isOnline, anomalies, snapshot, isWaitingConfirm]);

  const disabled = priorityState !== 'normal';

  const handlePrimaryAction = () => {
    if (!snapshot) return;
    if (pending) return;

    if (draftConfig?.dirty && snapshot.timer_status !== 'running') {
      const applyAndStart = () => applyConfig(draftConfig.duration, draftConfig.piece, true);
      if (snapshot.timer_status === 'idle' && snapshot.current_piece > 0) {
        showModal({
          title: Strings.getLang('changeConfigConfirmTitle'),
          content: Strings.getLang('changeConfigConfirmContent'),
          showCancel: true,
          confirmText: Strings.getLang('confirmText'),
          cancelText: Strings.getLang('cancelText'),
          success: ({ confirm }) => {
            if (confirm) applyAndStart();
          },
        });
      } else {
        applyAndStart();
      }
      return;
    }

    if (snapshot.timer_status === 'idle' && snapshot.current_piece === 0) {
      setTimerStatus('running');
    } else if (snapshot.timer_status === 'running') {
      setTimerStatus('idle');
    } else if (snapshot.timer_status === 'idle' && snapshot.current_piece > 0) {
      setTimerStatus('running');
    } else if (snapshot.timer_status === 'completed') {
      // 再次开始：仅下发 running，绝不下发 completed
      setTimerStatus('running');
    }
  };

  const handleApplyConfig = (duration: TotalDuration, piece: PieceCount) => {
    applyConfig(duration, piece, false);
  };

  const handleDraftChange = useCallback(
    (duration: TotalDuration, piece: PieceCount, dirty: boolean) => {
      setDraftConfig({ duration, piece, dirty });
    },
    []
  );

  const handleStartUpload = (bytes: Uint8Array) => {
    upload.startUpload(bytes);
    setHasLocalPreview(true);
  };

  if (!snapshot) {
    // 同步中/同步失败：骨架屏 + 横幅，不渲染任何设备默认值
    return (
      <View
        className="safe-area-pb flex h-screen flex-col overflow-y-auto px-[var(--spacing-base)] pt-[var(--spacing-lg)]"
        style={{
          backgroundImage: `url(${bgLight})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <StatusBanner state={phase === 'sync_failed' ? 'sync_failed' : 'syncing'} onRetry={retrySync} />
        <View className="mt-[var(--spacing-xl)] flex flex-col items-center gap-[var(--spacing-md)]">
          <View
            className="rounded-[999px] bg-[var(--color-surface-surfacesubtle)]"
            style={{ width: '240px', height: '240px' }}
          />
          <View
            className="rounded-[var(--radius-card)] bg-[var(--color-surface-surfacesubtle)]"
            style={{ width: '100%', height: '80px' }}
          />
        </View>
      </View>
    );
  }

  const pieceTotal = PIECE_NUMBERS[snapshot.piece_count];
  const ringStatusKey: 'idle_not_started' | 'idle_paused' | 'running' | 'completed' =
    snapshot.timer_status === 'running'
      ? 'running'
      : snapshot.timer_status === 'completed'
      ? 'completed'
      : snapshot.current_piece > 0
      ? 'idle_paused'
      : 'idle_not_started';

  const hasProgress = snapshot.current_piece > 0 && snapshot.current_piece < pieceTotal;

  return (
    <View
      className="safe-area-pb flex h-screen flex-col overflow-y-auto"
      style={{
        backgroundImage: `url(${bgLight})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <View className="flex flex-1 flex-col gap-[var(--spacing-base)] px-[var(--spacing-base)] pt-[var(--spacing-md)]">
        {/* 顶部设备栏 */}
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[length:var(--text-h2)] font-semibold text-[var(--color-text-textprimary)]">
            {deviceName || Strings.getLang('deviceName')}
          </Text>
          <Text
            className={`text-[length:var(--text-caption)] ${
              isOnline ? 'text-[var(--color-semantic-success)]' : 'text-[var(--color-semantic-error)]'
            }`}
          >
            {isOnline ? Strings.getLang('online') : Strings.getLang('offline')}
          </Text>
        </View>

        {priorityState !== 'normal' && (
          <StatusBanner state={priorityState} anomalies={anomalies} onRetry={retrySync} />
        )}

        {snapshot.theme === 'custom' && snapshot.timer_status !== 'idle' && (
          <View className="rounded-[var(--radius-label)] bg-[var(--color-surface-surfacesubtle)] px-[var(--spacing-base)] py-[var(--spacing-sm)]">
            <Text className="text-[length:var(--text-caption)] text-[var(--color-semantic-info)]">
              {Strings.getLang('inkRefreshHint')}
            </Text>
          </View>
        )}

        {/* 专注进度主卡片 */}
        <View className="flex flex-col items-center gap-[var(--spacing-sm)] rounded-[var(--radius-card)] bg-[var(--color-surface-surface)]/80 py-[var(--spacing-lg)] shadow-[var(--shadow-shadowcard)]">
          <SegmentedRing total={pieceTotal} filled={snapshot.current_piece}>
            <Text className="text-[length:var(--text-h1)] font-bold text-[var(--color-text-textprimary)]">
              {snapshot.current_piece}/{pieceTotal}
            </Text>
            <Text className="text-[length:var(--text-caption)] text-[var(--color-text-textsecondary)]">
              {Strings.getLang(`theme_${snapshot.theme}` as any)}
            </Text>
          </SegmentedRing>
          <Text className="text-[length:var(--text-title)] font-medium text-[var(--color-text-textprimary)]">
            {Strings.getLang(RING_STATUS_LABEL_KEY[ringStatusKey] as any)}
          </Text>
          {snapshot.timer_status === 'completed' && (
            <Text className="text-[length:var(--text-caption)] text-[var(--color-text-textmuted)]">
              {Strings.getLang('ringFinishedAllWhite')}
            </Text>
          )}
        </View>

        {/* 专注设置卡片 */}
        <FocusSettingsCard
          disabled={disabled || snapshot.timer_status === 'running'}
          deviceDuration={snapshot.total_duration}
          devicePieceCount={snapshot.piece_count}
          isRunningLocked={snapshot.timer_status === 'running'}
          hasProgress={hasProgress}
          onApply={handleApplyConfig}
          onDraftChange={handleDraftChange}
        />

        {/* 主题2x2卡片 + 自定义图片 */}
        <ThemeGrid
          disabled={disabled}
          currentTheme={snapshot.theme}
          pendingTheme={pending?.kind === 'theme' ? pending.requestedTheme : null}
          imageUploadStatus={snapshot.image_upload_status}
          imageUploadProgress={snapshot.image_upload_progress}
          uploadPhase={
            upload.phase !== 'idle' && upload.phase !== 'succeeded' && upload.phase !== 'failed'
              ? 'uploading'
              : 'idle'
          }
          onSelectBuiltIn={setTheme}
          onUseCustomImage={() => setTheme('custom')}
          onStartUpload={handleStartUpload}
          hasLocalPreview={hasLocalPreview}
          processorReady={processorReady}
          processImage={processImage}
          inspectImage={inspectImage}
        />

        {snapshot.timer_status === 'completed' && (
          <Text className="text-[length:var(--text-caption)] text-[var(--color-text-textmuted)]">
            {Strings.getLang('themeWillApplyNextSession')}
          </Text>
        )}
      </View>

      <BottomActionButton
        priorityState={priorityState}
        timerStatus={snapshot.timer_status}
        currentPiece={snapshot.current_piece}
        hasUnappliedDraft={!!draftConfig?.dirty}
        onPrimaryAction={handlePrimaryAction}
      />
    </View>
  );
}

export default Home;
