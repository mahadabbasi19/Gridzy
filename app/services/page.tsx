import type { Metadata } from "next";
import { ServicesHero } from "@/components/ServicesHero";
import { ServicesPageContent } from "@/components/ServicesPageContent";
import { ServicesTechStack } from "@/components/ServicesTechStack";
import { ServicesWorkflow } from "@/components/ServicesWorkflow";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Our Services | Gridzy — The Tech People",
  description:
    "End-to-end technology and creative capabilities — from web, mobile, and desktop development to custom software, AI automations, and brand design.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesPageContent />
      <ServicesTechStack />
      <ServicesWorkflow />
      <CTA />
    </>
  );
}
