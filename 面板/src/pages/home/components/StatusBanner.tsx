import React from 'react';
import { View, Text } from '@ray-js/ray';
import Strings from '@/i18n';
import { AnomalyReason } from '@/utils/focus/anomalyDetection';

export type PanelPriorityState =
  | 'syncing'
  | 'sync_failed'
  | 'offline'
  | 'anomaly'
  | 'uploading'
  | 'waiting_confirm'
  | 'normal';

interface StatusBannerProps {
  state: PanelPriorityState;
  anomalies?: AnomalyReason[];
  onRetry?: () => void;
}

const ANOMALY_LABEL_KEY: Record<AnomalyReason, string> = {
  completed_mismatch: 'anomalyCompletedMismatch',
  progress_overflow: 'anomalyProgressOverflow',
  theme_not_ready: 'anomalyThemeNotReady',
  invalid_combo: 'anomalyInvalidCombo',
};

/**
 * 状态优先级横幅（锁定，需求第8.1节）：正在同步 > 离线 > 设备状态异常 > 图片上传中 > 等待设备确认 > 专注状态。
 * 本组件只负责渲染对应优先级下的提示文案与操作入口，不做优先级判定（判定在页面层完成）。
 */
export function StatusBanner({ state, anomalies = [], onRetry }: StatusBannerProps) {
  if (state === 'syncing') {
    return (
      <View className="flex flex-row items-center justify-between rounded-[var(--radius-label)] bg-[var(--color-surface-surfacesubtle)] px-[var(--spacing-base)] py-[var(--spacing-sm)]">
        <Text className="text-[length:var(--text-body)] text-[var(--color-semantic-info)]">
          {Strings.getLang('syncing')}
        </Text>
      </View>
    );
  }

  if (state === 'sync_failed') {
    return (
      <View className="flex flex-row items-center justify-between rounded-[var(--radius-label)] bg-[var(--color-surface-surfacesubtle)] px-[var(--spacing-base)] py-[var(--spacing-sm)]">
        <Text className="text-[length:var(--text-body)] text-[var(--color-semantic-error)]">
          {Strings.getLang('syncFailed')}
        </Text>
        <View onClick={onRetry} style={{ minHeight: '44px', minWidth: '44px' }} className="flex items-center justify-center">
          <Text className="text-[length:var(--text-body)] text-[var(--color-brand-secondary)]">
            {Strings.getLang('retry')}
          </Text>
        </View>
      </View>
    );
  }

  if (state === 'offline') {
    return (
      <View className="flex flex-col gap-[var(--spacing-xs)] rounded-[var(--radius-label)] bg-[var(--color-surface-surfacesubtle)] px-[var(--spacing-base)] py-[var(--spacing-sm)]">
        <Text className="text-[length:var(--text-body)] text-[var(--color-semantic-error)]">
          {Strings.getLang('deviceOfflineBanner')}
        </Text>
        <Text className="text-[length:var(--text-caption)] text-[var(--color-text-textmuted)]">
          {Strings.getLang('dataMayBeStale')}
        </Text>
      </View>
    );
  }

  if (state === 'anomaly') {
    return (
      <View className="flex flex-col gap-[var(--spacing-xs)] rounded-[var(--radius-label)] bg-[var(--color-surface-surfacesubtle)] px-[var(--spacing-base)] py-[var(--spacing-sm)]">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[length:var(--text-body)] text-[var(--color-semantic-error)]">
            {Strings.getLang('deviceAnomaly')}
          </Text>
          <View onClick={onRetry} style={{ minHeight: '44px', minWidth: '44px' }} className="flex items-center justify-center">
            <Text className="text-[length:var(--text-body)] text-[var(--color-brand-secondary)]">
              {Strings.getLang('anomalyRetry')}
            </Text>
          </View>
        </View>
        {anomalies.map(reason => (
          <Text key={reason} className="block text-[length:var(--text-caption)] text-[var(--color-text-textsecondary)]">
            {Strings.getLang(ANOMALY_LABEL_KEY[reason] as any)}
          </Text>
        ))}
      </View>
    );
  }

  if (state === 'uploading') {
    return (
      <View className="flex flex-col gap-[var(--spacing-xs)] rounded-[var(--radius-label)] bg-[var(--color-surface-surfacesubtle)] px-[var(--spacing-base)] py-[var(--spacing-sm)]">
        <Text className="text-[length:var(--text-body)] text-[var(--color-semantic-info)]">
          {Strings.getLang('uploadingButton')}
        </Text>
        <Text className="text-[length:var(--text-caption)] text-[var(--color-text-textmuted)]">
          {Strings.getLang('uploadingKeepOnline')}
        </Text>
      </View>
    );
  }

  if (state === 'waiting_confirm') {
    return (
      <View className="flex flex-row items-center rounded-[var(--radius-label)] bg-[var(--color-surface-surfacesubtle)] px-[var(--spacing-base)] py-[var(--spacing-sm)]">
        <Text className="text-[length:var(--text-body)] text-[var(--color-semantic-info)]">
          {Strings.getLang('waitingConfirm')}
        </Text>
      </View>
    );
  }

  return null;
}

export default StatusBanner;
