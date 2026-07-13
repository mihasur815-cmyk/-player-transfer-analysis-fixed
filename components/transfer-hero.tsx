export function TransferHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background player image */}
      <div className="absolute inset-0">
        <img
          src="/dovbyk-photo.jpeg"
          alt="Артем Довбик"
          className="h-full w-full object-cover object-[70%_15%] brightness-105 saturate-105 sm:object-[72%_15%]"
        />
        {/* Directional legibility gradient: solid over the text column, clear over the player */}
        <div className="absolute inset-0 bg-gradient-to-r from-background from-5% via-background/60 via-40% to-transparent to-70%" />
        {/* Gentle bottom anchor into the navy base */}
        <div className="absolute inset-0 bg-gradient-to-t from-background from-2% via-transparent via-30% to-background/25" />
      </div>

      {/* Subtle blue + yellow glow accents */}
      <div
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/3 h-48 w-48 rounded-full bg-highlight/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col justify-end px-4 pb-10 pt-28 sm:min-h-[600px] sm:pt-32">
        <div className="max-w-xl">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-highlight" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-highlight">
              Трансферний трекер
            </span>
          </div>

          <p className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Ексклюзив · Літо 2026
          </p>
          <h1 className="mt-1 text-balance font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-7xl">
            Артем
            <br />
            Довбик
          </h1>

          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-foreground/85">
            Куди перейде український форвард цього літа? Слідкуємо за ймовірностями,
            клубами-кандидатами та останніми новинами трансферного вікна.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            <MetaChip label="Позиція" value="Нападник" />
            <MetaChip label="Поточний клуб" value="Рома" />
            <MetaChip label="Вік" value="28 років" />
          </div>
        </div>
      </div>
    </section>
  )
}

function MetaChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-1.5 rounded-sm border border-border bg-card/80 px-3 py-1.5 backdrop-blur-sm">
      <span className="text-xs text-muted-foreground">{label}:</span>
      <span className="text-xs font-bold uppercase tracking-wide text-foreground">{value}</span>
    </div>
  )
}
