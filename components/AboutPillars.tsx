"use client";

import { motion } from "framer-motion";
import { Gem, Rocket, Telescope } from "lucide-react";
import { TiltCard } from "./TiltCard";

const pillars = [
  {
    icon: Telescope,
    title: "Our Vision",
    desc: "To redefine global software engineering by bridging advanced AI automation with flawless user experience, empowering businesses to lead their industries.",
  },
  {
    icon: Rocket,
    title: "Our Mission",
    desc: "To engineer ultra-fast, high-converting, and scalable digital products — from custom web and mobile apps to automated AI workflows — with uncompromising craftsmanship.",
  },
  {
    icon: Gem,
    title: "Our Philosophy",
    desc: "Code is art, performance is non-negotiable, and simplicity is the ultimate sophistication. We build products designed for growth, durability, and elegance.",
  },
];

export function AboutPillars() {
  return (
    <section className="relative overflow-hidden bg-deep-teal py-24">
      <div className="circuit-grid absolute inset-0 opacity-[0.1]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-teal/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-amber">
            What Drives Us
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Vision, Mission &amp; Philosophy
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <TiltCard className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition-colors duration-300 hover:border-amber/40 hover:bg-white/[0.06]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-teal/40 bg-primary-teal/15 text-amber transition-transform duration-300 group-hover:scale-110">
                    <p.icon size={26} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#EAF4F3]/70">
                    {p.desc}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
