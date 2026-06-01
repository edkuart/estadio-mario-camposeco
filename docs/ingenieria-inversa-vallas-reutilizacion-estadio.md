# Ingenieria inversa Vallas: reutilizacion como base para Estadio Mario Camposeco

Fecha: 2026-05-28  
Referencia analizada: `c:\Users\Dell\Projects\valla-gt\valla-frontend`  
Destino potencial: `c:\Users\Dell\Projects\meditrack\apps\frontend`  
Estado: analisis tecnico; no implementacion

## 1. Decision ejecutiva

El proyecto Vallas **si conviene usarlo como base arquitectonica del Estadio Mario Camposeco**, pero no como clon literal de negocio.

La razon: Vallas ya resuelve el 70-85% de la estructura de una plataforma investigativa-publica: navegacion, home ejecutiva, metricas, timeline, investigacion, presupuesto, proveedores, galeria, mapa, tablas, disclaimers, layout, motion y dashboard financiero. Lo que no resuelve suficientemente es un sistema documental formal de fuentes/evidencia/claims y una matriz de riesgos estructurada.

Recomendacion:

- **Clonar/adaptar la arquitectura frontend de Vallas**.
- **No copiar sin cambios la arquitectura de datos documental**, porque para el estadio se necesita mas rigor: fuentes oficiales, documentos, permisos, claims, conflictos, confiabilidad y versionado.
- **Construir el MVP del estadio como una version estatica modular**, usando Vallas como plantilla visual y funcional.
- Dejar backend/admin documental para una fase posterior.

Estimacion global:

| Area | % reutilizacion estimado |
|---|---:|
| Frontend general | 78% |
| Componentes | 85% |
| Dashboards | 65% |
| Investigacion/documentacion | 58% |
| Diseno visual/sistema UI | 82% |
| Datos/modelos | 52% |
| Navegacion/rutas | 80% |
| Timeline | 72% |
| Presupuesto/costos | 75% |
| Proveedores | 82% |
| Riesgos | 30% |
| Fuentes/evidencia | 35% |

Promedio tecnico ponderado recomendado: **70-74% reutilizable**.

## 2. Arquitectura funcional

### Que hace Vallas

Vallas funciona como una plataforma de presentacion, investigacion y gestion preliminar para un proyecto de infraestructura publicitaria. Su capa publica explica el proyecto, el terreno, la ingenieria, los materiales, el presupuesto, el ROI, proveedores, investigacion, timeline, futuro y galeria. Su capa privada agrega un portal con vistas admin/accionista.

### Datos que consume

- `PROJECT` desde `src/data/project.ts`.
- `TIMELINE` desde `src/data/timeline.ts`.
- `ENGINEERING` desde `src/data/engineering.ts`.
- `TERRAIN` y `TERRAIN_MAP`.
- `MATERIALS`.
- `BUDGET`, `BUDGET_META` y escenarios.
- `ROI_SCENARIOS`, `ROI_CONTEXT`.
- `RESEARCH_ARTICLES` y `ARTICLE_CONTENT`.
- `SUPPLIERS`.
- `portalAdminMetrics`, `constructionStages`, checklist y workflows.

### Componentes que usa

- Layout: `PublicNav`, `Footer`, `PageTransition`.
- Primitivos: `MetricCard`, `StatusBadge`, `SectionReveal`, `SectionLinkCard`, `AnimatedCounter`.
- UI: `SectionHeader`, `Disclaimer`, `DataTable`.
- Secciones: `TerrainMapPreview`, `ROIChart`.
- Portal: `PortalShell`, `PortalMetric`, `PortalPanel` y paneles admin/accionista.

### Dependencias

- Next.js App Router.
- React.
- Tailwind CSS 4.
- Framer Motion.
- Recharts.
- Google Maps embed opcional.
- Fuentes Google: Syne, Inter, JetBrains Mono.

### Reutilizacion

Alta. La estructura funcional se puede convertir casi directamente en un observatorio del estadio:

