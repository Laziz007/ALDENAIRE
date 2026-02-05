"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  ChartPie,
  ClipboardList,
  History,
  LayoutGrid,
  Settings
} from "lucide-react";

import { Sidebar } from "@/components/app/sidebar";
import { Topbar } from "@/components/app/topbar";
import { useUIStore } from "@/lib/store";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutGrid },
  { label: "AI Assistant", href: "/dashboard/assistant", icon: Bot },
  { label: "Tasks", href: "/dashboard/tasks", icon: ClipboardList },
  { label: "Analytics", href: "/dashboard/analytics", icon: ChartPie },
  { label: "History", href: "/dashboard/history", icon: History },
  { label: "Settings", href: "/dashboard/settings", icon: Settings }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const { sidebarOpen, setSidebarOpen } = useUIStore();

  return (
    <div className="min-h-screen bg-mist-50 dark:bg-ink-950">
      <div className="flex">
        <Sidebar title="Aldenaire" subtitle="Intelligent service platform" items={navItems} />
        <div className="flex min-h-screen flex-1 flex-col">
          <Topbar />
          <main className="flex-1 px-6 py-8">{children}</main>
        </div>
      </div>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.button
            type="button"
            aria-label="Close navigation"
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setSidebarOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
