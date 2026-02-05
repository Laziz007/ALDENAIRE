import * as React from "react";

import { cn } from "@/lib/utils";

export function AuthCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass w-full max-w-md rounded-3xl border border-white/20 bg-white/80 p-8 shadow-glass",
        "dark:bg-ink-950/70",
        className
      )}
      {...props}
    />
  );
}
