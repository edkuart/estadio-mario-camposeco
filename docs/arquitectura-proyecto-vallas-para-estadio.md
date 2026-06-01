# Arquitectura del proyecto Vallas para reutilizacion en Estadio Mario Camposeco

Fecha de analisis: 2026-05-28  
Repositorio analizado: `c:\Users\Dell\Projects\valla-gt\valla-frontend`  
Documento destino: `c:\Users\Dell\Projects\meditrack\apps\frontend\docs\arquitectura-proyecto-vallas-para-estadio.md`  
Estado: informe tecnico; no implementacion

## 1. Resumen ejecutivo

El proyecto "Vallas", ubicado como proyecto hermano en `c:\Users\Dell\Projects\valla-gt\valla-frontend`, es una plataforma documental y financiera para una valla publicitaria premium en Salcaja, Quetzaltenango.

No esta dentro del monorepo `meditrack`; dentro de `meditrack` no se encontro codigo de Vallas. La referencia real vive en el proyecto separado `valla-gt`.

La arquitectura de Vallas es altamente reutilizable para el proyecto del Estadio Mario Camposeco porque ya resuelve un patron muy parecido:

- Home ejecutiva con hero, estado, metricas y enlaces de exploracion.
- Rutas publicas documentales por tema.
- Datos estructurados en `src/data`.
- Paginas de investigacion con slugs.
- Timeline por fases.
- Presupuesto por categorias y renglones.
- Directorio de proveedores.
- Secciones tecnicas con tablas y metricas.
- Visualizaciones financieras con Recharts.
- Mapa/ubicacion embebida.
- Portal privado con paneles administrativos/accionistas.
- Estetica sobria, oscura, tecnica, tipo expediente premium.

La adaptacion recomendada no debe copiar literalmente el contenido ni el tema visual industrial-dorado. Si se reutiliza la arquitectura, el estadio deberia cambiar hacia una identidad civico-deportiva-documental: verde oscuro/cancha, rojo-vino o granate por Xelaju, blanco/cal, acentos dorados muy moderados y fondos oscuros o neutros para mantener lectura ejecutiva.

## 2. Donde esta ubicado el proyecto Vallas

Ubicacion encontrada:

```text
c:\Users\Dell\Projects\valla-gt\valla-frontend
```

Busqueda realizada:

- En `c:\Users\Dell\Projects\meditrack\apps\frontend`: no hay rutas, componentes ni datos de Vallas.
- En `c:\Users\Dell\Projects\meditrack\apps`: no hay proyecto Vallas.
- En `c:\Users\Dell\Projects`: aparece el directorio `valla-gt`.

Conclusion:

Vallas es un proyecto Next independiente, no un modulo interno de Meditrack. Para construir Estadio Mario Camposeco dentro de `meditrack/apps/frontend`, la referencia debe usarse como arquitectura visual/documental externa.

## 3. Mapa de archivos encontrados

### 3.1 Raiz del proyecto

```text
valla-frontend/
  package.json
  next.config.ts
  tsconfig.json
  biome.json
  postcss.config.mjs
  README.md
  .env.example
  src/
  public/
```

### 3.2 Rutas App Router

```text
src/app/
  layout.tsx
  globals.css
  icon.svg
  favicon.ico

  (public)/
    layout.tsx
    page.tsx
    proyecto/page.tsx
    ingenieria/page.tsx
    terreno/page.tsx
    materiales/page.tsx
    presupuesto/page.tsx
    roi/page.tsx
    investigacion/page.tsx
    investigacion/[slug]/page.tsx
    timeline/page.tsx
    futuro/page.tsx
    galeria/page.tsx
    proveedores/page.tsx

  acceso/
    page.tsx
    actions.ts

  portal/
    page.tsx
    admin/page.tsx
    accionista/page.tsx

  api/
    map-preview/route.ts
```

### 3.3 Componentes

```text
src/components/
  layout/
    PublicNav.tsx
    Footer.tsx
    PrintButton.tsx

  primitives/
    AnimatedCounter.tsx
    MetricCard.tsx
    PageTransition.tsx
    SectionLinkCard.tsx
    SectionReveal.tsx
    StatusBadge.tsx

  ui/
    DataTable.tsx
    Disclaimer.tsx
    SectionHeader.tsx

  sections/
    roi/
      ROIChart.tsx
    terrain/
      TerrainMapPreview.tsx

  portal/
    PortalShell.tsx
    PortalAuthGate.tsx
    PortalLoginForm.tsx
    AdminDashboardLive.tsx
    AdminCapitalForms.tsx
    AdminCreateUserForm.tsx
    AdminDocumentsPanel.tsx
    AdminProjectForms.tsx
    ShareholderDashboardLive.tsx
    ShareholderDocumentsPanel.tsx
```

