import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  chooseImage,
  getFileSystemManager,
  getImageInfo,
  showToast,
} from '@ray-js/ray';
import Strings from '@/i18n';
import { ImageProcessResult, ProcessImage } from '@/utils/focus/imageProcessor';

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
const MIN_DIMENSION = 400;
const MAX_DIMENSION = 4096;
const SUPPORTED_EXT = ['jpg', 'jpeg', 'png', 'webp'];
const CANVAS_ID = 'focus-image-process-canvas';

export type PickFlowStep = 'idle' | 'confirming' | 'previewing' | 'processing';

interface PickedImageMeta {
  tempFilePath: string;
  width: number;
  height: number;
}

interface ImagePickFlowProps {
  onConfirmUpload: (bytes: Uint8Array) => void;
  onCancel: () => void;
  processorReady: boolean;
  processImage: ProcessImage;
  inspectImage: (src: string) => Promise<ImageDimensions>;
}

interface ImageDimensions {
  width: number;
  height: number;
  type?: string;
}

function getExtension(path: string): string {
  const match = /\.([a-zA-Z0-9]+)(\?.*)?$/.exec(path);
  return match ? match[1].toLowerCase() : '';
}

/**
 * 真机与部分开发工具版本会在临时 PNG 路径上错误地触发 getImageInfo.fail。
 * PNG 的 IHDR 固定保存宽高，先直接读取文件头可避免把合法 400×400 图片误报为尺寸错误。
 */
function readPngDimensions(filePath: string): Promise<ImageDimensions | null> {
  return new Promise(resolve => {
    getFileSystemManager().readFile({
      filePath,
      encoding: 'base64',
      success: ({ data }) => {
        if (typeof data !== 'string') {
          resolve(null);
          return;
        }
        const encoded = data.includes(',') ? data.slice(data.indexOf(',') + 1) : data;
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        const bytes: number[] = [];
        let buffer = 0;
        let bits = 0;
        for (let i = 0; i < encoded.length && bytes.length < 24; i += 1) {
          const char = encoded[i];
          if (char === '=') break;
          const value = alphabet.indexOf(char);
          if (value < 0) continue;
          buffer = buffer * 64 + value;
          bits += 6;
          if (bits >= 8) {
            bits -= 8;
            bytes.push(Math.floor(buffer / 2 ** bits) & 0xff);
            buffer %= 2 ** bits;
          }
        }
        if (bytes.length < 24) {
          resolve(null);
          return;
        }
        const byte = (index: number) => bytes[index];
        const isPng =
          byte(0) === 0x89 &&
          byte(1) === 0x50 &&
          byte(2) === 0x4e &&
          byte(3) === 0x47 &&
          byte(12) === 0x49 &&
          byte(13) === 0x48 &&
          byte(14) === 0x44 &&
          byte(15) === 0x52;
        if (!isPng) {
          resolve(null);
          return;
        }
        const uint32be = (offset: number) =>
          byte(offset) * 0x1000000 +
          byte(offset + 1) * 0x10000 +
          byte(offset + 2) * 0x100 +
          byte(offset + 3);
        resolve({ width: uint32be(16), height: uint32be(20), type: 'png' });
      },
      fail: () => resolve(null),
    });
  });
}

async function readImageDimensions(filePath: string): Promise<ImageDimensions> {
  const pngDimensions = await readPngDimensions(filePath);
  if (pngDimensions) return pngDimensions;
  return new Promise((resolve, reject) => {
    getImageInfo({
      src: filePath,
      success: info => resolve({ width: info.width, height: info.height, type: info.type }),
      fail: reject,
    });
  });
}

