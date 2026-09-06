"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { CircuitPattern } from "./CircuitNode";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-deep-teal py-20">
      <div className="circuit-grid absolute inset-0 opacity-30" />
      <CircuitPattern className="pointer-events-none absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 opacity-50" />
      <CircuitPattern className="pointer-events-none absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 rotate-180 opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Ready To Scale Your Business With{" "}
          <span className="text-amber">Gridzy</span>?
        </h2>
        <p className="mt-4 max-w-xl text-base text-[#EAF4F3]/90">
          Let&apos;s talk about your goals and map out a tech strategy that
          gets you there faster.
        </p>
        <Link href="/contact">
          <Button size="lg" className="mt-8">
            Get Started Now <ArrowRight size={18} />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
