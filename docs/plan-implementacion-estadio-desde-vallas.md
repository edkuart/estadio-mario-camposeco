# Plan de implementacion Estadio Mario Camposeco desde Vallas

Fecha: 2026-05-28
Proyecto destino: `C:\Users\Dell\Projects\estadio-mario-camposeco`
Proyecto referencia: `C:\Users\Dell\Projects\valla-gt\valla-frontend`
Estado: plan final previo a programar

Documentos base ya migrados a este proyecto:

- `docs/estadio-mario-camposeco-investigacion.md`
- `docs/arquitectura-proyecto-vallas-para-estadio.md`
- `docs/ingenieria-inversa-vallas-reutilizacion-estadio.md`

## Resumen ejecutivo

El proyecto Estadio Mario Camposeco debe construirse como un nuevo frontend independiente, ubicado en:

```text
C:\Users\Dell\Projects\estadio-mario-camposeco
```

No se trabajara dentro de Meditrack. No se tocara backend, clinica, settings ni archivos no relacionados. La arquitectura base sera la del proyecto Vallas, porque ya resuelve la mayoria de los patrones necesarios: home ejecutiva, rutas documentales, timeline, costos, proveedores, investigacion, mapa, galeria, metricas, tablas, disclaimers y estilo visual premium.

El MVP usara datos estaticos. No habra base de datos, autenticacion, portal privado ni dashboards dinamicos en esta etapa.

La implementacion debe avanzar por fases pequenas, con commits separados y verificables. El primer cambio de codigo recomendado sera clonar/copiar la base frontend de Vallas hacia `estadio-mario-camposeco/frontend`, sin modificar todavia su contenido interno.

## Decision arquitectonica

Decision: crear un proyecto independiente con esta estructura:

```text
estadio-mario-camposeco/
  docs/
    estadio-mario-camposeco-investigacion.md
    arquitectura-proyecto-vallas-para-estadio.md
    ingenieria-inversa-vallas-reutilizacion-estadio.md
    plan-implementacion-estadio-desde-vallas.md

  frontend/
    package.json
    next.config.ts
    tsconfig.json
    postcss.config.mjs
    biome.json
    src/
    public/
```

Base tecnica recomendada:

- Next.js App Router, partiendo del frontend de Vallas.
- React, Tailwind 4, TypeScript.
- Framer Motion para transiciones suaves.
- Recharts solo si se mantiene una grafica estatica de costos/comparables en fase posterior.
- Datos estaticos en `frontend/src/data/estadio/`.
- Componentes especificos del estadio en `frontend/src/components/estadio/`.
- Rutas publicas bajo `frontend/src/app/(public)/` como en Vallas, o directamente bajo `frontend/src/app/` si se decide simplificar. Recomendacion: conservar `(public)` para mantener la arquitectura de Vallas.

Regla de aislamiento:

- No modificar `C:\Users\Dell\Projects\meditrack`.
- No modificar `C:\Users\Dell\Projects\valla-gt`; solo leerlo y copiar desde ahi.
- Todo cambio nuevo vive en `C:\Users\Dell\Projects\estadio-mario-camposeco`.

## Fase 0: preparacion

Objetivo: dejar listo el espacio de trabajo, documentos y control de cambios sin tocar codigo funcional.

Acciones:

1. Confirmar estructura actual:

```text
estadio-mario-camposeco/
  docs/
```

2. Confirmar que los documentos base existen en `docs/`.
3. Crear `.gitignore` si se inicializa repo nuevo.
4. Inicializar git en `estadio-mario-camposeco` si todavia no existe.
5. Crear commit documental inicial.

Archivos involucrados:

```text
docs/estadio-mario-camposeco-investigacion.md
docs/arquitectura-proyecto-vallas-para-estadio.md
docs/ingenieria-inversa-vallas-reutilizacion-estadio.md
docs/plan-implementacion-estadio-desde-vallas.md
.gitignore
```

Validacion:

```powershell
Get-ChildItem -LiteralPath 'C:\Users\Dell\Projects\estadio-mario-camposeco\docs'
git status --short
```

Commit sugerido:

