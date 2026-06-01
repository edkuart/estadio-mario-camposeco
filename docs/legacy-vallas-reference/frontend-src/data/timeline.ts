export type PhaseStatus = "completed" | "in_progress" | "pending"

export interface TimelinePhase {
  id: string
  order: number
  name: string
  description: string
  status: PhaseStatus
  period: string
  milestones: string[]
}

export const TIMELINE: TimelinePhase[] = [
  {
    id: "research",
    order: 1,
    name: "Investigación y Planificación",
    description:
      "Análisis de mercado OOH, investigación técnica y normativa, definición del modelo de negocio y estructura financiera preliminar. Terreno identificado y georreferenciado.",
    status: "in_progress",
    period: "Abril – Mayo 2026",
    milestones: [
      "Terreno identificado: Km. 194 RN-1, Salcajá, Quetzaltenango (14.861560°N, 91.470278°O)",
      "Velocidad de viento de diseño confirmada: 100 km/h para Salcajá (AGIES NSE 2-2024)",
      "Marco legal documentado: Decreto 34-2003, CIG, DGAC, Municipalidad de Salcajá",
      "Aeropuerto MGQZ identificado a 3.4 km — consulta DGAC planificada",
      "Mercado OOH documentado: operadores activos, tarifas referenciales y perfil de anunciantes",
      "Análisis comparativo LED vs. convencional con precios 2025 de proveedores locales",
      "Directorio de 16 proveedores identificados por especialidad",
      "Estimados de costo preliminares establecidos (Q185K–Q245K)",
      "Plataforma de presentación para inversores en desarrollo",
    ],
  },
  {
    id: "legal",
    order: 2,
    name: "Estructura Legal y Financiera",
    description:
      "Constitución de la entidad legal del proyecto, acuerdo entre socios, estructura de aportaciones y primeras gestiones de financiamiento.",
    status: "pending",
    period: "Junio 2026",
    milestones: [
      "Acuerdo de socios firmado con estructura de participación definida",
      "Entidad legal constituida ante el Registro Mercantil de Guatemala",
      "Capital inicial comprometido por socios fundadores",
      "Cuenta bancaria del proyecto abierta",
      "Verificación de titularidad del terreno y estado registral",
    ],
  },
  {
    id: "engineering",
    order: 3,
    name: "Diseño e Ingeniería",
    description:
      "Contratación de ingeniero civil colegiado (CIG), estudio geotécnico, diseño estructural certificado con Vb = 100 km/h, memorias de cálculo y cotizaciones formales.",
    status: "pending",
    period: "Julio 2026",
    milestones: [
      "Ingeniero civil colegiado activo contratado (directorio CIG: cig.org.gt)",
      "Estudio geotécnico ejecutado: capacidad portante, clasificación de suelo, nivel freático",
      "Diseño de cimentación definido (zapata aislada o micropilotes según resultado geotécnico)",
      "Diseño estructural aprobado para Vb = 100 km/h, Exposición C, factor topografía Kzt",
      "Planos constructivos firmados, sellados y timbrados por ingeniero colegiado",
      "Consulta DGAC gestionada con coordenadas GPS del terreno",
      "Cotizaciones formales obtenidas de mínimo 2 proveedores por especialidad",
    ],
  },
  {
    id: "permits",
    order: 4,
    name: "Permisos y Trámites",
    description:
      "Gestión de licencia de anuncio ante Municipalidad de Salcajá, permiso DGAC (aeropuerto MGQZ a 3.4 km) y gestiones de vía ante Dirección General de Caminos.",
    status: "pending",
    period: "Agosto 2026",
    milestones: [
      "Expediente municipal presentado en Salcajá (1ª Calle 2-28 Zona 1, tel: 7768-8750)",
      "Licencia de anuncio solicitada bajo Decreto 34-2003 — plazo legal de respuesta: 15 días",
      "Permiso DGAC gestionado con planos firmados y coordenadas GPS",
      "Gestión ante Dirección General de Caminos (retiro de vía RN-1 verificado)",
      "Todas las aprobaciones obtenidas antes de inicio de obra",
    ],
  },
  {
    id: "construction",
    order: 5,
    name: "Construcción",
    description:
      "Ejecución de obra civil (muro de retención, cimentación), fabricación y montaje de estructura metálica, e instalación del sistema eléctrico por DEOCSA y técnicos certificados.",
    status: "pending",
    period: "Septiembre – Octubre 2026",
    milestones: [
      "Drenaje y cunetas de estabilización del talud ejecutados",
      "Muro de retención perimetral construido",
      "Cimentación ejecutada (zapata + pedestal), curado mínimo 28 días",
      "Estructura metálica fabricada en taller con tratamiento galvanizado + epóxico",
      "Izaje y montaje de estructura con grúa (coordinar con proveedor con equipo propio)",
      "Acometida eléctrica trifásica tramitada y conectada con DEOCSA",
      "Sistema de iluminación LED instalado y certificado",
      "Primera arte publicitaria instalada y tensa",
    ],
  },
  {
    id: "operation",
    order: 6,
    name: "Operación Comercial",
    description:
      "Inicio de comercialización del espacio publicitario en el corredor RN-1 Salcajá. Seguimiento de KPIs de ocupación y preparación de hoja de ruta de conversión LED para año 3.",
    status: "pending",
    period: "Noviembre 2026 en adelante",
    milestones: [
      "Primer anunciante contratado (objetivo: institución financiera o telecomunicaciones)",
      "Primer mes de ingresos generado",
      "Protocolo de mantenimiento mensual establecido",
      "Seguimiento de KPIs: tasa de ocupación mensual, tarifa promedio, días vacíos",
      "Evaluación de conversión LED en mes 36 si ocupación promedio ≥ 70%",
    ],
  },
]
