import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { MarkdownArticle } from "@/components/business/MarkdownArticle";
import { BUSINESS_POSTS, getBusinessPost } from "@/lib/business-content";

type BusinessPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BUSINESS_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BusinessPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBusinessPost(slug);

  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: `${post.title} | Business Notes`,
    description: post.subtitle,
  };
}

export default async function BusinessPostPage({ params }: BusinessPostPageProps) {
  const { slug } = await params;
  const post = await getBusinessPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Link href="/business" className="inline-flex items-center gap-1 text-sm text-[var(--biz-text-muted)] hover:text-[var(--biz-text)]">
        <ChevronLeft size={16} />
        All posts
      </Link>

      <header className="overflow-hidden rounded-3xl border border-[var(--biz-border)] bg-[var(--biz-surface)]">
        <div className="relative h-56 w-full sm:h-72">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="100vw" priority />
        </div>
        <div className="space-y-3 p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-wide text-[var(--biz-chip-text)] uppercase">{post.accent}</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
          <p className="max-w-3xl text-base leading-7 text-[var(--biz-text-muted)] sm:text-lg">{post.subtitle}</p>
          <p className="text-sm text-[var(--biz-text-muted)]">{post.readMinutes} min read</p>
        </div>
      </header>

      <section className="rounded-3xl border border-[var(--biz-border)] bg-[var(--biz-surface)] p-6 sm:p-10">
        <MarkdownArticle content={post.content} />
      </section>
    </div>
  );
}
