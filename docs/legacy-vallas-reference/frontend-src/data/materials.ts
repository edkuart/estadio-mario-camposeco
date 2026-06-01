export interface Material {
  name: string
  specification: string
  quantity: string
  unit: string
  unitCostMin: number
  unitCostMax: number
  currency: "GTQ"
  notes?: string
}

export interface MaterialCategory {
  id: string
  name: string
  materials: Material[]
}

export const MATERIALS_DISCLAIMER =
  "Precios referenciales basados en consultas informales a distribuidores en Guatemala (mayo 2026). Precios finales sujetos a cotización formal."

export const MATERIALS: MaterialCategory[] = [
  {
    id: "steel",
    name: "Acero Estructural",
    materials: [
      {
        name: "Perfil HSS cuadrado (columna principal)",
        specification: "HSS 8×8×1/2\" ASTM A-36, galvanizado",
        quantity: "2",
        unit: "unidades × 12m",
        unitCostMin: 18_000,
        unitCostMax: 24_000,
        currency: "GTQ",
        notes: "Sección hueca cuadrada para máxima resistencia torsional",
      },
      {
        name: "Viga horizontal tipo W",
        specification: "W8×31 ASTM A-36",
        quantity: "6",
        unit: "varillas × 9m",
        unitCostMin: 4_200,
        unitCostMax: 5_800,
        currency: "GTQ",
        notes: "Marco superior e inferior de la cartelera",
      },
      {
        name: "Ángulo estructural",
        specification: "L4×4×3/8\" ASTM A-36",
        quantity: "12",
        unit: "varillas × 6m",
        unitCostMin: 1_100,
        unitCostMax: 1_500,
        currency: "GTQ",
        notes: "Arriostres diagonales y bastidores secundarios",
      },
      {
        name: "Placa de base",
        specification: "Placa 16\"×16\"×1\" ASTM A-36, con pernos de anclaje L",
        quantity: "2",
        unit: "juegos",
        unitCostMin: 3_500,
        unitCostMax: 5_000,
        currency: "GTQ",
        notes: "Conexión columna–cimentación, incluye plantilla y pernos",
      },
      {
        name: "Tornillería de alta resistencia",
        specification: "ASTM A325, pernos 3/4\" con tuercas y arandelas",
        quantity: "1",
        unit: "lote",
        unitCostMin: 2_800,
        unitCostMax: 4_200,
        currency: "GTQ",
        notes: "Para todas las conexiones bridadas de la estructura",
      },
    ],
  },
  {
    id: "civil",
    name: "Materiales de Obra Civil",
    materials: [
      {
        name: "Cemento Portland tipo GU",
        specification: "Cemento gris estándar, bolsas 42.5 kg",
        quantity: "180 – 220",
        unit: "bolsas",
        unitCostMin: 55,
        unitCostMax: 65,
        currency: "GTQ",
        notes: "Para cimentación y muro de retención",
      },
      {
        name: "Varilla corrugada Grado 60",
        specification: "Varilla corrugada #4 (1/2\") y #6 (3/4\")",
        quantity: "1",
        unit: "lote",
        unitCostMin: 14_000,
        unitCostMax: 19_000,
        currency: "GTQ",
        notes: "Refuerzo de losa de cimentación y zapatas",
      },
      {
        name: "Piedrín 1/2\" triturado",
        specification: "Agregado grueso limpio",
        quantity: "12 – 16",
        unit: "m³",
        unitCostMin: 350,
        unitCostMax: 450,
        currency: "GTQ",
        notes: "Para concreto de cimentación",
      },
      {
        name: "Arena de río lavada",
        specification: "Módulo de finura 2.5–3.2",
        quantity: "8 – 12",
        unit: "m³",
        unitCostMin: 250,
        unitCostMax: 320,
        currency: "GTQ",
        notes: "Mezcla de concreto y mortero",
      },
      {
        name: "Block de concreto 15×20×40cm",
        specification: "Resistencia ≥ 35 kg/cm²",
        quantity: "400 – 600",
        unit: "unidades",
        unitCostMin: 6,
        unitCostMax: 8,
        currency: "GTQ",
        notes: "Muro de retención y cerramiento perimetral",
      },
    ],
  },
  {
    id: "surface",
    name: "Cartelera y Acabados",
    materials: [
      {
        name: "Lámina galvanizada calibre 22",
        specification: "Lámina acanalada galvanizada, protección Z275",
        quantity: "62",
        unit: "m²",
        unitCostMin: 120,
        unitCostMax: 160,
        currency: "GTQ",
        notes: "Superficie posterior de la cartelera (no visible desde frente)",
      },
      {
        name: "Vinilo de alta resistencia para cartelera",
        specification: "PVC 440g/m², impresión UV frontal",
        quantity: "60",
        unit: "m²",
        unitCostMin: 180,
        unitCostMax: 260,
        currency: "GTQ",
        notes: "Cara publicitaria. Se cambia con cada anunciante.",
      },
      {
        name: "Pintura epóxica industrial",
        specification: "Epóxico 2 componentes, espesor 200 micras, color negro mate",
        quantity: "20",
        unit: "galones",
        unitCostMin: 280,
        unitCostMax: 380,
        currency: "GTQ",
        notes: "Recubrimiento total de estructura metálica visible",
      },
      {
        name: "Pintura antioxidante primer",
        specification: "Alkyd sintético con inhibidor de óxido",
        quantity: "8",
        unit: "galones",
        unitCostMin: 160,
        unitCostMax: 220,
        currency: "GTQ",
        notes: "Primera capa sobre acero estructural",
      },
    ],
  },
  {
    id: "electrical",
    name: "Sistema Eléctrico e Iluminación",
    materials: [
      {
        name: "Luminaria LED tipo proyector",
        specification: "LED 150W, 5000K, IP65, factor de potencia > 0.95",
        quantity: "6",
        unit: "unidades",
        unitCostMin: 1_200,
        unitCostMax: 1_800,
        currency: "GTQ",
        notes: "Iluminación de cartelera desde abajo, angulada",
      },
      {
        name: "Conduit metálico rígido 2\"",
        specification: "EMT galvanizado, UL Listed",
        quantity: "60",
        unit: "tramos × 3m",
        unitCostMin: 85,
        unitCostMax: 120,
        currency: "GTQ",
        notes: "Canalización principal para futuro cableado LED",
      },
      {
        name: "Tablero de distribución 12 circuitos",
        specification: "Caja main de 100A, barras 200A, breakers GFCI incluidos",
        quantity: "1",
        unit: "unidad",
        unitCostMin: 3_500,
        unitCostMax: 5_000,
        currency: "GTQ",
        notes: "Capacidad expandible para futura pantalla LED",
      },
      {
        name: "Cable THHN #10 AWG",
        specification: "Copper THHN/THWN 600V, colores estándar",
        quantity: "1",
        unit: "lote",
        unitCostMin: 4_000,
        unitCostMax: 6_000,
        currency: "GTQ",
        notes: "Cableado completo de sistema de iluminación",
      },
      {
        name: "Temporizador astronómico",
        specification: "Timer digital programable, entrada 120V, salida relé 20A",
        quantity: "1",
        unit: "unidad",
        unitCostMin: 800,
        unitCostMax: 1_400,
        currency: "GTQ",
        notes: "Control automático de encendido/apagado por horario",
      },
    ],
  },
]
