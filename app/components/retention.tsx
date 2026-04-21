"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts"

const data = [
  { month: "Nov", retention: 76, churn: 24 },
  { month: "Dec", retention: 78, churn: 22 },
  { month: "Jan", retention: 79, churn: 21 },
  { month: "Feb", retention: 80, churn: 20 },
  { month: "Mar", retention: 79, churn: 21 },
  { month: "Apr", retention: 82, churn: 18 },
]

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg">
        <p className="font-medium mb-1">{label}</p>
        {payload.map((entry) => (
          <p key={entry.name} style={{ color: entry.color }}>
            {entry.name === "retention" ? "Retention" : "Churn"}: {entry.value}%
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function RetentionChurn() {
  const latest = data[data.length - 1]
  const prev = data[data.length - 2]
  const retDiff = +(latest.retention - prev.retention).toFixed(1)
  const churnDiff = +(latest.churn - prev.churn).toFixed(1)

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }} className="border border-gray-200 rounded-xl p-5 flex flex-col gap-4 bg-gray-100 mt-3">

     
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-800">Retention &amp; Churn</h2>
        <span className="text-xs text-gray-400">Last 6 months</span>
      </div>

     
      <div className="grid grid-cols-3 gap-3">
        
        <div className="bg-white rounded-lg p-3 border border-gray-200 flex flex-col gap-1">
          <span className="text-xs text-gray-400">Retention rate</span>
          <span className="text-2xl font-semibold text-green-600">{latest.retention}%</span>
          <span className={`text-xs font-medium ${retDiff >= 0 ? "text-green-500" : "text-red-400"}`}>
            {retDiff >= 0 ? "+" : ""}{retDiff}% vs last month
          </span>
        </div>

       
        <div className="bg-white rounded-lg p-3 border border-gray-200 flex flex-col gap-1">
          <span className="text-xs text-gray-400">Churn rate</span>
          <span className="text-2xl font-semibold text-red-500">{latest.churn}%</span>
          <span className={`text-xs font-medium ${churnDiff <= 0 ? "text-green-500" : "text-red-400"}`}>
            {churnDiff >= 0 ? "+" : ""}{churnDiff}% vs last month
          </span>
        </div>

       
        <div className="bg-white rounded-lg p-3 border border-gray-200 flex flex-col gap-1">
          <span className="text-xs text-gray-400">Churned users</span>
          <span className="text-2xl font-semibold text-gray-800">1,240</span>
          <span className="text-xs text-gray-400">this month</span>
        </div>
      </div>

     
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5 text-xs text-gray-500">
          <span className="w-3 h-0.5 bg-green-500 inline-block rounded" />
          Retention
        </span>
        <span className="flex items-center gap-1.5 text-xs text-gray-500">
          <span className="w-3 h-0.5 bg-red-400 inline-block rounded border-dashed" style={{ borderBottom: "2px dashed #f87171", height: 0 }} />
          Churn
        </span>
      </div>

      
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="retentionGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#16a34a" stopOpacity={0.45} />
              <stop offset="50%"  stopColor="#16a34a" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#16a34a" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="churnGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#dc2626" stopOpacity={0.4} />
              <stop offset="50%"  stopColor="#dc2626" stopOpacity={0.12} />
              <stop offset="100%" stopColor="#dc2626" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
          <YAxis
            tickFormatter={(v) => `${v}%`}
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            domain={[0, 100]}
          />
          <Tooltip content={<CustomTooltip />} />

          <Area
            type="monotone"
            dataKey="retention"
            stroke="#16a34a"
            strokeWidth={2.5}
            fill="url(#retentionGrad)"
            dot={false}
            activeDot={{ r: 4, fill: "#16a34a" }}
          />
          <Area
            type="monotone"
            dataKey="churn"
            stroke="#dc2626"
            strokeWidth={2.5}
            strokeDasharray="5 4"
            fill="url(#churnGrad)"
            dot={false}
            activeDot={{ r: 4, fill: "#dc2626" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}