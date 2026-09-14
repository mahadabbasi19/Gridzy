"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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

// Lightweight count-up — no extra dependency, and it settles instantly at
// the final value (no animation) when the viewer has reduced motion on.
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

function StatItem({
  stat,
  active,
  reducedMotion,
}: {
  stat: (typeof stats)[number];
  active: boolean;
  reducedMotion: boolean;
}) {
  const value = useCountUp(stat.target, active, reducedMotion);
  return (
    <div className="px-6 first:pl-0 sm:px-8">
      <p className="text-2xl font-black tracking-tight tabular-nums text-white sm:text-3xl">
        {value.toFixed(stat.decimals)}
        {stat.suffix}
      </p>
      <p className="mt-1.5 text-[11px] leading-snug text-[#EAF4F3]/55 sm:text-xs">
        {stat.label}
      </p>
    </div>
  );
}

export function AboutHero() {
  const reducedMotion = usePrefersReducedMotion();
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.6 });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-deep-teal to-[#081F1E] py-28 sm:py-32">
      {/* Atmosphere: two soft gradient blobs drifting slowly (18-22s loop),
          plus a faint grain layer — mood and depth, nothing literal. */}
      <div className="hero-atmosphere-a pointer-events-none absolute -left-32 top-0 h-[32rem] w-[32rem] rounded-full bg-primary-teal/25 blur-[130px]" />
      <div className="hero-atmosphere-b pointer-events-none absolute -right-16 bottom-0 h-[28rem] w-[28rem] rounded-full bg-amber/10 blur-[130px]" />
      <div className="hero-grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary-teal bg-primary-teal/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber"
        >
          <Sparkles size={13} className="shrink-0" />
          Redefining Digital Craftsmanship &amp; AI Engineering
        </motion.div>

        {/* Headline is the dominant visual element — no graphic needed.
            Weight contrast between the two lines carries the hierarchy:
            a light-weight setup line, then a heavy accent line with a
            self-drawing underline (the one deliberate motion accent). */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 max-w-4xl tracking-tight text-white"
        >
          <span className="block text-[clamp(2rem,4.8vw,3.5rem)] font-normal leading-[1.08] text-[#EAF4F3]/85">
            Where High-Performance Code Meets
          </span>
          <span className="relative mt-1 inline-block text-[clamp(2.75rem,7vw,5.75rem)] font-black leading-[1.02] text-amber">
            Visionary Design.
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.6, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-gradient-to-r from-amber to-[#ffd27a] sm:-bottom-2"
            />
          </span>
        </motion.h1>

        {/* Second zone, deliberately offset from the headline's own edge —
            a distinct block for the supporting copy and CTA. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 max-w-xl border-l-2 border-primary-teal/40 pl-6 sm:pl-8"
        >
          <p className="text-base leading-relaxed text-[#EAF4F3]/70 sm:text-lg">
            Gridzy is a modern tech studio crafting ultra-fast web apps,
            cross-platform mobile products, and autonomous AI automation for
            forward-thinking enterprises.
          </p>
          <div className="mt-7">
            <Link href="/contact">
              <Button
                size="lg"
                magnetic={!reducedMotion}
                className="shadow-none transition-shadow duration-300 hover:shadow-[0_0_45px_-8px_rgba(245,166,35,0.65)]"
              >
                Start a Project <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Clean horizontal stat row — no card backgrounds, thin
            dividers, numbers count up once scrolled into view. */}
        <div
          ref={statsRef}
          className="mt-16 grid w-fit grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-8"
        >
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} active={statsInView} reducedMotion={reducedMotion} />
          ))}
        </div>
      </div>
    </section>
  );
}
