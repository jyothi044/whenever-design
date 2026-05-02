export function SectionLabel({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      className={`font-display-mono text-[11px] font-normal uppercase tracking-[0.28em] text-muted ${className}`.trim()}
    >
      {children}
    </p>
  );
}
