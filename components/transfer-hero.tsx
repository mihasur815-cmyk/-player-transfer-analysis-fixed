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
    <section className="relative overflow-hidden border-b border-border" style={{ height: "600px" }}>
      {/* Dark base background */}
      <div className="absolute inset-0 bg-[#0d1117]" />

      {/* Player photo — waist-up, right side */}
      <div
        className="absolute"
        style={{
          right: 0,
          top: 0,
          width: "65%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={player.photo}
          alt={player.name}
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            height: "130%",
            width: "auto",
            objectFit: "contain",
            objectPosition: "center bottom",
          }}
        />
      </div>

      {/* Gradient left — text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/85 to-transparent" />
      {/* Gradient bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-10 px-8 max-w-xl">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-xs font-bold tracking-widest text-yellow-400 uppercase">
            Трансферний Трекер
          </span>
        </div>
        <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-1">
          Ексклюзив · Літо 2026
        </p>
        <h1 className="text-6xl font-black uppercase leading-none tracking-tight text-white mb-4">
          {player.nameFirst}
          <br />
          {player.nameLast}
        </h1>
        <p className="text-sm text-gray-300 max-w-sm mb-6 leading-relaxed">
          {player.subtitle}
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="rounded border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/80">
            Позиція: {player.position}
          </span>
          <span className="rounded border border-yellow-400/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300">
            Поточний клуб: {player.club}
          </span>
          <span className="rounded border border-blue-400/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
            Вік: {player.age}
          </span>
        </div>
      </div>
    </section>
  )
}
