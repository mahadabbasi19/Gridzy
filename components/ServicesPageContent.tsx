"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { services } from "@/lib/data";
import { ServiceTechStack } from "./ServiceTechStack";
import { TiltCard } from "./TiltCard";

// These two get the wide "bento" treatment when visible — Gridzy's two
// flagship disciplines get more visual weight than the rest of the grid.
const FEATURED_SLUGS = ["ai-automations", "website-development"];

export function ServicesPageContent() {
  return (
    <section id="services-grid" className="relative overflow-hidden scroll-mt-20 bg-off-white py-24">

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const featured = FEATURED_SLUGS.includes(s.slug);
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (i % 4) * 0.06 }}
                className={cn(featured && "sm:col-span-2")}
              >
                <TiltCard className="h-full">
                  <article
                    className={cn(
                      "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-teal bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-teal/40 hover:shadow-xl hover:shadow-charcoal/5",
                      featured ? "p-8" : "p-7"
                    )}
                  >
                    <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />

                    <div className="flex items-center justify-between">
                      <div
                        className={cn(
                          "flex items-center justify-center rounded-xl bg-soft-teal text-primary-teal transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary-teal group-hover:text-white",
                          featured ? "h-14 w-14" : "h-12 w-12"
                        )}
                      >
                        <s.icon size={featured ? 26 : 22} />
                      </div>
                    </div>

                    <span className="mt-5 block text-[11px] font-bold uppercase tracking-widest text-primary-teal">
                      {s.category}
                    </span>
                    <h3 className={cn("mt-1.5 font-bold text-charcoal", featured ? "text-2xl" : "text-lg")}>
                      {s.title}
                    </h3>
                    {s.subtitle && (
                      <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-primary-teal/80">
                        {s.subtitle}
                      </p>
                    )}
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/70">
                      {s.tagline}
                    </p>

                    <ServiceTechStack items={s.techStack} />
                  </article>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
