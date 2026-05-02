"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/mock-site";
import { SectionLabel } from "./section-label";

export function TestimonialsCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const sync = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const tol = 4;
    setCanPrev(el.scrollLeft > tol);
    setCanNext(el.scrollLeft + el.clientWidth + tol < el.scrollWidth);
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    el.addEventListener("scroll", sync, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", sync);
    };
  }, [sync]);

  const slide = useCallback((dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    const step = Math.max(el.clientWidth * 0.78, 260);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  return (
    <section className="mx-auto mt-[clamp(1rem,2vw,1.5rem)] max-w-[1200px] px-6 pb-[clamp(5rem,12vw,6.85rem)] min-[810px]:px-8 min-[1200px]:mx-auto min-[1200px]:px-0">
      <SectionLabel>{testimonials.label}</SectionLabel>
      <div className="mt-[22px] flex flex-col gap-10 min-[810px]:flex-row min-[810px]:items-end min-[810px]:justify-between">
        <h2 className="max-w-[640px] font-serif text-[clamp(2rem,5vw,3.05rem)] font-medium italic tracking-[-0.032em] leading-[1.12] text-ink">
          {testimonials.title}
        </h2>

        <div className="flex gap-3 min-[810px]:shrink-0">
          <NavArrow dir="prev" disabled={!canPrev} onClick={() => slide(-1)} />
          <NavArrow dir="next" disabled={!canNext} onClick={() => slide(1)} />
        </div>
      </div>

      <div
        ref={scroller}
        className="scrollbar-none mt-[clamp(2.65rem,4.5vw,3.85rem)] -mx-[max(1.5rem,50vw_-600px)] flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-visible px-[max(1.5rem,50vw_-600px)] pb-6 [scrollbar-width:none] md:gap-[22px]"
        tabIndex={0}
        aria-label="Testimonials"
      >
        {testimonials.items.map((t, idx) => (
          <blockquote
            key={t.quote}
            className={`group relative shrink-0 basis-[calc(92vw_-2rem)] snap-start rounded-[22px] border border-black/[0.06] bg-white p-[clamp(1.45rem,2.6vw,1.95rem)] shadow-[var(--shadow-card)] transition-[border-color,box-shadow] duration-[420ms] sm:basis-[min(420px,78vw)] min-[810px]:basis-[clamp(292px,calc((100%-4rem-_4.5rem)/3),330px)] min-[1200px]:basis-[calc((100%-2*22px-_3)/3)] hover:border-black/[0.1]`}
          >
            {/* reading focus ring */}
            <span
              className="pointer-events-none absolute inset-0 rounded-[22px] ring-2 ring-transparent transition-[opacity,ring-color] motion-safe:group-hover:ring-ink/10"
              style={{ opacity: idx % 4 === 2 ? 0.6 : 1 }}
              aria-hidden
            />
            <cite className="not-italic">
              <span className="block text-[16px] font-semibold tracking-[-0.03em] text-ink">{t.name}</span>
              <span className="mt-px block font-display-mono text-[10px] font-normal uppercase tracking-[0.24em] text-muted">
                {t.role}
              </span>
            </cite>
            <p className="mt-[18px] text-[14px] font-normal leading-[1.62] tracking-[-0.02em] text-ink/[0.85]">{`"${t.quote}"`}</p>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function NavArrow({
  dir,
  disabled,
  onClick,
}: {
  dir: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const isPrev = dir === "prev";
  return (
    <button
      type="button"
      disabled={disabled}
      aria-label={isPrev ? "Previous testimonials" : "Next testimonials"}
      onClick={onClick}
      className="relative flex size-12 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[0] shadow-[0_14px_32px_-20px_rgb(0_0_0/0.22)] outline-none ring-ink/25 transition-[opacity,background-color,color,transform,box-shadow] duration-350 enabled:hover:-translate-y-0.5 enabled:hover:border-black/[0.12] enabled:hover:shadow-[0_22px_40px_-18px_rgb(0_0_0/0.18)] disabled:opacity-38 disabled:saturate-0 focus-visible:ring-4 motion-reduce:enabled:hover:translate-y-0 motion-reduce:transition-none active:enabled:translate-y-0 active:enabled:transition-[transform]"
    >
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
        <title>{isPrev ? "Back Arrow" : "Next Arrow"}</title>
        <path
          d={isPrev ? "M14 17l-5-5 5-5" : "M10 7l5 5-5 5"}
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ink"
        />
      </svg>
    </button>
  );
}
