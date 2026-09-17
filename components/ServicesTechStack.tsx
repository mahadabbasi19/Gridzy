"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const groups = {
  Frontend: [
    { name: "Next.js", src: "/tech/nextdotjs.svg", invert: true },
    { name: "React", src: "/tech/react.svg" },
    { name: "TypeScript", src: "/tech/typescript.svg" },
    { name: "Tailwind CSS", src: "/tech/tailwindcss.svg" },
    { name: "Flutter", src: "/tech/flutter.svg" },
  ],
  "Backend & AI": [
    { name: "Python", src: "/tech/python.svg" },
    { name: "Django", src: "/tech/django.svg" },
    { name: "FastAPI", src: "/tech/fastapi.svg" },
    { name: "Node.js", src: "/tech/nodedotjs.svg" },
    { name: "OpenAI", src: "/tech/openai.svg" },
    { name: "PostgreSQL", src: "/tech/postgresql.svg" },
  ],
  "Mobile & Cloud": [
    { name: "Flutter", src: "/tech/flutter.svg" },
    { name: "Rust", src: "/tech/rust.svg" },
    { name: "Docker", src: "/tech/docker.svg" },
    { name: "MongoDB", src: "/tech/mongodb.svg" },
    { name: "Redis", src: "/tech/redis.svg" },
  ],
} as const;

type GroupName = keyof typeof groups;
const tabs = Object.keys(groups) as GroupName[];

function MarqueeRow({
  items,
  reverse,
}: {
  items: readonly { name: string; src: string; invert?: boolean }[];
  reverse?: boolean;
}) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className={cn("flex w-max", reverse ? "marquee-track-reverse" : "marquee-track")}>
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-12 pr-12">
            {items.map((t) => (
              <span
                key={t.name}
                className="flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5"
              >
                <Image
                  src={t.src}
                  alt={t.name}
                  width={20}
                  height={20}
                  className={cn("h-5 w-5 shrink-0 object-contain", t.invert && "invert")}
                />
                <span className="text-sm font-semibold text-[#EAF4F3]/80">{t.name}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ServicesTechStack() {
  const [active, setActive] = useState<GroupName>("Frontend");
  const items = groups[active];
  const half = Math.ceil(items.length / 2) || 1;

  return (
    <section className="relative overflow-hidden bg-[#031d1b] py-24">
      <div className="circuit-grid pointer-events-none absolute inset-0 opacity-[0.1]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-amber">
          Tech Stack &amp; Architecture
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Tools Built for the Job
        </h2>

        <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors sm:text-sm",
                active === t
                  ? "bg-amber text-charcoal"
                  : "text-[#EAF4F3]/60 hover:text-white"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4">
        <MarqueeRow items={items.slice(0, half)} />
        <MarqueeRow items={items.slice(half).length ? items.slice(half) : items} reverse />
      </div>
    </section>
  );
}
