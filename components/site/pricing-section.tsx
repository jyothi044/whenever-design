import Link from "next/link";
import { pricing } from "@/lib/mock-site";
import { PillButton } from "@/components/ui/pill-button";

export function PricingSection({ id }: { id: string }) {
  return (
    <section id={id} className="border-y border-black/[0.045] bg-canvas py-[clamp(4.85rem,10vw,6.85rem)]">
      <div className="mx-auto grid max-w-[1200px] gap-[clamp(2.85rem,5vw,4rem)] px-6 min-[810px]:grid-cols-2 min-[810px]:items-stretch min-[810px]:px-8 min-[1200px]:grid-cols-[1fr_1fr_1fr] min-[1200px]:gap-8 min-[1200px]:px-0">
        <PricingIntroCard />

        {[0, 1, 2].map((slice) => (
          <PricingCard key={slice} emphasis={slice === 1} />
        ))}
      </div>
      <DemoFootnote />
    </section>
  );
}

function PricingIntroCard() {
  return (
    <div className="flex flex-col rounded-[36px] border border-black/[0.06] bg-white p-[clamp(1.65rem,3.2vw,2.65rem)] shadow-[var(--shadow-card)] min-[810px]:row-span-1 min-[1200px]:col-span-1">
      <h3 className="font-display-mono text-[clamp(14px,1.7vw,16px)] font-normal lowercase tracking-[0.16em] text-muted">
        {pricing.planWordmark}
        <sup className="font-sans align-super text-[0.55em]">®</sup>
      </h3>
      <p className="mt-14 max-w-none font-serif text-[clamp(1.55rem,2.75vw,1.875rem)] font-medium italic tracking-[-0.03em] leading-[1.18] text-ink md:max-w-[12ch] min-[1200px]:max-w-none">
        {pricing.headline}
      </p>
    </div>
  );
}

function PricingCard({ emphasis }: { emphasis: boolean }) {
  return (
    <article
      className={`relative flex flex-col rounded-[34px] border border-black/[0.07] p-[clamp(1.85rem,3vw,2.85rem)] transition-[border-color,box-shadow,color,background-color,transform] duration-500 hover:-translate-y-1 hover:shadow-[0_36px_70px_-40px_rgb(0_0_0/0.38)] motion-reduce:hover:translate-y-0 ${
        emphasis
          ? "bg-ink text-white shadow-[0_42px_80px_-40px_rgb(0_0_0/0.35)] hover:border-white/[0.12]"
          : "border-black/[0.06] bg-white shadow-[var(--shadow-card)] hover:border-black/[0.08]"
      }`}
    >
      {emphasis ? (
        <button
          type="button"
          className="mb-12 inline-flex items-center gap-4 self-start rounded-xl border border-white/[0.18] px-5 py-[11px] text-left backdrop-blur-sm transition-colors duration-300 hover:border-white/[0.28] hover:bg-white/[0.06]"
        >
          <span className="relative flex gap-px font-serif text-[22px] font-medium italic tracking-[-0.04em] text-white">
            {pricing.price}
          </span>
          <span className="-mt-2 font-display-mono text-[10px] font-normal uppercase tracking-[0.28em] text-white/70">
            {pricing.addOnLabel}
            <span className="mt-px block whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.15em] text-white">
              {pricing.addOnPrice}
            </span>
          </span>
        </button>
      ) : null}

      <div className="flex flex-wrap items-end gap-[10px]">
        {!emphasis ? (
          <span className="font-serif text-[clamp(2.35rem,5.5vw,3.125rem)] font-medium italic tracking-[-0.05em] text-ink tabular-nums leading-none">
            {pricing.price}
          </span>
        ) : null}
        <span
          className={`pb-[calc(6px+.15em)] text-[clamp(17px,1.8vw,18px)] font-medium tracking-[-0.03em] ${
            emphasis ? "text-white/75" : "text-muted"
          }`}
        >
          {pricing.cadence}
        </span>
      </div>

      <hr
        className={`my-[clamp(1.75rem,3vw,2.25rem)] h-px w-full rounded-full border-0 ${
          emphasis ? "bg-white/[0.16]" : "bg-black/[0.08]"
        }`}
      />

      <ul className={`space-y-[14px] text-[14px] font-medium tracking-[-0.02em] leading-relaxed ${emphasis ? "text-white/88" : "text-ink/[0.85]"}`}>
        {pricing.bullets.map((b) => (
          <CheckRow key={b} highlight={emphasis}>
            {b}
          </CheckRow>
        ))}
      </ul>

      <div className="grow" />

      <PillButton
        href="#"
        className="mt-12"
        variant={emphasis ? "secondary" : "primary"}
      >
        {pricing.cta}
      </PillButton>
    </article>
  );
}

function CheckRow({ children, highlight }: { children: string; highlight: boolean }) {
  return (
    <li className="flex gap-[12px]">
      <span
        aria-hidden
        className={`mt-[3px] flex size-[18px] shrink-0 items-center justify-center rounded-full text-[11px] ${
          highlight
            ? "bg-white/[0.12] ring-1 ring-white/[0.18]"
            : "bg-neutral-950/[0.05] ring-1 ring-neutral-950/[0.08]"
        }`}
      >
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function DemoFootnote() {
  return (
    <ul className="mx-auto mt-16 flex max-w-[1200px] flex-wrap gap-x-[3.75rem] gap-y-5 px-6 font-display-mono text-[11px] font-normal lowercase tracking-[0.14em] text-muted min-[810px]:px-8 min-[810px]:text-[11px] min-[1200px]:justify-center">
      {[1, 2, 3, 4].map((i) => (
        <li key={i}>Example content for demo purposes only.</li>
      ))}
    </ul>
  );
}
