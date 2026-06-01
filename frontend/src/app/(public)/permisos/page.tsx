import { SectionReveal } from "@/components/primitives/SectionReveal"
import { StatusBadge } from "@/components/primitives/StatusBadge"
import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { STADIUM_PERMITS } from "@/data/estadio/permits"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Permisos" }

const STATUS_MAP = {
  pendiente: "pending",
  reportado: "reported",
  en_revision: "under_review",
  aprobado_reportado: "approved",
  oficial_localizado: "completed",
  no_evaluable: "draft",
} as const

const PRIORITY_CLASS = {
  critica: "text-error-text",
  alta: "text-warning-text",
  media: "text-text-secondary",
} as const

export default function PermisosPage() {
  const critical = STADIUM_PERMITS.filter((permit) => permit.priority === "critica").length
  const official = STADIUM_PERMITS.filter((permit) => permit.status === "oficial_localizado").length

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="07 / Permisos"
          title="Matriz de permisos y evidencia faltante"
          description="Seguimiento inicial de autorizaciones, expedientes y documentos publicos necesarios para validar el proyecto antes de obra."
        />
        <Disclaimer text="El estado aprobado_reportado significa que existe reporte publico, no necesariamente documento oficial localizado. La prioridad es conseguir resoluciones y expedientes." className="mb-12" />
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-bg-card p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Permisos rastreados</p>
            <p className="mt-3 font-display text-4xl font-bold text-text-primary">{STADIUM_PERMITS.length}</p>
          </div>
          <div className="rounded-lg border border-border bg-bg-card p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Criticos</p>
            <p className="mt-3 font-display text-4xl font-bold text-error-text">{critical}</p>
          </div>
          <div className="rounded-lg border border-border bg-bg-card p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Oficiales localizados</p>
            <p className="mt-3 font-display text-4xl font-bold text-success-text">{official}</p>
          </div>
        </div>
      </SectionReveal>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {STADIUM_PERMITS.map((permit, i) => (
          <SectionReveal key={permit.id} delay={i * 0.04}>
            <article className="rounded-lg border border-border bg-bg-card p-6">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className={`font-mono text-xs uppercase tracking-widest ${PRIORITY_CLASS[permit.priority]}`}>{permit.priority}</p>
                  <h2 className="mt-2 font-display text-xl font-bold text-text-primary">{permit.name}</h2>
                  <p className="mt-1 font-mono text-xs text-text-muted">{permit.entity}</p>
                </div>
                <StatusBadge status={STATUS_MAP[permit.status]} />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-1">Por que importa</p>
                  <p className="text-sm leading-6 text-text-secondary">{permit.whyItMatters}</p>
                </div>
                <div className="rounded-md border border-border bg-bg-elevated p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-1">Evidencia faltante</p>
                  <p className="text-xs leading-5 text-text-secondary">{permit.missingEvidence}</p>
                </div>
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>
    </div>
  )
}

