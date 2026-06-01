import { SectionReveal } from "@/components/primitives/SectionReveal"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { HISTORY_SECTIONS } from "@/data/estadio/history"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Historia" }

export default function HistoriaPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="02 / Historia"
          title="Historia del Estadio Mario Camposeco"
          description="Base narrativa inicial para ordenar origen, memoria deportiva, aforo, remodelaciones y contexto del proyecto 2025-2026. Cada afirmacion historica debera reforzarse con fuente primaria cuando exista."
        />
      </SectionReveal>

      <div className="space-y-10">
        {HISTORY_SECTIONS.map((section, index) => (
          <SectionReveal key={section.title} delay={index * 0.06}>
            <article className="grid grid-cols-1 gap-8 border-t border-border pt-10 lg:grid-cols-[180px_1fr]">
              <div>
                <p className="font-mono text-xs text-text-muted">{section.eyebrow}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-text-primary mb-4">{section.title}</h2>
                <p className="text-sm leading-7 text-text-secondary mb-5">{section.body}</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {section.facts.map((fact) => (
                    <div key={fact} className="rounded-lg border border-border bg-bg-card p-4">
                      <p className="text-xs leading-5 text-text-secondary">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>
    </div>
  )
}

