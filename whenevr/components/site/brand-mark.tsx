import { site } from "@/lib/mock-site";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-serif text-[clamp(17px,1.05vw,20px)] font-medium italic lowercase tracking-[-0.02em] text-ink ${className}`.trim()}
    >
      {site.brand.name}
      {site.brand.registered ? <sup className="ml-[1px] text-[0.45em]">®</sup> : null}
    </span>
  );
}
