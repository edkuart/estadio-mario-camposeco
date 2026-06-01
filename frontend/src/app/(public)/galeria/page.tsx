import { SectionReveal } from "@/components/primitives/SectionReveal"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { GALLERY_GROUPS, type GalleryItem } from "@/data/estadio/gallery"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Galeria" }

const STATUS_LABEL: Record<GalleryItem["status"], string> = {
  localizado: "Localizado",
  pendiente: "Pendiente",
  por_solicitar: "Por solicitar",
}

const KIND_LABEL: Record<GalleryItem["kind"], string> = {
  render: "Render",
  foto: "Foto",
  plano: "Plano",
  mapa: "Mapa",
  comparable: "Comparable",
}

function VisualCard({ item }: { item: GalleryItem }) {
  return (
    <article className="group min-w-0 overflow-hidden rounded-lg border border-border bg-bg-card transition-colors hover:border-border-dim">
      <div className="relative aspect-video overflow-hidden bg-bg-elevated">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 px-4 text-center">
            <div className="h-8 w-8 rounded-sm border border-border-dim" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">Archivo pendiente</p>
          </div>
        )}
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-sm bg-bg-base/85 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-text-secondary backdrop-blur">
            {KIND_LABEL[item.kind]}
          </span>
          <span className="rounded-sm bg-bg-base/85 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-text-secondary backdrop-blur">
            {STATUS_LABEL[item.status]}
          </span>
        </div>
      </div>
      <div className="min-w-0 p-4">
        <h2 className="break-words font-display text-base font-bold leading-snug text-text-primary">{item.title}</h2>
        <p className="mt-2 break-words text-xs leading-relaxed text-text-secondary">{item.notes}</p>
        <div className="mt-4 flex min-w-0 flex-col gap-1 break-words border-t border-border pt-3 font-mono text-[10px] uppercase text-text-muted">
          <span>Fuente: {item.sourceId}</span>
          {item.credit && <span>Credito: {item.credit}</span>}
          {item.license && <span>{item.license}</span>}
          {item.sourceUrl && (
            <Link href={item.sourceUrl} target="_blank" rel="noreferrer" className="pt-1 text-accent transition-colors hover:text-text-primary">
              Abrir ficha de fuente
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

export default function GaleriaPage() {
  const localized = GALLERY_GROUPS.flatMap((group) => group.items).filter((item) => item.status === "localizado").length
  const pending = GALLERY_GROUPS.flatMap((group) => group.items).filter((item) => item.status !== "localizado").length

  return (
    <div className="gallery-shell mx-auto overflow-hidden py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="05 / Galeria"
          title="Evidencia visual y renders"
          description="Repositorio visual con fotos localizadas, render publico, fuentes de licencia y placeholders tecnicos para lo que todavia debe venir de actas, planos o Guatecompras."
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <div className="mb-14 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="min-w-0 rounded-lg border border-border bg-bg-card px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">Visuales localizados</p>
            <p className="mt-2 font-display text-3xl font-bold text-accent">{localized}</p>
          </div>
          <div className="min-w-0 rounded-lg border border-border bg-bg-card px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">Pendientes</p>
            <p className="mt-2 font-display text-3xl font-bold text-warning-text">{pending}</p>
          </div>
          <div className="min-w-0 rounded-lg border border-border bg-bg-card px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">Regla editorial</p>
            <p className="mt-2 break-words text-xs leading-relaxed text-text-secondary">Cada imagen debe conservar fuente, licencia, fecha y estado de verificacion.</p>
          </div>
        </div>
      </SectionReveal>

      {GALLERY_GROUPS.map((cat, i) => (
        <SectionReveal key={cat.id} delay={i * 0.06}>
          <section className="mb-14">
            <div className="mb-5 flex items-baseline gap-3">
              <span className="font-mono text-xs text-text-muted">{cat.eyebrow}</span>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted">{cat.label}</p>
                <p className="mt-0.5 break-words text-xs text-text-muted">{cat.description}</p>
              </div>
            </div>
            <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cat.items.map((item) => <VisualCard key={item.id} item={item} />)}
            </div>
          </section>
        </SectionReveal>
      ))}
    </div>
  )
}

