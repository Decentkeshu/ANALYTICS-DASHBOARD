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
    {date : "jan 1", NewUsers : "1000", ToatalUsers : "3000"},
    {date : "jan 2", NewUsers : "1200", ToatalUsers : "3200"},
    {date : "jan 3", NewUsers : "900", ToatalUsers : "4100"},
    {date : "jan 4", NewUsers : "1100", ToatalUsers : "5100"},
    {date : "jan 5", NewUsers : "1400", ToatalUsers : "2400"},
    {date : "jan 6", NewUsers : "1200", ToatalUsers : "4200"},
    {date : "jan 7", NewUsers : "1300", ToatalUsers : "3300"},
    {date : "jan 8", NewUsers : "800", ToatalUsers : "3800"},
    {date : "jan 9", NewUsers : "1000", ToatalUsers : "3000"},
    {date : "jan 10", NewUsers : "700", ToatalUsers : "3700"},
    {date : "jan 11", NewUsers : "1500", ToatalUsers : "3500"},
    {date : "jan 12", NewUsers : "1100", ToatalUsers : "3100"},
    {date : "jan 13", NewUsers : "1200", ToatalUsers : "3200"},
    {date : "jan 14", NewUsers : "700", ToatalUsers : "3700"},
    {date : "jan 15", NewUsers : "1800", ToatalUsers : "3800"},
    {date : "jan 16", NewUsers : "1200", ToatalUsers : "3200"},
]

const formatYAxis = (value: number) => `${(value / 1000).toFixed(0)}k`
const formatTooltip = (value: number) => value.toLocaleString()

export default function UsersOverTime (){
    return<>
        <div style={{ background: "var(--bg)", color: "var(--text)" }} className="border border-gray-200 rounded-xl p-5 flex flex-col gap-4 bg-gray-100 h-75">
             <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-800">Users Over Time</h2>
        <h4 className="text-sm font-medium text-gray-800">Daily visitors for last 30 days.</h4>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-3 h-0.5 bg-blue-500 inline-block rounded" />
            New Users
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-3 h-0.5 bg-teal-400 inline-block rounded border-dashed" />
            Total Users
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
                  dataKey="NewUsers"
                  name="NewUsers"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="ToatalUsers"
                  name="ToatalUsers"
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