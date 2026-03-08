import { promises as fs } from "node:fs";
import path from "node:path";

export type BusinessPost = {
  slug: "businesses" | "businessmodels" | "palantir";
  fileName: string;
  coverImage: string;
  accent: string;
};

export const BUSINESS_POSTS: BusinessPost[] = [
  {
    slug: "businesses",
    fileName: "businesses.md",
    coverImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=80",
    accent: "Bootstrapping vs VC",
  },
  {
    slug: "businessmodels",
    fileName: "businessmodels.md",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80",
    accent: "B2B, B2C, SaaS and more",
  },
  {
    slug: "palantir",
    fileName: "palantir.md",
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80",
    accent: "Company case study",
  },
];

export type LoadedBusinessPost = {
  slug: BusinessPost["slug"];
  title: string;
  subtitle: string;
  accent: string;
  coverImage: string;
  content: string;
  readMinutes: number;
};

function docsRoot() {
  return path.join(process.cwd(), "docs", "business");
}

function estimateReadMinutes(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(2, Math.round(words / 220));
}

function firstNonEmptyLines(content: string) {
  return content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function stripLeadingMetaLines(content: string) {
  const rawLines = content.split(/\r?\n/);
  let skipped = 0;

  const remaining = rawLines.filter((line) => {
    if (skipped < 2 && line.trim()) {
      skipped += 1;
      return false;
    }
    return true;
  });

  return remaining.join("\n").trim();
}

export async function getBusinessPost(slug: string): Promise<LoadedBusinessPost | null> {
  const post = BUSINESS_POSTS.find((item) => item.slug === slug);
  if (!post) {
    return null;
  }

  const filePath = path.join(docsRoot(), post.fileName);
  const content = await fs.readFile(filePath, "utf-8");
  const lines = firstNonEmptyLines(content);

  return {
    slug: post.slug,
    title: lines[0] ?? post.slug,
    subtitle: lines[1] ?? "",
    accent: post.accent,
    coverImage: post.coverImage,
    content: stripLeadingMetaLines(content),
    readMinutes: estimateReadMinutes(content),
  };
}

export async function getAllBusinessPosts(): Promise<LoadedBusinessPost[]> {
  const posts = await Promise.all(BUSINESS_POSTS.map((post) => getBusinessPost(post.slug)));
  return posts.filter((post): post is LoadedBusinessPost => post !== null);
}
