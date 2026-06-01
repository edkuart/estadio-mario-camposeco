export type ResearchCategory =
  | "Estructural"
  | "Normativo"
  | "Mercado"
  | "Tecnología LED"
  | "Financiero"
  | "Ubicación"
  | "Seguridad"
  | "Societario"
  | "Operación"
  | "Energía Solar"

export type ResearchRelevance = "Alta" | "Media" | "Informativa"

export interface ResearchArticle {
  slug: string
  title: string
  summary: string
  category: ResearchCategory
  relevance: ResearchRelevance
  source?: string
  date: string
  readingMinutes: number
}

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    slug: "mercado-ooh-guatemala",
    title: "Mercado OOH en Guatemala: Tendencias y Tarifas 2025–2026",
    summary:
      "Análisis del mercado de publicidad exterior en Guatemala con datos de operadores activos (ABG, JCDecaux, Vallas de Guatemala, Satélite Publicidad), tarifas referenciales por segmento y perfil de anunciantes en el corredor CA-1 suroccidental.",
    category: "Mercado",
    relevance: "Alta",
    source: "ABG Medios · JCDecaux Latam · Vallas de Guatemala · Satélite Publicidad · BusinessResearchInsights OOH Market 2026",
    date: "Mayo 2026",
    readingMinutes: 9,
  },
  {
    slug: "viento-norma-agies",
    title: "Cargas de Viento según AGIES NSE 2 para Estructuras Publicitarias",
    summary:
      "Norma guatemalteca AGIES NSE 2 (edición 2024) aplicada a estructuras tipo cartelera en Salcajá, Quetzaltenango. Velocidad de diseño confirmada: 100 km/h. Coeficientes de exposición, presiones de diseño y metodología de cálculo para el proyecto específico.",
    category: "Estructural",
    relevance: "Alta",
    source: "AGIES NSE 2-2024 (BETA) · CONRED · ASCE 7-22 Capítulo 29",
    date: "Mayo 2026",
    readingMinutes: 10,
  },
  {
    slug: "cimentacion-terreno-inclinado",
    title: "Cimentaciones Especiales en Terreno Inclinado: Consideraciones para Estructuras de Publicidad Exterior",
    summary:
      "Análisis de opciones de cimentación para ladera pronunciada (~35°): zapata aislada con plataforma escalonada, losa de cimentación y micropilotes. Incluye referencia a ACI 318-19, AGIES NSE 2.1, y proveedores especializados en Guatemala.",
    category: "Estructural",
    relevance: "Alta",
    source: "ACI 318-19 · AGIES NSE 2.1-2024 · Grupo ITSA/PILOTECMAR · CUNOC USAC",
    date: "Mayo 2026",
    readingMinutes: 11,
  },
  {
    slug: "normativa-legal-guatemala",
    title: "Marco Legal y Normativo — Valla Publicitaria en Salcajá, Quetzaltenango",
    summary:
      "Análisis completo del marco regulatorio aplicable al proyecto: Constitución de Guatemala, Decreto 34-2003 (Ley de Anuncios), requisitos del CIG, DGAC, y estado actual de la normativa municipal de Salcajá. Incluye mapa de trámites y vacíos identificados.",
    category: "Normativo",
    relevance: "Alta",
    source: "Congreso de Guatemala / CIG / Municipalidad de Salcajá / DGAC — Investigación directa Mayo 2026",
    date: "Mayo 2026",
    readingMinutes: 10,
  },
  {
    slug: "ubicacion-km194-rn1-salcaja",
    title: "Análisis de Ubicación — Km. 194, RN-1, Salcajá, Quetzaltenango",
    summary:
      "Análisis detallado de la ubicación exacta del proyecto: corredor comercial Km. 194 RN-1, contexto demográfico de Salcajá, establecimientos vecinos, distancia confirmada al Aeropuerto Los Altos (3.4 km) y por qué esta posición es estratégica para publicidad exterior.",
    category: "Ubicación",
    relevance: "Alta",
    source: "PROVIAL · Wikipedia MGQZ · Ojoconmipisto · Municipalidad de Salcajá · Google Maps — Mayo 2026",
    date: "Mayo 2026",
    readingMinutes: 8,
  },
  {
    slug: "led-vs-convencional",
    title: "Pantalla LED vs Valla Convencional: Análisis Financiero Comparativo para el Mercado Guatemalteco",
    summary:
      "Comparativa de inversión, costos operativos e ingresos entre valla convencional e instalación LED para 54 m². Precios 2025 de módulos P10/P8, proveedores locales (Corpotek, LEDEC) y hoja de ruta de conversión en el año 3–4.",
    category: "Tecnología LED",
    relevance: "Alta",
    source: "Corpotek Guatemala · LEDEC Group · LED Screen Factory 2025 · IAM LED Wall · Análisis mercado OOH",
    date: "Mayo 2026",
    readingMinutes: 12,
  },
  {
    slug: "doble-cara-costos-operacion",
    title: "Escenario Doble Cara: Costos, Superficie Vendible y Riesgos Estructurales",
    summary:
      "Actualización del alcance del proyecto para operar con dos caras publicitarias. Incluye impacto en inversión, estructura, paneles, mantenimiento, limpieza y lectura de los rangos anotados para formatos 8×8, 8×12 y 12×20.",
    category: "Operación",
    relevance: "Alta",
    source: "Investigación de mercado Guatemala · Degrafik · El Arenal · SENABED · Satélite Publicidad",
    date: "Mayo 2026",
    readingMinutes: 9,
  },
  {
    slug: "seguros-camaras-autonomia",
    title: "Seguros, Cámaras y Autonomía Operativa para una Valla Remota",
    summary:
      "Mapa de protección para amenazas externas: seguro multiriesgo, responsabilidad civil, cámaras solares/4G, gabinete técnico, limpieza semiautomática y criterios de mantenimiento para reducir visitas manuales.",
    category: "Seguridad",
    relevance: "Alta",
    source: "BAM Seguro Pyme · Kemik · Solant · iSolar · Seir Guatemala",
    date: "Mayo 2026",
    readingMinutes: 10,
  },
  {
    slug: "sociedad-anonima-inversionistas",
    title: "Sociedad Anónima para Inversionistas: Conveniencia, Alternativas y Pacto de Socios",
    summary:
      "Análisis de la S.A. como vehículo para juntar capital entre varias personas, comparada contra S.R.L. y contrato de participación. Incluye pasos, costos, obligaciones y reglas internas recomendadas.",
    category: "Societario",
    relevance: "Alta",
    source: "Código de Comercio de Guatemala · Registro Mercantil · Living in Guatemala 2026",
    date: "Mayo 2026",
    readingMinutes: 8,
  },
  {
    slug: "energia-solar-valla-autonoma",
    title: "Energía Solar para la Valla: Iluminación, Cámaras y Operación Autónoma",
    summary:
      "Evaluación de sistemas solares para el proyecto: cámaras 4G, iluminación nocturna, respaldo de gabinete técnico, alternativas híbridas con red eléctrica y rangos de inversión para Guatemala.",
    category: "Energía Solar",
    relevance: "Alta",
    source: "MEM Guatemala · Pointer Solar 2026 · Yupi Solar · Chipcom · Global Solar Atlas",
    date: "Mayo 2026",
    readingMinutes: 9,
  },
]
