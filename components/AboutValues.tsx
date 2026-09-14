"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Handshake, Palette, Terminal, Zap } from "lucide-react";
import { TiltCard } from "./TiltCard";

const values = [
  {
    icon: Terminal,
    title: "Precision Engineering",
    desc: "Type-safe, maintainable, and battle-tested code built for infinite scale.",
  },
  {
    icon: BrainCircuit,
    title: "AI-First Mindset",
    desc: "Harnessing artificial intelligence to automate complexity and amplify human potential.",
  },
  {
    icon: Palette,
    title: "Obsessive UX/UI",
    desc: "Pixel-perfect user interfaces engineered to delight users and maximize conversion.",
  },
  {
    icon: Zap,
    title: "Uncompromising Speed",
    desc: "Sub-second load times and microsecond database optimizations across all devices.",
  },
  {
    icon: Handshake,
    title: "Transparent Partnership",
    desc: "Real-time updates, clear communication, and agile execution with zero fluff.",
  },
];

export function AboutValues() {
  return (
    <section className="bg-off-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
            What Drives Us
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal sm:text-4xl">
            Our Core Values
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            >
              <TiltCard className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-teal bg-white p-7 transition-all duration-300 hover:scale-[1.02] hover:border-primary-teal/40 hover:shadow-xl hover:shadow-charcoal/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft-teal text-primary-teal transition-colors group-hover:bg-primary-teal group-hover:text-white">
                    <v.icon size={20} />
                  </div>
                  <span className="mt-5 w-fit rounded-full border border-border-teal bg-soft-teal px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-teal/60">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-charcoal">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                    {v.desc}
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
