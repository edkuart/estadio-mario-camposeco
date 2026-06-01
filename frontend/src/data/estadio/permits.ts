export type PermitStatus = "pendiente" | "reportado" | "en_revision" | "aprobado_reportado" | "oficial_localizado" | "no_evaluable"

export interface StadiumPermit {
  id: string
  name: string
  entity: string
  status: PermitStatus
  priority: "critica" | "alta" | "media"
  whyItMatters: string
  missingEvidence: string
}

export const STADIUM_PERMITS: StadiumPermit[] = [
  { id: "guatecompras", name: "NOG / bases de contratacion", entity: "Guatecompras / Municipalidad", status: "pendiente", priority: "critica", whyItMatters: "Define presupuesto, alcance contractual, cronograma, modalidad y oferentes.", missingEvidence: "NOG, bases, anexos, presupuesto por renglones y cronograma." },
  { id: "idae", name: "Autorizacion patrimonial", entity: "IDAEH", status: "aprobado_reportado", priority: "critica", whyItMatters: "Condiciona intervenciones sobre elementos historicos y materiales existentes.", missingEvidence: "Resolucion, condiciones, expediente y planos aprobados." },
  { id: "marn", name: "Instrumento ambiental", entity: "MARN", status: "aprobado_reportado", priority: "alta", whyItMatters: "Define categoria ambiental, mitigaciones y obligaciones de cumplimiento.", missingEvidence: "Resolucion ambiental, instrumento y medidas de mitigacion." },
  { id: "conred", name: "Seguridad humana y aforo", entity: "CONRED / autoridad competente", status: "pendiente", priority: "critica", whyItMatters: "El aforo real depende de evacuacion, rutas, senalizacion, anchos y gestion de eventos.", missingEvidence: "Dictamen, plan de emergencia, calculo de evacuacion y aforo autorizado." },
  { id: "segeplan", name: "SNIP / perfil de proyecto", entity: "SEGEPLAN", status: "pendiente", priority: "alta", whyItMatters: "Permite rastrear formulacion publica, objetivos, financiamiento y evaluacion.", missingEvidence: "Codigo SNIP/SINIP, perfil, dictamen y ficha publica." },
  { id: "concejo", name: "Actas municipales", entity: "Concejo Municipal / COMUDE", status: "reportado", priority: "alta", whyItMatters: "Sustenta aprobaciones politicas, financiamiento, uso de via publica y decisiones de alcance.", missingEvidence: "Actas COMUDE, actas de Concejo, acuerdos y votaciones." },
  { id: "via-publica", name: "Intervencion de via publica", entity: "Municipalidad / dependencias viales", status: "pendiente", priority: "alta", whyItMatters: "La intervencion sobre 14 avenida requiere soporte tecnico, movilidad, seguridad y autorizacion.", missingEvidence: "Estudio de movilidad, planos, permisos de cierre/intervencion y mitigaciones." },
]

