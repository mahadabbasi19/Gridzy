"use client";

import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const serviceOptions = [
  { label: "Website Development", base: 4000, multiplier: 1 },
  { label: "Mobile App Development", base: 9000, multiplier: 1.3 },
  { label: "Custom AI Software", base: 12000, multiplier: 1.6 },
  { label: "Digital Marketing / SEO", base: 1500, multiplier: 0.6 },
];

const scopeOptions = [
  { label: "Simple", desc: "Small scope, few core flows", factor: 1 },
  { label: "Standard", desc: "Multiple features, integrations", factor: 1.8 },
  { label: "Complex", desc: "Custom systems, high scale", factor: 3 },
];

const timelineOptions = [
  { label: "Flexible (12+ weeks)", factor: 1 },
  { label: "Standard (6-12 weeks)", factor: 1.15 },
  { label: "Rush (< 6 weeks)", factor: 1.4 },
];

export function PricingEstimator() {
  const [service, setService] = useState(0);
  const [scope, setScope] = useState(1);
  const [timeline, setTimeline] = useState(1);

  const estimate = useMemo(() => {
    const s = serviceOptions[service];
    const sc = scopeOptions[scope];
    const t = timelineOptions[timeline];
    const low = Math.round((s.base * s.multiplier * sc.factor * t.factor) / 100) * 100;
    const high = Math.round((low * 1.45) / 100) * 100;
    return { low, high };
  }, [service, scope, timeline]);

  return (
    <section className="bg-soft-teal py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
            Project Estimator
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal sm:text-4xl">
            Get an Instant Budget Range
          </h2>
          <p className="mt-4 text-base text-charcoal/70">
            Select your service, scope, and timeline for a ballpark estimate —
            no commitment required.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 rounded-2xl border border-border-teal bg-white p-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-bold text-charcoal">1. Service Needed</p>
              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {serviceOptions.map((s, i) => (
                  <button
                    key={s.label}
                    onClick={() => setService(i)}
                    className={cn(
                      "rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors",
                      service === i
                        ? "border-primary-teal bg-primary-teal text-white"
                        : "border-border-teal bg-off-white text-charcoal hover:border-primary-teal"
                    )}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-charcoal">2. Project Scope</p>
              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {scopeOptions.map((s, i) => (
                  <button
                    key={s.label}
                    onClick={() => setScope(i)}
                    className={cn(
                      "rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                      scope === i
                        ? "border-primary-teal bg-primary-teal text-white"
                        : "border-border-teal bg-off-white text-charcoal hover:border-primary-teal"
                    )}
                  >
                    <span className="block font-semibold">{s.label}</span>
                    <span
                      className={cn(
                        "block text-xs",
                        scope === i ? "text-white/70" : "text-charcoal/50"
                      )}
                    >
                      {s.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-charcoal">3. Timeline</p>
              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {timelineOptions.map((t, i) => (
                  <button
                    key={t.label}
                    onClick={() => setTimeline(i)}
                    className={cn(
                      "rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors",
                      timeline === i
                        ? "border-primary-teal bg-primary-teal text-white"
                        : "border-border-teal bg-off-white text-charcoal hover:border-primary-teal"
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-deep-teal p-8 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber text-charcoal">
              <Calculator size={22} />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#EAF4F3]/70">
              Estimated Budget Range
            </p>
            <motion.p
              key={`${estimate.low}-${estimate.high}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-3xl font-black text-white sm:text-4xl"
            >
              ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
            </motion.p>
            <p className="mt-3 max-w-[15rem] text-xs text-[#EAF4F3]/60">
              A rough guide — final quotes are scoped after a discovery call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
