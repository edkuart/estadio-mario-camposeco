"use client"

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-text-secondary transition-colors"
    >
      <span className="text-[10px]">⊡</span>
      Imprimir / Guardar PDF
    </button>
  )
}

