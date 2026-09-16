import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Portfolio } from "@/components/Portfolio";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Portfolio | Gridzy — The Tech People",
  description:
    "Real, live client products Gridzy has built and shipped — click through to see them running in production.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Proof, Not Promises"
        subtitle="Live products we've shipped for our partners — every link below goes straight to the real, running site."
      />
      <Portfolio />
      <CTA />
    </>
  );
}
