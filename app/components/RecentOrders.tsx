"use client"

type order = {
    id : string
    customer : string
    product : string
    date : string 
    amount : string 
    status : "Completed" | "Pending" | "Cancelled" | "Processing"
}

const orders : order[] = [
  { id: "#10421", customer: "Ravi Sharma",  product: "Pro Plan",    date: "Apr 12, 2026", amount: "$1,240", status: "Completed"  },
  { id: "#10420", customer: "Priya Mehta",  product: "Starter Kit", date: "Apr 11, 2026", amount: "$870",   status: "Pending"    },
  { id: "#10419", customer: "Arjun Verma",  product: "Enterprise",  date: "Apr 11, 2026", amount: "$3,100", status: "Completed"  },
  { id: "#10418", customer: "Sneha Patel",  product: "Add-ons",     date: "Apr 10, 2026", amount: "$540",   status: "Cancelled"  },
  { id: "#10417", customer: "Karan Singh",  product: "Pro Plan",    date: "Apr 10, 2026", amount: "$2,200", status: "Completed"  },
  { id: "#10416", customer: "Neha Gupta",   product: "Consulting",  date: "Apr 09, 2026", amount: "$1,800", status: "Processing" },
  { id: "#10415", customer: "Rohit Joshi",  product: "Starter Kit", date: "Apr 09, 2026", amount: "$430",   status: "Pending"    },
]

const statusStyles: Record<order["status"], string> = {
  Completed:  "bg-green-100 text-green-700",
  Pending:    "bg-yellow-100 text-yellow-700",
  Cancelled:  "bg-red-100 text-red-600",
  Processing: "bg-blue-100 text-blue-700",  
}

export default function RecordOrders (){
    return (
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-5 flex flex-col gap-2 h-105   ">
            <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-gray-800">Recent Orders</h2>
                <button className="text-xs text-purple-600 hover:text-purple-800 transition-colors cursor-pointer">
                    View all
                </button>
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
            {orders.map((order)=>(
                <tr key={order.id} className="border-b border-gray-50 hover:bg-blue-300 transition-colors cursor-pointer">
                    <td className="py-3 pr-4 text-xs text-gray-400">{order.id}</td>
                    <td className="py-3 pr-4 text-xs font-medium text-gray-700">{order.customer}</td>
                <td className="py-3 pr-4 text-xs text-gray-500">{order.product}</td>
                <td className="py-3 pr-4 text-xs text-gray-400">{order.date}</td>
                <td className="py-3 pr-4 text-xs font-medium text-gray-700">{order.amount}</td>
                  <td className="py-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${statusStyles[order.status]}`}> {order.status}</span></td></tr>
                
            ))}
          </tbody>
                </table>
            </div>
        </div>
    )
}