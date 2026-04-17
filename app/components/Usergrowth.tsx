"use client"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
    {date : "jan 1", Users : 10000},
    {date : "jan 2", Users : 12000},
    {date : "jan 3", Users : 9000},
    {date : "jan 4", Users : 11000},
    {date : "jan 5", Users : 14000},
    {date : "jan 6", Users : 12000},
    {date : "jan 7", Users : 13000},
    {date : "jan 8", Users : 8000},
    {date : "jan 9", Users : 10000},
    {date : "jan 10", Users : 7000},
    {date : "jan 11", Users : 15000},
    {date : "jan 12", Users : 11000},
    {date : "jan 13", Users : 12000},
    {date : "jan 14", Users : 7000 },
    {date : "jan 15", Users : 18000},
    {date : "jan 16", Users : 12000},
]

const formatYAxis = (value: number) => `${(value / 1000).toFixed(0)}k`
const formatTooltip = (value: number) => value.toLocaleString()


export default function Usergrowth() {
  return (
    <div className="border border-gray-200 rounded-xl p-5 flex flex-col gap-2 bg-gray-100 h-75 mt-4">
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
          <Tooltip formatter={formatTooltip} />

          <Area
            type="monotone"
            dataKey="Users"
            stroke="#3b82f6"
            strokeWidth={2}
            fill="url(#colorUsers)"  
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}