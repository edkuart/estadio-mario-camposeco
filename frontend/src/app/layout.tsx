import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Syne } from "next/font/google"
import "./globals.css"

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Estadio Mario Camposeco — Observatorio de renovación",
    template: "%s | Estadio Mario Camposeco",
  },
  description:
    "Plataforma documental para investigar y visualizar el proyecto de renovación y ampliación del Estadio Mario Camposeco en Quetzaltenango, Guatemala.",
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full bg-bg-base text-text-primary antialiased">{children}</body>
    </html>
  )
}


