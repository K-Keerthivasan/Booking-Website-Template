import { ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-plum)] disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary" &&
          "bg-[var(--color-plum)] text-white shadow-[0_14px_30px_rgba(59,7,100,0.24)] hover:-translate-y-0.5 hover:bg-[color:var(--color-plum-700)]",
        variant === "secondary" &&
          "border border-[var(--color-border)] bg-white/80 dark:bg-[rgba(23,16,48,0.80)] text-[var(--color-plum-900)] hover:bg-[var(--color-rose)]",
        variant === "ghost" &&
          "bg-transparent text-[var(--color-plum-900)] hover:bg-white/70 dark:hover:bg-[rgba(23,16,48,0.70)]",
        className,
      )}
      {...props}
    />
  ),
);

Button.displayName = "Button";
