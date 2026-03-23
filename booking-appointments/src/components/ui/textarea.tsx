import { TextareaHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-28 w-full rounded-[1.5rem] border border-[var(--color-border)] bg-white/80 dark:bg-[rgba(23,16,48,0.80)] px-4 py-3 text-sm text-[var(--color-plum-900)] placeholder:text-[var(--color-plum-700)] outline-none transition focus:border-[var(--color-plum)]",
      className,
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";
