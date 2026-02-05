"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { ShimmerButton, Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-mist-50 to-mist-100 dark:from-ink-950 dark:via-ink-900 dark:to-ink-950" />
        <motion.div
          className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-glow-500/30 blur-3xl"
          animate={{ x: [0, 40, -20, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-20 h-80 w-80 rounded-full bg-accent-400/30 blur-3xl"
          animate={{ x: [0, -40, 20, 0], y: [0, 30, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 section-grid opacity-40" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 px-6 pb-20 pt-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/70 px-4 py-2 text-xs font-semibold text-ink-800 shadow-card dark:bg-white/10 dark:text-white">
            <Sparkles className="h-4 w-4" />
            Human-friendly AI built for ambitious teams.
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-balance font-display text-4xl font-semibold leading-tight text-ink-950 dark:text-white sm:text-5xl lg:text-6xl">
            Turn complex work into simple actions with AI.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-2xl text-pretty text-lg text-ink-800 dark:text-white/70">
            Aldenaire is a smart service platform that saves time, improves decisions, and automates routine work
            across your business and personal workflows.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="flex flex-wrap items-center gap-4">
          <ShimmerButton asChild>
            <Link href="/auth/register">
              Start using AI today
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ShimmerButton>
          <Button asChild variant="ghost">
            <Link href="/dashboard" prefetch={false}>View live dashboard</Link>
          </Button>
        </Reveal>

        <Reveal delay={0.4} className="grid w-full grid-cols-2 gap-6 rounded-3xl bg-white/60 p-6 shadow-glass dark:bg-white/5 sm:grid-cols-4">
          {stats.map((stat) => (
            <motion.div key={stat.label} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
              <p className="text-2xl font-semibold text-ink-950 dark:text-white">{stat.value}</p>
              <p className="text-sm text-ink-700 dark:text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
