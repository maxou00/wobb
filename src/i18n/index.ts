import Lang_EN from "./en.json";

export type Lang = typeof Lang_EN;

export function __tr(code: string, locale = "en"): string {
  return (getLocale(locale) as any)[code] || "";
}

export function getLocale(locale: string): Lang {
  return Lang_EN;
}