"use client"
import { useEffect, useState } from "react"
import { getCountryData } from "../services/analyticsservices"
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps"
import world from "world-atlas/countries-110m.json"

type Country = {
  name: string
  users: number
  color: string
}

interface GeoFeature {
  rsmKey: string
  properties: { name: string }
}

export default function WorldMap() {
  const [countryData, setCountryData] = useState<Country[]>([])

  useEffect(() => {
    const fetchCountries = async () => {
      const { status, data } = await getCountryData()
      if (status === 200) setCountryData(data.data)
    }
    fetchCountries()
  }, [])

  const nameColorMap: Record<string, string> = {}
  countryData.forEach(c => { nameColorMap[c.name] = c.color })

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
              <div key={c.name}
                className="flex justify-between items-center text-sm bg-white p-3 rounded-lg shadow-sm hover:bg-gray-50 transition">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }} />
                  <span>{c.name}</span>
                </div>
                <span className="font-semibold">{c.users.toLocaleString()}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}