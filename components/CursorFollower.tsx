"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 28, stiffness: 380, mass: 0.4 });
  const springY = useSpring(y, { damping: 28, stiffness: 380, mass: 0.4 });

  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setCoarse(true);
      return;
    }

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      if (target) {
        setActive(true);
        setLabel(target.dataset.cursor || "");
      } else {
        setActive(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (coarse) return null;

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[200] hidden lg:block"
    >
      <motion.div
        animate={{
          width: active ? 84 : 20,
          height: active ? 84 : 20,
        }}
        transition={{ type: "spring", damping: 24, stiffness: 300 }}
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-amber/70 bg-amber/10 mix-blend-difference backdrop-blur-[1px]"
      >
        {active && (
          <span className="px-1.5 text-center text-[9px] font-bold uppercase leading-tight tracking-widest text-white">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
