"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border-teal bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logos/logo-full-transparent.png"
            alt="Gridzy — The Tech People"
            width={640}
            height={250}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary-teal",
                isActive(l.href)
                  ? "font-bold text-primary-teal"
                  : "text-charcoal/80"
              )}
            >
              {l.label}
              {isActive(l.href) && (
                <span className="absolute -bottom-[13px] left-0 right-0 h-0.5 bg-primary-teal" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <Link href="/contact">
            <Button size="sm" className="hidden md:inline-flex">
              Let&apos;s Connect
            </Button>
          </Link>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
            className="rounded-full p-2.5 text-charcoal hover:bg-soft-teal lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border-teal bg-white transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-[26rem]" : "max-h-0 border-t-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-soft-teal hover:text-primary-teal",
                isActive(l.href) ? "bg-soft-teal text-primary-teal" : "text-charcoal/80"
              )}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2 px-3">
            <Link href="/contact">
              <Button size="sm" className="w-full">
                Let&apos;s Connect
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
