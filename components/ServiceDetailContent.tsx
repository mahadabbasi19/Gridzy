"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { Service } from "@/lib/data";
import { Button } from "./ui/Button";

export function ServiceDetailContent({
  service,
}: {
  service: Omit<Service, "icon">;
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-deep-teal py-20 sm:py-24">
        <div className="circuit-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="mb-5 inline-block rounded-full border border-primary-teal bg-primary-teal/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber">
            {service.category}
          </span>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            {service.title}
          </h1>
          {service.subtitle && (
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-amber/80">
              {service.subtitle}
            </p>
          )}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#EAF4F3]/90 sm:text-lg">
            {service.description}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm font-semibold text-amber">
            Built for: {service.audience}
          </p>
          <div className="mt-8">
            <a href="#service-quote">
              <Button size="lg">
                Get a Quote <ArrowRight size={18} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
              What We Deliver
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-charcoal sm:text-3xl">
              Concrete outputs, not vague promises
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-3.5">
              {service.deliverables.map((d) => (
                <div key={d} className="flex items-start gap-2.5">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-amber" />
                  <span className="text-sm text-charcoal/80">{d}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
              Tech Stack Used
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-charcoal sm:text-3xl">
              Tools built for the job
            </h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {service.techStack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border-teal bg-soft-teal px-4 py-2 text-sm font-semibold text-primary-teal"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border-teal bg-white p-6">
              <p className="text-sm font-bold text-charcoal">
                Not sure this is the right service?
              </p>
              <p className="mt-1.5 text-sm text-charcoal/60">
                Talk to our team and we&apos;ll help you scope the right
                engagement for your goals.
              </p>
              <Link href="/contact" className="mt-4 inline-block">
                <Button variant="teal-outline" size="sm">
                  Book a Strategy Call
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-soft-teal py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
              How It Works
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-charcoal sm:text-3xl">
              Step-by-Step Delivery Workflow
            </h2>
          </div>

          <div className="relative mt-14">
            <div className="absolute left-5 top-0 h-full w-px bg-border-teal" />
            <div className="flex flex-col gap-8">
              {service.workflow.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative flex gap-6 pl-14"
                >
                  <span className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary-teal text-sm font-bold text-white ring-4 ring-soft-teal">
                    {i + 1}
                  </span>
                  <div className="rounded-2xl border border-border-teal bg-white p-5 flex-1">
                    <p className="font-bold text-charcoal">{w.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-charcoal/65">{w.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="service-quote" className="bg-off-white py-24">
        <div className="mx-auto max-w-2xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
              Get Started
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-charcoal sm:text-3xl">
              Request a Quote for {service.title}
            </h2>
            <p className="mt-3 text-sm text-charcoal/65">
              Tell us a bit about your project and we&apos;ll get back to you
              within one business day with a scoped estimate.
            </p>
          </div>

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-border-teal bg-soft-teal p-8 text-center">
              <CheckCircle2 className="mx-auto text-primary-teal" size={32} />
              <p className="mt-3 font-bold text-charcoal">Request received!</p>
              <p className="mt-1 text-sm text-charcoal/65">
                A Gridzy strategist will reach out to sales@gridzy.dev shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <input
                required
                type="text"
                placeholder="Full Name"
                className="rounded-xl border border-border-teal bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary-teal"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-border-teal bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary-teal"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="rounded-xl border border-border-teal bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary-teal sm:col-span-2"
              />
              <textarea
                required
                rows={4}
                placeholder="Tell us about your project..."
                className="rounded-xl border border-border-teal bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary-teal sm:col-span-2"
              />
              <Button type="submit" size="lg" className="sm:col-span-2">
                Send Request <Send size={16} />
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