```text
docs: add stadium research and implementation plan
```

## Fase 1: clon visual minimo

Objetivo: copiar la arquitectura base de Vallas a `estadio-mario-camposeco/frontend` sin adaptar todavia todo el contenido.

### Archivos que se van a copiar desde Vallas

Desde:

```text
C:\Users\Dell\Projects\valla-gt\valla-frontend
```

Copiar base de proyecto:

```text
package.json
next.config.ts
tsconfig.json
postcss.config.mjs
biome.json
README.md
public/
src/app/layout.tsx
src/app/globals.css
src/app/icon.svg
src/app/favicon.ico
src/app/(public)/layout.tsx
src/app/(public)/page.tsx
src/components/layout/
src/components/primitives/
src/components/ui/
src/lib/utils.ts
```

### Donde se van a colocar dentro de estadio-mario-camposeco

Destino:

```text
C:\Users\Dell\Projects\estadio-mario-camposeco\frontend
```

Estructura esperada:

```text
estadio-mario-camposeco/frontend/
  package.json
  next.config.ts
  tsconfig.json
  postcss.config.mjs
  biome.json
  public/
  src/
    app/
      layout.tsx
      globals.css
      (public)/
        layout.tsx
        page.tsx
    components/
      layout/
      primitives/
      ui/
    lib/
      utils.ts
```

### Nombres nuevos

En Fase 1 no renombrar mas de lo necesario. La prioridad es arrancar y compilar.

Renombres minimos:

| Original Vallas | Nuevo Estadio | Momento |
|---|---|---|
| `valla-frontend` en `package.json` | `estadio-mario-camposeco-frontend` | Fase 1 |
| Metadata `Valla GT` | `Estadio Mario Camposeco` | Fase 1 |
| Marca visible `VALLA GT` | `MARIO CAMPOSECO` | Fase 1 |

### Componentes reutilizados intactos

Mantener inicialmente sin tocar logica:

```text
SectionHeader.tsx
Disclaimer.tsx
DataTable.tsx
SectionReveal.tsx
PageTransition.tsx
MetricCard.tsx
SectionLinkCard.tsx
AnimatedCounter.tsx
PrintButton.tsx
```

### Componentes adaptados

Adaptar solo textos, links y marca:

```text
PublicNav.tsx
Footer.tsx
src/app/layout.tsx
src/app/(public)/page.tsx
src/app/globals.css
```

### Componentes nuevos

Ninguno en Fase 1.

Validacion:

```powershell
cd C:\Users\Dell\Projects\estadio-mario-camposeco\frontend
npm install
npm run typecheck
npm run build
```

Commit sugerido:

```text
feat: scaffold stadium frontend from vallas architecture
```

## Fase 2: contenido del estadio

Objetivo: reemplazar datos y textos de Vallas por contenido inicial del Estadio Mario Camposeco.

### Datos estaticos iniciales

Crear:

```text
frontend/src/data/estadio/project.ts
frontend/src/data/estadio/timeline.ts
frontend/src/data/estadio/history.ts
frontend/src/data/estadio/research.ts
frontend/src/data/estadio/gallery.ts
```

Contenido inicial desde `docs/estadio-mario-camposeco-investigacion.md`:

- Nombre del proyecto.
- Ubicacion.
- Estado actual: prelicitacion / Guatecompras pendiente.
- Hitos 1950, 1951, 1999, 2005, 2012, 2025, 2026.
- Actores principales.
- Capacidad historica y reportada.
- Alcance reportado: graderio norte, 14 avenida, VIP/palcos, banos, accesos, museo, cafeterias, fase futura.
- Fuentes iniciales.

### Rutas nuevas que se crearan

Dentro de:

```text
frontend/src/app/(public)/
```

Crear/adaptar:

```text
page.tsx                  -> dashboard ejecutivo
proyecto/page.tsx          -> alcance y estado
historia/page.tsx          -> historia del estadio
timeline/page.tsx          -> linea de tiempo
investigacion/page.tsx     -> indice de investigacion/documentos
galeria/page.tsx           -> renders/fotos/planos placeholder
```

