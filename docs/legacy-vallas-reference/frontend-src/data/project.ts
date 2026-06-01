export type ProjectStatus =
  | "planning"
  | "permitting"
  | "construction"
  | "operational"
  | "suspended"

export const PROJECT = {
  name: "Valla GT",
  tagline: "Infraestructura publicitaria metálica premium",
  fullName: "Proyecto de Valla Publicitaria Metálica Premium — Salcajá, Quetzaltenango",
  location: "Km. 194 Ruta Nacional RN-1, Salcajá, Quetzaltenango",
  locationDetail: "Corredor interurbano Guatemala–Quetzaltenango. Primer punto de alto tráfico a la entrada de la metrópoli occidental del país.",
  status: "planning" as ProjectStatus,
  statusLabel: "Planificación",
  startDate: "Q2 2026",
  constructionTarget: "Q3–Q4 2026",
  operationalTarget: "Q4 2026",

  summary:
    "Desarrollo de estructura publicitaria metálica de alta resistencia en el Km. 194 de la RN-1, Salcajá, Quetzaltenango — corredor principal Guatemala–Quetzaltenango. Terreno en ladera sobre el Río Samalá con elevación natural que incrementa la visibilidad sin costo adicional. Diseñada con sobredimensionamiento inteligente para conversión futura a pantalla LED sin demoler la infraestructura base.",

  vision:
    "El proyecto no busca construir la pantalla LED más avanzada del mercado hoy. Busca construir la infraestructura más sólida en la ubicación más estratégica del corredor occidental, preparada para escalar cuando el retorno lo justifique.",

  keyMetrics: {
    heightMeters: 12,
    faceAreaM2: 54,
    doubleFaceAreaM2: 108,
    slopeAngleDeg: 35,
    investmentMin: 180_000,
    investmentMax: 234_000,
    currency: "GTQ" as const,
    projectedMonthlyRevenue: 12_000,
    estimatedPaybackMonths: 24,
  },

  highlights: [
    "Ubicación estratégica en Km. 194 RN-1 — puerta de entrada a Quetzaltenango, segunda ciudad de Guatemala, con flujo vehicular interurbano continuo",
    "Escenario comercial actualizado: operación doble cara, con 54 m² por lado y 108 m² vendibles si ambas orientaciones tienen lectura limpia",
    "Ventaja topográfica: ladera hacia el Río Samalá eleva la cartelera ~14 m sobre el nivel de la vía sin necesidad de columna más alta",
    "Cimentación sobredimensionada (1.5× carga LED) diseñada desde el inicio para futura conversión sin demolición",
    "Velocidad de viento de diseño confirmada: 100 km/h para Salcajá (AGIES NSE 2-2024). Estructura calculada para momento de volteo ~500 kN·m",
    "Sistema eléctrico trifásico 30 kVA instalado desde el inicio — sin cambio de acometida al convertir a pantalla LED",
    "Estrategia solar híbrida: red eléctrica para iluminación principal y energía solar con batería para cámaras, router 4G y respaldo del gabinete técnico",
    "Marco normativo identificado: Decreto 34-2003, CIG (planos firmados), DGAC (aeropuerto MGQZ a 3.4 km), Municipalidad de Salcajá",
  ],

  ledRoadmap: {
    summary:
      "La transición a pantalla LED está planificada para el año 3–4 de operación, condicionada a ocupación real ≥ 70% y validación del mercado de anunciantes en la ubicación específica.",
    currentPhase: "Valla convencional iluminada, estructura metálica premium",
    futurePhase: "Pantalla LED P10 modular de alta resolución (evaluación en año 3)",
    estimatedConversionCost: { min: 207_000, max: 324_000, currency: "GTQ" as const },
    preparedComponents: [
      "Cimentación dimensionada para 1.5× la carga de pantalla LED de 54 m²",
      "Acometida eléctrica trifásica 30 kVA — sin cambio al instalar LED",
      "Marco estructural posterior con puntos de anclaje para gabinetes LED",
      "Área de equipamiento técnico para controladores, fuentes y conectividad",
    ],
  },
} as const
