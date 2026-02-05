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

import { performanceData } from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

const tooltipStyle = {
  background: "rgba(15, 23, 42, 0.9)",
  border: "1px solid rgba(148, 163, 184, 0.2)",
  borderRadius: 12,
  color: "white"
};

type PerformanceAreaChartProps = {
  className?: string;
};

export function PerformanceAreaChart({ className }: PerformanceAreaChartProps) {
  return (
    <div className={cn("h-64 w-full", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={performanceData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="automationGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#2563EB" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="insightsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.3)" />
          <XAxis dataKey="month" stroke="rgba(148, 163, 184, 0.7)" fontSize={12} />
          <YAxis stroke="rgba(148, 163, 184, 0.7)" fontSize={12} />
          <Tooltip contentStyle={tooltipStyle} />
          <Area type="monotone" dataKey="automation" stroke="#2563EB" fill="url(#automationGradient)" />
          <Area type="monotone" dataKey="insights" stroke="#8B5CF6" fill="url(#insightsGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
