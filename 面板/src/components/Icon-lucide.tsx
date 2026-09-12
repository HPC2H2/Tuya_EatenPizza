import React, { useMemo } from 'react';
import { SvgRender } from '@ray-js/ray';
import {
  AirVent,
  Atom,
  Bed,
  Bluetooth,
  BookOpen,
  CalendarClock,
  ChartColumn,
  ChartLine,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
  CircleAlert,
  CircleHelp,
  Clock,
  Droplets,
  Ellipsis,
  Fan,
  Flame,
  Hand,
  HeartPulse,
  Heater,
  Home,
  Layers,
  LayoutGrid,
  Leaf,
  Lightbulb,
  Link,
  Lock,
  Logs,
  MemoryStick,
  Menu,
  Minus,
  Monitor,
  Moon,
  MoveHorizontal,
  MoveVertical,
  Music2,
  Palmtree,
  Pause,
  Pencil,
  Play,
  Plus,
  Power,
  Radar,
  RefreshCw,
  RotateCcw,
  RotateCw,
  Save,
  ScanEye,
  Settings,
  Settings2,
  Signal,
  SignalHigh,
  SignalLow,
  SignalMedium,
  SignalZero,
  SlidersHorizontal,
  Snowflake,
  Sofa,
  Sparkles,
  Sun,
  SunDim,
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
  Timer,
  Trash2,
  TriangleAlert,
  Undo2,
  VolumeX,
  Waves,
  Wifi,
  Wind,
  X,
  Zap,
  type IconNode,
} from 'lucide';

// 使用表中没有的图标:先在上方 import 加具名导入,再在本表挂同名条目,两处缺一即编译失败。
// 禁止以命名空间导入或动态索引规避登记:tree-shake 失效,2003 个图标会全部进包。
const ICONS = {
  AirVent,
  Atom,
  Bed,
  Bluetooth,
  BookOpen,
  CalendarClock,
  ChartColumn,
  ChartLine,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
  CircleAlert,
  CircleHelp,
  Clock,
  Droplets,
  Ellipsis,
  Fan,
  Flame,
  Hand,
  HeartPulse,
  Heater,
  Home,
  Layers,
  LayoutGrid,
  Leaf,
  Lightbulb,
  Link,
  Lock,
  Logs,
  MemoryStick,
  Menu,
  Minus,
  Monitor,
  Moon,
  MoveHorizontal,
  MoveVertical,
  Music2,
  Palmtree,
  Pause,
  Pencil,
  Play,
  Plus,
  Power,
  Radar,
  RefreshCw,
  RotateCcw,
  RotateCw,
  Save,
  ScanEye,
  Settings,
  Settings2,
  Signal,
  SignalHigh,
  SignalLow,
  SignalMedium,
  SignalZero,
  SlidersHorizontal,
  Snowflake,
  Sofa,
  Sparkles,
  Sun,
  SunDim,
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
  Timer,
  Trash2,
  TriangleAlert,
  Undo2,
  VolumeX,
  Waves,
  Wifi,
  Wind,
  X,
  Zap,
} satisfies Record<string, IconNode>;

type LucideIconName = keyof typeof ICONS;

interface IconLucideProps {
  name: LucideIconName;
  className?: string;
  style?: React.CSSProperties;
  size?: number | string;
  strokeWidth?: number | string;
  color?: string;
}

function toPx(value: string | number | undefined): string | undefined {
  if (value == null) return undefined;
  return typeof value === 'number' ? `${value}px` : value;
}

function getLucideSVG(name: LucideIconName, attrs: Record<string, string | number>): string {
  const nodes = ICONS[name] as IconNode | undefined;
  if (!Array.isArray(nodes)) return '';

  const attrEntries: Record<string, string | number> = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    ...attrs,
  };

  const attrStr = Object.entries(attrEntries)
    .map(([k, v]) => `${k}="${v}"`)
    .join(' ');

  const children = nodes
    .map(([tag, nodeAttrs]) => {
      const nodeAttrStr = Object.entries(nodeAttrs)
        .map(([k, v]) => `${k}="${v}"`)
        .join(' ');
      return `<${tag} ${nodeAttrStr}/>`;
    })
    .join('');

  return `<svg ${attrStr}>${children}</svg>`;
}

export const IconLucide: React.FC<IconLucideProps> = ({
  name,
  className,
  style,
  size,
  strokeWidth,
  color,
}) => {
  const svgString = useMemo(() => {
    const attrs: Record<string, string | number> = {};

    const resolvedSize = size ?? style?.width ?? style?.height;
    const resolvedColor = color ?? style?.color;
    const resolvedStrokeWidth = strokeWidth;

    // svg 活在 v-svg-render 的 shadow DOM 里,看不到宿主 class/style 的尺寸,只能自己撑满宿主;
    // 写 100% 而不是原值——rpx/rem 这类单位 svg 属性不认(会刷 `Expected length, "64rpx"`)。
    if (resolvedSize != null) {
      attrs.width = '100%';
      attrs.height = '100%';
    }
    if (resolvedColor != null) attrs.stroke = String(resolvedColor);
    if (resolvedStrokeWidth != null) attrs['stroke-width'] = resolvedStrokeWidth;

    return getLucideSVG(name, attrs);
  }, [name, size, strokeWidth, color, style?.width, style?.height, style?.color]);

  if (!Array.isArray(ICONS[name])) {
    console.warn(`[IconLucide] Icon "${String(name)}" not found in lucide.`);
    return null;
  }

  const resolvedSize = size ?? style?.width ?? style?.height;
  const renderStyle: React.CSSProperties = {
    ...style,
    ...(resolvedSize != null
      ? { width: toPx(resolvedSize as any), height: toPx(resolvedSize as any) }
      : {}),
  };

  return <SvgRender source={svgString} className={className} style={renderStyle} />;
};
