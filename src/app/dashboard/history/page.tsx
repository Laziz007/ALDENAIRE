"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

import { usageHistory } from "@/lib/dashboard-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function HistoryPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">History</p>
        <h1 className="text-3xl font-semibold text-ink-950 dark:text-white">AI usage history</h1>
        <p className="mt-2 max-w-2xl text-sm text-ink-600 dark:text-white/60">
          Search through assistant conversations, automation runs, and analytics sessions.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Search history</CardTitle>
            <CardDescription>Filter by channel, user, or action.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-full">
                <Search className="pointer-events-none absolute left-4 top-3 h-4 w-4 text-ink-500" />
                <Input className="pl-10" placeholder="Search actions, users, or channels" />
              </div>
              <button className="rounded-xl border border-white/20 px-4 py-3 text-xs font-semibold text-ink-600 shadow-card transition hover:bg-white/80 dark:text-white/70">
                Filters
              </button>
            </div>

            <div className="space-y-3">
              {usageHistory.map((item, index) => (
                <motion.div
                  key={item.action}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/70 px-4 py-3 text-sm text-ink-700 shadow-card dark:bg-white/5 dark:text-white/70"
                >
                  <div>
                    <p className="font-semibold text-ink-950 dark:text-white">{item.action}</p>
                    <p className="text-xs text-ink-500 dark:text-white/50">
                      {item.user} · {item.time}
                    </p>
                  </div>
                  <Badge variant="info">{item.channel}</Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
