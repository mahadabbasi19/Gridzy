"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What types of businesses does Gridzy partner with?",
    a: "We work with startups, scale-ups, and established enterprises across e-commerce, fintech, healthcare, and SaaS — building tailored solutions for whatever stage you're at.",
  },
  {
    q: "What is the typical development timeline for custom web or mobile applications?",
    a: "Most projects run 6-14 weeks depending on scope, from strategy and design through QA and launch. We share a detailed timeline after our discovery session.",
  },
  {
    q: "Does Gridzy provide ongoing post-launch maintenance and support?",
    a: "Yes — every engagement includes flexible maintenance plans, 24/7 monitoring, and a dedicated support channel so your product keeps performing after go-live.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-off-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-3.5">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-border-teal bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-charcoal sm:text-base">
                    {f.q}
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-soft-teal text-primary-teal transition-transform duration-300",
                      isOpen && "rotate-45 bg-primary-teal text-white"
                    )}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-charcoal/65">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
