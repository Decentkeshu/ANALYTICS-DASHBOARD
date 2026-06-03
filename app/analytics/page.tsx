"use client"
import FilterBar from "../components/FilterBar"
import KPIcard from "../components/KPI_cards"
import Totaloverview from "../components/TrafficOverfow"
import TrafficSource from "../components/Trafficsource"
import Devicebreakdown from "../components/Devicebreakdown"
import TopPages from "../components/Toppages"

export default function Analytics() {
  return (
    <div className="pt-4 px-6 pb-6 flex flex-col gap-4 flex-1">
      <FilterBar onChange={(value) => console.log("Selected:", value)} />
      <KPIcard />
      <Totaloverview />
      <div className="grid grid-cols-2 gap-2">
        <TrafficSource />
        <Devicebreakdown />
        <div className="col-span-full">
          <TopPages />
        </div>
      </div>
    </div>
  )
}