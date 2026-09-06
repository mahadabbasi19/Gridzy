import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "amber" | "teal-outline" | "teal" | "white-outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
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
  ({ className, variant = "amber", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer whitespace-nowrap",
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
