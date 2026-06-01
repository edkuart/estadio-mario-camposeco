# Investigacion maestra: Renovacion y ampliacion del Estadio Mario Camposeco

Fecha de corte: 2026-05-28  
Ubicacion: Quetzaltenango, Guatemala  
Estado del documento: investigacion inicial, no implementacion  
Objetivo: construir la infraestructura documental, analitica y de inteligencia publica para una plataforma de seguimiento del proyecto.

## 1. Resumen ejecutivo

El proyecto identificado publicamente como **"Ampliacion de Instalaciones Deportivas y Recreativas del Estadio Mario Camposeco"** busca ampliar y modernizar el estadio municipal utilizado por Xelaju MC en la zona 3 de Quetzaltenango.

La evidencia inicial indica esta secuencia:

- 2025-10-15: el COMUDE de Quetzaltenango aprueba/socializa el proyecto, segun cobertura local.
- 2025-10-24: la Municipalidad de Quetzaltenango presenta render del proyecto de ampliacion.
- 2025-12-02: Xelaju MC y medios reportan presentacion oficial del diseno, con apoyo del Concejo Municipal y Direccion Municipal de Planificacion.
- 2026-01-23: IDAEH inspecciona el estadio por consideraciones patrimoniales.
- 2026-05-05: autoridades reportan aprobacion ambiental y tramite final ante IDAEH; se proyecta publicacion en Guatecompras durante junio.
- 2026-05-21: medios reportan autorizacion del IDAEH y que el siguiente paso es subir el proyecto a Guatecompras.

El costo oficial no estaba publicado en las fuentes revisadas durante esta investigacion inicial. La autoridad municipal ha indicado que los detalles estructurales y el costo se conoceran al elevar el proyecto a Guatecompras.

Conclusion inicial: el proyecto esta en fase prelicitatoria, con aprobaciones administrativas avanzadas, pero todavia requiere validacion documental fuerte: expediente IDAEH, instrumento ambiental MARN, bases de licitacion, NOG Guatecompras, planos, presupuesto por renglones, cronograma, dictamen estructural y actas municipales.

## 2. Principios metodologicos

La plataforma no debe funcionar como recopilador de noticias. Debe funcionar como un sistema de inteligencia documental con trazabilidad.

Principios:

- Separar hechos, declaraciones, inferencias y estimaciones.
- Toda afirmacion relevante debe enlazar a una o mas fuentes.
- Toda fuente debe tener tipo, fecha, autor, entidad, URL o archivo, hash documental, confiabilidad y fecha de consulta.
- Las noticias se usan como indicios, no como prueba definitiva cuando existe una fuente oficial pendiente.
- Las contradicciones no se borran: se modelan como claims conflictivos.
- Los costos se manejan por escenarios hasta tener presupuesto oficial.
- Las imagenes/renderizaciones se almacenan como evidencia visual versionada, no solo como decoracion.

## 3. Hallazgos historicos del estadio

### 3.1 Origen y nombre

El Estadio Mario Camposeco fue inaugurado en 1950 como Estadio Escolar, en el contexto de infraestructura deportiva impulsada para los Juegos Centroamericanos y del Caribe de 1950. En 1951 fue renombrado en memoria de Mario Salvador Camposeco Lopez, futbolista quetzalteco de Xelaju y de la seleccion nacional, fallecido en accidente aereo.

Fuentes iniciales:

- Estadio Mario Camposeco, Wikipedia: https://es.wikipedia.org/wiki/Estadio_Mario_Camposeco
- Mario Camposeco, Wikipedia: https://en.wikipedia.org/wiki/Mario_Camposeco
- Biografia de Mario Camposeco, Guatemala.com: https://www.guatemala.com/aprende/historia/personajes/biografia-mario-camposeco-futbolista-guatemalteco

Pendiente:

- Confirmar con archivo municipal, actas historicas o publicaciones oficiales de la epoca.
- Localizar decreto 435 y documentos de Direccion General de Educacion Fisica/Comite Nacional Olimpico.

### 3.2 Capacidad historica y actual

Capacidades reportadas:

- Capacidad original reportada: 15,000 espectadores.
- Capacidad posterior tras reconversion futbolistica: alrededor de 7,000.
- Tras ampliacion de graderio sur en 2005: 11,226 aficionados, segun referencias historicas.
- Fuentes deportivas actuales redondean entre 11,000 y 11,200.
- Proyecto 2025-2026: objetivo reportado de superar 20,000 espectadores; una fuente local menciona 21,000.

Regla de datos para la plataforma:

- No fijar una unica capacidad "verdadera" sin ficha tecnica.
- Guardar cada cifra como `capacity_claim` con fuente, fecha, definicion de aforo, metodo y confiabilidad.
- Diferenciar capacidad total, aforo autorizado CONRED, aforo de liga nacional, aforo internacional y capacidad con asientos numerados.

