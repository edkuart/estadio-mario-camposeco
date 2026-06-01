import { SectionReveal } from "@/components/primitives/SectionReveal"
import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { STADIUM_CLAIMS } from "@/data/estadio/claims"
import { STADIUM_DOCUMENTS } from "@/data/estadio/documents"
import { STADIUM_RESEARCH } from "@/data/estadio/research"
import { STADIUM_RISKS } from "@/data/estadio/risks"
import { STADIUM_SOURCES } from "@/data/estadio/sources"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Investigacion" }

const RELEVANCE_COLOR = {
  Critica: "text-error-text",
  Alta: "text-success-text",
  Media: "text-warning-text",
  Referencial: "text-text-muted",
}

const CATEGORY_COLOR: Record<string, string> = {
  Historia: "text-text-secondary",
  Permisos: "text-warning-text",
  Contratacion: "text-accent",
  Tecnico: "text-info-text",
  Costos: "text-success-text",
  Riesgos: "text-error-text",
  Comparables: "text-text-muted",
}

const DOCUMENTAL_MODULES = [
  {
    href: "/documentos",
    label: "Documentos",
    value: STADIUM_DOCUMENTS.length,
    description: "Actas, permisos, bases, reglamentos y renders indexados.",
  },
  {
    href: "/fuentes",
    label: "Fuentes",
    value: STADIUM_SOURCES.length,
    description: "Fuentes oficiales, reglamentos, medios y solicitudes pendientes.",
  },
  {
    href: "/fuentes",
    label: "Claims",
    value: STADIUM_CLAIMS.length,
    description: "Afirmaciones con estado, confianza y trazabilidad inicial.",
  },
  {
    href: "/riesgos",
    label: "Riesgos",
    value: STADIUM_RISKS.length,
    description: "Matriz politica, financiera, tecnica, patrimonial y contractual.",
  },
]

export default function InvestigacionPage() {
  const critical = STADIUM_RESEARCH.filter((item) => item.relevance === "Critica")
  const archive = STADIUM_RESEARCH.filter((item) => item.relevance !== "Critica")

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="04 / Investigacion"
          title="Expediente de investigacion"
          description="Temas documentales que deben convertirse en fuentes, documentos, claims y validaciones. Esta fase todavia usa datos estaticos."
        />
        <Disclaimer text="Las fichas distinguen informacion inicial, fuente primaria pendiente y temas que requieren corroboracion. No sustituyen documentos oficiales." className="mb-12" />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DOCUMENTAL_MODULES.map((module) => (
            <Link key={module.label} href={module.href} className="rounded-lg border border-border bg-bg-card p-5 transition-colors hover:border-accent/50">
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted">{module.label}</p>
                <p className="font-display text-3xl font-bold text-accent">{module.value}</p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">{module.description}</p>
            </Link>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <div className="mb-10 rounded-lg border border-accent/20 bg-accent-glow p-6 sm:p-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">Prioridad critica</p>
              <h2 className="font-display text-2xl font-bold text-text-primary">Documentos que cambian el expediente</h2>
            </div>
            <p className="max-w-xl text-sm text-text-secondary leading-relaxed">
              El NOG de Guatecompras, la resolucion IDAEH y el instrumento ambiental son los puntos que separan una investigacion preliminar de seguimiento contractual.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {critical.map((article) => (
              <article key={article.slug} className="rounded-lg border border-border bg-bg-card p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className={`font-mono text-xs ${CATEGORY_COLOR[article.category] ?? "text-text-muted"}`}>{article.category}</span>
                  <span className={`font-mono text-xs ${RELEVANCE_COLOR[article.relevance]}`}>● {article.relevance}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary mb-2 leading-snug">{article.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{article.summary}</p>
                <p className="font-mono text-xs text-text-muted">{article.sourceLabel}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.08}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {archive.map((article) => (
            <article key={article.slug} className="group flex flex-col rounded-lg border border-border bg-bg-card p-6">
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className={`font-mono text-xs ${CATEGORY_COLOR[article.category] ?? "text-text-muted"}`}>{article.category}</span>
                <span className={`font-mono text-xs ${RELEVANCE_COLOR[article.relevance]}`}>● {article.relevance}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-text-primary mb-2 leading-snug">{article.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">{article.summary}</p>
              <div className="mt-4 flex flex-col gap-1 border-t border-border pt-4">
                <span className="font-mono text-xs text-text-muted">Estado: {article.status}</span>
                <span className="font-mono text-xs text-text-muted">Referencia: {article.sourceLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </div>
  )
}

