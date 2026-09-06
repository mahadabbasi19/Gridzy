"use client";

import { motion } from "framer-motion";
import { GlobalNetworkMap } from "./GlobalNetworkMap";

const stats = [
  { value: "1,200+", label: "Global experts" },
  { value: "23+", label: "Countries supported" },
  { value: "5", label: "Continents, one delivery model" },
  { value: "15+", label: "Years of technical excellence" },
];

const trustedBy = ["Business Insider", "Mashable", "Khaleej Times", "Yahoo!", "New York Weekly"];

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
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-amber"
          >
            About Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Where Vision Meets
            <br />
            <span className="text-amber">Execution.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[#EAF4F3]/75 sm:text-lg"
          >
            We turn bold ideas into real-world outcomes by combining
            strategic thinking, technical expertise, and flawless execution.
            Every engagement is built to move fast without breaking what
            matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-primary-teal/40 pt-8 sm:grid-cols-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.32 + i * 0.08 }}
              >
                <p className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-[#EAF4F3]/60">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#EAF4F3]/45">
              Trusted By
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {trustedBy.map((name) => (
                <span
                  key={name}
                  className="rounded-xl border border-primary-teal/40 bg-primary-teal/10 px-4 py-2.5 text-xs font-semibold text-[#EAF4F3]/70 backdrop-blur-md"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: interactive global delivery network */}
        <GlobalNetworkMap />
      </div>
    </section>
  );
}
