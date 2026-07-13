export interface PlayerData {
  name: string
  nameFirst: string
  nameLast: string
  photo: string
  position: string
  club: string
  age: string
  subtitle: string
  objectPosition?: string
}

export function TransferHero({ player }: { player: PlayerData }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background player image */}
      <div className="absolute inset-0">
        <img
          src={player.photo}
          alt={player.name}
          className="h-full w-full object-cover"
          style={{ objectPosition: player.objectPosition ?? "70% 15%" }}
        />
        {/* Directional gradient: dark on the left (text), transparent on the right (player) */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/55 to-background/10" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Glow accents */}
      <div
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/3 h-48 w-48 rounded-full bg-highlight/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto flex max-w-5xl flex-col justify-end px-4 pb-10 pt-28 sm:min-h-[600px] sm:pt-32">
        <div className="max-w-xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-highlight" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-highlight">
              Трансферний трекер
            </span>
          </div>

          <p className="mb-1 font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Ексклюзив &middot; Літо 2026
          </p>

          <h1 className="font-display text-5xl font-bold uppercase leading-none tracking-tight text-foreground sm:text-7xl">
            <span className="block">{player.nameFirst}</span>
            <span className="block">{player.nameLast}</span>
          </h1>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/75 sm:text-base">
            {player.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded border border-border px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-wider text-foreground/80">
              Позиція: <span className="text-foreground">{player.position}</span>
            </span>
            <span className="rounded border border-border px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-wider text-foreground/80">
              Поточний клуб: <span className="text-foreground">{player.club}</span>
            </span>
            <span className="rounded border border-border px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-wider text-foreground/80">
              Вік: <span className="text-foreground">{player.age}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
