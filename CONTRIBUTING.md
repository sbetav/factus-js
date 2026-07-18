# Contribuir

Este repositorio está organizado como monorepo (pnpm + Turborepo):

- `packages/factus-js`: el SDK publicado en npm
- `apps/docs`: sitio de documentación en Next.js (fumadocs)

## Inicio rápido (local)

1. Instala las dependencias:
   - `pnpm install`
2. Ejecuta los servidores de desarrollo:
   - `pnpm dev`

## Verificación antes de abrir un PR

Ejecuta esto desde la raíz del repositorio:

- `pnpm lint`
- `pnpm check-types`
- `pnpm test` (o `pnpm --filter factus-js test`)

## Documentación

El sitio con la documentación está en `apps/docs`. Si tu PR cambia el comportamiento del SDK o APIs públicas, actualiza también la documentación correspondiente cuando aplique.

Si actualizas `packages/factus-js/CHANGELOG.md`, regenera la página de changelog de docs y confirma el resultado:

```bash
pnpm --filter @factus-js/docs generate:changelog
```

Esto actualiza `apps/docs/content/docs/changelog.mdx`, que se versiona para que los deploys permanezcan en solo lectura.

## Contexto para agentes (desde la documentación oficial)

Para generar contexto en markdown local a partir de la documentación oficial de Factus, ejecuta este comando desde la raíz del repo:

```bash
pnpm sync-factus-docs
```

El script abre un selector interactivo de versión:

- `v1`: `https://developers.factus.com.co/v1`
- `v2`: `https://developers.factus.com.co/`

El script extrae el contenido de la página y lo convierte a Markdown; también recorta payloads base64 largos para mantener el tamaño del contexto manejable.

Carpetas de salida:

- Snapshots en Markdown: `factus-docs/v1/` y `factus-docs/v2/`
- Copias temporales del sitio: `.temp/factus-docs-mirror-v1/` y `.temp/factus-docs-mirror-v2/`

### Hallazgos de la documentación (`factus-docs/v2-findings.md`)

`factus-docs/v2-findings.md` registra ambigüedades, inconsistencias y posibles errores tipográficos encontrados en la copia de la documentación de Factus (v2 unicamente), más la **decisión del SDK** correspondiente a cada ítem.

Cuando sincronices docs o cambies el comportamiento del SDK a partir de la documentación oficial:

1. Compara `factus-docs/v2/` con el snapshot anterior.
2. Revisa si algún hallazgo abierto ya quedó resuelto (o si aparece uno nuevo).
3. Actualiza `factus-docs/v2-findings.md` en el mismo PR cuando resuelvas, reabras o agregues un ítem.
4. Prefiere la regla de trabajo del inicio de ese archivo cuando la documentación de Factus no coincida (tablas de campos → ejemplos → docs más amplias → prosa).

## Releases

Los releases se automatizan con Changesets. En general, si vas a contribuir solo necesitas enviar cambios de código; el versionado y la publicación se manejan con CI/CD.

El workflow también verifica que el changelog de la documentación coincida con `packages/factus-js/CHANGELOG.md`.
