# @factus-js/docs

Aplicación de documentación de `factus-js`, construida con Next.js y Fumadocs.

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
