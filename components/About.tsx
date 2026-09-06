"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CircuitPattern } from "./CircuitNode";
import { Button } from "./ui/Button";

const values = [
  "Dedicated senior engineering & design talent",
  "Transparent process with measurable outcomes",
  "Scalable architecture built for long-term growth",
  "24/7 support long after the project ships",
];

export function About() {
  return (
    <section id="about" className="bg-off-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl border border-border-teal bg-soft-teal p-10">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-teal/5 to-transparent" />
            <div className="relative flex h-full w-full items-center justify-center">
              <Image
                src="/logos/icon.png"
                alt="Gridzy circuit-node mark"
                width={260}
                height={260}
                className="w-3/5 drop-shadow-xl"
              />
            </div>
            <CircuitPattern className="absolute -bottom-10 -left-10 h-40 w-40" />
            <CircuitPattern className="absolute -right-10 -top-10 h-40 w-40 rotate-90" />
          </div>
          <div className="absolute -bottom-6 left-1/2 w-56 -translate-x-1/2 rounded-xl border border-border-teal bg-white px-5 py-4 text-center shadow-lg lg:left-auto lg:right-0 lg:translate-x-0">
            <p className="text-2xl font-extrabold text-primary-teal">15+</p>
            <p className="text-xs font-medium text-charcoal/60">
              Years of Collective Expertise
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
            About Gridzy
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight leading-tight text-charcoal sm:text-4xl">
            Where Innovation Meets Execution
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/70">
            At Gridzy - The Tech People, we empower businesses across
            industries with cutting-edge software, custom web solutions, and
            data-driven digital strategies. Our multidisciplinary team blends
            engineering rigor with creative craft to turn ambitious ideas
            into products people love.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v} className="flex items-start gap-2.5">
                <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-amber" />
                <span className="text-sm text-charcoal/80">{v}</span>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <Link href="/about">
              <Button size="lg">Learn More About Us</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
