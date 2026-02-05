import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Integrations } from "@/components/sections/integrations";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { PageTransition } from "@/components/page-transition";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Aldenaire Integrations | Connect Your Stack",
  description:
    "Connect Aldenaire to your tools and automate workflows across your entire stack."
};

export default function IntegrationsPage() {
  return (
    <PageTransition>
      <Navbar />
      <main className="pt-24">
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-500/10 via-transparent to-glow-500/10" />
          <div className="mx-auto max-w-5xl px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/70 px-4 py-2 text-xs font-semibold text-ink-800 shadow-card dark:bg-white/10 dark:text-white">
              <Sparkles className="h-4 w-4" />
              Integration ecosystem
            </div>
            <h1 className="mt-6 text-4xl font-semibold text-ink-950 dark:text-white">
              Connect every tool to a single AI command layer.
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-ink-700 dark:text-white/70">
              Aldenaire connects your stack in minutes. Sync data, trigger automations, and align teams with consistent,
              real-time context.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/auth/register">
                  Start building automations
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/dashboard" prefetch={false}>View dashboard</Link>
              </Button>
            </div>
          </div>
        </section>
        <Integrations />
        <FinalCTA />
      </main>
      <Footer />
    </PageTransition>
  );
}
