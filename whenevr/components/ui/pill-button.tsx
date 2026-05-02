import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
};

type ButtonProps =
  | (BaseProps &
      ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (BaseProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

export function PillButton(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...rest
  } = props;

  const rounded =
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium outline-none ring-offset-[#f3f3f3] transition-[transform,color,background-color,border-color,opacity,box-shadow] duration-300 [--ease:var(--ease-out-expo)]";

  const primary =
    "bg-ink text-white hover:-translate-y-px hover:shadow-[0_12px_32px_-8px_rgb(0_0_0/0.28)] hover:bg-[rgb(34,34,34)] active:translate-y-0";

  const secondary =
    "border border-ink/[0.12] bg-white text-ink hover:-translate-y-px hover:border-ink/[0.2] hover:shadow-[0_10px_28px_-10px_rgb(0_0_0/0.12)] active:translate-y-0";

  const ghost =
    "text-ink hover:bg-black/[0.04] hover:-translate-y-px active:translate-y-0";

  const sizesMd = size === "md" ? "h-12 px-7 text-[15px]" : "h-10 px-5 text-[13px]";

  const cls = `${rounded} ${sizesMd} ${
    variant === "primary" ? primary : variant === "secondary" ? secondary : ghost
  } ${className}`.trim();

  if ("href" in rest && rest.href) {
    const { href, ...a } = rest;
    return (
      <a className={cls} href={href} {...a}>
        {children}
      </a>
    );
  }

  const b = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={cls} {...b}>
      {children}
    </button>
  );
}
