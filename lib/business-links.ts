const LINK_OVERRIDES: Record<string, string> = {
  "marc lou's website": "https://marclou.com",
  "marc lou on twitter/x": "https://x.com/marc_louvion",
  "levels.io website": "https://levels.io",
  "nomad list": "https://nomadlist.com",
  "remote ok": "https://remoteok.com",
  "jack friks on twitter/x": "https://x.com/jackfriks",
  "indie hackers": "https://www.indiehackers.com",
  "pieter levels' blog": "https://levels.io/blog",
  microconf: "https://microconf.com",
  "starter story": "https://www.starterstory.com",
  "stripe website": "https://stripe.com",
  "figma website": "https://figma.com",
  "notion website": "https://www.notion.so",
  "openai website": "https://openai.com",
  "y combinator website": "https://www.ycombinator.com",
  "yc application": "https://www.ycombinator.com/apply",
  "startup school (free)": "https://www.startupschool.org",
  "the indie hackers podcast": "https://www.indiehackers.com/podcast",
  "paul graham's essays": "https://www.paulgraham.com/articles.html",
  "the saas playbook by rob walling": "https://www.thesaasplaybook.com",
  "rework by jason fried and dhh": "https://basecamp.com/books/rework",
  "hacker news: ask hn threads on bootstrapping": "https://news.ycombinator.com",
  "productled.com": "https://productled.com",
  "indie hackers revenue reports": "https://www.indiehackers.com",
  "microacquire": "https://acquire.com",
  "y combinator startup school": "https://www.startupschool.org",
  "saastr blog and podcast": "https://www.saastr.com",
  "gumroad transparency reports": "https://gumroad.com/blog",
  "rob walling - the saas playbook": "https://www.thesaasplaybook.com",
  "palantir official website": "https://www.palantir.com",
  "palantir investor relations": "https://investors.palantir.com",
  "palantir newsroom": "https://www.palantir.com/newsroom",
  "palantir on nyse": "https://www.nyse.com/quote/XNYS:PLTR",
  "alex karp's letter to shareholders (2020 ipo prospectus)": "https://www.sec.gov/Archives/edgar/data/1321655/000119312520230047/d904406ds1.htm",
  "palantir s-1 filing": "https://www.sec.gov/Archives/edgar/data/1321655/000119312520230047/d904406ds1.htm",
  "in-q-tel website": "https://www.iqt.org",
  "palantir gotham product page": "https://www.palantir.com/platforms/gotham/",
  "palantir foundry product page": "https://www.palantir.com/platforms/foundry/",
  "palantir apollo product page": "https://www.palantir.com/platforms/apollo/",
  "palantir aip product page": "https://www.palantir.com/platforms/aip/",
  "aip bootcamp overview": "https://www.palantir.com/offerings/aip/",
  "palantir q4 2024 earnings release": "https://investors.palantir.com/news-details",
  "palantir annual reports": "https://investors.palantir.com/financials/sec-filings/default.aspx",
  "palantir ice contract coverage (aclu)": "https://www.aclu.org/news/privacy-technology",
  "nhs federated data platform": "https://www.england.nhs.uk/long-read/federated-data-platform/",
  "palantir ukraine statement": "https://www.palantir.com/newsroom/",
  "snowflake data cloud": "https://www.snowflake.com",
  "dbt (data build tool)": "https://www.getdbt.com",
  airbyte: "https://airbyte.com",
  metabase: "https://www.metabase.com",
  retool: "https://retool.com",
  "towards data science": "https://towardsdatascience.com",
  "the data engineering podcast": "https://www.dataengineeringpodcast.com",
  "palantir technologies official site": "https://www.palantir.com",
  "palantir sec filings (edgar)": "https://www.sec.gov/edgar/browse/?CIK=1321655",
  "alex karp on palantir's mission (youtube)": "https://www.youtube.com/results?search_query=Alex+Karp+Palantir+mission",
  "palantir wikipedia": "https://en.wikipedia.org/wiki/Palantir_Technologies",
  "in-q-tel portfolio": "https://www.iqt.org/portfolio/",
  "palantir aip demo": "https://www.youtube.com/results?search_query=Palantir+AIP+demo",
};

const DOMAIN_REGEX = /\b((?:https?:\/\/)?(?:www\.)?[a-z0-9.-]+\.[a-z]{2,}(?:\/[\w./?%&=+-]*)?)/i;

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+[-|:]\s+.*/, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function resolveBusinessLink(line: string) {
  const normalized = normalize(line);
  if (LINK_OVERRIDES[normalized]) {
    return LINK_OVERRIDES[normalized];
  }

  const prefixMatch = Object.keys(LINK_OVERRIDES).find((key) => normalized.startsWith(key));
  if (prefixMatch) {
    return LINK_OVERRIDES[prefixMatch];
  }

  return null;
}

export function hasDomain(text: string) {
  return new RegExp(DOMAIN_REGEX.source, "i").test(text);
}

export function getDomainRegex() {
  return new RegExp(DOMAIN_REGEX.source, "gi");
}
