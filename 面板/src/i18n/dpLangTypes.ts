import { defaultSchema } from '@/devices/schema';

export type DefaultSchema = typeof defaultSchema;
export type DpCode = DefaultSchema[number]['code'];

/** standarded: 1 的标准 DP code，可使用 getDpLang 获取多语言 */
export type StandardDpCode = Extract<DefaultSchema[number], { standarded: 1 }>['code'];
/** standarded: 0 的自定义 DP code，不可使用 getDpLang */
export type CustomDpCode = Extract<DefaultSchema[number], { standarded: 0 }>['code'];

/**
 * 当传入自定义 DP code 时，类型解析为带有引导信息的字符串字面量，
 * 使 TS 报错直接展示提示文案。
 */
export type EnsureStandardDp<C extends DpCode> = C extends StandardDpCode
  ? C
  : `⚠ "${C &
      string}" 是自定义DP(standarded:0), 不支持getDpLang, 请在 i18n/strings 中手动添加多语言`;

type SchemaItemFor<C extends DpCode> = Extract<DefaultSchema[number], { code: C }>;
type PropertyFor<C extends DpCode> = SchemaItemFor<C>['property'];

/**
 * Second argument of getDpLang, derived from devices/schema defaultSchema property.type.
 * bool → boolean | 'on' | 'off' (SDK maps both to dp_{code}_{on|off}; reject arbitrary strings like 'true').
 */
export type DpLangValueFor<C extends DpCode> = PropertyFor<C> extends { type: 'bool' }
  ? boolean | 'on' | 'off'
  : PropertyFor<C> extends { type: 'enum' }
  ? PropertyFor<C> extends { range: readonly (infer E)[] }
    ? E
    : never
  : PropertyFor<C> extends { type: 'bitmap' }
  ? PropertyFor<C> extends { label: readonly (infer L)[] }
    ? L
    : never
  : PropertyFor<C> extends { type: 'value' }
  ? number | string
  : PropertyFor<C> extends { type: 'string' }
  ? string
  : string;
