"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/Button";

const stats = [
  { target: 99.9, decimals: 1, suffix: "%", label: "Client Satisfaction" },
  { target: 50, decimals: 0, suffix: "+", label: "Platforms Built" },
  { target: 10, decimals: 0, suffix: "x", label: "Performance Boost" },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

// Lightweight count-up — no extra dependency, settles instantly at the
// final value (no animation) when the viewer has reduced motion on.
function useCountUp(target: number, active: boolean, reducedMotion: boolean) {
  const [value, setValue] = useState(reducedMotion ? target : 0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    if (reducedMotion) {
      setValue(target);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, reducedMotion]);

  return value;
}

function StatReadout({
  stat,
  first,
  active,
  reducedMotion,
}: {
  stat: (typeof stats)[number];
  first: boolean;
  active: boolean;
  reducedMotion: boolean;
}) {
  const value = useCountUp(stat.target, active, reducedMotion);
  return (
    <div className={first ? "" : "border-l border-[#EAF4F3]/10 pl-8"}>
      <span className="font-mono text-2xl font-semibold tabular-nums text-[#EAF4F3] sm:text-3xl">
        {value.toFixed(stat.decimals)}
        {stat.suffix}
      </span>
      <span className="ml-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#EAF4F3]/40">
        {stat.label}
      </span>
    </div>
  );
}

// Thin L-shaped corner brackets, like a design tool's selection handles —
// the one deliberate accent framing the whole content block.
function CropMarks({ drawn }: { drawn: boolean }) {
  const corners = [
    "left-0 top-0 border-l border-t",
    "right-0 top-0 border-r border-t",
    "left-0 bottom-0 border-l border-b",
    "right-0 bottom-0 border-r border-b",
  ];
  return (
    <>
      {corners.map((pos, i) => (
        <motion.span
          key={pos}
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: drawn ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
          className={`pointer-events-none absolute h-6 w-6 border-amber/50 sm:h-8 sm:w-8 ${pos}`}
        />
      ))}
    </>
  );
}

export function AboutHero() {
  const reducedMotion = usePrefersReducedMotion();
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.6 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-deep-teal py-28 sm:py-36">
      <div className="hero-grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Content block, framed by crop marks — headline and marks draw
            in together as one orchestrated sequence. */}
        <div className="relative px-4 py-10 sm:px-8 sm:py-14">
          <CropMarks drawn={loaded} />

          {/* Technical label — a spec-sheet reference, not a badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 8 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-amber/70"
          >
            <span className="h-px w-8 bg-amber/40" />
            fig.01 — digital craftsmanship &amp; ai engineering
          </motion.div>

          {/* Headline — the dominant visual element, oversized and
              left-pinned. Weight/color contrast (not gradient) carries
              the hierarchy between the two lines. */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 max-w-5xl font-sans tracking-tight"
          >
            <span className="block text-[clamp(2rem,5.2vw,4rem)] font-normal leading-[1.05] text-[#EAF4F3]/80">
              Where High-Performance Code Meets
            </span>
            <span className="block text-[clamp(2.75rem,7.5vw,6.5rem)] font-black leading-[0.98] text-amber">
              Visionary Design.
            </span>
          </motion.h1>

          {/* Leader line + annotation, in the drafting-sheet sense: a
              numbered reference marker connects the headline to its
              supporting note, rather than a bare decorative rule. */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 12 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex items-start gap-4 sm:mt-12 sm:gap-5 lg:ml-[32%]"
          >
            <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-amber/40 font-mono text-[10px] text-amber/70">
              01
            </span>
            <div className="max-w-sm">
              <p className="text-sm leading-relaxed text-[#EAF4F3]/65 sm:text-base">
                Gridzy is a modern tech studio crafting ultra-fast web apps,
                cross-platform mobile products, and autonomous AI automation
                for forward-thinking enterprises.
              </p>
              <div className="mt-6">
                <Link href="/contact">
                  <Button size="lg" magnetic={!reducedMotion}>
                    Start a Project <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Single inline technical readout — no cards, no shadows */}
          <div
            ref={statsRef}
            className="mt-16 flex flex-wrap items-baseline gap-y-5 border-t border-[#EAF4F3]/10 pt-7 sm:gap-x-2"
          >
            {stats.map((s, i) => (
              <StatReadout
                key={s.label}
                stat={s}
                first={i === 0}
                active={statsInView}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
