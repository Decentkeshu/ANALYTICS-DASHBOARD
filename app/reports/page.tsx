"use client";

import { useEffect, useState } from "react";
import Reportspage from "./reports_page";
import Reportslist from "../components/reports";
import Reportcard from "../components/Reportscard";
import ReportHeader from "../components/Reportheader";
import ExportActivityChart from "../components/barchart";
import { getReportsStats } from "../services/analyticsservices";
import { AlertCircle } from "lucide-react";

type StatItem = {
  label: string;
  value: string;
  change: number;
};

export default function Reports() {
  const [stats, setStats] = useState<StatItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await getReportsStats();
        const raw = res?.data?.data ?? res?.data;
        if (Array.isArray(raw)) setStats(raw as StatItem[]);
      } catch (err) {
        console.error("Failed to load report stats:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="p-4 flex-1">
      <ReportHeader />

      <div className="grid grid-cols-4 gap-3">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 animate-pulse rounded-xl" />
            ))
          : stats.map((s) => (
              <Reportcard key={s.label} {...s} />
            ))
        }
      </div>

      <Reportspage />

      <div className="col-span-1">
        <ExportActivityChart />
      </div>

      <div className="col-span-1">
        <Reportslist />
      </div>
    </div>
  );
}