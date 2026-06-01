import { MetricCard } from "@/components/primitives/MetricCard"
import { SectionLinkCard } from "@/components/primitives/SectionLinkCard"
import { SectionReveal } from "@/components/primitives/SectionReveal"
import { StatusBadge } from "@/components/primitives/StatusBadge"
import { STADIUM_PROJECT } from "@/data/estadio/project"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Estadio Mario Camposeco — Observatorio documental",
}

const SECTION_LINKS = [
  { href: "/proyecto", label: "Proyecto", description: "Alcance, estado actual, actores y siguientes hitos", eyebrow: "01" },
  { href: "/historia", label: "Historia", description: "Origen, memoria deportiva, aforo y remodelaciones", eyebrow: "02" },
  { href: "/timeline", label: "Timeline", description: "Linea de tiempo historica, politica y documental", eyebrow: "03" },
  { href: "/investigacion", label: "Investigacion", description: "Temas criticos, fuentes y pendientes de validacion", eyebrow: "04" },
  { href: "/galeria", label: "Galeria", description: "Renders, fotos, planos y evidencia visual pendiente", eyebrow: "05" },
  { href: "/presupuesto", label: "Costos", description: "Base heredada para adaptar a presupuesto de estadio", eyebrow: "06" },
  { href: "/proveedores", label: "Proveedores", description: "Directorio inicial por especialidad", eyebrow: "07" },
  { href: "/ingenieria", label: "Tecnico", description: "Base para checklist FIFA, Concacaf, AGIES y CONRED", eyebrow: "08" },
]

export default function HomePage() {
  const metrics = STADIUM_PROJECT.keyMetrics

  return (
    <>
      <section className="relative flex min-h-[94vh] flex-col justify-end overflow-hidden px-6 pb-20 pt-32" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="grain pointer-events-none absolute inset-0" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.035,
          }}
        />
        <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full" style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)", opacity: 0.07 }} />

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="mb-10 flex flex-wrap items-center gap-3">
            <StatusBadge status="in_progress" />
            <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>·</span>
            <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
              {STADIUM_PROJECT.location} — corte {STADIUM_PROJECT.lastReviewed}
            </span>
          </div>

          <h1 className="font-display font-bold text-text-primary" style={{ fontSize: "clamp(2rem, 8vw, 7.25rem)", letterSpacing: 0, lineHeight: 0.94 }}>
            Estadio
            <br />
            Mario
            <br />
            Camposeco
          </h1>

          <div style={{ marginTop: 48, height: 1, width: 72, background: "rgba(193,18,31,0.35)" }} />

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl leading-relaxed" style={{ fontSize: 15, color: "var(--text-secondary)" }}>
              {STADIUM_PROJECT.summary}
            </p>
            <div className="shrink-0 sm:text-right">
              <p className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: 0, color: "var(--text-muted)", marginBottom: 6 }}>
                Estado actual
              </p>
              <p className="font-display font-bold" style={{ fontSize: 28, letterSpacing: 0, color: "var(--text-primary)", lineHeight: 1 }}>
                Prelicitacion
              </p>
              <p className="font-mono" style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 4 }}>
                Guatecompras pendiente
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionReveal>
        <section className="px-6" style={{ padding: "56px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="mx-auto max-w-7xl">
            <p className="font-mono uppercase" style={{ fontSize: 10.5, letterSpacing: 0, color: "var(--text-muted)", marginBottom: 24 }}>
              Indicadores de expediente
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              <MetricCard label="Aforo actual" value={metrics.currentCapacity} description="Cifra reportada" />
              <MetricCard label="Meta reportada" value={metrics.projectedCapacity} description="Por validar" />
              <MetricCard label="Costo oficial" value={metrics.officialCost} description="Requiere NOG" />
              <MetricCard label="Fuentes" value={metrics.sourcesTracked} description="Base inicial" />
              <MetricCard label="Permisos" value={metrics.criticalPermits} description="Criticos" />
              <MetricCard label="Riesgos" value={metrics.riskAreas} description="Areas" accent />
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal delay={0.08}>
        <section className="px-6" style={{ padding: "96px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <p className="font-mono uppercase" style={{ fontSize: 10.5, letterSpacing: 0, color: "var(--text-muted)", marginBottom: 14 }}>
                  Metodo
                </p>
                <h2 className="font-display font-bold" style={{ fontSize: 32, letterSpacing: 0, lineHeight: 1.15, color: "var(--text-primary)", marginBottom: 16 }}>
                  Primero evidencia.
                  <br />
                  Despues visualizacion.
                </h2>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.65, fontSize: 15, marginBottom: 24 }}>
                  {STADIUM_PROJECT.vision}
                </p>
                <Link href="/investigacion" className="font-mono uppercase inline-flex items-center" style={{ fontSize: 11, letterSpacing: 0, color: "var(--text-secondary)", borderBottom: "1px solid rgba(255,255,255,0.14)", paddingBottom: 3 }}>
                  Ver investigacion inicial →
                </Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {STADIUM_PROJECT.highlights.map((h, i) => (
                  <div key={h} style={{ display: "flex", gap: 16, borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)", background: "var(--bg-card)", padding: "12px 16px", alignItems: "flex-start" }}>
                    <span className="font-mono" style={{ fontSize: 10.5, color: "var(--text-muted)", flexShrink: 0, marginTop: 2, minWidth: 20 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.55, margin: 0 }}>{h}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <section style={{ padding: "80px 24px" }}>
          <div className="mx-auto max-w-7xl">
            <p className="font-mono uppercase" style={{ fontSize: 10.5, letterSpacing: 0, color: "var(--text-muted)", marginBottom: 32 }}>
              Explorar observatorio
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 16 }}>
              {SECTION_LINKS.map((section) => <SectionLinkCard key={section.href} {...section} />)}
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  )
}


