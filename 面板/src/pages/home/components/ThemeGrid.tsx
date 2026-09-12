import React, { useEffect, useState } from 'react';
import { View, Text } from '@ray-js/ray';
import Strings from '@/i18n';
import { ThemeValue, UploadStatus } from '@/utils/focus/anomalyDetection';
import { ProcessImage } from '@/utils/focus/imageProcessor';
import { ImagePickFlow } from './ImagePickFlow';

const THEME_LABEL_KEY: Record<ThemeValue, string> = {
  pizza: 'theme_pizza',
  stars: 'theme_stars',
  miku: 'theme_miku',
  custom: 'theme_custom',
};

const BUILT_IN_THEMES: ThemeValue[] = ['pizza', 'stars', 'miku'];

interface ThemeGridProps {
  disabled: boolean;
  currentTheme: ThemeValue;
  pendingTheme: ThemeValue | null;
  imageUploadStatus: UploadStatus;
  imageUploadProgress: number;
  uploadPhase: 'idle' | 'uploading';
  onSelectBuiltIn: (theme: ThemeValue) => void;
  onUseCustomImage: () => void;
  onStartUpload: (bytes: Uint8Array) => void;
  hasLocalPreview: boolean;
  processorReady: boolean;
  processImage: ProcessImage;
  inspectImage: (src: string) => Promise<{ width: number; height: number; type?: string }>;
}

/**
 * 主题 2x2 卡片：披萨/星空/初音/自定义。内置主题一律单选写 DP105；
 * 自定义卡片根据 image_upload_status 呈现选图/上传中/就绪(可使用)/失败(可重新上传) 四态。
 */
