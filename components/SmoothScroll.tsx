"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      syncTouch: false,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Honor deep links after their content mounts, including Suspense content.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) {
      window.scrollTo(0, 0);
      lenisRef.current?.scrollTo(0, { immediate: true });
      return;
    }

    let targetId: string;
    try {
      targetId = decodeURIComponent(hash);
    } catch {
      return;
    }

    let frameId: number;
    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (!target) return false;
      frameId = requestAnimationFrame(() => {
        const offset = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
        const lenis = lenisRef.current;
        if (lenis) {
          lenis.resize();
          lenis.scrollTo(target, { immediate: true, offset: -offset });
        } else {
          target.scrollIntoView({ behavior: "instant", block: "start" });
        }
      });
      return true;
    };

    if (scrollToTarget()) return () => cancelAnimationFrame(frameId);

    const observer = new MutationObserver(() => {
      if (scrollToTarget()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    const timeout = window.setTimeout(() => observer.disconnect(), 10000);
    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
      cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  return null;
}
