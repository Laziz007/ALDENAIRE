"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-20" id="faq">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">FAQ</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl font-semibold text-ink-950 dark:text-white">
            Answers to help you move faster with AI.
          </h2>
        </Reveal>

        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="glass rounded-2xl p-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-base font-semibold text-ink-950 dark:text-white">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition ${isOpen ? "rotate-180 text-accent-600" : "text-ink-500"}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm text-ink-700 dark:text-white/70">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
