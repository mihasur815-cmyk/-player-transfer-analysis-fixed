import { TribunaLogo } from "@/components/tribuna-logo"

export interface EditorialOpinionProps {
  verdict: string
  paragraphs: string[]
  closing: string
}

export function EditorialOpinion({ verdict, paragraphs, closing }: EditorialOpinionProps) {
  return (
    <section>
      <div className="mb-5">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Вердикт</span>
        <h2 className="mt-1 font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
          Думка редакції
        </h2>
      </div>

      <figure className="relative overflow-hidden rounded-lg border border-border bg-card p-6 sm:p-8">
        <span className="absolute inset-y-0 left-0 w-1 bg-primary" aria-hidden="true" />
        <span
          className="pointer-events-none absolute -right-2 -top-8 select-none font-display text-9xl leading-none text-primary/10"
          aria-hidden="true"
        >
          &rdquo;
        </span>

        <div className="relative">
          <div className="flex items-center gap-2.5">
            <TribunaLogo className="h-8 w-8" />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                Tribuna<span className="text-highlight">.com</span>
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-highlight">
                Аналітика
              </span>
            </div>
          </div>

          <blockquote className="mt-5 text-pretty text-lg leading-relaxed text-foreground/90 sm:text-xl">
            <p>
              <strong className="font-semibold text-foreground">{verdict}</strong>{" "}
              {paragraphs.map((p, i) => (
                <span key={i}>{p}{" "}</span>
              ))}
              <strong className="font-semibold text-highlight">{closing}</strong>
            </p>
          </blockquote>
        </div>
      </figure>
    </section>
  )
}
