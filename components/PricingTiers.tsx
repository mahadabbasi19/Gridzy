"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { pricingTiers, slaPackages } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { TiltCard } from "./TiltCard";

export function PricingTiers() {
  return (
    <>
      <section className="bg-off-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
              Service Plans
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal sm:text-4xl">
              Transparent Pricing Tiers
            </h2>
            <p className="mt-4 text-base text-charcoal/70">
              Choose a plan that fits where you are, and scale up whenever
              you&apos;re ready.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={cn("h-full", tier.highlighted && "lg:-translate-y-4")}
              >
              <TiltCard className="h-full">
              <div
                data-cursor="SELECT"
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-8",
                  tier.highlighted
                    ? "border-primary-teal bg-deep-teal text-white shadow-2xl"
                    : "border-border-teal bg-white"
                )}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber px-4 py-1 text-xs font-bold text-charcoal">
                    Most Popular
                  </span>
                )}
                <p
                  className={cn(
                    "text-sm font-bold uppercase tracking-widest",
                    tier.highlighted ? "text-amber" : "text-primary-teal"
                  )}
                >
                  {tier.name}
                </p>
                <p className="mt-3 text-3xl font-black tracking-tight">
                  {tier.price}
                </p>
                <p
                  className={cn(
                    "text-xs",
                    tier.highlighted ? "text-white/60" : "text-charcoal/50"
                  )}
                >
                  {tier.period}
                </p>
                <p
                  className={cn(
                    "mt-4 text-sm leading-relaxed",
                    tier.highlighted ? "text-white/80" : "text-charcoal/65"
                  )}
                >
                  {tier.description}
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <Check
                        size={17}
                        className={cn(
                          "mt-0.5 shrink-0",
                          tier.highlighted ? "text-amber" : "text-primary-teal"
                        )}
                      />
                      <span
                        className={cn(
                          "text-sm",
                          tier.highlighted ? "text-white/85" : "text-charcoal/75"
                        )}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="mt-8">
                  <Button
                    variant={tier.highlighted ? "amber" : "teal-outline"}
                    className="w-full"
                  >
                    Select Plan
                  </Button>
                </Link>
              </div>
              </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft-teal py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
              Hosting & Maintenance
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal sm:text-4xl">
              SLA & Care Packages
            </h2>
            <p className="mt-4 text-base text-charcoal/70">
              Keep your product fast, secure, and monitored around the clock.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {slaPackages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <TiltCard>
                  <div className="rounded-2xl border border-border-teal bg-white p-7">
                    <p className="text-lg font-bold text-charcoal">{pkg.name}</p>
                    <p className="mt-1 text-2xl font-black text-primary-teal">{pkg.price}</p>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                      {pkg.description}
                    </p>
                    <div className="mt-5 flex flex-col gap-2.5">
                      {pkg.features.map((f) => (
                        <div key={f} className="flex items-start gap-2.5">
                          <Check size={16} className="mt-0.5 shrink-0 text-amber" />
                          <span className="text-sm text-charcoal/75">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
