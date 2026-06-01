import { SectionReveal } from "@/components/primitives/SectionReveal"
import { STADIUM_CLAIMS } from "@/data/estadio/claims"
import { STADIUM_DOCUMENTS } from "@/data/estadio/documents"
import { STADIUM_RESEARCH } from "@/data/estadio/research"
import { STADIUM_RISKS } from "@/data/estadio/risks"
import { STADIUM_SOURCES } from "@/data/estadio/sources"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

const ARTICLE_DETAILS: Record<string, string[]> = {
  "expediente-guatecompras": [
    "El expediente de Guatecompras es el punto de cambio entre investigacion preliminar y seguimiento contractual. Mientras no exista NOG localizado, el costo, alcance, modalidad y cronograma deben mantenerse como datos pendientes.",
    "La plataforma debe registrar fecha de publicacion, entidad compradora, bases, anexos, presupuesto por renglones, junta de licitacion, oferentes, adjudicacion y contrato. Cada version debe archivarse porque las bases pueden cambiar por aclaraciones o modificaciones.",
    "Primer criterio de validacion: no convertir rangos preliminares en costo oficial. Segundo criterio: separar vision publica, alcance contractual y alcance ejecutado.",
  ],
  "idae-patrimonio": [
    "El Estadio Mario Camposeco tiene valor historico y simbolico para Quetzaltenango. Cualquier intervencion reportada como autorizada por IDAEH debe documentarse con resolucion, expediente, planos aprobados y condicionantes tecnicas.",
    "La plataforma debe distinguir entre inspeccion, visto bueno verbal, aval reportado y resolucion formal. Solo la resolucion o expediente oficial puede cerrar el claim patrimonial.",
    "Los riesgos principales son cambios de materiales, restricciones sobre elementos existentes, demoliciones no permitidas y retrasos si el permiso se interpreta de forma distinta durante obra.",
  ],
  "marn-ambiental": [
    "El instrumento ambiental determina categoria, medidas de mitigacion, obligaciones de manejo de residuos, ruido, polvo, agua, drenajes y afectaciones durante construccion.",
    "La plataforma debe registrar numero de expediente, resolucion, fecha, categoria, responsable ambiental y compromisos verificables. Tambien debe separar aprobacion reportada de documento localizado.",
    "Este modulo debe conectarse con riesgos de obra, permisos municipales, calendario de construccion y seguimiento fotografico.",
  ],
  "concacaf-fifa": [
    "Cumplir con una ampliacion fisica no equivale automaticamente a cumplir requisitos FIFA o Concacaf. La evaluacion debe considerar seguridad, iluminacion, accesos, camerinos, broadcast, control antidopaje, hospitalidad, energia, conectividad y operacion de partido.",
    "La plataforma debe funcionar como checklist tecnico: requisito, evidencia existente, brecha, responsable y estado. Las brechas logisticas externas, como hoteles, aeropuerto y rutas de traslado, deben tratarse como categoria separada.",
    "El resultado recomendado no es un si/no simple, sino niveles: apto local, apto nacional, apto regional condicionado y no evaluable por falta de evidencia.",
  ],
  "costos-parametricos": [
    "Los costos parametricos sirven para ordenar magnitudes antes del presupuesto oficial. No sustituyen planos, cantidades, especificaciones ni renglones de Guatecompras.",
    "La plataforma debe mostrar costo por componente: graderios, estructura, urbanizacion, accesos, banos, camerinos, palcos, museo, cafeterias, iluminacion, cancha, drenaje, seguridad, supervision y contingencia.",
    "Cada rango debe conservar origen, supuestos, moneda, fecha y nivel de confianza. Cuando aparezca presupuesto oficial, los rangos preliminares pasan a historico comparativo.",
  ],
  "riesgos-proyecto": [
    "La matriz de riesgos permite ver el proyecto como sistema politico, financiero, tecnico, patrimonial, ambiental y social. Su funcion es anticipar preguntas antes de que la obra este contratada.",
    "Cada riesgo debe tener probabilidad, impacto, severidad, mitigacion, fuente asociada y condicion que lo puede cerrar. Un riesgo no desaparece por declaracion publica; desaparece con evidencia verificable.",
    "La plataforma debe priorizar riesgos criticos: ausencia de NOG, condiciones IDAEH no localizadas, aforo no autorizado, sobrecostos urbanos y cumplimiento Concacaf incompleto.",
  ],
}

