"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type SwitchProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
};

export function Switch({ checked, onCheckedChange, className }: SwitchProps) {
  return (
    <button
      type="button"
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        "relative inline-flex h-6 w-12 items-center rounded-full border border-white/20 bg-white/60 p-1 shadow-sm",
        "dark:bg-white/10",
        className
      )}
      aria-pressed={checked}
    >
      <motion.span
        className="absolute left-1 top-1 h-4 w-4 rounded-full bg-accent-600"
        animate={{ x: checked ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 20 }}
      />
    </button>
  );
}
