import { site } from "@/lib/mock-site";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display-mono text-[clamp(17px,1.05vw,20px)] font-normal lowercase tracking-[0.04em] text-ink ${className}`.trim()}
    >
      {site.brand.name}
      {site.brand.registered ? <sup className="ml-[1px] text-[0.45em]">®</sup> : null}
    </span>
  );
}
