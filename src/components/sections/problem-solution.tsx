"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Compass, Zap } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { problemCards, solutionCards } from "@/lib/data";

const problemIcons = [AlertTriangle, Compass, Zap];
const solutionIcons = [Compass, Zap, AlertTriangle];

export function ProblemSolution() {
  return (
    <section className="section-grid py-20" id="problem">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div className="space-y-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
              The Problem
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-semibold text-ink-950 dark:text-white">
              Work is scattered. Momentum gets lost.
            </h2>
          </Reveal>
          <div className="space-y-4">
            {problemCards.map((card, index) => {
              const Icon = problemIcons[index % problemIcons.length];
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="glass flex items-start gap-4 rounded-2xl p-5 shadow-card"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-accent-600 shadow-md dark:bg-white/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-900 dark:text-white">{card.title}</h3>
                    <p className="text-sm text-ink-700 dark:text-white/70">{card.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-glow-600">
              The Solution
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-semibold text-ink-950 dark:text-white">
              One intelligent layer that turns inputs into outcomes.
            </h2>
          </Reveal>
          <div className="space-y-4">
            {solutionCards.map((card, index) => {
              const Icon = solutionIcons[index % solutionIcons.length];
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="glass flex items-start gap-4 rounded-2xl p-5 shadow-card"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-glow-500 shadow-md dark:bg-white/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-900 dark:text-white">{card.title}</h3>
                    <p className="text-sm text-ink-700 dark:text-white/70">{card.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
