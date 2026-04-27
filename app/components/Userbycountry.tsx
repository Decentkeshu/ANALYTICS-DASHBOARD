"use client"

import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps"


import world from "world-atlas/countries-110m.json"

const countryData = [
  { name: "India", users: 12000, color: "#6366f1" },
  { name: "United States of America", users: 8500, color: "#22c55e" },
  { name: "United Kingdom", users: 3200, color: "#f59e0b" },
  { name: "Germany", users: 2100, color: "#ef4444" },
]

const nameColorMap: Record<string, string> = {}
countryData.forEach(c => {
  nameColorMap[c.name] = c.color
})

interface GeoFeature {
  rsmKey: string
  properties: {
    name: string
  }
}

export default function WorldMap() {
  return (
    <div
      style={{ background: "var(--bg)", color: "var(--text)" }}
      className="border border-gray-200 rounded-xl p-5 bg-gray-100 w-full"
    >
      <h2 className="text-lg font-semibold mb-4">Users by Country</h2>

      <div className="grid grid-cols-3 gap-4 items-center">

        <div className="col-span-2 h-[400px]">
          <ComposableMap className="w-full h-full">
            <Geographies geography={world}>
              {({ geographies }: { geographies: GeoFeature[] }) =>
                geographies.map((geo: GeoFeature) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={nameColorMap[geo.properties.name] || "#e5e7eb"}
                    stroke="#ffffff"
                    className="hover:opacity-80 transition"
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>

        <div className="flex flex-col gap-3">
          {countryData
            .sort((a, b) => b.users - a.users)
            .map((c) => (
              <div
                key={c.name}
                className="flex justify-between items-center text-sm bg-white p-3 rounded-lg shadow-sm hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: c.color }}
                  />
                  <span>{c.name}</span>
                </div>
                <span className="font-semibold">
                  {c.users.toLocaleString()}
                </span>
              </div>
            ))}
        </div>

      </div>
    </div>
  )
}
