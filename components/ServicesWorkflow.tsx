"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check, Cpu, Pause, Play, Rocket, Target, Workflow as WorkflowIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

const STEP_DURATION_MS = 2400;

export function ServicesWorkflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3 });
  const reducedMotion = useReducedMotion();
  // A value of steps.length means the final step has also completed.
  const [stage, setStage] = useState(0);
  const [paused, setPaused] = useState(false);
  const complete = stage === steps.length;
  const activeIndex = Math.min(stage, steps.length - 1);

  useEffect(() => {
    if (!inView || paused || reducedMotion) return;
    const timer = window.setTimeout(
      () => setStage((current) => current === steps.length ? 0 : current + 1),
      complete ? 1800 : STEP_DURATION_MS
    );
    return () => window.clearTimeout(timer);
  }, [inView, paused, complete, reducedMotion, stage]);


  return (
    <section className="overflow-hidden bg-off-white py-24" aria-labelledby="delivery-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
            How We Deliver
          </p>
          <h2 id="delivery-heading" className="mt-3 text-3xl font-black tracking-tight text-charcoal sm:text-4xl">
            The 4-Step Delivery Workflow
          </h2>
        </div>

        <div ref={containerRef} className="relative mt-16">
          <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-6 h-0.5 rounded-full bg-border-teal sm:top-7">
            <motion.div
              initial={false}
              animate={{ scaleX: activeIndex / (steps.length - 1) }}
              transition={{ duration: reducedMotion ? 0 : 0.65, ease: "easeInOut" }}
              className="h-full origin-left rounded-full bg-amber shadow-[0_0_12px_3px_rgba(245,166,35,0.5)]"
            />
          </div>

          <ol className="relative grid grid-cols-4 gap-2 sm:gap-6">
            {steps.map((step, index) => {
              const done = index < stage;
              const active = index === activeIndex && !complete;
              return (
                <li key={step.title} className="min-w-0 text-center">
                  <div className="relative mx-auto w-fit">
                    {(active || done) && (
                      <motion.span
                        aria-hidden="true"
                        initial={false}
                        animate={{
                          opacity: active && inView && !paused && !reducedMotion ? [0.4, 0.8, 0.4] : complete ? 0.65 : 0.3,
                          scale: active && inView && !paused && !reducedMotion ? [1, 1.25, 1] : 1,
                        }}
                        transition={{ duration: reducedMotion ? 0 : 1.6, repeat: active && inView && !paused && !reducedMotion ? Infinity : 0 }}
                        className={cn("pointer-events-none absolute -inset-3 rounded-full blur-lg", done ? "bg-emerald-500/20" : "bg-amber/50")}
                      />
                    )}
                  <button
                    type="button"
                    onClick={() => { setStage(index); setPaused(true); }}
                    aria-current={active ? "step" : undefined}
                    aria-label={`Step ${index + 1}: ${step.title}${done ? ", complete" : active ? ", current" : ""}`}
                    className={cn(
                      "relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 ring-8 ring-off-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary-teal sm:h-14 sm:w-14",
                      done ? "border-emerald-600 bg-emerald-600 text-white" : active ? "border-amber bg-amber text-charcoal shadow-[0_0_20px_4px_rgba(245,166,35,0.45)]" : "border-border-teal bg-white text-primary-teal/60"
                    )}
                  >
                    {done ? <Check size={22} aria-hidden="true" /> : <step.icon size={22} aria-hidden="true" />}
                  </button>
                  </div>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-primary-teal sm:text-xs sm:tracking-[0.2em]">
                    Step 0{index + 1}
                  </p>
                  <h3 className={cn("mt-2 break-words text-xs font-bold sm:text-base lg:text-lg", active || done ? "text-primary-teal" : "text-charcoal")}>
                    {step.title}
                  </h3>
                  <p className="mt-3 hidden text-sm leading-relaxed text-charcoal/70 md:block">
                    {step.desc}
                  </p>
                </li>
              );
            })}
          </ol>

          <div className="mt-8 rounded-2xl border border-border-teal bg-white p-6 md:hidden">
            <p className="font-semibold text-primary-teal">{steps[activeIndex].title}</p>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{steps[activeIndex].desc}</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <p role="status" className="text-xs font-medium text-primary-teal">
              {complete ? "All four steps complete" : `Step ${activeIndex + 1} of ${steps.length}`}
            </p>
            {!reducedMotion && (
              <button
                type="button"
                onClick={() => setPaused((current) => !current)}
                className="inline-flex items-center gap-2 rounded-full border border-border-teal bg-white px-4 py-2 text-xs font-semibold text-primary-teal transition-colors hover:bg-soft-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-teal"
              >
                {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
                {paused ? "Resume" : "Pause"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
