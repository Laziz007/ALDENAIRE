"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { ShimmerButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20" id="cta">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-600/10 via-glow-500/20 to-transparent" />
        <motion.div
          className="absolute right-0 top-0 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Ready?</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-4xl font-semibold text-ink-950 dark:text-white">
            Let AI work for you. Build your productivity engine today.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink-700 dark:text-white/70">
            Join entrepreneurs, creators, and teams using Aldenaire to make better decisions and automate the routine.
          </p>
        </Reveal>
        <Reveal delay={0.3} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ShimmerButton asChild>
            <Link href="/auth/register">
              Boost productivity with AI
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ShimmerButton>
          <Link
            href="/auth/login"
            className="text-sm font-semibold text-ink-900 underline-offset-4 transition hover:underline dark:text-white"
          >
            Talk to sales
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
