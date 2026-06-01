export const TERRAIN = {
  disclaimer:
    "Datos basados en observación visual del sitio, análisis satelital y coordenadas GPS verificadas (14.861560°N, 91.470278°O). Estudio geotécnico formal requerido previo a construcción.",

  overview: {
    description:
      "El terreno se ubica en el Km. 194 de la Ruta Nacional RN-1 (Carretera Interamericana), municipio de Salcajá, Quetzaltenango. La ladera desciende hacia el Río Samalá al este, generando una inclinación natural de ~35° que eleva la base de la cartelera sobre el nivel de la vía — ventaja de visibilidad sin costo adicional en altura de columna. El corredor es el eje vial principal del occidente de Guatemala, con flujo continuo de tráfico interurbano entre Ciudad de Guatemala y Quetzaltenango (segunda ciudad del país).",
    advantage:
      "La pendiente natural hacia el Río Samalá posiciona la cartelera por encima del nivel de la calzada sin necesidad de una columna más alta, incrementando la visibilidad desde ambos sentidos de tráfico a menor costo estructural.",
  },

  physical: [
    { label: "Pendiente del terreno", value: "~35", unit: "°", notes: "Ladera hacia Río Samalá. Medición visual + análisis satelital" },
    { label: "Área disponible para construcción", value: "~80", unit: "m²", notes: "Superficie plana proyectada tras corte y compactación" },
    { label: "Tipo de suelo probable", value: "Limo volcánico / Arcilla limosa", notes: "Suelo volcánico típico del altiplano de Quetzaltenango. Confirmar con estudio geotécnico." },
    { label: "Nivel freático estimado", value: "> 3.0", unit: "m de profundidad", notes: "Bajo riesgo de interferencia con cimentación; monitorear en temporada lluviosa" },
    { label: "Riesgo de deslizamiento", value: "Moderado sin intervención", notes: "Control mediante muro de retención perimetral y drenaje" },
    { label: "Vegetación existente", value: "Escasa, arbustos", notes: "Remoción sencilla, sin necesidad de maquinaria pesada" },
    { label: "Elemento hidrográfico", value: "Río Samalá", notes: "Al costado este del terreno. Define la pendiente y el nivel de terreno natural." },
  ],

  location: {
    route: "Ruta Nacional RN-1 (Carretera Interamericana)",
    km: "Km. 194",
    municipality: "Salcajá",
    department: "Quetzaltenango",
    coordinates: "14.861560°N, 91.470278°O",
    airportProximity: "~3.4 km al Aeropuerto Los Altos (MGQZ/AAZ) — consulta DGAC obligatoria",
  },

  surroundings: [
    { name: "CEMIC Quetzaltenango", type: "Hospital especializado", notes: "Ubicado exactamente en Km. 194 RN-1. Generador de tráfico constante." },
    { name: "FERROALTOS S.A.", type: "Ferretería industrial", notes: "Sobre vía principal" },
    { name: "Auto Ventas Ryd", type: "Concesionario de automóviles", notes: "Fachada sobre la RN-1" },
    { name: "Autotronic Solutions", type: "Electromecánica automotriz", notes: "Taller especializado" },
    { name: "Magic Car Wash", type: "Lavado de autos", notes: "Comercio de paso" },
    { name: "Taller de Silenciadores J & W", type: "Taller automotriz", notes: "Sobre la carretera" },
    { name: "Pollo Crispys", type: "Restaurante", notes: "Comercio de alimentación" },
    { name: "Wrk trabajo", type: "Centro comercial", notes: "Al costado del río" },
  ],

  access: [
    { label: "Acceso vehicular", value: "Sí, vía secundaria", notes: "Suficiente para camión pluma y transporte de materiales" },
    { label: "Distancia a acometida eléctrica", value: "~40", unit: "m", notes: "Poste de distribución existente en vía principal (DEOCSA)" },
    { label: "Distancia a vía principal (RN-1)", value: "~15", unit: "m", notes: "Retiro desde borde de carretera — mínimo reglamentario 12 m según Decreto 34-2003" },
    { label: "Aeropuerto más cercano", value: "Los Altos (MGQZ)", notes: "3.4 km en línea recta. Requiere consulta DGAC antes de definir altura final." },
  ],

  visibility: [
    { label: "Visibilidad desde norte", value: "≥ 300", unit: "m", notes: "Dirección GC → Quetzaltenango. Sin obstrucciones identificadas." },
    { label: "Visibilidad desde sur", value: "≥ 200", unit: "m", notes: "Dirección Quetzaltenango → GC. Ligera curva reduce distancia efectiva." },
    { label: "Ángulo de visibilidad horizontal", value: "~140", unit: "°", notes: "Cobertura en ambas direcciones de tráfico" },
    { label: "Altura efectiva de cartelera", value: "~14", unit: "m sobre nivel de vía", notes: "Suma de pendiente natural + columna de 12 m. Ventaja diferencial vs terreno plano." },
  ],

  interventions: [
    {
      type: "Estabilización del talud",
      description: "Cunetas y muro perimetral para desviar aguas de lluvia del área de cimentación. Crítico en altiplano con temporada lluviosa intensa (mayo–octubre). Incluye geotextil + tubería perforada para drenaje interno.",
      estimatedCost: { min: 8_000, max: 14_000, currency: "GTQ" as const },
    },
    {
      type: "Muro de retención",
      description: "Muro de concreto armado tipo gravedad o en L para estabilizar el corte de terreno y crear la plataforma de trabajo horizontal. Puede ser de mampostería de block, concreto ciclópeo o gaviones según altura de corte.",
      estimatedCost: { min: 18_000, max: 28_000, currency: "GTQ" as const },
    },
    {
      type: "Corte y relleno",
      description: "Movimiento de tierra para crear nivel de trabajo plano de ~20 m². Las zapatas deben desplantarse sobre terreno natural no perturbado — no sobre relleno.",
      estimatedCost: { min: 8_000, max: 14_000, currency: "GTQ" as const },
    },
    {
      type: "Compactación",
      description: "Compactación al 95% Proctor Estándar de la superficie de desplante. Esperar 2–4 semanas en suelos cohesivos antes de fundir cimentación.",
      estimatedCost: { min: 3_000, max: 6_000, currency: "GTQ" as const },
    },
  ],
}
