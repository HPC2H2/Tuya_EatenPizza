import React, { useMemo } from 'react';
import { View } from '@ray-js/ray';

interface SegmentedRingProps {
  /** 总段数（1/3/5/6/9） */
  total: number;
  /** 已完成段数 */
  filled: number;
  /** 环直径，默认 240px */
  size?: number;
  className?: string;
  children?: React.ReactNode;
}

/**
 * 纯展示型分段进度环，用 conic-gradient 背景实现，不依赖 canvas。
 * 段数动态生成（1/3/5/6/9），每段之间留出 gap 角度，已完成段用 accent 色，未完成段用 track 色。
 */
export function SegmentedRing({ total, filled, size = 240, className = '', children }: SegmentedRingProps) {
  const gradient = useMemo(() => {
    const safeTotal = Math.max(1, total);
    const safeFilled = Math.max(0, Math.min(filled, safeTotal));
    const gapDeg = safeTotal > 1 ? 4 : 0;
    const segDeg = 360 / safeTotal;

    const stops: string[] = [];
    for (let i = 0; i < safeTotal; i++) {
      const start = i * segDeg;
      const end = start + segDeg - gapDeg;
      const color = i < safeFilled ? 'var(--color-brand-accent)' : 'var(--color-surface-divider)';
      stops.push(`${color} ${start}deg ${end}deg`);
      stops.push(`transparent ${end}deg ${start + segDeg}deg`);
    }
    return `conic-gradient(${stops.join(', ')})`;
  }, [total, filled]);

  return (
    <View
      className={`relative flex items-center justify-center rounded-[999px] ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: gradient,
      }}
    >
      <View
        className="absolute flex flex-col items-center justify-center rounded-[999px] bg-[var(--color-surface-background)]"
        style={{ width: `${size - 28}px`, height: `${size - 28}px` }}
      >
        {children}
      </View>
    </View>
  );
}

export default SegmentedRing;
