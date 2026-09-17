"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";

export function ServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-[#031d1b] py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.14] blur-[160px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/10 blur-[130px]" />

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-16 text-center backdrop-blur-xl sm:px-16"
        >
          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Ready To Scale Your Business With{" "}
            <span className="text-amber">Gridzy</span>?
          </h2>
          <p className="mt-4 max-w-xl text-base text-[#EAF4F3]/70">
            Let&apos;s talk about your goals and map out a tech strategy that
            gets you there faster.
          </p>
          <Link href="/contact" className="mt-8">
            <Button size="lg">
              Let&apos;s Build Together <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
