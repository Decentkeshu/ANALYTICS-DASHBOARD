"use client";

import { useEffect, useState } from "react";
import Breakcard from "./Breakdown";
import { getRevenueStats } from "../services/analyticsservices";

import {
  TrendingUp,
  BarChart2,
  DollarSign,
  AlertCircle,
} from "lucide-react";


type BreakStat = {
  label: string;
  value: string;
  change: number;
  icon: string;
};


const iconMap: Record<string, any> = {
  DollarSign,
  TrendingUp,
  BarChart2,
  AlertCircle,
};

export default function Breakstate() {
  const [stats, setStats] = useState<BreakStat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await getRevenueStats();

        if (res?.data?.data) {
          setStats(res.data.data as BreakStat[]);
        }
      } catch (err) {
        console.error("Failed to load breakdown stats:", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <div
      style={{ background: "var(--bg)", color: "var(--text)" }}
      className="p-4 flex-1"
    >
      <div className="grid grid-cols-4 gap-3">

     
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-24 bg-gray-200 animate-pulse rounded-xl"
            />
          ))
        ) : (
          stats.map((s) => {
            const Icon = iconMap[s.icon] || AlertCircle;

            return (
              <Breakcard
                key={s.label}
                label={s.label}
                value={s.value}
                change={s.change}
                icon={Icon}   
              />
            );
          })
        )}

      </div>
    </div>
  );
}