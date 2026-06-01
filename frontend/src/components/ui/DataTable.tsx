interface DataRow {
  label: string
  value: string
  unit?: string
  notes?: string
}

interface DataTableProps {
  rows: DataRow[]
  className?: string
  dense?: boolean
}

export function DataTable({ rows, className = "", dense = false }: DataTableProps) {
  const px = dense ? "px-4 py-2.5" : "px-[18px] py-[14px]"
  return (
    <div
      className={`overflow-hidden rounded-[10px] ${className}`}
      style={{ border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <table className="w-full" style={{ borderCollapse: "collapse" }}>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              style={{
                background: i % 2 === 0 ? "var(--bg-card)" : "var(--bg-elevated)",
                borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}
            >
              <td className={`${px} w-1/2`}>
                <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{row.label}</span>
                {row.notes && (
                  <p style={{ fontSize: 11, color: "var(--text-muted)", margin: "2px 0 0 0", lineHeight: 1.5 }}>
                    {row.notes}
                  </p>
                )}
              </td>
              <td className={`${px} text-right`}>
                <span
                  className="font-mono"
                  style={{ fontSize: 13, color: "var(--text-primary)", fontWeight: 500 }}
                >
                  {row.value}
                </span>
                {row.unit && (
                  <span
                    className="font-mono"
                    style={{ fontSize: 11, color: "var(--text-muted)", marginLeft: 4 }}
                  >
                    {row.unit}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

