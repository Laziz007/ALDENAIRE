"use client";

import { motion } from "framer-motion";
import { Bell, Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";
import { useUIStore } from "@/lib/store";

export function Topbar() {
  const { toggleSidebar } = useUIStore();

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-white/10 bg-white/70 px-6 py-4 backdrop-blur-xl dark:bg-ink-950/80"
    >
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="rounded-xl border border-white/20 p-2 text-ink-700 transition hover:bg-white/60 dark:text-white/70 lg:hidden"
          aria-label="Toggle navigation"
        >
          <Menu className="h-4 w-4" />
        </button>
        <div className="hidden w-72 sm:block">
          <Input placeholder="Search workspaces, tasks, insights..." />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-full border border-white/20 p-2 text-ink-700 transition hover:bg-white/60 dark:text-white/70">
          <Bell className="h-4 w-4" />
        </button>
        <ThemeToggle />
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-9 w-9 rounded-full"
            }
          }}
        />
        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/70 px-3 py-2 text-xs font-semibold text-ink-700 shadow-card dark:bg-white/10 dark:text-white/70">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Pro workspace
        </div>
      </div>
    </motion.header>
  );
}
