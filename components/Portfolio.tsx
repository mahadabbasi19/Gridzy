"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { portfolioCategories, portfolioProjects, type PortfolioCategory } from "@/lib/data";
import { TiltCard } from "./TiltCard";

const categories: readonly ("All" | PortfolioCategory)[] = ["All", ...portfolioCategories];

export function Portfolio() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? portfolioProjects
        : portfolioProjects.filter((p) => p.category === active),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-semibold transition-colors",
              active === c
                ? "border-primary-teal bg-primary-teal text-white"
                : "border-border-teal bg-white text-charcoal hover:border-primary-teal"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <TiltCard className="h-full">
                <Link
                  href={`/portfolio/${p.id}`}
                  data-cursor="VIEW CASE STUDY"
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-border-teal shadow-lg shadow-charcoal/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary-teal/20"
                >
                  {/* dashboard/app mockup base */}
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(150deg, ${p.color} 0%, #14181c 130%)`,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.15]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                        backgroundSize: "26px 26px",
                      }}
                    />
                    {/* faux UI chrome */}
                    <div className="absolute inset-x-5 top-5 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-white/40" />
                      <span className="h-2 w-2 rounded-full bg-white/25" />
                      <span className="h-2 w-2 rounded-full bg-white/25" />
                      <span className="ml-auto h-2 w-14 rounded-full bg-white/15" />
                    </div>
                    <div className="absolute left-5 top-14 h-[calc(100%-4.5rem)] w-12 rounded-lg bg-white/10" />
                    <div className="absolute left-20 right-5 top-14 flex flex-col gap-2.5">
                      <div className="h-16 w-full rounded-lg bg-white/10" />
                      <div className="flex gap-2.5">
                        <div className="h-10 w-1/2 rounded-lg bg-white/10" />
                        <div className="h-10 w-1/2 rounded-lg bg-white/10" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />

                  {/* glass tech tags */}
                  <div className="absolute right-4 top-4 flex flex-wrap justify-end gap-1.5">
                    {p.services.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-white backdrop-blur-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex flex-col p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="w-fit rounded-full bg-amber px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-charcoal">
                        {p.category}
                      </span>
                      <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                        {p.result}
                      </span>
                    </div>
                    <p className="flex items-center gap-1.5 text-lg font-bold text-white">
                      {p.title}
                      <ArrowUpRight
                        size={16}
                        className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </p>
                    <p className="mt-1 text-xs text-white/60 line-clamp-1">{p.summary}</p>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