### Secciones del MVP en esta fase

Home:

- Hero ejecutivo.
- Estado actual.
- Metricas clave.
- Resumen del proyecto.
- Grid de secciones.

Proyecto:

- Alcance reportado.
- Fases.
- Actores institucionales.
- Estado de permisos.

Historia:

- Origen del estadio.
- Capacidad historica.
- Remodelaciones conocidas.

Timeline:

- Eventos historicos.
- Eventos administrativos.
- Eventos pendientes.

Investigacion:

- Fichas iniciales de temas.
- Fuentes oficiales pendientes.

Galeria:

- Renders oficiales pendientes.
- Fotos actuales pendientes.
- Planos pendientes.

### Componentes adaptados

- Home de Vallas.
- Timeline de Vallas.
- Investigacion index de Vallas.
- Galeria de Vallas.

### Componentes nuevos

Opcionales en Fase 2:

```text
SourceBadge.tsx
```

Solo si ayuda a marcar fuente oficial/reportada/pendiente.

Validacion:

```powershell
npm run typecheck
npm run build
```

Commit sugerido:

```text
feat: add stadium static content and public routes
```

## Fase 3: modulos de investigacion

Objetivo: convertir la seccion de investigacion en un repositorio documental inicial, sin backend.

### Archivos nuevos

```text
frontend/src/data/estadio/sources.ts
frontend/src/data/estadio/documents.ts
frontend/src/data/estadio/claims.ts
frontend/src/components/estadio/SourceBadge.tsx
frontend/src/components/estadio/SourceCard.tsx
frontend/src/components/estadio/EvidenceCard.tsx
frontend/src/components/estadio/DocumentTable.tsx
```

### Rutas

```text
frontend/src/app/(public)/documentos/page.tsx
frontend/src/app/(public)/fuentes/page.tsx
```

Opcional: reemplazar `/investigacion` por `/documentos`, o mantener ambas:

- `/investigacion`: analisis narrativo.
- `/documentos`: evidencia y fuentes.

### Modelo de informacion inicial

Sources:

```text
id
title
type
publisher
publishedAt
accessedAt
url
reliability
status
notes
```

Documents:

```text
id
sourceId
type
title
issuer
documentDate
status
url
storagePath
summary
```

Claims:

```text
id
claimType
text
value
unit
sourceIds
verificationStatus
confidence
```

### Componentes reutilizados

- `SectionHeader`.
- `DataTable`.
- `Disclaimer`.
- `StatusBadge`, si se amplia.
- Cards visuales de Vallas.

### Componentes nuevos

- `SourceBadge`.
- `SourceCard`.
- `EvidenceCard`.
- `DocumentTable`.

Validacion:

```powershell
npm run typecheck
npm run build
```

Commit sugerido:

```text
feat: add documentary evidence modules
```

## Fase 4: costos/proveedores/permisos

Objetivo: adaptar los modulos economicos y de proveedores de Vallas al caso estadio.

### Archivos que se copiaran/adaptaran desde Vallas

```text
src/app/(public)/presupuesto/page.tsx -> frontend/src/app/(public)/costos/page.tsx
src/app/(public)/proveedores/page.tsx -> frontend/src/app/(public)/proveedores/page.tsx
src/app/(public)/materiales/page.tsx -> frontend/src/app/(public)/materiales/page.tsx
src/data/budget.ts -> frontend/src/data/estadio/costs.ts
src/data/suppliers.ts -> frontend/src/data/estadio/suppliers.ts
src/data/materials.ts -> frontend/src/data/estadio/materials.ts
```

### Datos estaticos iniciales

Costos:

- Concreto.
- Acero estructural.
- Graderios.
- Drenajes.
- Iluminacion.
- Pantallas.
- Cesped.
- Urbanizacion.
- Accesos.
- Banos.
- Camerinos.
- Palcos.
- Museo.
- Cafeterias.
- Parqueos.
- Estructura metalica.
- Cimentacion.

Proveedores:

- Concreto.
- Acero.
- Estructura metalica.
- Iluminacion deportiva.
- Grama/cancha.
- Constructora general.
- Supervision.
- Estudios tecnicos.
- Permisos.

