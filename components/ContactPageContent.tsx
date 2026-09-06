"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { CircuitPattern } from "./CircuitNode";

const serviceChoices = [
  "Website Development",
  "Custom AI Software",
  "Digital Marketing",
  "Mobile App Development",
  "Graphic & Brand Design",
  "PPC Advertising",
  "SEO",
  "Customer Support",
  "Managed Hosting",
];

const budgetChoices = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000+",
];

const steps = ["Service Needed", "Budget Range", "Project Details", "Contact Info"];

export function ContactPageContent() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: "",
    budget: "",
    details: "",
    name: "",
    email: "",
    company: "",
  });

  const canProceed =
    (step === 0 && form.service) ||
    (step === 1 && form.budget) ||
    (step === 2 && form.details.trim().length > 0) ||
    step === 3;

  return (
    <section className="bg-off-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left: contact info */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
            Get in Touch
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal sm:text-4xl">
            Let&apos;s Build Something Great
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/70">
            Reach our Karachi head office directly, or fill out the project
            inquiry form and a strategist will follow up within one business
            day.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft-teal text-primary-teal">
                <MapPin size={19} />
              </div>
              <div>
                <p className="text-sm font-bold text-charcoal">Head Office</p>
                <p className="text-sm text-charcoal/65">Karachi, Pakistan</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft-teal text-primary-teal">
                <Mail size={19} />
              </div>
              <div>
                <p className="text-sm font-bold text-charcoal">Email Us</p>
                <div className="flex flex-col gap-0.5 text-sm text-charcoal/65">
                  <a href="mailto:sales@gridzy.dev" className="hover:text-primary-teal">
                    sales@gridzy.dev <span className="text-charcoal/40">— New projects</span>
                  </a>
                  <a href="mailto:info@gridzy.dev" className="hover:text-primary-teal">
                    info@gridzy.dev <span className="text-charcoal/40">— General inquiries</span>
                  </a>
                  <a href="mailto:support@gridzy.dev" className="hover:text-primary-teal">
                    support@gridzy.dev <span className="text-charcoal/40">— Existing clients</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft-teal text-primary-teal">
                <Phone size={19} />
              </div>
              <div>
                <p className="text-sm font-bold text-charcoal">Call Us</p>
                <p className="text-sm text-charcoal/65">+92 333 0000000</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft-teal text-primary-teal">
                <Clock size={19} />
              </div>
              <div>
                <p className="text-sm font-bold text-charcoal">Office Hours</p>
                <p className="text-sm text-charcoal/65">Mon - Fri, 9:00 - 18:00 PKT</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-border-teal bg-deep-teal">
            <div className="circuit-grid absolute inset-0 opacity-30" />
            <CircuitPattern className="absolute inset-0 h-full w-full opacity-60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
              <MapPin className="text-amber" size={26} />
              <p className="text-sm font-bold text-white">Karachi, Pakistan</p>
              <p className="text-xs text-[#EAF4F3]/70">Interactive map preview</p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border-teal bg-soft-teal p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber text-charcoal">
              <Calendar size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-charcoal">
                Book a 15-Min Strategy Call
              </p>
              <p className="text-xs text-charcoal/60">
                Pick a time that works and we&apos;ll come prepared.
              </p>
            </div>
            <Button variant="teal-outline" size="sm">
              Schedule
            </Button>
          </div>
        </div>

        {/* Right: multi-step form */}
        <div className="rounded-2xl border border-border-teal bg-white p-6 sm:p-8">
          {!submitted && (
            <div className="mb-8 flex items-center gap-2">
              {steps.map((s, i) => (
                <div key={s} className="flex flex-1 items-center gap-2">
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors",
                      i < step
                        ? "bg-primary-teal text-white"
                        : i === step
                        ? "bg-amber text-charcoal"
                        : "bg-soft-teal text-charcoal/40"
                    )}
                  >
                    {i < step ? <Check size={14} /> : i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={cn(
                        "h-0.5 flex-1 rounded",
                        i < step ? "bg-primary-teal" : "bg-border-teal"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center py-10 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-soft-teal text-primary-teal">
                  <Check size={30} />
                </div>
                <p className="mt-5 text-xl font-bold text-charcoal">
                  Thanks — we got it!
                </p>
                <p className="mt-2 max-w-sm text-sm text-charcoal/65">
                  A Gridzy strategist will review your project details and
                  reach out to {form.email || "your inbox"} within one
                  business day.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-primary-teal">
                  Step {step + 1} of {steps.length}
                </p>
                <h3 className="mt-1.5 text-xl font-bold text-charcoal">
                  {steps[step]}
                </h3>

                {step === 0 && (
                  <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {serviceChoices.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm({ ...form, service: s })}
                        className={cn(
                          "rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors",
                          form.service === s
                            ? "border-primary-teal bg-primary-teal text-white"
                            : "border-border-teal bg-off-white text-charcoal hover:border-primary-teal"
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}

                {step === 1 && (
                  <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {budgetChoices.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm({ ...form, budget: b })}
                        className={cn(
                          "rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors",
                          form.budget === b
                            ? "border-primary-teal bg-primary-teal text-white"
                            : "border-border-teal bg-off-white text-charcoal hover:border-primary-teal"
                        )}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                )}

                {step === 2 && (
                  <div className="mt-6">
                    <textarea
                      rows={6}
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      placeholder="Tell us about your goals, timeline, and anything else we should know..."
                      className="w-full rounded-xl border border-border-teal bg-off-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary-teal"
                    />
                  </div>
                )}

                {step === 3 && (
                  <div className="mt-6 grid grid-cols-1 gap-3.5">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="rounded-xl border border-border-teal bg-off-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary-teal"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="rounded-xl border border-border-teal bg-off-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary-teal"
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="rounded-xl border border-border-teal bg-off-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary-teal"
                    />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {!submitted && (
            <div className="mt-8 flex items-center justify-between gap-3">
              <Button
                variant="teal-outline"
                size="sm"
                disabled={step === 0}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className={cn(step === 0 && "invisible")}
              >
                <ArrowLeft size={15} /> Back
              </Button>
              {step < steps.length - 1 ? (
                <Button
                  size="sm"
                  disabled={!canProceed}
                  onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
                  className={cn(!canProceed && "opacity-40 pointer-events-none")}
                >
                  Next <ArrowRight size={15} />
                </Button>
              ) : (
                <Button
                  size="sm"
                  disabled={!form.name || !form.email}
                  onClick={() => setSubmitted(true)}
                  className={cn((!form.name || !form.email) && "opacity-40 pointer-events-none")}
                >
                  Submit Inquiry <ArrowRight size={15} />
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
