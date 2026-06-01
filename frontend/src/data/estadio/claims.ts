export type ClaimStatus = "oficial" | "corroborado" | "reportado" | "pendiente" | "contradictorio"

export interface StadiumClaim {
  id: string
  type: "capacidad" | "costo" | "alcance" | "permiso" | "fecha" | "actor" | "tecnico"
  statement: string
  value?: string
  status: ClaimStatus
  confidence: "alta" | "media" | "baja" | "pendiente"
  sourceIds: string[]
  note: string
}

export const STADIUM_CLAIMS: StadiumClaim[] = [
  {
    id: "capacity-current",
    type: "capacidad",
    statement: "La capacidad actual se reporta alrededor de 11,000 a 11,226 espectadores.",
    value: "~11.2K",
    status: "reportado",
    confidence: "media",
    sourceIds: ["segeplan-2005"],
    note: "Debe validarse con ficha tecnica, aforo autorizado y condiciones CONRED.",
  },
  {
    id: "capacity-projected",
    type: "capacidad",
    statement: "El proyecto busca superar los 20,000 espectadores.",
    value: ">20K",
    status: "reportado",
    confidence: "media",
    sourceIds: ["medios-regionmas-2026"],
    note: "No debe tratarse como aforo oficial hasta tener planos y dictamen de seguridad.",
  },
  {
    id: "cost-official-pending",
    type: "costo",
    statement: "El costo oficial del proyecto aun no esta publicado en el expediente revisado.",
    value: "Pendiente",
    status: "pendiente",
    confidence: "alta",
    sourceIds: ["guatecompras-nog"],
    note: "El presupuesto oficial depende de bases y NOG.",
  },
  {
    id: "scope-14-avenida",
    type: "alcance",
    statement: "El alcance reportado incluye intervencion sobre la 14 avenida.",
    value: "14 avenida",
    status: "reportado",
    confidence: "media",
    sourceIds: ["medios-regionmas-2026"],
    note: "Requiere planos, permisos viales y estudio de movilidad.",
  },
  {
    id: "idae-approval-reported",
    type: "permiso",
    statement: "Medios reportan inspeccion o aval del IDAEH.",
    value: "Reportado",
    status: "reportado",
    confidence: "baja",
    sourceIds: ["medios-guatefutbol-idae", "idae-resolucion"],
    note: "La resolucion oficial aun debe localizarse.",
  },
  {
    id: "guatecompras-next-step",
    type: "fecha",
    statement: "La publicacion en Guatecompras fue presentada como siguiente paso.",
    value: "Pendiente",
    status: "reportado",
    confidence: "media",
    sourceIds: ["medios-regionmas-2026", "guatecompras-nog"],
    note: "Monitorear hasta encontrar NOG real.",
  },
]

