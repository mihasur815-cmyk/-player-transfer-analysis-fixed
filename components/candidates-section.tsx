export interface Candidate {
  country: string
  league: string
  club: string
  detail: string
  probability: number
  status: string
  lead: boolean
}

export function CandidatesSection({ candidates }: { candidates: Candidate[] }) {
  return (
    <section className="mb-14">
      <SectionTitle eyebrow="Ринок">Клуби-кандидати</SectionTitle>

      <div className="flex flex-col gap-3">
        {candidates.map((c) => (
          <div
            key={c.club}
            className={`group relative overflow-hidden rounded-lg border bg-card p-5 transition-colors sm:p-6 ${
              c.lead ? "border-highlight/45" : "border-border hover:border-primary/40"
            }`}
          >
            {c.lead && <span className="absolute inset-y-0 left-0 w-1 bg-highlight" aria-hidden="true" />}

            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-sm border border-border bg-secondary px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-muted-foreground">
                    {c.country}
                  </span>
                  <span className="font-display text-base font-bold uppercase tracking-tight text-foreground">
                    {c.club}
                  </span>
                  <span
                    className={`rounded-sm px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-wider ${
                      c.lead
                        ? "bg-highlight/15 text-highlight"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {c.status}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.detail}</p>
              </div>

              <div className="shrink-0 text-right">
                <div className="font-display text-3xl font-bold leading-none text-foreground">
                  {c.probability}
                  <span className="text-xl text-highlight">%</span>
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-highlight">
                  ймовірність
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionTitle({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <div className="mb-5">
      {eyebrow && (
        <div className="mb-1 flex items-center gap-2">
          <span className="h-4 w-1 bg-primary" />
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-sm font-bold uppercase tracking-tight text-foreground sm:text-base">
        {children}
      </h2>
      <hr className="mt-2 border-border" />
    </div>
  )
}
