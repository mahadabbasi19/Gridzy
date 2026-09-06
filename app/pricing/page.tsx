import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PricingEstimator } from "@/components/PricingEstimator";
import { PricingTiers } from "@/components/PricingTiers";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Pricing | Gridzy — The Tech People",
  description:
    "Transparent service plans, an interactive project cost estimator, and SLA-backed hosting & maintenance packages.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent Plans, No Surprises"
        subtitle="Estimate your project instantly, compare service tiers, and pick the hosting plan that keeps everything running smoothly after launch."
      />
      <PricingEstimator />
      <PricingTiers />
      <CTA />
    </>
  );
}
