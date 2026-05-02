import { PillButton } from "@/components/ui/pill-button";
import { howItWorks } from "@/lib/mock-site";
import { BrandMark } from "./brand-mark";
import { SectionLabel } from "./section-label";
import { TitleEmphasis } from "./title-emphasis";

export function HowItWorksSection() {
  const subscribe = howItWorks.columns[0];
  const request = howItWorks.columns[1];
  const receive = howItWorks.columns[2];

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-[clamp(4.25rem,10vw,6.75rem)] min-[810px]:px-8 min-[1200px]:px-0">
      <div className="mx-auto mb-[clamp(3rem,6vw,4.5rem)] max-w-[56rem] text-center">
        <SectionLabel className="mx-auto mb-7 block">{howItWorks.label}</SectionLabel>
        <h2 className="text-center text-[clamp(1.75rem,4.85vw,3rem)] leading-[1.06] tracking-[-0.045em] text-ink">
          <TitleEmphasis
            text={howItWorks.title}
            emphasis={howItWorks.titleEmphasis}
            sansClassName="font-sans font-semibold"
            serifClassName="font-serif font-medium italic"
          />
        </h2>
      </div>

      <div className="grid gap-5 min-[810px]:grid-cols-3 min-[810px]:gap-6">
        <SubscribeFeatureCard title={subscribe.title} body={subscribe.body} />
        <RequestFeatureCard title={request.title} body={request.body} />
        <ReceiveFeatureCard title={receive.title} body={receive.body} />
      </div>
    </section>
  );
}

function SubscribeFeatureCard(args: {
  title: string;
  body: string;
}) {
  const { title, body } = args;
  return (
    <article className="flex flex-col overflow-hidden rounded-[clamp(20px,2.8vw,32px)] border border-black/[0.06] bg-white shadow-[var(--shadow-card)] motion-safe:transition-[transform,box-shadow] motion-safe:duration-500 hover:-translate-y-[2px] hover:shadow-[0_28px_56px_-32px_rgb(0_0_0/0.12)] motion-reduce:hover:translate-y-0">
      <div className="flex min-h-[260px] flex-1 flex-col items-stretch justify-center bg-[#ececec] p-5 min-[810px]:min-h-[280px]">
        <div className="relative mx-auto w-full max-w-[280px] rounded-[20px] border border-black/[0.06] bg-white p-6 pt-9 text-center shadow-[0_16px_40px_-24px_rgb(0_0_0/0.16)]">
          <span className="absolute right-4 top-4 rounded-full bg-neutral-100 px-[10px] py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
            Popular
          </span>
          <div className="flex justify-center [&_span]:text-[14px]">
            <BrandMark />
          </div>
          <div className="mt-6 flex flex-wrap items-baseline justify-center gap-x-1.5">
            <span className="font-serif text-[clamp(2.25rem,7vw,2.85rem)] font-medium italic leading-none tracking-[-0.05em] text-ink">
              {howItWorks.priceUsd}
            </span>
            <span className="text-[15px] font-medium text-muted">{howItWorks.cadence}</span>
          </div>
          <div className="mt-8">
            <PillButton href="#pricing" className="w-full">
              {howItWorks.cta}
            </PillButton>
          </div>
        </div>
      </div>
      <div className="px-6 py-7 min-[810px]:px-7 min-[810px]:py-8">
        <h3 className="text-[19px] font-semibold tracking-[-0.04em] text-ink">{title}</h3>
        <p className="mt-3 text-[14px] font-normal leading-[1.55] tracking-[-0.02em] text-[#666666]">
          {body}
        </p>
      </div>
    </article>
  );
}

