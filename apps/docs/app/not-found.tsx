import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-[calc(100dvh-57px)] w-full overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in srgb, var(--color-fd-border) 100%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 110% 70% at 50% 0%, black 18%, transparent 78%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-center"
      >
        <div
          className="mt-10 h-96 w-[880px] rounded-full blur-3xl opacity-18"
          style={{
            background:
              "radial-gradient(ellipse, var(--color-fd-primary), transparent 70%)",
          }}
        />
      </div>

      <section className="mx-auto flex min-h-[calc(100dvh-57px)] w-full max-w-5xl flex-col items-center justify-center px-6 pb-18 pt-16 sm:pt-20">
        <div className="relative w-full max-w-xl">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] opacity-25 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--color-fd-primary) 30%, transparent), transparent 65%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-6 rounded-[24px] border border-fd-border bg-fd-card/95 px-6 py-10 text-center shadow-sm sm:px-10">
            <span className="inline-flex items-center rounded-full border border-fd-border bg-fd-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-fd-muted-foreground">
              <span className="mr-2 inline-flex size-1.5 rounded-full bg-fd-primary" />
              NOT_FOUND
            </span>

            <div className="space-y-3">
              <p className="text-[56px] font-semibold leading-none tracking-tight text-fd-foreground sm:text-[72px]">
                404
              </p>
              <p className="text-sm text-fd-muted-foreground sm:text-base text-pretty">
                No encontramos esta página. Prueba volviendo al inicio o abre la
                documentación.
              </p>
            </div>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground shadow-sm transition-all duration-150 hover:opacity-90 active:scale-[0.99]"
              >
                <ArrowLeft className="size-4" />
                Ir al inicio
              </Link>

              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-fd-border bg-fd-card px-6 py-3 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-accent"
              >
                <BookOpen className="size-4" />
                Abrir documentación
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
