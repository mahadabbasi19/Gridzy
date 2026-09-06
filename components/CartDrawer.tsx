"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";
import { Button } from "./ui/Button";

export function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-charcoal/40 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed right-0 top-0 z-[80] h-full w-full max-w-sm bg-white shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between border-b border-border-teal px-6 py-5">
              <h3 className="text-lg font-bold text-charcoal">Your Cart</h3>
              <button
                onClick={onClose}
                aria-label="Close cart"
                className="rounded-full p-2 hover:bg-soft-teal text-charcoal transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-soft-teal text-primary-teal">
                <ShoppingCart size={32} />
              </div>
              <p className="font-semibold text-charcoal">Your cart is empty</p>
              <p className="text-sm text-charcoal/60">
                Looks like you haven&apos;t added anything yet. Browse our shop to
                get started.
              </p>
              <Button variant="teal" onClick={onClose} className="mt-2">
                Browse Shop
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
