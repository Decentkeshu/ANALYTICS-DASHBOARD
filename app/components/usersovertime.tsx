"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { getUsersOverTime } from "../services/analyticsservices";

interface UserData {
  date: string;
  NewUsers: number;
  ToatalUsers: number;
}

export default function UsersOverTime() {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsersOverTime = async () => {
      try {
        const res = await getUsersOverTime();

        if (res.status === 200 && res.data.success) {
          setData(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching users over time:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsersOverTime();
  }, []);

  const formatYAxis = (value: number) =>
    `${(value / 1000).toFixed(0)}k`;

  const formatTooltip = (
    value: number | string | Array<number | string> | undefined
  ): [string, string] => [
    value !== undefined ? Number(value).toLocaleString() : "0",
    "",
  ];

  if (loading) {
    return (
      <div className="border border-gray-200 rounded-xl p-5 h-75 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{ background: "var(--bg)", color: "var(--text)" }}
      className="border border-gray-200 rounded-xl p-5 flex flex-col gap-4 bg-gray-100 h-75"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-800">
          Users Over Time
        </h2>

        <h4 className="text-sm font-medium text-gray-800">
          Daily visitors for last 30 days.
        </h4>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-3 h-0.5 bg-blue-500 inline-block rounded" />
            New Users
          </span>

          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-3 h-0.5 bg-teal-400 inline-block rounded border-dashed" />
            Total Users
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart
          data={data}
          margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />

          <XAxis
            dataKey="date"
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tickFormatter={formatYAxis}
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            width={48}
          />

          <Tooltip
            formatter={formatTooltip as any}
            contentStyle={{
              fontSize: "12px",
              borderRadius: "8px",
              border: "0.5px solid #e5e7eb",
              boxShadow: "none",
            }}
            labelStyle={{
              color: "#374151",
              fontWeight: 500,
            }}
          />

          <Line
            type="monotone"
            dataKey="NewUsers"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="ToatalUsers"
            stroke="#2dd4bf"
            strokeWidth={2}
            strokeDasharray="5 4"
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}