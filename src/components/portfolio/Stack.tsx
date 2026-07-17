import type { Dictionary } from "@/content";
import { Reveal } from "./Reveal";

type Props = {
  dict: Dictionary;
};

export function Stack({ dict }: Props) {
  return (
    <section id="stack" className="section border-y border-line bg-bg-elevated/30">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-3">{dict.stack.eyebrow}</p>
          <h2 className="display mb-10 !text-[clamp(2rem,4vw,3.2rem)]">
            {dict.stack.title}
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {dict.stack.groups.map((group) => (
            <Reveal key={group.title}>
              <article className="surface h-full p-6">
                <h3 className="mb-4 text-xl font-semibold tracking-tight">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-bg/50 px-3 py-1.5 font-mono text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
