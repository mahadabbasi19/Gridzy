import { recentWork } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

// The full portfolio is the same real, live projects shown in the
// homepage's "Recent Work" teaser — same data, same card, just without
// the "View Full Portfolio" link back to this same page.
export function Portfolio() {
  return (
    <section className="bg-off-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary-teal">
            Our Work
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal sm:text-4xl">
            Live Products We&apos;ve Shipped
          </h2>
          <p className="mt-4 text-base text-charcoal/70">
            Real client sites, not mockups — click any card to visit it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recentWork.map((project, i) => (
            <ProjectCard key={project.url} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
