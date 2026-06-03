"use client"
import { useEffect, useState } from "react"
import { getStatecard } from "../services/analyticsservices"

type Stat = {
    label: string
    value: string
    change: number
    lowerIsBetter?: boolean
}

function Card({ label, value, change, lowerIsBetter }: Stat) {
    const isPositive = lowerIsBetter ? change <= 0 : change >= 0

    return (
        <div style={{ background: "var(--bg)" }} className="rounded-lg p-4 flex flex-col gap-1 hover:bg-purple-100 cursor-pointer border border-gray-200 transition-colors">
            <p style={{ color: "var(--text)" }} className="text-xs uppercase tracking-wide font-medium opacity-60">
                {label}
            </p>
            <p style={{ color: "var(--text)" }} className="text-2xl font-bold">
                {value}
            </p>
            <p className={`text-xs font-medium ${isPositive ? "text-green-600" : "text-red-500"}`}>
                {change >= 0 ? "▲" : "▼"} {Math.abs(change)}% vs Last Period
            </p>
        </div>
    )
}

export default function KPIcard() {
    const [stats, setStats] = useState<Stat[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchStats = async () => {
            try {
                
                const { status, data } = await getStatecard()
                 console.log("data:", data);
                if (status === 200) setStats(data.data)
                else setError("Failed to load KPIs")
            } catch {
                setError("Something went wrong")
            } finally {
                setLoading(false)
            }
        }
        fetchStats()
    }, [])   

    if (error) return <p className="text-sm text-red-500">{error}</p>

    if (loading) return (
        <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-lg p-4 flex flex-col gap-2 border border-gray-200 animate-pulse bg-gray-100">
                    <div className="h-3 w-24 bg-gray-300 rounded" />
                    <div className="h-6 w-16 bg-gray-300 rounded" />
                    <div className="h-3 w-32 bg-gray-300 rounded" />
                </div>
            ))}
        </div>
    )

    return (
        <div className="grid grid-cols-4 gap-3">
            {stats.map((s) => <Card key={s.label} {...s} />)}
        </div>
    )
}