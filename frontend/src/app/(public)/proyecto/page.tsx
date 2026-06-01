import { MetricCard } from "@/components/primitives/MetricCard"
import { SectionReveal } from "@/components/primitives/SectionReveal"
import { StatusBadge } from "@/components/primitives/StatusBadge"
import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { STADIUM_PROJECT } from "@/data/estadio/project"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyecto",
  description: "Alcance, estado actual y arquitectura documental del proyecto Estadio Mario Camposeco.",
}

export default function ProyectoPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader eyebrow="01 / Proyecto" title={STADIUM_PROJECT.fullName} description={STADIUM_PROJECT.summary} />
        <Disclaimer text="Esta pagina separa alcance reportado de alcance contractual. El presupuesto oficial, renglones y cronograma deben validarse con Guatecompras y documentos municipales." className="mb-12" />
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <div className="mb-12 flex flex-wrap gap-6 rounded-lg border border-border bg-bg-card px-6 py-4">
          <div>
            <p className="font-mono text-xs text-text-muted mb-1">Estado actual</p>
            <StatusBadge status="in_progress" />
          </div>
          <div>
            <p className="font-mono text-xs text-text-muted mb-1">Ubicacion</p>
            <p className="text-sm text-text-primary">{STADIUM_PROJECT.location}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-text-muted mb-1">Fase</p>
            <p className="text-sm text-text-primary">{STADIUM_PROJECT.currentPhase}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-text-muted mb-1">Corte documental</p>
            <p className="font-mono text-sm text-text-primary">{STADIUM_PROJECT.lastReviewed}</p>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.08}>
        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STADIUM_PROJECT.phaseCards.map((card) => (
            <MetricCard key={card.label} label={card.label} value={card.value} description={card.detail} accent={card.value === "Guatecompras"} />
          ))}
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">Alcance reportado</p>
            <h2 className="font-display text-2xl font-bold text-text-primary mb-4">De promesa publica a expediente verificable</h2>
            <p className="text-text-secondary leading-relaxed mb-4">{STADIUM_PROJECT.locationDetail}</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              El proyecto se debe modelar por componentes: graderio norte, 14 avenida, accesos, servicios sanitarios, areas VIP, museo, cafeterias, camerinos, urbanizacion y posibles fases futuras.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">Reglas de investigacion</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Un render no prueba alcance contractual.",
                "Una declaracion publica no sustituye bases de licitacion.",
                "El costo oficial depende de presupuesto y NOG.",
                "La capacidad debe tratarse como claim con fuente.",
                "Los permisos se validan con resoluciones o expedientes.",
              ].map((item, i) => (
                <div key={item} style={{ display: "flex", gap: 16, borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)", background: "var(--bg-card)", padding: "12px 16px", alignItems: "flex-start" }}>
                  <span className="font-mono" style={{ fontSize: 10.5, color: "var(--text-muted)", flexShrink: 0, marginTop: 2, minWidth: 20 }}>{String(i + 1).padStart(2, "0")}</span>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.55, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}

