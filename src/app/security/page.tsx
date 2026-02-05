import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { Security } from "@/components/sections/security";
import { PageTransition } from "@/components/page-transition";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Aldenaire Security | Enterprise-Grade Protection",
  description:
    "Learn about Aldenaire security, privacy controls, compliance, and reliability."
};

export default function SecurityPage() {
  return (
    <PageTransition>
      <Navbar />
      <main className="pt-24">
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950" />
          <div className="mx-auto max-w-5xl px-6 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/80">
              <ShieldCheck className="h-4 w-4" />
              Enterprise security
            </div>
            <h1 className="mt-6 text-4xl font-semibold">Security built for AI-first teams.</h1>
            <p className="mt-4 max-w-2xl text-sm text-white/70">
              Aldenaire is designed with enterprise-grade controls, privacy safeguards, and compliance-ready operations.
              Your data remains protected at every layer.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="secondary" className="bg-white text-ink-900 hover:bg-white/90">
                <Link href="/auth/register">
                  Request security review
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="text-white">
                <Link href="/dashboard" prefetch={false}>See trust controls</Link>
              </Button>
            </div>
          </div>
        </section>
        <Security />
        <FinalCTA />
      </main>
      <Footer />
    </PageTransition>
  );
}
