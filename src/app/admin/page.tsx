"use client";

import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";

import { adminUsers } from "@/lib/dashboard-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AdminUsersPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">Admin</p>
          <h1 className="text-3xl font-semibold text-ink-950 dark:text-white">User management</h1>
        </div>
        <Button>
          <UserPlus className="h-4 w-4" />
          Invite user
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Workspace users</CardTitle>
            <CardDescription>Manage roles, access, and plan assignments.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {adminUsers.map((user, index) => (
              <motion.div
                key={user.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/70 px-4 py-3 text-sm text-ink-700 shadow-card dark:bg-white/5 dark:text-white/70"
              >
                <div>
                  <p className="font-semibold text-ink-950 dark:text-white">{user.name}</p>
                  <p className="text-xs text-ink-500 dark:text-white/50">
                    {user.role} · {user.plan}
                  </p>
                </div>
                <Badge variant={user.status === "Active" ? "success" : "warning"}>{user.status}</Badge>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
