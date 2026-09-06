"use client";

import { ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0 });
  const [spot, setSpot] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    setStyle({
      rotateX: (0.5 - py) * 10,
      rotateY: (px - 0.5) * 10,
    });
    setSpot({ x: px * 100, y: py * 100, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setStyle({ rotateX: 0, rotateY: 0 });
    setSpot((s) => ({ ...s, opacity: 0 }));
  };

  return (
    <div style={{ perspective: "1000px" }} className={className}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${style.rotateX}deg) rotateY(${style.rotateY}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.35s ease",
        }}
        className="relative h-full will-change-transform"
      >
        {children}
        <div
          className={cn(
            "pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
          )}
          style={{
            opacity: spot.opacity,
            background: `radial-gradient(500px circle at ${spot.x}% ${spot.y}%, rgba(245,166,35,0.16), transparent 45%)`,
          }}
        />
      </div>
    </div>
  );
}
