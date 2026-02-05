"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import { adminUsage } from "@/lib/dashboard-data";

export function AdminUsageChart() {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={adminUsage} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="adminUsage" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#6366F1" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.3)" />
          <XAxis dataKey="week" stroke="rgba(148, 163, 184, 0.7)" fontSize={12} />
          <YAxis stroke="rgba(148, 163, 184, 0.7)" fontSize={12} />
          <Tooltip
            contentStyle={{
              background: "rgba(15, 23, 42, 0.9)",
              border: "1px solid rgba(148, 163, 184, 0.2)",
              borderRadius: 12,
              color: "white"
            }}
          />
          <Area type="monotone" dataKey="value" stroke="#6366F1" fill="url(#adminUsage)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
