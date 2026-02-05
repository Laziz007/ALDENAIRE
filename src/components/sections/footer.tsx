import { Mail, Instagram } from "lucide-react";

import { Logo } from "@/components/ui/logo";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20.5 3.8 2.6 10.7c-.8.3-.8 1.5.1 1.8l4.7 1.5 9.9-6.6c.3-.2.7.2.4.5l-7.9 7.6.3 4.3c0 .8 1 .9 1.4.3l2.6-3.7 4.6 3.4c.6.4 1.5.1 1.7-.6l3-13.4c.2-.8-.6-1.5-1.4-1.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

const footerLinks = {
  Product: [
    { label: "Overview", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "Integrations", href: "/#integrations" },
    { label: "Security", href: "/#security" }
  ],
  Company: [
    { label: "Use cases", href: "/#use-cases" },
    { label: "Testimonials", href: "/#social-proof" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/#cta" }
  ],
  Resources: [
    { label: "FAQ", href: "/#faq" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Security center", href: "/security" },
    { label: "Integrations", href: "/integrations" }
  ],
  Legal: [
    { label: "Privacy", href: "/security" },
    { label: "Terms", href: "/security" },
    { label: "Compliance", href: "/security" },
    { label: "Status", href: "/security" }
  ]
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Logo textClassName="text-lg" />
          <p className="mt-4 text-sm text-white/70">
            Turn complex work into simple actions using AI.
          </p>
          <div className="mt-6 space-y-3 text-sm text-white/70">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Aloqa</p>
            <a
              href="https://t.me/Dev_Boy_007"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:-translate-y-0.5 hover:border-white/30"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition group-hover:bg-white/20">
                <TelegramIcon className="h-4 w-4" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Telegram</span>
              <span className="text-sm font-semibold text-white">@Dev_Boy_007</span>
            </a>
            <a
              href="https://instagram.com/_turayev___7"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:-translate-y-0.5 hover:border-white/30"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition group-hover:bg-white/20">
                <Instagram className="h-4 w-4" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Instagram</span>
              <span className="text-sm font-semibold text-white">_turayev___7</span>
            </a>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white">{title}</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-6 md:flex-row md:items-center">
          <p className="text-xs text-white/50">© 2026 Aldenaire. All rights reserved.</p>
          <div className="flex w-full max-w-sm items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/70">
            <Mail className="h-4 w-4" />
            <input
              type="email"
              placeholder="Get product updates"
              aria-label="Email address"
              className="w-full bg-transparent outline-none placeholder:text-white/40"
            />
            <button className="rounded-full bg-accent-600 px-4 py-2 text-xs font-semibold text-white">
              Join
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
