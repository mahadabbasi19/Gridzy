import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./icons/SocialIcons";
import { services } from "@/lib/data";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export function Footer() {
  return (
    <footer className="border-t border-primary-teal/40 bg-deep-teal text-off-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/logo-full-white.png"
                alt="Gridzy — The Tech People"
                width={640}
                height={246}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-off-white/70">
              Tailored tech solutions and creative digital strategies that
              elevate your brand, from web development to custom AI software.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-teal text-off-white transition-colors hover:bg-amber hover:text-charcoal hover:border-amber"
                >
                  <Icon width={15} height={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-off-white/70 transition-colors hover:text-amber"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">
              Services
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-off-white/70 transition-colors hover:text-amber"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">
              Contact Info
            </h4>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-off-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-amber" />
                Head Office: Karachi, Pakistan
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-amber" />
                info@gridzy.dev
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-amber" />
                +92 333 0000000
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-teal">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-center text-xs text-off-white/60 sm:flex-row">
          <span>© 2026 GRIDZY LTD. All Rights Reserved.</span>
          <span>GRIDZY LTD</span>
        </div>
      </div>
    </footer>
  );
}
