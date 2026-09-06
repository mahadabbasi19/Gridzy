import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { PortfolioTeaser } from "@/components/PortfolioTeaser";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { TechMarquee } from "@/components/TechMarquee";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services showCta />
      <PortfolioTeaser />
      <Process />
      <TechMarquee />
      <FAQ />
      <CTA />
    </>
  );
}
