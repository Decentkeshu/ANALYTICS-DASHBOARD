"use client";

import { useRef, useEffect, useState } from "react";
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
  type ChartData,
  type ChartOptions,
} from "chart.js";

import { getRevenueChurn } from "../services/analyticsservices";

Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler
);


type ChurnPoint = {
  month: string;
  customers: number;
  churnRate: number;
};

export default function CustomerGrowthChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart<"line"> | null>(null);

  const [dataPoints, setDataPoints] = useState<ChurnPoint[]>([]);


  useEffect(() => {
    async function load() {
      try {
        const res = await getRevenueChurn();

        if (res?.data?.data) {
          setDataPoints(res.data.data as ChurnPoint[]);
        }
      } catch (err) {
        console.error("Failed to load churn data:", err);
      }
    }

    load();
  }, []);


  const chartData: ChartData<"line"> = {
    labels: dataPoints.map((d) => d.month),

    datasets: [
      {
        label: "Customer count",
        data: dataPoints.map((d) => d.customers),
        borderColor: "#378ADD",
        backgroundColor: "rgba(55,138,221,0.07)",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        borderWidth: 2.5,
        yAxisID: "yLeft",
      },
      {
        label: "Churn rate (%)",
        data: dataPoints.map((d) => d.churnRate),
        borderColor: "#E24B4A",
        borderDash: [6, 4],
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.4,
        fill: false,
        yAxisID: "yRight",
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },

    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const y = ctx.parsed.y;
            if (y == null) return "";

            if (ctx.datasetIndex === 0) {
              return `Customers: ${y.toLocaleString()}`;
            }

            return `Churn rate: ${y.toFixed(1)}%`;
          },
        },
      },
    },

    scales: {
      x: {
        grid: { color: "rgba(136,135,128,0.12)" },
        ticks: { font: { size: 12 }, autoSkip: false, maxRotation: 0 },
        title: { display: true, text: "Month", font: { size: 12 } },
      },

      yLeft: {
        type: "linear",
        position: "left",
        grid: { color: "rgba(136,135,128,0.12)" },
        ticks: {
          font: { size: 12 },
          color: "#378ADD",
          callback: (v) =>
            Number(v) >= 1000 ? `${(Number(v) / 1000).toFixed(0)}k` : v,
        },
        title: {
          display: true,
          text: "Number of customers",
          font: { size: 12 },
          color: "#378ADD",
        },
      },

      yRight: {
        type: "linear",
        position: "right",
        min: 0,
        max: 8,
        grid: { drawOnChartArea: false },
        ticks: {
          font: { size: 12 },
          color: "#E24B4A",
          callback: (v) => `${v}%`,
        },
        title: {
          display: true,
          text: "Churn rate (%)",
          font: { size: 12 },
          color: "#E24B4A",
        },
      },
    },
  };


  useEffect(() => {
    if (!canvasRef.current || dataPoints.length === 0) return;

    chartRef.current?.destroy();

    chartRef.current = new Chart(canvasRef.current, {
      type: "line",
      data: chartData,
      options,
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, [dataPoints]);

  return (
    <div
      style={{ background: "var(--bg)", color: "var(--text)" }}
      className="bg-gray-100 border border-gray-200 rounded-xl p-4 flex flex-col gap-3"
    >
  
      <div className="flex gap-6 mb-4 text-sm text-gray-500">
        <span className="flex items-center gap-2">
          <span className="inline-block w-6 h-0.5 bg-[#378ADD]" />
          Customer count (left axis)
        </span>

        <span className="flex items-center gap-2">
          <span className="inline-block w-6 h-0.5 border-t-2 border-dashed border-[#E24B4A]" />
          Churn rate %
        </span>
      </div>


      <div className="relative w-full h-80">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Customer growth and churn rate chart"
        />
      </div>
    </div>
  );
}