import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  urlLabel?: string;
};

export function BrowserFrame({ children, urlLabel = "app.local" }: Props) {
  return (
    <div className="overflow-hidden rounded-[1.1rem] border border-line bg-bg shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
      <div className="flex items-center gap-2 border-b border-line bg-bg-elevated px-3 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="size-2.5 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="size-2.5 rounded-full bg-[#28c840]" aria-hidden />
        <span className="ml-2 truncate rounded-md bg-bg px-2 py-1 font-mono text-[10px] text-muted">
          {urlLabel}
        </span>
      </div>
      <div className="relative aspect-[16/10] bg-[linear-gradient(145deg,color-mix(in_oklab,var(--accent-soft),transparent),var(--bg))]">
        {children}
      </div>
    </div>
  );
}
