"use client"
import { Sun, Moon, Bell } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"
import { UserButton, SignInButton, SignUpButton, useUser } from "@clerk/nextjs"

export default function Navigation({ ontoggle }: { ontoggle: () => void }) {
    const [isDark, setIsDark] = useState(false);
    const [notification, setnotification] = useState(13);
    const [date, setdate] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const { isSignedIn, user } = useUser();

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
    }, [])

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
                <Bell size={27} color="gray" style={{ backgroundColor: "black",  }} />
                {notification > 0 && (
                    <span className="notif-count">
                        {notification > 9 ? "9+" : notification}
                    </span>
                )}
            </div>

            {isSignedIn ? (
                <div className="user-profile">
                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox: {
                                    width: "38px",
                                    height: "38px",
                                    borderRadius: "50%",
                                },
                            },
                        }}
                    />
                    <div className="user-info">
                        <div className="user-name">
                            {user.firstName} {user.lastName}
                        </div>
                        <div className="user-role">
                            {(user.publicMetadata?.role as string) ?? "User"}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="user-profile">
                    <SignInButton mode="modal">
                        <button className="btn-signin">Sign In</button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                        <button className="btn-signup">Sign Up</button>
                    </SignUpButton>
                </div>
            )}
        </div>
    )
}