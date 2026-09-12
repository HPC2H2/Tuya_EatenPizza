import { kit } from '@ray-js/panel-sdk';
import strings from './strings';
import type { DpCode, DpLangValueFor, EnsureStandardDp } from './dpLangTypes';

const { I18N } = kit;

type RawPanelI18n = InstanceType<typeof I18N>;

/** 用 schema 推导的签名完全覆盖 SDK 里宽松的 getDpLang（避免与 I18N 的 `[x: string]: any` 混在一起后仍按 string 放行） */
type TypedGetDpLang = {
  <C extends DpCode>(code: EnsureStandardDp<C>, value: DpLangValueFor<C>): string;
  <C extends DpCode>(code: EnsureStandardDp<C>): string;
};

type Overwrite<T, U> = Omit<T, keyof U> & U;

export type PanelStrings = Overwrite<RawPanelI18n, { getDpLang: TypedGetDpLang }>;

const rawStrings = new I18N(strings);
/** 必须在 Object.assign 覆盖实例方法之前绑定，否则 rawStrings.getDpLang 会指向包装函数自身导致栈溢出 */
const nativeGetDpLang = rawStrings.getDpLang.bind(rawStrings);

function getDpLang<C extends DpCode>(code: EnsureStandardDp<C>, value: DpLangValueFor<C>): string;
function getDpLang<C extends DpCode>(code: EnsureStandardDp<C>): string;
function getDpLang(code: DpCode | string | number, value?: unknown): string {
  return nativeGetDpLang(code as string | number, value as boolean | string | undefined);
}

const Strings = Object.assign(rawStrings, { getDpLang }) as PanelStrings;

export default Strings;
export type { DpCode, StandardDpCode, CustomDpCode, DpLangValueFor } from './dpLangTypes';
