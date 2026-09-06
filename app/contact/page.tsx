import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactPageContent } from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | Gridzy — The Tech People",
  description:
    "Start your project with Gridzy. Reach our London office, or walk through our 4-step project inquiry form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Start Your Project With Gridzy"
        subtitle="Tell us what you're building — we'll come back with a clear plan, realistic timeline, and the right team to make it happen."
      />
      <ContactPageContent />
    </>
  );
}
