/** Converte links absolutos do CMS em âncoras locais (#contato, #implantacao). */
export function normalizeCmsLink(link: string): string {
  if (!link) return "#";
  if (link.startsWith("#")) return link;

  try {
    const url = new URL(link);
    if (url.hash) return url.hash;
  } catch {
    const hashIndex = link.indexOf("#");
    if (hashIndex !== -1) return link.slice(hashIndex);
  }

  return link;
}

export function splitLines(text: string): string[] {
  return text.split(/\r\n|\n/);
}

export function splitParagraphs(text: string): string[] {
  return text
    .split(/\r\n\r\n|\n\n/)
    .map((p) => p.replace(/\r\n/g, "\n").trim())
    .filter(Boolean);
}

export function splitListItems(text: string): string[] {
  return text
    .split(/\r\n|\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}
