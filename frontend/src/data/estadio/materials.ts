export interface StadiumMaterialCategory {
  id: string
  name: string
  description: string
  materials: {
    name: string
    specification: string
    unit: string
    referenceRange: string
    notes: string
  }[]
}

export const MATERIALS_DISCLAIMER =
  "Catalogo inicial para investigacion. Las especificaciones finales deben salir de planos, memoria estructural, bases y presupuesto oficial."

export const STADIUM_MATERIALS: StadiumMaterialCategory[] = [
  {
    id: "estructura",
    name: "Estructura",
    description: "Materiales de soporte para graderios, losas, columnas, vigas y cubierta si aplica.",
    materials: [
      { name: "Concreto premezclado", specification: "f'c segun memoria estructural", unit: "m3", referenceRange: "Q1,400-Q1,900", notes: "Validar resistencia, bombeo, aditivos y ensayos." },
      { name: "Acero de refuerzo", specification: "Grado 60 o especificacion final", unit: "kg / varilla", referenceRange: "por planilla", notes: "Requiere despiece, diametros y desperdicio." },
      { name: "Acero estructural", specification: "ASTM A36/A572 segun diseno", unit: "kg / perfil", referenceRange: "por cotizacion", notes: "Incluye fabricacion, pintura, galvanizado y montaje." },
    ],
  },
  {
    id: "graderios",
    name: "Graderios y asientos",
    description: "Componentes asociados al aforo y circulacion de espectadores.",
    materials: [
      { name: "Prefabricados o concreto in situ", specification: "graderio estructural", unit: "asiento / modulo", referenceRange: "por diseno", notes: "Definir sistema constructivo antes de estimar." },
      { name: "Butacas", specification: "UV, numeracion, fijacion antivandalica", unit: "asiento", referenceRange: "Q250-Q900", notes: "Diferenciar general, preferencia y VIP." },
      { name: "Barandas y pasamanos", specification: "acero galvanizado/pintado", unit: "metro lineal", referenceRange: "por cotizacion", notes: "Relacionado con CONRED y evacuacion." },
    ],
  },
  {
    id: "instalaciones",
    name: "Instalaciones",
    description: "Sistemas hidrosanitarios, electricos, pluviales y de seguridad.",
    materials: [
      { name: "Tuberia pluvial", specification: "diametros segun hidrologia", unit: "metro lineal", referenceRange: "por diseno", notes: "Critico por lluvia y drenajes historicos." },
      { name: "Cableado y tableros", specification: "capacidad para iluminacion y emergencia", unit: "global", referenceRange: "por carga", notes: "Debe incluir respaldo para sistemas criticos." },
      { name: "Luminarias deportivas", specification: "LED, lux TV segun objetivo", unit: "sistema", referenceRange: "Q4M-Q18M", notes: "Validar con medicion luminica y estandar Concacaf." },
    ],
  },
  {
    id: "acabados",
    name: "Acabados y operacion",
    description: "Acabados de areas publicas y complementarias.",
    materials: [
      { name: "Pisos antideslizantes", specification: "alto trafico", unit: "m2", referenceRange: "por cotizacion", notes: "Aplicable en banos, pasillos y zonas de servicio." },
      { name: "Senalizacion", specification: "evacuacion, accesibilidad y sectores", unit: "global", referenceRange: "por alcance", notes: "Debe alinearse con plan de seguridad humana." },
      { name: "Cesped / sistema de cancha", specification: "natural o sintetico certificado", unit: "cancha", referenceRange: "Q4M-Q20M", notes: "Separar si no entra en fase contractual inicial." },
    ],
  },
]

