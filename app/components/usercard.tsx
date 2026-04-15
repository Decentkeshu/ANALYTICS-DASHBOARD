type users = {
  label: string
  value: string
  change: number
  icon: React.ElementType
}

export default function Usercard({ label, value, change, icon: Icon }: users) {
  return (
    <div className="relative bg-gray-100 rounded-lg p-4 flex flex-col gap-1 hover:bg-purple-100 cursor-pointer border border-transparent flex-1">


      <div className="absolute top-3 right-3 p-2 bg-purple-200 rounded-full">
        <Icon className="w-5 h-5 text-purple-700" />
      </div>

 
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm">
        {change > 0 ? "▲" : "▼"} {Math.abs(change)}% vs Last Period
      </p>

    </div>
  )
}