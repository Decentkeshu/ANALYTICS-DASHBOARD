"use client";

import { useEffect, useState } from "react";
import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { getMrrData } from "../services/analyticsservices";

type RevenuePoint = {
  month: string;
  value: number;
  Tvalue: number;
};

export default function Mrrgraph() {
  const [data, setData] = useState<RevenuePoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await getMrrData();
        console.log("MRR res:", res);

        const raw = res?.data?.data ?? res?.data;
        if (Array.isArray(raw)) {
          setData(raw as RevenuePoint[]);
        }
      } catch (err) {
        console.error("Failed to load MRR data:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const formatYAxis = (value: number) => `${(value / 1000).toFixed(0)}k`;

  const formatTooltip = (value: unknown) => {
    if (value == null) return "";
    if (typeof value === "number") return value.toLocaleString();
    return String(value);
  };

  return (
    <div
      style={{ background: "var(--bg)", color: "var(--text)" }}
      className="border border-gray-200 rounded-xl p-5 flex flex-col gap-2 bg-gray-100 h-75"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-800">Traffic Overflow</h2>
        <h4 className="text-sm font-medium text-gray-800">
          Daily visitors for last 30 days.
        </h4>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-3 h-0.5 bg-blue-500 inline-block rounded" />
            Visitors
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-3 h-0.5 bg-green-500 inline-block rounded" />
            Target Visitors
          </span>
        </div>
      </div>

   
      {loading && (
        <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
          Loading...
        </div>
      )}

   
      {!loading && data.length === 0 && (
        <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
          No data available.
        </div>
      )}

    
      {!loading && data.length > 0 && (
        <ResponsiveContainer width="100%" height={220}>
          <ComposedChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.75} />
                <stop offset="40%" stopColor="#3b82f6" stopOpacity={0.55} />
                <stop offset="75%" stopColor="#3b82f6" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={formatYAxis} />
            <Tooltip formatter={formatTooltip} />

      
            <Area
              type="monotone"
              dataKey="value"
              name="Visitors"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#colorUsers)"
              dot={false}
            />

          
            <Line
              type="monotone"
              dataKey="Tvalue"
              name="Target Visitors"
              stroke="#22c55e"
              strokeWidth={2}
              strokeDasharray="5 4"
              dot={false}
              activeDot={{ r: 4 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}