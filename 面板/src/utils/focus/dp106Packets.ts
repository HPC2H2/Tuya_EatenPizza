/**
 * DP106 自定义图片分包协议（锁定，需求第11/12节）。
 *
 * 每包格式：
 *   字节0~3:  ASCII "EPZ1"
 *   字节4~7:  offset, uint32 little-endian
 *   字节8~11: total, uint32 little-endian，固定 80000
 *   字节12起: 图片载荷
 *
 * 固定分包：
 *   协议头 12 字节
 *   前 689 包载荷 116 字节，每包总长 128 字节
 *   最后一包 offset=79924，载荷 76 字节，总长 88 字节
 *   总计 690 包，严格串行、不重叠、不乱序
 */

export const MAGIC = 'EPZ1';
export const HEADER_LEN = 12;
export const MAX_PACKET_LEN = 128;
export const PAYLOAD_LEN_NORMAL = 116;
export const TOTAL_IMAGE_BYTES = 80000;
export const PACKET_COUNT = 690;
export const LAST_PACKET_OFFSET = 79924;
export const LAST_PACKET_PAYLOAD_LEN = 76;

export interface Dp106Packet {
  /** 包序号，从 0 开始 */
  index: number;
  /** 本包在整张图片数据中的偏移量 */
  offset: number;
  /** 本包载荷长度（字节） */
  payloadLength: number;
  /** 本包总长度（协议头 + 载荷） */
  totalLength: number;
  /** 本包二进制数据（Uint8Array），可直接用于下发 */
  bytes: Uint8Array;
}

function writeUint32LE(view: DataView, offset: number, value: number) {
  view.setUint8(offset, value & 0xff);
  view.setUint8(offset + 1, (value >>> 8) & 0xff);
  view.setUint8(offset + 2, (value >>> 16) & 0xff);
  view.setUint8(offset + 3, (value >>> 24) & 0xff);
}

function writeAsciiMagic(view: DataView) {
  for (let i = 0; i < MAGIC.length; i++) {
    view.setUint8(i, MAGIC.charCodeAt(i));
  }
}

/**
 * 将固定 80000 字节的六色像素数据，切分成 690 个严格递增、互不重叠的二进制分包。
 * @param imageBytes 长度必须严格等于 TOTAL_IMAGE_BYTES（80000）的二进制数据
 * @throws 长度不为 80000 时抛出错误，绝不静默截断/补齐/伪造数据
 */
export function buildDp106Packets(imageBytes: Uint8Array): Dp106Packet[] {
  if (imageBytes.length !== TOTAL_IMAGE_BYTES) {
    throw new Error(
      `[Dp106] invalid image byte length: expected ${TOTAL_IMAGE_BYTES}, got ${imageBytes.length}`
    );
  }

  const packets: Dp106Packet[] = [];
  let offset = 0;
  let index = 0;

  while (offset < TOTAL_IMAGE_BYTES) {
    const remaining = TOTAL_IMAGE_BYTES - offset;
    const payloadLength = Math.min(PAYLOAD_LEN_NORMAL, remaining);
    const totalLength = HEADER_LEN + payloadLength;

    const buffer = new ArrayBuffer(totalLength);
    const view = new DataView(buffer);
    const bytes = new Uint8Array(buffer);

    writeAsciiMagic(view);
    writeUint32LE(view, 4, offset);
    writeUint32LE(view, 8, TOTAL_IMAGE_BYTES);
    bytes.set(imageBytes.subarray(offset, offset + payloadLength), HEADER_LEN);

    packets.push({ index, offset, payloadLength, totalLength, bytes });

    offset += payloadLength;
    index += 1;
  }

  return packets;
}

/** 校验一组分包是否满足协议锁定的固定分包规格（自检用，不用于运行时容错） */
export function assertDp106PacketPlan(packets: Dp106Packet[]) {
  if (packets.length !== PACKET_COUNT) {
    throw new Error(`[Dp106] expected ${PACKET_COUNT} packets, got ${packets.length}`);
  }
  const last = packets[packets.length - 1];
  if (last.offset !== LAST_PACKET_OFFSET || last.payloadLength !== LAST_PACKET_PAYLOAD_LEN) {
    throw new Error('[Dp106] last packet does not match locked spec');
  }
}

/**
 * raw 类型 DP 在普通 DP action 链路上以十六进制字符串收发（SDK 不会自动转二进制），
 * 因此每个二进制分包下发前必须转换为 hex 字符串，禁止发送 Base64 文本或裸二进制对象给 actions.custom_image.set。
 */
export function bytesToHex(bytes: Uint8Array): string {
  let hex = '';
  for (let i = 0; i < bytes.length; i++) {
    hex += bytes[i].toString(16).padStart(2, '0');
  }
  return hex;
}
