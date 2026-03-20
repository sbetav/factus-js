# @factus-js/docs

Aplicación de documentación de `factus-js`, construida con Next.js y Fumadocs.

## Variables de entorno

| Variable                                | Descripción                                                                                                                                                                                                                           |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                  | URL del sitio (sin barra final), p. ej. `https://factusjs.vercel.app`. Usada en `metadataBase`, sitemap, `robots.txt` y URLs canónicas. Si no se define, en Vercel se usa `https://${VERCEL_URL}`; en local, `http://localhost:3000`. |
| `NEXT_PUBLIC_GITHUB_USER`               | Usuario u organización de GitHub (por defecto `sbetav`).                                                                                                                                                                              |
| `NEXT_PUBLIC_GITHUB_REPO`               | Nombre del repositorio (por defecto `factus-js`).                                                                                                                                                                                     |
| `NEXT_PUBLIC_GITHUB_BRANCH`             | Rama para enlaces “Abrir en GitHub” (por defecto `main`).                                                                                                                                                                             |
| `NEXT_PUBLIC_DOCS_CONTENT_PATH_IN_REPO` | Ruta desde la raíz del repo hasta `content/docs`, p. ej. `apps/docs/content/docs` (valor por defecto).                                                                                                                                |

Plantilla: copia [`.env.example`](.env.example) a `.env.local` y ajusta lo que necesites.

## Ejecutar localmente

Desde la raíz del monorepo:

```bash
pnpm install
pnpm --filter @factus-js/docs dev
```

Abre `http://localhost:3000`.

## Scripts

```bash
pnpm --filter @factus-js/docs dev
pnpm --filter @factus-js/docs build
pnpm --filter @factus-js/docs start
pnpm --filter @factus-js/docs lint
pnpm --filter @factus-js/docs format
pnpm --filter @factus-js/docs types:check
```

## Estructura principal

| Ruta                      | Descripción                                |
| ------------------------- | ------------------------------------------ |
| `content/docs`            | Contenido MDX de la documentación del SDK. |
| `app/docs`                | Rutas y layout de la sección de docs.      |
| `app/(home)`              | Landing y paginas publicas.                |
| `app/api/search/route.ts` | Endpoint de búsqueda.                      |
| `lib/source.ts`           | Adaptador de contenido (`loader()`).       |
| `public/og.png`           | Imagen OG compartida (1200×630).           |
| `source.config.ts`        | Configuración de Fumadocs MDX.             |

## Flujo de contribución recomendado

1. Crea o edita archivos en `content/docs`.
2. Verifica en local con `pnpm --filter @factus-js/docs dev`.
3. Corre los checks antes de abrir PR:

```bash
pnpm --filter @factus-js/docs lint
pnpm --filter @factus-js/docs types:check
pnpm --filter @factus-js/docs build
```

## Referencias

- [Fumadocs](https://fumadocs.dev)
- [Next.js](https://nextjs.org/docs)