### 3.3 Remodelaciones conocidas

Eventos historicos a modelar:

- 1999: remodelacion del terreno de juego e introduccion de drenaje tipo frances; posteriormente torres de iluminacion.
- 2005: ampliacion de graderios, especialmente sur; referencia SEGEPLAN reporta "AMPLIACION GRADERIO SUR ESTADIO MARIO CAMPOSECO" con Q700,000 en listado historico.
- 2012: mejoras de iluminacion para participacion en Concacaf Liga Campeones.
- 2024-2025: mejoras recientes reportadas en malla perimetral, camerinos, parqueo e iluminacion.
- 2025-2026: proyecto de ampliacion norte y 14 avenida.

Fuentes iniciales:

- SEGEPLAN, proyectos terminados/en ejecucion 2005: https://snip.segeplan.gob.gt/sinip/html/portal/docs/ejecutados/2005_900.pdf
- Guatefutbol, arreglos 2025: https://guatefutbol.com/2025/05/09/se-hacen-mas-arreglos-en-el-estadio-mario-camposeco/
- Guatefutbol, preparacion de ampliacion 2025: https://guatefutbol.com/2025/10/10/xelaju-prepara-una-ampliacion-en-el-estadio-mario-camposeco/

## 4. Proyecto 2025-2026: estado actual

### 4.1 Nombre del proyecto

Nombre reportado:

**Ampliacion de Instalaciones Deportivas y Recreativas del Estadio Mario Camposeco**

Debe validarse contra:

- Acta COMUDE.
- Acta del Concejo Municipal.
- SNIP/SINIP.
- Guatecompras.
- Bases de licitacion.

### 4.2 Alcance reportado

Alcances reportados por fuentes abiertas:

- Construccion/ampliacion de graderio norte.
- Intervencion sobre 14 avenida.
- Estructura que permitiria paso vehicular por debajo de graderios sobre 14 avenida, segun cobertura local.
- Areas VIP/palcos.
- Nuevos banos.
- Pasillos amplios.
- Accesos adecuados.
- Museo.
- Cafeterias.
- Fachada/imagen exterior.
- Segunda etapa futura: tribuna y camerinos.

Regla de plataforma:

- Cada componente debe quedar como `scope_item`.
- Estado del scope: reportado, en bases, adjudicado, contratado, en ejecucion, finalizado, eliminado.
- Separar fase 1 de fase 2 para evitar mezclar promesas con alcance contractual.

### 4.3 Actores identificados

Actores institucionales:

- Municipalidad de Quetzaltenango.
- Alcaldia de Quetzaltenango: Juan Fernando Lopez Fuentes.
- Concejo Municipal de Quetzaltenango.
- Direccion Municipal de Planificacion.
- COMUDE Quetzaltenango.
- Xelaju MC.
- Presidente de Xelaju MC: Jose Carlos Lopez, segun cobertura.
- IDAEH.
- MARN.
- CONRED.
- Guatecompras.
- SEGEPLAN/SINIP.
- Ministerio de Cultura y Deportes / Direccion de Espectaculos Publicos, para eventos masivos.
- Federacion Nacional de Futbol de Guatemala.
- Concacaf.
- FIFA.

Actores potenciales por confirmar:

- Empresas constructoras oferentes.
- Supervisor de obra.
- Disenador estructural.
- Arquitecto responsable.
- Laboratorio de suelos/materiales.
- Proveedores de concreto, acero, iluminacion, pantallas, butacas, grama y drenaje.
- Auditoria social local.
- Contraloria General de Cuentas.

## 5. Linea del tiempo inicial

| Fecha | Evento | Tipo | Estado de evidencia |
|---|---|---|---|
| 1947 | Decreto 435 y seleccion de Quetzaltenango para infraestructura deportiva | historico/legal | pendiente fuente primaria |
| 1950-09-08 | Inauguracion del Estadio Escolar | historico | fuente secundaria |
| 1951 | Cambio de nombre a Estadio Escolar Mario Camposeco | historico | fuente secundaria |
| 1999 | Remodelacion del campo y drenaje frances | obra historica | fuente secundaria |
| 2005 | Ampliacion graderio sur | obra historica | SEGEPLAN/listado |
| 2012 | Mejora de iluminacion para torneo Concacaf | obra deportiva | fuente secundaria |
| 2025-10-10 | Xelaju MC y municipalidad dialogan sobre usufructo/ampliacion | preproyecto | prensa deportiva |
| 2025-10-15 | COMUDE aprueba/socializa proyecto | gobernanza | prensa local; falta acta |
| 2025-10-24 | Municipalidad presenta render de ampliacion | comunicacion oficial/reportada | prensa y replicas |
| 2025-12-02 | Presentacion oficial del diseno | comunicacion oficial/reportada | Xelaju/medios |
| 2026-01-23 | IDAEH inspecciona el estadio | permiso/patrimonio | prensa; falta expediente |
| 2026-05-05 | Alcalde reporta fase final, aprobacion ambiental y futura publicacion en Guatecompras | tramite | prensa; falta MARN/NOG |
| 2026-05-21 | Reporte de autorizacion IDAEH y siguiente paso Guatecompras | permiso/prelicitacion | prensa; falta resolucion |
| 2026-06 estimado | Publicacion esperada en Guatecompras | contratacion | pendiente |

