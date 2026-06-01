export type RiskCategory = "politico" | "financiero" | "tecnico" | "legal" | "patrimonial" | "ambiental" | "social" | "contratacion" | "operativo"

export interface StadiumRisk {
  id: string
  category: RiskCategory
  title: string
  probability: "baja" | "media" | "alta"
  impact: "bajo" | "medio" | "alto"
  severity: "moderado" | "alto" | "critico"
  description: string
  mitigation: string
  sourceIds: string[]
}

export const STADIUM_RISKS: StadiumRisk[] = [
  {
    id: "nog-missing",
    category: "contratacion",
    title: "Ausencia de NOG y bases publicas",
    probability: "media",
    impact: "alto",
    severity: "critico",
    description: "Sin Guatecompras no hay costo oficial, renglones, cronograma ni reglas de adjudicacion.",
    mitigation: "Monitorear Guatecompras y solicitar expediente municipal.",
    sourceIds: ["guatecompras-nog"],
  },
  {
    id: "patrimonio-idae",
    category: "patrimonial",
    title: "Condiciones patrimoniales no documentadas",
    probability: "media",
    impact: "alto",
    severity: "critico",
    description: "La intervencion podria estar condicionada por materiales o valor historico del estadio.",
    mitigation: "Localizar resolucion IDAEH y registrar condicionantes.",
    sourceIds: ["idae-resolucion", "medios-guatefutbol-idae"],
  },
  {
    id: "aforo-conred",
    category: "tecnico",
    title: "Aforo prometido distinto al autorizado",
    probability: "alta",
    impact: "medio",
    severity: "alto",
    description: "La capacidad final depende de evacuacion, accesos, anchos, servicios y dictamen competente.",
    mitigation: "Separar capacidad de diseno, capacidad con asientos y aforo autorizado.",
    sourceIds: ["concacaf-guidelines-2026"],
  },
  {
    id: "sobrecosto-14-avenida",
    category: "financiero",
    title: "Sobrecosto por intervencion urbana",
    probability: "media",
    impact: "alto",
    severity: "alto",
    description: "Construir o intervenir sobre via publica puede elevar costos estructurales, permisos y plazos.",
    mitigation: "Exigir planos, estudio de movilidad, presupuesto separado y contingencia.",
    sourceIds: ["medios-regionmas-2026"],
  },
  {
    id: "concacaf-logistics",
    category: "operativo",
    title: "Limitaciones logisticas para competencias internacionales",
    probability: "alta",
    impact: "alto",
    severity: "critico",
    description: "Aunque el estadio mejore, requisitos de aeropuerto, hoteles, broadcast y operacion pueden limitar avales.",
    mitigation: "Evaluar cumplimiento Concacaf como checklist independiente del proyecto de obra.",
    sourceIds: ["concacaf-guidelines-2026"],
  },
  {
    id: "fase-incompleta",
    category: "politico",
    title: "Proyecto dividido en fases incompletas",
    probability: "alta",
    impact: "medio",
    severity: "alto",
    description: "Componentes como tribuna, camerinos o servicios podrian quedar para otra administracion.",
    mitigation: "Diferenciar alcance contractual de vision futura y documentar cambios de fase.",
    sourceIds: ["concejo-acta-proyecto"],
  },
]