- `Proyecto` -> proyecto de ampliacion/remodelacion.
- `Ingenieria` -> dashboard tecnico.
- `Terreno` -> ubicacion urbana/14 avenida/accesos.
- `Materiales` -> concreto/acero/graderios/drenajes/iluminacion.
- `Presupuesto` -> costos oficiales/estimados.
- `ROI` -> dashboard financiero publico.
- `Investigacion` -> repositorio documental.
- `Timeline` -> historia + proceso administrativo.
- `Proveedores` -> constructoras/proveedores.
- `Galeria` -> renders/fotos/planos.

### Que modificar

- Eliminar supuestos de negocio privado/accionistas en la capa publica.
- Cambiar ROI por analisis financiero publico.
- Agregar fuentes oficiales y evidencia.
- Crear riesgos como entidad real.
- Adaptar portal privado a admin documental o dejarlo fuera del MVP.

Reutilizacion estimada: **78%**.

## 3. Arquitectura visual

### Que hace Vallas

Usa una estetica oscuro-industrial con acento dorado, cards compactas, borders sutiles, tipografia tecnica y grandes encabezados. Esta pensado como dossier premium para inversionistas.

### Datos que consume

No depende de datos para el tema, salvo textos y metricas que rellenan componentes.

### Componentes que usa

- `globals.css`: tokens de color, fuentes, radios, semanticos, print.
- `RootLayout`: carga fuentes.
- `PublicNav`: header oscuro con blur.
- `Footer`: cierre documental.
- `MetricCard`, `SectionLinkCard`, `StatusBadge`.
- `SectionReveal` y `PageTransition`.

### Dependencias

- Tailwind 4 con `@theme inline`.
- CSS variables.
- `next/font/google`.
- Framer Motion.

### Reutilizacion

Muy alta en sistema, media en identidad. La estructura visual es excelente para el estadio, pero el color dorado-industrial debe cambiar.

### Que modificar

- Paleta: reemplazar dorado industrial por verde cancha, granate/Xelaju, cal/piedra y acentos institucionales.
- Copy: cambiar tono de inversion privada a observatorio publico/documental.
- Hero: evitar que parezca landing comercial; debe ser dashboard documental.
- Footer: cambiar "documento confidencial" por "observatorio documental / informacion en validacion".

Reutilizacion estimada: **82%**.

## 4. Arquitectura de datos

### Que hace Vallas

Organiza datos como archivos TypeScript estaticos en `src/data`. Cada dominio tiene su archivo:

- Proyecto.
- Timeline.
- Terreno.
- Ingenieria.
- Materiales.
- Presupuesto.
- ROI.
- Investigacion.
- Proveedores.
- Portal.

Es simple, rapido y suficiente para un dossier controlado.

### Datos que consume

Datos estaticos tipados parcialmente con interfaces. No hay base de datos ni CMS para la parte publica.

### Componentes que usa

Cada pagina importa directamente su archivo de datos:

- `ProyectoPage` importa `PROJECT`.
- `TimelinePage` importa `TIMELINE`.
- `PresupuestoPage` importa `BUDGET`.
- `InvestigacionPage` importa `RESEARCH_ARTICLES`.
- `ProveedoresPage` importa `SUPPLIERS`.

### Dependencias

- TypeScript.
- Modulos ESM.
- No depende de backend para el sitio publico.

### Reutilizacion

Media-alta para el MVP, baja si se quiere inteligencia documental completa.

Para Estadio sirve como primera capa:

```text
src/data/estadio/project.ts
src/data/estadio/timeline.ts
src/data/estadio/costs.ts
src/data/estadio/suppliers.ts
src/data/estadio/technical.ts
src/data/estadio/research.ts
```

Pero falta:

- `sources.ts`.
- `documents.ts`.
- `claims.ts`.
- `risks.ts`.
- `actors.ts`.
- `permits.ts`.
- `comparables.ts`.

### Que modificar

- Separar datos narrativos de evidencia.
- Agregar IDs persistentes de fuente/documento.
- Agregar estado de verificacion.
- Agregar confiabilidad.
- Agregar relaciones entre fuentes, eventos, costos y claims.
- Evitar articulos largos inline dentro de componentes.

Reutilizacion estimada: **52%**.

## 5. Arquitectura de navegacion

### Que hace Vallas

`PublicNav` define:

- Links principales visibles en desktop.
- Drawer completo en mobile.
- Estado activo por `usePathname`.
- Header sticky con blur.
- Marca y acceso a portal.

Rutas publicas:

