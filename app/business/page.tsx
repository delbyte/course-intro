import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllBusinessPosts } from "@/lib/business-content";

export default async function BusinessPage() {
  const posts = await getAllBusinessPosts();

  return (
    <div className="space-y-8">
      <section className="space-y-3 border-b border-[var(--biz-border)] pb-6">
        <p className="text-xs font-medium tracking-[0.18em] text-[var(--biz-text-muted)] uppercase">Blog</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-[2.75rem]">Business Notes</h1>
        <p className="max-w-2xl text-base leading-7 text-[var(--biz-text-muted)] sm:text-lg">
          Curated essays on startup choices, business models, and operator-level case studies.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="group overflow-hidden rounded-2xl border border-[var(--biz-border)] bg-[var(--biz-surface)] transition hover:border-[var(--biz-text-muted)]/50">
            <div className="relative h-52 w-full overflow-hidden border-b border-[var(--biz-border)]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
            <div className="space-y-4 p-5 sm:p-6">
              <p className="text-xs font-medium tracking-[0.14em] text-[var(--biz-text-muted)] uppercase">{post.category}</p>
              <h2 className="text-[1.55rem] font-semibold leading-tight tracking-tight">{post.title}</h2>
              <p className="line-clamp-3 text-[0.98rem] leading-6 text-[var(--biz-text-muted)]">{post.subtitle}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--biz-text-muted)]">{post.readMinutes} min read</span>
                <Link
                  href={`/business/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[var(--biz-text)] transition group-hover:gap-2"
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
