import type { ROIInputs } from "@/lib/roi-calculator"

export interface ROIScenario {
  id: string
  name: string
  description: string
  inputs: ROIInputs
  assumptions: string[]
}

export const ROI_DISCLAIMER =
  "Proyecciones financieras basadas en investigación directa del mercado OOH guatemalteco: tarifas publicadas de Satélite Publicidad (Q800–1,500/mes por 6×3m en suroccidente), rangos de operadores como ABG Medios y JCDecaux Latam, y análisis de corredores regionales. No garantizan resultados futuros. Ingresos reales dependen de negociación con anunciantes, ocupación real y condiciones de mercado al momento de operación."

export const ROI_CONTEXT = {
  marketDescription:
    "El mercado OOH en Guatemala opera con más de 1,000 ubicaciones de ABG Medios y 240+ vallas premium de Vallas de Guatemala. JCDecaux Latam tiene presencia en el corredor suroccidental incluyendo Quetzaltenango. El mercado DOOH en Latinoamérica alcanzó USD 1,000 millones en 2025 con proyección de USD 1,330 millones para 2030. Corredores regionales de primer orden como la RN-1 en Salcajá muestran alta demanda de anunciantes locales (bancos, cooperativas, servicios automotrices) con menor sensibilidad a ciclos económicos que grandes marcas nacionales.",
  revenueModel:
    "Arrendamiento del espacio publicitario a anunciantes locales o nacionales por períodos de 1–3 meses. La tarifa de Q12,000/mes base corresponde a un corredor regional de alto tráfico (RN-1, puerta a Quetzaltenango) con cartelera de 54 m² iluminada. Incluye cambio de vinilo y mantenimiento de iluminación.",
  referenceRates: {
    description: "Tarifas de referencia documentadas para el mercado guatemalteco (mayo 2026)",
    lowEnd: {
      monthly: 8_000,
      currency: "GTQ" as const,
      note: "Corredor regional secundario, valla 54m² sin diferenciación de ubicación",
    },
    midRange: {
      monthly: 12_000,
      currency: "GTQ" as const,
      note: "Corredor RN-1 alto tráfico, iluminada, entrada a ciudad intermedia — escenario base del proyecto",
    },
    premium: {
      monthly: 18_000,
      currency: "GTQ" as const,
      note: "Corredor periférico Ciudad de Guatemala o ubicación premium con exclusividad probada",
    },
  },
}

export const ROI_SCENARIOS: ROIScenario[] = [
  {
    id: "conservative",
    name: "Conservador",
    description: "Ocupación baja y tarifa mínima. Escenario pesimista para validar viabilidad base del proyecto.",
    inputs: {
      initialInvestment: 234_000,
      monthlyRevenue: 8_000,
      monthlyCosts: 2_200,
      occupancyRate: 0.60,
      discountRate: 0.14,
      years: 7,
    },
    assumptions: [
      "Inversión total al límite superior del presupuesto (Q234,000)",
      "Tarifa de Q8,000/mes — extremo bajo para corredor regional tipo RN-1",
      "Ocupación del 60% — 4.8 meses vacíos al año (peor caso en corredor subatendido)",
      "Costos operativos: electricidad Q900, mantenimiento Q900, tributo DGAC + municipal Q400",
      "Tasa de descuento 14% anual (costo de capital conservador para Guatemala)",
    ],
  },
  {
    id: "base",
    name: "Base",
    description: "Tarifa y ocupación en línea con el mercado documentado para corredores regionales de primer orden.",
    inputs: {
      initialInvestment: 205_000,
      monthlyRevenue: 12_000,
      monthlyCosts: 1_800,
      occupancyRate: 0.80,
      discountRate: 0.12,
      years: 7,
    },
    assumptions: [
      "Inversión en punto medio del presupuesto (Q205,000)",
      "Tarifa de Q12,000/mes — corredor RN-1 alto tráfico, entrada a Quetzaltenango",
      "Ocupación del 80% — 2.4 meses vacíos al año, consistente con corredores regionales documentados",
      "Costos operativos: electricidad Q800, mantenimiento Q600, tributo anual Q1,620/12 = Q135",
      "Tasa de descuento 12% anual",
    ],
  },
  {
    id: "optimistic",
    name: "Optimista",
    description: "Alta ocupación con tarifa premium. Aplica si la ubicación es validada como corredor de alta demanda en los primeros 12 meses.",
    inputs: {
      initialInvestment: 185_000,
      monthlyRevenue: 16_000,
      monthlyCosts: 1_500,
      occupancyRate: 0.92,
      discountRate: 0.10,
      years: 7,
    },
    assumptions: [
      "Inversión con eficiencias en construcción y sin imprevistos (Q185,000)",
      "Tarifa de Q16,000/mes — validada tras ocupación sostenida ≥ 85% en primer año",
      "Ocupación del 92% — prácticamente sin períodos vacíos, contratos de 3+ meses",
      "Costos operativos mínimos con contratos a largo plazo y bajo mantenimiento",
      "Tasa de descuento 10% anual — menor riesgo percibido por historial de ocupación",
    ],
  },
]
