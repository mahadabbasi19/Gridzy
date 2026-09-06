import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Gridzy — The Tech People",
  description: "Gridzy's privacy policy and data protection commitments.",
};

const sections = [
  {
    title: "1. Introduction",
    body: "GRIDZY LTD ('Gridzy', 'we', 'us', 'our') is committed to protecting the privacy of visitors to our website and clients who engage our services. This policy explains what data we collect, how we use it, and the rights you have over your information.",
  },
  {
    title: "2. Information We Collect",
    body: "We collect information you provide directly — such as your name, email address, company, and project details submitted through our contact and quote forms — as well as usage data collected automatically through cookies and analytics tools, including IP address, browser type, and pages visited.",
  },
  {
    title: "3. How We Use Your Information",
    body: "We use collected information to respond to inquiries, deliver and improve our services, send relevant updates when you've opted in, maintain the security of our platform, and comply with legal obligations. We do not sell personal information to third parties.",
  },
  {
    title: "4. Cookies & Tracking",
    body: "Our website uses cookies and similar technologies to remember preferences, understand site usage, and improve performance. You can control cookie preferences through your browser settings at any time.",
  },
  {
    title: "5. Data Sharing",
    body: "We may share information with trusted service providers who support our operations (such as hosting, analytics, and email delivery), and only to the extent necessary for them to perform those services. All third parties are bound by confidentiality obligations.",
  },
  {
    title: "6. Data Retention",
    body: "We retain personal information only as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Project and client data is retained for the duration of our contractual relationship plus a reasonable period thereafter.",
  },
  {
    title: "7. Your Rights",
    body: "Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal data, and to receive a copy of it in a portable format. To exercise these rights, contact us at info@gridzy.dev.",
  },
  {
    title: "8. Data Security",
    body: "We implement industry-standard technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction, including encryption in transit and restricted access controls.",
  },
  {
    title: "9. Changes to This Policy",
    body: "We may update this policy periodically to reflect changes in our practices or legal requirements. The 'last updated' date below reflects the most recent revision, and material changes will be communicated where appropriate.",
  },
  {
    title: "10. Contact Us",
    body: "For questions about this privacy policy or how we handle your data, reach us at info@gridzy.dev or write to our head office in Karachi, Pakistan.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: January 1, 2026. This policy explains how GRIDZY LTD collects, uses, and protects your personal information."
      />
      <section className="bg-off-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-col gap-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-bold text-charcoal">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
