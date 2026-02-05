"use client";

import {
  Line,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const data = [
  { day: "Mon", value: 40 },
  { day: "Tue", value: 54 },
  { day: "Wed", value: 62 },
  { day: "Thu", value: 78 },
  { day: "Fri", value: 71 },
  { day: "Sat", value: 85 },
  { day: "Sun", value: 92 }
];

export function AutomationLineChart() {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.3)" />
          <XAxis dataKey="day" stroke="rgba(148, 163, 184, 0.7)" fontSize={12} />
          <YAxis stroke="rgba(148, 163, 184, 0.7)" fontSize={12} />
          <Tooltip
            contentStyle={{
              background: "rgba(15, 23, 42, 0.9)",
              border: "1px solid rgba(148, 163, 184, 0.2)",
              borderRadius: 12,
              color: "white"
            }}
          />
          <Line type="monotone" dataKey="value" stroke="#38BDF8" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
