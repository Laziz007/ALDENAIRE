"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  asChild?: boolean;
};

export function Button({
  className,
  variant = "primary",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2",
    "focus-visible:ring-offset-mist-50 dark:focus-visible:ring-offset-ink-950",
    variant === "primary" &&
      "bg-accent-600 text-white shadow-glow hover:-translate-y-0.5 hover:bg-accent-500",
    variant === "secondary" &&
      "bg-white/70 text-ink-900 shadow-card hover:-translate-y-0.5 hover:bg-white dark:bg-white/10 dark:text-white",
    variant === "ghost" &&
      "bg-transparent text-ink-900 hover:bg-black/5 dark:text-white dark:hover:bg-white/10",
    className
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, {
      ...props,
      className: cn(classes, (children as React.ReactElement).props.className)
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export function ShimmerButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "relative overflow-hidden",
        "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r",
        "before:from-transparent before:via-white/40 before:to-transparent",
        "before:transition-all before:duration-700 hover:before:translate-x-full",
        className
      )}
      {...props}
    />
  );
}
