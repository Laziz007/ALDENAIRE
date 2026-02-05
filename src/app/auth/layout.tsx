import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Logo } from "@/components/ui/logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mist-50 via-white to-mist-100 px-6 py-12 dark:from-ink-950 dark:via-ink-900 dark:to-ink-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 lg:flex-row">
        <div className="flex-1 space-y-6">
          <Link href="/" aria-label="Aldenaire home">
            <Logo />
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/70 px-4 py-2 text-xs font-semibold text-ink-800 shadow-card dark:bg-white/10 dark:text-white">
            <Sparkles className="h-4 w-4" />
            Secure access · AI-ready workspace
          </div>
          <h1 className="text-4xl font-semibold text-ink-950 dark:text-white">
            Welcome back to Aldenaire.
          </h1>
          <p className="max-w-md text-sm text-ink-700 dark:text-white/70">
            Sign in to access your AI automations, insights, and intelligent workflows. Everything is ready when you
            are.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Passwordless-ready",
              "SOC 2 aligned",
              "Single sign-on",
              "Encrypted data"
            ].map((item) => (
              <div key={item} className="glass rounded-2xl p-4 text-xs text-ink-700 dark:text-white/70">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full max-w-md justify-center">{children}</div>
      </div>
    </div>
  );
}
