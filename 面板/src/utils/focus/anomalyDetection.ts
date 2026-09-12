import { isValidCombination, PIECE_NUMBERS, PieceCount, TotalDuration } from './configMatrix';

export type TimerStatus = 'idle' | 'running' | 'completed';
export type UploadStatus = 'idle' | 'receiving' | 'ready' | 'error';
export type ThemeValue = 'pizza' | 'stars' | 'miku' | 'custom';

export interface DeviceSnapshot {
  total_duration: TotalDuration;
  piece_count: PieceCount;
  current_piece: number;
  timer_status: TimerStatus;
  theme: ThemeValue;
  image_upload_status: UploadStatus;
  image_upload_progress: number;
}

export type AnomalyReason =
  | 'completed_mismatch' // DP104=completed 但 current_piece ≠ piece_count
  | 'progress_overflow' // current_piece > piece_count
  | 'theme_not_ready' // theme=custom 但 DP107 ≠ ready
  | 'invalid_combo'; // DP101 与 DP102 形成非法组合

/**
 * 跨 DP 异常检测（锁定，需求第7节）。只做只读判断，不产生任何副作用，
 * 不自行下发 DP 尝试"修正"设备——修复动作完全交给调用方的重同步流程。
 */
export function detectAnomalies(snapshot: DeviceSnapshot): AnomalyReason[] {
  const reasons: AnomalyReason[] = [];
  const pieceTotal = PIECE_NUMBERS[snapshot.piece_count];

  if (snapshot.timer_status === 'completed' && snapshot.current_piece !== pieceTotal) {
    reasons.push('completed_mismatch');
  }
  if (snapshot.current_piece > pieceTotal) {
    reasons.push('progress_overflow');
  }
  if (snapshot.theme === 'custom' && snapshot.image_upload_status !== 'ready') {
    reasons.push('theme_not_ready');
  }
  if (!isValidCombination(snapshot.total_duration, snapshot.piece_count)) {
    reasons.push('invalid_combo');
  }

  return reasons;
}

export function hasAnomalies(snapshot: DeviceSnapshot): boolean {
  return detectAnomalies(snapshot).length > 0;
}
