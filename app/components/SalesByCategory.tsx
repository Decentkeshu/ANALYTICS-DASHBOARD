"use client"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Software",  value: 40, color: "#3b82f6" },
  { name: "Hardware",  value: 25, color: "#2dd4bf" },
  { name: "Services",  value: 20, color: "#f59e0b" },
  { name: "Other",     value: 15, color: "#9ca3af" },
]

const formatTooltip = (value: number) => `${value}%`

export default function SalesByCategory() {
  return (
    <div className=" bg-gray-100 border border-gray-200 rounded-xl p-5 flex flex-col gap-4 h-75">
      {/* Header */}
      <h2 className="text-sm font-medium text-gray-800">Sales by category</h2>

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
            dataKey="value"
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
          <div key={item.name} className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
              style={{ background: item.color }}
            />
            <span className="text-xs text-gray-500">{item.name}</span>
            <span className="text-xs font-medium text-gray-700 ml-auto">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
