"use client"

type Product = {
  name: string
  category: string
  unitsSold: number
  revenue: string
  growth: number
}

const products: Product[] = [
  { name: "Pro Plan",    category: "Software",  unitsSold: 420, revenue: "$21,000", growth: 14.2 },
  { name: "Enterprise",  category: "Software",  unitsSold: 95,  revenue: "$28,500", growth: 9.8  },
  { name: "Consulting",  category: "Services",  unitsSold: 40,  revenue: "$12,000", growth: 6.1  },
  { name: "Starter Kit", category: "Hardware",  unitsSold: 310, revenue: "$9,300",  growth: -3.4 },
  { name: "Add-ons",     category: "Software",  unitsSold: 210, revenue: "$6,300",  growth: 2.7  },
  { name: "Antivirus",   category: "Software",unitsSold: 280, revenue: "$10,300",  growth:7.7  },
  { name: "Storage",     category: "Hardware",  unitsSold: 610, revenue: "$16,300",  growth: 2.5  }
  
]

export default function TopProducts() {

  return (
    <div className="bg-gray-100 border border-gray-200 rounded-xl p-5 flex flex-col gap-4 w-full h-105">
   
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-800">Top products</h2>
        <button className="text-xs text-purple-600 hover:text-purple-800 transition-colors cursor-pointer">
          View all
        </button>
      </div>

     
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs font-medium text-gray-400 pb-3 pr-4">Product</th>
              <th className="text-left text-xs font-medium text-gray-400 pb-3 pr-4">Category</th>
              <th className="text-left text-xs font-medium text-gray-400 pb-3 pr-4">Units sold</th>
              <th className="text-left text-xs font-medium text-gray-400 pb-3 pr-4">Revenue</th>
              <th className="text-left text-xs font-medium text-gray-400 pb-3">Growth</th>
            </tr>
          </thead> 
          <tbody>
            {products.map((product) => (
              <tr
                key={product.name}
                className="border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer "
              >
                <td className="py-3 pr-4 text-xs font-medium text-gray-700">{product.name}</td>
                <td className="py-3 pr-4">
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </td>
                <td className="py-3 pr-4 text-xs text-gray-500">{product.unitsSold}</td>
                <td className="py-3 pr-4 text-xs font-medium text-gray-700">{product.revenue}</td>
                <td className={`py-3 text-xs font-medium ${product.growth >= 0 ? "text-green-600" : "text-red-500"}`}>
                  {product.growth >= 0 ? "▲" : "▼"} {Math.abs(product.growth)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
