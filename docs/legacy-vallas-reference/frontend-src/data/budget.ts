export interface BudgetItem {
  description: string
  unitMin: number
  unitMax: number
  currency: "GTQ"
  notes?: string
}

export interface BudgetCategory {
  id: string
  name: string
  items: BudgetItem[]
}

export const BUDGET_META = {
  version: "0.2",
  date: "Mayo 2026",
  currency: "GTQ" as const,
  disclaimer:
    "Estimados preliminares basados en investigación de mercado y consultas informales a contratistas y distribuidores en Guatemala. No representan cotizaciones formales. Los valores finales dependerán de cotizaciones reales, estudio de suelos, diseño estructural certificado (CIG) y condiciones de mercado al momento de contratación. Tributo municipal anual por anuncio: Q1,620/año (54 m² × Q30 según Decreto 34-2003).",
  totalMin: 185_000,
  totalMax: 245_000,
  contingencyPct: 0.1,
}

export const DOUBLE_FACE_SCENARIOS = [
  {
    name: "Base doble cara",
    size: "54 m² por cara",
    sellableArea: "108 m²",
    min: 240_000,
    max: 390_000,
    notes: "Extiende el proyecto actual a dos caras sin cambiar el formato base.",
  },
  {
    name: "Formato 8×8",
    size: "64 m² por cara",
    sellableArea: "128 m²",
    min: 280_000,
    max: 460_000,
    notes: "Piloto robusto con mejor lectura comercial que el formato base.",
  },
  {
    name: "Formato 8×12",
    size: "96 m² por cara",
    sellableArea: "192 m²",
    min: 380_000,
    max: 650_000,
    notes: "Mejor balance entre impacto visual, riesgo estructural e inversión.",
  },
  {
    name: "Formato 12×20",
    size: "240 m² por cara",
    sellableArea: "480 m²",
    min: 900_000,
    max: 1_800_000,
    notes: "Escala premium; requiere ingeniería, permisos y capital mucho más exigentes.",
  },
] as const

export const OPERATING_PROTECTION_ITEMS = [
  {
    name: "Seguro multiriesgo + responsabilidad civil",
    min: 4_500,
    max: 12_000,
    cadence: "anual",
    notes: "Prima base estimada con tarifas referenciales de 1.00%–1.50% según suma asegurada.",
  },
  {
    name: "Cámaras solares/4G y gabinete técnico",
    min: 6_000,
    max: 10_000,
    cadence: "instalación",
    notes: "Nivel operativo: 2 cámaras solares, 1 fija si hay energía, router 4G y gabinete IP65.",
  },
  {
    name: "Sistema de limpieza semiautomático",
    min: 5_000,
    max: 20_000,
    cadence: "instalación",
    notes: "Bomba, filtro, tubería protegida, boquillas de baja/media presión, timer y drenaje.",
  },
  {
    name: "Sistema solar para seguridad autónoma",
    min: 9_000,
    max: 18_000,
    cadence: "instalación",
    notes: "Paneles, batería LiFePO4, controlador MPPT, router 4G y respaldo para cámaras/gabinete.",
  },
] as const

export const SOLAR_POWER_SCENARIOS = [
  {
    name: "Solar mínimo",
    load: "2 cámaras solares 4G",
    min: 3_000,
    max: 6_000,
    recommendation: "Útil desde el inicio, pero no respalda router/NVR central.",
  },
  {
    name: "Solar operativo",
    load: "Cámaras, router, sensores y gabinete",
    min: 9_000,
    max: 18_000,
    recommendation: "Recomendado para vigilancia autónoma y resiliencia.",
  },
  {
    name: "Solar iluminación parcial",
    load: "Reflectores LED por horario limitado",
    min: 35_000,
    max: 60_000,
    recommendation: "Evaluar solo si la acometida es costosa o inestable.",
  },
  {
    name: "Solar iluminación doble cara",
    load: "Iluminación nocturna amplia con baterías",
    min: 60_000,
    max: 90_000,
    recommendation: "Requiere cálculo formal de cargas, baterías y días nublados.",
  },
] as const

