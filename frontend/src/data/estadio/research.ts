export type StadiumResearchCategory = "Historia" | "Permisos" | "Contratacion" | "Tecnico" | "Costos" | "Riesgos" | "Comparables"
export type StadiumResearchRelevance = "Critica" | "Alta" | "Media" | "Referencial"

export interface StadiumResearchArticle {
  slug: string
  title: string
  summary: string
  category: StadiumResearchCategory
  relevance: StadiumResearchRelevance
  status: "inicial" | "pendiente_fuente_primaria" | "corroborar" | "oficial"
  sourceLabel: string
  date: string
}

export const STADIUM_RESEARCH: StadiumResearchArticle[] = [
  {
    slug: "expediente-guatecompras",
    title: "Expediente Guatecompras pendiente",
    summary:
      "La publicacion del NOG, bases, presupuesto y cronograma definira el alcance contractual real del proyecto.",
    category: "Contratacion",
    relevance: "Critica",
    status: "pendiente_fuente_primaria",
    sourceLabel: "Guatecompras / Municipalidad de Quetzaltenango",
    date: "Pendiente",
  },
  {
    slug: "idae-patrimonio",
    title: "IDAEH y condicion patrimonial",
    summary:
      "La intervencion del IDAEH debe documentarse con resolucion, condicionantes y alcance permitido sobre elementos historicos.",
    category: "Permisos",
    relevance: "Critica",
    status: "pendiente_fuente_primaria",
    sourceLabel: "IDAEH / Ministerio de Cultura y Deportes",
    date: "2026",
  },
  {
    slug: "marn-ambiental",
    title: "Instrumento ambiental MARN",
    summary:
      "El proyecto requiere trazabilidad de instrumento ambiental, categoria, medidas de mitigacion y fecha de aprobacion.",
    category: "Permisos",
    relevance: "Alta",
    status: "pendiente_fuente_primaria",
    sourceLabel: "MARN",
    date: "2026",
  },
  {
    slug: "concacaf-fifa",
    title: "Cumplimiento FIFA y Concacaf",
    summary:
      "La ampliacion debe compararse contra requisitos de cancha, iluminacion, seguridad, broadcast, accesos y logistica internacional.",
    category: "Tecnico",
    relevance: "Alta",
    status: "inicial",
    sourceLabel: "FIFA Stadium Guidelines / Concacaf Stadium Guidelines",
    date: "2026",
  },
  {
    slug: "costos-parametricos",
    title: "Modelo preliminar de costos",
    summary:
      "Antes del presupuesto oficial, los costos deben mostrarse por escenarios y componentes, nunca como cifra definitiva.",
    category: "Costos",
    relevance: "Alta",
    status: "inicial",
    sourceLabel: "Modelo propio basado en comparables y referencias publicas",
    date: "2026",
  },
  {
    slug: "riesgos-proyecto",
    title: "Matriz inicial de riesgos",
    summary:
      "Riesgos politicos, financieros, tecnicos, patrimoniales, urbanos y de contratacion deben quedar visibles desde el MVP.",
    category: "Riesgos",
    relevance: "Alta",
    status: "inicial",
    sourceLabel: "Analisis documental interno",
    date: "2026",
  },
]

