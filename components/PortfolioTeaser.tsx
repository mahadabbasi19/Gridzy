"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import { portfolioProjects } from "@/lib/data";
import { Button } from "./ui/Button";

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
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent p-5">
                  <span className="mb-2 w-fit rounded-full bg-amber px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-charcoal">
                    {p.result}
                  </span>
                  <p className="text-lg font-bold text-white">{p.title}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Eye size={13} /> View Case Study
                  </p>
                </div>
              </Link>
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
