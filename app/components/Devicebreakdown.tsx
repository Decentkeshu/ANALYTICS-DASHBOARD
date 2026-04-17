"use client"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

const data = [
    { device: "Desktop", users: 800 , color: "#f59e0b"},
  { device: "Mobile", users: 350 , color : "#2dd4bf"},
  { device: "Tablet", users: 120 , color : "#3b82f6"},

]

const formatTooltip = (value: number) => `${value}%`

export default function Devicebreakdown() {
  return (
    <div className=" bg-gray-100 border border-gray-200 rounded-xl p-5 flex flex-col gap-4 h-91">
      {/* Header */}
      <h2 className="text-sm font-medium text-gray-800">Device Breakdown</h2>

      {/* Donut chart */}
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            paddingAngle={3}
            dataKey="users"
            strokeWidth={0}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={formatTooltip}
            contentStyle={{
              fontSize: "12px",
              borderRadius: "8px",
              border: "0.5px solid #e5e7eb",
              boxShadow: "none",
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-2">
        {data.map((item) => (
          <div key={item.device} className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
              style={{ background: item.color }}
            />
            <span className="text-xs text-gray-500">{item.device}</span>
            <span className="text-xs font-medium text-gray-700 ml-auto">
              {item.users}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
