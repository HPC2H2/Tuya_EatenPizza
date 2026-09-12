import React from 'react';
import { View, Text } from '@ray-js/ray';
import Strings from '@/i18n';
import { PanelPriorityState } from './StatusBanner';

interface BottomActionButtonProps {
  priorityState: PanelPriorityState;
  /** idle/running/completed，仅在 priorityState === 'normal' 时有意义 */
  timerStatus: 'idle' | 'running' | 'completed';
  currentPiece: number;
  hasUnappliedDraft: boolean;
  onPrimaryAction: () => void;
}

/**
 * 底部固定主按钮（锁定，需求第8.2/14.1节）。文案与可用性完全由状态优先级 + timer_status 决定，
 * 面板任何情况下都不下发 completed；"应用并开始"场景由上层通过 hasUnappliedDraft 传入。
 */
export function BottomActionButton({
  priorityState,
  timerStatus,
  currentPiece,
  hasUnappliedDraft,
  onPrimaryAction,
}: BottomActionButtonProps) {
  let labelKey = 'startFocus';
  let disabled = false;

  if (priorityState === 'syncing') {
    labelKey = 'syncingButton';
    disabled = true;
  } else if (priorityState === 'sync_failed') {
    labelKey = 'syncFailed';
    disabled = true;
  } else if (priorityState === 'offline') {
    labelKey = 'deviceOfflineButton';
    disabled = true;
  } else if (priorityState === 'anomaly') {
    labelKey = 'deviceAnomaly';
    disabled = true;
  } else if (priorityState === 'uploading') {
    labelKey = 'uploadingButton';
    disabled = true;
  } else if (priorityState === 'waiting_confirm') {
    labelKey = 'confirmPending';
    disabled = true;
  } else if (hasUnappliedDraft && timerStatus !== 'running') {
    labelKey = 'applyAndStart';
  } else if (timerStatus === 'idle' && currentPiece === 0) {
    labelKey = 'startFocus';
  } else if (timerStatus === 'running') {
    labelKey = 'pauseFocus';
  } else if (timerStatus === 'idle' && currentPiece > 0) {
    labelKey = 'continueFocus';
  } else if (timerStatus === 'completed') {
    labelKey = 'startAgain';
  }

  return (
    <View className="safe-area-pb flex flex-col bg-transparent px-[var(--spacing-base)] pb-[var(--spacing-sm)] pt-[var(--spacing-sm)]">
      <View
        onClick={() => !disabled && onPrimaryAction()}
        className={`flex items-center justify-center rounded-[var(--radius-button)] shadow-[var(--shadow-shadowfloat)] ${
          disabled ? 'bg-[var(--color-surface-surfacesubtle)]' : 'bg-[var(--color-brand-primary)]'
        }`}
        style={{ minHeight: '52px' }}
      >
        <Text
          className={`text-[length:var(--text-title)] font-medium ${
            disabled ? 'text-[var(--color-text-textmuted)]' : 'text-[var(--color-text-onprimary)]'
          }`}
        >
          {Strings.getLang(labelKey as any)}
        </Text>
      </View>
    </View>
  );
}

export default BottomActionButton;
