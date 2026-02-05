"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { PerformanceAreaChart } from "@/components/charts/performance-area";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const previewStats = [
  { label: "Automations", value: "128" },
  { label: "Hours saved", value: "3.2k" },
  { label: "Decision accuracy", value: "94%" }
];

const previewBadges = ["Live agents", "Auto-approved", "Priority queue", "Human review"];

const previewActivity = [
  { title: "Generated Q2 content plan", time: "12 min ago" },
  { title: "Automated lead follow-up", time: "38 min ago" },
  { title: "Churn risk alert sent", time: "Today" }
];

const previewMessages = [
  { role: "assistant", content: "Your weekly recap is ready. Want the summary?" },
  { role: "user", content: "Yes, and highlight churn risks." },
  {
    role: "assistant",
    content: "Done. The top churn risk is onboarding delays. I can trigger a retention workflow."
  }
];

export function DashboardPreview() {
  return (
    <section className="relative py-20" id="preview">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-glow-500/10" />
        <motion.div
          className="absolute left-10 top-10 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl"
          animate={{ y: [0, 30, -20, 0], x: [0, 20, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-20 h-72 w-72 rounded-full bg-glow-500/20 blur-3xl"
          animate={{ y: [0, -20, 30, 0], x: [0, -20, 10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/70 px-4 py-2 text-xs font-semibold text-ink-800 shadow-card dark:bg-white/10 dark:text-white">
              <Sparkles className="h-4 w-4" />
              Live dashboard preview
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-semibold text-ink-950 dark:text-white">
              A control center built for clarity and speed.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm text-ink-700 dark:text-white/70">
              Monitor automations, track AI performance, and keep teams aligned in one premium workspace. Every
              insight is actionable, every workflow is traceable.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/dashboard" prefetch={false}>
                View dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/auth/register">Request full walkthrough</Link>
            </Button>
          </Reveal>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-accent-500/20 via-transparent to-glow-500/20 blur-2xl" />
          <div className="relative rounded-[32px] border border-white/20 bg-white/80 p-6 shadow-glass dark:bg-ink-950/80">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">Overview</p>
                <h3 className="text-lg font-semibold text-ink-950 dark:text-white">AI performance</h3>
              </div>
              <div className="rounded-full border border-white/20 bg-white/70 px-3 py-1 text-xs font-semibold text-ink-700 shadow-card dark:bg-white/10 dark:text-white/70">
                Updated just now
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-3">
                  {previewStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={{ y: -4 }}
                      className="rounded-2xl border border-white/10 bg-white/60 p-4 text-center shadow-card dark:bg-white/5"
                    >
                      <p className="text-lg font-semibold text-ink-950 dark:text-white">{stat.value}</p>
                      <p className="text-xs text-ink-500 dark:text-white/50">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {previewBadges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-white/20 bg-white/60 px-3 py-1 text-xs font-semibold text-ink-700 dark:bg-white/10 dark:text-white/70"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/60 p-4 shadow-card dark:bg-white/5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 dark:text-white/50">
                    Recent actions
                  </p>
                  <div className="mt-3 space-y-2">
                    {previewActivity.map((item) => (
                      <div key={item.title} className="flex items-center justify-between text-xs text-ink-600 dark:text-white/60">
                        <span className="font-semibold text-ink-900 dark:text-white">{item.title}</span>
                        <span>{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/60 p-4 shadow-card dark:bg-white/5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 dark:text-white/50">
                    Live assistant
                  </p>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold text-emerald-600">
                    Active
                  </span>
                </div>
                <div className="mt-4 space-y-2 text-xs">
                  {previewMessages.map((message, index) => (
                    <div
                      key={`${message.role}-${index}`}
                      className={`rounded-2xl px-3 py-2 ${
                        message.role === "assistant"
                          ? "bg-white/80 text-ink-900 dark:bg-white/10 dark:text-white"
                          : "ml-auto bg-accent-600 text-white"
                      }`}
                    >
                      {message.content}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/60 p-4 shadow-card dark:bg-white/5">
              <PerformanceAreaChart className="h-44" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
