export interface EngineeringSpec {
  label: string
  value: string
  unit?: string
  notes?: string
}

export interface EngineeringCategory {
  id: string
  name: string
  description: string
  specs: EngineeringSpec[]
}

export const ENGINEERING_DISCLAIMER =
  "Especificaciones preliminares basadas en análisis de terreno visual, coordenadas GPS verificadas y normas AGIES NSE 2-2024 / ACI 318-19. Requieren validación por ingeniero civil colegiado (CIG) antes de construcción. Velocidad de viento de diseño confirmada: 100 km/h para Salcajá según tabla municipal AGIES NSE 2."

export const ENGINEERING: EngineeringCategory[] = [
  {
    id: "foundation",
    name: "Cimentación",
    description:
      "Opción recomendada: zapata aislada con plataforma escalonada sobre terreno natural no perturbado. Sobredimensionada para futura carga LED. Micropilotes como alternativa si el estudio geotécnico revela suelo blando.",
    specs: [
      { label: "Opción recomendada", value: "Zapata aislada + plataforma escalonada", notes: "Solución más económica para ladera competente. Zapata horizontal sobre terreno natural." },
      { label: "Dimensiones típicas de zapata", value: "2.50 × 2.50 × 0.60", unit: "m", notes: "Con pedestal 0.80 × 0.80 m para conexión a columna metálica" },
      { label: "Profundidad de desplante", value: "2.0 – 4.0", unit: "m", notes: "Mayor profundidad en ladera para alcanzar terreno natural firme no perturbado" },
      { label: "Resistencia del concreto", value: "f'c = 280", unit: "kg/cm²", notes: "Mínimo para exposición a intemperie según ACI 318-19" },
      { label: "Acero de refuerzo", value: "Grado 60 — fy = 4,200 kg/cm²", notes: "Según ACI 318-19 / AGIES NSE 7.1" },
      { label: "Alternativa en suelo blando", value: "Micropilotes inyectados", notes: "4–6 micropilotes de ø100–300 mm, L = 8–15 m hasta roca o suelo firme. Proveedor: Grupo ITSA / PILOTECMAR" },
      { label: "Capacidad portante mínima requerida", value: "≥ 10", unit: "ton/m²", notes: "A confirmar con estudio geotécnico. Suelo volcánico del altiplano típicamente 8–15 ton/m²." },
      { label: "Factor sobredimensionamiento LED", value: "1.5 ×", unit: "carga LED diseño", notes: "Diseñar para 1.5× la carga de una pantalla LED de 54 m². Costo incremental < 20% de la zapata." },
    ],
  },
  {
    id: "structure",
    name: "Estructura Metálica",
    description: "Perfiles de acero A-36 con tratamiento anticorrosivo galvanizado + epóxico para clima tropical húmedo del altiplano.",
    specs: [
      { label: "Tipo de acero", value: "ASTM A-36", notes: "Estándar para estructuras de acero en Guatemala. Fy = 2,530 kg/cm²." },
      { label: "Perfil columna principal", value: "HSS 250×10 o equivalente", notes: "Sección hueca cuadrada de alta resistencia torsional, dimensionada para momento de volteo ~500 kN·m" },
      { label: "Perfil viga horizontal", value: "W8×31 o equivalente", notes: "Perfil en W para el marco de la cartelera" },
      { label: "Tornillería", value: "Grado A325 alta resistencia", notes: "Conexiones bridadas tipo momento" },
      { label: "Tratamiento superficial", value: "Galvanizado + primer + epóxico", notes: "Vida útil estimada > 20 años en intemperie tropical" },
      { label: "Altura total de estructura", value: "12", unit: "m", notes: "Desde nivel de terreno hasta borde superior. Altura efectiva sobre vía: ~14 m por pendiente natural." },
      { label: "Área de cartelera", value: "54", unit: "m²", notes: "9 m × 6 m. Orientación y dimensión definitiva a confirmar con DGAC y municipalidad." },
      { label: "Peso estimado de estructura", value: "3,200 – 4,500", unit: "kg", notes: "Excluyendo cimentación" },
    ],
  },
  {
    id: "wind",
    name: "Carga de Viento",
    description:
      "Velocidad de diseño confirmada para Salcajá: 100 km/h según tabla municipal AGIES NSE 2-2024. Exposición C (corredor de carretera abierta). Factor de topografía Kzt a evaluar por pendiente ~35°.",
    specs: [
      { label: "Velocidad básica de diseño (Vb)", value: "100", unit: "km/h", notes: "Confirmado en tabla municipal AGIES NSE 2 para Salcajá, Quetzaltenango." },
      { label: "Norma aplicada", value: "AGIES NSE 2-2024 + ASCE 7-22 Cap. 29", notes: "Norma nacional + referencia internacional para estructuras especiales (carteleras)" },
      { label: "Categoría de exposición", value: "C", notes: "Terreno abierto con pocas obstrucciones < 9 m. Aplica a corredor de carretera RN-1." },
      { label: "Factor de topografía Kzt", value: "1.0 – 1.3", notes: "A evaluar por pendiente ≥ 35°. Puede incrementar presión de diseño hasta 30%." },
      { label: "Presión de diseño sobre cartelera", value: "0.75 – 0.80", unit: "kPa", notes: "Para Ce = 1.20, Cq = 1.35, qs ≈ 0.48 kPa a 12 m de altura" },
      { label: "Fuerza horizontal total estimada", value: "40.5 – 43.2", unit: "kN", notes: "~4.1 – 4.4 toneladas-fuerza sobre la cartelera de 54 m²" },
      { label: "Momento de volteo en base", value: "~486 – 518", unit: "kN·m", notes: "Factor de diseño dominante para columna y cimentación" },
      { label: "Factor de ráfaga", value: "G = 0.85", notes: "Para estructuras rígidas según ASCE 7-22" },
    ],
  },
  {
    id: "electrical",
    name: "Sistema Eléctrico",
    description:
      "Instalación preparada desde construcción para iluminación actual y futura expansión LED. Servicio eléctrico provisto por DEOCSA en la zona de Salcajá.",
    specs: [
      { label: "Proveedor de energía", value: "DEOCSA", notes: "Distribuidora eléctrica que opera en Salcajá y occidente de Guatemala" },
      { label: "Acometida", value: "Trifásica 220V / 60Hz", notes: "Capacidad para futura pantalla LED P10 de 54 m² (~15–18 kW)" },
      { label: "Capacidad instalada", value: "30", unit: "kVA", notes: "Sobredimensionada vs. demanda actual ~8 kVA. Sin cambio de acometida al convertir a LED." },
      { label: "Sistema de iluminación actual", value: "LED perimetral 5000K alta eficiencia", notes: "6 proyectores LED 150W orientados hacia cartelera" },
      { label: "Consumo estimado iluminación", value: "1.2 – 1.8", unit: "kW", notes: "Operación nocturna 12h/día. ~Q 600–900/mes." },
      { label: "Canalización", value: "Conduit metálico 2\" + 1\"", notes: "Rutas pre-instaladas para futuro cableado LED sin abrir muros" },
      { label: "Tablero de distribución", value: "12 circuitos GFCI", notes: "Con espacio para expansión sin rehacer la instalación" },
      { label: "Sistema de tierra física", value: "≤ 5 Ω", notes: "Requerido por NEC y AGIES para estructuras metálicas expuestas" },
    ],
  },
  {
    id: "access",
    name: "Acceso Técnico",
    description: "Diseño incorpora acceso seguro para mantenimiento rutinario y futuras intervenciones técnicas.",
    specs: [
      { label: "Escalera de acceso posterior", value: "Empotrada, acero galvanizado", notes: "Peldaños antideslizantes y guarda-cuerpo lateral" },
      { label: "Plataforma de mantenimiento", value: "Nivel superior de cartelera", notes: "Ancho mínimo 60 cm, con rodapié y barandal" },
      { label: "Gabinete técnico", value: "1.2 × 0.8", unit: "m", notes: "Posterior inferior para controladores y equipos eléctricos" },
      { label: "Carga viva plataforma", value: "250", unit: "kg/m²", notes: "Dimensionada para 2 técnicos + herramienta" },
    ],
  },
]
