"use client"

import Link from "next/link"

interface SectionLinkCardProps {
  href: string
  label: string
  description: string
  eyebrow: string
}

export function SectionLinkCard({ href, label, description, eyebrow }: SectionLinkCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col"
      style={{
        minHeight: 132,
        padding: 24,
        borderRadius: 10,
        border: "1px solid rgba(255,255,255,0.07)",
        background: "var(--bg-card)",
        transition: "border-color 150ms ease-in-out, background 150ms ease-in-out",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.border = "1px solid rgba(255,255,255,0.14)"
        el.style.background = "var(--bg-subtle)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.border = "1px solid rgba(255,255,255,0.07)"
        el.style.background = "var(--bg-card)"
      }}
    >
      <p
        className="font-mono uppercase"
        style={{ fontSize: 10.5, letterSpacing: 0, color: "var(--text-muted)", marginBottom: 12 }}
      >
        {eyebrow}
      </p>
      <p style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6, lineHeight: 1.3 }}>
        {label}
      </p>
      <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.55, margin: 0 }}>
        {description}
      </p>
      <span
        style={{
          position: "absolute",
          right: 20,
          bottom: 20,
          fontSize: 14,
          color: "var(--text-muted)",
          transition: "color 150ms ease-in-out",
        }}
      >
        →
      </span>
    </Link>
  )
}

