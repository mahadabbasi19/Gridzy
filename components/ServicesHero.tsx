"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

// Thin L-shaped corner brackets — the same "Precision Draft" accent used
// on the About and Portfolio heroes, reused here for visual parity
// across all three pages.
function CropMarks({ reducedMotion }: { reducedMotion: boolean }) {
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
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
          className={`pointer-events-none absolute h-6 w-6 border-amber/50 sm:h-8 sm:w-8 ${pos}`}
        />
      ))}
    </>
  );
}

export function ServicesHero() {
  const reducedMotion = useReducedMotion() ?? false;

  const handleExplore = () => {
    document.getElementById("services-grid")?.scrollIntoView({
      behavior: reducedMotion ? "instant" : "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative overflow-hidden bg-deep-teal py-28 sm:py-36">
      <div className="hero-grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Content block, framed by crop marks — same structure as the
            About and Portfolio heroes for visual parity across the
            three pages. */}
        <div className="relative px-4 py-10 sm:px-8 sm:py-14">
          <CropMarks reducedMotion={reducedMotion} />

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-amber/70"
          >
            <span className="h-px w-8 bg-amber/40" />
            fig.03 — our capabilities
          </motion.div>

          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 max-w-5xl break-words font-sans tracking-tight"
          >
            <span className="block text-[clamp(2rem,5.2vw,4rem)] font-normal leading-[1.05] text-[#EAF4F3]/80">
              End-to-End Technology &amp;
            </span>
            <span className="block text-[clamp(2.75rem,7.5vw,6.5rem)] font-black leading-[0.98] text-amber">
              Creative Capabilities
            </span>
          </motion.h1>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex items-start gap-4 pb-2 sm:mt-12 sm:gap-5 lg:ml-[32%]"
          >
            <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-amber/40 font-mono text-[10px] text-amber/70">
              02
            </span>
            <div className="min-w-0 max-w-sm">
              <p className="text-sm leading-relaxed text-[#EAF4F3]/65 sm:text-base">
                Seven disciplines, one accountable team. Explore how Gridzy
                combines engineering, design, and strategy to move your
                business forward.
              </p>
              <div className="mt-6">
                <Button size="lg" className="px-5 sm:px-8" magnetic={!reducedMotion} onClick={handleExplore}>
                  Explore Services <ArrowRight size={18} aria-hidden="true" className="rotate-90" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
