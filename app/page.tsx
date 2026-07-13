import { SiteHeader } from "@/components/site-header"
import { TransferHero } from "@/components/transfer-hero"
import { PlayerStats } from "@/components/player-stats"
import { CandidatesSection } from "@/components/candidates-section"
import { EditorialOpinion } from "@/components/editorial-opinion"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <TransferHero />
      <PlayerStats />
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-12">
        <CandidatesSection />
        <EditorialOpinion />
      </div>
    </main>
  )
}
