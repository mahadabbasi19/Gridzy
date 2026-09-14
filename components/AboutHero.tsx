"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { CodeMesh } from "./CodeMesh";

const stats = [
  { value: "99.9%", label: "Client Satisfaction" },
  { value: "50+", label: "Platforms Built" },
  { value: "10x", label: "Performance Boost" },
];

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-24 sm:py-28">
      {/* gradient mesh — cyan + violet, no green anywhere */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-violet-500/[0.15] blur-[140px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-400/[0.06] blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber-400 backdrop-blur-md"
          >
            <Sparkles size={13} className="shrink-0" />
            Redefining Digital Craftsmanship &amp; AI Engineering
            {/* animated gradient-sweep border */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent"
              animate={{ x: ["-120%", "320%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Where High-Performance Code Meets{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
              Visionary Design.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Gridzy is a modern tech studio crafting ultra-fast web apps,
            cross-platform mobile products, and autonomous AI automation for
            forward-thinking enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9"
          >
            <Link href="/contact">
              <Button size="lg">
                Start a Project <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>

          {/* Floating quick-stats glass bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-10 grid w-full max-w-md grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md sm:w-fit"
          >
            {stats.map((s) => (
              <div key={s.label} className="px-3 py-4 first:pl-5 last:pr-5 sm:px-7">
                <p className="text-lg font-black tracking-tight text-white sm:text-2xl">
                  {s.value}
                </p>
                <p className="mt-1 text-[10px] leading-snug text-slate-500 sm:whitespace-nowrap sm:text-[11px]">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: glassmorphic IDE mockup with live syntax-highlighted stack */}
        <CodeMesh />
      </div>
    </section>
  );
}
