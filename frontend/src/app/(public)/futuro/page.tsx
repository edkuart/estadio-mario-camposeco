import { SectionReveal } from "@/components/primitives/SectionReveal"
import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { STADIUM_PROJECT } from "@/data/estadio/project"
import { STADIUM_RISKS } from "@/data/estadio/risks"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Escenarios futuros" }

const FUTURE_SCENARIOS = [
  {
    name: "Escenario minimo verificable",
    horizon: "MVP documental",
    summary: "Publicar historia, timeline, permisos, costos preliminares, fuentes y riesgos con datos estaticos y trazabilidad basica.",
    condition: "No requiere backend ni datos privados.",
  },
  {
    name: "Escenario contractual",
    horizon: "Despues de Guatecompras",
    summary: "Incorporar NOG, bases, presupuesto por renglones, oferentes, adjudicacion, contrato y avances fisicos.",
    condition: "Depende de expediente publico y documentos oficiales.",
  },
  {
    name: "Escenario obra y control social",
    horizon: "Durante ejecucion",
    summary: "Dar seguimiento a pagos, estimaciones, cronograma, cambios de alcance, supervision, fotografias y reportes de avance.",
    condition: "Requiere actualizacion periodica y archivo documental versionado.",
  },
  {
    name: "Escenario internacional",
    horizon: "Post-renovacion",
    summary: "Comparar el estadio contra FIFA/Concacaf, broadcast, seguridad, hoteles, aeropuerto, accesos y operacion de eventos.",
    condition: "Depende de capacidad autorizada y dictamenes tecnicos finales.",
  },
]

export default function FuturoPage() {
  const criticalRisks = STADIUM_RISKS.filter((risk) => risk.severity === "critico")

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="Escenarios / Futuro"
          title="Posibles futuros del expediente"
          description="Mapa de evolucion del observatorio, desde MVP documental hasta seguimiento contractual, obra y evaluacion internacional del Estadio Mario Camposeco."
        />
        <Disclaimer text="Los escenarios no son predicciones. Son rutas de trabajo condicionadas por documentos, permisos, presupuesto oficial y decisiones publicas verificables." className="mb-12" />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <div className="mb-12 rounded-lg border border-accent/20 bg-accent-glow p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Vision del sistema</p>
          <p className="mt-3 text-lg leading-relaxed text-text-primary">{STADIUM_PROJECT.vision}</p>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.06}>
        <div className="mb-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {FUTURE_SCENARIOS.map((scenario, index) => (
            <article key={scenario.name} className="rounded-lg border border-border bg-bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-text-muted">{String(index + 1).padStart(2, "0")} / {scenario.horizon}</p>
              <h2 className="mt-3 font-display text-xl font-bold text-text-primary">{scenario.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{scenario.summary}</p>
              <p className="mt-5 border-t border-border pt-4 font-mono text-xs text-text-muted">Condicion: {scenario.condition}</p>
            </article>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal>
        <section className="rounded-lg border border-error-text/20 bg-bg-card p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-error-text">Condicionantes criticos</p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {criticalRisks.map((risk) => (
              <article key={risk.id}>
                <h3 className="font-display text-lg font-bold text-text-primary">{risk.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{risk.mitigation}</p>
              </article>
            ))}
          </div>
        </section>
      </SectionReveal>
    </div>
  )
}

