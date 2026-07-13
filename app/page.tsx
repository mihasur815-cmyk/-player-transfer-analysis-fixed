import { SiteHeader } from "@/components/site-header"
import { TransferHero } from "@/components/transfer-hero"
import { PlayerStats } from "@/components/player-stats"
import { CandidatesSection } from "@/components/candidates-section"
import { EditorialOpinion } from "@/components/editorial-opinion"

const dovbyk = {
  name: "Артем Довбик",
  nameFirst: "АРТЕМ",
  nameLast: "ДОВБИК",
  photo: "/dovbyk-photo.jpeg",
  position: "Нападник",
  club: "РОМА",
  age: "28 РОКІВ",
  subtitle: "Куди перейде український форвард цього літа? Слідкуємо за ймовірностями, клубами-кандидатами та останніми новинами трансферного вікна.",
      objectPosition: "top center",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg",
}

const dovbykStats = [
  { value: "46", label: "Матчів" },
  { value: "15", label: "Голів" },
  { value: "7", label: "Асистів" },
  { value: "22", label: "Рез. дій" },
]

const dovbykCandidates = [
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

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <TransferHero player={dovbyk} />
      <PlayerStats stats={dovbykStats} season="2025/26" league="Серія А" />
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-12">
        <CandidatesSection candidates={dovbykCandidates} />
        <EditorialOpinion
          verdict="Довбик залишається одним із найнедооцінених форвардів Серії А."
          paragraphs={[
            "Попри складний сезон в Римі, його цифри говорять самі за себе — 15 голів і 7 асистів у 46 матчах.",
            "Ajax виглядає найреалістичнішим варіантом: оренда з опцією викупу дозволить гравцю відновити форму та довести свій рівень на міжнародній арені.",
          ]}
          closing="Рішення очікується до кінця липня."
        />
      </div>
    </main>
  )
}