```text
/
/proyecto
/ingenieria
/terreno
/materiales
/presupuesto
/roi
/investigacion
/investigacion/[slug]
/timeline
/futuro
/galeria
/proveedores
```

### Datos que consume

Arrays internos:

- `NAV_LINKS`.
- `ALL_SECTIONS`.

### Componentes que usa

- `Link`.
- `usePathname`.
- Estado local React.

### Dependencias

- Next navigation.
- React hooks.

### Reutilizacion

Muy alta.

### Que modificar

Crear nav del estadio:

```text
/estadio-mario-camposeco
/estadio-mario-camposeco/proyecto
/estadio-mario-camposeco/historia
/estadio-mario-camposeco/timeline
/estadio-mario-camposeco/documentos
/estadio-mario-camposeco/costos
/estadio-mario-camposeco/tecnico
/estadio-mario-camposeco/actores
/estadio-mario-camposeco/riesgos
/estadio-mario-camposeco/proveedores
/estadio-mario-camposeco/galeria
```

Reutilizacion estimada: **80%**.

## 6. Arquitectura documental

### Que hace Vallas

Vallas tiene una arquitectura documental ligera:

- Indice de investigacion en `RESEARCH_ARTICLES`.
- Paginas por slug.
- Contenido largo dentro de `ARTICLE_CONTENT`.
- Campo `source` como string.
- Disclaimers por seccion.
- Algunas secciones de "Fuentes consultadas" dentro del texto del articulo.

No tiene repositorio documental formal.

### Datos que consume

- `RESEARCH_ARTICLES`.
- `ARTICLE_CONTENT`.
- `source` textual por articulo.

### Componentes que usa

- `InvestigacionPage`.
- `Investigacion/[slug]/page.tsx`.
- `SectionReveal`.
- `TerrainMapPreview` en articulos relacionados con ubicacion.
- HTML generado por `renderInline()`.

### Dependencias

- Next static params.
- `notFound`.
- Renderizado HTML.

### Reutilizacion

Media. Sirve para articulos, no para expediente publico robusto.

### Que modificar

Para Estadio se necesita:

- `sources.ts` formal.
- `documents.ts`.
- `claims.ts`.
- `claimSources.ts`.
- `documentType`, `issuer`, `publishedAt`, `accessedAt`, `url`, `fileHash`.
- Estado: oficial, noticia, declaracion, pendiente, contradicho.
- Fichas de documento y no solo articulos.
- Evitar `ARTICLE_CONTENT` gigante en un page component.

Reutilizacion estimada: **45-58%** segun profundidad del MVP.

## 7. Arquitectura de dashboards

### Que hace Vallas

Dashboards principales:

- Home ejecutiva: metricas, estado, resumen y enlaces.
- Presupuesto: total, contingencia, escenarios, categorias, resumen.
- ROI: contexto de mercado, tres escenarios, KPIs y grafica.
- Portal admin/accionista: metricas, etapas, checklist, paneles.

### Datos que consume

- `PROJECT.keyMetrics`.
- `BUDGET`, `BUDGET_META`.
- `DOUBLE_FACE_SCENARIOS`.
- `OPERATING_PROTECTION_ITEMS`.
- `SOLAR_POWER_SCENARIOS`.
- `ROI_SCENARIOS`.
- `portalAdminMetrics`.
- `constructionStages`.

### Componentes que usa

- `MetricCard`.
- Tablas manuales.
- `ROIChart`.
- `PortalMetric`.
- `PortalPanel`.
- `SectionReveal`.
- `Disclaimer`.

### Dependencias

- Recharts.
- ROI calculator interna.
- Tailwind/CSS variables.

### Reutilizacion

Alta para estructura, media para logica financiera.

El dashboard ROI no debe trasladarse literalmente porque el estadio no es un negocio de anuncios con ocupacion mensual. Pero su patron de escenarios y grafica es muy reutilizable.

### Que modificar

- `ROIChart` -> `CostScenarioChart`, `CashflowChart` o `ComparableCostChart`.
- `calculateROI` no se reutiliza salvo si se modelan ingresos por eventos/palcos; para MVP probablemente no.
- Escenarios: conservador/intermedio/alto.
- KPIs: costo por asiento, costo por m2, CAPEX, contingencia, avance fisico-financiero.

