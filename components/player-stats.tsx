export interface StatItem {
  value: string
  label: string
}

export interface PlayerStatsProps {
  stats: StatItem[]
  season: string
  league: string
}

export function PlayerStats({ stats, season, league }: PlayerStatsProps) {
  return (
    <section className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-4 w-1 bg-primary" />
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground">
              Сезон {season}
            </h2>
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {league}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card px-2 py-6 text-center">
              <div className="font-display text-5xl font-bold leading-none text-foreground sm:text-6xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-highlight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
