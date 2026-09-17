"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Rocket, Target, Workflow as WorkflowIcon } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Target,
    title: "Strategic Architecture",
    desc: "We map the system before writing a line of code — data model, integrations, and a milestone plan built around your real constraints.",
  },
  {
    icon: WorkflowIcon,
    title: "Agile Execution",
    desc: "Focused sprints with weekly demos, so you see working software early and often, not a single reveal at the end.",
  },
  {
    icon: Cpu,
    title: "AI & Automation Integration",
    desc: "Wherever it earns its place, AI gets wired in — automating the repetitive work and surfacing insight your team can act on.",
  },
  {
    icon: Rocket,
    title: "Enterprise Scaling",
    desc: "Launch is the start, not the finish — monitoring, hardening, and a roadmap for the next order of magnitude of usage.",
  },
];

function WorkflowStep({
  step,
  index,
  hovered,
  setHovered,
}: {
  step: (typeof steps)[number];
  index: number;
  hovered: number | null;
  setHovered: (i: number | null) => void;
}) {
  const [inView, setInView] = useState(false);
  const active = hovered === index || (hovered === null && inView);

  return (
    <motion.div
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{ once: false, margin: "-45% 0px -45% 0px" }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className="relative flex gap-5 pl-2 sm:gap-6"
    >
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center">
        {active && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-40" />
        )}
        <span
          className={cn(
            "relative flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300",
            active
              ? "scale-105 border-amber bg-amber text-charcoal shadow-[0_0_18px_2px_rgba(245,166,35,0.5)]"
              : "border-white/15 bg-white/[0.04] text-[#EAF4F3]/50"
          )}
        >
          <step.icon size={18} />
        </span>
      </span>
      <div className="pb-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber/60">
          Step 0{index + 1}
        </p>
        <p
          className={cn(
            "mt-1 text-lg font-bold transition-colors duration-300",
            active ? "text-white" : "text-[#EAF4F3]/60"
          )}
        >
          {step.title}
        </p>
        <p
          className={cn(
            "mt-2 max-w-md text-sm leading-relaxed transition-colors duration-300",
            active ? "text-[#EAF4F3]/70" : "text-[#EAF4F3]/35"
          )}
        >
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function ServicesWorkflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden bg-[#052825] py-24">
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-amber/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-amber">
            How We Deliver
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            The 4-Step Delivery Workflow
          </h2>
        </div>

        <div ref={containerRef} className="relative mt-16">
          <div className="absolute left-[1.375rem] top-0 h-full w-px bg-white/10" />
          <motion.div
            style={{ height: beamHeight }}
            className="absolute left-[1.375rem] top-0 w-px bg-gradient-to-b from-amber to-emerald-400 shadow-[0_0_10px_2px_rgba(245,166,35,0.4)]"
          />

          <div className="flex flex-col">
            {steps.map((s, i) => (
              <WorkflowStep key={s.title} step={s} index={i} hovered={hovered} setHovered={setHovered} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