Reutilizacion estimada: **65%**.

## 8. Arquitectura de timeline

### Que hace Vallas

Muestra fases del proyecto con:

- order.
- name.
- description.
- status.
- period.
- milestones.

Visual:

- Columna vertical.
- Punto por fase.
- Badge de estado.
- Periodo.
- Lista de hitos.

### Datos que consume

`TIMELINE` desde `src/data/timeline.ts`.

### Componentes que usa

- `SectionHeader`.
- `SectionReveal`.
- `StatusBadge`.

### Dependencias

- Ninguna externa fuera de React/Next/motion.

### Reutilizacion

Alta, pero requiere ampliar modelo.

### Que modificar

Para Estadio:

- Agregar eventos historicos y administrativos.
- Agregar fecha exacta o precision.
- Agregar fuente.
- Agregar categoria.
- Agregar confiabilidad.
- Agregar filtro futuro.

MVP puede usar el modelo actual con pequenas extensiones.

Reutilizacion estimada: **72%**.

## 9. Arquitectura de investigacion

### Que hace Vallas

Vallas crea un archivo de articulos:

- Cards destacadas.
- Archivo general.
- Categorias con colores.
- Relevancia.
- Tiempo de lectura.
- Pagina detalle por slug.

### Datos que consume

`RESEARCH_ARTICLES`:

- slug.
- title.
- summary.
- category.
- relevance.
- source.
- date.
- readingMinutes.

`ARTICLE_CONTENT`:

- contenido largo por slug en strings.

### Componentes que usa

- `InvestigacionPage`.
- `Link`.
- `SectionHeader`.
- `SectionReveal`.

### Dependencias

- Next static generation.
- No usa CMS.

### Reutilizacion

Media-alta para indice y cards; media-baja para contenido largo inline.

### Que modificar

- Categorias nuevas: Historia, IDAEH, MARN, Guatecompras, SEGEPLAN, Concacaf/FIFA, Costos, Politica, Riesgos, Comparables.
- Relevancia: Critica, Alta, Media, Referencial.
- Convertir `source` string en `sourceIds`.
- Crear `DocumentCard` y `EvidenceCard`.
- Migrar contenido a MD/MDX o data estructurada.

Reutilizacion estimada: **58%**.

## 10. Arquitectura de presupuestos

### Que hace Vallas

Presupuesto esta muy bien estructurado para MVP:

- Metadata con version, fecha, moneda, disclaimer y contingencia.
- Total estimado.
- Escenarios.
- Add-ons.
- Categorias y items.
- Totales por categoria.
- Resumen final.

### Datos que consume

`budget.ts`:

- `BUDGET_META`.
- `BUDGET`.
- `DOUBLE_FACE_SCENARIOS`.
- `OPERATING_PROTECTION_ITEMS`.
- `SOLAR_POWER_SCENARIOS`.

### Componentes que usa

- `SectionHeader`.
- `Disclaimer`.
- `SectionReveal`.
- Tablas manuales.
- `formatRange`.
- `formatCurrency`.
- `Link` a investigacion relacionada.

### Dependencias

- Utilidades internas.
- No depende de Recharts.

### Reutilizacion

Muy alta. Es uno de los modulos mas transferibles.

### Que modificar

Para Estadio:

- Categorias nuevas: demolicion, cimentacion, concreto, acero, graderios, drenajes, iluminacion, pantallas, cancha, banos, camerinos, palcos, museo, cafeterias, parqueos, urbanizacion, supervision, permisos.
- Campos nuevos: unidad, cantidad, costo unitario, costo total, sourceId, tipo costo, confianza.
- Escenarios: bajo/intermedio/alto o fase 1/fase 2.
- Agregar costo por asiento.
- Agregar comparables.

Reutilizacion estimada: **75%**.

## 11. Arquitectura de proveedores

### Que hace Vallas

Agrupa proveedores por especialidad, muestra conteos, y lista cards con:

- nombre.
- website.
- ubicacion.
- contacto.
- notas.
- estado.

### Datos que consume

`SUPPLIERS` y `SUPPLIERS_DISCLAIMER`.

Estados:

- identified.
- contacted.
- quoted.
- selected.

Especialidades:

