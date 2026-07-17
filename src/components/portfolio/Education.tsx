import type { Dictionary } from "@/content";
import { Reveal } from "./Reveal";

type Props = {
  dict: Dictionary;
};

export function Education({ dict }: Props) {
  return (
    <section id="formacion" className="section border-y border-line bg-bg-elevated/30">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-3">{dict.education.eyebrow}</p>
          <h2 className="display mb-10 !text-[clamp(2rem,4vw,3.2rem)]">
            {dict.education.title}
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {dict.education.items.map((item) => (
            <Reveal key={item.org}>
              <article className="surface p-6">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
                  {item.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  {item.org}
                </h3>
                <p className="mt-1 text-sm text-accent">{item.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
