"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Search, SearchX, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { services } from "@/lib/data";

const placeholders = [
  "Search 'Web Development'...",
  "Search 'Mobile App Design'...",
  "Search 'SEO & Growth'...",
  "Search 'Custom Software'...",
];

/**
 * Fully interactive "live" search bar rendered inside the Hero's mobile
 * device mockup — rotating placeholders when idle, debounced live
 * filtering against the real services list, and a floating suggestions
 * dropdown that routes to the matching service page. Positioned as an
 * absolute overlay so opening it never resizes the mockup card (zero
 * layout shift).
 */
export function HeroSearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [focused, setFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  // Rotate the placeholder only while the field is empty.
  useEffect(() => {
    if (query) return;
    const id = setInterval(() => {
      setPlaceholderIndex((i) => (i + 1) % placeholders.length);
    }, 2800);
    return () => clearInterval(id);
  }, [query]);

  // Debounce input -> filtering so fast typing stays snappy.
  useEffect(() => {
    const id = setTimeout(() => setDebounced(query), 120);
    return () => clearTimeout(id);
  }, [query]);

  const filtered = useMemo(() => {
    const q = debounced.trim().toLowerCase();
    if (!q) return [];
    return services
      .filter(
        (s) =>
          s.title.toLowerCase().includes(q) || s.tagline.toLowerCase().includes(q)
      )
      .slice(0, 4);
  }, [debounced]);

  const showDropdown = focused && debounced.trim().length > 0;

  const go = (slug?: string) => {
    router.push(slug ? `/services/${slug}` : "/services");
    setQuery("");
    setFocused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setQuery("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    go(filtered[0]?.slug);
  };

  return (
    <div className="relative z-30 pointer-events-auto">
      <form
        onSubmit={handleSubmit}
        className={`flex items-center gap-2 rounded-xl border px-2.5 py-2 transition-colors duration-200 ${
          focused
            ? "border-amber/70 bg-white/10 ring-2 ring-amber/25"
            : "border-white/15 bg-white/5"
        }`}
      >
        <button
          type="submit"
          aria-label="Search"
          className="shrink-0 text-white/45 transition-colors hover:text-amber active:scale-90"
        >
          <Search size={12} className={focused ? "text-amber" : undefined} />
        </button>
        <div className="relative min-w-0 flex-1">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 150)}
            onKeyDown={handleKeyDown}
            aria-label="Search services"
            autoComplete="off"
            className="relative z-10 w-full bg-transparent text-[10px] font-medium text-white outline-none"
          />
          {!query && (
            <AnimatePresence mode="wait">
              <motion.span
                key={placeholderIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-none absolute inset-0 flex items-center truncate text-[10px] text-white/35"
              >
                {placeholders[placeholderIndex]}
              </motion.span>
            </AnimatePresence>
          )}
        </div>
        {query && (
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="shrink-0 rounded-full p-0.5 text-white/40 transition-colors hover:text-white active:scale-90"
          >
            <X size={11} />
          </button>
        )}
      </form>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="pointer-events-auto absolute inset-x-0 top-[calc(100%+6px)] z-30 overflow-hidden rounded-xl border border-white/15 bg-[#0A2E2C]/95 shadow-2xl shadow-black/40 backdrop-blur-xl"
          >
            {filtered.length > 0 ? (
              <ul>
                {filtered.map((s) => (
                  <li key={s.slug}>
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => go(s.slug)}
                      className="flex w-full cursor-pointer items-center gap-2 px-2.5 py-2 text-left transition-colors hover:bg-white/10 active:scale-[0.98]"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-amber/15 text-amber">
                        <s.icon size={12} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[10px] font-bold text-white">
                          {s.title}
                        </span>
                        <span className="block truncate text-[9px] text-white/45">
                          {s.tagline}
                        </span>
                      </span>
                      <ArrowRight size={11} className="shrink-0 text-white/30" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => go()}
                className="flex w-full cursor-pointer items-center gap-2 px-3 py-3 text-left transition-colors hover:bg-white/10 active:scale-[0.98]"
              >
                <SearchX size={13} className="shrink-0 text-white/40" />
                <span className="text-[10px] text-white/60">
                  No service found —{" "}
                  <span className="font-semibold text-amber">View All Services →</span>
                </span>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
