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
      <Section title="How Does a Business Actually Start?">
        <p>
          Most businesses start with a person who has a problem, an observation, or an itch. In the software world, the founding moment is often
          a developer or designer noticing that something they need does not exist, or exists badly.
        </p>
        <p>
          The two dominant paths in tech are bootstrapping and venture capital funding. They are not just different financing strategies. They
          produce fundamentally different kinds of companies, with different incentives, cultures, and definitions of success.
        </p>
      </Section>

      <Section title="Bootstrapping">
        <p>
          Bootstrapping means building a company using your own money, revenue from early customers, or both, without taking investment from
          outside investors. A bootstrapped founder retains full ownership and can run the business without investor pressure for exits.
        </p>
        <BulletList
          items={[
            <>Profit is the goal from day one, not growth at any cost.</>,
            <>Growth pace is limited by revenue, which often increases discipline and focus.</>,
            <>You cannot hire, market, or expand aggressively before the business can support it.</>,
          ]}
        />
      </Section>

      <Section title="The Indie Hacker World">
        <p>
          Indie hackers are independent developers and designers who build small, profitable software products, often as solo founders or in
          pairs. The ethos is simple: build something useful, charge for it, keep it lean, and stay independent.
        </p>
        <p>
          The community values transparency. Founders often share revenue, struggles, and growth publicly, which creates a practical playbook for
          others.
        </p>
        <BulletList
          items={[
            <>
              <strong className="text-[var(--biz-text)]">Marc Lou:</strong> fast shipping and public progress. <Ext href="https://marclou.com">Website</Ext>,{" "}
              <Ext href="https://x.com/marc_louvion">Twitter/X</Ext>.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Pieter Levels:</strong> bootstrapped solo products like Nomad List and Remote OK. <Ext href="https://levels.io">Website</Ext>,{" "}
              <Ext href="https://nomadlist.com">Nomad List</Ext>, <Ext href="https://remoteok.com">Remote OK</Ext>.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Communities:</strong> <Ext href="https://www.indiehackers.com">Indie Hackers</Ext>,{" "}
              <Ext href="https://news.ycombinator.com">Hacker News</Ext>, <Ext href="https://microconf.com">MicroConf</Ext>,{" "}
              <Ext href="https://www.starterstory.com">Starter Story</Ext>.
            </>,
          ]}
        />
      </Section>

      <Section title="Venture Capital (VC) Funding">
        <p>
          Venture capital is private equity investment into startups in exchange for ownership. VC economics are power-law driven: most bets fail,
          so funds need a few very large winners.
        </p>
        <p>
          Taking VC generally means optimizing for growth and market capture first, often with losses accepted in the short term.
        </p>
        <BulletList
          items={[
            <>
              <strong className="text-[var(--biz-text)]">Pre-seed/Angel:</strong> often idea or prototype stage.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Seed:</strong> early institutional capital with early product and traction.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Series A/B/C:</strong> scaling stages with expanding teams and markets.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Exit:</strong> IPO or acquisition provides liquidity for investors and founders.
            </>,
          ]}
        />
      </Section>

      <Section title="Bootstrapping vs VC: Core Differences">
        <BulletList
          items={[
            <>
              <strong className="text-[var(--biz-text)]">Ownership:</strong> bootstrappers retain more; VC founders dilute over rounds.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Speed:</strong> VC enables faster hiring and market spend.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Pressure:</strong> VC has fund timelines and exit expectations.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Success definition:</strong> bootstrapped profitability vs venture-scale outcomes.
            </>,
          ]}
        />
        <p>
          Neither path is universally better. The right path depends on what you are building and what kind of company and life you want.
        </p>
      </Section>

      <Section title="Further Reading">
        <BulletList
          items={[
            <Ext href="https://www.indiehackers.com/podcast">The Indie Hackers Podcast</Ext>,
            <Ext href="https://www.paulgraham.com/articles.html">Paul Graham Essays</Ext>,
            <Ext href="https://www.ycombinator.com">Y Combinator</Ext>,
            <Ext href="https://www.startupschool.org">Startup School</Ext>,
            <Ext href="https://news.ycombinator.com">Hacker News</Ext>,
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
          Before building, you need to understand what kind of business you are actually building. Two products can look similar but have very
          different economics, sales motions, and growth strategies based on customer type and pricing model.
        </p>
      </Section>

      <Section title="B2B: Business to Business">
        <p>
          In B2B, customers are companies. Purchases are usually made by managers or executives using business budgets.
        </p>
        <BulletList
          items={[
            <>Higher prices per customer, often much higher annual contract values.</>,
            <>Longer sales cycles and more procurement complexity.</>,
            <>Fewer customers, but each customer is worth more.</>,
            <>Higher switching costs once software is integrated.</>,
          ]}
        />
        <p>
          Examples: <Ext href="https://salesforce.com">Salesforce</Ext>, <Ext href="https://slack.com">Slack</Ext>,{" "}
          <Ext href="https://palantir.com">Palantir</Ext>, <Ext href="https://stripe.com">Stripe</Ext>, <Ext href="https://notion.so">Notion</Ext>.
        </p>
      </Section>

      <Section title="B2C: Business to Consumer">
        <p>
          In B2C, customers are individual users making fast decisions. Prices are lower, conversion can be faster, and scale usually requires much
          larger user volume.
        </p>
        <BulletList
          items={[
            <>Lower prices per customer and often freemium distribution.</>,
            <>Short sales cycles and strong importance of product virality.</>,
            <>Higher churn compared with deeply embedded B2B tools.</>,
          ]}
        />
        <p>
          Examples: <Ext href="https://spotify.com">Spotify</Ext>, <Ext href="https://duolingo.com">Duolingo</Ext>,{" "}
          <Ext href="https://netflix.com">Netflix</Ext>, <Ext href="https://robinhood.com">Robinhood</Ext>.
        </p>
      </Section>

      <Section title="B2B2C and SaaS">
        <p>
          B2B2C means the business customer pays, while end consumers use the experience downstream. SaaS describes recurring subscription software
          delivery, not customer type.
        </p>
        <p>
          SaaS became dominant because it enables predictable recurring revenue, centralized updates, and easier adoption.
        </p>
        <BulletList
          items={[
            <>
              <strong className="text-[var(--biz-text)]">MRR:</strong> monthly recurring revenue.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">ARR:</strong> annualized recurring revenue.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Churn:</strong> customer or revenue loss over time.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">LTV vs CAC:</strong> core viability relationship for growth.
            </>,
          ]}
        />
      </Section>

      <Section title="Other Important Models">
        <BulletList
          items={[
            <>
              <strong className="text-[var(--biz-text)]">Marketplace:</strong> connects buyers and sellers and takes a transaction cut.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Open Core:</strong> free OSS core with paid cloud/support/enterprise layers.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">PLG:</strong> product-led growth through self-serve adoption and expansion.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Platform:</strong> infrastructure others build on top of.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Micro-SaaS:</strong> focused, often bootstrapped niche tools.
            </>,
          ]}
        />
      </Section>

      <Section title="Recommended Starting Points">
        <BulletList
          items={[
            <Ext href="https://www.indiehackers.com">Indie Hackers</Ext>,
            <Ext href="https://www.startupschool.org">Y Combinator Startup School</Ext>,
            <Ext href="https://www.paulgraham.com/articles.html">Paul Graham Essays</Ext>,
            <Ext href="https://www.saastr.com">SaaStr</Ext>,
            <Ext href="https://gumroad.com/blog">Gumroad Transparency Writing</Ext>,
            <Ext href="https://news.ycombinator.com">Hacker News</Ext>,
          ]}
        />
      </Section>
    </article>
  );
}

