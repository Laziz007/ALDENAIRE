"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PerformanceAreaChart } from "@/components/charts/performance-area";
import { UsagePieChart } from "@/components/charts/usage-pie";
import { overviewStats, recentActivity, usageBreakdown } from "@/lib/dashboard-data";

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">Overview</p>
          <h1 className="text-3xl font-semibold text-ink-950 dark:text-white">Your AI command center</h1>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary">Invite team</Button>
          <Button>
            Create automation
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {overviewStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -6 }}
          >
            <Card className="p-6">
              <CardHeader>
                <CardDescription>{stat.title}</CardDescription>
                <CardTitle className="text-2xl">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-2">
                {stat.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-rose-500" />
                )}
                <span className="text-xs font-semibold text-ink-600 dark:text-white/60">{stat.change}</span>
                <span className="text-xs text-ink-500 dark:text-white/50">vs last week</span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Automation performance</CardTitle>
              <CardDescription>Workflows and insights generated over time.</CardDescription>
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
              <CardTitle>Usage mix</CardTitle>
              <CardDescription>Where Aldenaire helps the most.</CardDescription>
            </CardHeader>
            <CardContent>
              <UsagePieChart />
              <div className="mt-4 space-y-2">
                {usageBreakdown.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-xs text-ink-600 dark:text-white/60">
                    <span>{item.name}</span>
                    <span className="font-semibold text-ink-900 dark:text-white">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
            <CardDescription>Latest AI actions and automations.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((item) => (
              <div
                key={item.title}
                className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/60 px-4 py-3 text-sm text-ink-700 shadow-card transition hover:-translate-y-0.5 dark:bg-white/5 dark:text-white/70"
              >
                <div>
                  <p className="font-semibold text-ink-950 dark:text-white">{item.title}</p>
                  <p className="text-xs text-ink-500 dark:text-white/50">{item.time}</p>
                </div>
                <Badge variant="info">{item.tag}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
