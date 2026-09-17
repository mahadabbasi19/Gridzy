"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { recentWork } from "@/lib/data";

const ROTATE_MS = 2500;

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

// Thin L-shaped corner brackets — the same "Precision Draft" accent used
// to frame the About Hero's content block, reused here for visual parity
// across the two pages.
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

// Visual slot config for the 3-card fan — kept separate from *which*
// project occupies each slot, so the projects can rotate through the
// slots every 2.5s while the stacked-card geometry stays fixed.
const slots = [
  { rotate: -6, x: 0, y: 0, z: 30 },
  { rotate: 4, x: 24, y: 28, z: 20 },
  { rotate: -2, x: -18, y: 48, z: 10 },
];

export function PortfolioHero() {
  const reducedMotion = usePrefersReducedMotion();
  const [offset, setOffset] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setOffset((o) => (o + 1) % recentWork.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [reducedMotion]);

  const visible = slots.map((_, i) => recentWork[(offset + i) % recentWork.length]);

  return (
    <section className="relative overflow-hidden bg-deep-teal py-28 sm:py-32">
      <div className="hero-grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: content block, framed by crop marks — same structure as
            the About Hero for visual parity between the two pages. */}
        <div className="relative px-4 py-10 sm:px-8 sm:py-14">
          <CropMarks drawn={loaded} />

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 8 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-amber/70"
          >
            <span className="h-px w-8 bg-amber/40" />
            fig.02 — selected work, shipped &amp; live
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 max-w-xl font-sans tracking-tight"
          >
            <span className="block text-[clamp(2rem,5.2vw,4rem)] font-normal leading-[1.05] text-[#EAF4F3]/80">
              Proof, Not
            </span>
            <span className="block text-[clamp(2.75rem,7.5vw,6.5rem)] font-black leading-[0.98] text-amber">
              Promises.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 12 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex items-start gap-4 sm:mt-12 sm:gap-5"
          >
            <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-amber/40 font-mono text-[10px] text-amber/70">
              01
            </span>
            <p className="max-w-sm text-sm leading-relaxed text-[#EAF4F3]/65 sm:text-base">
              A closer look at the high-scale platforms, AI engines, and
              mobile applications we&apos;ve shipped — driven by measurable
              ROI.
            </p>
          </motion.div>
        </div>

        {/* Right: floating 3D-perspective card stack, rotating through
            the real project set every 2.5s */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto h-72 w-full max-w-[20rem] sm:h-80 sm:max-w-[22rem] lg:h-96 lg:max-w-[26rem]"
          style={{ perspective: "1600px" }}
        >
          <div
            className="absolute inset-0 rounded-[2rem] opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(234,244,243,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(234,244,243,0.5) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {slots.map((slot, i) => {
            const project = visible[i];
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2"
                style={{ zIndex: slot.z }}
              >
                {/* Per-card staggered fly-in on load (fan out from below,
                    settling into its slot), independent of the content
                    swap that happens every 2.5s inside. */}
                <motion.div
                  initial={{ opacity: 0, x: 0, y: 24, rotate: slot.rotate + 6 }}
                  animate={{ opacity: 1, x: slot.x, y: slot.y, rotate: slot.rotate }}
                  whileHover={{ rotate: 0, y: slot.y - 10, scale: 1.03 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: "easeOut" }}
                  className="overflow-hidden rounded-2xl border border-primary-teal/50 bg-[#0A2E2C] shadow-2xl shadow-black/40"
                >
                <div className="flex items-center gap-1.5 border-b border-primary-teal/30 px-3.5 py-2.5">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-amber/70" />
                  <span className="h-2 w-2 shrink-0 rounded-full bg-white/15" />
                  <span className="h-2 w-2 shrink-0 rounded-full bg-white/15" />
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={project.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2 truncate text-[10px] font-medium text-white/40"
                    >
                      {project.title}
                    </motion.span>
                  </AnimatePresence>
                  <ArrowUpRight size={12} className="ml-auto shrink-0 text-white/30" />
                </div>
                <div className="relative aspect-square w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={project.url}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(min-width: 1024px) 19rem, 70vw"
                        className="object-cover object-top"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A2E2C]/70 via-transparent to-transparent" />
                </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
