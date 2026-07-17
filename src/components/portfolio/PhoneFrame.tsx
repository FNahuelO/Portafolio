import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PhoneFrame({ children }: Props) {
  return (
    <div className="mx-auto w-full max-w-[260px]">
      <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-frame bg-bg shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
        <div className="absolute left-1/2 top-2 z-10 h-4 w-24 -translate-x-1/2 rounded-full bg-frame/80" />
        <div className="relative aspect-[9/17] bg-[linear-gradient(160deg,color-mix(in_oklab,var(--accent-soft),transparent),var(--bg))] pt-6">
          {children}
        </div>
      </div>
    </div>
  );
}
