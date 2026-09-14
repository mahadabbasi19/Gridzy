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

function MilestoneCard({
  m,
  active,
  align,
}: {
  m: (typeof milestones)[number];
  active: boolean;
  align: "left" | "right";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 backdrop-blur-md transition-all duration-300",
        align === "right" ? "text-left md:text-right" : "text-left",
        active
          ? "border-amber/40 bg-white/[0.07] shadow-lg shadow-black/20"
          : "border-white/10 bg-white/[0.03]"
      )}
    >
      <p
        className={cn(
          "text-2xl font-black tracking-tight transition-colors duration-300",
          active ? "text-amber" : "text-[#EAF4F3]/45"
        )}
      >
        {m.year}
      </p>
      <p
        className={cn(
          "mt-1 text-lg font-bold transition-colors duration-300",
          active ? "text-white" : "text-[#EAF4F3]/60"
        )}
      >
        {m.title}
      </p>
      <p
        className={cn(
          "mt-2 text-sm leading-relaxed transition-colors duration-300",
          active ? "text-[#EAF4F3]/75" : "text-[#EAF4F3]/35"
        )}
      >
        {m.desc}
      </p>
    </div>
  );
}

function TimelineRow({
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
      // Grid guarantees the dot column sits exactly on the shared center
      // line by construction (two equal 1fr tracks either side of it) —
      // no absolute-position/translate arithmetic that can drift.
      className="grid grid-cols-[2rem_1fr] items-center gap-x-5 md:grid-cols-[1fr_2rem_1fr] md:gap-x-8"
    >
      {/* left card slot (desktop only) */}
      <div className="hidden md:block">
        {!isRight && <MilestoneCard m={m} active={active} align="right" />}
      </div>

      {/* center dot, shared by both layouts */}
      <div className="row-start-1 flex h-full justify-center self-stretch md:col-start-2">
        <span className="relative flex h-3.5 w-3.5 shrink-0">
          {active && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
          )}
          <span
            className={cn(
              "relative inline-flex h-3.5 w-3.5 rounded-full ring-4 ring-deep-teal transition-all duration-300",
              active
                ? "scale-110 bg-amber shadow-[0_0_16px_4px_rgba(245,166,35,0.55)]"
                : "bg-white/25"
            )}
          />
        </span>
      </div>

      {/* mobile: single card, always to the right of the dot */}
      <div className="md:hidden">
        <MilestoneCard m={m} active={active} align="left" />
      </div>

      {/* right card slot (desktop only) */}
      <div className="hidden md:block">
        {isRight && <MilestoneCard m={m} active={active} align="left" />}
      </div>
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
    <section className="relative overflow-hidden bg-deep-teal py-24">
      <div className="circuit-grid absolute inset-0 opacity-[0.12]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[26rem] w-[26rem] rounded-full bg-amber/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-amber">
            Our Journey
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            From First Line of Code to Global Scale
          </h2>
        </div>

        <div ref={containerRef} className="relative mt-16">
          {/* static rail — centered on this wrapper, which is exactly what
              the grid's middle column is also centered on. */}
          <div className="absolute left-4 top-0 h-full w-px -translate-x-1/2 bg-white/10 md:left-1/2" />
          {/* scroll-driven glowing progress beam */}
          <motion.div
            style={{ height: beamHeight }}
            className="absolute left-4 top-0 w-px -translate-x-1/2 bg-amber shadow-[0_0_10px_2px_rgba(245,166,35,0.5)] md:left-1/2"
          />

          <div className="flex flex-col gap-8 md:gap-4">
            {milestones.map((m, i) => (
              <TimelineRow key={m.year} m={m} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
