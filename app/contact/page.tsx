import type { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | Gridzy — The Tech People",
  description:
    "Start your project with Gridzy. Reach our Bahria Town, Karachi office, or walk through our 4-step project inquiry form.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
