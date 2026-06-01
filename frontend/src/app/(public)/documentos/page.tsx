import { SectionReveal } from "@/components/primitives/SectionReveal"
import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { STADIUM_DOCUMENTS } from "@/data/estadio/documents"
import { STADIUM_SOURCES } from "@/data/estadio/sources"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Documentos" }

const PRIORITY_CLASS: Record<string, string> = {
  critica: "text-error-text",
  alta: "text-warning-text",
  media: "text-info-text",
  referencial: "text-text-muted",
}

const STATUS_CLASS: Record<string, string> = {
  localizado: "text-success-text",
  pendiente: "text-warning-text",
  por_descargar: "text-info-text",
  por_solicitar: "text-error-text",
}

const TYPE_LABEL: Record<string, string> = {
  acta: "Acta",
  permiso: "Permiso",
  bases: "Bases",
  presupuesto: "Presupuesto",
  plano: "Plano",
  reglamento: "Reglamento",
  estudio: "Estudio",
  render: "Render",
  noticia: "Noticia",
  ficha: "Ficha",
  galeria: "Galeria",
}

export default function DocumentosPage() {
  const critical = STADIUM_DOCUMENTS.filter((document) => document.priority === "critica")
  const pending = STADIUM_DOCUMENTS.filter((document) => document.status !== "localizado")
  const sourceById = new Map(STADIUM_SOURCES.map((source) => [source.id, source]))

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="05 / Documentos"
          title="Archivo documental del expediente"
          description="Indice de actas, permisos, reglamentos, renders, bases y documentos tecnicos que sostienen o deben sostener la investigacion."
        />
        <Disclaimer text="Los documentos marcados como pendientes o por solicitar son espacios de investigacion abiertos. No deben presentarse como confirmados hasta archivar evidencia primaria." className="mb-12" />
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Documentos indexados</p>
            <p className="mt-3 font-display text-4xl font-bold text-text-primary">{STADIUM_DOCUMENTS.length}</p>
          </div>
          <div className="rounded-lg border border-border bg-bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Prioridad critica</p>
            <p className="mt-3 font-display text-4xl font-bold text-error-text">{critical.length}</p>
          </div>
          <div className="rounded-lg border border-border bg-bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Por localizar o solicitar</p>
            <p className="mt-3 font-display text-4xl font-bold text-warning-text">{pending.length}</p>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.08}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {STADIUM_DOCUMENTS.map((document) => {
            const source = sourceById.get(document.sourceId)
            return (
              <article key={document.id} className="rounded-lg border border-border bg-bg-card p-6">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-sm border border-border px-2 py-1 font-mono text-xs text-text-muted">{TYPE_LABEL[document.type]}</span>
                  <span className={`font-mono text-xs uppercase ${PRIORITY_CLASS[document.priority]}`}>Prioridad {document.priority}</span>
                  <span className={`font-mono text-xs uppercase ${STATUS_CLASS[document.status]}`}>{document.status.replace(/_/g, " ")}</span>
                </div>
                <h2 className="font-display text-xl font-bold text-text-primary leading-snug">{document.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{document.summary}</p>
                <div className="mt-5 grid gap-2 border-t border-border pt-4 text-xs text-text-muted sm:grid-cols-2">
                  <span>Emisor: {document.issuer}</span>
                  <span>Fecha: {document.date}</span>
                  <span>Fuente: {source?.publisher ?? document.sourceId}</span>
                  <span>Confiabilidad: {source?.reliability ?? "pendiente"}</span>
                </div>
              </article>
            )
          })}
        </div>
      </SectionReveal>
    </div>
  )
}