## 6. Fuentes oficiales y documentales prioritarias

### 6.1 Fuentes primarias a conseguir

1. Acta COMUDE donde se aprueba el proyecto.
2. Acta del Concejo Municipal que autoriza proyecto, bases, financiamiento o modificacion de uso de via publica.
3. Expediente de Direccion Municipal de Planificacion.
4. Registro SNIP/SINIP del proyecto.
5. Bases de licitacion en Guatecompras.
6. NOG y documentos asociados.
7. Planos arquitectonicos, estructurales, electricos, hidrosanitarios y de evacuacion.
8. Presupuesto integrado por renglones.
9. Cronograma fisico-financiero.
10. Resolucion IDAEH.
11. Instrumento ambiental aprobado por MARN.
12. Dictamen CONRED/NRD aplicable.
13. Dictamen estructural bajo normas AGIES/NSE.
14. Convenio de usufructo o administracion entre Municipalidad y Xelaju MC.
15. Estudio de movilidad e impacto sobre 14 avenida/3a calle.
16. Estudio de suelos.
17. Estudio de drenajes pluviales.
18. Certificado o medicion luminica si se busca aval Concacaf.
19. Comunicaciones con FIFA/Concacaf/Fedefut.

### 6.2 Fuentes ya localizadas en investigacion inicial

- SEGEPLAN/SNIP historico, proyectos vinculados a estadio: https://snip.segeplan.gob.gt/sinip/html/portal/docs/ejecutados/2005_900.pdf
- La Hora, proyecto de octubre 2025: https://lahora.gt/nacionales/engelberth-blanco/2025/10/24/asi-sera-la-remodelacion-del-estadio-mario-camposeco-del-xelaju-mc/
- La Hora, presentacion de diseno diciembre 2025: https://lahora.gt/nacionales/dleon/2025/12/02/xelaju-mc-informa-como-sera-el-diseno-de-remodelacion-de-su-estadio/
- Region Mas, diseno y 14 avenida: https://www.regionmas.com/blog/post/ampliacion-del-estadio-mario-camposeco-abarcara-parte-de-la-14-avenida
- Region Mas, fase de licitacion junio 2026: https://www.regionmas.com/blog/post/proyecto-de-remodelacion-del-estadio-mario-camposeco-avanzaria-a-fase-de-licitacion-en-junio
- Region Mas, prevision de Guatecompras mayo 2026: https://www.regionmas.com/blog/post/proyecto-de-ampliacion-del-mario-camposeco-seria-elevado-a-guatecompras-en-unos-10-dias-senala-alcalde
- Guatefutbol, inspeccion IDAEH enero 2026: https://guatefutbol.com/2026/01/23/el-mario-camposeco-da-un-paso-mas-para-su-ambiciosa-remodelacion/
- Guatefutbol, aval IDAEH mayo 2026: https://guatefutbol.com/2026/05/21/todo-listo-para-la-remodelacion-del-mario-camposeco/
- FIFA Stadium Guidelines: https://inside.fifa.com/innovation/stadium-guidelines
- Concacaf Stadium Guidelines 2026-2027: https://www.concacaf.com/media/bkalritw/concacaf-stadium-guidelines-2026-2027-eng.pdf
- CONRED NRD-4: https://conred.gob.gt/nrd-4/
- MARN, evaluacion ambiental previa: https://www.marn.gob.gt/viceministro-de-ambiente/direccion-de-cumplimiento-legal/informacion-relevante/
- AGIES NSE 2 2024: https://www.agies.org/wp-content/uploads/2024/08/NSE-2-2024-BETA-Demandas-estructurales-y-condiciones-de-sitio-4.pdf
- AGIES NSE 3 2024: https://www.agies.org/wp-content/uploads/2024/08/NSE-3-2024-Diseno-Estructural-de-Edificaciones.pdf

## 7. Requerimientos FIFA/Concacaf relevantes

### 7.1 FIFA

FIFA plantea las Stadium Guidelines como marco flexible para disenar, construir y operar estadios seguros, sostenibles y adaptados a su comunidad. La plataforma debe convertir estas guias en checklist tecnico:

- Factibilidad.
- Masterplan.
- Capacidad.
- Seguridad.
- Accesibilidad.
- Pitch/turf.
- MEP.
- Iluminacion.
- Operaciones.
- Usuarios principales: jugadores, oficiales, media, espectadores, hospitalidad, back-of-house.

