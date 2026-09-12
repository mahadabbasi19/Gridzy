"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services, type Service } from "@/lib/data";
import { Button } from "./ui/Button";
import { TiltCard } from "./TiltCard";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
    >
      <TiltCard className="h-full">
        <Link
          href={`/services/${service.slug}`}
          data-cursor="EXPLORE"
          className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-teal bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary-teal/40 hover:shadow-xl hover:shadow-charcoal/5"
        >
          <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft-teal text-primary-teal transition-colors group-hover:bg-primary-teal group-hover:text-white">
              <service.icon size={22} />
            </div>
            <span className="text-xs font-black tracking-widest text-primary-teal/50">
              0{index + 1}
            </span>
          </div>
          <h3 className="mt-5 text-lg font-bold text-charcoal">{service.title}</h3>
          {service.subtitle && (
            <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-primary-teal/70">
              {service.subtitle}
            </p>
          )}
          <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/65">
            {service.description}
          </p>
          <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Learn More <ArrowRight size={14} />
          </span>
        </Link>
      </TiltCard>
    </motion.div>
  );
}

function FeaturedServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: 0.16 }}
      className="mx-auto mt-6 max-w-3xl"
    >
      <TiltCard>
        <Link
          href={`/services/${service.slug}`}
          data-cursor="EXPLORE"
          className="group relative flex flex-col items-start gap-5 overflow-hidden rounded-2xl border border-primary-teal/30 bg-gradient-to-br from-deep-teal to-[#0D3F3D] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10 sm:flex-row sm:items-center sm:gap-7 sm:p-8"
        >
          <div className="circuit-grid absolute inset-0 opacity-[0.08]" />
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber text-charcoal transition-transform duration-300 group-hover:scale-105">
            <service.icon size={26} />
          </div>
          <div className="relative flex-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber">
              Featured Service
            </span>
            <h3 className="mt-1.5 text-xl font-bold text-white">{service.title}</h3>
            {service.subtitle && (
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-[#EAF4F3]/60">
                {service.subtitle}
              </p>
            )}
            <p className="mt-2 text-sm leading-relaxed text-[#EAF4F3]/75">
              {service.description}
            </p>
          </div>
          <span className="relative flex shrink-0 items-center gap-1.5 self-start text-sm font-semibold text-amber transition-transform duration-300 group-hover:translate-x-1 sm:self-center">
            Learn More <ArrowUpRight size={16} />
          </span>
        </Link>
      </TiltCard>
    </motion.div>
  );
}

export function Services({
  limit,
  showHeader = true,
  showCta = false,
}: {
  limit?: number;
  showHeader?: boolean;
  showCta?: boolean;
}) {
  const list = limit ? services.slice(0, limit) : services;

  // With an odd count where exactly one card would be left alone in the
  // final row of a 3-column grid, pull it out and render it as a wide
  // featured banner instead — keeps the layout visually balanced rather
  // than leaving a lonely card stranded under a partial row.
  const strandedCount = list.length % 3;
  const gridItems = strandedCount === 1 ? list.slice(0, -1) : list;
  const featured = strandedCount === 1 ? list[list.length - 1] : null;

  return (
    <section id="services" className="bg-off-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {showHeader && (
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
              What We Offer
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mt-4 text-base text-charcoal/70">
              End-to-end tech and creative capabilities under one roof.
            </p>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gridItems.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>

        {featured && <FeaturedServiceCard service={featured} />}

        {showCta && (
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="teal" size="lg">
                View All Services <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
