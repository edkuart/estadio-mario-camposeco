export type ProjectStatus = "pre_licitacion" | "licitacion" | "obra" | "pausado" | "finalizado"

export const STADIUM_PROJECT = {
  name: "Estadio Mario Camposeco",
  shortName: "Mario Camposeco",
  tagline: "Observatorio documental de renovacion y ampliacion",
  fullName: "Proyecto de renovacion y ampliacion del Estadio Mario Camposeco — Quetzaltenango",
  location: "Zona 3, Quetzaltenango, Guatemala",
  locationDetail:
    "Estadio municipal historico utilizado por Xelaju MC, ubicado en un entorno urbano consolidado con intervencion reportada sobre la 14 avenida.",
  status: "pre_licitacion" as ProjectStatus,
  statusLabel: "Prelicitacion / expediente pendiente de Guatecompras",
  currentPhase: "Permisos, expediente tecnico y publicacion de contratacion pendiente",
  lastReviewed: "1 junio 2026",
  summary:
    "Plataforma de investigacion para documentar la historia, permisos, costos, actores, riesgos y posibles escenarios del proyecto de renovacion o ampliacion del Estadio Mario Camposeco en Quetzaltenango.",
  vision:
    "Construir un expediente publico navegable que separe hechos verificados, declaraciones, indicios, estimaciones y documentos oficiales, antes de convertir la informacion en dashboards dinamicos.",
  keyMetrics: {
    currentCapacity: "11.2K",
    projectedCapacity: ">20K",
    officialCost: "Pendiente",
    sourcesTracked: 17,
    criticalPermits: 6,
    riskAreas: 8,
  },
  highlights: [
    "El estadio fue inaugurado en 1950 y renombrado en 1951 en memoria de Mario Camposeco.",
    "El proyecto 2025-2026 se reporta como ampliacion de instalaciones deportivas y recreativas del estadio.",
    "El alcance publico menciona graderio norte, intervencion sobre 14 avenida, servicios, accesos y areas complementarias.",
    "IDAEH y MARN aparecen como permisos criticos en la fase previa a Guatecompras.",
    "El costo oficial no debe fijarse hasta localizar presupuesto, NOG, bases y renglones de contratacion.",
    "La viabilidad internacional debe compararse contra requerimientos FIFA y Concacaf, incluyendo logistica aeroportuaria.",
  ],
  phaseCards: [
    {
      label: "Fase documental",
      value: "Activa",
      detail: "Consolidar fuentes, timeline, actores, permisos, costos preliminares y riesgos.",
    },
    {
      label: "Siguiente hito",
      value: "Guatecompras",
      detail: "Localizar NOG, bases, presupuesto y cronograma oficial cuando se publique.",
    },
    {
      label: "Criterio rector",
      value: "Evidencia",
      detail: "Cada dato relevante debe enlazarse a fuente, documento o estado de verificacion.",
    },
  ],
} as const


