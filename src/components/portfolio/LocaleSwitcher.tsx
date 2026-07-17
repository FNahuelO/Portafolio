"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Dictionary } from "@/content";
import { locales, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

function persistLocale(next: Locale) {
  if (!globalThis.document) return;
  globalThis.document.cookie = `locale=${next};path=/;max-age=31536000;samesite=lax`;
}

export function LocaleSwitcher({ locale, dict }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(next: Locale) {
    persistLocale(next);
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || `/${next}`);
  }

  return (
    <div
      className="inline-flex rounded-full border border-line p-1"
      role="group"
      aria-label={dict.locale.label}
    >
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          className={`focus-ring rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
            item === locale
              ? "bg-accent text-accent-fg"
              : "text-muted hover:text-fg"
          }`}
          aria-pressed={item === locale}
          onClick={() => switchTo(item)}
        >
          {item === "es" ? dict.locale.es : dict.locale.en}
        </button>
      ))}
    </div>
  );
}
