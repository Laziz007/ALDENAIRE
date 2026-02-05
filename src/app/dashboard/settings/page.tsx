"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  const [alerts, setAlerts] = React.useState(true);
  const [memory, setMemory] = React.useState(true);
  const [insights, setInsights] = React.useState(false);
  const [telegramLink, setTelegramLink] = React.useState<string | null>(null);
  const [telegramStatus, setTelegramStatus] = React.useState<string | null>(null);
  const [telegramCode, setTelegramCode] = React.useState("");
  const [verifyStatus, setVerifyStatus] = React.useState<string | null>(null);

  const handleGenerateLink = async () => {
    setTelegramStatus(null);
    setVerifyStatus(null);
    try {
      const res = await fetch("/api/telegram/link", { method: "POST" });
      const data = await res.json();
      if (!res.ok) {
        setTelegramStatus(data.error || "Unable to generate link.");
        return;
      }
      setTelegramLink(data.link);
      setTelegramStatus("Link ready. Open Telegram and press Start.");
    } catch (error) {
      setTelegramStatus("Link request failed.");
    }
  };

  const handleSendCode = async () => {
    setTelegramStatus(null);
    setVerifyStatus(null);
    try {
      const res = await fetch("/api/telegram/send-code", { method: "POST" });
      const data = await res.json();
      if (!res.ok) {
        setTelegramStatus(data.error || "Telegram not linked yet.");
        return;
      }
      setTelegramStatus("Verification code sent in Telegram.");
    } catch (error) {
      setTelegramStatus("Failed to send code.");
    }
  };

  const handleVerifyCode = async () => {
    setVerifyStatus(null);
    try {
      const res = await fetch("/api/telegram/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: telegramCode })
      });
      const data = await res.json();
      if (!res.ok) {
        setVerifyStatus(data.error || "Invalid code.");
        return;
      }
      setVerifyStatus("Telegram verification complete.");
    } catch (error) {
      setVerifyStatus("Verification failed.");
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">Settings</p>
        <h1 className="text-3xl font-semibold text-ink-950 dark:text-white">Preferences & profile</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="p-6">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Update your personal details and workspace settings.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Jordan Lee" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="jordan@aldenaire.ai" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" defaultValue="Product Lead" />
            </div>
          </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="p-6">
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Switch between dark and light mode.</CardDescription>
          </CardHeader>
          <CardContent>
            <ThemeToggle />
          </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card className="p-6">
          <CardHeader>
            <CardTitle>AI preferences</CardTitle>
            <CardDescription>Control how Aldenaire communicates and stores memory.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-ink-900 dark:text-white">Proactive alerts</p>
                <p className="text-xs text-ink-500 dark:text-white/50">Get notified when actions are ready.</p>
              </div>
              <Switch checked={alerts} onCheckedChange={setAlerts} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-ink-900 dark:text-white">Memory enabled</p>
                <p className="text-xs text-ink-500 dark:text-white/50">Allow Aldenaire to remember key context.</p>
              </div>
              <Switch checked={memory} onCheckedChange={setMemory} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-ink-900 dark:text-white">Auto-generated insights</p>
                <p className="text-xs text-ink-500 dark:text-white/50">Deliver weekly AI insights reports.</p>
              </div>
              <Switch checked={insights} onCheckedChange={setInsights} />
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/60 px-4 py-3 text-xs text-ink-600 shadow-card dark:bg-white/5 dark:text-white/60">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              Privacy controls apply to all connected workspaces.
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Telegram verification</CardTitle>
            <CardDescription>
              Add a secure Telegram channel for one-time verification codes.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="secondary" onClick={handleGenerateLink}>
                Generate Telegram link
              </Button>
              {telegramLink && (
                <Button asChild>
                  <a href={telegramLink} target="_blank" rel="noreferrer">
                    Open Telegram
                  </a>
                </Button>
              )}
              <Button variant="ghost" onClick={handleSendCode}>
                Send code
              </Button>
            </div>
            {telegramLink && (
              <Input value={telegramLink} readOnly />
            )}
            {telegramStatus && (
              <p className="text-xs text-ink-600 dark:text-white/60">{telegramStatus}</p>
            )}
            <div className="flex flex-wrap items-center gap-3">
              <Input
                placeholder="Enter Telegram code"
                value={telegramCode}
                onChange={(event) => setTelegramCode(event.target.value)}
                className="max-w-xs"
              />
              <Button onClick={handleVerifyCode}>Verify code</Button>
            </div>
            {verifyStatus && (
              <p className="text-xs text-ink-600 dark:text-white/60">{verifyStatus}</p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
