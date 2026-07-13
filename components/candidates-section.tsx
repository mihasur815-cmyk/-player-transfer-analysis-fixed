const candidates = [
  {
    country: "NED",
    league: "Нідерланди",
    club: "Ajax",
    detail: "Подав покращену пропозицію оренди · Липень 2026",
    probability: 65,
    status: "Лідер гонки",
    lead: true,
  },
  {
    country: "ENG",
    league: "Англія",
    club: "Everton",
    detail: "Переговори тривають · офіційний інтерес підтверджено",
    probability: 20,
    status: "Активний інтерес",
    lead: false,
  },
  {
    country: "TUR",
    league: "Туреччина",
    club: "Galatasaray",
    detail: "Зондування · неофіційний контакт",
    probability: 15,
    status: "Аутсайдер",
    lead: false,
  },
]

export function CandidatesSection() {
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
                  <span className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">
                    {c.club}
                  </span>
                  <span
                    className={`rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                      c.lead
                        ? "bg-highlight text-highlight-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {c.status}
                  </span>
                </div>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {c.detail}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <div
                  className={`font-display text-4xl font-bold leading-none sm:text-5xl ${
                    c.lead ? "text-highlight" : "text-foreground"
                  }`}
                >
                  {c.probability}
                  <span className="text-xl align-top">%</span>
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  ймовірність
                </div>
              </div>
            </div>

            <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className={`h-full rounded-full transition-all ${c.lead ? "bg-highlight" : "bg-primary"}`}
                style={{ width: `${c.probability}%` }}
              />
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
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{eyebrow}</span>
      )}
      <div className="mt-1 flex items-center gap-3">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
          {children}
        </h2>
      </div>
    </div>
  )
}
