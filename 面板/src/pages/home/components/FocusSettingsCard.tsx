import React, { useEffect, useState } from 'react';
import { View, Text, showModal } from '@ray-js/ray';
import Strings from '@/i18n';
import {
  computeMinutesPerPiece,
  getAllowedPieceOptions,
  isValidCombination,
  PIECE_NUMBERS,
  PieceCount,
  TOTAL_DURATION_RANGE,
  TotalDuration,
} from '@/utils/focus/configMatrix';

const DURATION_LABEL_KEY: Record<TotalDuration, string> = {
  min_15: 'duration_min_15',
  min_30: 'duration_min_30',
  min_45: 'duration_min_45',
  min_60: 'duration_min_60',
  min_90: 'duration_min_90',
};

const PIECE_LABEL_KEY: Record<PieceCount, string> = {
  piece_1: 'piece_piece_1',
  piece_3: 'piece_piece_3',
  piece_5: 'piece_piece_5',
  piece_6: 'piece_piece_6',
  piece_9: 'piece_piece_9',
};

const ALL_PIECE_OPTIONS: PieceCount[] = ['piece_1', 'piece_3', 'piece_5', 'piece_6', 'piece_9'];

interface FocusSettingsCardProps {
  disabled: boolean;
  /** 设备当前生效值 */
  deviceDuration: TotalDuration;
  devicePieceCount: PieceCount;
  /** 是否处于运行中/需要二次确认清除进度的场景 */
  isRunningLocked: boolean;
  hasProgress: boolean;
  onApply: (duration: TotalDuration, piece: PieceCount) => void;
  onDraftChange?: (duration: TotalDuration, piece: PieceCount, dirty: boolean) => void;
}

/**
 * 专注设置卡片：时长 + 动态块数单选 + 配置摘要 + 未应用草稿提示。
 * 本地草稿与设备生效值分离展示，绝不用草稿覆盖"当前生效配置"文案。
 */
