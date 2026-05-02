"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/mock-site";
import { framerAssets } from "@/lib/framer-assets";
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
        {testimonials.items.map((t, idx) => {
          const avatar =
            framerAssets.testimonialAvatars[idx % framerAssets.testimonialAvatars.length];
          return (
          <blockquote
            key={t.quote}
            className="group relative w-[min(90vw,calc(100vw-3rem))] max-w-[400px] shrink-0 snap-start rounded-[22px] border border-black/[0.06] bg-white p-[clamp(1.45rem,2.6vw,1.95rem)] shadow-[var(--shadow-card)] transition-[border-color,box-shadow] duration-[420ms] hover:border-black/[0.1] sm:w-[min(78vw,420px)] min-[810px]:w-[min(304px,calc((100%-3rem)/3))] min-[1200px]:w-[calc((1200px-2*22px-72px)/3)]"
          >
            {/* reading focus ring */}
            <span
              className="pointer-events-none absolute inset-0 rounded-[22px] ring-2 ring-transparent transition-[opacity,ring-color] motion-safe:group-hover:ring-ink/10"
              style={{ opacity: idx % 4 === 2 ? 0.6 : 1 }}
              aria-hidden
            />
            <cite className="not-italic flex gap-4">
              <div className="relative size-[48px] shrink-0 overflow-hidden rounded-full bg-canvas ring-2 ring-black/[0.06] shadow-[var(--shadow-card)] motion-safe:transition-transform motion-safe:duration-450 group-hover:scale-[1.04]">
                <Image
                  src={avatar}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover object-center"
                />
              </div>
              <span className="min-w-0">
                <span className="block text-[16px] font-semibold tracking-[-0.03em] text-ink">
                  {t.name}
                </span>
                <span className="mt-px block font-display-mono text-[10px] font-normal uppercase tracking-[0.24em] text-muted">
                  {t.role}
                </span>
              </span>
            </cite>
            <p className="mt-[18px] text-[14px] font-normal leading-[1.62] tracking-[-0.02em] text-ink/[0.85]">{`"${t.quote}"`}</p>
          </blockquote>
          );
        })}
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
      className="relative flex size-12 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[0] shadow-[0_14px_32px_-20px_rgb(0_0_0/0.22)] outline-none ring-ink/25 transition-[opacity,background-color,color,transform,box-shadow] duration-300 enabled:hover:-translate-y-0.5 enabled:hover:border-black/[0.12] enabled:hover:shadow-[0_22px_40px_-18px_rgb(0_0_0/0.18)] disabled:opacity-[0.38] disabled:saturate-0 focus-visible:ring-4 motion-reduce:enabled:hover:translate-y-0 motion-reduce:transition-none active:enabled:translate-y-0 active:enabled:transition-[transform]"
    >
      <span aria-hidden className="relative block size-[22px] shrink-0 text-ink">
        <Image
          src={framerAssets.testimonialCarouselArrowSvg}
          alt=""
          width={22}
          height={22}
          sizes="22px"
          className={isPrev ? "" : "scale-x-[-1]"}
        />
      </span>
    </button>
  );
}
