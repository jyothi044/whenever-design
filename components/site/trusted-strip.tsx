import { trusted } from "@/lib/mock-site";

export function TrustedStrip() {
  const dup = [...trusted.logos, ...trusted.logos];
  return (
    <section
      aria-label={trusted.eyebrow}
      className="border-y border-black/[0.045] bg-canvas py-14"
    >
      <div className="mx-auto mb-10 max-w-[1200px] px-6 min-[810px]:px-8 min-[1200px]:px-0">
        <p className="text-center font-display-mono text-[11px] font-normal uppercase tracking-[0.34em] text-muted">
          {trusted.eyebrow}
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)]">
        <div className="marquee-track gap-24 pr-24">
          {dup.map((name, idx) => (
            <LogoWord key={`${name}-${idx}`}>{name}</LogoWord>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoWord({ children }: { children: string }) {
  return (
    <span className="whitespace-nowrap font-display-mono text-[clamp(26px,3.5vw,34px)] font-normal lowercase tracking-[0.02em] text-ink/[0.14] blur-[0.2px] transition-[color,text-shadow] duration-500 hover:text-ink/[0.35]">
      {children}
    </span>
  );
}
