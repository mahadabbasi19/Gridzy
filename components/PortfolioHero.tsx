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

// Visual slot config for the 3-card fan — kept separate from *which*
// project occupies each slot, so the projects can rotate through the
// slots every 2.5s while the stacked-card geometry stays fixed.
const slots = [
  { rotate: -6, x: 0, y: 0, z: 30 },
  { rotate: 4, x: 28, y: 34, z: 20 },
  { rotate: -2, x: -22, y: 58, z: 10 },
];

export function PortfolioHero() {
  const reducedMotion = usePrefersReducedMotion();
  const [offset, setOffset] = useState(0);

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
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white lg:text-7xl">
            Proof, Not <span className="text-amber">Promises.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#EAF4F3]/70">
            A closer look at the high-scale platforms, AI engines, and mobile
            applications we&apos;ve shipped — driven by measurable ROI.
          </p>
        </motion.div>

        {/* Right: floating 3D-perspective card stack, rotating through
            the real project set every 2.5s */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto h-[22rem] w-full max-w-sm sm:h-[26rem] sm:max-w-md lg:h-[30rem]"
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
                className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-primary-teal/50 bg-[#0A2E2C] shadow-2xl shadow-black/40 transition-transform duration-300 hover:!rotate-0 hover:!-translate-y-[calc(50%+10px)] hover:!scale-[1.03]"
                style={{
                  zIndex: slot.z,
                  transform: `translate(calc(-50% + ${slot.x}px), calc(-50% + ${slot.y}px)) rotate(${slot.rotate}deg)`,
                }}
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
                <div className="relative aspect-[4/3] w-full">
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
                        sizes="(min-width: 1024px) 28rem, 80vw"
                        className="object-cover object-top"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A2E2C]/70 via-transparent to-transparent" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
