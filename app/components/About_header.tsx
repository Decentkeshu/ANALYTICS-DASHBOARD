"use client"
import { useState } from "react"
import { Calendar } from "lucide-react"
import { User, Settings, Bell } from "lucide-react";

const filters = [
  { label: "Last 7 days",  value: "7d"  },
  // { label: "Last 30 days", value: "30d" },
  // { label: "Last 90 days", value: "90d" },
  // { label: "This year",    value: "1y"  },
]

type Props = {
  onChange?: (value: string) => void
}

export default function SettingsHeader({ onChange }: Props) {
  const [active, setActive] = useState("30d")

  const handleSelect = (value: string) => {
    setActive(value)
    onChange?.(value)
  }

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }} className="flex items-center justify-between flex-wrap  bg-gray-100 p-2">

  
      <div className="flex">
        <h1 className="text-base font-medium text-gray-800">About</h1>
        
        {/* <p className="text-xs text-gray-400 mt-0.5">Track</p> */}
      </div>

      <div className="flex items-center gap-1">
        {/* <Calendar size={14} className="text-gray-400" /> */}
        <div className="flex items-center bg-gray-100 rounded-lg p-1 gap-1">

          <div className="flex ">  
           <Settings size={24}  className="mr-5"/>

      {/* Bell with notification badge */}
      <div style={{ position: "relative" }}>
        <Bell size={24} className="mr-5" />
        <span className="badge" />
      </div>

      <User size={24} />
      </div>
        </div>
      </div>

    </div>
  )
}
