"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, ShieldCheck, Fingerprint, Database, FileCheck2, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const securityPillars = [
  {
    title: "End-to-end encryption",
    description: "Protect sensitive data with encryption in transit and at rest.",
    icon: Lock
  },
  {
    title: "Enterprise access controls",
    description: "SSO, role-based permissions, and granular workspace settings.",
    icon: Fingerprint
  },
  {
    title: "Audit-ready logging",
    description: "Track every action with tamper-proof activity logs.",
    icon: FileCheck2
  },
  {
    title: "Private data vaults",
    description: "Segmented storage to keep customer data isolated and secure.",
    icon: Database
  },
  {
    title: "Compliance-ready",
    description: "SOC 2 aligned practices and GDPR-ready workflows.",
    icon: ShieldCheck
  },
  {
    title: "Global reliability",
    description: "Multi-region infrastructure with 99.99% uptime targets.",
    icon: Globe
  }
];

const securityBadges = [
  "SOC 2 aligned",
  "GDPR-ready",
  "SSO + SCIM",
  "Data residency options",
  "24/7 monitoring"
];

export function Security() {
  return (
    <section className="relative py-20" id="security">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950" />
      <div className="mx-auto max-w-6xl px-6 text-white">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">Security</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-semibold">Security that earns enterprise trust.</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-sm text-white/70">
                Aldenaire is built for teams that move fast and still need airtight security. From encryption to audit
                trails, every layer is engineered to protect your data and your customers.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-2">
                {securityBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <Button asChild variant="secondary" className="bg-white text-ink-900 hover:bg-white/90">
                <Link href="/security">Visit security center</Link>
              </Button>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {securityPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{pillar.title}</h3>
                      <p className="text-xs text-white/70">{pillar.description}</p>
                    </div>
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
