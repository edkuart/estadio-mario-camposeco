import { SectionReveal } from "@/components/primitives/SectionReveal"
import { StatusBadge } from "@/components/primitives/StatusBadge"
import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { STADIUM_SUPPLIERS, SUPPLIER_SPECIALTIES, SUPPLIERS_DISCLAIMER } from "@/data/estadio/suppliers"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Proveedores" }

const STATUS_MAP = {
  identificado: "pending",
  por_validar: "under_review",
  posible_oferente: "reported",
  adjudicado: "approved",
  descartado: "rejected",
} as const

export default function ProveedoresPage() {
  const bySpecialty = STADIUM_SUPPLIERS.reduce<Record<string, typeof STADIUM_SUPPLIERS>>((acc, supplier) => {
    if (!acc[supplier.specialty]) acc[supplier.specialty] = []
    acc[supplier.specialty].push(supplier)
    return acc
  }, {})

  const orderedEntries = SUPPLIER_SPECIALTIES.filter((specialty) => bySpecialty[specialty]).map((specialty) => [specialty, bySpecialty[specialty]] as [string, typeof STADIUM_SUPPLIERS])

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="08 / Proveedores"
          title="Directorio preliminar de proveedores"
          description="Empresas, especialidades y actores de mercado que podrian ser relevantes para cotizaciones, comparacion o monitoreo de contratacion."
        />
        <Disclaimer text={SUPPLIERS_DISCLAIMER} className="mb-12" />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {orderedEntries.map(([specialty, suppliers]) => (
            <div key={specialty} className="rounded-[10px] border border-border bg-bg-card px-4 py-4">
              <p className="font-display text-3xl font-bold text-text-primary leading-none mb-2">{suppliers.length}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted leading-snug">{specialty}</p>
            </div>
          ))}
        </div>
      </SectionReveal>

      {orderedEntries.map(([specialty, suppliers], i) => (
        <SectionReveal key={specialty} delay={i * 0.05}>
          <div className="mb-12">
            <p className="font-mono uppercase" style={{ fontSize: 10.5, letterSpacing: 0, color: "var(--text-muted)", marginBottom: 16 }}>{specialty}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {suppliers.map((supplier) => (
                <div key={supplier.id} className="rounded-[10px] border border-border bg-bg-card px-5 py-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div style={{ flex: 1 }}>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>{supplier.name}</p>
                        {supplier.website && (
                          <Link href={supplier.website} target="_blank" rel="noopener noreferrer" className="font-mono" style={{ fontSize: 10, letterSpacing: 0, color: "var(--accent)", borderBottom: "1px solid rgba(193,18,31,0.3)", paddingBottom: 1 }}>
                            {supplier.website.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                          </Link>
                        )}
                      </div>
                      <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 8 }}>{supplier.location}</p>
                      <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0, maxWidth: 760 }}>{supplier.notes}</p>
                    </div>
                    <div className="shrink-0 sm:pt-0.5"><StatusBadge status={STATUS_MAP[supplier.status]} /></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      ))}
    </div>
  )
}


