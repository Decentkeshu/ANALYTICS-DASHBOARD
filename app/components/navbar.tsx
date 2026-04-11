"use client"
import { SidebarOpen , Sun,Moon ,Bell } from "lucide-react"
import { useState,useEffect,useRef } from "react"
import { Search } from "lucide-react"


export default function Navigation (){
    const [sidebaOpen,setSidebarOpen] = useState(false);
    const [isDark , setIsDark] = useState(false);
    const [notification ,setnotification] = useState(13);
    const [date ,setdate] = useState("");
    const inputRef = useRef<HTMLInputElement>(null)


    useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light")
    localStorage.setItem("theme", isDark ? "dark" : "light")
}, [isDark])

    useEffect(()=>{ 
        const handleshortcut = (e :KeyboardEvent) => {
            if(e.ctrlKey && e.key === "k"){
                e.preventDefault()
                inputRef.current?.focus()
            }
        }
        window.addEventListener("keydown",handleshortcut)
        return () => window.removeEventListener("keydown",handleshortcut)
    },[])

    useEffect(()=>{
        const today = new Date()
        const formatted = today.toLocaleDateString("en-us",{
            month : "short",
            year : "numeric",
            day : "numeric"
        })
        // console.log("date : ",formatted)
        setdate(formatted)
    },[])
    return<>
<div className="Navbar">   
<div onClick={() => setSidebarOpen(!sidebaOpen)} className="hamburger">
  <div className="hamburger-line" />
  <div className="hamburger-line" />
  <div className="hamburger-line" />
</div>
<div className="logo">Metrix</div>
<div className="search-box">
    <Search size={18} color="#050404" />
    <input 
        ref = {inputRef}
        type="text" 
        placeholder="Search anything..." 
        className="input-box"
    />
     <span className="shortcut"> Ctrl K </span>
</div>
  <div className="theme-toggle" onClick={() => setIsDark(prev => !prev)}>
                {isDark ? <Sun size={14} /> : <Moon size={14} />}
                {isDark ? "Light" : "Dark"}
            </div>
    <div className="date">
      {date}
    </div>
    <div className="pipe">|</div>
    <div className="notification">
        <Bell size={27} ></Bell>
        {notification > 0 && (
            <span className="notif-count">{notification > 9 ? "9+" : notification}</span>
        )}
    </div>
    

    <div className="user-profile">
    <div className="avatar">KK</div>
    <div className="user-info">
        <div className="user-name">Keshav Kumar</div>
        <div className="user-role">Admin</div>
    </div>
    <div className="chevron">▾</div>
</div>
</div> 
</>
}