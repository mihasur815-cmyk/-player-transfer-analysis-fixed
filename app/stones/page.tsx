import { SiteHeader } from "@/components/site-header"
import { TransferHero } from "@/components/transfer-hero"
import { PlayerStats } from "@/components/player-stats"
import { CandidatesSection } from "@/components/candidates-section"
import { EditorialOpinion } from "@/components/editorial-opinion"

const stones = {
  name: "John Stones",
  nameFirst: "JOHN",
  nameLast: "STONES",
        photo: "https://resources.premierleague.com/premierleague/photos/players/250x250/p97299.png",
  position: "Центральний захисник",
  club: "MAN CITY",
  age: "31 РІК",
  subtitle: "Майбутнє Stones: перехід або продовження? Аналізуємо всі варіанти опцій трансферного вікна 2026.",
  objectPosition: "50% 10%",
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
    detail: "Подовження контракту · Переговори тривають — Липень 2026",
    probability: 55,
    status: "Лідер гонки",
    lead: true,
  },
  {
    country: "ESP",
    league: "Іспанія",
    club: "Barcelona",
    detail: "Неофіційний інтерес · зондування на ринку",
    probability: 25,
    status: "Активний інтерес",
    lead: false,
  },
  {
    country: "GER",
    league: "Німеччина",
    club: "Bayern",
    detail: "Слабкий інтерес · неофіційний контакт",
    probability: 20,
    status: "Аутсайдер",
    lead: false,
  },
]

export default function StonesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <TransferHero player={stones} />
      <PlayerStats stats={stonesStats} season="2025/26" league="Англійська Премьєр-ліга" />
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-12">
        <CandidatesSection candidates={stonesCandidates} />
        <EditorialOpinion
          verdict="Stones — один з найкомплетніших центральних захисників Европи."
          paragraphs={[
            "Прі нього мічні позиційні навички, драйв у високій пресінгу та виведення м'ячів в атаку — це робить його унікальним цінним активом.",
            "Man City хоче утримати гравця, проте рішення залежить від переговорної позиції самого гравця.",
          ]}
          closing="Рішення очікується до кінця серпня."
        />
      </div>
    </main>
  )
}