### 3.4 Datos

```text
src/data/
  project.ts
  timeline.ts
  engineering.ts
  terrain.ts
  terrain-map.ts
  materials.ts
  budget.ts
  roi.ts
  research.ts
  suppliers.ts
  portal.ts
```

### 3.5 Librerias internas

```text
src/lib/
  utils.ts
  roi-calculator.ts
  portal-api.ts
```

## 4. Stack y dependencias de Vallas

Segun `package.json`:

```text
Next.js 16.2.6
React 19.2.4
Tailwind CSS 4
Framer Motion 12
Recharts 3
next-mdx-remote 6
Biome
TypeScript
```

Observaciones:

- Meditrack usa Next 15 segun instrucciones del proyecto, asi que no se debe copiar codigo sin revisar compatibilidad.
- Vallas usa Tailwind 4 con tokens CSS en `globals.css`.
- `framer-motion` sostiene transiciones y reveals.
- `recharts` sostiene la grafica ROI.
- `next-mdx-remote` esta instalado, pero la pagina dinamica de investigacion usa contenido inline en un objeto `ARTICLE_CONTENT`, no MDX externo real.

## 5. Rutas y flujo de navegacion

### 5.1 Rutas publicas principales

| Ruta Vallas | Funcion actual | Equivalente recomendado Estadio |
|---|---|---|
| `/` | Home ejecutiva | Dashboard ejecutivo del proyecto |
| `/proyecto` | Vision, estado, ubicacion, estrategia | Proyecto de ampliacion/remodelacion |
| `/ingenieria` | Especificaciones estructurales/electricas | Viabilidad tecnica, FIFA/Concacaf, AGIES/CONRED |
| `/terreno` | Terreno, coordenadas, mapa, topografia | Ubicacion urbana del estadio, 14 avenida, entorno |
| `/materiales` | Catalogo tecnico de materiales | Concreto, acero, graderios, iluminacion, drenajes |
| `/presupuesto` | Presupuesto preliminar por categorias | Costos estimados/oficiales y renglones Guatecompras |
| `/roi` | Escenarios financieros para accionistas | Dashboard financiero: CAPEX, costo/asiento, escenarios |
| `/investigacion` | Indice de articulos documentales | Centro documental: fuentes, estudios, actas, permisos |
| `/investigacion/[slug]` | Articulo detallado | Fichas documentales/analisis por tema |
| `/timeline` | Cronograma por fases | Historia + linea de tiempo prelicitacion/obra |
| `/futuro` | Vision LED-ready | Escenarios futuros del estadio |
| `/galeria` | Renders/fotos | Renders oficiales, fotos actuales, planos |
| `/proveedores` | Directorio por especialidad | Constructoras, proveedores, consultores |
| `/portal` | Acceso privado | Admin documental o sala interna |
| `/portal/admin` | Gestion admin | Carga de documentos, costos, eventos |
| `/portal/accionista` | Vista accionistas | Puede transformarse en vista "observatorio" o "auditoria" |

### 5.2 Navegacion

`PublicNav.tsx` define dos listas:

- `NAV_LINKS`: navegacion principal de escritorio.
- `ALL_SECTIONS`: navegacion completa en drawer movil.

Patrones:

- Header sticky de 64 px.
- Fondo semitransparente con blur.
- Logo pequeño a la izquierda.
- Links monospace, uppercase, letter spacing alto.
- Indicador activo con punto de acento.
- Enlace persistente a portal privado.
- Drawer movil full-width bajo header.

Para Estadio:

- Mantener header sticky, links uppercase y drawer movil.
- Cambiar marca `VALLA GT` por `Mario Camposeco` o `Observatorio Mario Camposeco`.
- Cambiar secciones: Proyecto, Historia, Timeline, Documentos, Costos, Tecnico, Actores, Riesgos, Proveedores.
- Portal privado puede quedar para fase posterior.

## 6. Arquitectura visual

### 6.1 Tema base

Vallas usa un lenguaje visual oscuro-industrial:

```css
--bg-base: #080809
--bg-elevated: #0f0f11
--bg-card: #141417
--bg-subtle: #1c1c20
--accent: #b8945a
--accent-dim: #7a623c
--text-primary: #e8e6e1
--text-secondary: #8a8790
--text-muted: #4a4850
```

Semanticos:

```css
--success: #2d6a4f
--warning: #8b6914
--error: #7a2020
--info: #1a3a5c
```

### 6.2 Tipografia

En `src/app/layout.tsx`:

- `Syne`: display, pesos 700/800.
- `Inter`: sans principal.
- `JetBrains Mono`: datos, etiquetas, valores tecnicos.

