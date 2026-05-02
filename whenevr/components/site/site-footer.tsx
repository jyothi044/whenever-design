import Link from "next/link";
import { footerCta, footerLegal } from "@/lib/mock-site";
import { PillButton } from "@/components/ui/pill-button";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/[0.06] bg-canvas">
      <div className="mx-auto max-w-[1200px] px-6 py-[clamp(4.85rem,10vw,6.5rem)] min-[810px]:px-8 min-[1200px]:px-0">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="font-serif text-[clamp(2.25rem,5.6vw,3.85rem)] font-medium italic tracking-[-0.035em] leading-[1.05] text-ink">
            {footerCta.wordmarkLine[0]}
            <br />
            {footerCta.wordmarkLine[1]}
          </p>
          <p className="mx-auto mt-8 max-w-[480px] text-[15px] font-normal leading-[1.6] tracking-[-0.025em] text-muted">
            {footerCta.body}
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 min-[480px]:flex-row min-[480px]:flex-wrap">
            <PillButton href={footerCta.primaryHref} variant="primary">
              {footerCta.primaryLabel}
            </PillButton>
            {footerCta.secondaryLabels.map((label) => (
              <PillButton key={label} href={footerCta.secondaryHref} variant="secondary">
                {label}
              </PillButton>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-black/[0.045] pb-10 pt-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-8 px-6 text-center min-[810px]:flex-row min-[810px]:px-8 min-[810px]:text-left min-[1200px]:px-0">
          <p className="text-[13px] font-medium leading-relaxed tracking-[-0.04em] text-muted">
            {footerLegal.copyright}{" "}
            {footerLegal.attribution.prefix}{" "}
            <Link
              href={footerLegal.attribution.href}
              className="text-ink underline-offset-[3px] transition-opacity hover:underline"
            >
              {footerLegal.attribution.label}
            </Link>
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {footerLegal.links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[13px] font-medium tracking-[-0.04em] text-muted transition-[color] duration-200 hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
