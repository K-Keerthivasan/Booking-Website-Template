import { InputHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "h-12 w-full rounded-2xl border border-[var(--color-border)] bg-white/80 dark:bg-[rgba(23,16,48,0.80)] px-4 text-sm text-[var(--color-plum-900)] placeholder:text-[var(--color-plum-700)] outline-none transition focus:border-[var(--color-plum)]",
      className,
    )}
    {...props}
  />
));

Input.displayName = "Input";
