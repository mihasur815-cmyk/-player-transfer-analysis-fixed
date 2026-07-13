import { TribunaLogo } from "@/components/tribuna-logo"
import Link from "next/link"

const players = [
  { href: "/", label: "Довбик" },
  { href: "/stones", label: "Stones" },
  { href: "/zinchenko", label: "Зінченко" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <TribunaLogo className="h-8 w-8" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold uppercase tracking-[0.15em] text-foreground">
              Tribuna<span className="text-highlight">.com</span>
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.25em] text-highlight">
              Football
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {players.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="rounded-sm px-3 py-1.5 transition-colors hover:bg-primary/10 hover:text-foreground"
            >
              {p.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
