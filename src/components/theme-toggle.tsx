"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative inline-flex h-10 w-16 items-center rounded-full border border-white/20 bg-white/60 p-1 text-ink-900 shadow-card transition dark:bg-white/10 dark:text-white"
    >
      <motion.span
        className="absolute left-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md"
        animate={{ x: theme === "dark" ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <span className="relative z-10 flex h-8 w-8 items-center justify-center">
        <Sun className="h-4 w-4" />
      </span>
      <span className="relative z-10 flex h-8 w-8 items-center justify-center">
        <Moon className="h-4 w-4" />
      </span>
    </button>
  );
}