- Estructura Metalica.
- Obra Civil.
- Ingenieria Estructural.
- Sistema Electrico.
- Impresion de Vinilo.
- Permisos y Tramites.

### Componentes que usa

- `SectionHeader`.
- `Disclaimer`.
- `SectionReveal`.
- `StatusBadge`.
- `Link`.

### Dependencias

- Next Link.
- Status map local.

### Reutilizacion

Muy alta.

### Que modificar

Para Estadio:

- Cambiar especialidades: constructora general, estructura metalica, concreto, acero, iluminacion deportiva, pantallas, cesped, drenajes, graderios/butacas, supervision, estudios, permisos.
- Ampliar estados: identificado, posible oferente, oferente real, adjudicado, descartado, pendiente validar.
- Agregar NIT, Guatecompras, contratos previos, experiencia en estadios, fuente.

Reutilizacion estimada: **82%**.

## 12. Arquitectura de riesgos

### Que hace Vallas

No tiene modulo formal de riesgos. Los riesgos aparecen dispersos:

- En `terrain.ts`: riesgo de deslizamiento, nivel freatico, intervenciones.
- En `budget.ts`: notas de riesgo estructural, permisos, capital.
- En `research/[slug]`: riesgos legales, operativos, seguros, vandalismo, permisos.
- En ROI: riesgo financiero por ocupacion.

### Datos que consume

No existe `risks.ts`.

### Componentes que usa

No existe `RiskMatrix`.

### Dependencias

Ninguna especifica.

### Reutilizacion

Baja. Solo se reutiliza el patron visual de cards/tablas.

### Que modificar

Crear desde cero:

- `risks.ts`.
- `RiskMatrix`.
- `RiskCard`.
- categorias: politico, financiero, tecnico, legal, patrimonial, ambiental, social, contratacion, operativo.
- probabilidad/impacto/severidad.
- mitigacion.
- fuente.
- estado.

Reutilizacion estimada: **30%**.

## 13. Arquitectura de fuentes

### Que hace Vallas

Fuentes existen como texto:

- Campo `source` en articulos.
- Secciones "Fuentes consultadas" dentro de `ARTICLE_CONTENT`.
- Links inline en Markdown-like text.
- Disclaimers por modulo.

No hay motor de fuentes.

### Datos que consume

- `ResearchArticle.source?: string`.
- URLs dentro de strings.

### Componentes que usa

- Render de articulo.
- Cards de investigacion.

### Dependencias

- `renderInline()` casero para links y bold.

### Reutilizacion

Baja-media. Sirve como presentacion basica, no como trazabilidad documental.

### Que modificar

Crear desde cero o casi:

- `sources.ts`.
- `SourceBadge`.
- `SourceCard`.
- `EvidenceViewer`.
- `DocumentTable`.
- `ClaimSourceList`.
- Estados de verificacion.
- hash/archivo/localizacion.
- tipo de fuente.

Reutilizacion estimada: **35%**.

## 14. Matriz general de reutilizacion

| Seccion | Reutilizable | % reutilizacion | Cambios necesarios |
|---|---|---:|---|
| Layout raiz | Si | 70% | Ajustar Next 15/16, metadata, fuentes, tokens |
| Layout publico | Si | 90% | Cambiar rutas y marca |
| Navegacion publica | Si | 82% | Nuevos links, base path, logo, portal opcional |
| Footer | Si | 85% | Cambiar disclaimers y links |
| Home ejecutiva | Si | 80% | Cambiar contenido, metricas, hero y tema |
| Proyecto | Si | 78% | Cambiar datos y seccion LED por fases de obra |
| Ingenieria/Tecnico | Si | 82% | Cambiar categorias tecnicas y specs |
| Terreno/Mapa | Si | 70% | Coordenadas, contexto urbano, capas futuras |
| Materiales | Si | 80% | Cambiar catalogo y unidades |
| Presupuesto | Si | 75% | Agregar sourceId, cantidades, fases y costo/asiento |
| ROI/Financiero | Parcial | 55% | Replantear de retorno privado a costo publico |
| Investigacion indice | Si | 68% | Nuevas categorias, sourceIds, verificacion |
| Investigacion detalle | Parcial | 45% | Mover contenido fuera de page inline |
| Timeline | Si | 72% | Agregar fechas exactas, fuentes y categorias |
| Futuro/Escenarios | Si | 70% | Convertir LED-ready en escenarios de obra/futuro |
| Galeria | Si | 78% | Cambiar placeholders por renders/fotos/planos |
| Proveedores | Si | 82% | Nuevas especialidades, NIT, Guatecompras |
| Portal privado | Parcial | 45% | Convertir accionistas en admin documental |
| Dashboard admin | Parcial | 50% | Cambiar capital/acciones por fuentes/documentos |
| Componentes UI base | Si | 88% | Ajustar tema y estados |
| Recharts/ROIChart | Parcial | 55% | Renombrar y alimentar con costos/avance |
| Datos estaticos TS | Si | 65% | Crear modelos del estadio |
| Riesgos | No suficiente | 30% | Crear matriz real desde cero |
| Fuentes/evidencia | No suficiente | 35% | Crear repositorio formal |
| Permisos | Parcial | 40% | Crear modelo especifico IDAEH/MARN/CONRED/Guatecompras |

