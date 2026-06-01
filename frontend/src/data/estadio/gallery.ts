export type GalleryStatus = "localizado" | "pendiente" | "por_solicitar"
export type GalleryKind = "render" | "foto" | "plano" | "mapa" | "comparable"

export interface GalleryItem {
  id: string
  title: string
  kind: GalleryKind
  status: GalleryStatus
  sourceId: string
  sourceUrl?: string
  imageUrl?: string
  license?: string
  credit?: string
  notes: string
}

export interface GalleryGroup {
  id: string
  label: string
  eyebrow: string
  description: string
  items: GalleryItem[]
}

const commonsFile = (fileName: string) => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(fileName)}`

export const GALLERY_GROUPS: GalleryGroup[] = [
  {
    id: "renders",
    label: "Renderizaciones oficiales y publicas",
    eyebrow: "01",
    description: "Versiones publicadas o reportadas del diseno de ampliacion. Deben separarse de planos aprobados y alcance contractual.",
    items: [
      {
        id: "render-nuevo-estadio-wikimedia",
        title: "Render publico del nuevo Estadio Mario Camposeco",
        kind: "render",
        status: "localizado",
        sourceId: "wikimedia-render-nuevo-estadio",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Nuevo_Estadio_Mario_Camposeco.png",
        imageUrl: commonsFile("Nuevo Estadio Mario Camposeco.png"),
        license: "Revisar ficha Wikimedia antes de uso final",
        credit: "Wikimedia Commons",
        notes: "Sirve como evidencia visual preliminar. No confirma presupuesto, planos, ni alcance contratado.",
      },
      {
        id: "render-presentacion-municipal",
        title: "Renders de presentacion municipal/DMP",
        kind: "render",
        status: "por_solicitar",
        sourceId: "lahora-diseno-2025",
        sourceUrl: "https://lahora.gt/nacionales/dleon/2025/12/02/presentan-diseno-por-remodelacion-del-estadio-del-xelaju-mc-en-quetzaltenango/",
        notes: "Localizar paquete original, fecha, autor, version y relacion con el expediente tecnico.",
      },
      {
        id: "render-14-avenida",
        title: "Intervencion sobre 14 avenida",
        kind: "render",
        status: "pendiente",
        sourceId: "concejo-acta-proyecto",
        notes: "Debe respaldarse con acuerdo municipal, plano vial y condicionantes de movilidad.",
      },
      {
        id: "render-accesos-servicios",
        title: "Fachada, accesos y servicios",
        kind: "render",
        status: "pendiente",
        sourceId: "guatecompras-nog",
        notes: "Agregar cuando existan planos o bases de licitacion con alcance oficial.",
      },
    ],
  },
  {
    id: "estado-actual",
    label: "Estado actual del estadio",
    eyebrow: "02",
    description: "Fotografias base para comparar condiciones previas, accesos, graderios y entorno urbano antes de obra.",
    items: [
      {
        id: "entrada-estadio-mc",
        title: "Entrada del Estadio Mario Camposeco",
        kind: "foto",
        status: "localizado",
        sourceId: "wikimedia-categoria-estadio",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:EntradaEstadioMC.JPG",
        imageUrl: commonsFile("EntradaEstadioMC.JPG"),
        license: "Revisar licencia del archivo en Wikimedia Commons",
        credit: "Wikimedia Commons",
        notes: "Util para portada de galeria y comparativo de accesos.",
      },
      {
        id: "principal-mario-camposeco",
        title: "Vista principal del estadio",
        kind: "foto",
        status: "localizado",
        sourceId: "wikimedia-categoria-estadio",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:PrincipalMarioCamposeco.jpg",
        imageUrl: commonsFile("PrincipalMarioCamposeco.jpg"),
        license: "Revisar licencia del archivo en Wikimedia Commons",
        credit: "Wikimedia Commons",
        notes: "Base visual para explicar fachada y relacion con el entorno.",
      },
      {
        id: "curva-xelaju-guastatoya",
        title: "La Curva en final Xelaju - Guastatoya",
        kind: "foto",
        status: "localizado",
        sourceId: "wikimedia-categoria-estadio",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Final_Ida_Xelaju_-_Guastatoya_(La_Curva).jpg",
        imageUrl: commonsFile("Final Ida Xelaju - Guastatoya (La Curva).jpg"),
        license: "Revisar licencia del archivo en Wikimedia Commons",
        credit: "Wikimedia Commons",
        notes: "Ayuda a documentar atmosfera, ocupacion y graderios existentes.",
      },
      {
        id: "sur-mario-camposeco",
        title: "Sector sur del Mario Camposeco",
        kind: "foto",
        status: "localizado",
        sourceId: "wikimedia-categoria-estadio",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Surmariocamposeco.JPG",
        imageUrl: commonsFile("Surmariocamposeco.JPG"),
        license: "Revisar licencia del archivo en Wikimedia Commons",
        credit: "Wikimedia Commons",
        notes: "Referencia para antecedentes de graderio y lectura espacial del estadio.",
      },
    ],
  },
  {
    id: "documentos-tecnicos",
    label: "Planos y documentos tecnicos",
    eyebrow: "03",
    description: "Expediente tecnico que debe incorporarse cuando exista fuente oficial.",
    items: [
      {
        id: "planta-general",
        title: "Planta general aprobada",
        kind: "plano",
        status: "pendiente",
        sourceId: "guatecompras-nog",
        notes: "Debe venir de bases, anexos tecnicos o expediente municipal.",
      },
      {
        id: "secciones-graderio",
        title: "Secciones de graderio y estructura",
        kind: "plano",
        status: "pendiente",
        sourceId: "guatecompras-nog",
        notes: "Necesario para validar aforo, visibilidad y sistema estructural.",
      },
      {
        id: "rutas-evacuacion",
        title: "Rutas de evacuacion y seguridad humana",
        kind: "plano",
        status: "pendiente",
        sourceId: "guatecompras-nog",
        notes: "Debe cruzarse con CONRED, normativas locales y lineamientos FIFA/Concacaf.",
      },
      {
        id: "memoria-estructural",
        title: "Memoria estructural",
        kind: "plano",
        status: "pendiente",
        sourceId: "guatecompras-nog",
        notes: "Clave para revisar cimentacion, graderios, cargas y compatibilidad con estructura existente.",
      },
    ],
  },
  {
    id: "comparables",
    label: "Comparables regionales",
    eyebrow: "04",
    description: "Referencias visuales y tecnicas para no evaluar el proyecto en abstracto.",
    items: [
      {
        id: "comparable-doroteo",
        title: "Doroteo Guamuch Flores",
        kind: "comparable",
        status: "pendiente",
        sourceId: "fifa-stadium-guidelines",
        notes: "Comparar accesos, evacuacion, transmision, iluminacion y operacion de partido.",
      },
      {
        id: "comparable-pensativo",
        title: "Estadio Pensativo",
        kind: "comparable",
        status: "pendiente",
        sourceId: "concacaf-guidelines-2026",
        notes: "Referencia nacional para restricciones urbanas y mejoras incrementales.",
      },
      {
        id: "comparable-cuscatlan",
        title: "Estadio Cuscatlan",
        kind: "comparable",
        status: "pendiente",
        sourceId: "concacaf-guidelines-2026",
        notes: "Comparable centroamericano para aforo, operacion y eventos de mayor escala.",
      },
      {
        id: "comparable-costa-rica",
        title: "Estadio Nacional de Costa Rica",
        kind: "comparable",
        status: "pendiente",
        sourceId: "fifa-stadium-guidelines",
        notes: "Referencia regional para estandares modernos; no implica misma escala presupuestaria.",
      },
    ],
  },
]

