"use client";

import { ShieldCheck, Users, LineChart, ClipboardCheck } from "lucide-react";

import { Sidebar } from "@/components/app/sidebar";
import { Topbar } from "@/components/app/topbar";

const adminItems = [
  { label: "User Management", href: "/admin", icon: Users },
  { label: "Usage Analytics", href: "/admin/analytics", icon: LineChart },
  { label: "Activity Logs", href: "/admin/logs", icon: ClipboardCheck }
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-mist-50 dark:bg-ink-950">
      <div className="flex">
        <Sidebar title="Aldenaire" subtitle="Admin console" items={adminItems} />
        <div className="flex min-h-screen flex-1 flex-col">
          <Topbar />
          <div className="px-6 pt-4">
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/70 px-4 py-3 text-xs font-semibold text-ink-700 shadow-card dark:bg-white/10 dark:text-white/70">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              Admin access only · Activity monitored
            </div>
          </div>
          <main className="flex-1 px-6 py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
