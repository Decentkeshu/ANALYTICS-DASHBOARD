
"use client"
import { useEffect, useState } from "react"
import { getcategories } from "../services/analyticsservices"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts"

type Category = {
  name: string
  value: number
  color: string
  trend: string
  up: boolean
}

const CustomTooltip = (
  props: TooltipProps<number, string> & {
    payload?: Array<{ payload: Category }>
  }
) => {
  const { active, payload } = props
  const d = payload?.[0]?.payload
  if (!active || !d) return null
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}
      className="border border-gray-200 text-xs rounded-lg px-3 py-2 shadow-lg">
      <p className="font-medium mb-1">{d.name}</p>
      <p style={{ color: d.color }}>{d.value}%</p>
    </div>
  )
}

export default function SalesByCategory() {
  const [data, setData] = useState<Category[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      const { status, data } = await getcategories()
      if (status === 200) setData(data.data)
    }
    fetchCategories()
  }, [])

  const total = data.reduce((sum, d) => sum + d.value, 0)

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}
      className="bg-gray-100 border border-gray-200 rounded-xl p-5 flex flex-col gap-4 h-82">
      <h2 className="text-sm font-medium text-gray-800">Sales by category</h2>

      <div className="flex items-center gap-4">
        <div className="relative shrink-0" style={{ width: 160, height: 160 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={48} outerRadius={72}
                paddingAngle={3} dataKey="value" strokeWidth={0}>
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-lg font-semibold text-gray-800">{total}%</span>
            <span className="text-xs text-gray-400">total</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-1 min-w-0">
          {data.map((d) => (
            <div key={d.name} className="flex items-center gap-2">
              <span className="shrink-0 rounded-sm" style={{ width: 8, height: 8, background: d.color }} />
              <span className="text-xs text-gray-600 truncate flex-1">{d.name}</span>
              <span className="text-xs font-medium text-gray-800 shrink-0">{d.value}%</span>
              <span className="text-xs shrink-0" style={{ color: d.up ? "#16a34a" : "#ef4444" }}>{d.trend}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {data.map((d) => (
          <div key={d.name} className="flex items-center gap-3">
            <span className="text-xs text-gray-400 w-20 truncate">{d.name}</span>
            <div className="flex-1 bg-gray-200 rounded-full h-1.5 overflow-hidden">
              <div className="h-full rounded-full transition-all duration-700"
                style={{ width: `${d.value}%`, background: d.color }} />
            </div>
            <span className="text-xs text-gray-500 w-10 text-right">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}