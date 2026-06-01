"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const NAV_LINKS = [
  { href: "/proyecto", label: "Proyecto" },
  { href: "/timeline", label: "Timeline" },
  { href: "/documentos", label: "Documentos" },
  { href: "/fuentes", label: "Fuentes" },
  { href: "/presupuesto", label: "Costos" },
  { href: "/riesgos", label: "Riesgos" },
  { href: "/permisos", label: "Permisos" },
]

const ALL_SECTIONS = [
  { href: "/proyecto", label: "Proyecto", eyebrow: "01" },
  { href: "/historia", label: "Historia", eyebrow: "02" },
  { href: "/timeline", label: "Timeline", eyebrow: "03" },
  { href: "/investigacion", label: "Investigacion", eyebrow: "04" },
  { href: "/documentos", label: "Documentos", eyebrow: "05" },
  { href: "/fuentes", label: "Fuentes", eyebrow: "06" },
  { href: "/riesgos", label: "Riesgos", eyebrow: "07" },
  { href: "/presupuesto", label: "Costos", eyebrow: "08" },
  { href: "/materiales", label: "Materiales", eyebrow: "09" },
  { href: "/proveedores", label: "Proveedores", eyebrow: "10" },
  { href: "/permisos", label: "Permisos", eyebrow: "11" },
  { href: "/galeria", label: "Galeria", eyebrow: "12" },
  { href: "/ingenieria", label: "Tecnico", eyebrow: "13" },
]

export function PublicNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <>
      <header
        className="sticky top-0 z-50 print:hidden"
        style={{
          height: 64,
          backdropFilter: "blur(20px)",
          background: "rgba(8,8,9,0.78)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center px-6" style={{ gap: 34 }}>
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div
              style={{
                width: 22,
                height: 22,
                background: "var(--accent)",
                boxShadow: "0 0 24px rgba(193,18,31,0.45)",
                borderRadius: 2,
              }}
            />
            <span
              className="font-display"
              style={{ fontWeight: 700, fontSize: 15, color: "var(--text-primary)" }}
            >
              MARIO CAMPOSECO
            </span>
          </Link>

          <nav className="hidden lg:flex items-center" style={{ gap: 22, marginLeft: 8 }}>
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href)
              const hovered = hoveredLink === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono relative"
                  style={{
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: 0,
                    color: active ? "var(--accent)" : hovered ? "var(--text-primary)" : "var(--text-secondary)",
                    paddingBottom: 4,
                    borderBottom: hovered && !active ? "1px solid rgba(255,255,255,0.4)" : "1px solid transparent",
                    transition: "color 150ms ease-in-out, border-color 150ms ease-in-out",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {active && <span style={{ width: 5, height: 5, borderRadius: 999, background: "var(--accent)", flexShrink: 0 }} />}
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <Link
            href="/documentos"
            className="hidden lg:flex items-center font-mono"
            style={{ marginLeft: "auto", gap: 8, fontSize: 10, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0 }}
          >
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--accent)", boxShadow: "0 0 0 4px rgba(18,60,115,0.28)" }} />
            Expediente vivo
          </Link>

          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            className="flex flex-col items-center justify-center gap-1.5 p-2 lg:hidden ml-auto"
            aria-label={open ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            <span className={`block h-px w-5 bg-text-secondary transition-transform duration-200 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-text-secondary transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-text-secondary transition-transform duration-200 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden print:hidden" aria-modal="true">
          <div className="absolute inset-0 bg-bg-base/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div style={{ position: "absolute", top: 64, left: 0, right: 0, borderBottom: "1px solid rgba(255,255,255,0.07)", background: "var(--bg-base)" }}>
            <nav className="mx-auto max-w-7xl px-6 py-4">
              <Link href="/" className="flex items-center gap-3 rounded-md px-3 py-3 text-sm transition-colors mb-2" style={{ color: pathname === "/" ? "var(--accent)" : "var(--text-secondary)" }}>
                <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>00</span>
                Inicio
              </Link>
              <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 8 }} />
              {ALL_SECTIONS.map(s => (
                <Link key={s.href} href={s.href} className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors" style={{ color: pathname.startsWith(s.href) ? "var(--accent)" : "var(--text-secondary)" }}>
                  <span className="font-mono text-xs w-5" style={{ color: "var(--text-muted)" }}>{s.eyebrow}</span>
                  {s.label}
                </Link>
              ))}
              <div className="mt-4 flex items-center gap-2 px-3 pb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-success-text animate-pulse" />
                <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>EXPEDIENTE EN CONSTRUCCION</span>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}