### 7.2 Concacaf

Los lineamientos 2026-2027 de Concacaf son criticos si el objetivo real es albergar partidos internacionales.

Puntos clave modelables:

- Ubicacion: en principio, maximo 150 km y no mas de 120 minutos desde aeropuerto internacional operativo con suficientes vuelos; pueden existir excepciones.
- Certificado de seguridad emitido por autoridad competente, valido para partidos.
- Cancha natural o artificial con certificacion FIFA correspondiente.
- Medidas preferentes de cancha profesional: 105 m x 68 m; rango permitido segun IFAB.
- Area auxiliar recomendada: 125 m x 85 m.
- Bancas cubiertas para minimo 26 personas por equipo.
- Iluminacion TV: Main TV 1000 lux promedio vertical, End TV 800 lux, con ratios de uniformidad definidos.
- Planta o sistema de respaldo independiente para energia.
- Marcador, reloj, videoboard.
- Centro de control/comando.
- Requisitos VAR cuando aplique.
- Vestidores de equipos equivalentes.
- Prensa, broadcast compound, conectividad simetrica para TV.
- Centro medico de espectadores.
- Sala medica de jugadores.
- Sala de control doping.
- PA system con respaldo.
- Estacionamientos de equipos, Concacaf, emergencia y accesibilidad.

Riesgo mayor:

Aunque el estadio se modernice, Quetzaltenango no cuenta actualmente con aeropuerto internacional operativo de las caracteristicas esperadas por Concacaf. Esto puede impedir o condicionar partidos continentales, salvo excepciones.

## 8. Arquitectura de informacion de la plataforma

### 8.1 Sitemap propuesto

- `/` Dashboard ejecutivo
- `/historia` Historia del estadio
- `/timeline` Linea del tiempo verificable
- `/proyecto` Alcance, fases, renders y estado actual
- `/actores` Actores, entidades, personas y relaciones
- `/documentos` Repositorio documental
- `/fuentes` Registro de fuentes y confiabilidad
- `/contratacion` Guatecompras, SNIP, licitaciones, ofertas y contratos
- `/costos` Modelo de costos, renglones, escenarios y comparables
- `/proveedores` Proveedores potenciales y oferentes reales
- `/tecnico` Viabilidad tecnica y cumplimiento FIFA/Concacaf/AGIES/CONRED
- `/politico` Mapa politico, decisiones publicas, actas y declaraciones
- `/riesgos` Riesgos politicos, financieros, tecnicos, legales, patrimoniales y operativos
- `/avances` Seguimiento fisico-financiero y bitacora de obra
- `/comparables` Estadios comparables nacionales e internacionales
- `/escenarios` Escenarios futuros y decisiones pendientes
- `/metodologia` Como se valida, clasifica y actualiza la informacion
- `/admin/evidencia` Carga, versionado y auditoria documental

### 8.2 Modulos funcionales

1. Motor de fuentes.
2. Motor de claims y contradicciones.
3. Timeline versionado.
4. Repositorio documental.
5. Registro de actores.
6. Mapa de relaciones y responsabilidades.
7. Sistema de costos parametricos.
8. Registro de proveedores y contratistas.
9. Comparador de proyectos.
10. Matriz de permisos.
11. Matriz de cumplimiento FIFA/Concacaf.
12. Matriz de riesgos.
13. Dashboard financiero.
14. Dashboard politico.
15. Dashboard tecnico.
16. Seguimiento de obra.
17. Biblioteca de renders y evidencia visual.

## 9. Modelo de datos propuesto

### 9.1 Entidades principales

```text
projects
  id
  name
  normalized_name
  location
  owner_entity_id
  current_phase
  official_status
  summary
  created_at
  updated_at

project_phases
  id
  project_id
  name
  description
  start_date_planned
  end_date_planned
  start_date_actual
  end_date_actual
  status

entities
  id
  name
  type -- municipalidad, club, ministerio, empresa, proveedor, medio, organismo internacional
  jurisdiction
  website
  reliability_baseline

people
  id
  full_name
  role_title
  entity_id
  start_date
  end_date

project_roles
  id
  project_id
  entity_id
  person_id
  role
  source_id
  confidence
```

### 9.2 Fuentes, evidencia y claims

```text
sources
  id
  title
  source_type -- acta, pdf, guatecompras, noticia, comunicado, video, render, entrevista, reglamento
  publisher
  author
  published_at
  accessed_at
  url
  file_hash
  archive_url
  reliability_score
  notes

documents
  id
  source_id
  project_id
  document_type -- acta, permiso, base_licitacion, contrato, plano, presupuesto, informe, render
  official_document_number
  issuing_entity_id
  document_date
  status
  storage_path
  text_extracted

claims
  id
  project_id
  claim_type -- capacity, cost, schedule, scope, permit, actor, risk
  claim_text
  normalized_value
  unit
  date_context
  confidence
  verification_status -- unverified, corroborated, contradicted, official

claim_sources
  claim_id
  source_id
  quote_excerpt
  page_number
  line_reference
```

