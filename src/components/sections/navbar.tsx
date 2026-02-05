"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-40"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <Link href="/" aria-label="Aldenaire home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-ink-800 transition hover:text-ink-950 dark:text-white/80 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <SignedOut>
            <Link
              href="/auth/login"
              className="text-ink-800 transition hover:text-ink-950 dark:text-white/80 dark:hover:text-white"
            >
              Sign in
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-9 w-9 rounded-full"
                }
              }}
            />
          </SignedIn>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <SignedOut>
            <Button asChild variant="secondary" className="hidden md:inline-flex">
              <Link href="/auth/register">
                Start free
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Button asChild variant="secondary" className="hidden md:inline-flex">
              <Link href="/dashboard" prefetch={false}>
                Open dashboard
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </SignedIn>
          <button
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/70 p-2 text-ink-700 shadow-card transition hover:-translate-y-0.5 dark:bg-white/10 dark:text-white md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              id="mobile-menu"
              className="absolute right-4 top-4 w-[90%] max-w-sm rounded-3xl border border-white/20 bg-white/90 p-6 shadow-glass dark:bg-ink-950/95"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 26 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <Logo textClassName="text-base" />
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/20 p-2 text-ink-700 transition hover:bg-white/80 dark:text-white/70"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-6 space-y-4 text-sm font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-ink-800 transition hover:text-ink-950 dark:text-white/80 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <SignedOut>
                  <Link
                    href="/auth/login"
                    onClick={() => setOpen(false)}
                    className="block text-ink-800 transition hover:text-ink-950 dark:text-white/80 dark:hover:text-white"
                  >
                    Sign in
                  </Link>
                </SignedOut>
              </div>
              <div className="mt-6 space-y-3">
                <SignedOut>
                  <Button asChild className="w-full">
                    <Link href="/auth/register" onClick={() => setOpen(false)}>
                      Start free
                    </Link>
                  </Button>
                </SignedOut>
                <SignedIn>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/dashboard" prefetch={false} onClick={() => setOpen(false)}>
                      Open dashboard
                    </Link>
                  </Button>
                </SignedIn>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
