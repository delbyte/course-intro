import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllBusinessPosts } from "@/lib/business-content";

export default async function BusinessPage() {
  const posts = await getAllBusinessPosts();

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-[var(--biz-border)] bg-[var(--biz-surface)] p-6 shadow-lg shadow-black/5 sm:p-10">
        <p className="mb-3 inline-flex rounded-full bg-[var(--biz-chip)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--biz-chip-text)] uppercase">
          Business Blog
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">Build Better Business Intuition</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--biz-text-muted)] sm:text-lg">
          Three detailed writeups on startup paths, software business models, and a real-world case study of Palantir.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="group overflow-hidden rounded-2xl border border-[var(--biz-border)] bg-[var(--biz-surface)]">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="space-y-4 p-5">
              <p className="text-xs font-semibold tracking-wider text-[var(--biz-chip-text)] uppercase">{post.accent}</p>
              <h2 className="text-xl font-semibold leading-tight">{post.title}</h2>
              <p className="line-clamp-3 text-sm leading-6 text-[var(--biz-text-muted)]">{post.subtitle}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--biz-text-muted)]">{post.readMinutes} min read</span>
                <Link
                  href={`/business/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[var(--biz-chip-text)] transition group-hover:gap-2"
                >
                  Read
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
