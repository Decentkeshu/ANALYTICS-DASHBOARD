"use client"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer , Line} from "recharts"
import { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";

const data = [
    {month : "JAN", value : 10000, Tvalue :15000 },
    {month : "FEB", value : 12000, Tvalue: 16000},
    {month : "MAR", value : 9000 , Tvalue: 12000},
    {month : "APR", value : 11000, Tvalue: 14000},
    {month : "MAY", value : 14000, Tvalue: 18000},
    {month : "JUNE",value : 12000, Tvalue: 16000},
    {month : "JULY",value : 13000,Tvalue:  20000},
    {month : "AUG", value:  8000, Tvalue:  14000},
    {month : "SEPT",value : 10000,Tvalue: 15000},
    {month : "OCT", value :  7000, Tvalue: 17000},
    {month : "NOV", value :  15000, Tvalue: 21000},
    {month : "DEC", value :  11000,Tvalue: 18000},
]

const formatYAxis = (value: number) => `${(value / 1000).toFixed(0)}k`
const formatTooltip = (value: any) => {
  if (value == null) return "";

  if (Array.isArray(value)) {
    return value.join(", ");
  }

  return value.toLocaleString();
};


export default function Usergrowth() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }} className="border border-gray-200 rounded-xl p-5 flex flex-col gap-2 bg-gray-100 h-75 mt-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-800">Traffic Overflow</h2>
        <h4 className="text-sm font-medium text-gray-800">Daily visitors for last 30 days.</h4>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-3 h-0.5 bg-blue-500 inline-block rounded" />
            visitors
          </span>
           <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-3 h-0.5 bg-green-500 inline-block rounded" />
            Target Visitors
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
          <XAxis dataKey="month" />
          <YAxis tickFormatter={formatYAxis} />
          <Tooltip formatter={formatTooltip} />
           <Line
                  type="monotone"
                  dataKey="Tvalue"
                  name="Tvalue"
                  stroke="#2dd4bf"
                  strokeWidth={2}
                  strokeDasharray="5 4"
                  dot={false}
                  activeDot={{ r: 4 }}
                />
             
                            

          <Area
            type="monotone"
            dataKey="value"
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