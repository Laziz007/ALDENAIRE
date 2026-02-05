"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Shield,
  Sparkles,
  Workflow,
  Radar,
  Plug,
  LineChart,
  Bell
} from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { features } from "@/lib/data";

const icons = [Activity, LineChart, Sparkles, Shield, Bell, Workflow, Plug, Radar];

export function Features() {
  return (
    <section className="py-20" id="features">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Features</p>
          </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl font-semibold text-ink-950 dark:text-white">
            Everything you need to run smarter with AI.
          </h2>
        </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 18, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className="glass group rounded-2xl p-6 shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 transition group-hover:bg-accent-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-950 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-ink-700 dark:text-white/70">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
