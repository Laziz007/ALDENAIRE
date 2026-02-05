"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { steps } from "@/lib/data";

export function HowItWorks() {
  return (
    <section className="py-20" id="how-it-works">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">How it works</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl font-semibold text-ink-950 dark:text-white">
            Launch your AI assistant in three steps.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="glass flex items-start gap-4 rounded-2xl p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/10 text-accent-600">
                  <span className="text-sm font-semibold">0{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink-950 dark:text-white">{step.title}</h3>
                  <p className="text-sm text-ink-700 dark:text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/20 dark:bg-white/10" />
            <motion.div
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent-500 via-glow-500 to-transparent"
              style={{ originY: 0 }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            />
            <motion.div
              className="relative z-10 flex flex-col items-center gap-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/40 bg-white/70 shadow-card dark:bg-white/10"
                >
                  <CheckCircle2 className="h-6 w-6 text-accent-600" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