Patron:

- Titulos grandes con `font-display`, peso 700, tracking negativo.
- Etiquetas/eyebrows con `font-mono`, uppercase, tracking ancho.
- Texto explicativo con Inter, gris secundario.

Para Estadio:

- Se puede conservar la triada tipografica.
- Cambiar el tono de H1 a algo mas civico/deportivo.
- Mantener mono para evidencia, fechas, costos, NOG, permisos.

### 6.3 Espaciado y layout

Patrones recurrentes:

- Contenedor maximo: `max-w-7xl`.
- Padding horizontal: `px-6`.
- Padding vertical de paginas: `py-16`.
- Secciones grandes: 56, 80, 96 px.
- Cards con radio 8-12 px.
- Borders sutiles `rgba(255,255,255,0.07)`.
- Separadores horizontales finos.
- Grids responsive: 1 columna mobile, 2-3 desktop, 6 para metricas.
- Fondos por bandas, no cards anidados en exceso.

### 6.4 Efectos visuales

- `grain` en hero.
- Grid sutil de fondo en hero.
- Glow radial de acento en home.
- `SectionReveal` con framer-motion: opacity + translateY.
- `PageTransition` para cambios de ruta.
- Hover de cards por border/background.
- `AnimatedCounter` para metricas numericas.

Para Estadio:

- Mantener motion sutil.
- Reducir glow decorativo si se busca tono documental.
- Reemplazar grid industrial por textura/lineas arquitectonicas o cartografia urbana si se implementa despues.

## 7. Estructura de paginas publicas

### 7.1 Home `src/app/(public)/page.tsx`

Secciones:

1. Hero full-height `min-h-[94vh]`.
2. Estado del proyecto + fecha/lugar.
3. H1 grande.
4. Resumen ejecutivo.
5. Metrica financiera principal.
6. Banda de metricas clave con `MetricCard`.
7. Snapshot estrategico con highlights numerados.
8. Grid de enlaces a secciones con `SectionLinkCard`.

Datos usados:

- `PROJECT.keyMetrics`
- `PROJECT.summary`
- `PROJECT.vision`
- `PROJECT.highlights`

Equivalente Estadio:

- Hero: "Estadio Mario Camposeco" / "Observatorio de ampliacion y renovacion".
- Estado: "Prelicitacion / pendiente Guatecompras".
- Metricas: capacidad actual, capacidad proyectada, costo oficial pendiente, permisos localizados, fuentes cargadas, riesgos criticos.
- Snapshot: historia, proyecto, 14 avenida, IDAEH, Guatecompras, Concacaf.
- Grid de secciones: Historia, Proyecto, Timeline, Documentos, Costos, Tecnico, Actores, Riesgos, Proveedores.

### 7.2 Proyecto `src/app/(public)/proyecto/page.tsx`

Secciones:

- Header con `SectionHeader`.
- Status row: estado, ubicacion, inicio estimado, operacion estimada.
- Preview de mapa con `TerrainMapPreview`.
- Metric cards.
- Vision + ventajas clave.
- Card destacada de escalabilidad futura.

Para Estadio:

- Estado, ubicacion, fase administrativa, siguiente hito.
- Mapa del estadio y su entorno urbano.
- Metricas: aforo actual, meta de aforo, sectores afectados, permisos, costo estimado por escenario.
- Vision: estadio municipal, Xelaju, patrimonio, eventos internacionales.
- "Escalabilidad futura" se convierte en "Fases de obra": fase 1 graderio norte/14 avenida, fase 2 tribuna/camerinos.

### 7.3 Ingenieria `src/app/(public)/ingenieria/page.tsx`

Patron mas reutilizable tecnicamente:

- `SectionHeader`.
- `Disclaimer`.
- Loop sobre `ENGINEERING`.
- Layout de dos columnas:
  - izquierda sticky con numero, nombre y descripcion de categoria.
  - derecha con primeras 3 specs como `MetricCard` y resto como `DataTable`.
- Callout final destacado con capacidades clave.

Para Estadio:

- Categorias: Estructura, Graderios, Cimentacion, Drenaje, Iluminacion, Seguridad/evacuacion, Accesibilidad, Cancha, Broadcast, Patrimonio.
- Specs: lux, capacidad, rutas evacuacion, m2 de construccion, asientos, concreto, acero, cumplimiento AGIES, CONRED, FIFA, Concacaf.

### 7.4 Presupuesto `src/app/(public)/presupuesto/page.tsx`

Secciones:

- Header + disclaimer.
- Hero de inversion total.
- Escenario ampliado.
- Add-ons operativos.
- Energia solar.
- Breakdown por categorias y renglones.
- Tabla resumen y contingencia.

Datos:

