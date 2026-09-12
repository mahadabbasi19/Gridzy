"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ClipboardList,
  Code2,
  LineChart,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/Button";

const steps = [
  {
    icon: ClipboardList,
    title: "Discovery & Requirements",
    desc: "Workshops to define your goals and exactly what to build.",
    tag: "gridzy / brief.md",
    mock: [
      { label: "Goals defined", value: "100%" },
      { label: "Stakeholder interviews", value: "6" },
      { label: "Scope locked", value: "Yes" },
    ],
  },
  {
    icon: Target,
    title: "Strategy & Planning",
    desc: "Scope, architecture, and a milestone roadmap locked in.",
    tag: "gridzy / roadmap.plan",
    mock: [
      { label: "Milestones", value: "5" },
      { label: "Architecture", value: "Approved" },
      { label: "Sprint 0", value: "Ready" },
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Wireframes evolve into a polished, full design system.",
    tag: "gridzy / design-system.fig",
    mock: [
      { label: "Screens designed", value: "42" },
      { label: "Components", value: "128" },
      { label: "Client review", value: "Approved" },
    ],
  },
  {
    icon: Code2,
    title: "Development",
    desc: "Focused sprints with weekly demos to keep you in the loop.",
    tag: "gridzy / build.log",
    mock: [
      { label: "Sprint progress", value: "78%" },
      { label: "Build status", value: "Passing" },
      { label: "Open PRs", value: "3" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Cross-device, performance, and security testing, end to end.",
    tag: "gridzy / qa-report.json",
    mock: [
      { label: "Test coverage", value: "94%" },
      { label: "Critical bugs", value: "0" },
      { label: "Lighthouse score", value: "98" },
    ],
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "Domain cutover and deployment — your product ships live.",
    tag: "gridzy / deploy.sh",
    mock: [
      { label: "Deployment", value: "Live" },
      { label: "Uptime", value: "99.98%" },
      { label: "Monitoring", value: "Active" },
    ],
  },
  {
    icon: LineChart,
    title: "Support & Growth",
    desc: "Ongoing iteration and monitoring as your product grows.",
    tag: "gridzy / growth.dash",
    mock: [
      { label: "Response time", value: "< 4h" },
      { label: "Iterations shipped", value: "12" },
      { label: "Client retention", value: "96%" },
    ],
  },
];

const STEP_DURATION = 3200;

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, STEP_DURATION);
    return () => clearInterval(interval);
  }, [isInView]);

  const current = steps[active];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-off-white py-24 lg:py-32"
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1fr_1fr] lg:gap-10">
        {/* Left: copy + step list */}
        <div>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-teal/30 bg-soft-teal px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-teal">
            <Sparkles size={13} /> How We Work
          </span>
          <h2 className="max-w-md text-3xl font-black leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
            From First Brief to Launch Day
          </h2>

          <div className="mt-10 flex flex-col">
            {steps.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className="group relative flex gap-4 py-3.5 text-left"
                >
                  <span className="relative flex w-4 shrink-0 justify-center">
                    <span className="absolute top-1.5 h-full w-px bg-charcoal/10" />
                    {isActive && (
                      <motion.span
                        layoutId="active-rail"
                        className="absolute top-1.5 h-full w-px bg-amber shadow-[0_0_10px_2px_rgba(245,166,35,0.6)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span
                      className={`relative z-10 mt-1.5 h-2 w-2 rounded-full transition-colors duration-300 ${
                        isActive ? "bg-amber" : "bg-charcoal/20"
                      }`}
                    />
                  </span>
                  <div>
                    <p
                      className={`text-base font-bold transition-colors duration-300 sm:text-lg ${
                        isActive ? "text-charcoal" : "text-charcoal/35 group-hover:text-charcoal/60"
                      }`}
                    >
                      {s.title}
                    </p>
                    {/* One line, always reserved (not mounted/unmounted)
                        so the list's total height never changes as the
                        active step advances — only opacity toggles. Kept
                        to a single truncated line (rather than the full
                        2-3 line description) so it stays directly under
                        its own title without ballooning the gap between
                        steps. */}
                    <p
                      className={`mt-1 line-clamp-1 max-w-sm text-xs leading-snug text-charcoal/60 transition-opacity duration-300 sm:text-sm ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {s.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <Link href="/contact" className="mt-8 inline-block">
            <Button size="lg">
              Get Started <ArrowRight size={18} />
            </Button>
          </Link>
        </div>

        {/* Right: tilted device mockup that swaps per step */}
        <div className="relative mx-auto h-[19rem] w-full max-w-[22rem] sm:h-[26rem] sm:max-w-md lg:h-[440px]">
          <div className="absolute inset-4 rounded-[2.5rem] border border-border-teal sm:inset-8" />
          <div className="absolute inset-10 rounded-[2.5rem] border border-border-teal/70 sm:inset-16" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24, rotate: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, rotate: 4, scale: 1 }}
              exit={{ opacity: 0, y: -16, rotate: -2, scale: 0.97 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute right-1 top-1 w-[82%] rounded-2xl border border-primary-teal/50 bg-[#0A2E2C] p-1.5 shadow-2xl shadow-black/40 sm:right-2 sm:top-2 sm:w-72 sm:rounded-3xl lg:w-[19rem] xl:w-[21rem]"
            >
              <div className="rounded-[1.3rem] bg-[#0A2E2C]">
                <div className="flex items-center gap-1.5 border-b border-primary-teal/30 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="ml-2 truncate text-[10px] font-medium text-white/40">
                    {current.tag}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber text-charcoal">
                    <current.icon size={20} />
                  </div>
                  <p className="mt-4 text-xs font-black tracking-widest text-amber">
                    STEP 0{active + 1} / 0{steps.length}
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">{current.title}</p>

                  <div className="mt-5 flex flex-col gap-2.5">
                    {current.mock.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between rounded-lg bg-white/5 px-3.5 py-2.5"
                      >
                        <span className="text-xs text-[#EAF4F3]/60">{row.label}</span>
                        <span className="text-xs font-bold text-white">{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-amber"
                      initial={{ width: "0%" }}
                      animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-1 left-1 flex items-center gap-1.5 rounded-xl border border-border-teal bg-white px-2.5 py-2 shadow-xl sm:bottom-2 sm:left-2 sm:gap-2 sm:px-4 sm:py-3">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-amber sm:h-2.5 sm:w-2.5" />
            <span className="whitespace-nowrap text-[10px] font-bold text-charcoal sm:text-xs">
              Step {active + 1} of {steps.length} in progress
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
