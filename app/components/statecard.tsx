"use client"
import { useEffect, useState } from "react"
import { getstats } from "../services/analyticsservices"

type Stat = {
    label: string
    value: string
    change: number
    comparedTo?: string
}

export default function StateCard() {
    const [stats, setStats] = useState<Stat[]>([])

    useEffect(() => {
        const fetchStats = async () => {
            const { status, data } = await getstats()
            if (status === 200) setStats(data.data)
        }
        fetchStats()
    }, [])

    return (
    <div className="grid grid-cols-4 gap-3">
        {stats.map((s) => (
            <div key={s.label}
                style={{ background: "var(--bg)", color: "var(--text)" }}
                className="bg-gray-100 rounded-lg p-4 flex flex-col gap-1 hover:bg-purple-100 cursor-pointer border border-gray-200">
                <p>{s.label}</p>
                <p>{s.value}</p>
                <p>{s.change >= 0 ? "▲" : "▼"} {Math.abs(s.change)}% vs {s.comparedTo}</p>
            </div>
        ))}
    </div>
)
}