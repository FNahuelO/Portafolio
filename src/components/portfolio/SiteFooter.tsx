import type { Dictionary } from "@/content";

type Props = {
  dict: Dictionary;
};

export function SiteFooter({ dict }: Props) {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-page flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {dict.footer.rights}
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.14em]">
          {dict.footer.note}
        </p>
      </div>
    </footer>
  );
}
