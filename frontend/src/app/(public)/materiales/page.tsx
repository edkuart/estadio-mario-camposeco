import { SectionReveal } from "@/components/primitives/SectionReveal"
import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { MATERIALS_DISCLAIMER, STADIUM_MATERIALS } from "@/data/estadio/materials"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Materiales" }

export default function MaterialesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="09 / Materiales"
          title="Catalogo tecnico inicial"
          description="Materiales y sistemas que deben aparecer en planos, bases, presupuesto y control de calidad del proyecto."
        />
        <Disclaimer text={MATERIALS_DISCLAIMER} className="mb-12" />
      </SectionReveal>

      {STADIUM_MATERIALS.map((category, i) => (
        <SectionReveal key={category.id} delay={i * 0.05}>
          <div className="mb-14">
            <div className="mb-4">
              <p className="font-mono text-xs uppercase tracking-widest text-text-muted">{category.name}</p>
              <p className="mt-1 text-xs text-text-muted">{category.description}</p>
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-elevated">
                    <th className="px-4 py-3 text-left font-mono text-xs text-text-muted">Material</th>
                    <th className="px-4 py-3 text-left font-mono text-xs text-text-muted hidden md:table-cell">Especificacion</th>
                    <th className="px-4 py-3 text-right font-mono text-xs text-text-muted">Referencia</th>
                  </tr>
                </thead>
                <tbody>
                  {category.materials.map((mat, j) => (
                    <tr key={mat.name} className={`border-b border-border last:border-0 ${j % 2 === 0 ? "bg-bg-card" : "bg-bg-elevated"}`}>
                      <td className="px-4 py-3">
                        <p className="font-medium text-text-primary">{mat.name}</p>
                        <p className="text-xs text-text-muted mt-0.5">{mat.notes}</p>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell"><p className="text-xs text-text-secondary font-mono">{mat.specification}</p></td>
                      <td className="px-4 py-3 text-right"><span className="font-mono text-xs text-text-primary whitespace-nowrap">{mat.referenceRange}</span><p className="font-mono text-[10px] text-text-muted mt-1">{mat.unit}</p></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </SectionReveal>
      ))}
    </div>
  )
}

