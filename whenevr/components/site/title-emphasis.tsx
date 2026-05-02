type TitleEmphasisProps = {
  text: string;
  emphasis: string;
  className?: string;
  sansClassName: string;
  serifClassName: string;
};

/** Renders `text` with `emphasis` span using serif accent (matches Framer template pattern). */
export function TitleEmphasis({
  text,
  emphasis,
  className = "",
  sansClassName,
  serifClassName,
}: TitleEmphasisProps) {
  const i = text.indexOf(emphasis);
  if (i === -1) {
    return <span className={`${sansClassName} ${className}`.trim()}>{text}</span>;
  }
  return (
    <span className={`${className}`.trim()}>
      <span className={sansClassName}>{text.slice(0, i)}</span>
      <span className={serifClassName}>{emphasis}</span>
      <span className={sansClassName}>{text.slice(i + emphasis.length)}</span>
    </span>
  );
}
