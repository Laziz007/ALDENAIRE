"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { logos, testimonials } from "@/lib/data";

export function SocialProof() {
  return (
    <section className="py-20" id="social-proof">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Trusted by</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl font-semibold text-ink-950 dark:text-white">
            Teams trust Aldenaire to deliver dependable, human-friendly AI.
          </h2>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-ink-700 dark:text-white/70">
          <div className="flex items-center gap-1 rounded-full bg-white/70 px-4 py-2 shadow-card dark:bg-white/10">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-4 w-4 text-amber-400" fill="currentColor" />
            ))}
            <span className="ml-2 font-semibold text-ink-900 dark:text-white">4.9/5</span>
            <span className="ml-1">from 1,200+ reviews</span>
          </div>
          <span>Used across revenue, product, and operations teams.</span>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="glass rounded-2xl p-6 shadow-card"
            >
              <p className="text-sm text-ink-700 dark:text-white/70">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="font-semibold text-ink-950 dark:text-white">{testimonial.name}</p>
                <p className="text-xs text-ink-600 dark:text-white/60">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white/60 px-6 py-5 text-sm font-semibold text-ink-700 shadow-card dark:bg-white/5 dark:text-white/70">
          {logos.map((logo) => (
            <span key={logo} className="uppercase tracking-widest text-xs">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
