import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AboutPageContent } from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us | Gridzy — The Tech People",
  description:
    "Meet the team engineering the future of digital experiences. Our story, mission, values, and leadership.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Gridzy"
        title="Engineering the Future of Digital Experiences"
        subtitle="We're a distributed team of engineers, designers, and strategists who believe great software should feel effortless — for the people who use it and the people who build it."
      />
      <AboutPageContent />
    </>
  );
}
