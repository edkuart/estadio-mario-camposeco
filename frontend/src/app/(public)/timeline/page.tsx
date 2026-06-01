import { SectionReveal } from "@/components/primitives/SectionReveal"
import { StatusBadge } from "@/components/primitives/StatusBadge"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { STADIUM_TIMELINE } from "@/data/estadio/timeline"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Timeline" }

const STATUS_TO_BADGE = {
  verified: "completed",
  reported: "in_progress",
  pending: "pending",
  conflict: "delayed",
} as const

const CATEGORY_LABEL = {
  historico: "Historico",
  obra: "Obra",
  permiso: "Permiso",
  contratacion: "Contratacion",
  politico: "Politico",
  tecnico: "Tecnico",
} as const

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="03 / Timeline"
          title="Linea de tiempo verificable"
          description="Eventos historicos, administrativos y documentales del Estadio Mario Camposeco. La precision y confiabilidad de cada evento se muestran como parte del expediente."
        />
      </SectionReveal>

      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-0">
          {STADIUM_TIMELINE.map((event, i) => {
            const isLast = i === STADIUM_TIMELINE.length - 1
            return (
              <SectionReveal key={event.id} delay={i * 0.04}>
                <div className={`relative flex gap-8 ${isLast ? "" : "pb-10"}`}>
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg-base">
                    <span className={`h-3 w-3 rounded-full ${event.status === "verified" ? "bg-success-text" : event.status === "pending" ? "bg-border-dim" : event.status === "conflict" ? "bg-error-text" : "bg-accent"}`} />
                  </div>

                  <div className="flex-1 pb-2">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <span className="font-mono text-xs text-text-muted">{event.date}</span>
                          <StatusBadge status={STATUS_TO_BADGE[event.status]} />
                          <span className="font-mono text-xs text-text-muted">{CATEGORY_LABEL[event.category]}</span>
                        </div>
                        <h3 className="font-display text-xl font-bold text-text-primary">{event.title}</h3>
                      </div>
                      <span className="font-mono text-xs text-text-muted bg-bg-elevated border border-border rounded px-2 py-1 shrink-0">
                        {event.precision}
                      </span>
                    </div>

                    <p className="text-sm text-text-secondary leading-relaxed mb-4">{event.description}</p>

                    <div className="rounded-md border border-border bg-bg-card px-4 py-3">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-1">Fuente / validacion</p>
                      <p className="text-xs text-text-secondary leading-5">{event.sourceLabel}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </div>
  )
}

