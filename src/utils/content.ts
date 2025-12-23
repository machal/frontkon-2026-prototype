import type { Locale, LocalizedText, Topic } from '@/data/types';

export const getText = (value: LocalizedText, lang: Locale) => value?.[lang] ?? value?.cs ?? '';

export const mapTopics = (topics: Topic[], ids: string[], lang: Locale) =>
  ids
    .map((id) => topics.find((t) => t.id === id))
    .filter(Boolean)
    .map((topic) => getText((topic as Topic).name, lang));

