"use client";

import { motion } from "framer-motion";

import { adminActivity } from "@/lib/dashboard-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AdminLogsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">Admin</p>
        <h1 className="text-3xl font-semibold text-ink-950 dark:text-white">Activity logs</h1>
        <p className="mt-2 max-w-2xl text-sm text-ink-600 dark:text-white/60">
          Audit system changes, access events, and admin actions.
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
            <CardTitle>Recent admin activity</CardTitle>
            <CardDescription>Last 7 days of system events.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {adminActivity.map((event, index) => (
              <motion.div
                key={`${event.event}-${index}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/70 px-4 py-3 text-sm text-ink-700 shadow-card dark:bg-white/5 dark:text-white/70"
              >
                <div>
                  <p className="font-semibold text-ink-950 dark:text-white">{event.event}</p>
                  <p className="text-xs text-ink-500 dark:text-white/50">{event.actor}</p>
                </div>
                <Badge variant="default">{event.time}</Badge>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
