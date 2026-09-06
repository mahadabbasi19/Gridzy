"use client";

import { motion } from "framer-motion";
import { Gauge, ShieldCheck, Target, Timer } from "lucide-react";
import Image from "next/image";
import { CircuitPattern } from "./CircuitNode";
import { LinkedinIcon, TwitterIcon } from "./icons/SocialIcons";
import { TiltCard } from "./TiltCard";

const timeline = [
  {
    year: "2011",
    title: "Founded in Karachi",
    desc: "Gridzy opens its doors as a three-person web development shop.",
  },
  {
    year: "2015",
    title: "Mobile Practice Launches",
    desc: "First native iOS and Android team formed to serve growing client demand.",
  },
  {
    year: "2018",
    title: "80+ Specialists Onboard",
    desc: "Crossed 80 full-time engineers, designers, and strategists across three offices.",
  },
  {
    year: "2021",
    title: "AI & Automation Division",
    desc: "Launched a dedicated AI engineering practice for custom LLM and ML systems.",
  },
  {
    year: "2024",
    title: "1,100+ Projects Delivered",
    desc: "Surpassed 1,100 completed projects across 20+ industries worldwide.",
  },
  {
    year: "2026",
    title: "Global Remote-First Team",
    desc: "Scaled to a distributed team of specialists serving clients on five continents.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Transparency",
    desc: "Clear scope, honest timelines, and open access to project status at every stage.",
  },
  {
    icon: Target,
    title: "Scalable Architecture",
    desc: "We build systems designed to grow with you, not systems you'll outgrow in a year.",
  },
  {
    icon: Timer,
    title: "24/7 Reliability",
    desc: "Round-the-clock monitoring and support so your product never goes dark.",
  },
  {
    icon: Gauge,
    title: "Measurable Outcomes",
    desc: "Every engagement is tied to metrics that matter to your business, not vanity numbers.",
  },
];

const leaders = [
  {
    name: "Daniel Ortiz",
    role: "Chief Executive Officer",
    bio: "15+ years scaling engineering teams across fintech and health tech before founding Gridzy's leadership vision.",
  },
  {
    name: "Priya Nair",
    role: "Chief Technology Officer",
    bio: "Leads Gridzy's engineering architecture, with a background in distributed systems at scale.",
  },
  {
    name: "Marcus Webb",
    role: "Head of AI Engineering",
    bio: "Builds Gridzy's custom AI and automation practice, formerly a research engineer in applied ML.",
  },
  {
    name: "Sofia Ricci",
    role: "Creative Director",
    bio: "Oversees brand and product design, shaping the visual language behind every Gridzy launch.",
  },
  {
    name: "James Whitfield",
    role: "Head of Growth Marketing",
    bio: "Runs paid, organic, and lifecycle strategy for Gridzy's marketing and SEO clients.",
  },
  {
    name: "Amara Chen",
    role: "VP of Client Delivery",
    bio: "Ensures every engagement ships on time, on budget, and above expectation.",
  },
];

export function AboutPageContent() {
  return (
    <>
      <section className="bg-off-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
              Our Mission
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight leading-tight text-charcoal sm:text-4xl">
              Engineering rigor, applied to real business outcomes.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal/70">
              We believe great technology is judged by the outcomes it
              produces, not the frameworks it uses. Our mission is to give
              every client — from early-stage startups to global enterprises
              — access to senior engineering and design talent typically
              reserved for venture-backed unicorns.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
              Our Vision
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight leading-tight text-charcoal sm:text-4xl">
              A world where every brand can build like a tech company.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal/70">
              We combine deep creative strategy with production-grade
              engineering so our partners don&apos;t have to choose between
              beautiful and functional. Every roadmap we build blends both
              from day one.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-soft-teal py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
              Our Journey
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal sm:text-4xl">
              15+ Years in the Making
            </h2>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-4 top-0 h-full w-px bg-border-teal md:left-1/2" />
            <div className="flex flex-col gap-10">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4 }}
                  className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 md:pr-12 ${
                    i % 2 === 1 ? "md:ml-auto md:pl-12 md:pr-0" : ""
                  }`}
                >
                  <span
                    className={`absolute left-4 top-1 -translate-x-1/2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-amber ring-4 ring-soft-teal md:left-auto ${
                      i % 2 === 1 ? "md:-left-1.5" : "md:-right-1.5 md:translate-x-1/2"
                    }`}
                  />
                  <TiltCard>
                    <div className="rounded-2xl border border-border-teal bg-white p-6">
                      <p className="text-xl font-extrabold text-primary-teal">{t.year}</p>
                      <p className="mt-1 text-lg font-bold text-charcoal">{t.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{t.desc}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
              What Drives Us
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal sm:text-4xl">
              Our Core Values
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <TiltCard>
                  <div className="rounded-2xl border border-border-teal bg-white p-7 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-soft-teal text-primary-teal">
                      <v.icon size={22} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-charcoal">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{v.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-deep-teal py-24">
        <div className="circuit-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-amber">
              The People
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Leadership & Specialists
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              >
                <TiltCard>
                  <div
                    data-cursor="TEAM"
                    className="group relative overflow-hidden rounded-2xl border border-primary-teal/40 bg-primary-teal/10 p-6 backdrop-blur-sm transition-colors hover:bg-primary-teal/20"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber text-lg font-extrabold text-charcoal">
                      {l.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-white">{l.name}</h3>
                    <p className="text-sm font-semibold text-amber">{l.role}</p>
                    <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-[#EAF4F3]/75 opacity-0 transition-all duration-300 group-hover:max-h-32 group-hover:opacity-100">
                      {l.bio}
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <a href="#" className="text-white/50 transition-colors hover:text-amber">
                        <LinkedinIcon width={16} height={16} />
                      </a>
                      <a href="#" className="text-white/50 transition-colors hover:text-amber">
                        <TwitterIcon width={16} height={16} />
                      </a>
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
