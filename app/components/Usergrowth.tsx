"use client"
import { useEffect, useState } from "react"
import { getUserGrowth } from "../services/analyticsservices"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

type UserGrowth = {
    date: string
    Users: number
}

const formatYAxis = (value: number) => `${(value / 1000).toFixed(0)}k`
const formatTooltip = (value: number | string | Array<number | string> | undefined): [string, string] => [
    value !== undefined ? Number(value).toLocaleString() : "0",
    "Users"
]

export default function Usergrowth() {
  const [data, setData] = useState<UserGrowth[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { status, data } = await getUserGrowth()
      if (status === 200) setData(data.data)
    }
    fetchData()
  }, [])

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }} className="border border-gray-200 rounded-xl p-5 flex flex-col gap-2 bg-gray-100 h-75 mt-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-800">Traffic Overflow</h2>
        <h4 className="text-sm font-medium text-gray-800">Daily visitors for last 30 days.</h4>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-3 h-0.5 bg-blue-500 inline-block rounded" />
            visitors
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#3b82f6" stopOpacity={0.75} />
              <stop offset="40%"  stopColor="#3b82f6" stopOpacity={0.55} />
              <stop offset="75%"  stopColor="#3b82f6" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="date" />
          <YAxis tickFormatter={formatYAxis} />
          <Tooltip formatter={formatTooltip as any} />
          <Area type="monotone" dataKey="Users" stroke="#3b82f6" strokeWidth={2} fill="url(#colorUsers)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}