### 9.3 Timeline

```text
timeline_events
  id
  project_id
  event_date
  event_date_precision -- exact, month, year, approximate
  title
  description
  category -- historico, permiso, contratacion, diseno, construccion, politico, financiero
  actor_entity_id
  status -- verificado, reportado, pendiente
  source_id
  importance
```

### 9.4 Permisos y cumplimiento

```text
permits
  id
  project_id
  permit_type -- IDAEH, MARN, CONRED, licencia_construccion, via_publica, SNIP, Guatecompras
  issuing_entity_id
  status
  requested_at
  approved_at
  expires_at
  document_id
  conditions

technical_requirements
  id
  standard -- FIFA, CONCACAF, CONRED_NRD4, AGIES_NSE, MARN
  requirement_code
  requirement_name
  description
  metric
  threshold
  unit

compliance_checks
  id
  project_id
  requirement_id
  status -- cumple, no_cumple, parcial, no_evaluable
  evidence_document_id
  measured_value
  notes
```

### 9.5 Contratacion y finanzas

```text
procurement_processes
  id
  project_id
  platform -- Guatecompras, municipal, convenio, otro
  nog
  snip_code
  title
  modality
  status
  publication_date
  closing_date
  award_date
  estimated_amount
  awarded_amount
  currency
  source_id

bids
  id
  procurement_id
  bidder_entity_id
  bid_amount
  currency
  status
  disqualification_reason
  documents_path

contracts
  id
  procurement_id
  contractor_entity_id
  contract_number
  signed_at
  amount
  currency
  term_days
  start_date
  end_date_planned
  end_date_actual
  status

cost_items
  id
  project_id
  phase_id
  category
  item_name
  unit
  quantity
  unit_cost
  total_cost
  currency
  cost_type -- oficial, estimado, comparable, mercado
  source_id
```

### 9.6 Riesgos y escenarios

```text
risks
  id
  project_id
  category -- politico, financiero, tecnico, legal, ambiental, patrimonial, operativo, social
  title
  description
  probability
  impact
  severity
  owner_entity_id
  mitigation
  status
  source_id

scenarios
  id
  project_id
  name
  description
  assumptions
  capex_low
  capex_mid
  capex_high
  timeline_low_months
  timeline_mid_months
  timeline_high_months
  implications
```

## 10. Sistema de documentos

### 10.1 Tipos de documentos

- Acta COMUDE.
- Acta Concejo Municipal.
- Perfil SNIP.
- Dictamen SEGEPLAN.
- Bases Guatecompras.
- Resolucion de adjudicacion.
- Contrato.
- Fianza.
- Presupuesto por renglones.
- Planos.
- Render oficial.
- Video oficial.
- Resolucion IDAEH.
- Instrumento ambiental MARN.
- Dictamen CONRED.
- Licencia de construccion.
- Estudio de suelos.
- Estudio de movilidad.
- Informe de supervision.
- Estimacion de pago.
- Orden de cambio.
- Bitacora fotografica.
- Acta de recepcion.
- Informe de auditoria.

### 10.2 Metadatos minimos

- Titulo.
- Entidad emisora.
- Fecha.
- Numero/documento oficial.
- URL original.
- Fecha de descarga.
- Hash SHA-256.
- Texto OCR.
- Resumen.
- Claims extraidos.
- Estado de verificacion.
- Riesgos derivados.

## 11. Modelo de costos preliminar

### 11.1 Advertencia metodologica

No existe costo oficial publicado en las fuentes revisadas. Cualquier cifra previa a Guatecompras debe mostrarse como **estimacion preliminar**, no como presupuesto.

El modelo debe permitir:

- Costo por m2.
- Costo por asiento nuevo.
- Costo por asiento total renovado.
- Costo por componente.
- Costo por fase.
- Diferencia entre obra gris, acabados, MEP, equipamiento y soft costs.
- Escalamiento por inflacion, fletes y riesgo urbano.

### 11.2 Componentes de costo

Categorias base:

- Demolicion selectiva y rescate patrimonial.
- Movimiento de tierras.
- Cimentacion.
- Concreto estructural.
- Acero de refuerzo.
- Acero estructural.
- Graderios prefabricados o fundidos in situ.
- Losas y rampas.
- Drenajes pluviales y cancha.
- Iluminacion deportiva.
- Energia, respaldo y tableros.
- Sonido/PA.
- Pantallas, marcador y reloj.
- Butacas/asientos.
- Banos y sistemas sanitarios.
- Camerinos.
- Palcos/VIP.
- Museo.
- Cafeterias y concesiones.
- Accesos, torniquetes y control.
- Urbanizacion exterior.
- Senalizacion y evacuacion.
- Seguridad, CCTV y centro de control.
- Broadcast/media.
- Supervisiones, diseno, estudios, permisos y administracion.
- Contingencia.

