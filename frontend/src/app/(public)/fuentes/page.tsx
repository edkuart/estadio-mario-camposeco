import { SectionReveal } from "@/components/primitives/SectionReveal"
import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { STADIUM_CLAIMS } from "@/data/estadio/claims"
import { STADIUM_SOURCES } from "@/data/estadio/sources"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Fuentes" }

const RELIABILITY_CLASS: Record<string, string> = {
  alta: "text-success-text",
  media: "text-warning-text",
  baja: "text-error-text",
  pendiente: "text-text-muted",
}

const STATUS_CLASS: Record<string, string> = {
  localizada: "text-success-text",
  pendiente: "text-warning-text",
  por_archivar: "text-info-text",
  requiere_solicitud: "text-error-text",
}

const STATUS_LABEL: Record<string, string> = {
  localizada: "Localizada",
  pendiente: "Pendiente",
  por_archivar: "Por archivar",
  requiere_solicitud: "Requiere solicitud",
}

const TYPE_LABEL: Record<string, string> = {
  oficial: "Oficial",
  medio: "Medio",
  reglamento: "Reglamento",
  pdf: "PDF",
  declaracion: "Declaracion",
  base_datos: "Base de datos",
  repositorio_visual: "Repositorio visual",
  pendiente: "Pendiente",
}

export default function FuentesPage() {
  const official = STADIUM_SOURCES.filter((source) => ["oficial", "reglamento", "base_datos"].includes(source.type))
  const pending = STADIUM_SOURCES.filter((source) => source.status === "pendiente" || source.status === "requiere_solicitud")
  const claimsWithSources = STADIUM_CLAIMS.filter((claim) => claim.sourceIds.length > 0)

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="06 / Fuentes"
          title="Mapa de fuentes y trazabilidad"
          description="Registro de fuentes oficiales, reglamentos, medios y documentos pendientes para diferenciar evidencia primaria, indicios y afirmaciones por verificar."
        />
        <Disclaimer text="Una fuente localizada no significa que todas las afirmaciones relacionadas esten verificadas. Cada claim debe conservar su propio estado de confianza." className="mb-12" />
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Fuentes registradas</p>
            <p className="mt-3 font-display text-4xl font-bold text-text-primary">{STADIUM_SOURCES.length}</p>
          </div>
          <div className="rounded-lg border border-border bg-bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Oficiales/reglamentos</p>
            <p className="mt-3 font-display text-4xl font-bold text-success-text">{official.length}</p>
          </div>
          <div className="rounded-lg border border-border bg-bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Pendientes de solicitud</p>
            <p className="mt-3 font-display text-4xl font-bold text-warning-text">{pending.length}</p>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.08}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {STADIUM_SOURCES.map((source) => (
            <article key={source.id} className="rounded-lg border border-border bg-bg-card p-6">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-sm border border-border px-2 py-1 font-mono text-xs text-text-muted">{TYPE_LABEL[source.type]}</span>
                <span className={`font-mono text-xs uppercase ${RELIABILITY_CLASS[source.reliability]}`}>Confiabilidad {source.reliability}</span>
                <span className={`font-mono text-xs uppercase ${STATUS_CLASS[source.status]}`}>{STATUS_LABEL[source.status]}</span>
              </div>
              <h2 className="font-display text-xl font-bold text-text-primary leading-snug">{source.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{source.notes}</p>
              <div className="mt-5 flex flex-col gap-2 border-t border-border pt-4 text-xs text-text-muted">
                <span>Publicador: {source.publisher}</span>
                <span>Fecha: {source.date}</span>
                {source.url && (
                  <Link href={source.url} target="_blank" rel="noreferrer" className="text-accent hover:text-text-primary">
                    Abrir fuente externa
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.12}>
        <section className="mt-12 rounded-lg border border-border bg-bg-elevated p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Claims enlazados</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-text-primary">Afirmaciones con trazabilidad inicial</h2>
          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            {claimsWithSources.map((claim) => (
              <div key={claim.id} className="rounded-md border border-border bg-bg-card p-4">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="font-mono text-xs uppercase text-text-muted">{claim.type}</span>
                  <span className={`font-mono text-xs uppercase ${RELIABILITY_CLASS[claim.confidence]}`}>Confianza {claim.confidence}</span>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">{claim.statement}</p>
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>
    </div>
  )
}



