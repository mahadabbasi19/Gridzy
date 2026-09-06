import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Portfolio } from "@/components/Portfolio";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Portfolio | Gridzy — The Tech People",
  description:
    "Explore Gridzy's case studies across websites, mobile apps, AI software, graphics, and logo design.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Proof, Not Promises"
        subtitle="A closer look at the products, brands, and platforms we've shipped — with the measurable results behind each one."
      />
      <section className="bg-off-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Portfolio />
        </div>
      </section>
      <CTA />
    </>
  );
}
