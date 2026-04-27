"use client"
import React from "react";

type Props = {
  label: string;
  value: string;
  change: number;
  icon: React.ElementType;
  percent?: number; 
};

export default function Breakcard({
  label,
  value,
  change,
  icon: Icon,
  percent = 40,
}: Props) {
  const isUp = change > 0;

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }} className="relative bg-gray-100 rounded-xl p-4 flex flex-col gap-2 hover:bg-purple-100 transition border border-gray-200 flex-1">

      
      <div className="absolute top-3 right-3 p-2 bg-purple-200 rounded-full">
        <Icon className="w-4 h-4 text-purple-700" />
      </div>

     
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 pr-10">
        {label}
      </p>

     
      <p className="text-xl font-semibold text-gray-900">
        {value}
      </p>

      
      <p className={`text-sm font-medium ${isUp ? "text-emerald-600" : "text-red-500"}`}>
        {isUp ? "▲" : "▼"} {Math.abs(change)}% vs last month
      </p>

    
      <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
        <div
          className={`h-full rounded-full ${
            isUp ? "bg-emerald-500" : "bg-red-500"
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>

     
      <p className="text-xs text-gray-500">
        {percent}% of MRR
      </p>
    </div>
  );
}