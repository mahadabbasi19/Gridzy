"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { services, serviceCategories, type ServiceCategory } from "@/lib/data";
import { TiltCard } from "./TiltCard";

const categories: readonly ("All" | ServiceCategory)[] = ["All", ...serviceCategories];

// These two get the wide "bento" treatment when visible — Gridzy's two
// flagship disciplines get more visual weight than the rest of the grid.
const FEATURED_SLUGS = ["ai-automations", "website-development"];

export function ServicesPageContent() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? services : services.filter((s) => s.category === active)),
    [active]
  );

  return (
    <section id="services-grid" className="relative overflow-hidden scroll-mt-20 bg-[#052825] py-24">
      <div className="circuit-grid pointer-events-none absolute inset-0 opacity-[0.1]" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Framer Motion layoutId tab switcher — the active pill slides
            between buttons instead of just swapping colors. */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "relative rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                active === c ? "text-charcoal" : "text-[#EAF4F3]/70 hover:text-white"
              )}
            >
              {active === c && (
                <motion.span
                  layoutId="services-tab-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-amber"
                />
              )}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((s, i) => {
            const featured = FEATURED_SLUGS.includes(s.slug);
            return (
              <motion.div
                key={s.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (i % 4) * 0.06 }}
                className={cn(featured && "sm:col-span-2")}
              >
                <TiltCard className="h-full">
                  <Link
                    href={`/services/${s.slug}`}
                    data-cursor="EXPLORE"
                    className={cn(
                      "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/10",
                      featured ? "p-8" : "p-7"
                    )}
                  >
                    <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />

                    <div className="flex items-center justify-between">
                      <div
                        className={cn(
                          "flex items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 transition-transform duration-300 group-hover:scale-110 group-hover:bg-amber/15 group-hover:text-amber",
                          featured ? "h-14 w-14" : "h-12 w-12"
                        )}
                      >
                        <s.icon size={featured ? 26 : 22} />
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber"
                      />
                    </div>

                    <span className="mt-5 block text-[11px] font-bold uppercase tracking-widest text-emerald-300/70">
                      {s.category}
                    </span>
                    <h3 className={cn("mt-1.5 font-bold text-white", featured ? "text-2xl" : "text-lg")}>
                      {s.title}
                    </h3>
                    {s.subtitle && (
                      <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-amber/70">
                        {s.subtitle}
                      </p>
                    )}
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#EAF4F3]/60">
                      {s.tagline}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {s.techStack.slice(0, featured ? 5 : 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold text-[#EAF4F3]/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
