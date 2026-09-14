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

function TimelineItem({ m }: { m: (typeof milestones)[number] }) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setActive(true)}
      onViewportLeave={() => setActive(false)}
      // A thin band around vertical center of the screen defines "active" —
      // whichever milestone currently sits there lights up while the rest
      // dim (but stay legible), giving the scrollspy effect without
      // hand-rolled scroll math.
      viewport={{ once: false, margin: "-45% 0px -45% 0px" }}
      className="relative flex flex-col gap-1 pl-12"
    >
      {/* Dot always sits on the same rail its own text block hangs off
          of — a single left-hand column at every breakpoint, so there's
          no left/right math to ever drift out of alignment. */}
      <span className="absolute left-4 top-1.5 -translate-x-1/2">
        <span className="relative flex h-3.5 w-3.5">
          {active && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
          )}
          <span
            className={cn(
              "relative inline-flex h-3.5 w-3.5 rounded-full ring-4 ring-deep-teal transition-all duration-300",
              active ? "scale-110 bg-amber shadow-[0_0_16px_4px_rgba(245,166,35,0.55)]" : "bg-white/25"
            )}
          />
        </span>
      </span>
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
          "text-lg font-bold transition-colors duration-300",
          active ? "text-white" : "text-[#EAF4F3]/55"
        )}
      >
        {m.title}
      </p>
      <p
        className={cn(
          "text-sm leading-relaxed transition-colors duration-300",
          active ? "text-[#EAF4F3]/75" : "text-[#EAF4F3]/35"
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
    <section className="relative overflow-hidden bg-deep-teal py-24">
      <div className="circuit-grid absolute inset-0 opacity-[0.12]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[26rem] w-[26rem] rounded-full bg-amber/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-amber">
            Our Journey
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            From First Line of Code to Global Scale
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div ref={containerRef} className="relative">
            {/* static rail */}
            <div className="absolute left-4 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
            {/* scroll-driven glowing progress beam */}
            <motion.div
              style={{ height: beamHeight }}
              className="absolute left-4 top-0 w-px -translate-x-1/2 bg-amber shadow-[0_0_10px_2px_rgba(245,166,35,0.5)]"
            />

            <div className="flex flex-col gap-14">
              {milestones.map((m) => (
                <TimelineItem key={m.year} m={m} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
