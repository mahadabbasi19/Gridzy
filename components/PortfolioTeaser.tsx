import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { recentWork } from "@/lib/data";
import { Button } from "./ui/Button";
import { ProjectCard } from "./ProjectCard";

export function PortfolioTeaser() {
  return (
    <section className="relative overflow-hidden bg-deep-teal py-24">
      <div className="circuit-grid absolute inset-0 opacity-[0.12]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(21,91,88,0.5),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-teal bg-primary-teal/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber">
            Our Work
          </span>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Recent Work
          </h2>
          <p className="mt-4 text-base text-[#EAF4F3]/70">
            Live products we&apos;ve shipped for our partners — click any card
            to visit the site.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentWork.map((project, i) => (
            <ProjectCard key={project.url} project={project} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/portfolio">
            <Button size="lg">
              View Full Portfolio <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
