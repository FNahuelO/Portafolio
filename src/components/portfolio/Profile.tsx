"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Dictionary } from "@/content";
import { Reveal } from "./Reveal";

type Props = {
  dict: Dictionary;
};

export function Profile({ dict }: Props) {
  const reduce = useReducedMotion();

  return (
    <section id="perfil" className="section">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow mb-3">{dict.profile.eyebrow}</p>
          <h2 className="display mb-6 !text-[clamp(2rem,4vw,3.2rem)]">
            {dict.profile.title}
          </h2>
        </Reveal>

        <div className="space-y-5">
          {dict.profile.body.map((paragraph) => (
            <Reveal key={paragraph}>
              <p className="max-w-[65ch] text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="container-page mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dict.profile.highlights.map((item, i) => (
          <motion.div
            key={item.label}
            className="surface p-5"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.05, duration: 0.45 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
              {item.label}
            </p>
            <p className="mt-2 text-lg font-semibold tracking-tight">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
