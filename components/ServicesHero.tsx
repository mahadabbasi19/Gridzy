"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, CloudCog, CodeXml, Zap } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "./ui/Button";

const chips = [
  { icon: BrainCircuit, label: "AI Agent Engine", className: "left-[6%] top-[12%]" },
  { icon: CloudCog, label: "Cloud Infrastructure", className: "right-[4%] top-[38%]" },
  { icon: CodeXml, label: "Full-Stack Custom Code", className: "left-[16%] bottom-[10%]" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function ServicesHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    sectionRef.current?.style.setProperty("--mx", `${x}%`);
    sectionRef.current?.style.setProperty("--my", `${y}%`);
  };

  const handleExplore = () => {
    document.getElementById("services-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-gradient-to-b from-[#031d1b] to-[#052825] py-28 sm:py-36"
      style={{ ["--mx" as string]: "50%", ["--my" as string]: "30%" }}
    >
      {/* fine grid + mouse-reactive glow */}
      <div className="circuit-grid pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(650px circle at var(--mx) var(--my), rgba(16,185,129,0.14), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-amber/10 blur-[140px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        {/* badge with a soft pulsing glow border */}
        <motion.div
          variants={item}
          className="hero-badge-pulse inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber backdrop-blur-md"
        >
          <Zap size={13} className="shrink-0" />
          Next-Gen Engine <span className="text-white/30">•</span> Our Capabilities
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          End-to-End{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber bg-clip-text text-transparent">
            Technology &amp; Creative
          </span>{" "}
          Capabilities
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#EAF4F3]/70 sm:text-lg"
        >
          Seven disciplines, one accountable team. Explore how Gridzy combines
          engineering, design, and strategy to move your business forward.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" onClick={handleExplore}>
            Explore Services <ArrowRight size={18} className="rotate-90" />
          </Button>
          <Link href="/contact">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:border-amber/40 hover:text-amber"
            >
              Schedule Tech Consultation
            </button>
          </Link>
        </motion.div>

        {/* floating glass capability chips — decorative, ambient motion */}
        <div className="pointer-events-none relative mt-16 hidden h-40 w-full max-w-3xl sm:block">
          {chips.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
              className={`hero-chip-float-${i % 3} absolute flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-[#EAF4F3]/80 shadow-xl shadow-black/30 backdrop-blur-md ${c.className}`}
            >
              <c.icon size={14} className="shrink-0 text-emerald-300" />
              {c.label}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
