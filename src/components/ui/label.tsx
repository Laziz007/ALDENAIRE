import * as React from "react";

import { cn } from "@/lib/utils";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn("text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-white/60", className)}
      {...props}
    />
  );
}
