"use client"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const data = [
  { month: "Jan", revenue2024: 52000, revenue2023: 40000 },
  { month: "Feb", revenue2024: 58000, revenue2023: 44000 },
  { month: "Mar", revenue2024: 61000, revenue2023: 50000 },
  { month: "Apr", revenue2024: 55000, revenue2023: 47000 },
  { month: "May", revenue2024: 70000, revenue2023: 58000 },
  { month: "Jun", revenue2024: 74000, revenue2023: 62000 },
  { month: "Jul", revenue2024: 68000, revenue2023: 57000 },
  { month: "Aug", revenue2024: 79000, revenue2023: 66000 },
  { month: "Sep", revenue2024: 84000, revenue2023: 70000 },
  { month: "Oct", revenue2024: 77000, revenue2023: 63000 },
  { month: "Nov", revenue2024: 88000, revenue2023: 72000 },
  { month: "Dec", revenue2024: 84320, revenue2023: 69000 },
]

const formatYAxis = (value: number) => `$${(value / 1000).toFixed(0)}k`

const formatTooltip = (value: number) => `$${value.toLocaleString()}`

export default function RevenueOverview() {
  return (
    <div className="border border-gray-200 rounded-xl p-5 flex flex-col gap-4 bg-gray-100 h-75">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-800">Revenue overview</h2>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-3 h-0.5 bg-blue-500 inline-block rounded" />
            2024
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-3 h-0.5 bg-teal-400 inline-block rounded border-dashed" />
            2023
          </span>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="month"
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
            formatter={formatTooltip}
            contentStyle={{
              fontSize: "12px",
              borderRadius: "8px",
              border: "0.5px solid #e5e7eb",
              boxShadow: "none",
            }}
            labelStyle={{ color: "#374151", fontWeight: 500 }}
          />
          <Line
            type="monotone"
            dataKey="revenue2024"
            name="2024"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="revenue2023"
            name="2023"
            stroke="#2dd4bf"
            strokeWidth={2}
            strokeDasharray="5 4"
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
