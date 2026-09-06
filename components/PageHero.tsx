"use client";

import { motion } from "framer-motion";
import { CircuitPattern } from "./CircuitNode";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-deep-teal py-20 sm:py-24">
      <div className="circuit-grid absolute inset-0 opacity-30" />
      <CircuitPattern className="pointer-events-none absolute -left-16 -top-10 h-64 w-64 opacity-50" />
      <CircuitPattern className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rotate-180 opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <span className="mb-5 rounded-full border border-primary-teal bg-primary-teal/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber">
          {eyebrow}
        </span>
        <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#EAF4F3]/90 sm:text-lg">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}