- `BUDGET_META`
- `BUDGET`
- `DOUBLE_FACE_SCENARIOS`
- `OPERATING_PROTECTION_ITEMS`
- `SOLAR_POWER_SCENARIOS`

Para Estadio:

- Hero: costo oficial si existe; si no, rango preliminar.
- Escenarios: conservador, intermedio, alto.
- Renglones: concreto, acero, graderios, drenajes, iluminacion, pantallas, cesped, banos, camerinos, palcos, museo, cafeteria, parqueo, urbanizacion, supervisiones.
- Tabla resumen: por fase y por componente.
- Contingencia y costo por asiento.

### 7.5 ROI `src/app/(public)/roi/page.tsx`

Vallas lo usa para inversionistas. Componentes:

- Contexto de mercado.
- Tarifas de referencia.
- Tres escenarios: conservador, base, optimista.
- Payback hero metric.
- Data rows por escenario.
- Grafica `ROIChart` con Recharts.

Para Estadio:

No conviene llamarlo ROI publico si el estadio es municipal. Recomendacion:

- Renombrar a `/financiero`.
- Escenarios: presupuesto municipal, endeudamiento/alianzas, fases multianuales.
- Metricas: costo por asiento, costo por m2, CAPEX por componente, avance fisico-financiero, sobrecosto vs contrato.
- Grafica: desembolsos acumulados, avance fisico vs financiero, comparables por asiento.

### 7.6 Investigacion `src/app/(public)/investigacion/page.tsx`

Patron:

- Articulos destacados.
- Archivo de articulos.
- Clasificacion por categoria.
- Relevancia: Alta, Media, Informativa.
- Tiempo de lectura.
- Slug por articulo.

Datos:

- `RESEARCH_ARTICLES` en `src/data/research.ts`.

Para Estadio:

- Categorias: Historia, Permisos, Guatecompras, Patrimonio, Tecnico, Financiero, Politico, Concacaf/FIFA, Urbanismo, Comparables.
- Relevancia: Critica, Alta, Media, Referencial.
- Articulos/fichas: IDAEH, MARN, COMUDE, Guatecompras, capacidad, 14 avenida, costos, comparables.

### 7.7 Investigacion dinamica `src/app/(public)/investigacion/[slug]/page.tsx`

Funcion:

- `generateStaticParams()` genera una pagina por articulo.
- `generateMetadata()` crea metadata por slug.
- `ARTICLE_CONTENT` guarda contenido largo en strings.
- `renderInline()` transforma links Markdown y bold hacia HTML.
- Usa `dangerouslySetInnerHTML` en el cuerpo del articulo.

Observacion tecnica:

Este enfoque sirvio para Vallas, pero para Estadio conviene mejorar:

- Separar contenido en archivos MD/MDX o JSON documental.
- Evitar meter articulos largos inline dentro de `page.tsx`.
- Mantener `generateStaticParams` si se usan slugs estaticos.
- Agregar metadata documental: fuente, confiabilidad, fecha, entidad, documento relacionado.

### 7.8 Timeline `src/app/(public)/timeline/page.tsx`

Patron:

- Timeline vertical centrada en columna `max-w-4xl`.
- Linea vertical a la izquierda.
- Punto por fase.
- Estado con `StatusBadge`.
- Periodo como badge.
- Milestones como lista.

Datos:

- `TIMELINE` con `id`, `order`, `name`, `description`, `status`, `period`, `milestones`.

Para Estadio:

- Extender de fases a eventos historicos/documentales.
- Agregar categoria, fecha exacta, fuente, confiabilidad.
- Mantener vista por fases para roadmap y crear vista historica para eventos.

### 7.9 Proveedores `src/app/(public)/proveedores/page.tsx`

Patron:

- Agrupa proveedores por especialidad.
- Muestra conteo por especialidad.
- Card por proveedor con nombre, sitio web, ubicacion, contacto, notas y status.
- `StatusBadge` mapea `identified`, `contacted`, `quoted`, `selected`.

Para Estadio:

- Especialidades: constructora general, estructura metalica, concreto, acero, iluminacion deportiva, pantallas, cesped, drenajes, butacas, seguridad/torniquetes, arquitectura, supervision, laboratorio.
- Status: identificado, precalificado, oferente Guatecompras, adjudicado, descartado, pendiente validar.

### 7.10 Terreno/Mapa

`TerrainMapPreview.tsx`:

- Usa `TERRAIN_MAP` con coordenadas.
- Embebe Google Maps.
- Si existe `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`, usa Maps Embed API.
- Si no, usa fallback `maps.google.com/maps?q=...&output=embed`.
- Muestra coordenadas, ruta, municipio y botones "Abrir mapa" y "Ruta".

Para Estadio:

