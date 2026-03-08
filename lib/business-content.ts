export type BusinessPost = {
  slug: "businesses" | "businessmodels" | "palantir";
  coverImage: string;
  accent: string;
  title: string;
  subtitle: string;
  readMinutes: number;
  category: string;
};

type BusinessPostSeed = {
  slug: "businesses" | "businessmodels" | "palantir";
  coverImage: string;
  accent: string;
  category: string;
  title: string;
  subtitle: string;
  readMinutes: number;
};

const BUSINESS_POSTS: BusinessPostSeed[] = [
  {
    slug: "businesses",
    title: "How Businesses Get Started: Bootstrapping, VC Funding, and Everything In Between",
    subtitle: "A guide for students with a focus on software, tech, and the indie hacker world.",
    readMinutes: 14,
    category: "Foundations",
    coverImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=80",
    accent: "Bootstrapping vs VC",
  },
  {
    slug: "businessmodels",
    title: "Business Models Explained: B2B, B2C, SaaS, and More",
    subtitle: "A glossary and guide for students with software and Silicon Valley examples.",
    readMinutes: 12,
    category: "Playbooks",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80",
    accent: "B2B, B2C, SaaS and more",
  },
  {
    slug: "palantir",
    title: "Palantir Technologies: A Case Study",
    subtitle: "A detailed look at product, strategy, economics, and controversy.",
    readMinutes: 16,
    category: "Case Study",
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80",
    accent: "Company case study",
  },
];

export function getBusinessSlugs() {
  return BUSINESS_POSTS.map((item) => item.slug);
}

export async function getBusinessPost(slug: string): Promise<BusinessPost | null> {
  const seed = BUSINESS_POSTS.find((item) => item.slug === slug);
  if (!seed) {
    return null;
  }

  return {
    ...seed,
  };
}

export async function getAllBusinessPosts(): Promise<BusinessPost[]> {
  const all = await Promise.all(BUSINESS_POSTS.map((item) => getBusinessPost(item.slug)));
  return all.filter((item): item is BusinessPost => item !== null);
}