### 11.3 Rangos de precios iniciales a usar como placeholders

Estos rangos son parametros iniciales que deben reemplazarse por renglones oficiales al publicarse el presupuesto:

| Componente | Unidad | Rango inicial | Observacion |
|---|---:|---:|---|
| Concreto premezclado 3000 PSI | m3 | Q1,400-Q1,900 | Referencia SEGEPLAN muestra Q1,600/m3 en presupuesto publico reciente |
| Varilla No. 3 | unidad | Q38-Q50 | Referencia SEGEPLAN muestra Q42 |
| Varilla No. 4 | unidad | Q60-Q80 | Referencia SEGEPLAN muestra Q68 |
| Losa tradicional reforzada | m2 | Q900-Q1,300 | Referencia SEGEPLAN: Q84,700 / 77 m2 = aprox Q1,100/m2 |
| Estructura metalica tipo canopy liviano | m2 | Q250-Q450 | Referencia SEGEPLAN reporta lamina/calibre y estructura auxiliar |
| Perfiles WF fabricacion/montaje | metro lineal | Q750-Q2,300 | Depende perfil y uniones |
| Banos/vestidores | m2 | Q4,000-Q9,000 | Alta variacion por instalaciones |
| Urbanizacion exterior | m2 | Q500-Q1,500 | Depende pavimento, drenaje, demolicion |
| Iluminacion deportiva LED TV | sistema | Q4M-Q18M | Depende lux, torres, tableros, respaldo |
| Pantalla/videoboard | unidad | Q1M-Q8M | Depende tamano, resolucion, estructura |
| Grama natural profesional + drenaje | cancha | Q5M-Q20M | Depende si incluye subbase, riego, drenaje |
| Grama sintetica FIFA Quality/Pro | cancha | Q4M-Q16M | Requiere certificacion y mantenimiento |
| Butacas | asiento | Q250-Q900 | Depende especificacion, UV, numeracion |
| Graderio/estructura por asiento agregado | asiento | USD 700-3,500 | Rango parametricamente amplio; separar obra simple vs VIP/urbana |

### 11.4 Escenarios de CAPEX preliminar

Supuesto base: ampliacion de 11,200 a mas de 20,000 espectadores, con 9,000-11,000 asientos adicionales y obras complementarias.

| Escenario | Supuesto | Rango USD | Rango Q aprox |
|---|---|---:|---:|
| Conservador | Graderio norte + 14 avenida con servicios basicos, baja complejidad de acabados | 8M-14M | Q62M-Q109M |
| Intermedio | Graderios + VIP + banos + accesos + fachada + MEP + contingencia | 14M-28M | Q109M-Q218M |
| Alto | Solucion urbana compleja con paso vehicular, palcos, museo, cafeterias, broadcast, iluminacion y estandar internacional | 28M-45M | Q218M-Q351M |

Tipo de cambio usado solo para modelado: Q7.8/USD. Debe actualizarse dinamicamente.

### 11.5 Comparables

- Estadio Nacional de Costa Rica: costo reportado USD 100M-110M, capacidad alrededor de 35k-42k. Sirve como comparable de nuevo estadio nacional, no como remodelacion municipal.
- UEFA Guide to Quality Stadiums reporta un caso con costo final de EUR 62M y alrededor de EUR 1,500 por asiento; usar solo como benchmark internacional antiguo y contextual.
- Estadio Doroteo Guamuch Flores: remodelacion de grama/pista reportada por Q32.4M, NOG 23637781, con retrasos y rescicion reportada. Sirve como caso de riesgo de contratacion, no como comparable directo de graderios.
- Estadio Pensativo: remodelaciones de iluminacion para aval FIFA/Concacaf; sirve como comparable funcional local.

## 12. Proveedores potenciales en Guatemala

No son recomendaciones ni contratistas confirmados. Son candidatos para monitoreo de mercado y comparacion de capacidades.

### 12.1 Concreto y prefabricados

- Mixto Listo / Cementos Progreso: https://www.mixtolisto.com/
- Grupo Discorsa: https://www.discorsa.com.gt/
- Concretum Premezclados: https://www.concretumgt.com/

### 12.2 Acero y estructura metalica

- Conacero: https://www.conacero.com.gt/
- Tecnimetal: https://tecnimetal.com.gt/
- Hierro del Rayo: https://www.hierrodelrayo.com/
- Grupo Perfiles y Aceros: https://www.grupopya.com.gt/
- Coprime: https://coprime.com.gt/

### 12.3 Grama deportiva

- AVG Centroamerica, grama certificada FIFA: https://avgcentroamerica.com/

### 12.4 Iluminacion, pantallas y sistemas