export function ThemeGrid({
  disabled,
  currentTheme,
  pendingTheme,
  imageUploadStatus,
  imageUploadProgress,
  uploadPhase,
  onSelectBuiltIn,
  onUseCustomImage,
  onStartUpload,
  hasLocalPreview,
  processorReady,
  processImage,
  inspectImage,
}: ThemeGridProps) {
  const [pickerOpen, setPickerOpen] = useState(false);

  useEffect(() => {
    if (imageUploadStatus === 'receiving') setPickerOpen(false);
  }, [imageUploadStatus]);

  const startUpload = (bytes: Uint8Array) => {
    setPickerOpen(false);
    onStartUpload(bytes);
  };

  return (
    <View className="flex flex-col gap-[var(--spacing-md)] rounded-[var(--radius-card)] bg-[var(--color-surface-surface)] p-[var(--spacing-base)] shadow-[var(--shadow-shadowcard)]">
      <View className="flex flex-row flex-wrap gap-[var(--spacing-sm)]">
        {BUILT_IN_THEMES.map(theme => {
          const selected = currentTheme === theme;
          const isPendingThis = pendingTheme === theme;
          return (
            <View
              key={theme}
              onClick={() => !disabled && onSelectBuiltIn(theme)}
              className={`flex flex-1 flex-col items-center justify-center gap-[var(--spacing-xs)] rounded-[var(--radius-card)] py-[var(--spacing-base)] ${
                selected
                  ? 'bg-[var(--color-surface-surfacesubtle)]'
                  : 'bg-[var(--color-surface-background)]'
              } ${disabled ? 'opacity-50' : ''}`}
              style={{ minHeight: '44px', minWidth: '44px', border: selected ? '2px solid var(--color-brand-accent)' : '2px solid transparent' }}
            >
              <Text className="text-[length:var(--text-body)] text-[var(--color-text-textprimary)]">
                {Strings.getLang(THEME_LABEL_KEY[theme] as any)}
              </Text>
              {isPendingThis && (
                <Text className="text-[length:var(--text-micro)] text-[var(--color-semantic-info)]">
                  {Strings.getLang('waitingConfirm')}
                </Text>
              )}
            </View>
          );
        })}

        <View
          className={`flex flex-1 flex-col items-center justify-center gap-[var(--spacing-xs)] rounded-[var(--radius-card)] py-[var(--spacing-base)] ${
            currentTheme === 'custom'
              ? 'bg-[var(--color-surface-surfacesubtle)]'
              : 'bg-[var(--color-surface-background)]'
          }`}
          style={{
            minHeight: '44px',
            minWidth: '44px',
            border: currentTheme === 'custom' ? '2px solid var(--color-brand-accent)' : '2px solid transparent',
            opacity: disabled ? 0.5 : 1,
          }}
        >
          <Text className="text-[length:var(--text-body)] text-[var(--color-text-textprimary)]">
            {Strings.getLang(THEME_LABEL_KEY.custom)}
          </Text>
          <Text className="text-[length:var(--text-micro)] text-[var(--color-text-textmuted)]">
            {Strings.getLang(`upload_${imageUploadStatus}` as any)}
          </Text>
          {pendingTheme === 'custom' && (
            <Text className="text-[length:var(--text-micro)] text-[var(--color-semantic-info)]">
              {Strings.getLang('waitingConfirm')}
            </Text>
          )}
        </View>
      </View>

      {/* 自定义图片区域详情 */}
      <View className="flex flex-col gap-[var(--spacing-sm)] border-t border-[var(--color-surface-divider)] pt-[var(--spacing-sm)]">
        {imageUploadStatus === 'ready' && uploadPhase === 'idle' && (
          <View className="flex flex-col gap-[var(--spacing-sm)]">
            {!hasLocalPreview && (
              <Text className="text-[length:var(--text-caption)] text-[var(--color-text-textsecondary)]">
                {Strings.getLang('noLocalPreview')}
              </Text>
            )}
            <View className="flex flex-row gap-[var(--spacing-sm)]">
              <View
                onClick={() => !disabled && onUseCustomImage()}
                className={`flex flex-1 items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-brand-primary)] py-[var(--spacing-sm)] ${
                  disabled ? 'opacity-50' : ''
                }`}
                style={{ minHeight: '44px' }}
              >
                <Text className="text-[length:var(--text-body)] text-[var(--color-text-onprimary)]">
                  {Strings.getLang('useThisImage')}
                </Text>
              </View>
              <View
                onClick={() => !disabled && setPickerOpen(true)}
                className={`flex flex-1 items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-surface-divider)] py-[var(--spacing-sm)] ${
                  disabled ? 'opacity-50' : ''
                }`}
                style={{ minHeight: '44px' }}
              >
                <Text className="text-[length:var(--text-body)] text-[var(--color-text-textsecondary)]">
                  {Strings.getLang('changeImage')}
                </Text>
              </View>
            </View>
          </View>
        )}

        {imageUploadStatus === 'error' && uploadPhase === 'idle' && (
          <View className="flex flex-col gap-[var(--spacing-sm)]">
            <Text className="text-[length:var(--text-caption)] text-[var(--color-semantic-error)]">
              {Strings.getLang('uploadFailedError')} · {imageUploadProgress}%
            </Text>
            <View
              onClick={() => !disabled && setPickerOpen(true)}
              className={`flex items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-brand-secondary)] py-[var(--spacing-sm)] ${
                disabled ? 'opacity-50' : ''
              }`}
              style={{ minHeight: '44px' }}
            >
              <Text className="text-[length:var(--text-body)] text-[var(--color-text-onprimary)]">
                {Strings.getLang('reupload')}
              </Text>
            </View>
          </View>
        )}

        {(imageUploadStatus === 'idle' || pickerOpen) && uploadPhase === 'idle' && !disabled && (
          <ImagePickFlow
            onConfirmUpload={startUpload}
            onCancel={() => setPickerOpen(false)}
            processorReady={processorReady}
            processImage={processImage}
            inspectImage={inspectImage}
          />
        )}

        {uploadPhase === 'uploading' && (
          <View className="flex flex-col gap-[var(--spacing-xs)]">
            <Text className="text-[length:var(--text-caption)] text-[var(--color-semantic-info)]">
              {Strings.getLang('uploadProgress')}: {imageUploadProgress}%
            </Text>
            <View className="h-[8px] w-full overflow-hidden rounded-[var(--radius-tag)] bg-[var(--color-surface-surfacesubtle)]">
              <View
                className="h-full bg-[var(--color-semantic-info)]"
                style={{ width: `${imageUploadProgress}%` }}
              />
            </View>
            <Text className="text-[length:var(--text-micro)] text-[var(--color-text-textmuted)]">
              {Strings.getLang('uploadingKeepOnline')}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default ThemeGrid;
