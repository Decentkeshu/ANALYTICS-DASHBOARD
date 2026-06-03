"use client"
import { useEffect, useState } from "react"
import { getorders } from "../services/analyticsservices"

type order = {
    id: string
    customer: string
    product: string
    date: string
    amount: number
    status: "Completed" | "Pending" | "Cancelled" | "Processing"
}

const statusStyles: Record<order["status"], string> = {
    Completed:  "bg-green-100 text-green-700",
    Pending:    "bg-yellow-100 text-yellow-700",
    Cancelled:  "bg-red-100 text-red-600",
    Processing: "bg-blue-100 text-blue-700",
}

export default function RecordOrders() {
    const [orders, setOrders] = useState<order[]>([])

    useEffect(() => {
        const fetchOrders = async () => {
            const { status, data } = await getorders()
            if (status === 200) setOrders(data.data)
        }
        fetchOrders()
    }, [])

    return (
        <div style={{ background: "var(--bg)", color: "var(--text)" }} className="bg-gray-100 border border-gray-200 rounded-xl p-5 flex flex-col gap-2 h-105">
            <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-gray-800">Recent Orders</h2>
                <button className="text-xs text-purple-600 hover:text-purple-800 transition-colors cursor-pointer">View all</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="text-left text-xs font-medium text-gray-400 pb-3 pr-4">Order ID</th>
                            <th className="text-left text-xs font-medium text-gray-400 pb-3 pr-4">Customer</th>
                            <th className="text-left text-xs font-medium text-gray-400 pb-3 pr-4">Product</th>
                            <th className="text-left text-xs font-medium text-gray-400 pb-3 pr-4">Date</th>
                            <th className="text-left text-xs font-medium text-gray-400 pb-3 pr-4">Amount</th>
                            <th className="text-left text-xs font-medium text-gray-400 pb-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="border-b border-gray-50 hover:bg-blue-300 transition-colors cursor-pointer">
                                <td className="py-3 pr-4 text-xs text-gray-400">{order.id}</td>
                                <td className="py-3 pr-4 text-xs font-medium text-gray-700">{order.customer}</td>
                                <td className="py-3 pr-4 text-xs text-gray-500">{order.product}</td>
                                <td className="py-3 pr-4 text-xs text-gray-400">{order.date}</td>
                                <td className="py-3 pr-4 text-xs font-medium text-gray-700">${order.amount.toLocaleString()}</td>
                                <td className="py-3">
                                    <span className={`text-xs px-2 py-1 rounded-full ${statusStyles[order.status]}`}>{order.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}