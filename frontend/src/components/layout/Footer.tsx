import Link from "next/link"
import { PrintButton } from "./PrintButton"

const FOOTER_LINKS = [
  { href: "/proyecto", label: "Proyecto" },
  { href: "/historia", label: "Historia" },
  { href: "/timeline", label: "Timeline" },
  { href: "/investigacion", label: "Investigacion" },
  { href: "/documentos", label: "Documentos" },
  { href: "/fuentes", label: "Fuentes" },
  { href: "/riesgos", label: "Riesgos" },
  { href: "/presupuesto", label: "Costos" },
  { href: "/permisos", label: "Permisos" },
  { href: "/proveedores", label: "Proveedores" },
  { href: "/ingenieria", label: "Tecnico" },
  { href: "/materiales", label: "Materiales" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated mt-24 print:hidden">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-5 w-5 rounded-sm bg-accent" />
              <span className="font-display text-sm font-bold text-text-primary">MARIO CAMPOSECO</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed max-w-xs">
              Observatorio documental sobre la renovacion y ampliacion del Estadio Mario Camposeco. Quetzaltenango, Guatemala.
            </p>
            <div className="mt-5">
              <PrintButton />
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
              Secciones
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 lg:grid-cols-4">
              {FOOTER_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-xs text-text-secondary hover:text-text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-xs text-text-muted">
            MARIO CAMPOSECO - OBSERVATORIO DOCUMENTAL
          </span>
          <span className="font-mono text-xs text-text-muted">
            Informacion en validacion. Priorizar fuentes oficiales y documentos publicos.
          </span>
        </div>
      </div>
    </footer>
  )
}

