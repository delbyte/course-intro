import { getDomainRegex, hasDomain, resolveBusinessLink } from "@/lib/business-links";

type MarkdownArticleProps = {
  content: string;
};

function isHeadingLine(line: string) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) {
    return false;
  }

  const words = trimmed.split(/\s+/).length;
  const looksLikeSentence = /[.!?]$/.test(trimmed);
  return words <= 13 && !looksLikeSentence;
}

function isListItem(line: string) {
  const trimmed = line.trim();
  if (!trimmed) {
    return false;
  }

  if (/^[-*]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
    return true;
  }

  return /^([A-Za-z][\w\s/+()'-]{1,50}):\s+/.test(trimmed) && trimmed.length < 140;
}

function sanitizeInline(text: string) {
  return text
    .replace(/^[-*]\s+/, "")
    .replace(/^\d+\.\s+/, "")
    .trim();
}

function toHref(maybeUrl: string) {
  return maybeUrl.startsWith("http://") || maybeUrl.startsWith("https://")
    ? maybeUrl
    : `https://${maybeUrl}`;
}

function renderRichText(text: string) {
  const forcedLink = resolveBusinessLink(text);
  if (forcedLink) {
    return (
      <a href={forcedLink} target="_blank" rel="noreferrer" className="text-[var(--biz-chip-text)] underline underline-offset-4">
        {text}
      </a>
    );
  }

  const regex = getDomainRegex();
  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null = regex.exec(text);

  while (match) {
    const [domain] = match;
    const start = match.index;

    if (start > cursor) {
      nodes.push(text.slice(cursor, start));
    }

    nodes.push(
      <a
        key={`${domain}-${start}`}
        href={toHref(domain)}
        target="_blank"
        rel="noreferrer"
        className="text-[var(--biz-chip-text)] underline underline-offset-4"
      >
        {domain}
      </a>,
    );

    cursor = start + domain.length;
    match = regex.exec(text);
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return nodes.length > 0 ? nodes : text;
}

export function MarkdownArticle({ content }: MarkdownArticleProps) {
  const lines = content.split(/\r?\n/);
  const elements: React.ReactNode[] = [];
  let paragraphBuffer: string[] = [];
  let listBuffer: string[] = [];

  const flushParagraph = (key: string) => {
    if (paragraphBuffer.length === 0) {
      return;
    }
    elements.push(
      <p key={key} className="leading-8 text-[var(--biz-text-muted)]">
        {renderRichText(paragraphBuffer.join(" "))}
      </p>,
    );
    paragraphBuffer = [];
  };

  const flushList = (key: string) => {
    if (listBuffer.length === 0) {
      return;
    }
    elements.push(
      <ul key={key} className="space-y-2 pl-5 text-[var(--biz-text-muted)] list-disc marker:text-[var(--biz-chip-text)]">
        {listBuffer.map((item, index) => (
          <li key={`${key}-${index}`}>{renderRichText(item)}</li>
        ))}
      </ul>,
    );
    listBuffer = [];
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph(`p-${index}`);
      flushList(`l-${index}`);
      return;
    }

    if (isHeadingLine(line)) {
      if (resolveBusinessLink(line) || hasDomain(line)) {
        flushParagraph(`p-${index}`);
        listBuffer.push(line);
        return;
      }

      flushParagraph(`p-${index}`);
      flushList(`l-${index}`);
      elements.push(
        <h2 key={`h-${index}`} className="mt-8 text-2xl font-semibold tracking-tight text-[var(--biz-text)]">
          {line}
        </h2>,
      );
      return;
    }

    if (isListItem(line)) {
      flushParagraph(`p-${index}`);
      listBuffer.push(sanitizeInline(line));
      return;
    }

    paragraphBuffer.push(line);
  });

  flushParagraph("p-final");
  flushList("l-final");

  return <article className="space-y-5 text-base sm:text-lg">{elements}</article>;
}
