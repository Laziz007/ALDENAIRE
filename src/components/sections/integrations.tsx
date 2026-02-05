"use client";

import { motion } from "framer-motion";
import { Plug, MessageSquareText, Database, Briefcase, Layers } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";

const integrationGroups = [
  {
    title: "Communication",
    description: "Sync conversations and automate responses across your channels.",
    icon: MessageSquareText,
    items: ["Slack", "Intercom", "Zendesk", "Gmail"]
  },
  {
    title: "Docs & Content",
    description: "Generate, summarize, and update documents automatically.",
    icon: Layers,
    items: ["Notion", "Google Docs", "Figma", "Confluence"]
  },
  {
    title: "CRM & Sales",
    description: "Enrich pipelines and trigger revenue workflows in real time.",
    icon: Briefcase,
    items: ["HubSpot", "Salesforce", "Pipedrive", "Stripe"]
  },
  {
    title: "Data & Analytics",
    description: "Connect your data sources and surface insights instantly.",
    icon: Database,
    items: ["Snowflake", "BigQuery", "Amplitude", "Mixpanel"]
  },
  {
    title: "Automation",
    description: "Orchestrate workflows across your entire stack with ease.",
    icon: Plug,
    items: ["Zapier", "Make", "Airtable", "Webhooks"]
  }
];

const logoRow = [
  "Slack",
  "Notion",
  "Google Workspace",
  "Figma",
  "Airtable",
  "HubSpot",
  "Salesforce",
  "Stripe",
  "Intercom",
  "Zendesk",
  "Linear",
  "Calendly"
];

export function Integrations() {
  return (
    <section className="py-20" id="integrations">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Integrations</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-semibold text-ink-950 dark:text-white">
                Connect Aldenaire to the tools you already trust.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-sm text-ink-700 dark:text-white/70">
                Bring your stack together in minutes. Aldenaire unifies context across apps so automations work with the
                same data your teams use every day.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-2">
                {logoRow.map((logo) => (
                  <span
                    key={logo}
                    className="rounded-full border border-white/20 bg-white/70 px-3 py-1 text-xs font-semibold text-ink-700 shadow-card dark:bg-white/10 dark:text-white/70"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {integrationGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -6 }}
                  className="glass rounded-2xl p-5 shadow-card"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-ink-950 dark:text-white">{group.title}</h3>
                      <p className="text-xs text-ink-600 dark:text-white/60">{group.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-ink-600 dark:text-white/60">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/20 px-2 py-1">
                        {item}
                      </span>
                    ))}
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
