"use client"
import { useEffect, useState } from "react"
import { getrevenue } from "../services/analyticsservices"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

type Revenue = {
  month: string
  revenue: number
  prevRevenue: number
}

const formatYAxis = (value: number) => `$${(value / 1000).toFixed(0)}k`

const tooltipFormatter = (value: any, name: any) => [
  `$${Number(value).toLocaleString()}`,
  name === "revenue" ? "2024" : "2023",
]

export default function RevenueOverview() {
  const [data, setData] = useState<Revenue[]>([])

  useEffect(() => {
    const fetchRevenue = async () => {
      const { status, data } = await getrevenue()
         console.log("status:", status)
        console.log("revenue data:", data)
        console.log("API response:", data);
console.log("API response data:", data.data);
      if (status === 200) setData(data.data)
    }
    fetchRevenue()
  }, [])

  return (
    <div
      style={{ background: "var(--bg)", color: "var(--text)" }}
      className="border border-gray-200 rounded-xl p-5 flex flex-col gap-4 bg-gray-100 h-82"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-800">Revenue overview</h2>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-3 h-0.5 bg-blue-500 inline-block rounded" />2024
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-3 h-0.5 bg-teal-400 inline-block rounded" />2023
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
          <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} width={48} />
          <Tooltip  
            contentStyle={{ fontSize: "12px", borderRadius: "8px", border: "0.5px solid #e5e7eb", boxShadow: "none" }}
            labelStyle={{ color: "#374151", fontWeight: 500 }}
            formatter={tooltipFormatter}
          />
          <Line type="monotone" dataKey="revenue" name="revenue" stroke="#3b82f6" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
          <Line type="monotone" dataKey="prevRevenue" name="prevRevenue" stroke="#2dd4bf" strokeWidth={2} strokeDasharray="5 4" dot={false} activeDot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}