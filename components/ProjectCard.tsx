"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { RecentWorkItem } from "@/lib/data";
import { TiltCard } from "./TiltCard";

function domainOf(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

// Shared by the homepage's "Recent Work" teaser and the full /portfolio
// page — same real projects, same browser-chrome card, same behavior
// (whole card is one link straight to the live site, never an internal
// case-study route), so the two never drift apart visually.
export function ProjectCard({ project, index }: { project: RecentWorkItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      className="flex"
    >
      <TiltCard className="h-full w-full">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="VISIT SITE"
          aria-label={`Visit ${project.title} (opens in a new tab)`}
          className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary-teal/30 bg-[#0A2E2C] shadow-2xl shadow-black/30 ring-1 ring-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber/50 hover:shadow-amber/10"
        >
          <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />

          {/* Browser-chrome frame around the live snapshot, matching the
              device-mockup language used in the Hero/Process sections,
              so a mixed batch of external site screenshots still reads
              as one cohesive Gridzy component. */}
          <div className="flex items-center gap-1.5 border-b border-primary-teal/30 bg-[#0A2E2C] px-3.5 py-2.5">
            <span className="h-2 w-2 shrink-0 rounded-full bg-amber/70" />
            <span className="h-2 w-2 shrink-0 rounded-full bg-white/15" />
            <span className="h-2 w-2 shrink-0 rounded-full bg-white/15" />
            <span className="ml-2 truncate rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/45">
              {domainOf(project.url)}
            </span>
            <ArrowUpRight
              size={13}
              className="ml-auto shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber"
            />
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} homepage preview`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E2C] via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 bg-primary-teal mix-blend-color opacity-[0.12]" />
          </div>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <p className="text-base font-bold text-white">{project.title}</p>
            <div className="flex min-h-[2.7rem] flex-wrap items-start gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary-teal/40 bg-primary-teal/15 px-2.5 py-1 text-[10px] font-semibold text-[#EAF4F3]/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </TiltCard>
    </motion.div>
  );
}
