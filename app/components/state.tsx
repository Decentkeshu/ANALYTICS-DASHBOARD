"use client";

import { useEffect, useState } from "react";
import MrrCard from "./MRRcard";
import { getRevenueStats } from "../services/analyticsservices";
import { TrendingUp, BarChart2, DollarSign, AlertCircle } from "lucide-react";

type RevenueStat = {
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

export default function State() {
  const [stats, setStats] = useState<RevenueStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await getRevenueStats();
        console.log("API Response:", res); 

    
        const rawData = res?.data?.data ?? res?.data;

        if (Array.isArray(rawData)) {
          setStats(rawData as RevenueStat[]);
        } else {
          console.warn("Unexpected data shape:", res);
          setError("Unexpected data format from API");
        }
      } catch (err) {
        console.error("Failed to load revenue stats:", err);
        setError("Failed to load stats. Check your API or network.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <div
      style={{ background: "var(--bg)", color: "var(--text)" }}
      className="w-full"
    >
      <div className="grid grid-cols-4 gap-3">

     
        {loading &&
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-24 bg-gray-200 animate-pulse rounded-xl" />
          ))
        }

      
        {!loading && error && (
          <div className="col-span-4 flex items-center gap-2 text-red-500 text-sm p-3 bg-red-50 rounded-xl">
            <AlertCircle size={16} />
            {error}
          </div>
        )}

    
        {!loading && !error && stats.length === 0 && (
          <p className="col-span-4 text-center text-gray-400 py-6">
            No stats available.
          </p>
        )}

      
        {!loading && !error &&
          stats.map((s) => {
            const Icon = iconMap[s.icon] || AlertCircle;
            return (
              <MrrCard
                key={s.label}
                label={s.label}
                value={s.value}
                change={s.change}
                icon={Icon}
              />
            );
          })
        }

      </div>
    </div>
  );
}