import Usercard from "../components/usercard"
import { User, UserCheck, UserPlus, Users } from "lucide-react";
import RevenueOverview from "../components/Revenueoverview";
import SalesByCategory from "../components/SalesByCategory";
import TopProducts from "../components/TopProducts";
import RecordOrders from "../components/RecentOrders";
import StateCard from "../components/statecard";

export default function UsersPage() {

  return (
    <div className="pt-4 px-6 pb-6 flex flex-col gap-4 flex-1">
      
        <StateCard/>
  
      <div className="grid grid-cols-2 gap-3">  
      <RevenueOverview/>
      <SalesByCategory/>
      </div>
      <div className="grid grid-cols-2 gap-3">  
      <RecordOrders/>
      <TopProducts/>
      </div>
    </div>
  );
}