"use client"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts"

const data = [
  { channel: "Organic Search", users: 42300, percentage: 38, color: "#3b82f6" },
  { channel: "Direct",         users: 27800, percentage: 25, color: "#8b5cf6" },
  { channel: "Referral",       users: 18900, percentage: 17, color: "#10b981" },
  { channel: "Paid Ads",       users: 13400, percentage: 12, color: "#f59e0b" },
  { channel: "Social",         users:  8900, percentage: 8,  color: "#ef4444" },
]

const totalUsers = data.reduce((sum, d) => sum + d.users, 0)

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload
    return (
      <div style={{ background: "var(--bg)", color: "var(--text)" }} className=" border border-gray-200 text-xs rounded-lg px-3 py-2 shadow-lg">
        <p className="font-medium mb-1">{d.channel}</p>
        <p style={{ color: d.color }}>{d.users.toLocaleString()} users — {d.percentage}%</p>
      </div>
    )
  }
  return null
}

const trendMap: Record<string, { diff: string; up: boolean }> = {
  "Organic Search": { diff: "+5.2%", up: true },
  "Direct":         { diff: "+1.8%", up: true },
  "Referral":       { diff: "-2.1%", up: false },
  "Paid Ads":       { diff: "+3.4%", up: true },
  "Social":         { diff: "-0.7%", up: false },
}

export default function AcquisitionChannels() {
  return (
    <div className="border border-gray-200 rounded-xl p-5 flex flex-col gap-4  h-91">

   
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-800">Top acquisition channels</h2>
        <span className="text-xs text-gray-400">Last 30 days</span>
      </div>

  
      <div className="flex items-center gap-4">

      
        <div className="relative shrink-0" style={{ width: 160, height: 160 }}>
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
                  <Cell key={entry.channel} fill={entry.color} />
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
            const trend = trendMap[d.channel]
            return (
              <div key={d.channel} className="flex items-center gap-2">
                <span
                  className="shrink-0 rounded-sm"
                  style={{ width: 8, height: 8, background: d.color }}
                />
                <span className="text-xs text-gray-600 truncate flex-1">{d.channel}</span>
                <span className="text-xs font-medium text-gray-800 shrink-0">
                  {d.percentage}%
                </span>
                <span
                  className="text-xs shrink-0"
                  style={{ color: trend.up ? "#16a34a" : "#ef4444" }}
                >
                  {trend.diff}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bar breakdown */}
      <div className="flex flex-col gap-2">
        {data.map((d) => (
          <div key={d.channel} className="flex items-center gap-3">
            <span className="text-xs text-gray-400 w-24 shrink-0 truncate">{d.channel}</span>
            <div className="flex-1 bg-gray-200 rounded-full h-1.5 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${d.percentage}%`, background: d.color }}
              />
            </div>
            <span className="text-xs text-gray-500 w-14 text-right shrink-0">
              {d.users.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}