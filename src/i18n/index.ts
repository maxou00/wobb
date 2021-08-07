 import Lang_EN from "./en.json";

 export type Lang = typeof Lang_EN;
 
 export function __tr(code: keyof Lang, locale="en") {
    return getLocale(locale)[code];
 }

 export function getLocale(locale: string): Lang {
    return Lang_EN;
 }