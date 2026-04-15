"use client"
import FilterBar from "../components/FilterBar"
import KPIcard from "../components/KPI_cards"
import Totaloverview from "../components/TrafficOverfow"
import TrafficSource from "../components/Trafficsource"
import Devicebreakdown from "../components/Devicebreakdown"
import TopPages from "../components/Toppages"

const stats = [
  { label: "Total page views",     value: "24,520", change: 10.2,  lowerIsBetter: false },
  { label: "Bounce rate",          value: "42.3%",  change: -3.1,  lowerIsBetter: true  },
  { label: "Avg session duration", value: "3m 24s", change: 0.8,   lowerIsBetter: false },
  { label: "Returning visitors",   value: "28.5%",  change: 4.3,   lowerIsBetter: false },
]
export default function Analytics(){

  return<>
     <div className="pt-4 px-6 pb-6 flex flex-col gap-4 flex-1">
      <FilterBar onChange={(value) => console.log("Selected:", value)} />
        <div className="grid grid-cols-4 gap-3">
           {stats.map((s ) => <KPIcard key={s.label} {...s}/>)}
         </div>
         <div className="col-span-1">
                   <Totaloverview />
                 </div>

<div className="grid grid-cols-2 gap-2 mt-1 "> 
   <div className="col-span-1   ">
          <TrafficSource />
        </div>
        <div className="col-span-1 ">
          <Devicebreakdown />
        </div>
           <div className="col-span-full ">
                   <TopPages />
                 </div>
         </div>
    </div>
  </>
}