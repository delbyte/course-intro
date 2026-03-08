import Link from "next/link";

type BodyProps = { slug: "businesses" | "businessmodels" | "palantir" };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4 border-t border-[var(--biz-border)] pt-8 first:border-t-0 first:pt-0">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <div className="space-y-4 text-[1.03rem] leading-8 text-[var(--biz-text-muted)] sm:text-[1.08rem]">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5 pl-5 text-[1.02rem] leading-7 text-[var(--biz-text-muted)] list-disc marker:text-[var(--biz-text)]">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="font-medium text-[var(--biz-text)] underline decoration-[var(--biz-border)] underline-offset-4">
      {children}
    </a>
  );
}

function BusinessesBody() {
  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <Section title="How Businesses Actually Start">
        <p>
          Most software companies start when someone encounters a painful workflow and decides to fix it for themselves first. If enough other
          people feel the same pain, the project becomes a business.
        </p>
        <p>
          The first major fork is financial structure: build with customer revenue from day one, or raise external capital to move faster. That
          one decision shapes ownership, pressure, hiring pace, and even lifestyle.
        </p>
      </Section>

      <Section title="Path 1: Bootstrapping">
        <p>
          Bootstrapping means no outside investors. You fund growth through savings, services, or early product revenue. Profit and durability
          matter immediately.
        </p>
        <BulletList
          items={[
            <>You retain control and can run long-term without exit pressure.</>,
            <>Growth is slower because each hire and experiment must be paid for by real cash flow.</>,
            <>The company often stays focused on a narrow niche where value is obvious.</>,
          ]}
        />
        <p>
          This is the core indie-hacker model. Founders like <Ext href="https://levels.io">Pieter Levels</Ext> and <Ext href="https://marclou.com">Marc Lou</Ext>{" "}
          prove that small software products can become meaningful, profitable businesses without VC.
        </p>
      </Section>

      <Section title="Path 2: Venture Capital">
        <p>
          VC money buys speed. You can hire aggressively, push distribution, and capture market share before competitors. In exchange, you give up
          ownership and commit to high-growth outcomes.
        </p>
        <BulletList
          items={[
            <>VC funds are power-law driven, so investors need a few giant outcomes to return the fund.</>,
            <>That means growth often takes priority over short-term profitability.</>,
            <>Most outcomes are binary: very large success or shutdown.</>,
          ]}
        />
        <p>
          Great fits include categories where winner-take-most dynamics, massive R&D costs, or global infrastructure requirements make
          bootstrapping unrealistic.
        </p>
      </Section>

      <Section title="When Each Model Makes Sense">
        <BulletList
          items={[
            <>
              <strong className="text-[var(--biz-text)]">Bootstrap:</strong> clear niche, fast customer feedback, lower technical capex.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">VC:</strong> expensive technology, strong network effects, or category-defining scale race.
            </>,
          ]}
        />
        <p>
          Neither path is morally better. They optimize for different goals. If your goal is autonomy and sustainable profits, bootstrap is usually
          superior. If your goal is building category infrastructure at global scale, VC is often necessary.
        </p>
      </Section>

      <Section title="Useful References">
        <BulletList
          items={[
            <Ext href="https://www.indiehackers.com">Indie Hackers</Ext>,
            <Ext href="https://microconf.com">MicroConf</Ext>,
            <Ext href="https://news.ycombinator.com">Hacker News</Ext>,
            <Ext href="https://www.ycombinator.com">Y Combinator</Ext>,
            <Ext href="https://www.startupschool.org">Startup School</Ext>,
          ]}
        />
      </Section>
    </article>
  );
}

