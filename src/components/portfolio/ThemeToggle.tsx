"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import type { Dictionary } from "@/content";
import { useTheme } from "@/lib/theme";

type Props = {
  dict: Dictionary;
};

export function ThemeToggle({ dict }: Props) {
  const { theme, toggleTheme } = useTheme();
  const label = theme === "dark" ? dict.theme.light : dict.theme.dark;

  return (
    <button
      type="button"
      className="focus-ring btn btn-secondary !min-h-10 !px-3"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {theme === "dark" ? (
        <Sun size={18} weight="bold" aria-hidden />
      ) : (
        <Moon size={18} weight="bold" aria-hidden />
      )}
    </button>
  );
}
