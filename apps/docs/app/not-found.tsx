import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-[calc(100dvh-57px)] w-full overflow-hidden">
      {/* Grid Background */}
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

      {/* Static Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-center"
      >
        <div
          className="mt-10 h-96 w-[880px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, var(--color-fd-primary), transparent 70%)",
          }}
        />
      </div>

      <section className="mx-auto flex min-h-[calc(100dvh-57px)] w-full max-w-5xl flex-col items-center justify-center px-6 pb-18 pt-16 sm:pt-20">
        <div className="relative w-full max-w-xl">
          {/* Card Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] opacity-30 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--color-fd-primary) 30%, transparent), transparent 65%)",
            }}
          />

          {/* Main Card */}
          <div className="relative flex flex-col items-center gap-6 rounded-[24px] border border-fd-border bg-fd-card/60 backdrop-blur-xl px-6 py-12 text-center shadow-lg sm:px-10 transition-all duration-300">
            {/* Status Badge */}
            <span className="inline-flex items-center rounded-full border border-fd-border bg-fd-background/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-fd-muted-foreground backdrop-blur-md">
              <span className="mr-2 inline-flex size-1.5 rounded-full bg-fd-primary animate-pulse shadow-[0_0_8px_var(--color-fd-primary)]" />
              NOT_FOUND
            </span>

            {/* Typography Section */}
            <div className="space-y-4">
              <h1 className="text-[72px] font-bold leading-none tracking-tighter sm:text-[96px] bg-clip-text text-transparent bg-linear-to-b from-fd-foreground to-fd-foreground/40 drop-shadow-sm">
                404
              </h1>
              <p className="max-w-[280px] sm:max-w-md mx-auto text-sm text-fd-muted-foreground sm:text-base text-pretty leading-relaxed">
                No encontramos esta página. Prueba volviendo al inicio o abre la
                documentación para encontrar lo que buscas.
              </p>
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center w-full sm:w-auto">
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground shadow-md transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-[0.98] w-full sm:w-auto"
              >
                <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
                Ir al inicio
              </Link>

              <Link
                href="/docs"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-fd-border bg-fd-card/50 px-6 py-3 text-sm font-semibold text-fd-foreground transition-all duration-200 hover:bg-fd-accent hover:text-fd-accent-foreground active:scale-[0.98] w-full sm:w-auto"
              >
                <BookOpen className="size-4 transition-transform duration-200 group-hover:scale-110" />
                Abrir documentación
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
