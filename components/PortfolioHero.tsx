"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { recentWork } from "@/lib/data";
import { Button } from "./ui/Button";

const stack = recentWork.slice(0, 3);

const metrics = [
  { target: 40, prefix: "", suffix: "+", label: "Shipped Apps" },
  { target: 99.9, decimals: 1, prefix: "", suffix: "%", label: "Reliability" },
  { target: 15, prefix: "$", suffix: "M+", label: "Client Revenue Impact" },
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
    const duration = 1300;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, reducedMotion]);
  return value;
}

function MetricCounter({
  m,
  active,
  reducedMotion,
}: {
  m: (typeof metrics)[number];
  active: boolean;
  reducedMotion: boolean;
}) {
  const value = useCountUp(m.target, active, reducedMotion);
  return (
    <div className="flex flex-col items-center gap-1 px-6 py-1 text-center sm:items-start sm:text-left">
      <p className="text-2xl font-black tabular-nums tracking-tight text-white sm:text-3xl">
        {m.prefix}
        {value.toFixed(m.decimals ?? 0)}
        {m.suffix}
      </p>
      <p className="text-xs text-slate-400">{m.label}</p>
    </div>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function PortfolioHero() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.6 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    sectionRef.current?.style.setProperty("--mx", `${x}%`);
    sectionRef.current?.style.setProperty("--my", `${y}%`);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-gradient-to-b from-[#07090E] to-[#0B0F17] py-24 sm:py-28"
      style={{ ["--mx" as string]: "70%", ["--my" as string]: "25%" }}
    >
      {/* ambient radial glow, mouse-reactive */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(650px circle at var(--mx) var(--my), rgba(245,158,11,0.14), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-amber-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-400/[0.08] blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Selected Work — 2026 Showcase
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white lg:text-7xl"
          >
            Proof, Not{" "}
            <span className="bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
              Promises.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
          >
            A closer look at the high-scale platforms, AI engines, and mobile
            applications we&apos;ve shipped — driven by measurable ROI.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#portfolio-grid">
              <Button
                size="lg"
                magnetic={!reducedMotion}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Case Studies <ArrowRight size={18} />
                </span>
                {/* hover shimmer sweep */}
                <span className="pointer-events-none absolute inset-y-0 left-0 z-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[380%] group-hover:opacity-100" />
              </Button>
            </a>
            <Link href="/contact">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:border-amber-400/40 hover:text-amber-400"
              >
                <Calendar size={16} /> Book a Strategy Call
              </button>
            </Link>
          </motion.div>

          {/* trust metrics */}
          <motion.div
            variants={item}
            ref={metricsRef}
            className="mt-12 flex w-fit max-w-full flex-wrap divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
          >
            {metrics.map((m) => (
              <MetricCounter key={m.label} m={m} active={metricsInView} reducedMotion={reducedMotion} />
            ))}
          </motion.div>
        </motion.div>

        {/* Right: floating 3D-perspective card stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto h-[22rem] w-full max-w-sm sm:h-[26rem] sm:max-w-md lg:h-[30rem]"
          style={{ perspective: "1600px" }}
        >
          <div
            className="absolute inset-0 rounded-[2rem] opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {stack.map((project, i) => {
            const isFront = i === 0;
            const rotate = [-6, 4, -2][i] ?? 0;
            const offsetX = [0, 28, -22][i] ?? 0;
            const offsetY = [0, 34, 58][i] ?? 0;
            return (
              <motion.a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} (opens in a new tab)`}
                initial={{ opacity: 0, y: 24, rotate: rotate + 6 }}
                animate={{ opacity: 1, y: 0, rotate }}
                whileHover={{ rotate: 0, y: -10, scale: 1.03, zIndex: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: "easeOut" }}
                style={{
                  zIndex: 20 - i,
                  transform: `translate(${offsetX}px, ${offsetY}px)`,
                }}
                className="group absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/50 backdrop-blur-xl transition-shadow duration-300 hover:border-amber-400/40 hover:shadow-amber-500/10"
              >
                <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/20 px-3.5 py-2.5">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-amber-400/70" />
                  <span className="h-2 w-2 shrink-0 rounded-full bg-white/15" />
                  <span className="h-2 w-2 shrink-0 rounded-full bg-white/15" />
                  <span className="ml-2 truncate text-[10px] font-medium text-white/40">
                    {project.title}
                  </span>
                  <ArrowUpRight
                    size={12}
                    className="ml-auto shrink-0 text-white/30 transition-colors group-hover:text-amber-400"
                  />
                </div>
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(min-width: 1024px) 28rem, 80vw"
                    className="object-cover object-top"
                    priority={isFront}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
