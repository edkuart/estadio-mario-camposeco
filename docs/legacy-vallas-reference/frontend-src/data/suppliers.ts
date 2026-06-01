export type SupplierStatus = "identified" | "contacted" | "quoted" | "selected"
export type SupplierSpecialty =
  | "Estructura Metálica"
  | "Obra Civil"
  | "Ingeniería Estructural"
  | "Sistema Eléctrico"
  | "Impresión de Vinilo"
  | "Permisos y Trámites"

export interface Supplier {
  id: string
  name: string
  specialty: SupplierSpecialty
  location: string
  status: SupplierStatus
  notes?: string
  contact?: string
  website?: string
}

export const SUPPLIERS_DISCLAIMER =
  "Directorio de referencia para contacto y cotización. No implica selección definitiva. La decisión final dependerá de cotizaciones formales, referencias y capacidad técnica verificada."

export const SUPPLIERS: Supplier[] = [
  // ─── Estructura Metálica ──────────────────────────────────────────────────
  {
    id: "s-interprice",
    name: "Interprice S.A.",
    specialty: "Estructura Metálica",
    location: "17 Av. 1-17 Zona 1, Ciudad de Guatemala",
    status: "identified",
    contact: "+(502) 2508-7245 · info@interprice.com.gt",
    website: "https://interprice.com.gt",
    notes:
      "14 años de experiencia. Servicio integral: fabricación de estructura metálica, impresión gran formato e instalación. Portafolio documentado de vallas en carretera y zona urbana. Candidato principal para cotización.",
  },
  {
    id: "s-printto",
    name: "Printto Guatemala",
    specialty: "Estructura Metálica",
    location: "Ciudad de Guatemala",
    status: "identified",
    website: "https://printto.com.gt",
    notes:
      "Fabrican vallas, mega-vallas y rótulos con iluminación LED. Portfolio específico de vallas y pasarelas. También ofrecen impresión gran formato — proveedor 2-en-1 para estructura y arte.",
  },
  {
    id: "s-gruas",
    name: "Grúas de Guatemala",
    specialty: "Estructura Metálica",
    location: "Guatemala",
    status: "identified",
    website: "http://gruasdeguatemala.com",
    notes:
      "Fabricación y montaje de vallas publicitarias. Clave: cuentan con grúa propia para izaje en instalación — necesario para estructura de 12 m en terreno inclinado.",
  },
  {
    id: "s-publivallas",
    name: "Publivallas GT",
    specialty: "Estructura Metálica",
    location: "Guatemala",
    status: "identified",
    website: "https://www.publivallasgt.com",
    notes:
      "Empresa especializada exclusivamente en vallas publicitarias en Guatemala. Tercera opción de cotización para comparar precios en estructura y montaje.",
  },

  // ─── Obra Civil ───────────────────────────────────────────────────────────
  {
    id: "s-adpi",
    name: "Grupo ADPI",
    specialty: "Obra Civil",
    location: "Guatemala",
    status: "identified",
    website: "https://grupoadpi.gt",
    notes:
      "Ofrece obra civil y estructura metálica de forma integrada. Fundada 2016. Han ejecutado fundaciones especiales y muros en proyectos residenciales e industriales. Opción eficiente al combinar cimentación y estructura.",
  },
  {
    id: "s-itsa",
    name: "Grupo ITSA / PILOTECMAR",
    specialty: "Obra Civil",
    location: "Guatemala",
    status: "identified",
    website: "https://www.grupoitsa.org",
    notes:
      "40+ años de trayectoria. PILOTECMAR es su división para fundaciones profundas y estabilización de taludes — crítico para terreno con pendiente de ~35°. Primera opción para cimentación en terreno difícil.",
  },
  {
    id: "s-consulta",
    name: "Consulta",
    specialty: "Obra Civil",
    location: "Guatemala (presencia centroamericana)",
    status: "identified",
    website: "https://consulta.com.gt",
    notes:
      "Contratista general desde 1970. Una de las constructoras más grandes de Guatemala. Para casos donde se requiera interventoría técnica o el proyecto escale. Tercera opción de cotización.",
  },

  // ─── Ingeniería Estructural ───────────────────────────────────────────────
  {
    id: "s-cig",
    name: "Directorio CIG — Colegio de Ingenieros de Guatemala",
    specialty: "Ingeniería Estructural",
    location: "Guatemala",
    status: "identified",
    website: "https://www.cig.org.gt",
    notes:
      "Punto de partida para contratar un ingeniero civil colegiado activo. Obligatorio: los planos estructurales deben llevar firma y sello de profesional colegiado para trámite de licencia municipal.",
  },
  {
    id: "s-aquienguate",
    name: "Directorio AquiEnGuate — Ingenieros Estructurales",
    specialty: "Ingeniería Estructural",
    location: "Ciudad de Guatemala",
    status: "identified",
    website: "https://www.aquienguate.com/directorio/servicios-profesionales/ingenieros-estructurales/guatemala/guatemala",
    notes:
      "Directorio con teléfonos y direcciones de ingenieros estructurales en Guatemala. Buscar profesionales con experiencia específica en anuncios exteriores y cimentaciones en ladera.",
  },

  // ─── Sistema Eléctrico ────────────────────────────────────────────────────
  {
    id: "s-gauss",
    name: "GAUSS — Nacional de Instaladores, S.A.",
    specialty: "Sistema Eléctrico",
    location: "Zona 10, Edificio Murano Center Of. 1101, Ciudad de Guatemala",
    status: "identified",
    website: "https://gauss.com.gt",
    notes:
      "Fundada 2005, capital 100% guatemalteco. Diseño, construcción y mantenimiento de redes eléctricas de baja, media y alta tensión. Experiencia en instalaciones industriales y comerciales. Candidato principal para acometida trifásica 220V/30 kVA.",
  },
  {
    id: "s-esinsa",
    name: "ESINSA Guatemala",
    specialty: "Sistema Eléctrico",
    location: "Guatemala",
    status: "identified",
    website: "https://www.esinsa.com",
    notes:
      "Instalaciones eléctricas industriales: iluminación, tableros CCM, cableado de potencia. Operación en Guatemala y El Salvador. Segunda opción de cotización.",
  },
  {
    id: "s-electricista",
    name: "Electricista Autorizado Guatemala",
    specialty: "Sistema Eléctrico",
    location: "Guatemala",
    status: "identified",
    website: "https://electricistadeguate.com",
    notes:
      "35+ años, técnicos autorizados por EEGSA y graduados INTECAP. Especialistas en trámites de acometida ante la distribuidora eléctrica. Útil para gestionar la conexión formal a la red.",
  },

  // ─── Impresión de Vinilo ──────────────────────────────────────────────────
  {
    id: "s-area2",
    name: "Area2 Design",
    specialty: "Impresión de Vinilo",
    location: "Ciudad de Guatemala (envío nacional)",
    status: "identified",
    website: "https://area2design.com",
    notes:
      "Especialistas en viniles adhesivos y lonas publicitarias de alto impacto. Impresión UV, vinilo 440g/m². Evaluar tiempo de entrega (objetivo: 48–72h para cambio de arte). Candidato principal.",
  },
  {
    id: "s-agranformato",
    name: "A Gran Formato",
    specialty: "Impresión de Vinilo",
    location: "Guatemala",
    status: "identified",
    website: "https://agranformato.com",
    notes:
      "15+ años de experiencia en impresión gran formato. Mantas vinílicas desde Q24.99/m². Segunda opción para comparar precios y calidad de materiales.",
  },

  // ─── Permisos y Trámites ──────────────────────────────────────────────────
  {
    id: "s-muniguate",
    name: "Municipalidad de Guatemala (Muniguate)",
    specialty: "Permisos y Trámites",
    location: "Ciudad de Guatemala",
    status: "identified",
    website: "https://www.muniguate.com",
    notes:
      "Autoridad que otorga la licencia de anuncio exterior bajo el COM-035-2001 (Reglamento de Anuncios en Vías Urbanas y Extraurbanas). Primer paso: verificar jurisdicción municipal exacta del terreno.",
  },
  {
    id: "s-approvato",
    name: "Approvato",
    specialty: "Permisos y Trámites",
    location: "Guatemala",
    status: "identified",
    website: "https://approvato.com.gt",
    notes:
      "Plataforma guatemalteca especializada en gestión de licencias y permisos de construcción. Pueden agilizar trámites municipales y llevar seguimiento del expediente.",
  },
]
