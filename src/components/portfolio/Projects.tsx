"use client";

import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import type { Dictionary } from "@/content";
import type { Locale } from "@/lib/i18n";
import { BrowserFrame } from "./BrowserFrame";
import { PhoneFrame } from "./PhoneFrame";
import { Reveal } from "./Reveal";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

function ProjectPreview({
  title,
  category,
  stack,
}: {
  title: string;
  category: string;
  stack: string[];
}) {
  return (
    <div className="flex h-full flex-col justify-between p-5">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
          {category}
        </p>
        <p className="mt-2 text-lg font-semibold tracking-tight text-fg">
          {title}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {stack.slice(0, 4).map((item) => (
          <span
            key={item}
            className="rounded-full border border-line/80 bg-bg-elevated/70 px-2 py-0.5 font-mono text-[10px] text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Projects({ locale, dict }: Props) {
  return (
    <section id="proyectos" className="section border-y border-line bg-bg-elevated/30">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-3">{dict.projects.eyebrow}</p>
          <h2 className="display mb-3 !text-[clamp(2rem,4vw,3.2rem)]">
            {dict.projects.title}
          </h2>
          <p className="lead mb-10">{dict.projects.subtitle}</p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {dict.projects.items.map((project) => {
            const title = project.title[locale];
            const description = project.description[locale];
            const category = project.category[locale];
            const preview = (
              <ProjectPreview
                title={title}
                category={category}
                stack={project.stack}
              />
            );

            return (
              <Reveal key={project.id}>
                <article className="grid gap-5">
                  {project.frame === "phone" ? (
                    <PhoneFrame>{preview}</PhoneFrame>
                  ) : (
                    <BrowserFrame
                      urlLabel={
                        project.liveUrl?.replace(/^https?:\/\//, "") ??
                        "github.com/FNahuelO"
                      }
                    >
                      {preview}
                    </BrowserFrame>
                  )}

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted">
                      {description}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                        >
                          <GithubLogo size={16} weight="bold" aria-hidden />
                          {dict.projects.code}
                        </a>
                      ) : null}
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                        >
                          {dict.projects.live}
                          <ArrowUpRight size={16} weight="bold" aria-hidden />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
