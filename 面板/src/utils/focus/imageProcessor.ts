/** 图像处理模块契约。真实实现位于首页同级 RJS 渲染脚本中。 */

/** 六色量化色表（色码 → RGB），锁定，需求第11节 */
export const SIX_COLOR_PALETTE: Record<number, [number, number, number]> = {
  0: [0, 0, 0], // 黑
  1: [255, 255, 255], // 白
  2: [255, 220, 0], // 黄
  3: [220, 30, 35], // 红
  5: [30, 85, 180], // 蓝
  6: [40, 145, 70], // 绿
};

export const TARGET_SIZE = 400;
export const TOTAL_IMAGE_BYTES = 80000; // 400*400/2（每字节2像素）

export interface ImageProcessInput {
  /** chooseImage 返回的本地临时文件路径 */
  tempFilePath: string;
  /** 原图宽度（像素），来自 getImageInfo */
  originalWidth: number;
  /** 原图高度（像素），来自 getImageInfo */
  originalHeight: number;
  /** 用户在裁剪框中选择的正方形裁剪区域（相对原图像素坐标），非正方形图片必须先经过裁剪交互得到 */
  cropRect: { x: number; y: number; size: number };
}

export interface ImageProcessResult {
  /** 严格等于 400 */
  width: 400;
  /** 严格等于 400 */
  height: 400;
  /** 量化后用于 UI 预览展示的图片资源（如临时文件路径或 dataURL，供 <Image> 展示六色预览效果） */
  previewSrc: string;
  /** 最终按第11节打包规则生成的二进制数据，长度严格等于 TOTAL_IMAGE_BYTES（80000） */
  packedBytes: Uint8Array;
}

/**
 * 图像处理器接口：选图→EXIF校正→裁剪→合成→缩放→量化→打包 的完整流水线契约。
 * 真实实现必须：
 *  1. 自动处理 EXIF 旋转
 *  2. 非正方形按 cropRect 裁剪为 1:1
 *  3. 透明像素与白色背景合成
 *  4. 缩放为 400×400，圆形有效区域外填充白色
 *  5. 按 SIX_COLOR_PALETTE 做逐像素欧氏距离最近色量化
 *  6. 按需求第11节打包规则输出严格 80000 字节的二进制数据（高4位=左侧偶数x，低4位=右侧奇数x）
 * 未接入真实像素处理能力（canvas/RJS）前，禁止返回任何伪造数据——必须 reject。
 */
export type ProcessImage = (input: ImageProcessInput) => Promise<ImageProcessResult>;

/** 将 RJS 返回的十六进制像素数据转成 DP106 分包器使用的真实字节。 */
export function packedHexToBytes(packedHex: string): Uint8Array {
  if (typeof packedHex !== 'string' || packedHex.length !== TOTAL_IMAGE_BYTES * 2) {
    throw new Error(
      `[ImageProcessor] invalid packed image length: expected ${TOTAL_IMAGE_BYTES * 2} hex chars`
    );
  }
  const bytes = new Uint8Array(TOTAL_IMAGE_BYTES);
  for (let i = 0; i < TOTAL_IMAGE_BYTES; i += 1) {
    const value = Number.parseInt(packedHex.slice(i * 2, i * 2 + 2), 16);
    if (!Number.isFinite(value)) throw new Error('[ImageProcessor] invalid packed image data');
    bytes[i] = value;
  }
  return bytes;
}
