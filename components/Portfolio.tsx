"use client";

import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { recentWork } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";

// Filter pills are the canonical categories, not the free-text tags —
// e.g. choosing "Custom Software" matches both SS Track's "Custom
// Software Development (HRM)" tag and Osteoneks' "Custom CRM" tag,
// since both carry the "Custom Software" category underneath.
const categories = Array.from(new Set(recentWork.flatMap((p) => p.categories)));
const filters = ["All", ...categories, "Artificial Intelligence", "Design"];

// The full portfolio is the same real, live projects shown in the
// homepage's "Recent Work" teaser — same data, same card, filterable
// by the service each project actually used.
export function Portfolio() {
  return (
    <Suspense fallback={<section id="portfolio-grid" className="scroll-mt-24 bg-off-white py-24"><p role="status" className="text-center text-primary-teal">Loading projects…</p></section>}>
      <FilteredPortfolio />
    </Suspense>
  );
}

function FilteredPortfolio() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const active = category && filters.includes(category) ? category : "All";
  const filtered = active === "All"
    ? recentWork
    : recentWork.filter((project) => project.categories.includes(active));

  return (
    <section id="portfolio-grid" className="scroll-mt-24 bg-off-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
            Our Work
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal sm:text-4xl">
            Live Products We&apos;ve Shipped
          </h2>
          <p className="mt-4 text-base text-charcoal/70">
            Real client sites, not mockups — click any card to visit it.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {filters.map((f) => (
            <Link
              key={f}
              href={f === "All" ? "/portfolio/#portfolio-grid" : `/portfolio/?category=${encodeURIComponent(f)}#portfolio-grid`}
              scroll={false}
              aria-current={active === f ? "true" : undefined}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-semibold transition-colors",
                active === f
                  ? "border-primary-teal bg-primary-teal text-white"
                  : "border-border-teal bg-white text-charcoal hover:border-primary-teal"
              )}
            >
              {f}
            </Link>
          ))}
        </div>

        <div id="portfolio-results" className="scroll-mt-24">
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.url} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-sm text-charcoal/50">
            No projects in this category yet.
          </p>
        )}
        </div>
      </div>
    </section>
  );
}
