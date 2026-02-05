import * as React from "react";

import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "success" | "warning" | "info";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variant === "default" && "bg-white/70 text-ink-700 dark:bg-white/10 dark:text-white/70",
        variant === "success" && "bg-emerald-500/15 text-emerald-600",
        variant === "warning" && "bg-amber-500/15 text-amber-600",
        variant === "info" && "bg-accent-500/15 text-accent-600",
        className
      )}
      {...props}
    />
  );
}
