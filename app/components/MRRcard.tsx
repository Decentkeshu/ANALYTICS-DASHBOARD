"use client"
import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

type Props = {
  label: string;
  value: string;
  change: number;
  icon: React.ElementType;
};

function generateData(change: number) {
  let base = 100;

  return Array.from({ length: 8 }).map(() => {
    base = base * (1 + change / 100 / 4);
    return { value: base };
  });
}

export default function MrrCard({ label, value, change, icon: Icon }: Props) {
  const isUp = change > 0;
  const data = generateData(change);

  return (
    <div className="relative bg-gray-100 rounded-lg p-4 flex flex-col gap-2 hover:bg-purple-100 cursor-pointer border border-transparent transition">

      {/* Icon */}
      <div className="absolute top-3 right-3 p-2 bg-purple-200 rounded-full">
        <Icon className="w-5 h-5 text-purple-700" />
      </div>

      {/* Label */}
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 pr-10">
        {label}
      </p>

      {/* Value */}
      <p className="text-2xl font-semibold text-gray-900">{value}</p>

      {/* Change */}
      <p className={`text-sm font-medium ${isUp ? "text-emerald-600" : "text-red-500"}`}>
        {isUp ? "▲" : "▼"} {Math.abs(change)}% vs last month
      </p>

      {/* 🔥 Mini Chart */}
      <div className="h-12 w-full mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`grad-${label}`} x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stopColor={isUp ? "#10b981" : "#ef4444"} stopOpacity={0.3} />
  <stop offset="70%" stopColor={isUp ? "#10b981" : "#ef4444"} stopOpacity={0.1} />
  <stop offset="100%" stopColor={isUp ? "#10b981" : "#ef4444"} stopOpacity={0} />
</linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="value"
              stroke={isUp ? "#10b981" : "#ef4444"}
              fill="url(#colorUsers)"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}