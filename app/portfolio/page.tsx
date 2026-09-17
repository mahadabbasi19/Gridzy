import type { Metadata } from "next";
import { PortfolioHero } from "@/components/PortfolioHero";
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
      <PortfolioHero />
      <Portfolio />
      <CTA />
    </>
  );
}
