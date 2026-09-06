import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/data";
import { ServiceDetailContent } from "@/components/ServiceDetailContent";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service | Gridzy" };
  return {
    title: `${service.title} | Gridzy — The Tech People`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const { icon, ...serializableService } = service;
  void icon;

  return <ServiceDetailContent service={serializableService} />;
}
