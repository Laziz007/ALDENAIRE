"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { pricingPlans } from "@/lib/data";

export function Pricing() {
  const [yearly, setYearly] = React.useState(false);

  return (
    <section className="py-20" id="pricing">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Pricing</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl font-semibold text-ink-950 dark:text-white">
            Pricing that scales with your AI ambitions.
          </h2>
        </Reveal>

        <div className="mt-6 flex items-center gap-3 text-sm">
          <span className={yearly ? "text-ink-600 dark:text-white/60" : "font-semibold text-ink-950 dark:text-white"}>Monthly</span>
          <button
            onClick={() => setYearly((prev) => !prev)}
            className="relative flex h-7 w-14 items-center rounded-full bg-white/70 p-1 shadow-card dark:bg-white/10"
            aria-label="Toggle yearly pricing"
          >
            <motion.span
              className="absolute left-1 top-1 h-5 w-5 rounded-full bg-accent-600"
              animate={{ x: yearly ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </button>
          <span className={yearly ? "font-semibold text-ink-950 dark:text-white" : "text-ink-600 dark:text-white/60"}>Yearly</span>
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-600">Save 20%</span>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const price = yearly ? plan.yearly : plan.monthly;
            const priceLabel = price === 0 ? "Free" : `$${price}`;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`glass flex h-full flex-col rounded-2xl p-6 shadow-card ${
                  plan.highlight ? "border-2 border-accent-500/60 shadow-glow" : "border border-white/20"
                }`}
              >
                {plan.highlight && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-accent-600 px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-ink-950 dark:text-white">{plan.name}</h3>
                <p className="text-sm text-ink-700 dark:text-white/70">{plan.description}</p>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-semibold text-ink-950 dark:text-white">{priceLabel}</span>
                  {price > 0 && (
                    <span className="text-sm text-ink-600 dark:text-white/60">/ user</span>
                  )}
                </div>
                <ul className="mt-6 space-y-3 text-sm text-ink-700 dark:text-white/70">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 w-full" variant={plan.highlight ? "primary" : "secondary"}>
                  <Link href="/auth/register">Start with {plan.name}</Link>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
