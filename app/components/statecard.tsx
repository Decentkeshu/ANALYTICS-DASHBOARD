type Props = {
    label : string
    value : string
    change : number
    comparedTo? : string
}

export default function StateCard ({label , value, change,comparedTo = "last month"}: Props){
    const isUp = change >= 0
    return (
        <div style={{ background: "var(--bg)", color: "var(--text)" }} className="bg-gray-100 rounded-lg p-4 flex flex-col gap-1 hover:bg-purple-100 cursor-pointer  border border-gray-200  ">
            <p>{label}</p>
            <p>{value}</p>
            <p>{isUp ? "▲" : "▼"} {Math.abs(change)}% vs {comparedTo}</p>
        </div>
    )
}