- Grupo Bien Prendido: https://www.grupobienprendido.com.gt/
- Sylvania, luminarias deportivas regionales: https://sylvania-elsalvador.com/wp-content/uploads/2025/03/1.-SYLVEO-SPORT.pdf

Pendiente:

- Identificar proveedores con experiencia comprobada en estadios, certificaciones, cumplimiento Guatecompras y referencias de obras publicas.

## 13. Dashboards propuestos

### 13.1 Dashboard ejecutivo

- Estado general.
- Fase actual.
- Semaforo de permisos.
- Ultimo evento verificado.
- Costo oficial vs estimado.
- Riesgos criticos.
- Avance fisico-financiero.
- Proxima decision publica.

### 13.2 Dashboard financiero

- Presupuesto oficial.
- Contratos adjudicados.
- Ofertas recibidas.
- Diferencias entre presupuesto base y adjudicado.
- Renglones con mayor peso.
- Estimaciones de pago.
- Ordenes de cambio.
- Costo por asiento.
- Costo por m2.
- Comparables.
- Alertas por sobrecosto.

### 13.3 Dashboard politico

- Actas y votaciones.
- Responsables institucionales.
- Declaraciones de alcalde/concejo/Xelaju.
- Promesas con fecha.
- Cambios de alcance.
- Riesgo electoral/administracion futura.
- Mapa de actores.

### 13.4 Dashboard tecnico

- Cumplimiento FIFA.
- Cumplimiento Concacaf.
- Cumplimiento CONRED.
- Cumplimiento AGIES.
- Cumplimiento MARN.
- Estado IDAEH.
- Capacidad/evacuacion.
- Iluminacion/lux.
- Cancha/drenaje.
- Broadcast/VAR.
- Accesibilidad.

### 13.5 Dashboard documental

- Documentos por tipo.
- Documentos faltantes.
- Fuentes oficiales vs noticias.
- Claims sin fuente primaria.
- Conflictos abiertos.
- Historial de versiones.
- Mapa de evidencia.

## 14. Matriz de riesgos inicial

| Riesgo | Categoria | Probabilidad | Impacto | Comentario |
|---|---|---:|---:|---|
| No publicacion o publicacion incompleta en Guatecompras | contratacion | media | alta | Sin bases no hay control real de alcance/costo |
| Sobrecosto por estructura sobre via publica | tecnico/financiero | media | alta | Paso vehicular bajo graderios aumenta complejidad |
| Restriccion patrimonial por piedra caliza/valor historico | patrimonial/legal | media | alta | IDAEH ya intervino |
| Aforo prometido distinto al autorizado por CONRED | tecnico/social | alta | media | Capacidad real depende evacuacion y seguridad |
| Incumplimiento Concacaf por aeropuerto internacional | internacional/logistico | alta | alta | Puede limitar partidos internacionales aunque estadio cumpla |
| Segunda etapa queda para administracion futura | politico | alta | media | Riesgo de proyecto incompleto |
| Contratista sin experiencia en estadios | contratacion/tecnico | media | alta | Caso Doroteo muestra riesgo comparable |
| Afectacion vial en 14 avenida | urbano/social | media | media | Requiere estudio de movilidad y permisos |
| Drenajes insuficientes por lluvia | tecnico/operativo | media | alta | Antecedente historico de drenaje frances |
| Falta de plan de mantenimiento OPEX | financiero/operativo | alta | alta | FIFA recomienda considerar OPEX y ciclo de vida |

## 15. Visualizaciones propuestas

- Timeline historico-documental con filtros por tipo de evento.
- Mapa de actores con relaciones: municipalidad, club, organismos, proveedores, permisos.
- Semaforo de permisos.
- Matriz de claims conflictivos.
- Dashboard de costo por componente.
- Sankey de financiamiento: fuente -> contrato -> renglones -> pagos.
- Comparador de estadios: capacidad, costo, anio, tipo, estandar, problemas.
- Plano interactivo del estadio por zonas: norte, sur, tribuna, 14 avenida, 3a calle.
- Visor de renders con versionado y anotaciones.
- Checklist Concacaf/FIFA.
- Matriz de riesgos por probabilidad/impacto.
- Bitacora fotografica de avance con geolocalizacion.

## 16. Informacion que ya existe

- Nombre publico del proyecto.
- Ubicacion general y sectores a intervenir.
- Render/diseno publicado en medios y redes.
- Actores institucionales principales.
- Secuencia basica de aprobacion COMUDE, presentacion, inspeccion IDAEH y avance a Guatecompras.
- Referencias historicas de capacidad y remodelaciones.
- Normativas FIFA/Concacaf/CONRED/MARN/AGIES relevantes.
- Comparables iniciales.

## 17. Informacion faltante critica

