"use client";
import { useEffect, useState } from "react";
import Reportkpi from "../components/Reportkpi";
import { TrendingUp, BarChart2, Users, DollarSign, AlertCircle, Activity } from "lucide-react";
import { getReportsStatus } from "../services/analyticsservices";

const iconMap: Record<string, any> = {
  Users,
  Activity,
  DollarSign,
  AlertCircle,
  BarChart2,
  TrendingUp,
};

type StatusItem = {
  label: string;
  description: string;
  icon: string;
  lastRun: string;
  isScheduled: boolean;
};

export default function Reportspage() {
  const [status, setStatus] = useState<StatusItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await getReportsStatus();
        const raw = res?.data?.data ?? res?.data;
        if (Array.isArray(raw)) {
          setStatus(raw as StatusItem[]);
        }
      } catch (err) {
        console.error("Failed to load reports status:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-3">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 animate-pulse rounded-xl" />
            ))
          : status.map((s) => (
              <Reportkpi
                key={s.label}
                {...s}
                icon={iconMap[s.icon] || AlertCircle}
              />
            ))}
      </div>
    </>
  );
}