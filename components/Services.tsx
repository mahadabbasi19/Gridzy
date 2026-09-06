"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";
import { Button } from "./ui/Button";

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

  return (
    <section id="services" className="bg-off-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {showHeader && (
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
              What We Offer
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal sm:text-4xl">
              Core Services
            </h2>
            <p className="mt-4 text-base text-charcoal/70">
              End-to-end tech and creative capabilities under one roof.
            </p>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="group relative block h-full overflow-hidden rounded-2xl border border-border-teal bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/5"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft-teal text-primary-teal transition-colors group-hover:bg-primary-teal group-hover:text-white">
                    <s.icon size={22} />
                  </div>
                  <span className="text-xs font-black tracking-widest text-primary-teal/50">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-charcoal">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                  {s.tagline}
                </p>
                <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

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
