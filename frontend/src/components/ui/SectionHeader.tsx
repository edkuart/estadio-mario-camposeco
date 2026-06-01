interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ eyebrow, title, description, className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-12 min-w-0 max-w-full ${className}`}>
      <p
        className="font-mono"
        style={{
          fontSize: 10.5,
          textTransform: "uppercase",
          letterSpacing: 0,
          color: "var(--text-muted)",
          marginBottom: 14,
        }}
      >
        {eyebrow}
      </p>
      <h1
        className="font-display text-[34px] sm:text-[44px] break-words"
        style={{
          fontWeight: 700,
          letterSpacing: 0,
          lineHeight: 1.08,
          color: "var(--text-primary)",
          margin: 0,
          maxWidth: "100%",
        }}
      >
        {title}
      </h1>
      {description && (
        <p
          className="break-words"
          style={{
            marginTop: 18,
            color: "var(--text-secondary)",
            lineHeight: 1.65,
            maxWidth: 640,
            width: "100%",
            fontSize: 15,
          }}
        >
          {description}
        </p>
      )}
    </div>
  )
}

