"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";

const stats = [
  { value: "99.9%", label: "Client Satisfaction" },
  { value: "50+", label: "Platforms Built" },
  { value: "10x", label: "Performance Boost" },
];

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-deep-teal to-[#081F1E] py-24 sm:py-28">
      {/* ambient grid + glow — same treatment as the homepage Hero */}
      <div className="circuit-grid absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-primary-teal/25 blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-primary-teal bg-primary-teal/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber"
        >
          <Sparkles size={13} className="shrink-0" />
          Redefining Digital Craftsmanship &amp; AI Engineering
          {/* shimmer sweep */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
            animate={{ x: ["-120%", "320%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Where High-Performance Code Meets{" "}
          <span className="bg-gradient-to-r from-amber to-[#ffd27a] bg-clip-text text-transparent">
            Visionary Design.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-[#EAF4F3]/75 sm:text-lg"
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
          className="mt-10 grid w-full max-w-md grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-3 py-4 first:pl-5 last:pr-5 sm:px-7">
              <p className="text-lg font-black tracking-tight text-white sm:text-2xl">
                {s.value}
              </p>
              <p className="mt-1 text-[10px] leading-snug text-[#EAF4F3]/60 sm:whitespace-nowrap sm:text-[11px]">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
