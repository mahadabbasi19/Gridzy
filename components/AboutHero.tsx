"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { GlobalNetworkMap } from "./GlobalNetworkMap";
import { Button } from "./ui/Button";

const stats = [
  { value: "99.9%", label: "Client Satisfaction" },
  { value: "50+", label: "Enterprise Apps Launched" },
  { value: "10x", label: "Performance Boost" },
];

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-deep-teal to-[#081F1E] py-24 sm:py-28">
      {/* ambient grid + glow */}
      <div className="circuit-grid absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary-teal/25 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-primary-teal bg-primary-teal/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber"
          >
            <Sparkles size={13} className="shrink-0" />
            Engineering the Future of Digital Experience
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
            className="mt-5 max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Where Cutting-Edge Code Meets{" "}
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
            Custom software engineering, AI automation, and modern web &amp;
            mobile development — built by a team obsessed with getting the
            details right, not just shipping on time.
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
            className="mt-10 grid w-full max-w-md grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md sm:w-fit"
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

        {/* Right: interactive global delivery network */}
        <GlobalNetworkMap />
      </div>
    </section>
  );
}