function PalantirBody() {
  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <Section title="What Is Palantir?">
        <p>
          Palantir Technologies builds data integration and analytics platforms for governments and enterprises. Its systems unify fragmented data
          into queryable, operational workflows.
        </p>
        <p>
          Founded in 2003, Palantir went public in 2020 and reached full-year GAAP profitability in 2024, with reported revenue of $2.87B.
        </p>
        <BulletList
          items={[
            <Ext href="https://www.palantir.com">Palantir Official Website</Ext>,
            <Ext href="https://investors.palantir.com">Investor Relations</Ext>,
            <Ext href="https://www.palantir.com/newsroom/">Newsroom</Ext>,
            <Ext href="https://www.nyse.com/quote/XNYS:PLTR">NYSE Listing</Ext>,
          ]}
        />
      </Section>

      <Section title="Origin Story">
        <p>
          The company emerged in a post-9/11 context where intelligence fragmentation was seen as a severe operational failure. Peter Thiel and
          co-founders adapted pattern-detection logic inspired by fraud detection systems into intelligence analysis tooling.
        </p>
        <p>
          In-Q-Tel played a key early role by providing both capital and institutional credibility.
        </p>
      </Section>

      <Section title="Products">
        <BulletList
          items={[
            <>
              <strong className="text-[var(--biz-text)]">Gotham:</strong> defense and intelligence analysis platform.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Foundry:</strong> enterprise data integration and ontology-driven operations.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Apollo:</strong> continuous delivery across cloud, on-prem, and constrained environments.
            </>,
            <>
              <strong className="text-[var(--biz-text)]">AIP:</strong> AI layer connecting LLM workflows to live operational data.
            </>,
          ]}
        />
      </Section>

      <Section title="Business Model">
        <p>
          Palantir is enterprise software, but with unusually high-touch deployments and long implementation cycles. That slows early expansion but
          creates strong switching costs over time.
        </p>
        <BulletList
          items={[
            <>Government and commercial revenue mix provides both stability and growth optionality.</>,
            <>Land-and-expand behavior is central: initial deployment broadens into deeper account penetration.</>,
            <>Stock-based compensation remained a major investor debate before sustained GAAP profitability.</>,
          ]}
        />
      </Section>

      <Section title="Road to Profitability and Controversies">
        <p>
          Palantir spent many years unprofitable while building capabilities in difficult markets. Through 2023-2024, improved operating metrics and
          AIP momentum helped reframe investor expectations.
        </p>
        <p>
          The company remains controversial around surveillance, immigration enforcement use-cases, health data partnerships, and conflict-zone
          deployments.
        </p>
      </Section>

      <Section title="Can You Bootstrap Something Similar?">
        <p>
          Not at Palantir's scale and path, but the core problem, fragmented enterprise data, exists across many smaller verticals.
        </p>
        <BulletList
          items={[
            <>Pick one vertical with painful data fragmentation.</>,
            <>Start services-first, then productize repeated integration workflows.</>,
            <>Use modern data infrastructure instead of rebuilding foundational layers from scratch.</>,
            <>Target mid-market first; avoid heavy government procurement paths early.</>,
          ]}
        />
      </Section>

      <Section title="Resources for This Space">
        <BulletList
          items={[
            <Ext href="https://www.snowflake.com">Snowflake</Ext>,
            <Ext href="https://www.getdbt.com">dbt</Ext>,
            <Ext href="https://airbyte.com">Airbyte</Ext>,
            <Ext href="https://www.metabase.com">Metabase</Ext>,
            <Ext href="https://retool.com">Retool</Ext>,
            <Ext href="https://www.dataengineeringpodcast.com">Data Engineering Podcast</Ext>,
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
