"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/mock-site";
import { BrandMark } from "./brand-mark";
import { PillButton } from "@/components/ui/pill-button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.05] bg-canvas/80 backdrop-blur-md transition-[backdrop-filter] duration-500">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6 min-[810px]:h-[76px] min-[810px]:px-8 min-[1200px]:px-0">
        <Link
          href="#"
          className="relative z-50 transition-opacity duration-300 hover:opacity-70 active:opacity-55"
          onClick={() => setOpen(false)}
        >
          <BrandMark />
        </Link>

        <nav className="hidden gap-10 font-medium min-[810px]:flex [&_a]:text-[14px] [&_a]:tracking-[-0.04em] [&_a]:transition-colors [&_a]:duration-200">
          {site.nav.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="relative text-muted after:absolute after:inset-x-0 after:-bottom-[2px] after:h-[1px] after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 min-[810px]:block">
          <PillButton href="#pricing" variant="secondary">
            See Pricing
          </PillButton>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex size-11 items-center justify-center rounded-full bg-white shadow-[var(--shadow-card)] ring-1 ring-black/[0.04] transition-transform duration-300 hover:-translate-y-px min-[810px]:hidden active:translate-y-0"
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {/* Mobile */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-t border-black/[0.06] bg-canvas min-[810px]:hidden motion-safe:transition-[grid-template-rows,opacity,border-color] motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open
            ? "grid-rows-[1fr] border-opacity-100 opacity-100"
            : "pointer-events-none grid-rows-[0fr] border-transparent opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-6 px-6 pb-8 pt-3">
            {site.nav.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xl font-semibold tracking-[-0.05em] text-ink opacity-0 motion-safe:transition-[opacity,transform] motion-safe:duration-500 [&:active]:scale-[0.99]"
                style={{
                  transitionDelay: open ? `${70 + i * 45}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(6px)",
                }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <PillButton
              href="#pricing"
              variant="primary"
              className="mt-3 w-full"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(8px)",
                transition: `opacity 0.45s cubic-bezier(0.16,1,0.3,1), transform 0.45s cubic-bezier(0.16,1,0.3,1)`,
                transitionDelay: open ? `${70 + site.nav.length * 45 + 80}ms` : "0ms",
              }}
            >
              See Pricing
            </PillButton>
          </div>
        </div>
      </div>
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block size-[18px]">
      <span
        aria-hidden
        className="absolute inset-x-[1px] top-[7px] h-[2px] rounded-full bg-ink transition-[transform,border-radius,top] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{
          transform: open ? "translateY(0) rotate(45deg)" : "rotate(0deg)",
          top: open ? 8 : 4,
          borderRadius: open ? "1px" : "99px",
        }}
      />
      <span
        aria-hidden
        className={`absolute inset-x-[1px] top-[calc(50%-1px)] h-[2px] rounded-full bg-ink transition-all duration-200 ${
          open ? "opacity-0 scale-[0.2]" : "opacity-100"
        }`}
      />
      <span
        aria-hidden
        className="absolute inset-x-[1px] bottom-[7px] h-[2px] rounded-full bg-ink transition-[transform,bottom] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{
          transform: open ? "translateY(0) rotate(-45deg)" : "rotate(0deg)",
          bottom: open ? "7px" : "4px",
        }}
      />
    </span>
  );
}
