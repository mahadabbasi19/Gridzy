"use client";

import { motion } from "framer-motion";
import { Gem, Rocket, Telescope } from "lucide-react";
import { TiltCard } from "./TiltCard";

const pillars = [
  {
    icon: Telescope,
    title: "Our Vision",
    desc: "To redefine global software engineering by combining advanced AI workflows with hyper-polished user experiences.",
  },
  {
    icon: Rocket,
    title: "Our Mission",
    desc: "To engineer ultra-scalable web platforms, native mobile apps, and automated workflows with zero compromise on speed or quality.",
  },
  {
    icon: Gem,
    title: "Our Philosophy",
    desc: "Clean code, high performance, and relentless attention to detail. We build products designed for long-term growth and elegance.",
  },
];

export function AboutPillars() {
  return (
    <section className="bg-off-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
            What Drives Us
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal sm:text-4xl">
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
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-teal bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary-teal/40 hover:shadow-xl hover:shadow-charcoal/5">
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-soft-teal text-primary-teal transition-colors group-hover:bg-primary-teal group-hover:text-white">
                    <p.icon size={26} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-charcoal">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
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
