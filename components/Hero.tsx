"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { CircuitPattern } from "./CircuitNode";

const codeLines = [
  { indent: 0, text: "export function GridzyApp() {" },
  { indent: 1, text: "const [status] = useDeploy();" },
  { indent: 1, text: "return (" },
  { indent: 2, text: "<Experience live={status} />" },
  { indent: 1, text: ");" },
  { indent: 0, text: "}" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-deep-teal">
      <div className="circuit-grid absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-10 -top-10 h-72 w-72 opacity-60 md:opacity-100">
        <CircuitPattern className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rotate-180 opacity-60 md:opacity-100">
        <CircuitPattern className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-deep-teal/40 to-deep-teal" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-2 rounded-full border border-primary-teal bg-primary-teal/20 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Welcome to Gridzy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Creativity &amp; Technology,{" "}
            <span className="text-amber">Unleashed.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[#EAF4F3] sm:text-lg"
          >
            Tailored tech solutions and creative digital strategies that
            elevate your brand. From web engineering to custom AI software,
            we bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3.5 sm:flex-row"
          >
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="white-outline" size="lg" className="w-full sm:w-auto">
                Our Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative mx-auto hidden w-full max-w-md lg:block"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-primary-teal/20 blur-2xl" />
          <div className="relative rounded-2xl border border-primary-teal/50 bg-[#0A2E2C] shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-primary-teal/30 px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F5A623]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 text-[11px] font-medium text-white/40">
                gridzy-app.tsx
              </span>
              <span className="ml-auto flex items-center gap-1.5 rounded-full bg-primary-teal/30 px-2.5 py-1 text-[10px] font-semibold text-amber">
                <span className="h-1.5 w-1.5 rounded-full bg-amber" /> LIVE
              </span>
            </div>
            <div className="space-y-1.5 px-5 py-6 font-mono text-[13px] leading-relaxed">
              {codeLines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.08 }}
                  style={{ paddingLeft: `${line.indent * 1.1}rem` }}
                  className="text-[#EAF4F3]/90"
                >
                  <span className="text-amber/80">{"// "}</span>
                  {line.text}
                </motion.p>
              ))}
            </div>
            <CircuitPattern className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 opacity-70" />
          </div>
          <div className="absolute -bottom-6 -left-6 flex items-center gap-2 rounded-xl border border-border-teal bg-white px-4 py-3 shadow-xl">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-amber" />
            <span className="text-xs font-bold text-charcoal">Build passing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
