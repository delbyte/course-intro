export type BusinessPost = {
  slug: "businesses" | "businessmodels" | "palantir";
  coverImage: string;
  accent: string;
  title: string;
  subtitle: string;
  readMinutes: number;
  category: string;
};

export const BUSINESS_POSTS: BusinessPost[] = [
  {
    slug: "businesses",
    title: "How Businesses Get Started: Bootstrapping, VC Funding, and Everything In Between",
    subtitle: "A practical guide for students in software and the indie hacker world.",
    category: "Foundations",
    readMinutes: 14,
    coverImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=80",
    accent: "Bootstrapping vs VC",
  },
  {
    slug: "businessmodels",
    title: "Business Models Explained: B2B, B2C, SaaS, and More",
    subtitle: "A clear map of core business models with software-first examples.",
    category: "Playbooks",
    readMinutes: 11,
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80",
    accent: "B2B, B2C, SaaS and more",
  },
  {
    slug: "palantir",
    title: "Palantir Technologies: A Case Study",
    subtitle: "How a defense-focused data company scaled, struggled, and found profitability.",
    category: "Case Study",
    readMinutes: 16,
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80",
    accent: "Company case study",
  },
];

export async function getBusinessPost(slug: string): Promise<BusinessPost | null> {
  return BUSINESS_POSTS.find((item) => item.slug === slug) ?? null;
}

export async function getAllBusinessPosts(): Promise<BusinessPost[]> {
  return BUSINESS_POSTS;
}
