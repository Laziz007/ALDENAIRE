"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

import { automationTasks } from "@/lib/dashboard-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const statusVariant: Record<string, "default" | "success" | "warning" | "info"> = {
  Running: "success",
  Paused: "warning",
  Draft: "info"
};

export default function TasksPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">Automation</p>
          <h1 className="text-3xl font-semibold text-ink-950 dark:text-white">Tasks & workflows</h1>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          New automation
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="p-6">
          <CardHeader>
            <CardTitle>Active workflows</CardTitle>
            <CardDescription>Monitor AI-powered automations and their status.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {automationTasks.map((task, index) => (
              <motion.div
                key={task.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl border border-white/10 bg-white/70 px-4 py-3 text-sm text-ink-700 shadow-card dark:bg-white/5 dark:text-white/70"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold text-ink-950 dark:text-white">{task.title}</p>
                    <p className="text-xs text-ink-500 dark:text-white/50">Owner: {task.owner}</p>
                  </div>
                  <Badge variant={statusVariant[task.status] ?? "default"}>{task.status}</Badge>
                </div>
                <p className="mt-2 text-xs text-ink-500 dark:text-white/50">Last run: {task.lastRun}</p>
              </motion.div>
            ))}
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
            <CardTitle>Design a new workflow</CardTitle>
            <CardDescription>Tell Aldenaire what you need and let it draft the automation.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Workflow name" />
            <Textarea rows={4} placeholder="Describe the automation, triggers, and desired outcomes..." />
            <Button className="w-full">Generate automation</Button>
          </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