- Coordenadas del Estadio Mario Camposeco.
- Mapa urbano: 3a calle, 14 avenida, accesos, parqueos, rutas de evacuacion.
- Podria tener capas futuras: intervenciones, cierres viales, sectores de graderio.

### 7.11 Portal privado

`PortalShell.tsx` define:

- Shell full screen con fondo oscuro y grid sutil.
- Header con marca y nav: Acceso, Admin, Accionista.
- Layout 2 columnas: texto/intro + contenido.
- Componentes `PortalMetric` y `PortalPanel`.

Para Estadio:

- Fase posterior.
- Podria ser portal de administracion documental, no accionistas.
- Rutas futuras:
  - `/portal`: login.
  - `/portal/admin`: cargar fuentes, documentos, eventos, costos.
  - `/portal/auditoria`: vista de evidencia y cambios.

## 8. Modelo de informacion de Vallas

### 8.1 `project.ts`

Contiene:

- Identidad del proyecto.
- Ubicacion.
- Estado.
- Fechas objetivo.
- Resumen.
- Vision.
- Metricas clave.
- Highlights.
- Roadmap LED.

Adaptacion:

Crear `stadium-project.ts` con:

- Nombre oficial.
- Ubicacion.
- Estado administrativo.
- Hitos esperados.
- Resumen historico.
- Metricas: capacidad actual/proyectada, costo oficial, costo estimado, permisos, fuentes, riesgos.
- Highlights: historia, Xelaju MC, COMUDE, IDAEH, MARN, Guatecompras, Concacaf.
- Roadmap por fases.

### 8.2 `timeline.ts`

Vallas modela fases de proyecto, no eventos atomicos. Para Estadio conviene dos estructuras:

- `projectPhases`: preinversion, permisos, licitacion, adjudicacion, obra, entrega.
- `timelineEvents`: historia y eventos documentales con fecha, fuente y confiabilidad.

### 8.3 `budget.ts`

Vallas estructura presupuesto asi:

- `BUDGET_META`: version, fecha, currency, disclaimer, totalMin, totalMax, contingencyPct.
- Arrays de escenarios.
- `BUDGET`: categorias con items min/max/notas.

Para Estadio:

Mantener casi igual, pero agregar:

- `costType`: oficial, estimado, comparable, mercado.
- `sourceId`.
- `phase`.
- `unit`, `quantity`, `unitCost`.
- `confidence`.

### 8.4 `research.ts`

Vallas usa indice documental:

- slug.
- title.
- summary.
- category.
- relevance.
- source.
- date.
- readingMinutes.

Para Estadio:

Extender a:

- `sourceIds`.
- `verificationStatus`.
- `officialDocument`.
- `relatedEntities`.
- `claims`.
- `lastReviewedAt`.

### 8.5 `suppliers.ts`

Vallas usa:

- id.
- name.
- specialty.
- location.
- website.
- contact.
- notes.
- status.

Para Estadio:

Agregar:

- experiencia en obra publica.
- NIT si se obtiene.
- participacion Guatecompras.
- contratos previos.
- conflicto/interes.
- evidencia.
- categoria de proveedor.

### 8.6 `engineering.ts`

Vallas modela categorias tecnicas y specs. Muy reutilizable.

Para Estadio:

Categorias recomendadas:

- Estructura y sismo.
- Cimentacion.
- Graderios y aforo.
- Drenajes.
- Cancha.
- Iluminacion.
- Electricidad y respaldo.
- Seguridad humana/CONRED.
- Accesibilidad.
- Broadcast/Concacaf.
- Patrimonio/IDAEH.
- Movilidad urbana.

## 9. Componentes principales y reutilizacion

| Componente | Uso actual | Reutilizacion Estadio |
|---|---|---|
| `PublicNav` | Navegacion publica | Copiar/adaptar estructura y cambiar links/marca |
| `Footer` | Links + disclaimer + print | Copiar/adaptar |
| `PrintButton` | Impresion/PDF | Reutilizable para reportes |
| `PageTransition` | Transicion entre paginas | Reutilizable si se mantiene framer-motion |
| `SectionReveal` | Animacion por seccion | Reutilizable |
| `SectionHeader` | Encabezado estandar | Reutilizable casi igual |
| `MetricCard` | KPIs | Reutilizable con colores nuevos |
| `StatusBadge` | Estados | Reutilizable, ampliar estados |
| `SectionLinkCard` | Card de navegacion | Reutilizable |
| `DataTable` | Tabla label/value | Reutilizable |
| `Disclaimer` | Nota metodologica | Muy reutilizable |
| `ROIChart` | Line chart financiero | Adaptar a avance/costos/comparables |
| `TerrainMapPreview` | Mapa embebido | Adaptar a estadio |
| `PortalShell` | Portal privado | Fase posterior |
| `PortalMetric` | Metric card portal | Reutilizable |
| `PortalPanel` | Panel portal | Reutilizable |

