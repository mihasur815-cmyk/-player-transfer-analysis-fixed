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
    <section
      className="relative overflow-hidden border-b border-border"
      style={{ height: "680px" }}
    >
      {/* BG */}
      <div className="absolute inset-0 bg-[#0a0e17]" />

      {/* Photo — full height, anchored right, top visible */}
      <img
        src={player.photo}
        alt={player.name}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "70%",
          objectFit: "cover",
          objectPosition: player.objectPosition ?? "top center",
        }}
      />

      {/* Gradient: strong on left for text, fade to transparent right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #0a0e17 35%, rgba(10,14,23,0.75) 55%, rgba(10,14,23,0.1) 75%, transparent 100%)",
        }}
      />
      {/* Gradient: bottom fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, #0a0e17 0%, rgba(10,14,23,0.4) 20%, transparent 50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-12 px-10 max-w-lg">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-xs font-bold tracking-widest text-yellow-400 uppercase">
            Трансферний Трекер
          </span>
        </div>
        <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-2">
          Ексклюзив · Літо 2026
        </p>
        <h1 className="text-7xl font-black uppercase leading-none tracking-tight text-white mb-5">
          {player.nameFirst}
          <br />
          {player.nameLast}
        </h1>
        <p className="text-sm text-gray-300 max-w-sm mb-7 leading-relaxed">
          {player.subtitle}
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="rounded border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/80">
            Позиція: {player.position}
          </span>
          <span className="rounded border border-yellow-400/50 bg-yellow-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300">
            Клуб: {player.club}
          </span>
          <span className="rounded border border-blue-400/50 bg-blue-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
            Вік: {player.age}
          </span>
        </div>
      </div>
    </section>
  )
}