export function ImagePickFlow({
  onConfirmUpload,
  onCancel,
  processorReady,
  processImage,
  inspectImage,
}: ImagePickFlowProps) {
  const [step, setStep] = useState<PickFlowStep>('idle');
  const [picked, setPicked] = useState<PickedImageMeta | null>(null);
  const [processed, setProcessed] = useState<ImageProcessResult | null>(null);
  const canvasProps = {
    id: CANVAS_ID,
    'canvas-id': CANVAS_ID,
    type: '2d',
    style: {
      width: '100%',
      height: step === 'previewing' || step === 'processing' ? '320px' : '1px',
      opacity: step === 'previewing' || step === 'processing' ? 1 : 0,
    },
  } as any;

  const reset = () => {
    setStep('idle');
    setPicked(null);
    setProcessed(null);
    onCancel();
  };

  const handleChoose = () => {
    chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: data => {
        const fileInfo = data.tempFiles?.[0];
        // Tuya 真机和模拟器返回的两个临时路径并不总是等价：
        // tempFilePaths[0] 可能是 UI 代理地址，而 tempFiles[0].path 才是
        // getImageInfo、文件系统和 RJS Canvas 能读取的真实临时文件。
        const candidatePaths = [fileInfo?.path, ...(data.tempFilePaths || [])].filter(
          (path, index, paths): path is string =>
            typeof path === 'string' && path.length > 0 && paths.indexOf(path) === index
        );
        if (candidatePaths.length === 0) {
          showToast({ title: Strings.getLang('imageInfoReadFailed'), icon: 'none' });
          return;
        }

        if (fileInfo?.size && fileInfo.size > MAX_FILE_SIZE_BYTES) {
          showToast({ title: Strings.getLang('imageTooLarge'), icon: 'none' });
          return;
        }

        const acceptDimensions = (tempFilePath: string, info: ImageDimensions) => {
            const ext = getExtension(tempFilePath);
            const detectedType = (info.type || ext).toLowerCase();
            if (detectedType && !SUPPORTED_EXT.includes(detectedType)) {
              showToast({ title: Strings.getLang('imageFormatUnsupported'), icon: 'none' });
              return;
            }
            const validSquare =
              Number.isFinite(info.width) &&
              Number.isFinite(info.height) &&
              info.width === info.height &&
              info.width >= MIN_DIMENSION &&
              info.width <= MAX_DIMENSION;
            if (!validSquare) {
              showToast({
                title: `${Math.round(info.width)}×${Math.round(info.height)} px: ${Strings.getLang(
                  'imageSizeInvalid'
                )}`,
                icon: 'none',
              });
              return;
            }
            setPicked({ tempFilePath, width: info.width, height: info.height });
            setProcessed(null);
            setStep('confirming');
        };

        // 逐一尝试涂鸦返回的真实路径和兼容路径。优先使用最终执行六色量化的
        // RJS 解码器；仅当 RJS 暂不可用或无法读取时，才退回 PNG 文件头/getImageInfo。
        const inspectCandidates = async () => {
          let lastError: unknown;
          for (const candidatePath of candidatePaths) {
            const ext = getExtension(candidatePath);
            if (ext && !SUPPORTED_EXT.includes(ext)) continue;
            try {
              const dimensions = processorReady
                ? await inspectImage(candidatePath).catch(() => readImageDimensions(candidatePath))
                : await readImageDimensions(candidatePath);
              return { tempFilePath: candidatePath, dimensions };
            } catch (error) {
              lastError = error;
            }
          }
          throw lastError || new Error('No readable image path returned by chooseImage');
        };

        inspectCandidates()
          .then(({ tempFilePath, dimensions }) => acceptDimensions(tempFilePath, dimensions))
          .catch(() => {
            showToast({ title: Strings.getLang('imageInfoReadFailed'), icon: 'none' });
          });
      },
    });
  };

  const handleCreatePreview = async () => {
    if (!picked || !processorReady) {
      showToast({ title: Strings.getLang('processorNotReady'), icon: 'none' });
      return;
    }
    setStep('processing');
    try {
      const result = await processImage({
        tempFilePath: picked.tempFilePath,
        originalWidth: picked.width,
        originalHeight: picked.height,
        cropRect: { x: 0, y: 0, size: picked.width },
      });
      setProcessed(result);
      setStep('previewing');
    } catch (_error) {
      showToast({ title: Strings.getLang('imageProcessFailed'), icon: 'none' });
      setStep('confirming');
    }
  };

  return (
    <View className="flex flex-col gap-[var(--spacing-sm)]">
      {step === 'idle' && (
        <View
          onClick={handleChoose}
          className="flex items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-surface-divider)] py-[var(--spacing-sm)]"
          style={{ minHeight: '44px' }}
        >
          <Text className="text-[length:var(--text-body)] text-[var(--color-brand-secondary)]">
            {Strings.getLang('chooseImage')}
          </Text>
        </View>
      )}

      <canvas {...canvasProps} />

      {step === 'confirming' && picked && (
        <View className="flex flex-col gap-[var(--spacing-sm)]">
          <Text className="text-[length:var(--text-caption)] text-[var(--color-text-textsecondary)]">
            {Strings.getLang('confirmSquareImage')}
          </Text>
          <Image
            src={picked.tempFilePath}
            mode="aspectFit"
            className="w-full rounded-[var(--radius-card)]"
            style={{ height: '240px' }}
          />
          <View
            onClick={handleCreatePreview}
            className="flex items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-brand-secondary)] py-[var(--spacing-sm)]"
            style={{ minHeight: '44px' }}
          >
            <Text className="text-[length:var(--text-body)] text-[var(--color-text-onprimary)]">
              {Strings.getLang('createSixColorPreview')}
            </Text>
          </View>
        </View>
      )}

      {(step === 'previewing' || step === 'processing') && picked && (
        <View className="flex flex-col gap-[var(--spacing-sm)]">
          <Text className="text-[length:var(--text-caption)] text-[var(--color-text-textsecondary)]">
            {step === 'processing' ? Strings.getLang('processingImage') : Strings.getLang('sixColorPreview')}
          </Text>
          <View
            onClick={() => processed && step !== 'processing' && onConfirmUpload(processed.packedBytes)}
            className={`flex items-center justify-center rounded-[var(--radius-button)] py-[var(--spacing-sm)] ${
              processed && step !== 'processing'
                ? 'bg-[var(--color-brand-primary)]'
                : 'bg-[var(--color-surface-surfacesubtle)]'
            }`}
            style={{ minHeight: '44px' }}
          >
            <Text
              className={`text-[length:var(--text-body)] ${
                processed && step !== 'processing'
                  ? 'text-[var(--color-text-onprimary)]'
                  : 'text-[var(--color-text-textmuted)]'
              }`}
            >
              {step === 'processing' ? Strings.getLang('loading') : Strings.getLang('confirmUpload')}
            </Text>
          </View>
          <View
            onClick={reset}
            className="flex items-center justify-center rounded-[var(--radius-button)] py-[var(--spacing-sm)]"
            style={{ minHeight: '44px' }}
          >
            <Text className="text-[length:var(--text-body)] text-[var(--color-text-textmuted)]">
              {Strings.getLang('reselect')}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

export default ImagePickFlow;