## 10. Sistema de cards, timeline, dashboards y tablas

### 10.1 Cards

Tipos:

- `MetricCard`: KPI compacto.
- `SectionLinkCard`: navegacion de secciones.
- Cards inline por highlights numerados.
- Cards de escenarios financieros.
- Cards de proveedores.
- Cards de articulos de investigacion.
- Cards de portal.

Patron visual:

- Fondo `bg-card` o `bg-elevated`.
- Border fino.
- Radio 8-10 px.
- Hover por border mas visible.
- Acento solo en cards destacadas.

### 10.2 Timeline

Vallas usa timeline vertical de fases. Es simple y claro.

Para Estadio:

- Mantener vertical para vista narrativa.
- Agregar filtros por tipo: historico, permiso, contratacion, obra, politico, tecnico.
- Agregar fuente por evento.
- Diferenciar fecha exacta vs aproximada.

### 10.3 Dashboards

Vallas tiene tres dashboards implicitos:

- Home: dashboard ejecutivo.
- Presupuesto: dashboard financiero de CAPEX.
- ROI: dashboard financiero de retorno.

Estadio deberia tener:

- Ejecutivo.
- Financiero.
- Politico.
- Tecnico.
- Documental.
- Riesgos.

### 10.4 Tablas

Vallas usa:

- `DataTable` para specs label/value.
- Tablas manuales para presupuesto y resumen.
- Tablas en articulos inline.

Para Estadio:

- Mantener tabla label/value para specs.
- Crear tabla documental mas robusta para fuentes: fecha, entidad, tipo, confiabilidad, estado.
- Crear tabla de costos por renglones.

## 11. Datos que muestra Vallas

Vallas muestra:

- Nombre, ubicacion y resumen del proyecto.
- Estado y fechas objetivo.
- Metricas: altura, area por cara, area doble cara, pendiente, inversion, retorno.
- Ventajas/estrategia.
- Especificaciones tecnicas.
- Terreno y mapa.
- Materiales.
- Presupuesto por categorias.
- ROI y escenarios financieros.
- Articulos de investigacion.
- Timeline.
- Vision futura LED.
- Galeria/renders.
- Proveedores por especialidad.
- Portal privado con informacion de admin/accionistas.

Para Estadio:

Datos equivalentes:

- Historia, estado, nombre oficial.
- Aforo actual/proyectado.
- Sector intervenido.
- Costo oficial/estimado.
- Permisos.
- Fuentes oficiales.
- Actores.
- Proveedores/contratistas.
- Timeline historico y administrativo.
- Riesgos.
- Comparables.
- Avance fisico-financiero.
- Renderizaciones oficiales.

## 12. Que partes son reutilizables casi igual

Copiar casi igual, con cambios de naming/tema:

- Layout publico: `src/app/(public)/layout.tsx`.
- `PublicNav.tsx`, ajustando links.
- `Footer.tsx`, ajustando disclaimers.
- `SectionHeader.tsx`.
- `Disclaimer.tsx`.
- `MetricCard.tsx`.
- `StatusBadge.tsx`, ampliando estados.
- `SectionReveal.tsx`.
- `PageTransition.tsx`.
- `SectionLinkCard.tsx`.
- `DataTable.tsx`.
- Estructura de `page.tsx` home.
- Estructura de `/timeline`.
- Estructura de `/proveedores`.
- Estructura de `/ingenieria`.
- Estructura de `/presupuesto`.
- `TerrainMapPreview.tsx`, cambiando data y texto.
- `formatCurrency`, `formatRange`, `cn`.

## 13. Que partes deben cambiar

Cambios necesarios:

- Marca: `VALLA GT` -> Estadio Mario Camposeco / Observatorio Mario Camposeco.
- Paleta industrial dorada -> paleta estadio/civica.
- H1 y copy comercial -> lenguaje institucional/documental.
- ROI accionistas -> financiero publico/costo-obra.
- Portal accionista -> portal documental/admin.
- `ARTICLE_CONTENT` inline -> preferible MD/MDX/JSON documental.
- Datos de valla -> datos de estadio.
- Timeline de fases privadas -> timeline historico + permisos + contratacion.
- Proveedores de vallas -> contratistas/proveedores de infraestructura deportiva.
- Mapa de terreno rural -> mapa urbano/estadio.
- Normativa Decreto 34-2003/DGAC -> IDAEH, MARN, CONRED, AGIES, FIFA, Concacaf, Guatecompras, SEGEPLAN.
- `ROIChart` -> grafica de costos, comparables o avance.

