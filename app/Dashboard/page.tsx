import StateCard  from "../components/statecard"
import Revenueoverview from "../components/Revenueoverview"
import SalesByCategory from "../components/SalesByCategory"
import RecordOrders from "../components/RecentOrders"
import TopProducts from "../components/TopProducts"
const stats = [
  {label : "Total Revenue" , value : "$84,320" , change : 12.4},
  {label : "Total sales", value : "1,284", change : 8.1},
  {label : "New Customers", value : "340", change : 5.3},
  {label : "Conversion Rate", value : "3.8%", change : -0.4},

]

export default  function Dashboard(){
  return<div className="p-4 flex-1 ">
  <div className="grid grid-cols-4 gap-3">
    {stats.map((s, i ) => <StateCard key={s.label} {...s}/>)}
  </div>
  <div className="grid grid-cols-2 gap-2 mt-4 "> 
   <div className="col-span-1   ">
          <Revenueoverview />
        </div>
        <div className="col-span-1 ">
          <SalesByCategory />
        </div>

         </div>

      <div className="flex gap-2 mt-4 flex-1 items-stretch">
  <div className="w-55/100">
    <RecordOrders />
  </div>
  <div className="w-45/100 ">
    <TopProducts />
  </div>
</div>
  </div>
}