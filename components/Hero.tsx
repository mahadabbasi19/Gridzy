"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { CircuitPattern } from "./CircuitNode";
import { HeroVisual } from "./HeroVisual";

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

      {/* Side-by-side (text left, visual right) at every breakpoint —
          columns just get proportionally narrower on small screens
          rather than stacking, to match the desktop composition. */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-[1.2fr_1fr] items-center gap-3 px-3 py-14 xs:gap-4 xs:px-4 sm:grid-cols-[1.15fr_0.95fr] sm:gap-6 sm:px-6 sm:py-20 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-32">
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 flex items-center gap-1.5 rounded-full border border-primary-teal bg-primary-teal/20 px-2.5 py-1 backdrop-blur-sm sm:mb-6 sm:gap-2 sm:px-4 sm:py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0 sm:h-2 sm:w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber sm:h-2 sm:w-2" />
            </span>
            <span className="whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.1em] text-white sm:text-xs sm:tracking-[0.15em]">
              Welcome to Gridzy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="max-w-4xl text-xl font-black leading-[1.08] tracking-tight text-white xs:text-2xl sm:text-4xl sm:leading-[1.03] md:text-5xl lg:text-6xl lg:leading-[1.02] xl:text-7xl"
          >
            Creativity &amp; Technology,{" "}
            <span className="text-amber">Unleashed.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-2.5 max-w-2xl text-[11px] leading-relaxed text-[#EAF4F3] xs:text-xs sm:mt-6 sm:text-base sm:leading-relaxed lg:text-lg"
          >
            Tailored tech solutions and creative digital strategies that
            elevate your brand. From web engineering to custom AI software,
            we bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-4 flex flex-col items-start gap-2 sm:mt-9 sm:flex-row sm:gap-3.5"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full px-4 py-2 text-xs sm:w-auto sm:px-6 sm:py-3 sm:text-sm lg:px-8 lg:py-4 lg:text-base"
              >
                Get Started <ArrowRight size={16} className="shrink-0" />
              </Button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button
                variant="white-outline"
                size="lg"
                className="w-full px-4 py-2 text-xs sm:w-auto sm:px-6 sm:py-3 sm:text-sm lg:px-8 lg:py-4 lg:text-base"
              >
                Our Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
