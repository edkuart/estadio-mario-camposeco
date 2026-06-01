export interface StadiumCostItem {
  name: string
  unit: string
  quantity: string
  min: number
  max: number
  notes: string
  costType: "estimado" | "oficial_pendiente" | "referencial" | "comparable"
}

export interface StadiumCostCategory {
  id: string
  name: string
  description: string
  items: StadiumCostItem[]
}

export const COST_META = {
  version: "0.1",
  date: "Mayo 2026",
  currency: "GTQ" as const,
  disclaimer:
    "Rangos preliminares para modelado. No son presupuesto oficial. Deben reemplazarse por renglones de Guatecompras, planos, cantidades y contrato adjudicado cuando existan.",
  contingencyPct: 0.12,
}

export const COST_SCENARIOS = [
  {
    name: "Conservador",
    amount: "Q62M-Q109M",
    description: "Graderio y servicios basicos, menor complejidad urbana y acabados contenidos.",
  },
  {
    name: "Intermedio",
    amount: "Q109M-Q218M",
    description: "Graderios, accesos, servicios, MEP, VIP moderado, contingencia y supervision.",
  },
  {
    name: "Alto",
    amount: "Q218M-Q351M",
    description: "Intervencion urbana compleja, palcos, museo, broadcast, iluminacion TV y estandar internacional.",
  },
] as const

export const COST_CATEGORIES: StadiumCostCategory[] = [
  {
    id: "estructura",
    name: "Estructura y graderios",
    description: "Elementos principales de ampliacion, soporte, graderios y estructura metalica.",
    items: [
      { name: "Concreto estructural", unit: "m3", quantity: "por definir", min: 1400, max: 1900, notes: "Rango unitario referencial; requiere planos y cantidades.", costType: "referencial" },
      { name: "Acero de refuerzo", unit: "kg / lote", quantity: "por definir", min: 60, max: 90, notes: "Debe calcularse por memoria estructural y planillas de acero.", costType: "referencial" },
      { name: "Estructura metalica", unit: "kg / m lineal", quantity: "por definir", min: 750, max: 2300, notes: "Depende de perfiles, uniones, galvanizado y montaje.", costType: "referencial" },
      { name: "Graderios", unit: "asiento agregado", quantity: "9K-11K estimados", min: 5500, max: 27000, notes: "Rango amplio segun complejidad, cimentacion, acabados y circulaciones.", costType: "estimado" },
    ],
  },
  {
    id: "urbanizacion",
    name: "Urbanizacion y accesos",
    description: "Intervenciones sobre entorno urbano, accesos, circulaciones y posible afectacion de 14 avenida.",
    items: [
      { name: "Urbanizacion exterior", unit: "m2", quantity: "por definir", min: 500, max: 1500, notes: "Pavimentos, bordillos, drenajes, senalizacion y obra complementaria.", costType: "referencial" },
      { name: "Accesos y circulaciones", unit: "global", quantity: "por definir", min: 1500000, max: 8500000, notes: "Rampas, pasillos, escaleras, barandas, torniquetes o control de ingreso.", costType: "estimado" },
      { name: "Intervencion 14 avenida", unit: "global", quantity: "por definir", min: 3000000, max: 18000000, notes: "Alto riesgo de variacion por estructura sobre via publica, movilidad y permisos.", costType: "estimado" },
    ],
  },
  {
    id: "servicios",
    name: "Servicios y areas complementarias",
    description: "Banos, camerinos, palcos, museo, cafeterias y areas de operacion.",
    items: [
      { name: "Banos y sistemas sanitarios", unit: "m2", quantity: "por definir", min: 4000, max: 9000, notes: "Incluye instalaciones hidrosanitarias, acabados y ventilacion.", costType: "referencial" },
      { name: "Camerinos", unit: "m2", quantity: "fase futura", min: 5000, max: 11000, notes: "Puede pertenecer a segunda etapa segun alcance contractual.", costType: "estimado" },
      { name: "Palcos/VIP", unit: "m2", quantity: "por definir", min: 6500, max: 15000, notes: "Acabados, estructura, instalaciones y operacion elevan costo unitario.", costType: "estimado" },
      { name: "Museo y cafeterias", unit: "m2", quantity: "por definir", min: 4500, max: 12000, notes: "Requiere definir si forma parte del contrato o vision futura.", costType: "estimado" },
    ],
  },
  {
    id: "tecnico",
    name: "Sistemas tecnicos deportivos",
    description: "Equipamiento para operacion deportiva, television, seguridad y experiencia del publico.",
    items: [
      { name: "Iluminacion deportiva LED", unit: "sistema", quantity: "1", min: 4000000, max: 18000000, notes: "Depende de lux, TV, torres, respaldo electrico y medicion luminica.", costType: "estimado" },
      { name: "Pantalla / videoboard", unit: "unidad", quantity: "1+", min: 1000000, max: 8000000, notes: "Tamano, resolucion, estructura y control definen rango.", costType: "estimado" },
      { name: "Cancha, drenaje y riego", unit: "global", quantity: "1", min: 5000000, max: 20000000, notes: "Si entra al alcance, debe separarse de graderios.", costType: "estimado" },
      { name: "CCTV, sonido y centro de control", unit: "global", quantity: "1", min: 1500000, max: 9000000, notes: "Relacionado con seguridad, evacuacion y eventos masivos.", costType: "estimado" },
    ],
  },
]

export function getCostCategoryTotal(category: StadiumCostCategory) {
  return category.items.reduce(
    (total, item) => ({ min: total.min + item.min, max: total.max + item.max }),
    { min: 0, max: 0 }
  )
}

