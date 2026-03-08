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

function renderSentenceWithLead(text: string) {
  const leadMatch = text.match(/^([A-Z][\w\s/+()'&.-]{1,42}):\s+(.+)$/);
  if (!leadMatch) {
    return renderRichText(text);
  }

  const [, lead, rest] = leadMatch;
  return (
    <>
      <strong className="font-semibold text-[var(--biz-text)]">{lead}:</strong>{" "}
      {renderRichText(rest)}
    </>
  );
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

    const paragraph = paragraphBuffer.join(" ");
    const isLead = elements.length < 2;

    elements.push(
      <p
        key={key}
        className={
          isLead
            ? "text-[1.06rem] leading-8 text-[var(--biz-text)] sm:text-[1.12rem]"
            : "text-[1.02rem] leading-8 text-[var(--biz-text-muted)] sm:text-[1.06rem]"
        }
      >
        {renderSentenceWithLead(paragraph)}
      </p>,
    );
    paragraphBuffer = [];
  };

  const flushList = (key: string) => {
    if (listBuffer.length === 0) {
      return;
    }
    elements.push(
      <ul
        key={key}
        className="space-y-2.5 pl-5 text-[1.01rem] leading-7 text-[var(--biz-text-muted)] list-disc marker:text-[var(--biz-chip-text)] sm:text-[1.04rem]"
      >
        {listBuffer.map((item, index) => (
          <li key={`${key}-${index}`}>{renderSentenceWithLead(item)}</li>
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
        <h2
          key={`h-${index}`}
          className="mt-10 border-t border-[var(--biz-border)]/80 pt-8 text-2xl font-semibold tracking-tight text-[var(--biz-text)] sm:text-[1.9rem]"
        >
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

  return <article className="mx-auto max-w-3xl space-y-6">{elements}</article>;
}
