/**
 * 合法配置矩阵：total_duration × piece_count 允许组合（锁定，来自需求第5节）。
 * 顺序与 schema 枚举顺序一致，不做增删。
 */
export type TotalDuration = 'min_15' | 'min_30' | 'min_45' | 'min_60' | 'min_90';
export type PieceCount = 'piece_1' | 'piece_3' | 'piece_5' | 'piece_6' | 'piece_9';

export const TOTAL_DURATION_RANGE: TotalDuration[] = [
  'min_15',
  'min_30',
  'min_45',
  'min_60',
  'min_90',
];

export const PIECE_COUNT_RANGE: PieceCount[] = ['piece_1', 'piece_3', 'piece_5', 'piece_6', 'piece_9'];

/** 每个 duration 允许的 piece_count 集合 */
export const ALLOWED_COMBINATIONS: Record<TotalDuration, PieceCount[]> = {
  min_15: ['piece_1', 'piece_3', 'piece_5'],
  min_30: ['piece_1', 'piece_3', 'piece_5', 'piece_6'],
  min_45: ['piece_1', 'piece_3', 'piece_5', 'piece_9'],
  min_60: ['piece_1', 'piece_3', 'piece_5', 'piece_6'],
  min_90: ['piece_1', 'piece_3', 'piece_5', 'piece_6', 'piece_9'],
};

/** 分钟数映射（用于计算每块分钟数） */
export const DURATION_MINUTES: Record<TotalDuration, number> = {
  min_15: 15,
  min_30: 30,
  min_45: 45,
  min_60: 60,
  min_90: 90,
};

/** 块数映射 */
export const PIECE_NUMBERS: Record<PieceCount, number> = {
  piece_1: 1,
  piece_3: 3,
  piece_5: 5,
  piece_6: 6,
  piece_9: 9,
};

/** 判断 (duration, piece) 组合是否在允许矩阵内 */
export function isValidCombination(duration: TotalDuration, piece: PieceCount): boolean {
  const allowed = ALLOWED_COMBINATIONS[duration];
  return Array.isArray(allowed) && allowed.includes(piece);
}

/** 计算每块分钟数：分钟数 / 块数，四舍五入到整数（需求第5.2节列出的均为整数结果） */
export function computeMinutesPerPiece(duration: TotalDuration, piece: PieceCount): number {
  const totalMinutes = DURATION_MINUTES[duration];
  const pieceNum = PIECE_NUMBERS[piece];
  if (!totalMinutes || !pieceNum) return 0;
  return Math.round(totalMinutes / pieceNum);
}

/** 给定 duration，返回其允许的 piece_count 选项列表（用于动态约束 UI） */
export function getAllowedPieceOptions(duration: TotalDuration): PieceCount[] {
  return ALLOWED_COMBINATIONS[duration] || [];
}
