"use client"
import { useState } from "react"
import { Calendar } from "lucide-react"

const filters = [
  { label: "Last 7 days",  value: "7d"  },
  { label: "Last 30 days", value: "30d" },
  { label: "Last 90 days", value: "90d" },
  { label: "This year",    value: "1y"  },
]

type Props = {
  onChange?: (value: string) => void
}

export default function FilterBar({ onChange }: Props) {
  const [active, setActive] = useState("30d")

  const handleSelect = (value: string) => {
    setActive(value)
    onChange?.(value)
  }

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }} className="flex items-center justify-between flex-wrap border border-gray-200  p-2">

  
      <div>
        <h1 className="text-base font-medium text-gray-500">Analytics</h1>
        <p className="text-xs text-gray-400 mt-0.5">Track your traffic and user behavior</p>
      </div>

      <div className="flex items-center gap-1">
        <Calendar size={14} className="text-gray-400" />
        <div className="flex items-center  rounded-lg p-1 gap-1">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => handleSelect(filter.value)}
              className={`text-xs px-3 py-1.5 rounded-md transition-all duration-150 cursor-pointer
                ${active === filter.value
                  ? " text-gray-500 font-medium shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}
