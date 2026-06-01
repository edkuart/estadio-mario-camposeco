export type SupplierStatus = "identificado" | "por_validar" | "posible_oferente" | "adjudicado" | "descartado"

export interface StadiumSupplier {
  id: string
  name: string
  specialty: string
  location: string
  website?: string
  notes: string
  status: SupplierStatus
}

export const SUPPLIERS_DISCLAIMER =
  "Directorio preliminar de mercado. Ninguna empresa listada esta vinculada oficialmente al proyecto salvo que aparezca en Guatecompras o contrato publico."

export const STADIUM_SUPPLIERS: StadiumSupplier[] = [
  { id: "mixto-listo", name: "Mixto Listo / Cementos Progreso", specialty: "Concreto", location: "Guatemala", website: "https://www.mixtolisto.com/", notes: "Proveedor potencial de concreto premezclado y soluciones asociadas.", status: "identificado" },
  { id: "concretum", name: "Concretum Premezclados", specialty: "Concreto", location: "Guatemala", website: "https://www.concretumgt.com/", notes: "Alternativa de mercado para concreto premezclado; validar cobertura en occidente.", status: "por_validar" },
  { id: "conacero", name: "Conacero", specialty: "Acero", location: "Guatemala", website: "https://www.conacero.com.gt/", notes: "Proveedor potencial de acero y perfiles; validar experiencia y capacidad.", status: "identificado" },
  { id: "tecnimetal", name: "Tecnimetal", specialty: "Estructura metalica", location: "Guatemala", website: "https://tecnimetal.com.gt/", notes: "Empresa de estructura metalica; revisar portafolio comparable.", status: "por_validar" },
  { id: "avg", name: "AVG Centroamerica", specialty: "Cancha / grama", location: "Centroamerica", website: "https://avgcentroamerica.com/", notes: "Proveedor regional de superficies deportivas con referencias FIFA; validar alcance real.", status: "identificado" },
  { id: "bien-prendido", name: "Grupo Bien Prendido", specialty: "Iluminacion", location: "Guatemala", website: "https://www.grupobienprendido.com.gt/", notes: "Proveedor potencial para iluminacion; validar experiencia deportiva TV.", status: "por_validar" },
  { id: "supervision", name: "Supervisor de obra por definir", specialty: "Supervision", location: "Quetzaltenango / Guatemala", notes: "Debe definirse por proceso formal, experiencia y ausencia de conflicto de interes.", status: "por_validar" },
  { id: "laboratorio", name: "Laboratorio de suelos y materiales por definir", specialty: "Estudios tecnicos", location: "Quetzaltenango / Guatemala", notes: "Critico para suelos, concreto, acero, compactacion y control de calidad.", status: "por_validar" },
]

export const SUPPLIER_SPECIALTIES = [
  "Concreto",
  "Acero",
  "Estructura metalica",
  "Iluminacion",
  "Cancha / grama",
  "Supervision",
  "Estudios tecnicos",
] as const

