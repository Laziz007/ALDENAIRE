import * as React from "react";

import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-white/20 bg-white/70 px-4 py-3 text-sm text-ink-900 shadow-sm",
        "placeholder:text-ink-500 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30",
        "dark:bg-white/10 dark:text-white dark:placeholder:text-white/50",
        className
      )}
      {...props}
    />
  );
}