export async function generateStaticParams() {
  return STADIUM_RESEARCH.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = STADIUM_RESEARCH.find((item) => item.slug === slug)
  return { title: article?.title ?? "Investigacion" }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = STADIUM_RESEARCH.find((item) => item.slug === slug)

  if (!article) notFound()

  const paragraphs = ARTICLE_DETAILS[slug] ?? [article.summary]
  const linkedDocuments = STADIUM_DOCUMENTS.filter((document) =>
    document.summary.toLowerCase().includes(article.category.toLowerCase()) || document.title.toLowerCase().includes(article.title.toLowerCase().split(" ")[0])
  ).slice(0, 3)
  const linkedClaims = STADIUM_CLAIMS.filter((claim) => claim.type === "costo" || claim.type === "permiso" || claim.type === "tecnico").slice(0, 3)
  const criticalRisks = STADIUM_RISKS.filter((risk) => risk.severity === "critico").slice(0, 3)

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <SectionReveal>
        <div className="mb-10">
          <Link href="/investigacion" className="font-mono text-xs text-text-muted transition-colors hover:text-text-secondary">
            Regresar a investigacion
          </Link>
        </div>

        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-text-muted">{article.category}</span>
            <span className="font-mono text-xs text-text-muted">/</span>
            <span className="font-mono text-xs text-text-muted">{article.relevance} relevancia</span>
            <span className="font-mono text-xs text-text-muted">/</span>
            <span className="font-mono text-xs text-text-muted">{article.status.replace(/_/g, " ")}</span>
          </div>
          <h1 className="font-display text-3xl font-bold leading-tight text-text-primary">{article.title}</h1>
          <p className="mt-4 leading-relaxed text-text-secondary">{article.summary}</p>
          <p className="mt-3 font-mono text-xs text-text-muted">Referencia: {article.sourceLabel}</p>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.06}>
        <div className="space-y-5">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-text-secondary">{paragraph}</p>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.08}>
        <div className="mt-12 grid grid-cols-1 gap-4">
          <section className="rounded-lg border border-border bg-bg-card p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Fuentes base</p>
            <div className="mt-4 space-y-3">
              {STADIUM_SOURCES.slice(0, 3).map((source) => (
                <div key={source.id} className="text-sm text-text-secondary">
                  <span className="text-text-primary">{source.publisher}</span> - {source.title}
                </div>
              ))}
            </div>
          </section>

          {linkedDocuments.length > 0 && (
            <section className="rounded-lg border border-border bg-bg-card p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Documentos relacionados</p>
              <div className="mt-4 space-y-3">
                {linkedDocuments.map((document) => (
                  <div key={document.id} className="text-sm text-text-secondary">
                    <span className="text-text-primary">{document.title}</span> - {document.status.replace(/_/g, " ")}
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="rounded-lg border border-border bg-bg-card p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Claims y riesgos a vigilar</p>
            <div className="mt-4 space-y-3">
              {linkedClaims.map((claim) => (
                <div key={claim.id} className="text-sm text-text-secondary">{claim.statement}</div>
              ))}
              {criticalRisks.map((risk) => (
                <div key={risk.id} className="text-sm text-text-secondary">Riesgo: {risk.title}</div>
              ))}
            </div>
          </section>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <div className="mt-12 border-t border-border pt-8">
          <p className="font-mono text-xs text-text-muted">Fecha: {article.date}</p>
        </div>
      </SectionReveal>
    </div>
  )
}