## 14. Estructura recomendada para copiar/adaptar

Recomendacion de rutas para el Estadio:

```text
src/app/estadio-mario-camposeco/
  page.tsx
  historia/page.tsx
  proyecto/page.tsx
  timeline/page.tsx
  documentos/page.tsx
  tecnico/page.tsx
  costos/page.tsx
  actores/page.tsx
  riesgos/page.tsx
  proveedores/page.tsx
  comparables/page.tsx
  galeria/page.tsx
  metodologia/page.tsx
```

Recomendacion de componentes:

```text
src/components/estadio/
  EstadioNav.tsx
  EstadioFooter.tsx
  EstadioMetricCard.tsx
  EstadioStatusBadge.tsx
  EstadioTimeline.tsx
  EvidenceCard.tsx
  SourceBadge.tsx
  RiskMatrix.tsx
  CostBreakdownTable.tsx
  ComplianceChecklist.tsx
  StadiumMapPreview.tsx
```

Recomendacion de datos:

```text
src/data/estadio/
  project.ts
  history.ts
  timeline.ts
  sources.ts
  documents.ts
  actors.ts
  costs.ts
  suppliers.ts
  risks.ts
  technical.ts
  comparables.ts
  gallery.ts
```

Nota: esta estructura no fue creada; es propuesta para aprobacion.

## 15. Cambios minimos para adaptar Vallas al Estadio

Si se busca una primera version rapida, estos son los cambios minimos:

1. Crear ruta nueva `/estadio-mario-camposeco`.
2. Copiar la estructura de home de Vallas.
3. Crear datos `stadiumProject`, `stadiumTimeline`, `stadiumCosts`, `stadiumSuppliers`, `stadiumResearch`.
4. Reusar `SectionHeader`, `MetricCard`, `SectionReveal`, `StatusBadge`, `DataTable`, `SectionLinkCard`.
5. Cambiar nav a secciones del estadio.
6. Cambiar tema visual en tokens locales o clases wrapper.
7. Transformar `/roi` en `/costos` o `/financiero`.
8. Transformar `/ingenieria` en `/tecnico`.
9. Transformar `/investigacion` en `/documentos` o `/investigacion`.
10. Transformar `/futuro` en `/escenarios`.
11. Mantener `/proveedores`, `/timeline`, `/galeria`.

## 16. Referencias principales para construir la nueva pagina

Archivos mas importantes:

```text
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\app\(public)\page.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\app\(public)\proyecto\page.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\app\(public)\ingenieria\page.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\app\(public)\presupuesto\page.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\app\(public)\roi\page.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\app\(public)\investigacion\page.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\app\(public)\investigacion\[slug]\page.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\app\(public)\timeline\page.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\app\(public)\proveedores\page.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\components\layout\PublicNav.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\components\layout\Footer.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\components\primitives\MetricCard.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\components\primitives\StatusBadge.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\components\primitives\SectionReveal.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\components\ui\DataTable.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\components\ui\SectionHeader.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\components\sections\terrain\TerrainMapPreview.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\components\sections\roi\ROIChart.tsx
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\data\project.ts
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\data\timeline.ts
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\data\budget.ts
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\data\research.ts
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\data\suppliers.ts
c:\Users\Dell\Projects\valla-gt\valla-frontend\src\data\engineering.ts
```

## 17. Archivos que NO deben tocarse

No tocar en esta fase:

```text
c:\Users\Dell\Projects\valla-gt\valla-frontend\**
```

Motivo: Vallas es referencia externa. No se debe modificar para crear el estadio.

No tocar en Meditrack sin aprobacion:

```text
src/app/(doctor)/**
src/app/(portal)/**
src/app/(admin)/**
src/components/doctor/**
src/components/portal/**
src/lib/doctor/**
src/lib/portal/**
```

Motivo: son modulos clinicos existentes. El proyecto Estadio debe vivir aislado como ruta/documentacion nueva o como carpeta propia.

Tampoco tocar:

```text
../backend/**
```

Motivo: el informe y futura pagina son frontend/documentacion; backend no es necesario en una primera etapa estatica.

## 18. Archivos candidatos para copiar/adaptar

Copiar/adaptar despues de aprobacion:

