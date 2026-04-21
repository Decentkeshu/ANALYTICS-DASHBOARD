type Props = {
    label : string 
    value : string 
    change : number 
    lowerIsBetter?: boolean 
}
export default function Reportcard({label, value, change, lowerIsBetter}:Props){
    const isUp = change> 0  
    return<>
      <div style={{ background: "var(--bg)", color: "var(--text)" }} className="bg-gray-200 rounded-lg p-4 flex flex-col gap-1 hover:bg-purple-100 cursor-pointer  border  border-gray-200 ">
            <p>{label}</p>
            <p>{value}</p>
            <p>{change}</p>
            <p className={`text-sm font-medium ${isUp ? "text-emerald-600" : "text-red-500"}`}>
        {isUp ? "▲" : "▼"} {Math.abs(change)}% vs last month
      </p>
        </div>
    </>

}
