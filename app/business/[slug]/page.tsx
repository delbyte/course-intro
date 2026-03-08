import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { BusinessPostBody, BusinessPostFooter } from "@/components/business/BusinessPostBodies";
import { getBusinessPost, getBusinessSlugs } from "@/lib/business-content";

type BusinessPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBusinessSlugs().map((slug) => ({ slug }));
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

      <header className="overflow-hidden rounded-2xl border border-[var(--biz-border)] bg-[var(--biz-surface)]">
        <div className="relative h-56 w-full sm:h-72">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="100vw" priority />
        </div>
        <div className="space-y-3 p-6 sm:p-9">
          <p className="text-xs font-medium tracking-[0.18em] text-[var(--biz-text-muted)] uppercase">{post.category}</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
          <p className="max-w-3xl text-base leading-7 text-[var(--biz-text-muted)] sm:text-lg">{post.subtitle}</p>
          <p className="text-sm text-[var(--biz-text-muted)]">{post.readMinutes} min read</p>
        </div>
      </header>

      <section className="rounded-2xl border border-[var(--biz-border)] bg-[var(--biz-surface)] px-5 py-8 sm:px-10 sm:py-11 lg:px-14">
        <BusinessPostBody slug={post.slug} />
        <BusinessPostFooter />
      </section>
    </div>
  );
}
