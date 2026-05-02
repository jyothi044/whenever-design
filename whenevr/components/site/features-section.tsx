import { features } from "@/lib/mock-site";
import { SectionLabel } from "./section-label";

export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-[clamp(5rem,11vw,6.85rem)] pt-[clamp(1rem,3vw,1.75rem)] min-[810px]:px-8 min-[1200px]:px-0">
      <SectionLabel>{features.label}</SectionLabel>
      <h2 className="mt-[18px] max-w-[880px] font-serif text-[clamp(2rem,5.2vw,3.125rem)] font-medium italic tracking-[-0.032em] leading-[1.12] text-ink">
        {features.title}
      </h2>

      <div className="mt-[clamp(2.85rem,5.5vw,3.85rem)] grid gap-[clamp(1.85rem,3.5vw,2.85rem)] min-[810px]:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] min-[810px]:items-start">
        <div className="grid gap-[clamp(1.85rem,3vw,2.25rem)] min-[760px]:grid-cols-2">
          {features.items.map((f) => (
            <div key={f.title} className="group rounded-[20px] p-[2px]">
              <div className="h-full rounded-[18px] border border-transparent bg-white/[0.35] p-[clamp(1.15rem,2.2vw,1.65rem)] transition-[border-color,background-color,transform] duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:border-black/[0.08] motion-safe:group-hover:bg-white motion-reduce:group-hover:translate-y-0">
                <p className="text-[clamp(17px,1.9vw,19px)] font-semibold tracking-[-0.032em] text-ink transition-colors duration-200">
                  {f.title}
                </p>
                <p className="mt-3 max-w-[16rem] text-[14px] font-normal leading-relaxed tracking-[-0.02em] text-muted">
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-black/[0.06] bg-white p-[clamp(1.25rem,2.75vw,1.95rem)] shadow-[var(--shadow-card)] motion-safe:after:pointer-events-none motion-safe:after:absolute motion-safe:after:inset-0 motion-safe:after:bg-gradient-to-b motion-safe:after:from-transparent motion-safe:after:via-transparent motion-safe:after:to-[#f8f8f8] motion-safe:after:opacity-0 motion-safe:after:transition-opacity motion-safe:after:duration-500 motion-safe:hover:after:opacity-95">
          <ul className="relative z-[1] flex flex-wrap gap-2 pt-px">
            {features.tags.map((t) => (
              <li key={t}>
                <button
                  type="button"
                  className="inline-flex rounded-full bg-canvas px-[11px] py-[7px] text-[11px] font-semibold tracking-[-0.02em] text-ink/[0.78] outline-none ring-1 ring-transparent transition-[transform,color,background-color,border-color,box-shadow] duration-350 hover:bg-ink hover:text-white focus-visible:ring-2 focus-visible:ring-ink/25 active:scale-[0.98]"
                >
                  {t}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
