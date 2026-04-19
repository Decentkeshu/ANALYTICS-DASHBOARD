"use client"
import Reportkpi from "../components/Reportkpi";
import { TrendingUp, BarChart2, Users, DollarSign, AlertCircle, Activity } from "lucide-react";

const status = [
  {label : "Monthly Mrr Summary" , description : "Total Mrr,New mrr,Expension,and cotraction breakdowon" ,icon : Users, lastRun : "2d ago" , isScheduled : true},
  {label : "Churn Analysis", description : "Churned Account,reasons,and revenue lost by segment",icon : Activity , lastRun : "18hr ago", isScheduled : false },
  {label : "Feature Adoption", description : "which feature are used most per plan and cohort",icon : DollarSign , lastRun : "1d ago", isScheduled : false},
  {label : "Subscription Breakdown", description : "Active ,Trial ,Paused,and Cancelled Subscription",icon : AlertCircle, lastRun : "3d ago", isScheduled : false },
  {label : "User grwoth Report" , description : "New Signups,activations,and DAU/MAU ratio over time", icon : BarChart2 , lastRun : "10hr ago", isScheduled : false},
  {label : "Invoice Export", description : "All invoices issued in date range with status and amounts", icon : TrendingUp, lastRun : "17hr ago", isScheduled : false},
  { 
  label: "Revenue by Plan", 
  description: "MRR contribution broken down by starter, pro, and enterprise plans", 
  icon: DollarSign, 
  lastRun: "5hr ago", 
  isScheduled: true 
},
{ 
  label: "Trial Conversion Report", 
  description: "Trial users who converted, dropped, or extended within a date range", 
  icon: TrendingUp, 
  lastRun: "6hr ago", 
  isScheduled: false 
},
]

export default function Reportspage(){
    return<>
     <div className="grid grid-cols-4 gap-3">
        {status.map((s, i ) => <Reportkpi key={s.label} {...s}/>)}
      </div>
    </>
}