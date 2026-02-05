"use client";

import { motion } from "framer-motion";

import { AdminUsageChart } from "@/components/charts/admin-usage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">Admin</p>
        <h1 className="text-3xl font-semibold text-ink-950 dark:text-white">Usage analytics</h1>
        <p className="mt-2 max-w-2xl text-sm text-ink-600 dark:text-white/60">
          Monitor platform utilization, workload patterns, and adoption trends.
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
            <CardTitle>Weekly active workspaces</CardTitle>
            <CardDescription>Tracks AI sessions and automation runs by week.</CardDescription>
          </CardHeader>
          <CardContent>
            <AdminUsageChart />
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          { label: "Active workspaces", value: "64" },
          { label: "Average sessions", value: "5.2/day" },
          { label: "Automation success", value: "97.4%" }
        ].map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -4 }}
          >
            <Card className="p-6">
              <CardHeader>
                <CardDescription>{metric.label}</CardDescription>
                <CardTitle className="text-2xl">{metric.value}</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
