import type { Dictionary } from "@/content";
import { LogoMark } from "./Logo";

type Props = {
  dict: Dictionary;
};

export function SiteFooter({ dict }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-8">
      <div className="container-page flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex items-center gap-2.5 text-sm text-muted">
          <LogoMark className="size-8 shrink-0" title={dict.footer.rights} />
          <span>
            © {year} {dict.footer.rights}. {dict.footer.rightsReserved}
          </span>
        </p>
      </div>
    </footer>
  );
}
