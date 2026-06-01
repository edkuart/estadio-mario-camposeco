import { SectionReveal } from "@/components/primitives/SectionReveal"
import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { STADIUM_RISKS } from "@/data/estadio/risks"
import { STADIUM_SOURCES } from "@/data/estadio/sources"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Riesgos" }

const SEVERITY_CLASS: Record<string, string> = {
  moderado: "text-warning-text",
  alto: "text-error-text",
  critico: "text-error-text",
}

const CATEGORY_CLASS: Record<string, string> = {
  politico: "text-warning-text",
  financiero: "text-success-text",
  tecnico: "text-info-text",
  legal: "text-accent",
  patrimonial: "text-error-text",
  ambiental: "text-success-text",
  social: "text-text-secondary",
  contratacion: "text-accent",
  operativo: "text-info-text",
}

export default function RiesgosPage() {
  const critical = STADIUM_RISKS.filter((risk) => risk.severity === "critico")
  const highProbability = STADIUM_RISKS.filter((risk) => risk.probability === "alta")
  const sourceById = new Map(STADIUM_SOURCES.map((source) => [source.id, source]))

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="07 / Riesgos"
          title="Matriz de riesgos del proyecto"
          description="Lectura politica, financiera, tecnica, patrimonial y contractual para separar riesgos documentados, riesgos probables y mitigaciones pendientes."
        />
        <Disclaimer text="La matriz es una herramienta analitica inicial. Debe actualizarse cuando aparezcan bases, planos, resoluciones, presupuesto oficial o dictamenes tecnicos." className="mb-12" />
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Riesgos registrados</p>
            <p className="mt-3 font-display text-4xl font-bold text-text-primary">{STADIUM_RISKS.length}</p>
          </div>
          <div className="rounded-lg border border-border bg-bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Severidad critica</p>
            <p className="mt-3 font-display text-4xl font-bold text-error-text">{critical.length}</p>
          </div>
          <div className="rounded-lg border border-border bg-bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Probabilidad alta</p>
            <p className="mt-3 font-display text-4xl font-bold text-warning-text">{highProbability.length}</p>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.08}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {STADIUM_RISKS.map((risk) => {
            const sources = risk.sourceIds.map((id) => sourceById.get(id)?.publisher ?? id)
            return (
              <article key={risk.id} className="rounded-lg border border-border bg-bg-card p-6">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className={`font-mono text-xs uppercase ${CATEGORY_CLASS[risk.category]}`}>{risk.category}</span>
                  <span className="font-mono text-xs uppercase text-text-muted">Probabilidad {risk.probability}</span>
                  <span className="font-mono text-xs uppercase text-text-muted">Impacto {risk.impact}</span>
                  <span className={`font-mono text-xs uppercase ${SEVERITY_CLASS[risk.severity]}`}>Severidad {risk.severity}</span>
                </div>
                <h2 className="font-display text-xl font-bold text-text-primary leading-snug">{risk.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{risk.description}</p>
                <div className="mt-5 rounded-md border border-border bg-bg-elevated p-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Mitigacion</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{risk.mitigation}</p>
                </div>
                <p className="mt-4 text-xs text-text-muted">Fuentes asociadas: {sources.join(", ")}</p>
              </article>
            )
          })}
        </div>
      </SectionReveal>
    </div>
  )
}

