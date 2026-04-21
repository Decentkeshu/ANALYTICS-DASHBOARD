import { LucideIcon } from "lucide-react"

type BadgeVariant = "pdf" | "csv" | "xlsx"
type StatusVariant = "scheduled" | "draft" | "completed"

type Props = {
  label: string
  // value: string
  icon: LucideIcon

  description?: string
  format?: BadgeVariant
  status?: StatusVariant
  lastRun?: string
  isScheduled?: boolean

  onRun?: () => void
  onDownload?: () => void
  onEdit?: () => void
}
export default function Reportkpi({ label, description, icon: Icon, lastRun, isScheduled }: Props) {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }} className= " rounded-xl p-5 flex flex-col gap-4  mt-3  hover:bg-purple-100 cursor-pointer  border border-gray-200">

      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-blue-50">
          <Icon size={18} className="text-blue-600" />  
        </div>
        {isScheduled && (
          <span className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded-full">
            Scheduled
          </span>
        )}
      </div>

      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-3 border-t">
        <span className="text-xs text-muted-foreground">Run {lastRun}</span>
        <div className="flex gap-2">
          <button className="text-xs px-2 py-1 rounded border">Download</button>
          <button className="text-xs px-2 py-1 rounded bg-blue-600 text-white">Run</button>
        </div>
      </div>

    </div>
  )
}