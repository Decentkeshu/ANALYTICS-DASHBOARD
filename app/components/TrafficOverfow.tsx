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
    {date : "jan 1", visitors : "1000", pageviews : "2000"},
    {date : "jan 2", visitors : "1200", pageviews : "2200"},
    {date : "jan 3", visitors : "900", pageviews : "1100"},
    {date : "jan 4", visitors : "1100", pageviews : "2100"},
    {date : "jan 5", visitors : "1400", pageviews : "2400"},
    {date : "jan 6", visitors : "1200", pageviews : "2200"},
    {date : "jan 7", visitors : "1300", pageviews : "2300"},
    {date : "jan 8", visitors : "800", pageviews : "1800"},
    {date : "jan 9", visitors : "1000", pageviews : "2000"},
    {date : "jan 10", visitors : "700", pageviews : "1700"},
    {date : "jan 11", visitors : "1500", pageviews : "2500"},
    {date : "jan 12", visitors : "1100", pageviews : "2100"},
    {date : "jan 13", visitors : "1200", pageviews : "2200"},
    {date : "jan 14", visitors : "700", pageviews : "1700"},
    {date : "jan 15", visitors : "1800", pageviews : "2800"},
    {date : "jan 16", visitors : "1200", pageviews : "2200"},
]

const formatYAxis = (value: number) => `$${(value / 1000).toFixed(0)}k`
const formatTooltip = (value: number) => `$${value.toLocaleString()}`

export default function Totaloverview (){
    return<>
        <div className="border border-gray-200 rounded-xl p-5 flex flex-col gap-4 bg-gray-100 h-75">
             <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-800">Traffic Overflow</h2>
        <h4 className="text-sm font-medium text-gray-800">Daily visitors for last 30 days.</h4>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-3 h-0.5 bg-blue-500 inline-block rounded" />
            visitors
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-3 h-0.5 bg-teal-400 inline-block rounded border-dashed" />
            pageviews
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
              <LineChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="date"
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
                  dataKey="visitors"
                  name="2024"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="pageviews"
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
    </>
}