"use client";

import { motion } from "framer-motion";
import { Globe2, Lock, Zap } from "lucide-react";
import { useRef } from "react";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

// Broad domain pills mapped to the exact service titles the form's
// Step 1 uses, so a click pre-selects a real, valid choice rather than
// an ad-hoc label the form doesn't recognize.
const domains = [
  { label: "Web & SaaS", slug: "website-development" },
  { label: "Mobile Apps", slug: "mobile-app-development" },
  { label: "AI & Automation", slug: "ai-automations" },
  { label: "Custom Software", slug: "custom-software-development" },
]
  .map((d) => ({ ...d, title: services.find((s) => s.slug === d.slug)?.title ?? d.label }));

const metrics = [
  { icon: Zap, label: "24h Project Estimate" },
  { icon: Lock, label: "100% Confidential / NDA Ready" },
  { icon: Globe2, label: "Global Engineering Team" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function ContactHero({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (title: string) => void;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    sectionRef.current?.style.setProperty("--mx", `${x}%`);
    sectionRef.current?.style.setProperty("--my", `${y}%`);
  };

  const handlePick = (title: string) => {
    onSelect(title);
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-gradient-to-b from-[#0D2A2A] to-[#051414] py-24 sm:py-28"
      style={{ ["--mx" as string]: "50%", ["--my" as string]: "30%" }}
    >
      {/* mouse-following radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx) var(--my), rgba(243,160,28,0.12), transparent 60%)",
        }}
      />
      <div className="circuit-grid pointer-events-none absolute inset-0 opacity-[0.12]" />
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-primary-teal/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-amber/10 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        {/* badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold text-[#EAF4F3]/80 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open for New Projects
          <span className="text-[#EAF4F3]/30">•</span>
          <span className="text-amber">Average Response &lt; 2 hours</span>
        </motion.div>

        {/* headline */}
        <motion.h1
          variants={item}
          className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Let&apos;s Build Something{" "}
          <span className="bg-gradient-to-r from-amber to-[#ffd27a] bg-clip-text text-transparent">
            Bold
          </span>{" "}
          Together
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#EAF4F3]/70 sm:text-lg"
        >
          Have a project in mind or need technical horsepower? Pick your
          domain below or fill out our project scope engine.
        </motion.p>

        {/* interactive domain selector */}
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {domains.map((d) => {
            const active = selected === d.title;
            return (
              <button
                key={d.slug}
                type="button"
                onClick={() => handlePick(d.title)}
                aria-pressed={active}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-semibold backdrop-blur-md transition-all duration-300",
                  active
                    ? "border-amber bg-amber/15 text-amber shadow-[0_0_20px_-2px_rgba(243,160,28,0.5)]"
                    : "border-white/15 bg-white/[0.03] text-[#EAF4F3]/80 hover:border-amber/40 hover:text-amber"
                )}
              >
                {d.label}
              </button>
            );
          })}
        </motion.div>

        {/* micro-metrics footer */}
        <motion.div
          variants={item}
          className="mt-12 flex w-fit max-w-full flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-md sm:flex-row sm:flex-wrap sm:justify-center sm:gap-y-3"
        >
          {metrics.map((m, i) => (
            <div key={m.label} className="flex items-center">
              {i > 0 && (
                <span className="mx-6 hidden h-4 w-px shrink-0 bg-white/10 sm:block" />
              )}
              <div className="flex items-center gap-2 text-xs font-medium text-[#EAF4F3]/70 sm:text-sm">
                <m.icon size={15} className="shrink-0 text-amber" />
                <span className="whitespace-nowrap">{m.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
