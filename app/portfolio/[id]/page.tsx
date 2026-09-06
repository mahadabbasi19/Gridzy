import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/lib/data";
import { CaseStudyContent } from "@/components/CaseStudyContent";

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioProjects.find((p) => p.id === id);
  if (!project) return { title: "Case Study | Gridzy" };
  return {
    title: `${project.title} | Gridzy Portfolio`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = portfolioProjects.find((p) => p.id === id);
  if (!project) notFound();

  return <CaseStudyContent project={project} />;
}