function BusinessModelsBody() {
  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <Section title="Why Business Models Matter">
        <p>
          Two products can look almost identical but produce completely different outcomes based on who they sell to, how they charge, and how they
          acquire users.
        </p>
        <p>Understanding model vocabulary helps you choose the right product strategy before you write too much code.</p>
      </Section>

      <Section title="Core Model Cheat Sheet">
        <BulletList
          items={[
            <>
              <strong className="text-[var(--biz-text)]">B2B:</strong> sell to companies. Higher ACV, slower sales, stronger retention.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">B2C:</strong> sell to individuals. Low price, fast conversion, high volume required.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">SaaS:</strong> recurring subscriptions; compounding revenue if churn is controlled.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Marketplace:</strong> connect buyers and sellers; success depends on liquidity and trust.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Open Core:</strong> free OSS base with paid hosting/support/enterprise layers.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">PLG:</strong> product drives acquisition and expansion through usage.
            </>,
          ]}
        />
      </Section>

      <Section title="SaaS Metrics That Actually Matter">
        <BulletList
          items={[
            <>
              <strong className="text-[var(--biz-text)]">MRR / ARR:</strong> recurring revenue baseline.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Churn:</strong> whether your growth leaks away.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">LTV vs CAC:</strong> whether your go-to-market engine is economically viable.
            </>,
          ]}
        />
        <p>If LTV does not comfortably exceed CAC, scaling usually amplifies losses instead of creating a durable company.</p>
      </Section>

      <Section title="Indie Hacker Model">
        <p>
          For solo founders, micro-SaaS is often the strongest path: narrow problem, clear buyer, fast launch, recurring pricing, and low operating
          overhead.
        </p>
        <BulletList
          items={[
            <>Simple landing page</>,
            <>
              Billing via <Ext href="https://stripe.com">Stripe</Ext>
            </>,
            <>Lean backend and focused feature set</>,
            <>Distribution through SEO, communities, and short-form content</>,
          ]}
        />
      </Section>

      <Section title="Further Reading">
        <BulletList
          items={[
            <Ext href="https://www.saastr.com">SaaStr</Ext>,
            <Ext href="https://www.indiehackers.com">Indie Hackers</Ext>,
            <Ext href="https://www.paulgraham.com/articles.html">Paul Graham Essays</Ext>,
            <Ext href="https://www.thesaasplaybook.com">The SaaS Playbook</Ext>,
          ]}
        />
      </Section>
    </article>
  );
}

function PalantirBody() {
  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <Section title="What Palantir Is">
        <p>
          Palantir builds data and decision platforms for governments and large enterprises. Its value proposition is integrating fragmented,
          high-stakes data into one operational system.
        </p>
        <p>
          The company spent years with difficult deployment economics before hitting full-year GAAP profitability in 2024, a notable milestone for a
          business of this profile.
        </p>
      </Section>

      <Section title="How It Started">
        <p>
          Palantir emerged post-9/11, where intelligence data silos were seen as a strategic failure. Early credibility came through
          <Ext href="https://www.iqt.org"> In-Q-Tel</Ext> and US government adoption.
        </p>
        <p>
          That initial distribution channel mattered as much as technology. In regulated, trust-heavy markets, distribution and reputation are core
          moats.
        </p>
      </Section>

      <Section title="Product Stack">
        <BulletList
          items={[
            <>
              <strong className="text-[var(--biz-text)]">Gotham:</strong> intelligence and defense operations.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Foundry:</strong> enterprise data integration and workflows.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Apollo:</strong> deployment and lifecycle control across complex environments.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">AIP:</strong> LLM-powered operational decision layer.
            </>,
          ]}
        />
      </Section>

      <Section title="Business Model Notes">
        <BulletList
          items={[
            <>High-touch implementations and long sales cycles.</>,
            <>Strong expansion after initial deployment.</>,
            <>High switching costs once integrated into operations.</>,
            <>Government contracts provide stability; commercial side drives growth acceleration.</>,
          ]}
        />
      </Section>

      <Section title="What Founders Can Learn">
        <p>
          You probably cannot replicate Palantir's exact path, but you can replicate its core insight: organizations pay heavily to unify messy,
          siloed data when outcomes are mission-critical.
        </p>
        <p>
          A bootstrap version usually means choosing one vertical, starting services-first, and productizing repeat integration workflows over time.
        </p>
      </Section>

      <Section title="Primary Sources">
        <BulletList
          items={[
            <Ext href="https://www.palantir.com">Palantir Official Site</Ext>,
            <Ext href="https://investors.palantir.com">Investor Relations</Ext>,
            <Ext href="https://www.sec.gov/edgar/browse/?CIK=1321655">SEC Filings</Ext>,
            <Ext href="https://www.palantir.com/platforms/aip/">AIP Overview</Ext>,
          ]}
        />
      </Section>
    </article>
  );
}

export function BusinessPostBody({ slug }: BodyProps) {
  if (slug === "businesses") return <BusinessesBody />;
  if (slug === "businessmodels") return <BusinessModelsBody />;
  if (slug === "palantir") return <PalantirBody />;
  return null;
}

export function BusinessPostFooter() {
  return (
    <div className="mx-auto mt-12 max-w-3xl border-t border-[var(--biz-border)] pt-6 text-sm text-[var(--biz-text-muted)]">
      <p>
        Prefer scanning all entries first? Go back to the <Link href="/business" className="underline underline-offset-4">blog index</Link>.
      </p>
    </div>
  );
}
