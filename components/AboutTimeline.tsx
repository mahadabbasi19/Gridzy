"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const milestones = [
  {
    year: "2020",
    title: "The Foundation",
    desc: "Built lightweight, ultra-responsive web interfaces with HTML5, CSS3, and JavaScript.",
  },
  {
    year: "2021",
    title: "Modern Web Era",
    desc: "Shifted to modular component architecture using React & modern state management.",
  },
  {
    year: "2022",
    title: "Next-Gen Architecture",
    desc: "Standardized on Next.js for server-rendered, SEO-driven, and lightning-fast web applications.",
  },
  {
    year: "2023",
    title: "AI & Automation Integration",
    desc: "Introduced custom AI bots, automated API pipelines, and intelligent customer agents for global clients.",
  },
  {
    year: "2024",
    title: "Cross-Platform Ecosystems",
    desc: "Expanded to native-performance cross-platform mobile apps (Flutter/React Native) and desktop applications.",
  },
  {
    year: "2025",
    title: "Custom Enterprise Platforms",
    desc: "Designed and deployed end-to-end custom SaaS engines, financial systems, and complex digital platforms.",
  },
  {
    year: "2026",
    title: "Global Scale & Autonomous Systems",
    desc: "Scaling next-gen tech — combining multi-agent AI systems, high-speed frontends, and resilient cloud architectures.",
  },
];

function TimelineItem({
  m,
  index,
}: {
  m: (typeof milestones)[number];
  index: number;
}) {
  const [active, setActive] = useState(false);
  const isRight = index % 2 === 1;

  return (
    <motion.div
      onViewportEnter={() => setActive(true)}
      onViewportLeave={() => setActive(false)}
      // A thin band around vertical center of the screen defines "active" —
      // whichever milestone currently sits there lights up while the rest
      // dim (but stay legible), giving the scrollspy effect without
      // hand-rolled scroll math.
      viewport={{ once: false, margin: "-45% 0px -45% 0px" }}
      className={cn(
        "relative flex flex-col gap-1 pl-12 md:w-1/2 md:pl-0 md:pr-14",
        isRight ? "md:ml-auto md:pl-14 md:pr-0" : ""
      )}
    >
      <span
        className={cn(
          "absolute left-4 top-1 -translate-x-1/2 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-[#05070D] transition-all duration-300 md:left-auto",
          isRight ? "md:-left-2" : "md:-right-2 md:translate-x-1/2",
          active ? "scale-110 bg-cyan-300 shadow-[0_0_16px_4px_rgba(103,232,249,0.55)]" : "bg-slate-700"
        )}
      >
        {active && (
          <span className="absolute inset-0 -m-1.5 animate-ping rounded-full border border-cyan-300/60" />
        )}
      </span>
      <p
        className={cn(
          "text-2xl font-black tracking-tight transition-colors duration-300",
          active ? "text-cyan-300" : "text-slate-500"
        )}
      >
        {m.year}
      </p>
      <p
        className={cn(
          "text-lg font-bold transition-colors duration-300",
          active ? "text-white" : "text-slate-300"
        )}
      >
        {m.title}
      </p>
      <p
        className={cn(
          "text-sm leading-relaxed transition-colors duration-300",
          active ? "text-slate-300" : "text-slate-500"
        )}
      >
        {m.desc}
      </p>
    </motion.div>
  );
}

export function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden bg-[#05070D] py-24">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[26rem] w-[26rem] rounded-full bg-violet-500/[0.08] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-300">
            Our Journey
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            From First Line of Code to Global Scale
          </h2>
        </div>

        <div ref={containerRef} className="relative mt-16">
          {/* static rail */}
          <div className="absolute left-4 top-0 h-full w-px bg-slate-800 md:left-1/2" />
          {/* scroll-driven glowing progress beam */}
          <motion.div
            style={{ height: beamHeight }}
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-cyan-400 via-amber-400 to-indigo-400 shadow-[0_0_10px_2px_rgba(103,232,249,0.4)] md:left-1/2"
          />

          <div className="flex flex-col gap-14">
            {milestones.map((m, i) => (
              <TimelineItem key={m.year} m={m} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
