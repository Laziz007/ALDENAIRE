"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useUIStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

type SidebarProps = {
  title: string;
  subtitle: string;
  items: NavItem[];
};

export function Sidebar({ title, subtitle, items }: SidebarProps) {
  const pathname = usePathname();
  const { sidebarOpen, setSidebarOpen } = useUIStore();

  const NavLinks = (
    <div className="space-y-2">
      {items.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition",
              active
                ? "bg-white/70 text-ink-950 shadow-card dark:bg-white/10 dark:text-white"
                : "text-ink-600 hover:bg-white/60 hover:text-ink-900 dark:text-white/70 dark:hover:bg-white/5"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </div>
  );

  return (
    <>
      <aside className="hidden h-screen w-64 flex-col border-r border-white/10 bg-white/70 px-5 py-6 backdrop-blur-xl dark:bg-ink-950/80 lg:flex">
        <div className="mb-8">
          <Logo label={title} textClassName="text-base" />
          <p className="mt-2 text-xs text-ink-500 dark:text-white/60">{subtitle}</p>
        </div>
        {NavLinks}
      </aside>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            className="fixed inset-y-0 left-0 z-50 w-72 border-r border-white/20 bg-white/95 px-5 py-6 backdrop-blur-xl dark:bg-ink-950"
            initial={{ x: -320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -320, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <Logo label={title} textClassName="text-base" />
                <p className="mt-1 text-xs text-ink-500 dark:text-white/60">{subtitle}</p>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="rounded-full border border-white/20 p-2 text-ink-700 transition hover:bg-white/80 dark:text-white/70"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-8">{NavLinks}</div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
