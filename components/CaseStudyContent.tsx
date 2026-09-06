"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { PortfolioProject } from "@/lib/data";
import { Button } from "./ui/Button";
import { CircuitPattern } from "./CircuitNode";

export function CaseStudyContent({ project }: { project: PortfolioProject }) {
  return (
    <>
      <section className="relative overflow-hidden bg-deep-teal py-20">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `linear-gradient(135deg, ${project.color} 0%, transparent 60%)`,
          }}
        />
        <div className="circuit-grid absolute inset-0 opacity-20" />
        <CircuitPattern className="pointer-events-none absolute -right-16 -top-10 h-64 w-64 opacity-40" />

        <div className="relative mx-auto max-w-5xl px-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors hover:text-amber"
          >
            <ArrowLeft size={15} /> Back to Portfolio
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-amber px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-charcoal">
              {project.category}
            </span>
            <span className="rounded-full border border-primary-teal bg-primary-teal/20 px-3.5 py-1 text-xs font-bold text-white">
              {project.year}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-base text-[#EAF4F3]/80">
            Client: <span className="font-semibold text-white">{project.client}</span>
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#EAF4F3]/90">
            {project.summary}
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-primary-teal/60 bg-primary-teal/20 px-6 py-4 backdrop-blur-md">
            <span className="text-2xl font-black text-amber">{project.result}</span>
            <span className="text-xs text-[#EAF4F3]/80">Key outcome from this engagement</span>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-3">
          {[
            { label: "The Challenge", text: project.challenge },
            { label: "The Solution", text: project.solution },
            { label: "The Outcome", text: project.outcome },
          ].map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
                {block.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{block.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-5xl px-6">
          <div className="rounded-2xl border border-border-teal bg-soft-teal p-8">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
              Services Provided
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border-teal bg-white px-4 py-2 text-sm font-semibold text-charcoal"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl px-6 text-center">
          <p className="text-lg font-bold text-charcoal">
            Ready to start a project like this?
          </p>
          <Link href="/contact" className="mt-5 inline-block">
            <Button size="lg">
              Start Your Project <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
