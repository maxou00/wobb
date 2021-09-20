import Lang_EN from "./en.json";

export type Lang = typeof Lang_EN;

export function __tr(code: string, locale = "en"): string {
  return (getLocale(locale) as any)[code] || "";
}

export function __trParams(code: string, params: {[key: string]: any} = {}, locale = "en"): string {
  let resource: string = __tr(code);
  for(let key in params) {
    resource = resource.replace(`{{${key}}}`, params[key])
  }
  return resource;
}

export function getLocale(locale: string): Lang {
  return Lang_EN;
}