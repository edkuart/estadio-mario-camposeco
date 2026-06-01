export function formatCurrency(
  amount: number,
  currency: "GTQ" | "USD" = "GTQ",
  compact = false
): string {
  if (compact) {
    if (amount >= 1_000_000) return `${currency} ${(amount / 1_000_000).toFixed(1)}M`
    if (amount >= 1_000) return `${currency} ${(amount / 1_000).toFixed(0)}K`
  }
  return `${currency} ${amount.toLocaleString("es-GT")}`
}

export function formatRange(min: number, max: number, currency: "GTQ" | "USD" = "GTQ"): string {
  return `${currency} ${min.toLocaleString("es-GT")} – ${max.toLocaleString("es-GT")}`
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ")
}

