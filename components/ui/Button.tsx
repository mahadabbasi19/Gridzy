"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, useRef, useState } from "react";

type Variant = "amber" | "teal-outline" | "teal" | "white-outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  magnetic?: boolean;
}

const variants: Record<Variant, string> = {
  amber:
    "bg-amber text-charcoal font-bold hover:bg-primary-teal hover:text-white",
  teal: "bg-primary-teal text-white font-semibold hover:bg-deep-teal",
  "teal-outline":
    "border border-primary-teal text-primary-teal font-semibold bg-transparent hover:bg-primary-teal hover:text-white",
  "white-outline":
    "border border-primary-teal/60 text-white font-semibold bg-transparent hover:bg-primary-teal",
  ghost: "text-charcoal hover:text-primary-teal bg-transparent",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "amber", size = "md", magnetic = true, style, onMouseMove, onMouseLeave, ...props },
    ref
  ) => {
    const innerRef = useRef<HTMLButtonElement>(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const setRefs = (node: HTMLButtonElement | null) => {
      innerRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (magnetic && innerRef.current) {
        const rect = innerRef.current.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        setOffset({ x: relX * 0.3, y: relY * 0.4 });
      }
      onMouseMove?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      setOffset({ x: 0, y: 0 });
      onMouseLeave?.(e);
    };

    return (
      <button
        ref={setRefs}
        data-cursor={props["aria-label"] ? undefined : "LINK"}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: offset.x === 0 && offset.y === 0 ? "transform 0.4s ease" : "transform 0.1s ease",
          ...style,
        }}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full transition-colors duration-300 active:scale-[0.98] cursor-pointer whitespace-nowrap will-change-transform",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
