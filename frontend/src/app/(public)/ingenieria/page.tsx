import { MetricCard } from "@/components/primitives/MetricCard"
import { SectionReveal } from "@/components/primitives/SectionReveal"
import { DataTable } from "@/components/ui/DataTable"
import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { MATERIALS_DISCLAIMER, STADIUM_MATERIALS } from "@/data/estadio/materials"
import { STADIUM_PERMITS } from "@/data/estadio/permits"
import { STADIUM_RISKS } from "@/data/estadio/risks"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Viabilidad tecnica" }

const TECHNICAL_CHECKS = [
  { label: "Aforo", value: "Pendiente", notes: "Debe distinguir capacidad disenada, asientos instalados y aforo autorizado." },
  { label: "Evacuacion", value: "Pendiente", notes: "Requiere anchos, rutas, salidas, senalizacion y criterio CONRED." },
  { label: "Iluminacion", value: "Por definir", notes: "Separar entrenamiento, liga nacional, television y estandar internacional." },
  { label: "Cancha y drenaje", value: "Por definir", notes: "Debe confirmarse si entra en fase contractual inicial." },
  { label: "Broadcast", value: "Por definir", notes: "Camaras, cabinas, energia, conectividad, posiciones y seguridad operacional." },
]

export default function IngenieriaPage() {
  const technicalRisks = STADIUM_RISKS.filter((risk) => ["tecnico", "operativo", "ambiental"].includes(risk.category))
  const pendingPermits = STADIUM_PERMITS.filter((permit) => permit.status !== "oficial_localizado")

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="Tecnico / Ingenieria"
          title="Viabilidad tecnica preliminar"
          description="Modulo para ordenar requerimientos estructurales, operativos, deportivos, ambientales y de seguridad antes de planos finales y bases de contratacion."
        />
        <Disclaimer text={MATERIALS_DISCLAIMER} className="mb-12" />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <MetricCard label="Categorias materiales" value={STADIUM_MATERIALS.length} description="Estructura, graderios, instalaciones y acabados." accent />
          <MetricCard label="Permisos pendientes" value={pendingPermits.length} description="Expedientes tecnicos por localizar o confirmar." />
          <MetricCard label="Riesgos tecnicos" value={technicalRisks.length} description="Riesgos que afectan diseno, operacion y avales." />
        </div>
      </SectionReveal>

      <SectionReveal delay={0.06}>
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[420px_1fr]">
          <div className="rounded-lg border border-border bg-bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Checklist tecnico</p>
            <div className="mt-5">
              <DataTable rows={TECHNICAL_CHECKS} dense />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {STADIUM_MATERIALS.map((category) => (
              <article key={category.id} className="rounded-lg border border-border bg-bg-card p-5">
                <h2 className="font-display text-lg font-bold text-text-primary">{category.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{category.description}</p>
                <div className="mt-4 space-y-2">
                  {category.materials.map((material) => (
                    <div key={material.name} className="rounded-md border border-border bg-bg-elevated p-3">
                      <p className="text-sm font-medium text-text-primary">{material.name}</p>
                      <p className="mt-1 text-xs leading-relaxed text-text-muted">{material.specification} / {material.referenceRange}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal>
        <section className="rounded-lg border border-border bg-bg-elevated p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Riesgos tecnicos y operativos</p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {technicalRisks.map((risk) => (
              <article key={risk.id} className="rounded-lg border border-border bg-bg-card p-5">
                <p className="font-mono text-xs uppercase text-text-muted">{risk.category} / {risk.severity}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-text-primary">{risk.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{risk.mitigation}</p>
              </article>
            ))}
          </div>
        </section>
      </SectionReveal>
    </div>
  )
}

