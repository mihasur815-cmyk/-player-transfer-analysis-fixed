import { TribunaLogo } from "@/components/tribuna-logo"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2.5">
          <TribunaLogo className="h-8 w-8" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold uppercase tracking-[0.15em] text-foreground">
              Tribuna<span className="text-highlight">.com</span>
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.25em] text-highlight">
              Football
            </span>
          </div>
        </div>
        <nav className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <span className="rounded-sm bg-primary px-3 py-1.5 text-primary-foreground">Трансфери</span>
          <span className="hidden px-3 py-1.5 transition-colors hover:text-foreground sm:inline">Серія А</span>
          <span className="hidden px-3 py-1.5 transition-colors hover:text-foreground sm:inline">Аналітика</span>
        </nav>
      </div>
    </header>
  )
}
