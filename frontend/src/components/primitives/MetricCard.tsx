"use client"

import { AnimatedCounter } from "./AnimatedCounter"

interface MetricCardProps {
  label: string
  value: string | number
  unit?: string
  description?: string
  accent?: boolean
}

export function MetricCard({ label, value, unit, description, accent = false }: MetricCardProps) {
  return (
    <div
      className="group flex flex-col gap-2.5 rounded-[10px] p-5 transition-all duration-150"
      style={{
        minHeight: 132,
        border: accent
          ? "1px solid rgba(193,18,31,0.30)"
          : "1px solid rgba(255,255,255,0.07)",
        background: accent ? "rgba(193,18,31,0.08)" : "var(--bg-card)",
        boxShadow: accent ? "inset 0 1px 0 rgba(193,18,31,0.05)" : undefined,
      }}
      onMouseEnter={e => {
        if (!accent) (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.14)"
      }}
      onMouseLeave={e => {
        if (!accent) (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.07)"
      }}
    >
      <p
        className="font-mono"
        style={{
          fontSize: 10.5,
          textTransform: "uppercase",
          letterSpacing: 0,
          color: "var(--text-muted)",
          margin: 0,
        }}
      >
        {label}
      </p>
      <div className="flex items-baseline gap-1.5">
        <span
          className="font-display"
          style={{
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 0,
            lineHeight: 1,
            color: accent ? "var(--accent)" : "var(--text-primary)",
          }}
        >
          {typeof value === "number" ? <AnimatedCounter value={value} /> : value}
        </span>
        {unit && (
          <span className="font-mono" style={{ fontSize: 13, color: "var(--text-secondary)" }}>
            {unit}
          </span>
        )}
      </div>
      {description && (
        <p
          style={{
            fontSize: 11.5,
            color: "var(--text-secondary)",
            lineHeight: 1.55,
            margin: 0,
            marginTop: "auto",
          }}
        >
          {description}
        </p>
      )}
    </div>
  )
}


