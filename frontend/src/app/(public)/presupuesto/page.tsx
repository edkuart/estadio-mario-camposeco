import { SectionReveal } from "@/components/primitives/SectionReveal"
import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { COST_CATEGORIES, COST_META, COST_SCENARIOS, getCostCategoryTotal } from "@/data/estadio/costs"
import { formatCurrency, formatRange } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Costos" }

export default function PresupuestoPage() {
  const totals = COST_CATEGORIES.map(getCostCategoryTotal)
  const grand = totals.reduce((acc, item) => ({ min: acc.min + item.min, max: acc.max + item.max }), { min: 0, max: 0 })
  const contingency = { min: Math.round(grand.min * COST_META.contingencyPct), max: Math.round(grand.max * COST_META.contingencyPct) }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="06 / Costos"
          title="Modelo preliminar de costos"
          description={`Version ${COST_META.version} — ${COST_META.date}. Base estatica hasta localizar presupuesto oficial en Guatecompras.`}
        />
        <Disclaimer text={COST_META.disclaimer} className="mb-12" />
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <div className="mb-12 rounded-lg border border-accent/20 bg-accent-glow p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3">Suma de renglones preliminares modelados</p>
          <p className="font-display text-5xl font-bold text-text-primary">{formatRange(grand.min, grand.max, COST_META.currency)}</p>
          <p className="mt-3 text-sm text-text-secondary">Contingencia metodologica 12%: <span className="font-mono text-text-primary">{formatRange(contingency.min, contingency.max, COST_META.currency)}</span></p>
          <p className="mt-1 text-sm text-text-secondary">Total modelado con contingencia: <span className="font-mono font-medium text-text-primary">{formatRange(grand.min + contingency.min, grand.max + contingency.max, COST_META.currency)}</span></p>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.08}>
        <div className="mb-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {COST_SCENARIOS.map((scenario) => (
            <div key={scenario.name} className="rounded-lg border border-border bg-bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">Escenario</p>
              <h2 className="font-display text-xl font-bold text-text-primary mb-2">{scenario.name}</h2>
              <p className="font-mono text-lg text-accent mb-3">{scenario.amount}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{scenario.description}</p>
            </div>
          ))}
        </div>
      </SectionReveal>

      {COST_CATEGORIES.map((category, i) => {
        const total = getCostCategoryTotal(category)
        return (
          <SectionReveal key={category.id} delay={i * 0.05}>
            <div className="mb-10">
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-text-muted">{category.name}</p>
                  <p className="mt-1 text-xs text-text-muted">{category.description}</p>
                </div>
                <span className="font-mono text-sm text-text-secondary">{formatRange(total.min, total.max, "GTQ")}</span>
              </div>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-bg-subtle">
                      <th className="px-4 py-3 text-left font-mono text-xs text-text-muted">Renglon</th>
                      <th className="px-4 py-3 text-left font-mono text-xs text-text-muted hidden md:table-cell">Unidad</th>
                      <th className="px-4 py-3 text-right font-mono text-xs text-text-muted">Rango</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item, j) => (
                      <tr key={item.name} className={`border-b border-border last:border-0 ${j % 2 === 0 ? "bg-bg-card" : "bg-bg-elevated"}`}>
                        <td className="px-4 py-3">
                          <p className="text-text-primary">{item.name}</p>
                          <p className="text-xs text-text-muted mt-0.5">{item.notes}</p>
                          <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted mt-2">{item.costType}</p>
                        </td>
                        <td className="px-4 py-3 hidden md:table-cell">
                          <p className="font-mono text-xs text-text-secondary">{item.unit}</p>
                          <p className="text-xs text-text-muted">{item.quantity}</p>
                        </td>
                        <td className="px-4 py-3 text-right whitespace-nowrap"><span className="font-mono text-text-primary">{formatRange(item.min, item.max, "GTQ")}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </SectionReveal>
        )
      })}

      <SectionReveal>
        <div className="mt-4 overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-bg-subtle">
                <th className="px-4 py-3 text-left font-mono text-xs text-text-muted">Resumen</th>
                <th className="px-4 py-3 text-right font-mono text-xs text-text-muted">Minimo</th>
                <th className="px-4 py-3 text-right font-mono text-xs text-text-muted">Maximo</th>
              </tr>
            </thead>
            <tbody>
              {COST_CATEGORIES.map((cat) => {
                const t = getCostCategoryTotal(cat)
                return (
                  <tr key={cat.id} className="border-b border-border bg-bg-card">
                    <td className="px-4 py-2.5 text-text-secondary">{cat.name}</td>
                    <td className="px-4 py-2.5 text-right font-mono text-text-primary">{formatCurrency(t.min)}</td>
                    <td className="px-4 py-2.5 text-right font-mono text-text-primary">{formatCurrency(t.max)}</td>
                  </tr>
                )
              })}
              <tr className="bg-bg-subtle">
                <td className="px-4 py-3 font-semibold text-text-primary">Total modelado</td>
                <td className="px-4 py-3 text-right font-mono font-bold text-accent">{formatCurrency(grand.min + contingency.min)}</td>
                <td className="px-4 py-3 text-right font-mono font-bold text-accent">{formatCurrency(grand.max + contingency.max)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionReveal>
    </div>
  )
}

