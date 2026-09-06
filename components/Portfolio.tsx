"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { portfolioCategories, portfolioProjects, type PortfolioCategory } from "@/lib/data";

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
              <Link
                href={`/portfolio/${p.id}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-border-teal"
              >
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${p.color} 0%, #292929 140%)`,
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/85 via-charcoal/15 to-transparent p-5">
                  <div className="mb-2 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="w-fit rounded-full bg-amber px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-charcoal">
                      {p.category}
                    </span>
                    <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                      {p.result}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-white">{p.title}</p>
                  <p className="mt-1 text-xs text-white/60 line-clamp-1">{p.summary}</p>
                  <span className="mt-3 flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <Eye size={14} /> View Case Study
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
