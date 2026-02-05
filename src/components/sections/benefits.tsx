"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { comparisons, valuePoints } from "@/lib/data";

export function Benefits() {
  return (
    <section className="py-20" id="benefits">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Value</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-semibold text-ink-950 dark:text-white">
                Clear ROI, measurable productivity.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-4">
              {valuePoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="glass rounded-2xl p-5"
                >
                  <h3 className="text-lg font-semibold text-ink-950 dark:text-white">{point.title}</h3>
                  <p className="text-sm text-ink-700 dark:text-white/70">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {comparisons.map((group, index) => (
              <div
                key={group.label}
                className="glass rounded-2xl p-6 shadow-card"
              >
                <h3 className="text-lg font-semibold text-ink-950 dark:text-white">{group.label}</h3>
                <div className="mt-4 space-y-3 text-sm">
                  {group.points.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-ink-700 dark:text-white/70">
                      {index === 0 ? (
                        <XCircle className="h-4 w-4 text-rose-500" />
                      ) : (
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      )}
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
