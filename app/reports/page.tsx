import Reportspage from "./reports_page";
import Reportslist from "../components/reports";
import Reportcard from "../components/Reportscard";
import { TrendingUp, BarChart2, Users, DollarSign, AlertCircle, Activity } from "lucide-react";
import ReportHeader from "../components/Reportheader";
import ExportActivityChart from "../components/barchart";
const stats = [
  {label : "Total Revenue" , value : "$84,320" , change : 12.4},
  {label : "Total sales", value : "1,284", change : 8.1},
  {label : "New Customers", value : "340", change : 5.3},
  {label : "Conversion Rate", value : "3.8%", change : -0.4},

]

const status = [
  {label : "Monthly Mrr Summary" , description : "Total Mrr,New mrr,Expension,and cotraction breakdowon" ,icon : Users, lastrun : "2d ago" , isScheduled : true},
  {label : "Churn Analysis", description : "Churned Account,reasons,and revenue lost by segment",icon : Activity , lastrun : "18hr ago", isScheduled : false },
  {label : "Feature Adoption", description : "which feature are used most per plan and cohort",icon : DollarSign , lastrun : "1d ago", isScheduled : false},
  {label : "Subscription Breakdown", description : "Active ,Trial ,Paused,and Cancelled Subscription",icon : AlertCircle, lastrun : "3d ago", isScheduled : false },
  {label : "User grwoth Report" , description : "New Signups,activations,and DAU/MAU ratio over time", icon : BarChart2 , lastrun : "10hr ago", isScheduled : false},
  {lable : "Invoice Export", description : "All invoices issued in date range with status and amounts", icon : TrendingUp, lastrun : "17hr ago", isScheduled : false}
]
export default function Reports(){
    return<div className="p-4 flex-1 ">
      <ReportHeader/>
      <div className="grid grid-cols-4 gap-3">
        {stats.map((s, i ) => <Reportcard key={s.label} {...s}/>)}
      </div>
       <Reportspage/>
       <div className=" col-span-1">  
         <ExportActivityChart/>
       </div>
       <div className=" col-span-1">  
         <Reportslist/>
       </div>
      </div>
}