## 15. MVP Estadio Mario Camposeco

### Objetivo MVP

Construir una plataforma estatica, navegable y documental que reutilice el maximo de Vallas, sin backend inicial:

- Home ejecutiva.
- Proyecto.
- Historia/timeline.
- Documentos/investigacion.
- Costos.
- Tecnico.
- Proveedores.
- Galeria.
- Riesgos basicos.

### Archivos que copiaria

Desde Vallas hacia una carpeta aislada del estadio:

```text
src/components/layout/PublicNav.tsx
src/components/layout/Footer.tsx
src/components/layout/PrintButton.tsx
src/components/primitives/AnimatedCounter.tsx
src/components/primitives/MetricCard.tsx
src/components/primitives/PageTransition.tsx
src/components/primitives/SectionLinkCard.tsx
src/components/primitives/SectionReveal.tsx
src/components/primitives/StatusBadge.tsx
src/components/ui/SectionHeader.tsx
src/components/ui/Disclaimer.tsx
src/components/ui/DataTable.tsx
src/components/sections/terrain/TerrainMapPreview.tsx
src/components/sections/roi/ROIChart.tsx
src/lib/utils.ts
```

Paginas base para adaptar:

```text
src/app/(public)/page.tsx
src/app/(public)/proyecto/page.tsx
src/app/(public)/ingenieria/page.tsx
src/app/(public)/terreno/page.tsx
src/app/(public)/materiales/page.tsx
src/app/(public)/presupuesto/page.tsx
src/app/(public)/investigacion/page.tsx
src/app/(public)/timeline/page.tsx
src/app/(public)/futuro/page.tsx
src/app/(public)/galeria/page.tsx
src/app/(public)/proveedores/page.tsx
```

Datos base para replicar estructura:

```text
src/data/project.ts
src/data/timeline.ts
src/data/engineering.ts
src/data/materials.ts
src/data/budget.ts
src/data/research.ts
src/data/suppliers.ts
src/data/terrain-map.ts
```

### Componentes que mantendria

Mantener casi igual:

- `SectionHeader`.
- `Disclaimer`.
- `DataTable`.
- `SectionReveal`.
- `PageTransition`.
- `MetricCard`.
- `SectionLinkCard`.
- `AnimatedCounter`.
- `PrintButton`.
- `Footer` con textos nuevos.

### Componentes que renombraria

Renombrar para claridad si se integran en Meditrack sin contaminar UI medica:

```text
PublicNav -> StadiumNav
Footer -> StadiumFooter
TerrainMapPreview -> StadiumMapPreview
ROIChart -> CostScenarioChart
MetricCard -> StadiumMetricCard (opcional)
StatusBadge -> EvidenceStatusBadge o StadiumStatusBadge (si se amplian estados)
```

### Componentes que eliminaria del MVP

No incluir al inicio:

- `PortalShell`.
- `PortalAuthGate`.
- `PortalLoginForm`.
- `AdminDashboardLive`.
- `AdminCapitalForms`.
- `AdminCreateUserForm`.
- `AdminDocumentsPanel`.
- `AdminProjectForms`.
- `ShareholderDashboardLive`.
- `ShareholderDocumentsPanel`.
- `roi-calculator.ts` si no se modelan ingresos.

