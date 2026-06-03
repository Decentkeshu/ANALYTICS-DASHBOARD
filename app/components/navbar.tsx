"use client"
import { Sun, Moon, Bell, LogOut } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Navigation({ ontoggle }: { ontoggle: () => void }) {
    const [isDark, setIsDark] = useState(false);
    const [notification, setnotification] = useState(13);
    const [date, setdate] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light")
        localStorage.setItem("theme", isDark ? "dark" : "light")
    }, [isDark])

    useEffect(() => {
        const handleshortcut = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === "k") {
                e.preventDefault()
                inputRef.current?.focus()
            }
        }
        window.addEventListener("keydown", handleshortcut)
        return () => window.removeEventListener("keydown", handleshortcut)
    }, [])

    useEffect(() => {
        const today = new Date()
        const formatted = today.toLocaleDateString("en-us", {
            month: "short",
            year: "numeric",
            day: "numeric"
        })
        setdate(formatted)

       
        setUserName(localStorage.getItem("userName") || "");
        setUserEmail(localStorage.getItem("userEmail") || "");
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        router.push("/");
    }


    const initials = userName ? userName.slice(0, 2).toUpperCase() : "?";

    return (
        <div className="Navbar">
            <div onClick={ontoggle} className="hamburger">
                <div className="hamburger-line" />
                <div className="hamburger-line" />
                <div className="hamburger-line" />
            </div>

            <div className="logo">Matrix</div>

            <div className="search-box">
                <Search size={18} color="#050404" />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search anything..."
                    className="input-box"
                />
                <span className="shortcut">Ctrl K</span>
            </div>

            <div className="theme-toggle" onClick={() => setIsDark(prev => !prev)}>
                {isDark ? <Sun size={14} /> : <Moon size={14} />}
                {isDark ? "Light" : "Dark"}
            </div>

            <div className="date">{date}</div>
            <div className="pipe">|</div>

            <div className="notification">
                <Bell size={27} color="gray"  />
                {notification > 0 && (
                    <span className="notif-count">
                        {notification > 9 ? "9+" : notification}
                    </span>
                )}
            </div>

          
            {userName && (
                <div className="user-profile">
                    <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold">
                        {initials}
                    </div>
                    <div className="user-info">
                        <div className="user-name">{userName}</div>
                        <div className="user-role">{userEmail}</div>
                    </div>
                    <LogOut
                        size={16}
                        className="cursor-pointer text-gray-400 hover:text-red-500 transition-colors ml-2"
                        onClick={handleLogout}
                    />
                </div>
            )}
        </div>
    )
}