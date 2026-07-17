"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import type { Dictionary } from "@/content";
import type { Locale } from "@/lib/i18n";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleSwitcher } from "./LocaleSwitcher";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteHeader({ locale, dict }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: `#perfil`, label: dict.nav.profile },
    { href: `#stack`, label: dict.nav.stack },
    { href: `#experiencia`, label: dict.nav.experience },
    { href: `#proyectos`, label: dict.nav.projects },
    { href: `#contacto`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href={`/${locale}`}
          className="focus-ring font-display text-lg font-bold tracking-tight"
        >
          {dict.hero.brand}
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher locale={locale} dict={dict} />
          <ThemeToggle dict={dict} />
          <button
            type="button"
            className="focus-ring btn btn-secondary !min-h-10 !px-3 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X size={20} weight="bold" aria-hidden />
            ) : (
              <List size={20} weight="bold" aria-hidden />
            )}
            <span className="sr-only">
              {open ? dict.nav.closeMenu : dict.nav.openMenu}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-bg px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="focus-ring block rounded-xl px-3 py-3 text-base hover:bg-accent-soft"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