Motivo: el MVP del estadio debe ser publico/documental. El portal puede llegar despues.

### Componentes nuevos que habria que crear

Necesarios para que el estadio sea mas riguroso que Vallas:

```text
SourceBadge.tsx
SourceCard.tsx
EvidenceCard.tsx
DocumentTable.tsx
ClaimCard.tsx
RiskMatrix.tsx
RiskCard.tsx
ComplianceChecklist.tsx
ActorMap.tsx
CostBreakdownTable.tsx
ComparableStadiumCard.tsx
PermitStatusGrid.tsx
```

### Datos nuevos que habria que crear

```text
src/data/estadio/project.ts
src/data/estadio/history.ts
src/data/estadio/timeline.ts
src/data/estadio/sources.ts
src/data/estadio/documents.ts
src/data/estadio/claims.ts
src/data/estadio/actors.ts
src/data/estadio/permits.ts
src/data/estadio/costs.ts
src/data/estadio/materials.ts
src/data/estadio/suppliers.ts
src/data/estadio/risks.ts
src/data/estadio/technical.ts
src/data/estadio/comparables.ts
src/data/estadio/gallery.ts
```

## 16. MVP propuesto por fases

### Fase MVP-1: Clon estructural

Reutilizar:

- Layout.
- Home.
- Proyecto.
- Timeline.
- Costos.
- Tecnico.
- Proveedores.
- Galeria.

Crear datos estaticos del estadio.

Resultado: sitio navegable tipo Vallas, con identidad del estadio.

### Fase MVP-2: Documental serio

Crear:

- Fuentes.
- Documentos.
- Claims.
- Permisos.
- Riesgos.

Resultado: deja de ser dossier y se convierte en sistema investigativo.

### Fase MVP-3: Dashboards

Adaptar:

- Presupuesto -> costos.
- ROIChart -> costos/avance/comparables.
- Tecnico -> compliance.

Resultado: dashboard financiero, tecnico y documental.

### Fase MVP-4: Portal/admin

Solo despues:

- Carga documental.
- Edicion de fuentes.
- Admin de timeline.
- Versionado.

## 17. Estimacion final por categoria

### % reutilizacion frontend

**78%**

Se puede reutilizar estructura de paginas, contenedores, layout, nav, footer, grids, secciones y flujo. El ajuste principal es adaptar a ruta dentro de Meditrack y Next 15.

### % reutilizacion componentes

**85%**

Los componentes base son genericos y muy portables. Solo hay que renombrar o themear algunos.

### % reutilizacion dashboards

**65%**

La logica visual de dashboards se reutiliza bien. La logica de ROI financiero privado no se reutiliza completa.

### % reutilizacion investigacion

**58%**

El indice de investigacion sirve. La arquitectura documental real debe ampliarse.

### % reutilizacion diseno

**82%**

El sistema visual, espaciado, tipografia y layout son excelentes. Hay que cambiar identidad cromatica y tono.

## 18. Clonar Vallas o construir desde cero

### Conviene clonar Vallas como base si:

- El objetivo inmediato es tener una plataforma publica navegable.
- Se acepta empezar con datos estaticos.
- Se quiere velocidad.
- Se quiere mantener una arquitectura visual ya probada.
- Se puede cambiar la identidad y los datos sin arrastrar conceptos de accionistas/ROI privado.

### Conviene construir desde cero si:

- Se exige desde el dia uno un sistema documental relacional con fuentes, claims, documentos, permisos y auditoria.
- Se necesita backend/admin completo desde el inicio.
- Se quiere integrar profundamente con la arquitectura clinica existente de Meditrack.

### Recomendacion final

**Conviene clonar/adaptar Vallas como base frontend del proyecto Estadio Mario Camposeco. No conviene construir desde cero.**

La mejor estrategia es:

1. Copiar la arquitectura visual y funcional de Vallas.
2. Aislarla bajo una ruta propia del estadio.
3. Reemplazar datos por modelos del estadio.
4. Crear desde cero los modulos que Vallas no tiene: fuentes, evidencia, claims, riesgos y permisos.
5. Posponer portal/admin hasta tener suficiente documentacion oficial.

Decision tecnica: **Vallas es una base buena para el MVP, pero no es suficiente como sistema documental final sin extender su modelo de evidencia.**

