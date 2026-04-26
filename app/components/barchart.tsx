"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { date: "Apr 6",  exports: 2 },
  { date: "Apr 7",  exports: 4 },
  { date: "Apr 8",  exports: 3 },
  { date: "Apr 9",  exports: 1 },
  { date: "Apr 10", exports: 5 },
  { date: "Apr 11", exports: 2 },
  { date: "Apr 12", exports: 3 },
  { date: "Apr 13", exports: 4 },
  { date: "Apr 14", exports: 8 },  
  { date: "Apr 15", exports: 3 },
  { date: "Apr 16", exports: 5 },
  { date: "Apr 17", exports: 4 },
  { date: "Apr 18", exports: 2 },
  { date: "Apr 19", exports: 2 },
]

export default function ExportActivityChart() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }} className="border border-gray-200 rounded-xl p-5 flex flex-col gap-4 bg-gray-100 mt-4"> 

     
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium">Export activity</p>
          <p className="text-xs text-muted-foreground mt-0.5">Reports exported per day — last 14 days</p>
        </div>
        <select className="text-xs border rounded-lg px-2 py-1.5 text-muted-foreground">
          <option>Last 14 days</option>
          <option>Last 30 days</option>
          <option>Last 7 days</option>
        </select>
      </div>


      <div className="flex gap-3 mb-5">
        <div className="bg-muted/50 rounded-lg px-4 py-2">
          <p className="text-xs text-muted-foreground">Total exports</p>
          <p className="text-lg font-medium">48</p>
        </div>
        <div className="bg-muted/50 rounded-lg px-4 py-2">
          <p className="text-xs text-muted-foreground">Daily avg</p>
          <p className="text-lg font-medium">3.4</p>
        </div>
        <div className="bg-muted/50 rounded-lg px-4 py-2">
          <p className="text-xs text-muted-foreground">Peak day</p>
          <p className="text-lg font-medium">Apr 14</p>
        </div>
      </div>

   
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barSize={28}>
          <CartesianGrid vertical={false} stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
          <Tooltip
            formatter={(value) => [`${value} exports`, ""]}
            cursor={{ fill: "rgba(0,0,0,0.04)" }}
          />
          <Bar
            dataKey="exports"
            fill="#185FA5"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  )
}