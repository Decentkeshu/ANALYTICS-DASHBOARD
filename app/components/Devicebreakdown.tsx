"use client"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts"

const rawData = [
  { device: "Desktop", users: 80000, color: "#f59e0b" },
  { device: "Mobile", users: 35000, color: "#2dd4bf" },
  { device: "Tablet", users: 12000, color: "#3b82f6" },
]

const totalUsers = rawData.reduce((sum, d) => sum + d.users, 0)


const data = rawData.map((d) => ({
  ...d,
  percentage: Math.round((d.users / totalUsers) * 100),
}))

type DeviceData = {
  device: string
  users: number
  percentage: number
  color: string
}

const CustomTooltip = (
  props: TooltipProps<number, string> & {
    payload?: { payload: DeviceData }[]
  }
) => {
  const { active, payload } = props

  const d = payload?.[0]?.payload

  if (!active || !d) return null

  return (
    <div
      style={{ background: "var(--bg)", color: "var(--text)" }}
      className="border border-gray-200 text-xs rounded-lg px-3 py-2 shadow-lg"
    >
      <p className="font-medium mb-1">{d.device}</p>
      <p style={{ color: d.color }}>
        {d.users.toLocaleString()} users — {d.percentage}%
      </p>
    </div>
  )
}

const trendMap: Record<string, { diff: string; up: boolean }> = {
  Desktop: { diff: "+5.2%", up: true },
  Mobile: { diff: "+1.8%", up: true },
  Tablet: { diff: "-2.1%", up: false },
}

export default function DeviceBreakdown() {
  return (
    <div
      style={{ background: "var(--bg)", color: "var(--text)" }}
      className="bg-gray-100 border border-gray-200 rounded-xl p-5 flex flex-col gap-4 h-91"
    >
     
      <h2 className="text-sm font-medium text-gray-800">
        Device Breakdown
      </h2>

    
      <div className="flex items-center gap-4">
        
     
        <div
          className="relative shrink-0"
          style={{ width: 160, height: 160 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={48}
                outerRadius={72}
                paddingAngle={3}
                dataKey="percentage"
                strokeWidth={0}
              >
                {data.map((entry) => (
                  <Cell key={entry.device} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>

   
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-lg font-semibold text-gray-800">
              {(totalUsers / 1000).toFixed(0)}k
            </span>
            <span className="text-xs text-gray-400">total</span>
          </div>
        </div>


        <div className="flex flex-col gap-2 flex-1 min-w-0">
          {data.map((d) => {
            const trend = trendMap[d.device]
            return (
              <div key={d.device} className="flex items-center gap-2">
                
            
                <span
                  className="shrink-0 rounded-sm"
                  style={{
                    width: 8,
                    height: 8,
                    background: d.color,
                  }}
                />

          
                <span className="text-xs text-gray-600 truncate flex-1">
                  {d.device}
                </span>

             
                
                <span
                  className="text-xs shrink-0"
                  style={{
                    color: trend.up ? "#16a34a" : "#ef4444",
                  }}
                >
                  {trend.diff}
                </span>
              </div>
            )
          })}
        </div>
      </div>

   
      <div className="flex flex-col gap-2">
        {data.map((d) => (
          <div key={d.device} className="flex items-center gap-3">
            <span className="text-xs text-gray-400 w-20 truncate">
              {d.device}
            </span>

            <div className="flex-1 bg-gray-200 rounded-full h-1.5 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${d.percentage}%`,
                  background: d.color,
                }}
              />
            </div>

            <span className="text-xs text-gray-500 w-12 text-right">
              {d.users.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}