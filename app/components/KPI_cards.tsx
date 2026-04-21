type Props = {
    label : string 
    value : string 
    change : number 
    lowerIsBetter?: boolean 
}

export default function KPIcard({label, value, change, lowerIsBetter}:Props){
    return<>
      <div style={{ background: "var(--bg)", color: "var(--text)" }} className="bg-gray-100 rounded-lg p-4 flex flex-col gap-1 hover:bg-purple-100 cursor-pointer  border border-gray-200  ">
            <p>{label}</p>
            <p>{value}</p>
            <p>{change}</p>
            <p>{change > 0  ? "▲" : "▼"} {Math.abs(change)}% vs Last Period</p>
        </div>
    </>

}
