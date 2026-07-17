"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, MapPin } from "@phosphor-icons/react";
import type { Dictionary } from "@/content";

type Props = {
  dict: Dictionary;
};

export function Hero({ dict }: Props) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="container-page grid min-h-[100dvh] items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-4">{dict.hero.role}</p>
          <h1 className="display mb-5">{dict.hero.brand}</h1>
          <p className="lead mb-8">{dict.hero.summary}</p>

          <div className="mb-8 flex flex-wrap gap-3">
            <a href="#proyectos" className="focus-ring btn btn-primary">
              {dict.hero.ctaPrimary}
              <ArrowDownRight size={18} weight="bold" aria-hidden />
            </a>
            <a href="#contacto" className="focus-ring btn btn-secondary">
              {dict.hero.ctaSecondary}
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={dict.contact.mailtoRecruiter}
              className="focus-ring text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              {dict.hero.ctaRecruiter}
            </a>
            <span className="text-muted" aria-hidden>
              ·
            </span>
            <a
              href={dict.contact.mailtoClient}
              className="focus-ring text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              {dict.hero.ctaClient}
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} weight="bold" aria-hidden />
            {dict.hero.location}
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        >
          <div className="absolute -inset-8 rounded-full bg-accent/10 blur-3xl" />
          <div className="surface relative overflow-hidden p-4 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
            <div className="mb-3 flex items-center gap-2 border-b border-line pb-3">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-[11px] text-muted">
                franco.dev
              </span>
            </div>
            <div className="space-y-3 font-mono text-xs leading-relaxed text-muted sm:text-sm">
              <p>
                <span className="text-accent">const</span> stack = [
                <span className="text-fg">
                  {" "}
                  &quot;React Native&quot;, &quot;Expo&quot;, &quot;NestJS&quot;,
                  &quot;TypeScript&quot;, &quot;AWS&quot;, &quot;GCP&quot;{" "}
                </span>
                ];
              </p>
              <p>
                <span className="text-accent">function</span>{" "}
                <span className="text-fg">build</span>() {"{"}
              </p>
              <p className="pl-4">
                return <span className="text-fg">&quot;web + mobile&quot;</span>;
              </p>
              <p>{"}"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
