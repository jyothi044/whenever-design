"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { clients } from "@/lib/mock-site";
import { framerAssets } from "@/lib/framer-assets";
import { TitleEmphasis } from "./title-emphasis";

const N = framerAssets.clientArcFaces.length;

function arcPosition(i: number) {
  const t = i / Math.max(N - 1, 1);
  const angle = Math.PI - t * Math.PI;
  const pctX = 50 + 43 * Math.cos(angle);
  const pctY = 44 + 32 * Math.sin(angle);
  const sizePx = i % 5 === 0 ? 56 : i % 4 === 0 ? 50 : i % 3 === 0 ? 54 : i % 2 === 0 ? 48 : 52;
  return {
    left: `${pctX}%`,
    top: `${pctY}%`,
    sizePx,
  };
}

export function ClientsBanner({ id }: { id?: string }) {
  const layout = useMemo(() => [...Array(N)].map((_, i) => arcPosition(i)), []);

  return (
    <section
      id={id ?? "book-a-call"}
      className="relative mx-auto max-w-[1200px] scroll-mt-28 px-6 pb-[clamp(5rem,12vw,6.75rem)] pt-[clamp(4rem,8vw,5rem)] min-[810px]:px-8 min-[1200px]:px-0"
    >
      <div className="relative mx-auto min-h-[min(560px,calc(100vw-48px))] w-full max-w-[920px] max-[809px]:min-h-[480px]">
        {layout.map((pos, i) => (
          <div
            key={`${framerAssets.clientArcFaces[i]}-${i}`}
            className="absolute z-[1] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white outline outline-[3px] outline-white shadow-[0_10px_30px_-12px_rgb(0_0_0/0.38)] transition-[transform,box-shadow,z-index] motion-safe:duration-400 motion-safe:ease-[var(--ease-out-expo)] motion-safe:hover:z-30 motion-safe:hover:scale-[1.08] motion-safe:hover:shadow-[0_22px_40px_-14px_rgb(0_0_0/0.28)] min-[810px]:outline-4 motion-reduce:transition-none motion-reduce:hover:scale-100"
            style={{
              width: pos.sizePx,
              height: pos.sizePx,
              left: pos.left,
              top: pos.top,
            }}
          >
            <div className="relative size-full overflow-hidden rounded-[inherit]">
              <Image
                src={framerAssets.clientArcFaces[i]}
                alt=""
                fill
                sizes="56px"
                className="object-cover object-center"
              />
            </div>
          </div>
        ))}

        <div className="relative z-10 mx-auto flex max-w-[480px] flex-col items-center px-4 pb-6 pt-[min(92px,22vw)] text-center">
          <h2 className="relative z-10 px-4 text-[clamp(1.9rem,4.95vw,2.85rem)] leading-[1.05] tracking-[-0.045em] text-ink drop-shadow-[0_1px_0_rgb(255_255_255/0.6)]">
            <TitleEmphasis
              text={clients.title}
              emphasis={clients.titleEmphasis}
              sansClassName="font-sans font-semibold"
              serifClassName="font-serif font-medium italic"
            />
          </h2>

          <Link
            href="#book-a-call"
            className="relative z-10 mt-10 inline-flex items-center gap-3.5 rounded-full border border-black/[0.06] bg-white px-5 py-3 shadow-[0_18px_50px_-20px_rgb(0_0_0/0.18)] outline outline-4 outline-white/[0] transition-[transform,box-shadow] motion-safe:duration-400 hover:-translate-y-[2px] hover:shadow-[0_28px_56px_-24px_rgb(0_0_0/0.2)] active:translate-y-0 motion-reduce:hover:translate-y-0 max-[809px]:pl-4"
          >
            <div className="relative size-[44px] shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-md">
              <Image
                src={framerAssets.clientArcFaces[0]}
                alt=""
                fill
                sizes="44px"
                className="object-cover object-center"
              />
            </div>
            <span className="flex flex-col items-start text-left">
              <span className="text-[14px] font-semibold tracking-[-0.04em] text-ink">
                {clients.callCta}
              </span>
              <span className="mt-1 flex items-center gap-2 text-[12px] font-medium tracking-[-0.02em] text-muted">
                <span className="size-2 shrink-0 rounded-full bg-[#22c55e]" aria-hidden />
                {clients.callMeta}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
