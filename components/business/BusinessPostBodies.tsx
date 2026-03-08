import Link from "next/link";

type Slug = "businesses" | "businessmodels" | "palantir";
type BodyProps = { slug: Slug };

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
    <ul className="list-disc space-y-2.5 pl-5 text-[1.02rem] leading-7 text-[var(--biz-text-muted)] marker:text-[var(--biz-text)]">
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
      <p className="text-[1.03rem] leading-8 text-[var(--biz-text-muted)] sm:text-[1.08rem]">
        A guide for students — with a focus on software, tech, and the indie hacker world
      </p>

      <Section title="How Does a Business Actually Start?">
        <p>
          Most businesses start with a person who has a problem, an observation, or an itch. In the software world, the founding moment is often
          a developer or designer noticing that something they need does not exist, or exists badly. They build a version of it, show it to
          people, and discover others have the same problem. What happens next — how the business grows, who owns it, how fast it moves, and
          whether it ever raises money — depends on a set of decisions that shape everything downstream.
        </p>
        <p>
          The two dominant paths in tech are bootstrapping and venture capital funding. They are not just different financing strategies. They
          produce fundamentally different kinds of companies, with different incentives, different cultures, and different definitions of success.
        </p>
      </Section>

      <Section title="Bootstrapping">
        <p>
          Bootstrapping means building a company using your own money, revenue from early customers, or both — without taking investment from
          outside investors. The name comes from the old phrase "pulling yourself up by your own bootstraps," meaning to make progress using only
          what you already have.
        </p>
        <p>
          A bootstrapped founder retains full ownership of their company. There are no investors to answer to, no board pressuring for growth, and
          no expectation that the company will eventually be sold or go public. The business succeeds when it generates more money than it costs to
          run. Profit is the goal from day one, not growth at any cost.
        </p>
        <p>
          The tradeoff is speed and scale. Without outside capital, you can only grow as fast as your revenue allows. You cannot hire aggressively
          before you have customers. You cannot spend on marketing before you have a product. You have to be profitable — or at least
          revenue-positive — much sooner.
        </p>
      </Section>

      <Section title="The Indie Hacker World">
        <p>
          "Indie hacker" is a term popularized by the community at IndieHackers.com (founded by Courtland Allen, later acquired by Stripe). It
          refers to independent developers and designers who build small, profitable software products on their own, usually as solo founders or in
          pairs. The indie hacker ethos is: build something small, make it useful, charge for it, keep it simple, and enjoy the profits without
          the pressure of investors.
        </p>
        <p>
          The community is built around transparency — founders publicly share their revenue, their struggles, and their growth on forums,
          Twitter/X, and their own blogs. This transparency has produced an unusually rich record of how these businesses actually work.
        </p>
      </Section>

      <Section title="Indie Hacker Examples">
        <p>
          Marc Lou is a French indie hacker and developer who has become one of the most followed voices in the space. He builds and ships
          products fast — often releasing new tools every few weeks — and has built several profitable SaaS products including ShipFast (a Next.js
          boilerplate for building SaaS quickly) and other micro-tools. He documents his revenue publicly and has crossed $1 million in revenue
          across his portfolio. His approach: build fast, validate with real payments, move on if something does not work.
        </p>
        <BulletList
          items={[
            <Ext href="https://marclou.com">Marc Lou&apos;s website</Ext>,
            <Ext href="https://x.com/marc_louvion">Marc Lou on Twitter/X</Ext>,
          ]}
        />
        <p>
          Levels.io (Pieter Levels) is probably the most famous indie hacker. A Dutch developer who travels perpetually and builds products
          entirely alone, Levels has built a portfolio of profitable businesses including Nomad List (a database and community for digital nomads),
          Remote OK (a remote job board), and PhotoAI (an AI photo generator). His total revenue across products reportedly exceeds $3-4 million
          per year, all bootstrapped, all solo, with minimal staff. He codes everything himself, keeps costs extremely low, and has turned down
          acquisition offers.
        </p>
        <BulletList
          items={[
            <Ext href="https://levels.io">Levels.io website</Ext>,
            <Ext href="https://nomadlist.com">Nomad List</Ext>,
            <Ext href="https://remoteok.com">Remote OK</Ext>,
          ]}
        />
        <p>
          Jack Friks is a younger indie hacker who has built and launched multiple small products, documenting the entire process publicly. He is
          known for shipping products quickly and being transparent about what works and what does not.
        </p>
        <BulletList items={[<Ext href="https://x.com/jackfriks">Jack Friks on Twitter/X</Ext>]} />
        <p>
          Ernesto Lopez is an indie hacker and developer who builds software products and shares the journey publicly, with a focus on practical
          building and honest revenue reporting.
        </p>
      </Section>

      <Section title="Where Bootstrappers Hang Out and Learn">
        <BulletList
          items={[
            <>
              <Ext href="https://www.indiehackers.com">Indie Hackers</Ext> — community, interviews, and revenue reports
            </>,
            <>
              <Ext href="https://news.ycombinator.com">Hacker News</Ext> — the main tech forum; bootstrappers post "Show HN" threads
            </>,
            <>
              <Ext href="https://levels.io/blog">Pieter Levels&apos; blog</Ext> — detailed essays on building solo
            </>,
            <>
              <Ext href="https://microconf.com">MicroConf</Ext> — conference and community specifically for bootstrapped SaaS founders
            </>,
            <>
              <Ext href="https://www.starterstory.com">Starter Story</Ext> — interviews with founders about how they built their businesses
            </>,
          ]}
        />
      </Section>

      <Section title="Venture Capital (VC) Funding">
        <p>
          Venture capital is a form of private equity investment. A VC firm raises money from large institutional investors — pension funds,
          university endowments, family offices — and deploys that money into early-stage startups in exchange for equity (ownership). The VC firm
          makes money when the startup is acquired or goes public at a much higher valuation than when they invested.
        </p>
        <p>
          The key thing to understand about VC is that it is a power-law business. Out of a portfolio of 20 or 30 investments, the VC expects most
          to fail or return modest amounts. The entire fund&apos;s returns depend on one or two investments that return 50x or 100x. This math drives
          VC behavior: they need their winners to be enormous. They are not interested in companies that will be profitable and comfortable at $5M
          in revenue. They want companies that could be worth $1 billion or more.
        </p>
        <p>
          This means when a VC invests in your company, your incentive structure changes. You are no longer optimizing for profit. You are
          optimizing for growth — capturing market share as fast as possible, often at a loss, with the goal of reaching a scale where either the
          economics improve or the company becomes an acquisition target. Founders who take VC capital are implicitly agreeing to this logic.
        </p>
      </Section>

      <Section title="The Funding Stages">
        <BulletList
          items={[
            <>Pre-seed / Angel: The earliest stage. Often friends and family, or individual angel investors. Checks of $25K to $500K. The company may be just an idea or a prototype.</>,
            <>Seed: Early institutional investment. $500K to $3M is typical. The company has some product and maybe some early users or revenue.</>,
            <>Series A: The company has a working product and some evidence of product-market fit. Raises $5M to $20M. Investors expect the money to go toward scaling what is working.</>,
            <>Series B, C, D...: Later stages. The company is growing fast and needs capital to expand into new markets, hire aggressively, or out-spend competitors.</>,
            <>IPO / Acquisition: The exit. The VC gets liquidity, founders (usually) get liquidity, and the company either becomes publicly traded or is absorbed into a larger company.</>,
          ]}
        />
      </Section>

      <Section title="VC-Backed Examples">
        <p>
          Stripe — founded by Patrick and John Collison in 2010, Stripe raised from Y Combinator and went on to become one of the most valuable
          private companies in the world, valued at around $65 billion. It solved a specific, painful problem: accepting payments on the internet
          was unnecessarily complicated. Stripe made it a few lines of code. The product was so clearly superior that word-of-mouth drove early
          growth, and VC capital allowed them to expand globally and build adjacent products.
        </p>
        <p>
          Figma — founded by Dylan Field, Figma raised venture capital to build a browser-based collaborative design tool and took direct aim at
          Adobe&apos;s dominance. It was acquired by Adobe for $20 billion in a deal that was later blocked by regulators. The VC-backed path allowed
          Figma to build a product with a free tier aggressive enough to drive viral adoption across design teams.
        </p>
        <p>
          Notion — started as a bootstrapped experiment, Notion later raised venture capital from Index Ventures and others. The product grew
          virally in the productivity and knowledge management space. The VC capital fueled international expansion, a large engineering team, and
          an API ecosystem.
        </p>
        <p>
          OpenAI — a clear example of a business that could not exist without massive capital. Training frontier AI models costs hundreds of
          millions of dollars in compute alone. OpenAI has raised billions from Microsoft and others. The model here is: the product requires
          capital as an input before there is any revenue. No bootstrapping path exists.
        </p>
        <p>
          Y Combinator is the most famous startup accelerator in the world, operating as an early-stage investor. They invest $500K for 7% equity
          and run cohorts of 200+ startups twice a year. Alumni include Airbnb, Dropbox, Stripe, Coinbase, and thousands of others. If you are
          interested in the VC-funded startup world, understanding YC is essential.
        </p>
        <BulletList
          items={[
            <Ext href="https://stripe.com">Stripe website</Ext>,
            <Ext href="https://www.figma.com">Figma website</Ext>,
            <Ext href="https://www.notion.so">Notion website</Ext>,
            <Ext href="https://openai.com">OpenAI website</Ext>,
            <Ext href="https://www.ycombinator.com">Y Combinator website</Ext>,
            <Ext href="https://www.ycombinator.com/apply">YC application</Ext>,
            <Ext href="https://www.startupschool.org">Startup School (free)</Ext>,
          ]}
        />
      </Section>

      <Section title="Bootstrapping vs. VC: The Core Differences">
        <BulletList
          items={[
            <>Ownership: Bootstrappers own 100% of their company. After multiple funding rounds, a VC-backed founder might own 10-20% by the time of an exit.</>,
            <>Speed: VC funding allows a company to hire, market, and build much faster. Bootstrapped companies grow at the pace revenue allows.</>,
            <>Pressure: VC investors have a time horizon (typically 7-10 years for a fund). They need an exit. Bootstrappers can run their business indefinitely with no external pressure to sell.</>,
            <>Risk of failure: Most VC-backed startups fail. The ones that succeed, succeed big. Bootstrapped companies have a higher survival rate because profitability is required, but their ceiling is usually lower.</>,
            <>Definition of success: For a bootstrapped founder, a business generating $500K/year in profit with two employees is a success. For a VC-backed startup, that same company might be considered a failure because it did not reach the scale required to return the fund.</>,
            <>Culture and lifestyle: Many indie hackers explicitly value freedom — the ability to work from anywhere, set their own hours, and not have a board or investors telling them what to do. VC-backed founders are often working 70-hour weeks under intense pressure to hit growth targets.</>,
          ]}
        />
      </Section>

      <Section title="Neither Path Is Better — They Are Just Different">
        <p>
          The right path depends on what you are trying to build and what kind of life you want. Some problems genuinely require capital — you
          cannot bootstrap a semiconductor company, a biotech, or an AI lab. But most software problems do not. A focused, useful SaaS tool for a
          specific niche can be built and grown to meaningful profitability by one or two people with no outside investment.
        </p>
        <p>
          The indie hacker movement has demonstrated, repeatedly and publicly, that this is not a fantasy. It is a real, documented, replicable
          path. It just requires patience, a willingness to do things that do not scale at first, and a clear-eyed focus on solving a real problem
          for real people who will pay for it.
        </p>
      </Section>

      <Section title="Further Reading">
        <BulletList
          items={[
            <Ext href="https://www.indiehackers.com/podcast">The Indie Hackers podcast</Ext>,
            <>
              <Ext href="https://www.paulgraham.com/articles.html">Paul Graham&apos;s essays</Ext> — foundational writing on startups and
              building companies
            </>,
            <>
              <Ext href="https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296">Zero to One by Peter Thiel</Ext> — Thiel&apos;s
              framework for building monopolistic startups
            </>,
            <>
              <Ext href="https://www.thesaasplaybook.com">The SaaS Playbook by Rob Walling</Ext> — practical bootstrapped SaaS advice
            </>,
            <>
              <Ext href="https://basecamp.com/books/rework">Rework by Jason Fried and DHH</Ext> — Basecamp&apos;s philosophy of building a
              profitable, calm company without VC
            </>,
            <Ext href="https://news.ycombinator.com">Hacker News: Ask HN threads on bootstrapping</Ext>,
          ]}
        />
      </Section>
    </article>
  );
}

