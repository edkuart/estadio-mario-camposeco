import { MetricCard } from "@/components/primitives/MetricCard"
import { SectionReveal } from "@/components/primitives/SectionReveal"
import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { COST_CATEGORIES, COST_META, COST_SCENARIOS } from "@/data/estadio/costs"
import { STADIUM_RISKS } from "@/data/estadio/risks"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Viabilidad financiera",
  description: "Escenarios preliminares de costo, incertidumbre presupuestaria y riesgos financieros del Estadio Mario Camposeco.",
}

const FINANCIAL_FLAGS = [
  "Costo oficial pendiente de NOG, bases y presupuesto por renglones.",
  "La intervencion urbana sobre 14 avenida puede cambiar el rango de costo y plazo.",
  "Iluminacion deportiva, cancha, drenaje y broadcast deben separarse del costo de graderios.",
  "Los escenarios son parametricos y deben reemplazarse por contrato adjudicado.",
]

export default function ROIPage() {
  const financialRisks = STADIUM_RISKS.filter((risk) => ["financiero", "contratacion", "politico"].includes(risk.category))

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="Finanzas / Viabilidad"
          title="Dashboard financiero preliminar"
          description="Modelo de lectura para costos, escenarios y riesgos financieros antes de que exista presupuesto oficial publicado en Guatecompras."
        />
        <Disclaimer text={COST_META.disclaimer} className="mb-12" />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <MetricCard label="Escenarios" value={COST_SCENARIOS.length} description="Rangos conservador, intermedio y alto." accent />
          <MetricCard label="Contingencia modelo" value={`${Math.round(COST_META.contingencyPct * 100)}%`} description="Reserva preliminar hasta tener cantidades reales." />
          <MetricCard label="Costo oficial" value="Pendiente" description="Debe provenir de NOG, bases y renglones." />
        </div>
      </SectionReveal>

      <SectionReveal delay={0.06}>
        <div className="mb-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {COST_SCENARIOS.map((scenario) => (
            <article key={scenario.name} className="rounded-lg border border-border bg-bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Escenario</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-text-primary">{scenario.name}</h2>
              <p className="mt-3 font-display text-3xl font-bold text-accent">{scenario.amount}</p>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">{scenario.description}</p>
            </article>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.08}>
        <div className="mb-12 rounded-lg border border-border bg-bg-elevated p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Componentes que mueven el costo</p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {COST_CATEGORIES.map((category) => (
              <div key={category.id} className="rounded-lg border border-border bg-bg-card p-5">
                <h3 className="font-display text-lg font-bold text-text-primary">{category.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{category.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.slice(0, 4).map((item) => (
                    <span key={item.name} className="rounded-sm border border-border px-2 py-1 font-mono text-xs text-text-muted">
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_420px]">
          <section className="rounded-lg border border-border bg-bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Alertas financieras</p>
            <div className="mt-5 space-y-3">
              {FINANCIAL_FLAGS.map((flag) => (
                <div key={flag} className="rounded-md border border-border bg-bg-elevated p-4 text-sm leading-relaxed text-text-secondary">
                  {flag}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-error-text/20 bg-bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-error-text">Riesgos vinculados</p>
            <div className="mt-5 space-y-4">
              {financialRisks.map((risk) => (
                <article key={risk.id}>
                  <h3 className="font-display text-base font-bold text-text-primary">{risk.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-text-muted">{risk.mitigation}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </SectionReveal>
    </div>
  )
}

