"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Headset, X } from "lucide-react";
import { useState } from "react";

export function SupportBubble() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            className="w-[calc(100vw-2rem)] max-w-72 rounded-2xl border border-border-teal bg-white p-5 shadow-2xl"
          >
            <p className="text-sm font-bold text-charcoal">Need a hand?</p>
            <p className="mt-1 text-sm text-charcoal/60">
              Our support team is online 24/7. Drop us a message and we&apos;ll
              get right back to you.
            </p>
            <a
              href="mailto:support@gridzy.dev"
              className="mt-3 inline-block rounded-full bg-amber px-4 py-2 text-xs font-bold text-charcoal transition-colors hover:bg-primary-teal hover:text-white"
            >
              Chat with us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Support"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber text-charcoal shadow-lg shadow-amber/30 transition-transform hover:scale-110 sm:h-14 sm:w-14"
      >
        {open ? <X size={20} /> : <Headset size={20} />}
      </button>
    </div>
  );
}
