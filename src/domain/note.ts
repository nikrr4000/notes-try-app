import type { Topic } from './ports.js';

const yamlEscape = (s: string) => s.replace(/"/g, '\\"');

export function decideTopic(
  result: { topic: Topic; confidence: number },
  cfg: { threshold: number; fallback: Topic },
): Topic {
  return result.confidence >= cfg.threshold ? result.topic : cfg.fallback;
}

export function buildFrontmatter(params: {
  title: string;
  date: Date;
  topic: Topic;
  tags?: string[];
  source: string;
}): string {
  const { title, date, topic, tags, source } = params;
  const lines = [
    '---',
    `title: "${yamlEscape(title)}"`,
    `date: ${date.toISOString()}`,
    `topic: ${topic}`,
  ];
  if (tags && tags.length > 0) {
    lines.push('tags:');
    for (const tag of tags) {
      lines.push(`  - "${yamlEscape(tag)}"`);
    }
  }
  lines.push(`source: ${source}`, '---', '');
  return lines.join('\n');
}

export function slugify(title: string): string {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u0400-\u04FF\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function filePath(date: Date, topic: Topic, slug: string): string {
  const iso = date.toISOString().split('T')[0];
  return `${iso}/${topic}/${slug}.md`;
}
