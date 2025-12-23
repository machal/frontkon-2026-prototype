import { defaultLanguage, languages } from './config';
import type { Locale } from '@/data/types';

export const withLangPrefix = (path: string, lang: Locale) => `/${lang}${path}`;

export const toggleLangPath = (current: string, target: Locale): string => {
  const [_, maybeLang, ...rest] = current.split('/');
  if (languages.includes(maybeLang as Locale)) {
    return `/${target}/${rest.join('/')}`.replace(/\/+$/, '/');
  }
  return withLangPrefix(current, target);
};

export const ensureDefaultLang = (path: string, lang?: Locale) =>
  withLangPrefix(path, lang ?? defaultLanguage);

