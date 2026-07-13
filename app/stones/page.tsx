import { SiteHeader } from "@/components/site-header"
import { TransferHero } from "@/components/transfer-hero"
import { PlayerStats } from "@/components/player-stats"
import { CandidatesSection } from "@/components/candidates-section"
import { EditorialOpinion } from "@/components/editorial-opinion"

const stones = {
  name: "John Stones",
  nameFirst: "JOHN",
  nameLast: "STONES",
  photo: "/stones.jpeg",
  position: "Центральний захисник",
  club: "MAN CITY",
  age: "31 РІК",
  subtitle:
    "Контракт спливає за рік. «Сіті» тягне з новою угодою — і на 31-річного захисника вже задивляються.",
  objectPosition: "50% 12%",
  clubLogo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
}

const stonesStats = [
  { value: "28", label: "Матчів" },
  { value: "3", label: "Голів" },
  { value: "2", label: "Асистів" },
  { value: "89", label: "% вірних пасів" },
]

const stonesCandidates = [
  {
    country: "ENG",
    league: "Англія",
    club: "Man City",
    detail: "Переговори про нову угоду · клуб хоче зберегти досвід у ротації",
    probability: 58,
    status: "Лідер гонки",
    lead: true,
  },
  {
    country: "KSA",
    league: "Саудівська Аравія",
    club: "Al-Nassr",
    detail: "Готові на великий контракт для 31-річного · реальний варіант",
    probability: 27,
    status: "Активний інтерес",
    lead: false,
  },
  {
    country: "GER",
    league: "Німеччина",
    club: "Bayern",
    detail: "Зондування на випадок зриву переговорів із «Сіті»",
    probability: 15,
    status: "Аутсайдер",
    lead: false,
  },
]

export default function StonesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <TransferHero player={stones} />
      <PlayerStats stats={stonesStats} season="2025/26" league="Англійська Прем'єр-ліга" />
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-12">
        <CandidatesSection candidates={stonesCandidates} />
        <EditorialOpinion
          verdict="«Сіті» не поспішає — і саме тому Стоунз тримає всі козирі."
          paragraphs={[
            "Коли Стоунз здоровий, він досі найтехнічніший центрбек Гвардіоли: пас під тиском, вихід у півзахист і читання гри роблять його незамінним у побудові атак.",
            "Питання одне — фізика. Нескінченні м'язові травми з'їли два сезони, і саме через них «Сіті» не квапиться з новим довгостроковим контрактом.",
          ]}
          closing="Найімовірніше — компромісне продовження на рік-два, а не гучний трансфер."
        />
      </div>
    </main>
  )
}
