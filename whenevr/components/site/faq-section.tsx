"use client";

import { faqs, site } from "@/lib/mock-site";
import { SectionLabel } from "./section-label";
import { useId, useState } from "react";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-[clamp(4.5rem,9vw,6rem)] min-[810px]:px-8 min-[1200px]:px-0">
      <div className="grid gap-[clamp(2.5rem,5vw,4rem)] min-[810px]:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] min-[810px]:items-start">
        <div>
          <SectionLabel>{faqs.label}</SectionLabel>
          <h2 className="mt-[18px] font-serif text-[clamp(2rem,4.3vw,2.75rem)] font-medium italic tracking-[-0.032em] leading-[1.15] text-ink">
            {faqs.title}
          </h2>
          <div className="mt-12 hidden min-[810px]:block">
            <p className="font-display-mono text-[10px] font-normal uppercase tracking-[0.34em] text-muted">
              {faqs.introEmail}
            </p>
            <a
              href={`mailto:${encodeURIComponent(site.brand.emailMock)}`}
              className="mt-3 inline-block text-[15px] font-semibold tracking-[-0.03em] text-ink underline-offset-[4px] transition-opacity hover:underline"
            >
              {site.brand.emailMock}
            </a>
            <div className="mt-8">
              <a
                href={`mailto:${encodeURIComponent(site.brand.emailMock)}`}
                className="inline-flex h-12 items-center justify-center rounded-full border border-ink/[0.12] bg-white px-7 text-[14px] font-semibold tracking-[-0.03em] text-ink shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-300 hover:-translate-y-px hover:shadow-[0_18px_40px_-16px_rgb(0_0_0/0.12)]"
              >
                {faqs.ctaContact}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.items.map((item, i) => {
            const id = `${baseId}-panel-${i}`;
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-[18px] border border-black/[0.06] bg-white shadow-[0_1px_0_rgb(0_0_0/0.03)] transition-[border-color,box-shadow] duration-300 hover:border-black/[0.09]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  id={`${baseId}-question-${i}`}
                  className="flex w-full items-start justify-between gap-4 px-[18px] py-[18px] text-left outline-none transition-[background-color] duration-200 hover:bg-black/[0.015] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ink/20"
                  onClick={() => setOpen((q) => (q === i ? null : i))}
                >
                  <span className="text-[15px] font-semibold tracking-[-0.03em] text-ink">{item.q}</span>
                  <span
                    aria-hidden
                    className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-canvas text-[18px] font-light leading-none text-ink transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                <div
                  id={id}
                  role="region"
                  aria-labelledby={`${baseId}-question-${i}`}
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-[18px] pb-[20px] pt-0 text-[14px] font-normal leading-[1.65] tracking-[-0.02em] text-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="min-[810px]:hidden">
          <p className="font-display-mono text-[10px] font-normal uppercase tracking-[0.34em] text-muted">
            {faqs.introEmail}
          </p>
          <a
            href={`mailto:${encodeURIComponent(site.brand.emailMock)}`}
            className="mt-2 inline-block text-[15px] font-semibold tracking-[-0.03em] text-ink underline-offset-[4px] hover:underline"
          >
            {site.brand.emailMock}
          </a>
        </div>
      </div>
    </section>
  );
}
