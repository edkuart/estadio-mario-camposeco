interface DisclaimerProps {
  text: string
  className?: string
}

export function Disclaimer({ text, className = "" }: DisclaimerProps) {
  return (
    <div
      className={`flex gap-3 rounded-[10px] ${className}`}
      style={{
        border: "1px solid rgba(242,201,76,0.20)",
        background: "rgba(242,201,76,0.04)",
        padding: "16px 20px",
        alignItems: "flex-start",
      }}
    >
      <span style={{ color: "#f2c94c", fontSize: 14, marginTop: 1, flexShrink: 0 }}>⚠</span>
      <p style={{ margin: 0, fontSize: 12.5, color: "var(--text-secondary)", lineHeight: 1.65 }}>
        {text}
      </p>
    </div>
  )
}

