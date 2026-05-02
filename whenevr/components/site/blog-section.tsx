import Image from "next/image";
import Link from "next/link";
import { blog } from "@/lib/mock-site";
import { framerAssets } from "@/lib/framer-assets";
import { SectionLabel } from "./section-label";

export function BlogSection() {
  const [featured, ...rest] = blog.posts;

  return (
    <section
      id={blog.id}
      className="mx-auto max-w-[1200px] px-6 pb-[clamp(5rem,11vw,6.85rem)] min-[810px]:px-8 min-[1200px]:px-0"
    >
      <SectionLabel>{blog.label}</SectionLabel>
      <h2 className="mt-[18px] max-w-[900px] font-serif text-[clamp(2rem,5vw,3.125rem)] font-medium italic tracking-[-0.032em] leading-[1.12] text-ink">
        {blog.title}
      </h2>

      <div className="mt-[clamp(2.5rem,5vw,3.5rem)] grid gap-[clamp(1.25rem,2.8vw,1.85rem)] min-[810px]:grid-cols-[1.05fr_minmax(0,0.95fr)]">
        {featured ? (
          <FeaturedPostCard {...featured} />
        ) : null}

        <ul className="flex flex-col gap-3">
          {rest.map((post, i) => (
            <CompactPostCard
              key={post.title + post.category}
              thumb={framerAssets.blogListThumbs[i] ?? framerAssets.blogListThumbs[framerAssets.blogListThumbs.length - 1]}
              {...post}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeaturedPostCard({
  category,
  title,
  excerpt,
  readTime,
  author,
  href,
}: (typeof blog.posts)[0]) {
  return (
    <article>
      <Link
        href={href}
        className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-[var(--shadow-card)] transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-black/[0.1] hover:shadow-[0_28px_56px_-28px_rgb(0_0_0/0.16)] motion-reduce:hover:translate-y-0"
      >
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
          <Image
            src={framerAssets.blogFeatured}
            alt=""
            fill
            sizes="(max-width: 809px) 100vw, 640px"
            className="object-cover object-center transition-transform duration-[650ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
          />
        </div>
        <div className="flex flex-col px-[clamp(1.35rem,2.8vw,2.05rem)] py-[clamp(1.35rem,2.6vw,1.95rem)]">
          <span className="font-display-mono text-[10px] font-normal uppercase tracking-[0.28em] text-muted">
            {category}
          </span>
          <span className="mt-5 font-serif text-[clamp(1.45rem,2.6vw,1.75rem)] font-medium italic tracking-[-0.03em] leading-[1.18] text-ink">
            {title}
          </span>
          <p className="mt-[14px] text-[14px] font-normal leading-[1.6] tracking-[-0.02em] text-muted">
            {excerpt}
          </p>
          <span className="mt-auto flex flex-wrap items-baseline gap-x-3 pt-10 text-[12px] font-medium tracking-[-0.02em] text-muted">
            {readTime ? <span>{readTime}</span> : null}
            <span aria-hidden>{readTime && author ? "·" : null}</span>
            {author ? <span>{author}</span> : null}
            <span className="ml-auto font-semibold tracking-[-0.03em] text-ink underline-offset-[6px] group-hover:underline">
              Read →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}

function CompactPostCard({
  category,
  title,
  excerpt,
  href,
  thumb,
}: (typeof blog.posts)[number] & { thumb: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex gap-[14px] rounded-[20px] border border-black/[0.05] bg-white/[0.72] px-3 py-[10px] pr-4 backdrop-blur-sm transition-[background-color,border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-black/[0.1] hover:bg-white hover:shadow-[var(--shadow-card)] motion-reduce:hover:translate-y-0 md:gap-5 md:px-5 md:py-[14px]"
      >
        <div className="relative size-[68px] shrink-0 overflow-hidden rounded-xl md:size-[76px]">
          <Image
            src={thumb}
            alt=""
            fill
            sizes="76px"
            className="object-cover object-center transition-transform duration-[520ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05] motion-reduce:group-hover:scale-100"
          />
        </div>
        <div className="min-w-0 flex-1 py-1 md:py-0">
          <span className="font-display-mono text-[9px] font-normal uppercase tracking-[0.32em] text-muted">
            {category}
          </span>
          <p className="mt-2 font-semibold tracking-[-0.03em] text-ink md:mt-3">{title}</p>
          <p className="mt-2 line-clamp-2 text-[13px] font-normal leading-[1.5] tracking-[-0.015em] text-muted">
            {excerpt}
          </p>
        </div>
      </Link>
    </li>
  );
}
