"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { services, serviceCategories, type ServiceCategory } from "@/lib/data";
import { TiltCard } from "./TiltCard";

const categories: readonly ("All" | ServiceCategory)[] = ["All", ...serviceCategories];

export function ServicesPageContent() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? services : services.filter((s) => s.category === active)),
    [active]
  );

  return (
    <section className="bg-off-white py-24">
      <div className="mx-auto max-w-7xl px-6">
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
          {filtered.map((s, i) => (
            <motion.div
              key={s.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
            >
              <TiltCard className="h-full">
                <Link
                  href={`/services/${s.slug}`}
                  data-cursor="EXPLORE"
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border-teal bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/5"
                >
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft-teal text-primary-teal transition-colors group-hover:bg-primary-teal group-hover:text-white">
                      <s.icon size={22} />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-primary-teal/50 transition-transform duration-300 group-hover:rotate-45 group-hover:text-primary-teal"
                    />
                  </div>
                  <span className="mt-4 block text-[11px] font-bold uppercase tracking-widest text-primary-teal/60">
                    {s.category}
                  </span>
                  <h3 className="mt-1.5 text-lg font-bold text-charcoal">{s.title}</h3>
                  {s.subtitle && (
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-primary-teal/70">
                      {s.subtitle}
                    </p>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{s.tagline}</p>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
