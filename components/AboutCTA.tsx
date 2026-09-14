"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";

export function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#05070D] py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-cyan-500/[0.12] blur-[150px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[130px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Ready To Build Something{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
            Exceptional
          </span>
          ?
        </h2>
        <p className="mt-4 max-w-xl text-base text-slate-400">
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
