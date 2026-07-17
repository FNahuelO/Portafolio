import type { Dictionary } from "@/content";
import { LogoMark } from "./Logo";

type Props = {
  dict: Dictionary;
};

export function SiteFooter({ dict }: Props) {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-page flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex items-center gap-2.5">
          <LogoMark className="size-7" title={dict.footer.rights} />
          <span>
            © {new Date().getFullYear()} {dict.footer.rights}
          </span>
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.14em]">
          {dict.footer.note}
        </p>
      </div>
    </footer>
  );
}