Permisos:

Crear:

```text
frontend/src/data/estadio/permits.ts
frontend/src/app/(public)/permisos/page.tsx
frontend/src/components/estadio/PermitStatusGrid.tsx
```

Permisos iniciales:

- IDAEH.
- MARN.
- CONRED.
- Guatecompras.
- SEGEPLAN/SNIP.
- Concejo Municipal.
- COMUDE.
- Licencia de construccion.
- Uso/intervencion de via publica.

### Secciones MVP

- Costos preliminares por categoria.
- Escenarios bajo/intermedio/alto.
- Proveedores potenciales.
- Permisos y estado documental.

### Secciones fase 2

- Dashboard financiero dinamico.
- Comparador de ofertas Guatecompras.
- Avance fisico-financiero.
- Ordenes de cambio.

Validacion:

```powershell
npm run typecheck
npm run build
```

Commit sugerido:

```text
feat: add stadium costs suppliers and permits
```

## Fase 5: polish visual

Objetivo: dejar de verse como Vallas y convertirse en identidad visual del Estadio Mario Camposeco.

### Tema visual a cambiar

Modificar tokens en:

```text
frontend/src/app/globals.css
```

Paleta recomendada:

```css
--bg-base: #07100d;
--bg-elevated: #0d1512;
--bg-card: #131b17;
--bg-subtle: #1b2420;
--accent: #3c8f5a;
--accent-secondary: #8f1f2d;
--accent-stone: #d8d2c2;
--text-primary: #f0eee7;
--text-secondary: #a9a59a;
--text-muted: #6c685f;
```

Criterios:

- Mantener fondo oscuro documental.
- Acento verde cancha.
- Acento granate moderado por identidad futbolistica/Xelaju.
- Acento piedra/cal para patrimonio y estadio historico.
- Evitar que parezca una landing comercial.
- Mantener tipografia tecnica de Vallas.

### Componentes a ajustar

- `PublicNav` o `StadiumNav`.
- `Footer` o `StadiumFooter`.
- `MetricCard` si el acento se ve demasiado dorado.
- `StatusBadge` para estados documentales.
- Home hero.
- Galeria placeholders.

### Componentes nuevos opcionales

```text
StadiumHero.tsx
ProjectPhaseCard.tsx
ComplianceMiniCard.tsx
```

Validacion visual:

- Abrir home.
- Revisar desktop y mobile.
- Confirmar que no hay textos de Vallas.
- Confirmar que no hay rutas rotas.

Commit sugerido:

```text
style: apply stadium visual identity
```

## Fase 6: validacion

Objetivo: probar que el proyecto nuevo compila y que no se rompio nada externo.

### Validacion tecnica

Desde:

```text
C:\Users\Dell\Projects\estadio-mario-camposeco\frontend
```

Ejecutar:

```powershell
npm run typecheck
npm run build
```

Si hay lint configurado:

```powershell
npm run lint
```

Validar rutas esperadas:

```text
/
/proyecto
/historia
/timeline
/investigacion
/documentos
/fuentes
/costos
/materiales
/proveedores
/permisos
/galeria
```

### Validacion de aislamiento

Comprobar que no se modifico Meditrack:

```powershell
git -C C:\Users\Dell\Projects\meditrack\apps\frontend status --short
```

Comprobar que no se modifico Vallas:

```powershell
git -C C:\Users\Dell\Projects\valla-gt\valla-frontend status --short
```

Comprobar cambios del nuevo proyecto:

```powershell
git -C C:\Users\Dell\Projects\estadio-mario-camposeco status --short
```

Commit sugerido:

```text
chore: validate stadium frontend build
```

## Estrategia de commits

Trabajar con commits pequenos:

1. `docs: add stadium research and implementation plan`
2. `feat: scaffold stadium frontend from vallas architecture`
3. `feat: add stadium static content and public routes`
4. `feat: add documentary evidence modules`
5. `feat: add stadium costs suppliers and permits`
6. `style: apply stadium visual identity`
7. `chore: validate stadium frontend build`

