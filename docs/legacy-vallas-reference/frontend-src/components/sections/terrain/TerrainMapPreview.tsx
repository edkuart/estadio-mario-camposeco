import { TERRAIN_MAP } from "@/data/terrain-map"

interface TerrainMapPreviewProps {
  compact?: boolean
  className?: string
}

function getMapEmbedUrl() {
  const publicKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const center = `${TERRAIN_MAP.latitude},${TERRAIN_MAP.longitude}`

  if (publicKey) {
    const params = new URLSearchParams({
      key: publicKey,
      center,
      zoom: String(TERRAIN_MAP.zoom),
      maptype: "satellite",
    })
    return `https://www.google.com/maps/embed/v1/view?${params.toString()}`
  }

  return `https://maps.google.com/maps?q=${encodeURIComponent(center)}&z=${TERRAIN_MAP.zoom}&t=k&output=embed`
}

export function TerrainMapPreview({ compact = false, className = "" }: TerrainMapPreviewProps) {
  const mapEmbedUrl = getMapEmbedUrl()

  return (
    <section className={className}>
      <div className="overflow-hidden rounded-lg border border-border bg-bg-card">
        <div className="relative aspect-[16/9] min-h-[260px] bg-bg-elevated">
          <iframe
            src={mapEmbedUrl}
            title={`Vista satelital del terreno en ${TERRAIN_MAP.title}`}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-base/90 via-bg-base/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">
              Preview satelital
            </p>
            <h2 className="font-display text-2xl font-bold text-text-primary leading-tight">
              {TERRAIN_MAP.title}
            </h2>
            {!compact && (
              <p className="mt-2 max-w-xl text-sm text-text-secondary leading-relaxed">
                Referencia visual del punto del terreno, su cercanía a la RN-1 y el
                contexto topográfico usado para evaluar visibilidad, acceso y riesgos.
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-0 border-t border-border sm:grid-cols-[1fr_auto]">
          <div className="grid grid-cols-2 gap-0 sm:grid-cols-4">
            {[
              { label: "Coordenadas", value: TERRAIN_MAP.coordinatesLabel },
              { label: "Ruta", value: TERRAIN_MAP.route },
              { label: "Municipio", value: TERRAIN_MAP.municipality },
              { label: "Zoom", value: `Satélite · ${TERRAIN_MAP.zoom}` },
            ].map((item) => (
              <div key={item.label} className="border-b border-border px-4 py-3 sm:border-b-0 sm:border-r">
                <p className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-1">
                  {item.label}
                </p>
                <p className="text-xs font-medium text-text-primary leading-snug">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 px-4 py-3">
            <a
              href={TERRAIN_MAP.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-text-secondary transition-colors hover:border-border-dim hover:text-text-primary"
            >
              Abrir mapa
            </a>
            <a
              href={TERRAIN_MAP.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-accent/30 bg-accent-glow px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-accent transition-colors hover:border-accent/50"
            >
              Ruta
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
