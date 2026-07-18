# @factus-js/docs

App de documentación de `factus-js`, construida con Next.js y Fumadocs.

## Variables de entorno

| Variable                                | Descripción                                                                                                                                                                                                                                              |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                  | URL pública sin barra final, por ejemplo `https://factusjs.vercel.app`. Define `metadataBase` y el `og:image` absoluto. Si no está definida, usa `VERCEL_PROJECT_PRODUCTION_URL` y luego `VERCEL_URL`. Valor local por defecto: `http://localhost:3000`. |
| `NEXT_PUBLIC_GITHUB_USER`               | Usuario u organización de GitHub para los enlaces “Abrir en GitHub”. Por defecto: `sbetav`.                                                                                                                                                              |
| `NEXT_PUBLIC_GITHUB_REPO`               | Nombre del repositorio para los enlaces “Abrir en GitHub”. Por defecto: `factus-js`.                                                                                                                                                                     |
| `NEXT_PUBLIC_GITHUB_BRANCH`             | Rama usada en los enlaces al código fuente. Por defecto: `main`.                                                                                                                                                                                         |
| `NEXT_PUBLIC_DOCS_CONTENT_PATH_IN_REPO` | Ruta desde la raíz del repositorio hasta la carpeta de contenido de docs (por ejemplo `apps/docs/content/docs`). Por defecto usa este valor.                                                                                                             |

Plantilla: copia [`.env.example`](.env.example) a `.env.local` y ajústala según necesites.

## Ejecutar en local

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
| `app/docs`                | Rutas y layout de la documentación.        |
| `app/(home)`              | Landing y páginas públicas.                |
| `app/api/search/route.ts` | Endpoint de búsqueda.                      |
| `lib/source.ts`           | Adaptador de contenido (`loader()`).       |
| `public/og.png`           | Imagen OG compartida (1200x630).           |
| `source.config.ts`        | Configuración de Fumadocs MDX.             |

## Flujo de contribución recomendado

1. Crea o edita archivos en `content/docs`.
2. Valida en local con `pnpm --filter @factus-js/docs dev`.
3. Ejecuta las verificaciones antes de abrir un PR:

```bash
pnpm --filter @factus-js/docs lint
pnpm --filter @factus-js/docs types:check
pnpm --filter @factus-js/docs build
```

## Referencias

- [Fumadocs](https://fumadocs.dev)
- [Next.js](https://nextjs.org/docs)
