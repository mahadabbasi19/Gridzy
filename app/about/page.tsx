import type { Metadata } from "next";
import { AboutHero } from "@/components/AboutHero";
import { AboutPageContent } from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us | Gridzy — The Tech People",
  description:
    "Meet the team engineering the future of digital experiences. Our story, mission, values, and leadership.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutPageContent />
    </>
  );
}
