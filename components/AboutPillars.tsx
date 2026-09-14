"use client";

import { motion } from "framer-motion";
import { Gem, Rocket, Telescope } from "lucide-react";
import { TiltCard } from "./TiltCard";

const pillars = [
  {
    icon: Telescope,
    title: "Our Vision",
    desc: "To redefine global software engineering by combining advanced AI workflows with hyper-polished user experiences.",
    ring: "border-cyan-400/30",
    tint: "bg-cyan-500/10",
    glow: "text-cyan-300",
    hoverBorder: "hover:border-cyan-400/40",
  },
  {
    icon: Rocket,
    title: "Our Mission",
    desc: "To engineer ultra-scalable web platforms, native mobile apps, and automated workflows with zero compromise on speed or quality.",
    ring: "border-amber-400/30",
    tint: "bg-amber-500/10",
    glow: "text-amber-300",
    hoverBorder: "hover:border-amber-400/40",
  },
  {
    icon: Gem,
    title: "Our Philosophy",
    desc: "Clean code, high performance, and relentless attention to detail. We build products designed for long-term growth and elegance.",
    ring: "border-violet-400/30",
    tint: "bg-violet-500/10",
    glow: "text-violet-300",
    hoverBorder: "hover:border-violet-400/40",
  },
];

export function AboutPillars() {
  return (
    <section className="relative overflow-hidden bg-[#05070D] py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-300">
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
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0D1117] p-8 backdrop-blur-md transition-colors duration-300 ${p.hoverBorder}`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${p.ring} ${p.tint} ${p.glow} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <p.icon size={26} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
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
