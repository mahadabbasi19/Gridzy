"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { portfolioProjects } from "@/lib/data";
import { Button } from "./ui/Button";
import { TiltCard } from "./TiltCard";

export function PortfolioTeaser() {
  const featured = portfolioProjects.slice(0, 3);

  return (
    <section className="bg-soft-teal py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
            Our Work
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal sm:text-4xl">
            Recent Case Studies
          </h2>
          <p className="mt-4 text-base text-charcoal/70">
            A snapshot of the digital products, brands, and experiences we&apos;ve
            crafted for our partners.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <TiltCard className="h-full">
                <Link
                  href={`/portfolio/${p.id}`}
                  data-cursor="VIEW CASE STUDY"
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-border-teal shadow-lg shadow-charcoal/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary-teal/20"
                >
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
                    <span className="mb-2 w-fit rounded-full bg-amber px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-charcoal">
                      {p.result}
                    </span>
                    <p className="flex items-center gap-1.5 text-lg font-bold text-white">
                      {p.title}
                      <ArrowUpRight
                        size={16}
                        className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </p>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/portfolio">
            <Button variant="teal" size="lg">
              View Full Portfolio <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