- NOG Guatecompras.
- SNIP/SINIP del proyecto 2025-2026.
- Costo oficial.
- Presupuesto por renglones.
- Bases de licitacion.
- Contratista u oferentes.
- Planos oficiales.
- Memoria de calculo estructural.
- Estudio de suelos.
- Estudio hidrologico/drenajes.
- Estudio de movilidad por afectacion de 14 avenida.
- Resolucion IDAEH.
- Instrumento ambiental MARN.
- Dictamen CONRED.
- Plan de manejo patrimonial de piedra caliza.
- Cronograma oficial.
- Plan de operacion durante obra sin suspender actividad deportiva.
- Plan de mantenimiento posterior.

## 18. Prioridades investigativas

1. Monitorear Guatecompras hasta identificar NOG.
2. Solicitar o descargar bases, presupuesto, planos y cronograma.
3. Buscar registro SNIP/SINIP por nombre exacto y municipalidad.
4. Obtener acta COMUDE de 2025-10-15.
5. Obtener acta Concejo Municipal relacionada.
6. Obtener resolucion IDAEH.
7. Obtener instrumento ambiental MARN.
8. Construir matriz de cumplimiento Concacaf.
9. Validar aforo actual y aforo proyectado con documentos tecnicos.
10. Identificar renglones mas caros y riesgos de sobrecosto.

## 19. Validacion de informacion conflictiva

Reglas:

- Una fuente oficial vigente prevalece sobre noticia.
- Una noticia con cita directa de funcionario se clasifica como declaracion, no como hecho tecnico.
- Un render no prueba alcance contractual.
- Una promesa de fecha no equivale a cronograma contractual.
- Un costo estimado no compite con presupuesto oficial.
- Si dos fuentes reportan capacidades distintas, se guardan ambas y se marca `capacity_definition_unknown`.
- Si una fuente dice "triplicar aforo" y otra ">20 mil", el sistema debe mostrar contradiccion hasta tener ficha de capacidad.

Estados de verificacion:

- `pendiente_fuente_primaria`
- `reportado_por_medio`
- `declaracion_funcionario`
- `documento_oficial_localizado`
- `corroborado_por_multiples_fuentes`
- `contradictorio`
- `actualizado_por_documento_posterior`

## 20. Roadmap de desarrollo posterior a aprobacion

### Fase A: Infraestructura documental

- Crear modelo de datos.
- Cargar fuentes iniciales.
- Cargar timeline inicial.
- Crear taxonomia de documentos.
- Crear sistema de claims.

### Fase B: Plataforma publica minima

- Home ejecutivo.
- Timeline.
- Documentos.
- Actores.
- Estado actual.
- Fuentes.

### Fase C: Inteligencia de costos y riesgos

- Dashboard financiero.
- Modelo parametricos.
- Matriz de riesgos.
- Comparables.

### Fase D: Cumplimiento tecnico

- Checklist FIFA/Concacaf.
- Checklist CONRED/AGIES/MARN/IDAEH.
- Visualizacion de permisos.

### Fase E: Seguimiento de obra

- Bitacora de avances.
- Fotografias geolocalizadas.
- Avance fisico-financiero.
- Estimaciones de pago.
- Alertas de retraso/sobrecosto.

### Fase F: Archivo historico

- Historia completa del estadio.
- Remodelaciones anteriores.
- Archivo de prensa.
- Archivo de renders.
- Comparacion antes/despues.

## 21. Estructura de proyecto propuesta

```text
docs/
  estadio-mario-camposeco-investigacion.md
  estadio-mario-camposeco/
    sources/
      official/
      media/
      regulations/
      renders/
    data/
      timeline.seed.json
      actors.seed.json
      sources.seed.json
      risks.seed.json
      requirements.concacaf.json
      requirements.fifa.json
    methodology/
      validation-rules.md
      source-taxonomy.md
      cost-model.md
    requests/
      informacion-publica-comude.md
      informacion-publica-concejo.md
      informacion-publica-idae.md

src/
  app/
    estadio-mario-camposeco/
      page.tsx
      historia/
      timeline/
      documentos/
      costos/
      riesgos/
      tecnico/
      actores/
      comparables/
  lib/
    estadio/
      data-model.ts
      source-validation.ts
      cost-model.ts
      risk-model.ts
  components/
    estadio/
      Timeline.tsx
      SourceBadge.tsx
      EvidenceViewer.tsx
      RiskMatrix.tsx
      CostDashboard.tsx
      ComplianceChecklist.tsx
```

Nota: esta estructura es propuesta. No se debe implementar hasta aprobar alcance, ubicacion dentro de la app y nivel de persistencia.

## 22. Proxima accion recomendada

No programar todavia. El siguiente paso profesional es convertir esta investigacion inicial en:

1. Una matriz de fuentes con prioridad.
2. Solicitudes de informacion publica.
3. Un seed documental versionado.
4. Un esquema de base de datos definitivo.
5. Wireframes de dashboards basados en la informacion real disponible.

