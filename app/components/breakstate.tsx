"use client"
import Breakcard from "./Breakdown";
import MrrCard from "./MRRcard";

import { TrendingUp, BarChart2, Users, DollarSign, AlertCircle, Activity } from "lucide-react";
const stats = [
  {label : "Monthly Recurring Revenue" , value : "$84,400" , change : 12.4, icon: DollarSign},
  {label : "Annual Recurring Revenue", value : "$1.01M", change : 18.1, icon : TrendingUp},
  {label : "Churn Rate", value : "2.3%", change : -0.4 , icon : BarChart2},
  {label : "Average Revenue Per user", value : "$148.60", change : 5.2, icon : AlertCircle},

]
export default function Breakstate (){
    return<>
        <div className="p-4 flex-1">
                 <div className="grid grid-cols-4 gap-3">
                     {stats.map((s ) => <Breakcard key={s.label} {...s}/>)}
                   </div>
                   
            </div>
    </>
}