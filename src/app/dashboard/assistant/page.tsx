"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Send } from "lucide-react";

import { assistantPrompts } from "@/lib/dashboard-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialMessages = [
  {
    role: "assistant",
    content: "Hi! I can draft content, automate tasks, or analyze data. What do you want to tackle today?"
  },
  {
    role: "user",
    content: "Summarize our top customer support themes from the last 30 days."
  },
  {
    role: "assistant",
    content:
      "Done. The top themes are onboarding confusion, billing questions, and integration setup. I can prepare a response playbook or update FAQs next."
  }
];

export default function AssistantPage() {
  const [messages, setMessages] = React.useState(initialMessages);
  const [input, setInput] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const timerRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleSend = (event: React.FormEvent) => {
    event.preventDefault();
    if (!input.trim()) return;

    const nextMessages = [
      ...messages,
      { role: "user", content: input.trim() }
    ];
    setMessages(nextMessages);
    setInput("");
    setIsTyping(true);

    timerRef.current = window.setTimeout(() => {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            "Got it. I can automate that workflow and draft the first output in under a minute. Want me to proceed?"
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">AI Assistant</p>
        <h1 className="text-3xl font-semibold text-ink-950 dark:text-white">Chat with Aldenaire</h1>
        <p className="mt-2 max-w-2xl text-sm text-ink-600 dark:text-white/60">
          Ask anything. Aldenaire remembers your context and can automate follow-up tasks instantly.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-white/10 bg-white/70 p-6 shadow-card dark:bg-white/5"
        >
          <div className="space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((message, index) => (
                <motion.div
                  key={`${message.role}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                    message.role === "assistant"
                      ? "bg-white/80 text-ink-900 dark:bg-white/10 dark:text-white"
                      : "ml-auto bg-accent-600 text-white"
                  }`}
                >
                  {message.content}
                </motion.div>
              ))}
            </AnimatePresence>
            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-ink-600 dark:text-white/60">
                <div className="flex gap-1">
                  {[0, 1, 2].map((dot) => (
                    <motion.span
                      key={dot}
                      className="h-2 w-2 rounded-full bg-accent-500"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: dot * 0.2 }}
                    />
                  ))}
                </div>
                Aldenaire is typing...
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="mt-6 flex gap-3">
            <Input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask Aldenaire to generate, analyze, or automate..."
            />
            <Button type="submit">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </motion.div>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass rounded-3xl p-5 shadow-card"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-ink-900 dark:text-white">
              <Sparkles className="h-4 w-4 text-accent-500" />
              Suggested prompts
            </div>
            <div className="mt-4 space-y-3">
              {assistantPrompts.map((prompt) => (
                <button
                  key={prompt}
                  className="w-full rounded-2xl border border-white/10 bg-white/60 px-4 py-3 text-left text-sm text-ink-700 transition hover:bg-white/90 dark:bg-white/5 dark:text-white/70"
                  onClick={() => setInput(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass rounded-3xl p-5 shadow-card"
          >
            <h3 className="text-sm font-semibold text-ink-900 dark:text-white">Memory snapshot</h3>
            <p className="mt-2 text-xs text-ink-600 dark:text-white/60">
              Aldenaire remembers your recent projects, tone guidelines, and preferred formats. Update memory anytime in
              settings.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
