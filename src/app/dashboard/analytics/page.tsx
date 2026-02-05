"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

import { AutomationLineChart } from "@/components/charts/automation-line";
import { PerformanceAreaChart } from "@/components/charts/performance-area";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { insights } from "@/lib/dashboard-data";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">Analytics</p>
        <h1 className="text-3xl font-semibold text-ink-950 dark:text-white">Insights & performance</h1>
        <p className="mt-2 max-w-2xl text-sm text-ink-600 dark:text-white/60">
          Track automation impact, decision velocity, and AI adoption across your teams.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="p-6">
          <CardHeader>
            <CardTitle>Weekly performance</CardTitle>
            <CardDescription>Automation activity and decision support trends.</CardDescription>
          </CardHeader>
          <CardContent>
            <PerformanceAreaChart />
          </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="p-6">
          <CardHeader>
            <CardTitle>Automation velocity</CardTitle>
            <CardDescription>Daily execution rate</CardDescription>
          </CardHeader>
          <CardContent>
            <AutomationLineChart />
          </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -4 }}
          >
            <Card className="p-6">
            <CardHeader>
              <div className="flex items-center gap-2 text-xs font-semibold text-accent-600">
                <TrendingUp className="h-4 w-4" />
                Insight
              </div>
              <CardTitle>{insight.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-ink-600 dark:text-white/60">{insight.description}</p>
            </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
