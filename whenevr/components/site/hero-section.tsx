import Image from "next/image";
import { hero } from "@/lib/mock-site";
import { PillButton } from "@/components/ui/pill-button";
import { BrandMark } from "./brand-mark";
import { framerAssets } from "@/lib/framer-assets";

export function HeroSection() {
  return (
    <section className="group/hero mx-auto max-w-[1200px] px-6 pb-[min(8vw,6rem)] pt-10 min-[810px]:px-8 min-[810px]:pt-14 min-[1200px]:px-0">
      <div className="grid gap-[clamp(3rem,7vw,5.5rem)] min-[810px]:grid-cols-[1fr,minmax(280px,0.94fr)] min-[810px]:items-end min-[810px]:gap-[4.25rem] min-[1200px]:gap-[5.75rem]">
        <div>
          <div className="hero-fade-rise mb-10 flex">
            <BrandMark />
          </div>

          <ul className="hero-fade-rise mb-10 flex max-w-xl flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-medium tracking-[-0.04em] text-muted"
            style={{ animationDelay: "120ms" }}
          >
            {hero.services.map((s, idx) => (
              <li key={s} className="contents">
                {idx !== 0 ? (
                  <span className="-mr-px text-black/[0.18]" aria-hidden>
                    •
                  </span>
                ) : null}
                <span>{s}</span>
              </li>
            ))}
          </ul>

          <h1
            className="hero-title-text hero-fade-rise"
            style={{ animationDelay: "210ms" }}
          >
            {hero.title.includes("whenevr") ? (
              <>
                {hero.title.slice(0, hero.title.indexOf("whenevr"))}
                <span className="lowercase italic">whenevr</span>
                {hero.title.slice(
                  hero.title.indexOf("whenevr") + "whenevr".length,
                )}
              </>
            ) : (
              hero.title
            )}
          </h1>

          <p
            className="hero-fade-rise mt-8 max-w-[460px] text-[17px] leading-[1.55] tracking-[-0.03em] text-muted"
            style={{ animationDelay: "290ms" }}
          >
            {hero.subtitle}
          </p>

          <div
            className="hero-fade-rise mt-11 flex flex-col gap-3 min-[810px]:flex-row min-[810px]:items-center min-[810px]:gap-4"
            style={{ animationDelay: "380ms" }}
          >
            <PillButton href="#pricing">See Pricing</PillButton>
            <BookCallChip />
          </div>
        </div>

        <HeroVisualDeck />
      </div>

    </section>
  );
}

function BookCallChip() {
  return (
    <a
      href="#book-a-call"
      className="group inline-flex flex-col rounded-full border border-ink/[0.1] bg-white px-[18px] py-2 shadow-[var(--shadow-card)] ring-black/[0.03] ring-inset ring-1 transition-[transform,box-shadow] duration-300 hover:-translate-y-px hover:shadow-[0_18px_40px_-12px_rgb(0_0_0/0.12)] min-[810px]:flex-row min-[810px]:items-center min-[810px]:gap-4 min-[810px]:py-2 min-[810px]:pl-[18px] min-[810px]:pr-[6px]"
    >
      <span className="text-[13px] font-semibold tracking-[-0.04em] text-ink underline-offset-[3px] group-hover:underline">
        Book a 15-min intro call
      </span>
      <span className="mt-px flex flex-wrap items-center gap-2 pt-px min-[810px]:contents">
        <span className="inline-flex shrink-0 items-center rounded-full bg-[#eaf7ea] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#28632a] motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-[1.02]">
          Available now
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ink/[0.04] px-3 py-1.5 text-[11px] font-semibold tracking-[-0.02em] text-ink motion-safe:transition-[background,color,transform] motion-safe:duration-300 group-hover:bg-ink group-hover:text-white">
          <svg
            width={14}
            height={14}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
            className="opacity-85"
          >
            <path
              d="M8 14l4 4 4-4"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 14V7a5 5 0 10-10 0v7"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
            />
          </svg>
          View calendar
        </span>
      </span>
    </a>
  );
}

function HeroVisualDeck() {
  const [back, middle, front] = framerAssets.heroStackBehind;

  return (
    <div
      aria-hidden
      className="group/deck relative mx-auto mb-[-4%] w-full max-w-[420px] min-[810px]:mx-0 min-[810px]:mb-0 min-[810px]:max-w-none"
    >
      <div className="relative aspect-square min-h-[340px] min-[810px]:aspect-[26/31]">
        <div className="absolute inset-0 rotate-[-9deg] scale-[0.93] overflow-hidden rounded-[22px] border border-black/[0.06] bg-neutral-900/[0.04] opacity-98 shadow-[0_30px_60px_-32px_rgb(0_0_0/0.22)] transition-transform duration-[700ms] ease-[var(--ease-out-expo)] will-change-transform group-hover/deck:rotate-[-7deg]">
          <Image
            src={back}
            alt=""
            fill
            sizes="(max-width: 809px) 90vw, 420px"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-[4%] rotate-[4deg] scale-[0.93] overflow-hidden rounded-[22px] border border-black/[0.07] shadow-[var(--shadow-card)] ring-1 ring-black/[0.04] transition-transform duration-[620ms] ease-[var(--ease-out-expo)] will-change-transform group-hover/deck:rotate-[2deg]">
          <Image
            src={middle}
            alt=""
            fill
            sizes="(max-width: 809px) 90vw, 420px"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-[8%_6%_12%_6%] overflow-hidden rounded-[18px] border border-black/[0.065] shadow-[0_26px_50px_-30px_rgb(0_0_0/0.35)]">
          <Image
            src={front}
            alt=""
            fill
            sizes="(max-width: 809px) 90vw, 400px"
            className="object-cover object-[center_top]"
          />
        </div>
        <div className="pointer-events-none absolute inset-[12%_8%_16%_8%] z-[2] rounded-[14px]">
          <Image
            src={framerAssets.heroPrimary}
            alt=""
            fill
            priority
            sizes="(max-width: 809px) 92vw, 420px"
            className="object-contain object-bottom drop-shadow-[0_18px_40px_-12px_rgb(0_0_0/0.25)]"
          />
        </div>
      </div>
    </div>
  );
}
