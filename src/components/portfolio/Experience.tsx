import type { Dictionary } from "@/content";
import { Reveal } from "./Reveal";

type Props = {
  dict: Dictionary;
};

export function Experience({ dict }: Props) {
  return (
    <section id="experiencia" className="section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-3">{dict.experience.eyebrow}</p>
          <h2 className="display mb-10 !text-[clamp(2rem,4vw,3.2rem)]">
            {dict.experience.title}
          </h2>
        </Reveal>

        <ol className="relative space-y-6 border-l border-line pl-6 md:pl-8">
          {dict.experience.items.map((item) => (
            <li key={item.org} className="relative">
              <span
                className="absolute -left-[1.91rem] top-2 size-3 rounded-full bg-accent md:-left-[2.41rem]"
                aria-hidden
              />
              <Reveal>
                <article className="surface p-6">
                  <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {item.org}
                      </h3>
                      <p className="text-sm text-accent">{item.role}</p>
                    </div>
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
                      {item.period}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm leading-relaxed text-muted">
                    {item.points.map((point) => (
                      <li key={point} className="max-w-[70ch]">
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
