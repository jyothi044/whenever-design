import { clients } from "@/lib/mock-site";

export function ClientsBanner({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="mx-auto mb-[clamp(3.5rem,8vw,5.75rem)] max-w-[1200px] px-6 min-[810px]:px-8 min-[1200px]:px-0"
    >
      <div className="flex flex-col items-start justify-between gap-10 rounded-[30px] border border-black/[0.06] bg-white px-[clamp(1.5rem,4vw,2.85rem)] py-[clamp(2rem,5vw,2.85rem)] shadow-[var(--shadow-card)] motion-safe:transition-[box-shadow,border-color] motion-safe:duration-500 hover:border-black/[0.1] hover:shadow-[0_28px_60px_-32px_rgb(0_0_0/0.15)] max-[809px]:w-full md:flex-row md:items-center">
        <div>
          <h2 className="max-w-xl font-serif text-[clamp(1.95rem,3.85vw,2.35rem)] font-medium italic tracking-[-0.03em] leading-[1.15] text-ink">
            {clients.title}
          </h2>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-3 min-[810px]:w-auto md:items-end">
          <a
            href="#book-a-call"
            className="-ml-[6px] text-left text-[15px] font-semibold tracking-[-0.04em] text-ink underline-offset-[5px] transition-[opacity,color] duration-200 hover:text-ink hover:underline active:opacity-70 md:text-right"
          >
            {clients.callCta}
          </a>
          <span className="inline-flex shrink-0 items-center gap-2 font-display-mono text-[10px] font-normal uppercase tracking-[0.32em] text-muted">
            {clients.callMeta}
            <span className="h-px w-8 shrink-0 bg-muted/40" aria-hidden />
            <a
              href="#book-a-call"
              className="text-[11px] font-semibold normal-case tracking-[-0.02em] text-ink underline-offset-[3px] transition-opacity duration-200 hover:underline"
            >
              {clients.calendarLabel}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
