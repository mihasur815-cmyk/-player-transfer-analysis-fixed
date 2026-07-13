import { SiteHeader } from "@/components/site-header"
import { TransferHero } from "@/components/transfer-hero"
import { PlayerStats } from "@/components/player-stats"
import { CandidatesSection } from "@/components/candidates-section"
import { EditorialOpinion } from "@/components/editorial-opinion"

const zinchenko = {
  name: "Олександр Зінченко",
  nameFirst: "ОЛЕКСАНДР",
  nameLast: "ЗІНЧЕНКО",
          photo: "https://resources.premierleague.com/premierleague/photos/players/110x140/p206325.png",
  position: "Лівий захисник",
  club: "AJAX",
  age: "27 РОКІВ",
  subtitle: "Зінченко вже в Ajax — наступний крок або перехід? Аналізуємо трансферну ситуацію українського захисника.",
    objectPosition: "top center",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg",
}

const zinchenkoStats = [
  { value: "32", label: "Матчів" },
  { value: "4", label: "Голів" },
  { value: "9", label: "Асистів" },
  { value: "91", label: "% вірних пасів" },
]

const zinchenkoCandidates = [
  {
    country: "NED",
    league: "Нідерланди",
    club: "Ajax",
    detail: "Підписаний контракт · Опція викупу — Червень 2026",
    probability: 60,
    status: "Лідер гонки",
    lead: true,
  },
  {
    country: "ENG",
    league: "Англія",
    club: "Arsenal",
    detail: "Колишній клуб · інтерес до повернення слабкий",
    probability: 25,
    status: "Активний інтерес",
    lead: false,
  },
  {
    country: "ESP",
    league: "Іспанія",
    club: "Atletico",
    detail: "Слабкий інтерес · неофіційний контакт",
    probability: 15,
    status: "Аутсайдер",
    lead: false,
  },
]

export default function ZinchenkoPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <TransferHero player={zinchenko} />
      <PlayerStats stats={zinchenkoStats} season="2025/26" league="Ередивізіє" />
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-12">
        <CandidatesSection candidates={zinchenkoCandidates} />
        <EditorialOpinion
          verdict="Зінченко відродився в Ajax і знову виглядає живим та небезпечним варіантом."
          paragraphs={[
            "9 асистів за сезон говорять про те, що фізично гравець вирішив проблеми з здоровʼям.",
            "Ajax має опцію викупу, і все вказує на те, що клуб її активує до кінця літа.",
          ]}
          closing="Рішення очікується вже у липні."
        />
      </div>
    </main>
  )
}
