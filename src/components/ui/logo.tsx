import * as React from "react";

import { cn } from "@/lib/utils";

type LogoProps = {
  label?: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  dividerClassName?: string;
};

export function Logo({
  label = "ALDENAIRE",
  className,
  iconClassName,
  textClassName,
  dividerClassName
}: LogoProps) {
  const gradientId = React.useId();

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className={cn("flex h-8 w-8 items-center justify-center", iconClassName)}>
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0B0F1A" />
              <stop offset="50%" stopColor="#4B5563" />
              <stop offset="100%" stopColor="#9CA3AF" />
            </linearGradient>
          </defs>
          <path
            d="M4 25.5L14.6 5.5l4.2 7.4-6.7 12.6H4z"
            fill={`url(#${gradientId})`}
          />
          <path
            d="M16.4 10.5L28 25.5h-8.2l-6-9.6 2.6-5.4z"
            fill={`url(#${gradientId})`}
          />
        </svg>
      </span>
      <span
        className={cn(
          "h-7 w-px rounded-full bg-gradient-to-b from-slate-900 via-slate-500 to-slate-300",
          "dark:from-slate-100 dark:via-slate-400 dark:to-slate-600",
          dividerClassName
        )}
      />
      <span
        className={cn(
          "text-lg font-semibold uppercase tracking-[0.2em] text-transparent",
          "bg-gradient-to-r from-black via-slate-600 to-slate-400 bg-clip-text",
          "dark:from-slate-100 dark:via-slate-300 dark:to-slate-500",
          textClassName
        )}
      >
        {label}
      </span>
    </div>
  );
}