Reglas:

- No mezclar docs con scaffold si se puede evitar.
- No mezclar tema visual con datos.
- No mezclar costos/proveedores con investigacion documental.
- No incluir cambios de Meditrack.
- No incluir cambios de Vallas.
- Revisar `git status --short` antes de cada commit.

## Archivos existentes que NO deben tocarse

No tocar:

```text
C:\Users\Dell\Projects\meditrack\**
C:\Users\Dell\Projects\valla-gt\**
```

Excepcion:

- `valla-gt` solo como origen de lectura/copia.
- `meditrack` solo queda como archivo historico de donde salieron los docs ya copiados; no se modifica mas.

Dentro del nuevo proyecto, no tocar archivos generados:

```text
frontend/.next/**
frontend/node_modules/**
frontend/tsconfig.tsbuildinfo
```

## Riesgos tecnicos

1. Diferencia Next 16 de Vallas vs posible estabilidad deseada.
   - Mitigacion: mantener package copiado inicialmente; luego decidir si bajar version.

2. Dependencias no instaladas.
   - Mitigacion: `npm install` en `frontend`.

3. Textos o marcas de Vallas residuales.
   - Mitigacion: `rg -n "Valla|VALLA|Salcaja|RN-1|LED-Ready" frontend/src`.

4. Arquitectura documental insuficiente.
   - Mitigacion: crear `sources`, `documents`, `claims`, `risks` desde Fase 3.

5. Copiar portal privado antes de tiempo.
   - Mitigacion: excluir `src/app/portal`, `src/components/portal` y `src/lib/portal-api.ts` del MVP.

6. Mezclar cambios con proyectos existentes.
   - Mitigacion: trabajar solo en `C:\Users\Dell\Projects\estadio-mario-camposeco`.

7. Datos de costos confundidos como oficiales.
   - Mitigacion: disclaimers visibles y campo `costType`.

8. Uso de articulos inline largos.
   - Mitigacion: mover contenido a datos/MD en fase documental.

## Checklist antes de programar

Antes del primer cambio de codigo confirmar:

- [ ] El proyecto destino sera `C:\Users\Dell\Projects\estadio-mario-camposeco`.
- [ ] El frontend vivira en `C:\Users\Dell\Projects\estadio-mario-camposeco\frontend`.
- [ ] No se trabajara dentro de Meditrack.
- [ ] No se modificara Vallas.
- [ ] No se copiara portal privado en MVP.
- [ ] Se usaran datos estaticos.
- [ ] Se aceptan rutas publicas sin autenticacion.
- [ ] Se acepta reutilizar componentes visuales de Vallas.
- [ ] Se cambiara tema visual antes de considerar MVP listo.
- [ ] Se hara commit por fase.

## Comando sugerido de revision final

Desde `C:\Users\Dell\Projects\estadio-mario-camposeco\frontend`:

```powershell
npm run typecheck && npm run build
```

Revision adicional de limpieza:

```powershell
rg -n "Valla|VALLA|Salcaj[aá]|RN-1|LED-Ready|accionista|ROI" src
```

Revision de aislamiento:

```powershell
git -C C:\Users\Dell\Projects\meditrack\apps\frontend status --short
git -C C:\Users\Dell\Projects\valla-gt\valla-frontend status --short
git -C C:\Users\Dell\Projects\estadio-mario-camposeco status --short
```

## Primer cambio de codigo recomendado

El primer cambio de codigo recomendado, cuando se apruebe programar, es:

```text
Crear `C:\Users\Dell\Projects\estadio-mario-camposeco\frontend` copiando el scaffold completo de `C:\Users\Dell\Projects\valla-gt\valla-frontend`, excluyendo `.next`, `node_modules`, `.env.local`, `tsconfig.tsbuildinfo`, `src/app/portal`, `src/app/acceso`, `src/components/portal` y `src/lib/portal-api.ts`.
```

Despues de copiar, el primer ajuste minimo seria cambiar en `frontend/package.json`:

```json
"name": "estadio-mario-camposeco-frontend"
```

No ejecutar este cambio hasta recibir aprobacion explicita.
