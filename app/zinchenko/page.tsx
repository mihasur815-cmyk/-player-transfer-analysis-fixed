import { SiteHeader } from "@/components/site-header"
import { TransferHero } from "@/components/transfer-hero"
import { PlayerStats } from "@/components/player-stats"
import { CandidatesSection } from "@/components/candidates-section"
import { EditorialOpinion } from "@/components/editorial-opinion"

const zinchenko = {
  name: "Олександр Зінченко",
  nameFirst: "ОЛЕКСАНДР",
  nameLast: "ЗІНЧЕНКО",
  photo: "/zinchenko.jpeg",
  position: "Лівий захисник",
  club: "AJAX",
  age: "28 РОКІВ",
  subtitle:
    "Оренда в Ajax завершується влітку. Чи стане перехід постійним — і що з поверненням в «Арсенал»?",
  objectPosition: "62% 14%",
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
    detail: "Опція викупу в контракті · клуб схиляється її активувати",
    probability: 68,
    status: "Лідер гонки",
    lead: true,
  },
  {
    country: "TUR",
    league: "Туреччина",
    club: "Galatasaray",
    detail: "Готові до трансферу, якщо Ajax не викупить · попередній інтерес",
    probability: 20,
    status: "Активний інтерес",
    lead: false,
  },
  {
    country: "ENG",
    league: "Англія",
    club: "Arsenal",
    detail: "Формально контракт до 2026 · шлях в основу закритий",
    probability: 12,
    status: "Малоймовірно",
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
          verdict="Оренда в Ajax — не крок назад, а спосіб знову грати щотижня."
          paragraphs={[
            "В «Арсеналі» його час вичерпався: Артета давно бачить лівий фланг інакше, і шлях у стартовий склад лондонців фактично закритий.",
            "В Амстердамі — навпаки: стабільні 90 хвилин, роль лідера в побудові атак і 9 асистів, які нагадали, чому Зінченко колись коштував «Арсеналу» 35 мільйонів.",
          ]}
          closing="Найлогічніший фінал — Ajax активує опцію викупу ще до старту сезону."
        />
      </div>
    </main>
  )
}
