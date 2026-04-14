"use client"
import { usePathname,useRouter } from "next/navigation"
import { LayoutDashboard,BarChart2,Users,DollarSign,FileText,Settings } from "lucide-react"


const navItems = [
    {label : "Dashboard", icon : LayoutDashboard, href : "/Dashboard"},
    {label : "Analytics" , icon : BarChart2 , href : "/analytics"},
    {label : "Users", icon : Users , href : "/users"},
    {label : "Revenue" , icon : DollarSign , href : "/revenue"},
    {label : "Reports" , icon : FileText , href : "/reports"},
    {label : "Settings", icon : Settings , href : "/settings"}
]
export default function Sidebar({ isopen }: { isopen: boolean }){
    const pathname = usePathname()
    const router  = useRouter()
    return(
        <div style={{
        width: isopen ? "220px" : "0",
        overflow: "hidden",
        transition: "width 0.25s ease",
        flexShrink: 0,
        borderRight: isopen ? "1px solid var(--border)" : "0",
        height: "calc(100vh - 45px)",
        position: "sticky",
        top: "45px",
       overflowY: "auto",
        background : "var(--bg-secondary)"
        }}>
        
            <div className="sidebar-logo">Matrix <span style={{color : "#534AB7"}}>MT</span></div>
          <nav className="sidebar-nav">
            {navItems.map((item) =>{
                const Icon = item.icon
                const isActive = pathname === item.href
                return(
                    <div key={item.label}
                    className={`sidebar-item ${isActive ? "sidebar-item-active" : ""}`}
                    onClick={()=>router.push(item.href)}>
                        <Icon size={16}/>
                        <span>{item.label}</span>
                    </div>
                )
            })}
          </nav>
        </div>
       
    )
}