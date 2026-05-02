import Image from "next/image";
import { trusted } from "@/lib/mock-site";
import { framerAssets } from "@/lib/framer-assets";

export function TrustedStrip() {
  const dup = [
    ...framerAssets.trustedLogos,
    ...framerAssets.trustedLogos,
  ] as string[];

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
        <div className="marquee-track items-center gap-20 pr-20 lg:gap-24 lg:pr-24">
          {dup.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="relative h-[26px] w-[clamp(92px,12vw,128px)] opacity-[0.45] saturate-0 transition-opacity duration-500 hover:opacity-95 hover:saturate-100 min-[810px]:h-[30px]"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="128px"
                className="object-contain object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
