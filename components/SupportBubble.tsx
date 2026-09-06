"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Headset, X } from "lucide-react";
import { useState } from "react";

export function SupportBubble() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            className="w-72 rounded-2xl border border-border-teal bg-white p-5 shadow-2xl"
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
        className="flex h-14 w-14 items-center justify-center rounded-full bg-amber text-charcoal shadow-lg shadow-amber/30 transition-transform hover:scale-110"
      >
        {open ? <X size={22} /> : <Headset size={22} />}
      </button>
    </div>
  );
}