export function FocusSettingsCard({
  disabled,
  deviceDuration,
  devicePieceCount,
  isRunningLocked,
  hasProgress,
  onApply,
  onDraftChange,
}: FocusSettingsCardProps) {
  const [draftDuration, setDraftDuration] = useState<TotalDuration>(deviceDuration);
  const [draftPiece, setDraftPiece] = useState<PieceCount>(devicePieceCount);

  // 设备生效值变化时（如设备拒绝配置后回报的新值），同步草稿，避免草稿与设备长期脱节
  useEffect(() => {
    setDraftDuration(deviceDuration);
    setDraftPiece(devicePieceCount);
  }, [deviceDuration, devicePieceCount]);

  const allowedPieces = getAllowedPieceOptions(draftDuration);
  const isDraftDirty = draftDuration !== deviceDuration || draftPiece !== devicePieceCount;
  const summaryDuration = isDraftDirty ? draftDuration : deviceDuration;
  const summaryPiece = isDraftDirty ? draftPiece : devicePieceCount;
  const minutesPerPiece = computeMinutesPerPiece(summaryDuration, summaryPiece);

  useEffect(() => {
    onDraftChange?.(draftDuration, draftPiece, isDraftDirty);
  }, [draftDuration, draftPiece, isDraftDirty, onDraftChange]);

  const handlePickDuration = (duration: TotalDuration) => {
    if (disabled) return;
    const nextAllowed = getAllowedPieceOptions(duration);
    const nextPiece = nextAllowed.includes(draftPiece)
      ? draftPiece
      : nextAllowed[nextAllowed.length - 1];
    setDraftDuration(duration);
    setDraftPiece(nextPiece);
  };

  const handlePickPiece = (piece: PieceCount) => {
    if (disabled) return;
    if (!allowedPieces.includes(piece)) return;
    setDraftPiece(piece);
  };

  const doApply = () => {
    if (!isValidCombination(draftDuration, draftPiece)) return;
    onApply(draftDuration, draftPiece);
  };

  const handleApplyClick = () => {
    if (disabled || !isDraftDirty) return;
    if (hasProgress) {
      showModal({
        title: Strings.getLang('changeConfigConfirmTitle'),
        content: Strings.getLang('changeConfigConfirmContent'),
        showCancel: true,
        confirmText: Strings.getLang('confirmText'),
        cancelText: Strings.getLang('cancelText'),
        success: ({ confirm }) => {
          if (confirm) doApply();
        },
      });
    } else {
      doApply();
    }
  };

  return (
    <View className="flex flex-col gap-[var(--spacing-md)] rounded-[var(--radius-card)] bg-[var(--color-surface-surface)] p-[var(--spacing-base)] shadow-[var(--shadow-shadowcard)]">
      <Text className="block text-[length:var(--text-title)] font-medium text-[var(--color-text-textprimary)]">
        {Strings.getLang('focusDuration')}
      </Text>
      <View className="flex flex-row flex-wrap gap-[var(--spacing-sm)]">
        {TOTAL_DURATION_RANGE.map(duration => {
          const selected = draftDuration === duration;
          return (
            <View
              key={duration}
              onClick={() => handlePickDuration(duration)}
              className={`flex items-center justify-center rounded-[var(--radius-tag)] px-[var(--spacing-base)] py-[var(--spacing-sm)] ${
                selected
                  ? 'bg-[var(--color-brand-primary)]'
                  : 'bg-[var(--color-surface-surfacesubtle)]'
              } ${disabled ? 'opacity-50' : ''}`}
              style={{ minHeight: '44px' }}
            >
              <Text
                className={`text-[length:var(--text-body)] ${
                  selected
                    ? 'text-[var(--color-text-onprimary)]'
                    : 'text-[var(--color-text-textsecondary)]'
                }`}
              >
                {Strings.getLang(DURATION_LABEL_KEY[duration] as any)}
              </Text>
            </View>
          );
        })}
      </View>

      <Text className="block text-[length:var(--text-title)] font-medium text-[var(--color-text-textprimary)]">
        {Strings.getLang('pieceCount')}
      </Text>
      <View className="flex flex-row flex-wrap gap-[var(--spacing-sm)]">
        {ALL_PIECE_OPTIONS.map(piece => {
          const isAllowed = allowedPieces.includes(piece);
          if (!isAllowed) return null;
          const selected = draftPiece === piece;
          return (
            <View
              key={piece}
              onClick={() => handlePickPiece(piece)}
              className={`flex items-center justify-center rounded-[var(--radius-tag)] px-[var(--spacing-base)] py-[var(--spacing-sm)] ${
                selected
                  ? 'bg-[var(--color-brand-primary)]'
                  : 'bg-[var(--color-surface-surfacesubtle)]'
              } ${disabled ? 'opacity-50' : ''}`}
              style={{ minHeight: '44px' }}
            >
              <Text
                className={`text-[length:var(--text-body)] ${
                  selected
                    ? 'text-[var(--color-text-onprimary)]'
                    : 'text-[var(--color-text-textsecondary)]'
                }`}
              >
                {Strings.getLang(PIECE_LABEL_KEY[piece] as any)}
              </Text>
            </View>
          );
        })}
      </View>

      <View className="flex flex-row items-center justify-between">
        <Text className="text-[length:var(--text-caption)] text-[var(--color-text-textsecondary)]">
          {Strings.getLang(isDraftDirty ? 'draftNotApplied' : 'currentConfigSummary')}：{' '}
          {Strings.getLang(DURATION_LABEL_KEY[summaryDuration] as any)} ·{' '}
          {Strings.getLang(PIECE_LABEL_KEY[summaryPiece] as any)} · {minutesPerPiece}
          {Strings.getLang('minutesPerPiece')}
        </Text>
      </View>

      {isDraftDirty && (
        <View className="flex flex-row items-center rounded-[var(--radius-label)] bg-[var(--color-surface-surfacesubtle)] px-[var(--spacing-sm)] py-[var(--spacing-xs)]">
          <Text className="text-[length:var(--text-caption)] text-[var(--color-semantic-warning)]">
            {Strings.getLang('draftNotApplied')}
          </Text>
        </View>
      )}

      {!isRunningLocked && (
        <View
          onClick={handleApplyClick}
          className={`flex items-center justify-center rounded-[var(--radius-button)] py-[var(--spacing-sm)] ${
            disabled || !isDraftDirty
              ? 'bg-[var(--color-surface-surfacesubtle)]'
              : 'bg-[var(--color-brand-secondary)]'
          }`}
          style={{ minHeight: '44px' }}
        >
          <Text
            className={`text-[length:var(--text-body)] ${
              disabled || !isDraftDirty
                ? 'text-[var(--color-text-textmuted)]'
                : 'text-[var(--color-text-onprimary)]'
            }`}
          >
            {Strings.getLang('applyConfig')}
          </Text>
        </View>
      )}
    </View>
  );
}

export default FocusSettingsCard;