export const BUDGET: BudgetCategory[] = [
  {
    id: "civil",
    name: "Obra Civil y Cimentación",
    items: [
      {
        description: "Estudio geotécnico y topografía",
        unitMin: 5_500,
        unitMax: 9_000,
        currency: "GTQ",
        notes: "Obligatorio antes de diseño estructural definitivo. Incluye capacidad portante, clasificación de suelo y nivel freático.",
      },
      {
        description: "Estabilización del talud (drenaje + cunetas)",
        unitMin: 5_000,
        unitMax: 9_000,
        currency: "GTQ",
        notes: "Geotextil + tubería perforada perimetral. Crítico en temporada lluviosa del altiplano (mayo–octubre).",
      },
      {
        description: "Movimiento de tierra, corte y compactación",
        unitMin: 8_000,
        unitMax: 14_000,
        currency: "GTQ",
        notes: "Preparación de plataforma horizontal en terreno inclinado ~35°. Compactación al 95% Proctor.",
      },
      {
        description: "Muro de retención perimetral",
        unitMin: 18_000,
        unitMax: 30_000,
        currency: "GTQ",
        notes: "Concreto armado tipo L o gravedad. Necesario para estabilizar corte y crear nivel de trabajo.",
      },
      {
        description: "Cimentación (zapata aislada sobredimensionada)",
        unitMin: 32_000,
        unitMax: 52_000,
        currency: "GTQ",
        notes: "Zapata 2.50×2.50×0.60 m, f'c = 280 kg/cm², Grado 60. Sobredimensionada para futura carga LED. Alternativa micropilotes si estudio indica suelo blando.",
      },
    ],
  },
  {
    id: "structure",
    name: "Estructura Metálica",
    items: [
      {
        description: "Fabricación de estructura (material + mano de obra)",
        unitMin: 55_000,
        unitMax: 75_000,
        currency: "GTQ",
        notes: "Perfiles ASTM A-36, HSS 250×10 columna principal. Corte, soldadura y ensamble en taller. Proveedores identificados: Interprice, Publivallas GT.",
      },
      {
        description: "Tratamiento anticorrosivo y pintura",
        unitMin: 8_000,
        unitMax: 13_000,
        currency: "GTQ",
        notes: "Galvanizado por inmersión + primer + epóxico. Garantiza vida útil > 20 años en intemperie tropical.",
      },
      {
        description: "Montaje e instalación (incluye grúa)",
        unitMin: 14_000,
        unitMax: 22_000,
        currency: "GTQ",
        notes: "Flete + grúa o camión pluma + mano de obra. Grúas de Guatemala cuenta con grúa propia para izaje en terreno inclinado.",
      },
    ],
  },
  {
    id: "cartelera",
    name: "Cartelera y Acabados",
    items: [
      {
        description: "Marco y estructura de cartelera",
        unitMin: 8_000,
        unitMax: 13_000,
        currency: "GTQ",
        notes: "Marco perimetral de aluminio o acero con tensores para vinilo. Prepara superficie para futura instalación de módulos LED.",
      },
      {
        description: "Primera impresión de vinilo publicitario (54 m²)",
        unitMin: 3_500,
        unitMax: 5_500,
        currency: "GTQ",
        notes: "Lona vinílica 440 g/m², impresión UV. Proveedores: Area2 Design, A Gran Formato (desde Q24.99/m²). Reemplazos futuros: Q2,500–4,000.",
      },
    ],
  },
  {
    id: "electrical",
    name: "Sistema Eléctrico e Iluminación",
    items: [
      {
        description: "Trámite de acometida eléctrica (DEOCSA)",
        unitMin: 3_000,
        unitMax: 6_000,
        currency: "GTQ",
        notes: "Gestión de conexión formal con DEOCSA (distribuidora en Salcajá). Incluye medidor trifásico.",
      },
      {
        description: "Tablero de distribución trifásico 100A",
        unitMin: 5_000,
        unitMax: 8_000,
        currency: "GTQ",
        notes: "12 circuitos GFCI, con espacio de expansión para futuro tablero LED.",
      },
      {
        description: "Sistema de iluminación LED perimetral",
        unitMin: 12_000,
        unitMax: 18_000,
        currency: "GTQ",
        notes: "6 proyectores LED 150W, 5000K + canalización conduit + cableado + control horario automático.",
      },
      {
        description: "Sistema de tierra física (≤ 5 Ω)",
        unitMin: 2_500,
        unitMax: 4_500,
        currency: "GTQ",
        notes: "Requerido por NEC/AGIES para estructuras metálicas expuestas.",
      },
    ],
  },
  {
    id: "professional",
    name: "Honorarios Profesionales",
    items: [
      {
        description: "Diseño estructural y memorias de cálculo (ingeniero CIG)",
        unitMin: 9_000,
        unitMax: 16_000,
        currency: "GTQ",
        notes: "Obligatorio: planos con firma, sello y timbre de ingeniero civil colegiado activo. Directorio CIG: cig.org.gt.",
      },
      {
        description: "Supervisión de obra",
        unitMin: 4_000,
        unitMax: 7_000,
        currency: "GTQ",
        notes: "Visitas de supervisión durante las fases críticas: cimentación, montaje y eléctrico.",
      },
      {
        description: "Diseño gráfico de primera arte publicitaria",
        unitMin: 2_000,
        unitMax: 4_000,
        currency: "GTQ",
        notes: "Opcional — si se subcontrata el diseño de la pieza publicitaria.",
      },
    ],
  },
  {
    id: "permits",
    name: "Permisos y Trámites",
    items: [
      {
        description: "Licencia de anuncio — Municipalidad de Salcajá",
        unitMin: 2_000,
        unitMax: 5_000,
        currency: "GTQ",
        notes: "Decreto 34-2003. Plazo legal de respuesta: 15 días. Dirección: 1ª Calle 2-28 Zona 1, Salcajá. Tel: 7768-8750.",
      },
      {
        description: "Tributo anual por anuncio (Decreto 34-2003)",
        unitMin: 1_620,
        unitMax: 1_620,
        currency: "GTQ",
        notes: "Q30/m² × 54 m² = Q1,620/año. Pago recurrente desde inicio de operación.",
      },
      {
        description: "Trámite DGAC — Aeropuerto Los Altos (MGQZ)",
        unitMin: 1_500,
        unitMax: 4_000,
        currency: "GTQ",
        notes: "El terreno está a ~3.4 km del Aeropuerto Los Altos. Consulta obligatoria antes de definir altura final. Incluye evaluación de cono de aproximación pista 05/23.",
      },
      {
        description: "Permisos de vía Dirección General de Caminos (si aplica)",
        unitMin: 1_500,
        unitMax: 4_000,
        currency: "GTQ",
        notes: "Para estructura a menos de 12 m del borde de la RN-1. Depende de la medición exacta del retiro.",
      },
    ],
  },
]
