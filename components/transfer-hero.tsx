export interface PlayerData {
  name: string
  nameFirst: string
  nameLast: string
  photo: string
  position: string
  club: string
  clubLogo?: string
  age: string
  subtitle: string
  objectPosition?: string
}

export function TransferHero({ player }: { player: PlayerData }) {
  return (
    <section
      className="relative overflow-hidden border-b border-border"
      style={{ height: "600px" }}
    >
      {/* BG */}
      <div className="absolute inset-0 bg-[#0a0e17]" />

      {/* Photo — waist-up, smaller scale */}
      <img
        src={player.photo}
        alt={player.name}
        style={{
          position: "absolute",
          top: "0",
          right: 0,
          height: "100%",
          width: "50%",
          objectFit: "cover",
          objectPosition: player.objectPosition ?? "center 15%",
        }}
      />

      {/* Gradient left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #0a0e17 35%, rgba(10,14,23,0.75) 55%, rgba(10,14,23,0.1) 75%, transparent 100%)",
        }}
      />
      {/* Gradient bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, #0a0e17 0%, rgba(10,14,23,0.4) 20%, transparent 50%)",
        }}
      />

      {/* Club logo overlay — bottom right corner */}
      {player.clubLogo && (
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            right: "32px",
            width: "80px",
            height: "80px",
            opacity: 0.9,
          }}
        >
          <img
            src={player.clubLogo}
            alt={player.club}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-10 px-10 max-w-[50%]">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
            <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase">
              Трансферний трекер
            </span>
          </div>
          <p className="text-gray-400 text-sm font-medium tracking-widest uppercase mb-2">
            Ексклюзив · Літо 2026
          </p>
          <h1 className="text-white font-black uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className="block">{player.nameFirst}</span>
            <span className="block text-yellow-400">{player.nameLast}</span>
          </h1>
          <p className="text-gray-300 text-sm mt-3 max-w-xs leading-relaxed">
            {player.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="border border-white/20 text-white/70 text-xs px-3 py-1 uppercase tracking-wider">
            Позиція: {player.position}
          </span>
          <span className="border border-yellow-400/40 text-yellow-400 text-xs px-3 py-1 uppercase tracking-wider">
            Клуб: {player.club}
          </span>
          <span className="border border-white/20 text-white/70 text-xs px-3 py-1 uppercase tracking-wider">
            Вік: {player.age}
          </span>
        </div>
      </div>
    </section>
  )
}
