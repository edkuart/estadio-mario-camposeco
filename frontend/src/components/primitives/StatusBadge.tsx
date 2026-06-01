type Status =
  | "draft"
  | "submitted"
  | "under_review"
  | "approved"
  | "rejected"
  | "expired"
  | "pending"
  | "in_progress"
  | "completed"
  | "delayed"
  | "planning"
  | "operational"
  | "suspended"

const STATUS_CONFIG: Record<
  Status,
  { label: string; dot: string; classes: string }
> = {
  draft: { label: "Borrador", dot: "○", classes: "text-text-muted" },
  submitted: { label: "Enviada", dot: "◐", classes: "text-info-text" },
  under_review: { label: "En revisión", dot: "◐", classes: "text-warning-text" },
  approved: { label: "Aprobada", dot: "●", classes: "text-success-text" },
  rejected: { label: "Rechazada", dot: "✕", classes: "text-error-text" },
  expired: { label: "Vencida", dot: "○", classes: "text-text-muted" },
  pending: { label: "Pendiente", dot: "○", classes: "text-text-muted" },
  in_progress: { label: "En progreso", dot: "◐", classes: "text-accent" },
  completed: { label: "Completada", dot: "●", classes: "text-success-text" },
  delayed: { label: "Retrasada", dot: "●", classes: "text-error-text" },
  planning: { label: "Planificación", dot: "○", classes: "text-text-secondary" },
  operational: { label: "Operacional", dot: "●", classes: "text-success-text" },
  suspended: { label: "Suspendida", dot: "✕", classes: "text-warning-text" },
}

interface StatusBadgeProps {
  status: Status
  className?: string
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status]

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide ${config.classes} ${className}`}
    >
      <span aria-hidden="true">{config.dot}</span>
      {config.label}
    </span>
  )
}