function RequestFeatureCard(args: { title: string; body: string }) {
  const { title, body } = args;
  return (
    <article className="flex flex-col overflow-hidden rounded-[clamp(20px,2.8vw,32px)] border border-black/[0.06] bg-white shadow-[var(--shadow-card)] motion-safe:transition-[transform,box-shadow] motion-safe:duration-500 hover:-translate-y-[2px] hover:shadow-[0_28px_56px_-32px_rgb(0_0_0/0.12)] motion-reduce:hover:translate-y-0">
      <div className="relative min-h-[260px] flex-1 bg-[#ececec] min-[810px]:min-h-[280px]">
        {howItWorks.requestPills.map((p) => (
          <span
            key={p.label}
            className="absolute z-[1] whitespace-nowrap rounded-full border border-black/[0.05] bg-white px-[11px] py-[7px] text-[10px] font-semibold tracking-[-0.02em] text-ink shadow-[0_2px_10px_-2px_rgb(0_0_0/0.08)]"
            style={{
              top: p.top,
              left: p.left,
              right: p.right,
              bottom: p.bottom,
              transform: p.rotate ? `rotate(${p.rotate})` : undefined,
            }}
          >
            {p.label}
          </span>
        ))}
        <div className="absolute inset-0 z-[2] flex items-center justify-center">
          <div className="flex size-[68px] items-center justify-center rounded-2xl bg-ink text-[28px] font-serif font-medium italic leading-none text-white shadow-[0_18px_40px_-12px_rgb(0_0_0/0.45)] ring-2 ring-white/80">
            W
          </div>
        </div>
      </div>
      <div className="px-6 py-7 min-[810px]:px-7 min-[810px]:py-8">
        <h3 className="text-[19px] font-semibold tracking-[-0.04em] text-ink">{title}</h3>
        <p className="mt-3 text-[14px] font-normal leading-[1.55] tracking-[-0.02em] text-[#666666]">
          {body}
        </p>
      </div>
    </article>
  );
}

function ReceiveFeatureCard(args: { title: string; body: string }) {
  const { title, body } = args;
  return (
    <article className="flex flex-col overflow-hidden rounded-[clamp(20px,2.8vw,32px)] border border-black/[0.06] bg-white shadow-[var(--shadow-card)] motion-safe:transition-[transform,box-shadow] motion-safe:duration-500 hover:-translate-y-[2px] hover:shadow-[0_28px_56px_-32px_rgb(0_0_0/0.12)] motion-reduce:hover:translate-y-0">
      <div className="flex min-h-[260px] flex-1 items-center justify-center bg-[#ececec] px-6 py-10 min-[810px]:min-h-[280px]">
        <ReceiveFolderVisual />
      </div>
      <div className="px-6 py-7 min-[810px]:px-7 min-[810px]:py-8">
        <h3 className="text-[19px] font-semibold tracking-[-0.04em] text-ink">{title}</h3>
        <p className="mt-3 text-[14px] font-normal leading-[1.55] tracking-[-0.02em] text-[#666666]">
          {body}
        </p>
      </div>
    </article>
  );
}

function ReceiveFolderVisual() {
  return (
    <div className="relative w-[min(200px,52vw)] translate-y-2">
      <div className="absolute -top-1 left-4 h-3 w-14 rounded-t-md bg-[#d6d6d6] ring-1 ring-black/[0.04]" />
      <div className="relative overflow-hidden rounded-t-xl rounded-br-xl bg-white pt-5 shadow-[0_22px_48px_-22px_rgb(0_0_0/0.18)] ring-1 ring-black/[0.07]">
        <div className="absolute left-1/2 top-3 flex -translate-x-1/2 gap-1.5">
          <span className="h-[52px] w-[7px] rounded-sm bg-sky-500 shadow-sm" />
          <span className="h-[58px] w-[7px] rounded-sm bg-teal-500 shadow-sm" />
          <span className="h-[46px] w-[7px] rounded-sm bg-ink shadow-sm" />
        </div>
        <div className="flex h-[120px] items-end justify-center pb-5 pt-16">
          <span className="font-serif text-[22px] font-medium italic text-neutral-300">W</span>
        </div>
      </div>
    </div>
  );
}