function BusinessModelsBody() {
  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <p className="text-[1.03rem] leading-8 text-[var(--biz-text-muted)] sm:text-[1.08rem]">
        A glossary and guide for students — with software and Silicon Valley examples
      </p>

      <Section title="Why Business Models Matter">
        <p>
          Before you build anything, it helps to understand what kind of business you are actually building. Two products that look nearly
          identical on the surface — say, two project management tools — can have completely different economics, sales motions, and growth
          strategies depending on who they sell to and how they charge. Understanding the vocabulary of business models helps you read the
          landscape clearly and make better decisions about what to build and how to grow it.
        </p>
      </Section>

      <Section title="B2B: Business to Business">
        <p>
          B2B means your product is sold to other businesses, not to individual consumers. Your customer is a company — a team, a department, or
          an entire organization — and the person who decides whether to buy is typically a manager, director, or executive who is spending company
          budget.
        </p>
        <p>B2B software tends to have:</p>
        <BulletList
          items={[
            <>Higher prices per customer (often thousands to hundreds of thousands of dollars per year)</>,
            <>Longer sales cycles (weeks to months to close a deal)</>,
            <>Fewer customers (but each one is worth more)</>,
            <>More complex contracts and procurement processes</>,
            <>Higher switching costs once deployed</>,
          ]}
        />
        <p>
          The tradeoff is that acquiring each customer requires more effort, but once you have them, they tend to stay. Annual contracts,
          multi-year agreements, and deep integration into workflows make B2B customers sticky.
        </p>
        <p>Examples:</p>
        <p>
          <Ext href="https://salesforce.com">Salesforce</Ext> — CRM software sold to sales teams inside companies. <Ext href="https://salesforce.com">salesforce.com</Ext>
        </p>
        <p>
          <Ext href="https://slack.com">Slack</Ext> — workplace communication tool sold to companies (now owned by Salesforce). <Ext href="https://slack.com">slack.com</Ext>
        </p>
        <p>
          <Ext href="https://palantir.com">Palantir</Ext> — data analytics platforms sold to governments and large enterprises. <Ext href="https://palantir.com">palantir.com</Ext>
        </p>
        <p>
          <Ext href="https://stripe.com">Stripe</Ext> — payment infrastructure sold to businesses building products. <Ext href="https://stripe.com">stripe.com</Ext>
        </p>
        <p>
          <Ext href="https://notion.so">Notion</Ext> — productivity and knowledge management sold to teams. <Ext href="https://notion.so">notion.so</Ext>
        </p>
      </Section>

      <Section title="B2C: Business to Consumer">
        <p>
          B2C means your product is sold directly to individual people. Your customer makes the purchase decision themselves, often with a credit
          card, in a few minutes, without needing to get approval from anyone.
        </p>
        <p>B2C software tends to have:</p>
        <BulletList
          items={[
            <>Lower prices per customer (often free with ads, or $5-20/month subscriptions)</>,
            <>Very short or instant sales cycles</>,
            <>Huge numbers of customers required to generate significant revenue</>,
            <>Viral growth as a viable and important growth channel</>,
            <>High churn (people cancel subscriptions frequently)</>,
          ]}
        />
        <p>
          The upside of B2C is that distribution can be explosive — if your product spreads word-of-mouth or goes viral, you can acquire millions
          of users without a sales team. The downside is that converting users to paying customers at low price points requires enormous volume.
        </p>
        <p>Examples:</p>
        <p>
          <Ext href="https://spotify.com">Spotify</Ext> — music streaming for individual listeners. <Ext href="https://spotify.com">spotify.com</Ext>
        </p>
        <p>
          <Ext href="https://duolingo.com">Duolingo</Ext> — language learning app for individuals. <Ext href="https://duolingo.com">duolingo.com</Ext>
        </p>
        <p>Notion (free tier) — note: many companies serve both B2C and B2B</p>
        <p>
          <Ext href="https://netflix.com">Netflix</Ext> — video streaming for consumers. <Ext href="https://netflix.com">netflix.com</Ext>
        </p>
        <p>
          <Ext href="https://robinhood.com">Robinhood</Ext> — retail investing app. <Ext href="https://robinhood.com">robinhood.com</Ext>
        </p>
      </Section>

      <Section title="B2B2C: Business to Business to Consumer">
        <p>
          Some products are sold to businesses but ultimately used by consumers. This is sometimes called B2B2C. A good example is a white-label
          software product: you sell it to a restaurant, and the restaurant&apos;s customers use it to place orders. The restaurant is your customer;
          the end consumer is their customer.
        </p>
        <p>Examples:</p>
        <p>Stripe in some configurations — Stripe sells to a business, which uses Stripe to charge its own customers</p>
        <p>Zendesk — customer support software sold to companies but used in interactions with those companies&apos; consumers</p>
      </Section>

      <Section title="SaaS: Software as a Service">
        <p>
          SaaS is not about who you sell to — it is about how you sell software. SaaS means customers pay a recurring subscription (monthly or
          annually) to access software that runs in the cloud, rather than paying a one-time fee to install software on their own computers.
        </p>
        <p>
          Before SaaS, enterprise software was sold as a perpetual license — a large upfront payment, then annual maintenance fees, and the
          customer managed the software on their own servers. SaaS changed this. Customers now access the software via a browser or app, the vendor
          handles all the infrastructure and updates, and revenue comes in predictably every month.
        </p>
        <p>
          SaaS has become the default model for nearly all software businesses built in the last fifteen years because:
        </p>
        <BulletList
          items={[
            <>Revenue is predictable and recurring</>,
            <>Updates ship automatically to all customers at once</>,
            <>Customers do not need to manage infrastructure</>,
            <>It is easier to start small and expand</>,
          ]}
        />
        <p>Key SaaS metrics:</p>
        <BulletList
          items={[
            <>MRR (Monthly Recurring Revenue): Total monthly revenue from subscriptions. The core number.</>,
            <>ARR (Annual Recurring Revenue): MRR x 12. Used for larger businesses.</>,
            <>Churn: The percentage of customers or revenue lost each month. Low churn is essential.</>,
            <>LTV (Lifetime Value): How much revenue a customer generates over their entire relationship with you.</>,
            <>CAC (Customer Acquisition Cost): How much it costs to acquire one customer. LTV must exceed CAC for the business to work.</>,
          ]}
        />
        <p>Examples of SaaS companies:</p>
        <BulletList
          items={[
            <>Shopify — e-commerce platform on subscription</>,
            <>Linear — project management for software teams</>,
            <>Loom — video messaging tool</>,
            <>Figma — design tool on subscription</>,
            <>Ahrefs — SEO toolset (bootstrapped, profitable, no VC)</>,
          ]}
        />
      </Section>

      <Section title="Marketplace">
        <p>
          A marketplace connects buyers and sellers and takes a cut of each transaction. The business does not own inventory; it facilitates
          exchanges. Marketplaces are powerful when they scale because each new buyer makes the platform more valuable for sellers, and each new
          seller makes it more valuable for buyers — this is called a network effect.
        </p>
        <p>
          The hardest part of building a marketplace is the cold start problem: with no buyers, sellers will not join, and with no sellers, buyers
          will not come. Successful marketplace founders typically start by manually seeding one side of the market.
        </p>
        <p>Examples:</p>
        <BulletList
          items={[
            <>Airbnb — connects property hosts with travelers</>,
            <>Fiverr — connects freelancers with clients</>,
            <>Gumroad — marketplace for creators to sell digital products (used heavily by indie hackers)</>,
            <>Etsy — handmade and vintage goods marketplace</>,
          ]}
        />
      </Section>

      <Section title="Open Source / Developer Tools">
        <p>
          Some software businesses give away the core product for free as open-source code, and charge for hosting, support, or enterprise
          features. This model, sometimes called open-core, has been very successful for developer tools because developers can evaluate and
          integrate the software before their company ever pays for it.
        </p>
        <p>Examples:</p>
        <BulletList
          items={[
            <>GitLab — open-source code repository with paid tiers</>,
            <>Sentry — open-source error tracking with a hosted paid product</>,
            <>Supabase — open-source Firebase alternative</>,
            <>Metabase — open-source analytics and BI</>,
          ]}
        />
      </Section>

      <Section title="PLG: Product-Led Growth">
        <p>
          PLG is a go-to-market strategy where the product itself drives acquisition, conversion, and expansion. Instead of relying on a sales team
          to find and close customers, users discover and adopt the product on their own — often through a free tier or trial — and the product is
          designed to make them want to upgrade and invite others.
        </p>
        <p>
          Slack, Figma, Notion, and Dropbox all grew primarily through PLG. An employee signs up individually or a team starts using the free
          version, and eventually the company pays. This is especially powerful in B2B SaaS because it bypasses the traditional procurement process
          — users adopt first, procurement gets involved later.
        </p>
        <p>
          Resources:
        </p>
        <p>
          <Ext href="https://productled.com">ProductLed.com</Ext> — writing and community focused on PLG strategy
        </p>
      </Section>

      <Section title="The Indie Hacker Business Model">
        <p>
          Most indie hackers build micro-SaaS: small, focused software tools that solve a specific problem for a specific audience and charge a
          subscription. The goal is not to build the next Salesforce. It is to build something that generates $5,000 to $50,000 per month in
          recurring revenue with minimal overhead.
        </p>
        <p>The indie hacker stack usually looks like:</p>
        <BulletList
          items={[
            <>A landing page (built with Webflow, Framer, or Next.js)</>,
            <>A SaaS billing layer (Stripe)</>,
            <>A simple backend (often built on boilerplates like ShipFast by Marc Lou)</>,
            <>Distribution via Twitter/X, Reddit communities, and SEO</>,
          ]}
        />
        <p>
          The advantage of this model is that it can be built and launched by one person in days or weeks, requires no funding, and starts
          generating revenue immediately if it solves a real problem.
        </p>
        <p>Where to find real revenue numbers from indie hackers:</p>
        <p>
          <Ext href="https://www.indiehackers.com">Indie Hackers revenue reports</Ext>
        </p>
        <p>
          <Ext href="https://acquire.com">MicroAcquire</Ext> — marketplace where indie hacker businesses are bought and sold, with public
          revenue data
        </p>
      </Section>

      <Section title="Platform Business">
        <p>
          A platform creates infrastructure that other businesses or developers build on top of. The platform earns revenue by charging for access
          to that infrastructure, taking a percentage of transactions, or both. Platform businesses have enormous scaling potential because value is
          created by third parties on top of the platform, not just by the platform itself.
        </p>
        <p>Examples:</p>
        <BulletList
          items={[
            <>Shopify — powers other businesses&apos; online stores; the Shopify App Store is a platform on top of the platform</>,
            <>Twilio — communications infrastructure (SMS, voice, email) that developers build on top of</>,
            <>AWS — cloud infrastructure that millions of companies build on</>,
          ]}
        />
      </Section>

      <Section title="Summary Table">
        <BulletList
          items={[
            <>B2B: Sell to businesses. Higher prices, longer sales cycles, stickier customers.</>,
            <>B2C: Sell to individuals. Lower prices, faster decisions, need huge volume.</>,
            <>SaaS: Subscription-based software in the cloud. Recurring revenue, predictable, scalable.</>,
            <>Marketplace: Connect buyers and sellers, take a cut. Powered by network effects.</>,
            <>Open Core: Free open-source product, paid hosting and enterprise features.</>,
            <>PLG: The product drives its own growth through free tiers and virality.</>,
            <>Platform: Infrastructure others build on top of.</>,
            <>Indie Hacker / Micro-SaaS: Solo or small team, bootstrapped, focused niche, profitable SaaS.</>,
          ]}
        />
      </Section>

      <Section title="Recommended Starting Points">
        <BulletList
          items={[
            <>Indie Hackers — read founder interviews, see real revenue numbers</>,
            <>Y Combinator Startup School — free online course on building startups</>,
            <>Paul Graham essays — Do Things That Don&apos;t Scale, Default Alive, and others are essential</>,
            <>SaaStr blog and podcast — deep SaaS business content</>,
            <>Gumroad transparency reports — Sahil Lavingia (founder) has written extensively about building without VC</>,
            <>Pieter Levels — Make book — practical guide to building profitable internet businesses</>,
            <>Rob Walling — The SaaS Playbook</>,
            <>Hacker News — follow for daily deal flow, product launches, and technical discussion</>,
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
          Palantir Technologies is an American software company that builds data integration and analytics platforms for governments and large
          enterprises. Its software is designed to take vast, messy, siloed data from dozens of sources and make it queryable, visual, and
          actionable in one place. The company operates at the intersection of big data, artificial intelligence, and national security — a
          combination that has made it one of the most scrutinized and debated technology companies in the world.
        </p>
        <p>
          Founded in 2003 and headquartered in Denver, Colorado (it moved from Palo Alto in 2020), Palantir went public in September 2020 via a
          direct listing on the NYSE under the ticker PLTR. In 2024, it was added to the S&P 500. Its full-year 2024 revenue came in at $2.87
          billion, with the company posting its first full year of GAAP profitability — a milestone that took over two decades to reach.
        </p>
        <p>Key links:</p>
        <BulletList
          items={[
            <Ext href="https://www.palantir.com">Palantir official website</Ext>,
            <Ext href="https://investors.palantir.com">Palantir investor relations</Ext>,
            <Ext href="https://www.palantir.com/newsroom">Palantir newsroom</Ext>,
            <Ext href="https://www.nyse.com/quote/XNYS:PLTR">Palantir on NYSE</Ext>,
          ]}
        />
      </Section>

      <Section title="The Origin Story">
        <p>Post-9/11 and the Problem of Fragmented Intelligence</p>
        <p>
          Palantir was born from a specific, urgent failure. After the September 11 attacks, investigations revealed that U.S. intelligence agencies
          had, in fact, collected data pointing toward the plot — but the information sat in different databases across different agencies that
          could not talk to each other. The CIA had one system. The FBI had another. They were not connected, and analysts had no way to draw a
          line between data points sitting in separate silos.
        </p>
        <p>
          Peter Thiel, the PayPal co-founder and investor, had been thinking about this problem from a different angle. PayPal had built internal
          fraud detection software that analyzed transaction patterns across massive datasets to flag suspicious activity in real time. Thiel
          believed the same logic could be applied to intelligence analysis: connect the data, let analysts query it, surface hidden connections.
        </p>
        <p>
          In 2003, Thiel co-founded Palantir with Alex Karp, Stephen Cohen, Joe Lonsdale, and Nathan Gettings. Thiel seeded the company with $30
          million of his own money.
        </p>
      </Section>

      <Section title="Alex Karp: An Unusual CEO">
        <p>
          Alex Karp is one of the more distinctive figures in Silicon Valley. He holds a law degree from UC Hastings and a PhD in neoclassical
          social theory from Goethe University Frankfurt, where he studied under Jurgen Habermas. He had no background in software engineering. He
          is known for long speeches about democracy, Western values, and the moral obligations of technology companies. He practices Qigong daily,
          has spoken publicly about his ADHD, and has lived for stretches in a small Swedish village. He is, by most accounts, an atypical CEO for
          a defense technology company — and deliberately so. Karp has argued that having a philosophically trained, non-engineer at the helm keeps
          the company oriented around human judgment rather than pure technical optimization.
        </p>
        <p>
          Karp has led Palantir from its founding to the present day. His ownership stake and public visibility make him the face of the company.
        </p>
        <BulletList
          items={[
            <Ext href="https://www.sec.gov/Archives/edgar/data/1321655/000119312520230047/d904406ds1.htm">Alex Karp&apos;s letter to shareholders (2020 IPO prospectus)</Ext>,
            <Ext href="https://www.sec.gov/Archives/edgar/data/1321655/000119312520230047/d904406ds1.htm">Palantir S-1 filing</Ext>,
          ]}
        />
      </Section>

      <Section title="In-Q-Tel and the CIA&apos;s Early Bet">
        <p>
          Palantir&apos;s earliest significant customer was the U.S. government — specifically, the CIA&apos;s venture arm, In-Q-Tel, which invested in the
          company in 2004. This was a pivotal moment. Most Silicon Valley VCs passed on Palantir. The pitch was difficult to understand, the market
          was unusual, and the product required long, expensive deployment cycles. In-Q-Tel&apos;s investment gave Palantir not just capital but
          credibility and a first real customer.
        </p>
        <p>
          The early product, later named Gotham, was tested inside the intelligence community. Reports from that era indicate it was used to help
          analysts connect disparate data sources — financial records, travel logs, communications intercepts — to map networks of individuals and
          activity. By the mid-2000s it had found adoption across multiple agencies.
        </p>
        <BulletList items={[<Ext href="https://www.iqt.org">In-Q-Tel website</Ext>]} />
      </Section>

      <Section title="The Products">
        <p>Palantir has four main platforms today. Each targets a different use case and customer type.</p>
        <p>
          Gotham has been used by the U.S. Army, the NSA, the FBI, and numerous allied governments for counterterrorism analysis, battlefield
          intelligence, and law enforcement investigations. It was reportedly used in the operation to locate Osama bin Laden, though Palantir does
          not confirm specific operations.
        </p>
        <BulletList
          items={[
            <>
              <strong className="text-[var(--biz-text)]">Palantir Gotham:</strong> Gotham is the original product, built for government and
              defense intelligence work. It allows analysts to integrate, visualize, and search across heterogeneous data sources — structured
              databases, unstructured documents, geospatial data — and identify patterns, networks, and connections that would be invisible across
              siloed systems. <Ext href="https://www.palantir.com/platforms/gotham/">Palantir Gotham product page</Ext>
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Palantir Foundry:</strong> Foundry is the commercial-facing platform. Launched around
              2016-2017, it allows enterprises to build a centralized "ontology" — a live, connected model of their business — on top of their
              existing data infrastructure. Foundry pulls from ERP systems, IoT sensors, supply chain databases, spreadsheets, and whatever else a
              large organization runs on, and gives analysts and operators a single place to work with it. Customers have included Airbus (using it
              to track aircraft components and optimize maintenance), the NHS in the UK (a controversial deployment for COVID-19 response data),
              Morgan Stanley, Ferrari, and Merck. The typical enterprise customer is a large organization with data sprawl and a shortage of data
              engineers. <Ext href="https://www.palantir.com/platforms/foundry/">Palantir Foundry product page</Ext>
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Palantir Apollo:</strong> Apollo is Palantir&apos;s continuous delivery and deployment
              platform — the infrastructure layer that deploys and manages Gotham and Foundry across classified, air-gapped, cloud, and on-premise
              environments. It was built because Palantir needed to reliably update software running in environments that range from AWS GovCloud to
              a server in a forward operating base with intermittent connectivity. Apollo is less visible externally but is foundational to
              Palantir&apos;s ability to operate across radically different environments. <Ext href="https://www.palantir.com/platforms/apollo/">Palantir Apollo product page</Ext>
            </>,
            <>
              <strong className="text-[var(--biz-text)]">Palantir AIP (Artificial Intelligence Platform):</strong> AIP is Palantir&apos;s newest and
              currently fastest-growing product, launched in 2023. It layers large language models — including models from OpenAI, Anthropic, and
              open-source alternatives — on top of an organization&apos;s Foundry or Gotham data, so that users can query, reason over, and act on
              their own data using natural language and AI agents. Critically, AIP is designed with controls that keep data within the
              organization&apos;s environment and prevent LLMs from hallucinating on live operational data. The reception to AIP has been significant.
              Palantir introduced "AIP bootcamps" — intensive, multi-day workshops in which their engineers deploy AIP inside a customer&apos;s actual
              environment in real time. The conversion rate from bootcamp to contract has reportedly been high, and AIP drove a meaningful
              acceleration in commercial customer growth through 2023 and 2024. <Ext href="https://www.palantir.com/platforms/aip/">Palantir AIP product page</Ext> and <Ext href="https://www.palantir.com/platforms/aip/bootcamp/">AIP bootcamp overview</Ext>
            </>,
          ]}
        />
      </Section>

      <Section title="Business Model">
        <p>
          Palantir&apos;s business model is fundamentally enterprise software-as-a-service, but with several distinctive characteristics that set it
          apart from a typical SaaS company.
        </p>
        <BulletList
          items={[
            <>Long deployment cycles. Unlike software you can sign up for online, Palantir&apos;s platforms require significant integration work. Early contracts often involved Palantir engineers embedding inside the customer&apos;s organization for months or years to build out the data ontology, connect source systems, and train users. This made early growth expensive and slow, but also created very high switching costs once deployed.</>,
            <>Government + commercial split. Revenue is roughly split between U.S. government (defense and intelligence agencies), international government, U.S. commercial, and international commercial customers. The government side provides stable, large-contract revenue; the commercial side is growing faster and is where AIP is making the most impact.</>,
            <>Bootstrapped early customer relationships. Palantir often took on contracts at or near break-even in the early years specifically to get deployments inside organizations that would then expand over time. This "land and expand" model is common in enterprise software, but Palantir&apos;s version was unusually labor-intensive.</>,
            <>Stock-based compensation. Palantir has been heavily criticized for its stock-based compensation (SBC) expense, which for years masked underlying operating profitability. The company only achieved GAAP profitability — which includes SBC as an expense — for the first time in Q3 2023, and sustained it through 2024. This distinction matters because many tech companies report "adjusted" profitability that excludes SBC, a practice investors increasingly scrutinize.</>,
          ]}
        />
        <p>
          In FY2024, U.S. government revenue was $1.11 billion (up 45% year-over-year), and U.S. commercial revenue was $702 million (up 54%
          year-over-year).
        </p>
        <BulletList
          items={[
            <Ext href="https://investors.palantir.com/news-details/2025/Palantir-Reports-Full-Year-and-Fourth-Quarter-2024-Results/default.aspx">Palantir Q4 2024 earnings release</Ext>,
            <Ext href="https://investors.palantir.com/financials/annual-reports/default.aspx">Palantir annual reports</Ext>,
          ]}
        />
      </Section>

      <Section title="The Road to Profitability: 17 Years">
        <p>
          Palantir lost money for seventeen consecutive years. From 2003 to 2020, it was a private company spending heavily on engineering,
          deployment, and sales while building a customer base in one of the world&apos;s most difficult sales environments — classified government
          contracts and large enterprise IT departments.
        </p>
        <p>
          At IPO in 2020, Palantir had $1.09 billion in revenue but was losing hundreds of millions of dollars annually on a GAAP basis. Critics
          questioned whether the business could ever be profitable given its cost structure. The stock opened at $10, ran to $45 in early 2021
          during the retail trading frenzy, crashed back below $10 by mid-2022, and then began recovering sharply through 2023 and 2024 as AIP
          gained traction and the company demonstrated sustained profitability.
        </p>
        <p>
          By the end of 2024, PLTR was one of the best-performing large-cap stocks of the year, trading above $70 per share. The company&apos;s market
          capitalization reached over $160 billion — rich by any traditional valuation metric, but reflective of investor belief that AIP positions
          Palantir as central infrastructure for enterprise AI.
        </p>
      </Section>

      <Section title="Controversies">
        <p>
          Palantir has attracted sustained controversy throughout its history, primarily around three areas.
        </p>
        <BulletList
          items={[
            <>Surveillance and civil liberties. Palantir&apos;s tools have been used by U.S. Immigration and Customs Enforcement (ICE) for immigration enforcement, including deportation operations. Civil liberties organizations have criticized this use extensively. Palantir has defended the contracts, arguing that its software helps agents work lawfully and efficiently, and that the alternative would be less accountable manual processes.</>,
            <>NHS data deal. Palantir won a significant contract with the UK&apos;s National Health Service in 2023 to build a Federated Data Platform connecting NHS trusts&apos; patient data. The contract was worth up to £480 million. Privacy advocates and NHS staff raised concerns about a U.S. defense contractor holding access to sensitive patient data. Palantir argued the platform keeps data under NHS control and improves care coordination.</>,
            <>Ukraine and conflict deployments. Palantir has been publicly open about providing software to Ukraine for battlefield intelligence and logistics since the 2022 invasion. Alex Karp has spoken about this at length, framing it as a moral obligation. This has added to both the company&apos;s defense sector credibility and its controversies around operating in active conflict zones.</>,
          ]}
        />
        <BulletList
          items={[
            <Ext href="https://www.aclu.org/issues/privacy-technology/surveillance-technologies/palantir">Palantir ICE contract coverage (ACLU)</Ext>,
            <Ext href="https://www.england.nhs.uk/long-read/federated-data-platform-fdp/">NHS Federated Data Platform</Ext>,
            <Ext href="https://www.palantir.com/offerings/defense/">Palantir Ukraine statement</Ext>,
          ]}
        />
      </Section>

      <Section title="Can You Bootstrap a Similar Business?">
        <p>
          The honest answer is: yes, at a smaller scale, but the path looks very different from Palantir&apos;s.
        </p>
        <p>
          Palantir benefited from a specific and unlikely combination of factors — a billionaire founder willing to fund losses for over a decade,
          a post-9/11 political environment that created urgent demand for exactly this kind of software, and a first customer (the CIA via
          In-Q-Tel) that gave the company both revenue and credibility in a market where credibility is everything. Replicating that exact path is
          not realistic.
        </p>
        <p>
          However, the core problem Palantir solves — organizations drowning in siloed, inaccessible data — exists at every scale. A mid-sized
          logistics company, a regional hospital network, a municipal government: all of them have the same fundamental issue. The opportunity is
          real. The question is how to reach it without $30 million in seed funding and government intelligence contracts.
        </p>
      </Section>

      <Section title="What a Bootstrapped Version Could Look Like">
        <BulletList
          items={[
            <>Pick a single vertical. Palantir tried to be horizontal — applicable to any industry. You cannot do that without enormous capital. Pick one vertical with a specific, painful data problem.</>,
            <>Start with services, build toward product. The irony of Palantir&apos;s early model is that it was essentially a professional services company disguised as a software company.</>,
            <>Use existing infrastructure. Today, you can build a data integration and analytics product on top of tools like Snowflake, dbt, Airbyte, and any of several LLM APIs.</>,
            <>Sell to mid-market, not government. Government contracts require security clearances, lengthy procurement cycles, compliance overhead, and political relationships. A bootstrapped team cannot pursue them meaningfully.</>,
            <>Price for expansion. Structure a fixed implementation fee plus a usage or seat-based subscription that scales with adoption.</>,
            <>The realistic ceiling. A bootstrapped company in this category can still become a real and profitable business.</>,
          ]}
        />
        <p>
          A bootstrapped data integration and analytics company in a single vertical, run by a two-to-five person founding team, could realistically
          reach $1-5 million in ARR within three to five years, and potentially $10-20 million ARR before needing institutional capital.
        </p>
      </Section>

      <Section title="Resources for Building in This Space">
        <BulletList
          items={[
            <Ext href="https://www.snowflake.com">Snowflake Data Cloud</Ext>,
            <Ext href="https://www.getdbt.com">dbt (data build tool)</Ext>,
            <Ext href="https://airbyte.com">Airbyte</Ext>,
            <Ext href="https://www.metabase.com">Metabase</Ext>,
            <Ext href="https://retool.com">Retool</Ext>,
            <Ext href="https://towardsdatascience.com">Towards Data Science</Ext>,
            <Ext href="https://www.dataengineeringpodcast.com">The Data Engineering Podcast</Ext>,
          ]}
        />
      </Section>

      <Section title="Key Numbers at a Glance (FY2024)">
        <BulletList
          items={[
            <>Total revenue: $2.87 billion (+29% YoY)</>,
            <>U.S. government revenue: $1.11 billion (+45% YoY)</>,
            <>U.S. commercial revenue: $702 million (+54% YoY)</>,
            <>GAAP net income: $462 million (first full profitable year)</>,
            <>Customers: 711 total (up from 498 a year prior)</>,
            <>Employees: ~3,800</>,
            <>Stock price (end of 2024): ~$75</>,
            <>Market cap: ~$160 billion</>,
          ]}
        />
      </Section>

      <Section title="Further Reading and Sources">
        <BulletList
          items={[
            <Ext href="https://www.palantir.com">Palantir Technologies official site</Ext>,
            <Ext href="https://investors.palantir.com">Palantir investor relations</Ext>,
            <Ext href="https://www.sec.gov/edgar/browse/?CIK=1321655">Palantir SEC filings (EDGAR)</Ext>,
            <Ext href="https://www.youtube.com/results?search_query=Alex+Karp+on+Palantir+mission">Alex Karp on Palantir&apos;s mission (YouTube)</Ext>,
            <Ext href="https://en.wikipedia.org/wiki/Palantir_Technologies">Palantir Wikipedia</Ext>,
            <Ext href="https://www.iqt.org/portfolio/">In-Q-Tel portfolio</Ext>,
            <Ext href="https://www.palantir.com/platforms/aip/">Palantir AIP demo</Ext>,
          ]}
        />
      </Section>
    </article>
  );
}

export function BusinessPostBody({ slug }: BodyProps) {
  if (slug === "businesses") return <BusinessesBody />;
  if (slug === "businessmodels") return <BusinessModelsBody />;
  return <PalantirBody />;
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