```text
PublicNav.tsx -> EstadioNav.tsx
Footer.tsx -> EstadioFooter.tsx
SectionHeader.tsx -> reutilizable o EstadioSectionHeader.tsx
Disclaimer.tsx -> reutilizable
MetricCard.tsx -> reutilizable/adaptar tema
StatusBadge.tsx -> ampliar estados
SectionReveal.tsx -> reutilizable
PageTransition.tsx -> reutilizable
SectionLinkCard.tsx -> reutilizable/adaptar iconografia
DataTable.tsx -> reutilizable
TerrainMapPreview.tsx -> StadiumMapPreview.tsx
ROIChart.tsx -> CostProgressChart.tsx / ComparableCostChart.tsx
src/app/(public)/page.tsx -> src/app/estadio-mario-camposeco/page.tsx
src/app/(public)/timeline/page.tsx -> src/app/estadio-mario-camposeco/timeline/page.tsx
src/app/(public)/presupuesto/page.tsx -> src/app/estadio-mario-camposeco/costos/page.tsx
src/app/(public)/ingenieria/page.tsx -> src/app/estadio-mario-camposeco/tecnico/page.tsx
src/app/(public)/proveedores/page.tsx -> src/app/estadio-mario-camposeco/proveedores/page.tsx
src/app/(public)/investigacion/page.tsx -> src/app/estadio-mario-camposeco/documentos/page.tsx
```

## 19. Recomendacion de adaptacion al Estadio Mario Camposeco

### 19.1 Arquitectura recomendada

Copiar el modelo de Vallas como "site documental modular", no como portal medico ni como landing simple.

Estructura recomendada:

- Home ejecutiva.
- Proyecto.
- Historia.
- Timeline.
- Documentos/fuentes.
- Costos.
- Tecnico.
- Actores.
- Riesgos.
- Proveedores.
- Comparables.
- Galeria/renders.
- Escenarios.

### 19.2 Tema visual recomendado

Paleta sugerida:

- Fondo base: negro verdoso o grafito `#07100d` / `#0b0f0d`.
- Card: `#121715`.
- Acento principal: verde cancha `#2f7d4a` o `#3c8f5a`.
- Acento institucional/deportivo: rojo vino/granate `#8f1f2d`.
- Acento documental: cal/piedra `#d8d2c2`.
- Texto principal: `#f0eee7`.
- Texto secundario: `#9c9990`.
- Riesgos: warning amber, error red.

No usar una paleta dominada por morado/azul ni mantener el dorado industrial como color principal.

### 19.3 Contenido minimo inicial

Home:

- Estado: prelicitacion / Guatecompras pendiente.
- Metricas: aforo actual, aforo proyectado, permisos, fuentes, costo estimado, riesgos.
- Secciones de exploracion.

Proyecto:

- Alcance reportado.
- Fases.
- Actores.
- Mapa.

Tecnico:

- FIFA/Concacaf.
- CONRED.
- AGIES.
- IDAEH.
- MARN.

Costos:

- Escenarios.
- Renglones.
- Comparables.

Documentos:

- Fuentes oficiales.
- Noticias como evidencia secundaria.
- Estado de validacion.

## 20. Roadmap para construir usando esta arquitectura

### Fase 0: Aprobacion

- Confirmar que se construira dentro de `meditrack/apps/frontend`.
- Confirmar ruta base: `/estadio-mario-camposeco` o `/investigacion/estadio-mario-camposeco`.
- Confirmar si se copia estilo Vallas con tema adaptado.

### Fase 1: Datos estaticos

- Crear `src/data/estadio/*`.
- Migrar del MD maestro a datos estructurados.
- Crear fuentes, timeline, actores, riesgos y costos.

### Fase 2: Componentes base

- Crear componentes `estadio` inspirados en Vallas.
- Evitar afectar componentes medicos existentes.
- Mantener arquitectura aislada.

### Fase 3: Pagina publica inicial

- Home.
- Proyecto.
- Timeline.
- Documentos.
- Costos.
- Tecnico.

### Fase 4: Dashboards

- Financiero.
- Riesgos.
- Cumplimiento tecnico.
- Actores.
- Proveedores.

### Fase 5: Evidencia documental

- Visor de fuentes.
- Fichas de documentos.
- Claims conflictivos.
- Links a PDFs, Guatecompras, MARN, IDAEH, SEGEPLAN.

### Fase 6: Portal/admin

- Solo si se aprueba persistencia.
- Carga de documentos.
- Edicion de timeline.
- Versionado de fuentes.

## 21. Conclusion

La arquitectura de Vallas es una excelente base para el Estadio Mario Camposeco porque ya combina investigacion, presentacion ejecutiva, datos estructurados, presupuesto, timeline, proveedores y visualizaciones.

La mayor decision tecnica es si el Estadio sera:

- una seccion estatica dentro de Meditrack con datos versionados en TypeScript/MD, o
- una plataforma viva con backend/documentos/carga administrativa.

Para empezar, la ruta estatica modular inspirada en Vallas es suficiente y de bajo riesgo. El backend o portal documental puede esperar hasta que existan NOG, bases, permisos y documentos oficiales que ameriten administracion persistente.

