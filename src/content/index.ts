import { es } from "./es";
import { en } from "./en";
import type { Locale } from "@/lib/i18n";

export function getDictionary(locale: Locale) {
  return locale === "en" ? en : es;
}

export type { Dictionary } from "./es";
