"use client"
import { Download, Plus, Calendar, Upload, RefreshCw, Trash2 } from "lucide-react"
export default function ReportHeader(){
    return<div className="flex items-center justify-between flex-wrap  bg-gray-100 p-2 mb-3">
    <div > 
    <div className="text-lg">Reports</div>
    <div className="text-xs">Generate, schedule, and export reports across your workspace.
</div>
</div>

<button className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm"> <Download size = {16} />imports</button>
<button className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm"> <Calendar size = {16} />schedule</button>
<button className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm"> <Plus size = {16}/>  New Report</button>
    </div>
}   