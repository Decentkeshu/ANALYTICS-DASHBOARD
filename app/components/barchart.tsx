"use client";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { getExports } from "../services/analyticsservices";

type ExportPoint = {
  date: string;
  exports: number;
};

export default function ExportActivityChart() {
  const [data, setData] = useState<ExportPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await getExports();
        const raw = res?.data?.data ?? res?.data;
        if (Array.isArray(raw)) setData(raw as ExportPoint[]);
      } catch (err) {
        console.error("Failed to load exports:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);


  const total = data.reduce((sum, d) => sum + d.exports, 0);
  const avg = data.length ? (total / data.length).toFixed(1) : "0";
  const peak = data.reduce((max, d) => d.exports > max.exports ? d : max, { date: "-", exports: 0 });

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }} className="border border-gray-200 rounded-xl p-5 flex flex-col gap-4 bg-gray-100 mt-4">

      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium">Export activity</p>
          <p className="text-xs text-muted-foreground mt-0.5">Reports exported per day — last 14 days</p>
        </div>
        <select className="text-xs border rounded-lg px-2 py-1.5 text-muted-foreground">
          <option>Last 14 days</option>
          <option>Last 30 days</option>
          <option>Last 7 days</option>
        </select>
      </div>

     
      <div className="flex gap-3 mb-5">
        <div className="bg-muted/50 rounded-lg px-4 py-2">
          <p className="text-xs text-muted-foreground">Total exports</p>
          <p className="text-lg font-medium">{loading ? "..." : total}</p>
        </div>
        <div className="bg-muted/50 rounded-lg px-4 py-2">
          <p className="text-xs text-muted-foreground">Daily avg</p>
          <p className="text-lg font-medium">{loading ? "..." : avg}</p>
        </div>
        <div className="bg-muted/50 rounded-lg px-4 py-2">
          <p className="text-xs text-muted-foreground">Peak day</p>
          <p className="text-lg font-medium">{loading ? "..." : peak.date}</p>
        </div>
      </div>

      {loading ? (
        <div className="h-[200px] bg-gray-200 animate-pulse rounded-xl" />
      ) : (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} barSize={28}>
            <CartesianGrid vertical={false} stroke="#e5e7eb" />
            <XAxis dataKey="date" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
            <Tooltip
              formatter={(value) => [`${value} exports`, ""]}
              cursor={{ fill: "rgba(0,0,0,0.04)" }}
            />
            <Bar dataKey="exports" fill="#185FA5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}

    </div>
  );
}