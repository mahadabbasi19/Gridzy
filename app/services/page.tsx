import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServicesPageContent } from "@/components/ServicesPageContent";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Our Services | Gridzy — The Tech People",
  description:
    "End-to-end technology and creative capabilities — from web and mobile development to custom AI software, marketing, and managed infrastructure.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Capabilities"
        title="End-to-End Technology & Creative Capabilities"
        subtitle="Nine disciplines, one accountable team. Explore how Gridzy combines engineering, design, and strategy to move your business forward."
      />
      <ServicesPageContent />
      <CTA />
    </>
  );
}
