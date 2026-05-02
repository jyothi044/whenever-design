import { howItWorks } from "@/lib/mock-site";
import { PillButton } from "@/components/ui/pill-button";
import { SectionLabel } from "./section-label";

export function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-[clamp(5rem,12vw,7.75rem)] min-[810px]:px-8 min-[1200px]:px-0">
      <div className="mx-auto mb-[clamp(2.75rem,6vw,4.25rem)] max-w-[52rem] text-center">
        <SectionLabel className="mb-8 justify-self-center">{howItWorks.label}</SectionLabel>
        <h2 className="font-serif text-[clamp(2.15rem,4.85vw,3rem)] font-medium italic leading-[1.12] tracking-[-0.03em] text-ink">
          {howItWorks.title}
        </h2>
      </div>

      <PopularPlanCard />

      <div className="mt-[clamp(2.75rem,6vw,4rem)] grid gap-[clamp(2rem,4vw,2.75rem)] min-[810px]:grid-cols-3">
        {howItWorks.columns.map((col, i) => (
          <article
            key={col.title}
            className="group relative isolate flex flex-col rounded-[26px] border border-black/[0.06] bg-white p-[clamp(1.25rem,2.8vw,1.85rem)] shadow-[var(--shadow-card)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-black/[0.1] hover:shadow-[0_24px_50px_-24px_rgb(0_0_0/0.14)] motion-reduce:hover:translate-y-0"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <h3 className="font-serif text-[clamp(21px,2.3vw,24px)] font-medium italic tracking-[-0.03em] text-ink">
              {col.title}
            </h3>
            <p className="mt-5 text-[15px] leading-[1.55] tracking-[-0.02em] text-muted">
              {col.body}
            </p>

            {"bullets" in col && col.bullets ? (
              <ul className="mt-8 columns-2 gap-x-6 gap-y-2 text-[12px] font-medium tracking-[-0.02em] text-ink/[0.78] md:columns-auto md:grid md:grid-cols-3 md:text-[13px]">
                {col.bullets!.map((b) => (
                  <li key={b} className="mb-3 break-inside-avoid rounded-lg bg-neutral-500/[0.04] px-[10px] py-1 motion-safe:transition-[background,color] motion-safe:duration-300 hover:bg-neutral-900/[0.08] hover:text-ink md:w-full md:truncate">
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>

      <DemoVisual />

      <p className="mt-14 text-center font-display-mono text-[10px] font-normal uppercase tracking-[0.32em] text-muted">
        {howItWorks.demoCaption}
      </p>
    </section>
  );
}

function PopularPlanCard() {
  return (
    <div className="mx-auto grid max-w-[420px] place-items-center">
      <article className="relative w-full rounded-[34px] border border-black/[0.07] bg-white pb-10 pt-12 text-center shadow-[0_32px_64px_-40px_rgb(0_0_0/0.28)] ring-1 ring-black/[0.035] motion-safe:transition-[transform] motion-safe:duration-500 hover:-translate-y-1 hover:shadow-[0_42px_80px_-40px_rgb(0_0_0/0.32)]">
        <span className="absolute left-6 top-5 inline-flex overflow-hidden rounded-full bg-ink/[0.04] p-px text-[10px] font-semibold uppercase tracking-[0.18em] text-muted ring-1 ring-black/[0.06] motion-safe:before:absolute motion-safe:before:inset-x-[-40%] motion-safe:before:inset-y-0 motion-safe:before:-translate-x-full motion-safe:before:skew-x-[12deg] motion-safe:before:bg-gradient-to-r motion-safe:before:from-transparent motion-safe:before:via-white/[0.5] motion-safe:before:to-transparent motion-safe:hover:before:translate-x-[150%] motion-safe:hover:before:transition-transform motion-safe:hover:before:duration-[1.05s]">
          <span className="rounded-full px-3 py-[5px]">Popular</span>
        </span>

        <h3 className="font-display-mono text-[clamp(13px,1.55vw,15px)] font-normal lowercase tracking-[0.18em] text-muted">
          {howItWorks.planName}
          <sup className="align-super text-[0.6em]">®</sup>
        </h3>

        <div className="mt-10 flex flex-wrap items-baseline justify-center gap-x-[10px] gap-y-1">
          <span className="font-serif text-[clamp(3rem,11vw,4.25rem)] font-medium italic leading-none tracking-[-0.05em] text-ink tabular-nums">
            {howItWorks.priceUsd}
          </span>
          <span className="text-[18px] font-medium tracking-[-0.03em] text-muted">
            {howItWorks.cadence}
          </span>
        </div>

        <div className="mt-12 px-[13%]">
          <PillButton href="#pricing" className="w-full">
            {howItWorks.cta}
          </PillButton>
        </div>
      </article>
    </div>
  );
}

function DemoVisual() {
  return (
    <div className="mt-[clamp(2.75rem,6vw,4rem)]">
      <div className="group relative isolate overflow-hidden rounded-[24px] border border-black/[0.06] bg-gradient-to-br from-neutral-200/90 via-neutral-50 to-white shadow-inner">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(255,255,255,0.88),transparent_55%)]" />
        <div className="relative aspect-[21/11] max-h-[360px] w-full px-10 py-[clamp(2.75rem,5vw,3.75rem)] min-[810px]:max-h-none min-[810px]:aspect-video">
          <div className="mx-auto grid h-full place-items-center text-center motion-safe:transition-transform motion-safe:duration-[650ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
            <p className="max-w-sm font-display-mono text-[11px] font-normal uppercase leading-relaxed tracking-[0.38em] text-muted">
              {howItWorks.demoCaption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
