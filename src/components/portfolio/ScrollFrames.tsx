"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";

const FRAME_COUNT = 24;
const frames = Array.from(
  { length: FRAME_COUNT },
  (_, i) => `/frames/frame-${String(i).padStart(2, "0")}.svg`,
);

type Props = {
  hint: string;
};

export function ScrollFrames({ hint }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });

  useEffect(() => {
    let cancelled = false;
    let loaded = 0;

    frames.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loaded += 1;
        if (!cancelled && loaded >= Math.min(6, FRAME_COUNT)) {
          setReady(true);
        }
      };
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useMotionValueEvent(smooth, "change", (value) => {
    if (reduce) return;
    const next = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.round(value * (FRAME_COUNT - 1))),
    );
    setIndex(next);
  });

  const src = reduce || !ready ? "/frames/fallback.svg" : frames[index];

  return (
    <section
      ref={ref}
      className="section border-y border-line bg-bg-elevated/40"
      aria-label={hint}
    >
      <div className="container-page">
        <div className="mb-6 flex items-end justify-between gap-4">
          <p className="eyebrow">{hint}</p>
          <p className="font-mono text-xs text-muted" aria-hidden>
            {String(index).padStart(2, "0")} / {String(FRAME_COUNT - 1).padStart(2, "0")}
          </p>
        </div>

        <div className="surface relative mx-auto aspect-[4/3] max-w-3xl overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: 1 }}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority={false}
              unoptimized
            />
          </motion.div>
          {!ready && !reduce ? (
            <div className="absolute inset-0 grid place-items-center bg-bg/40 text-sm text-muted">
              …
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
