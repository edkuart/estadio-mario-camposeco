export type StadiumTimelineStatus = "verified" | "reported" | "pending" | "conflict"
export type StadiumTimelineCategory = "historico" | "obra" | "permiso" | "contratacion" | "politico" | "tecnico"

export interface StadiumTimelineEvent {
  id: string
  date: string
  precision: "exacta" | "mes" | "anio" | "aproximada"
  title: string
  description: string
  category: StadiumTimelineCategory
  status: StadiumTimelineStatus
  sourceLabel: string
}

export const STADIUM_TIMELINE: StadiumTimelineEvent[] = [
  {
    id: "inauguracion-1950",
    date: "1950-09-08",
    precision: "exacta",
    title: "Inauguracion del Estadio Escolar",
    description:
      "El recinto se inaugura como infraestructura deportiva de Quetzaltenango en el contexto de los Juegos Centroamericanos y del Caribe de 1950.",
    category: "historico",
    status: "reported",
    sourceLabel: "Fuentes historicas secundarias; pendiente archivo municipal",
  },
  {
    id: "nombre-1951",
    date: "1951",
    precision: "anio",
    title: "Cambio de nombre a Mario Camposeco",
    description:
      "El estadio adopta el nombre de Mario Salvador Camposeco Lopez, futbolista quetzalteco de Xelaju y seleccion nacional.",
    category: "historico",
    status: "reported",
    sourceLabel: "Fuentes historicas secundarias",
  },
  {
    id: "drenaje-1999",
    date: "1999",
    precision: "anio",
    title: "Mejoras de cancha y drenaje",
    description:
      "Referencias historicas mencionan remodelacion del terreno de juego y drenaje tipo frances.",
    category: "obra",
    status: "reported",
    sourceLabel: "Pendiente fuente primaria",
  },
  {
    id: "graderio-sur-2005",
    date: "2005",
    precision: "anio",
    title: "Ampliacion de graderio sur",
    description:
      "SEGEPLAN registra antecedente de ampliacion del graderio sur con referencia presupuestaria historica.",
    category: "obra",
    status: "verified",
    sourceLabel: "SEGEPLAN/SNIP historico 2005",
  },
  {
    id: "comude-2025",
    date: "2025-10-15",
    precision: "exacta",
    title: "Aprobacion/socializacion COMUDE reportada",
    description:
      "Cobertura local reporta aprobacion o socializacion del proyecto de ampliacion en COMUDE Quetzaltenango.",
    category: "politico",
    status: "reported",
    sourceLabel: "Prensa local; falta acta COMUDE",
  },
  {
    id: "render-2025",
    date: "2025-10-24",
    precision: "exacta",
    title: "Presentacion publica de render",
    description:
      "Se reporta presentacion municipal de render y concepto de ampliacion del estadio.",
    category: "tecnico",
    status: "reported",
    sourceLabel: "Medios; falta repositorio oficial de renders",
  },
  {
    id: "diseno-2025",
    date: "2025-12-02",
    precision: "exacta",
    title: "Xelaju MC informa diseno de remodelacion",
    description:
      "Xelaju MC y medios reportan presentacion del diseno con apoyo municipal y Direccion Municipal de Planificacion.",
    category: "politico",
    status: "reported",
    sourceLabel: "Comunicacion publica/reportes de medios",
  },
  {
    id: "idae-2026",
    date: "2026-01-23",
    precision: "exacta",
    title: "Inspeccion IDAEH reportada",
    description:
      "Se reporta inspeccion del IDAEH por consideraciones patrimoniales del estadio.",
    category: "permiso",
    status: "reported",
    sourceLabel: "Prensa; falta resolucion/expediente IDAEH",
  },
  {
    id: "fase-final-2026",
    date: "2026-05-05",
    precision: "exacta",
    title: "Alcaldia reporta fase final previa a Guatecompras",
    description:
      "Autoridades reportan avance ambiental y tramite final, con posible publicacion posterior en Guatecompras.",
    category: "contratacion",
    status: "reported",
    sourceLabel: "Declaracion reportada; falta NOG",
  },
  {
    id: "guatecompras-pending",
    date: "2026-06",
    precision: "mes",
    title: "Publicacion en Guatecompras pendiente",
    description:
      "La publicacion de bases, NOG, presupuesto y cronograma es el hito critico para pasar de investigacion preliminar a seguimiento contractual.",
    category: "contratacion",
    status: "pending",
    sourceLabel: "Pendiente fuente oficial",
  },
]

