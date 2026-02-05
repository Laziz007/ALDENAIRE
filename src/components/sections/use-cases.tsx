"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Gauge, HeartHandshake } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { useCases } from "@/lib/data";

const icons = [Gauge, Briefcase, Users, HeartHandshake];

export function UseCases() {
  return (
    <section className="py-20" id="use-cases">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Use cases</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl font-semibold text-ink-950 dark:text-white">
            Built for entrepreneurs, teams, and creators.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {useCases.map((useCase, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 18, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="glass rounded-2xl p-6 shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-500/10 text-glow-500">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-950 dark:text-white">{useCase.title}</h3>
                <p className="mt-2 text-sm text-ink-700 dark:text-white/70">{useCase.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
