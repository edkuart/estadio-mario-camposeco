import { MetricCard } from "@/components/primitives/MetricCard"
import { SectionReveal } from "@/components/primitives/SectionReveal"
import { DataTable } from "@/components/ui/DataTable"
import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { STADIUM_CLAIMS } from "@/data/estadio/claims"
import { STADIUM_PROJECT } from "@/data/estadio/project"
import { STADIUM_RISKS } from "@/data/estadio/risks"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Contexto urbano" }

const SITE_ROWS = [
  { label: "Ubicacion", value: STADIUM_PROJECT.location, notes: "Entorno urbano consolidado en Quetzaltenango." },
  { label: "Uso principal", value: "Estadio municipal / Xelaju MC", notes: "Equipamiento deportivo con alta carga historica y social." },
  { label: "Intervencion reportada", value: "14 avenida", notes: "Requiere planos, permisos viales y analisis de movilidad." },
  { label: "Condicion patrimonial", value: "Por documentar", notes: "Debe validarse con expediente o resolucion IDAEH." },
]

const URBAN_QUESTIONS = [
  "Como se resolveran accesos, evacuacion y flujo peatonal durante eventos de alta asistencia.",
  "Que parte del alcance pertenece a obra deportiva y que parte a urbanizacion exterior.",
  "Si la intervencion sobre via publica requiere autorizaciones adicionales del Concejo Municipal.",
  "Como se mitigaran ruido, residuos, cierres viales y afectacion a vecinos durante obra y operacion.",
]

export default function TerrenoPage() {
  const urbanRisks = STADIUM_RISKS.filter((risk) => ["tecnico", "social", "patrimonial", "ambiental"].includes(risk.category))
  const scopeClaim = STADIUM_CLAIMS.find((claim) => claim.id === "scope-14-avenida")

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="Sitio / Contexto urbano"
          title="Lectura del entorno del Estadio Mario Camposeco"
          description={STADIUM_PROJECT.locationDetail}
        />
        <Disclaimer text="Esta pagina concentra variables urbanas propias del estadio: entorno consolidado, via publica, permisos, aforo, evacuacion y relacion con vecinos." className="mb-12" />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-4">
          <MetricCard label="Capacidad actual" value={STADIUM_PROJECT.keyMetrics.currentCapacity} description="Dato reportado, pendiente de aforo oficial." />
          <MetricCard label="Meta reportada" value={STADIUM_PROJECT.keyMetrics.projectedCapacity} description="Aforo proyectado no confirmado por planos." accent />
          <MetricCard label="Permisos criticos" value={STADIUM_PROJECT.keyMetrics.criticalPermits} description="IDAEH, MARN, CONRED, municipalidad y otros." />
          <MetricCard label="Estado" value="Pre-NOG" description="Sin expediente Guatecompras localizado." />
        </div>
      </SectionReveal>

      <SectionReveal delay={0.06}>
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_420px]">
          <DataTable rows={SITE_ROWS} />
          <div className="rounded-lg border border-accent/20 bg-accent-glow p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Claim urbano clave</p>
            <h2 className="mt-3 font-display text-xl font-bold text-text-primary">{scopeClaim?.statement ?? "Intervencion urbana por validar"}</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{scopeClaim?.note ?? "Debe validarse con planos y permisos."}</p>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.08}>
        <div className="mb-12 rounded-lg border border-border bg-bg-card p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Preguntas urbanas abiertas</p>
          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            {URBAN_QUESTIONS.map((question) => (
              <div key={question} className="rounded-md border border-border bg-bg-elevated p-4 text-sm leading-relaxed text-text-secondary">
                {question}
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {urbanRisks.map((risk) => (
            <article key={risk.id} className="rounded-lg border border-border bg-bg-card p-5">
              <p className="font-mono text-xs uppercase text-text-muted">{risk.category} / {risk.severity}</p>
              <h3 className="mt-2 font-display text-lg font-bold text-text-primary">{risk.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{risk.description}</p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </div>
  )
}

