import type { Locale } from '@/data/types';
import { defaultLanguage } from '@/i18n/config';

// Import all translation files
import homepageTranslations from '@/i18n/translations/homepage.json';
import commonTranslations from '@/i18n/translations/common.json';
import speakersTranslations from '@/i18n/translations/speakers.json';
import talksTranslations from '@/i18n/translations/talks.json';
import workshopsTranslations from '@/i18n/translations/workshops.json';
import blogTranslations from '@/i18n/translations/blog.json';
import archiveTranslations from '@/i18n/translations/archive.json';
import prednaskyTranslations from '@/i18n/translations/prednasky.json';
import tymTranslations from '@/i18n/translations/tym.json';

type TranslationFile = {
  cs: Record<string, any>;
  en: Record<string, any>;
};

const translations: Record<string, TranslationFile> = {
  homepage: homepageTranslations,
  common: commonTranslations,
  speakers: speakersTranslations,
  talks: talksTranslations,
  workshops: workshopsTranslations,
  blog: blogTranslations,
  archive: archiveTranslations,
  prednasky: prednaskyTranslations,
  tym: tymTranslations,
};

/**
 * Get translation value by key path
 * @param lang - Language code ('cs' or 'en')
 * @param file - Translation file name (e.g., 'homepage', 'common')
 * @param keyPath - Dot-separated key path (e.g., 'hero.title' or 'nav.home')
 * @returns Translated string or empty string if not found
 */
export function getTranslation(
  lang: Locale,
  file: string,
  keyPath: string
): string {
  const translationFile = translations[file];
  if (!translationFile) {
    console.warn(`Translation file '${file}' not found`);
    return '';
  }

  const translationsForLang = translationFile[lang] || translationFile[defaultLanguage];
  if (!translationsForLang) {
    return '';
  }

  const keys = keyPath.split('.');
  let value: any = translationsForLang;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      // Fallback to default language if key not found
      const defaultTranslations = translationFile[defaultLanguage];
      if (defaultTranslations) {
        value = defaultTranslations;
        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k];
          } else {
            return '';
          }
        }
      } else {
        return '';
      }
    }
  }

  return typeof value === 'string' ? value : '';
}

/**
 * Get nested translation object
 * @param lang - Language code ('cs' or 'en')
 * @param file - Translation file name
 * @param keyPath - Dot-separated key path to the object
 * @returns Translation object or empty object if not found
 */
export function getTranslationObject(
  lang: Locale,
  file: string,
  keyPath?: string
): Record<string, any> {
  const translationFile = translations[file];
  if (!translationFile) {
    console.warn(`Translation file '${file}' not found`);
    return {};
  }

  const translationsForLang = translationFile[lang] || translationFile[defaultLanguage];
  if (!translationsForLang) {
    return {};
  }

  if (!keyPath) {
    return translationsForLang;
  }

  const keys = keyPath.split('.');
  let value: any = translationsForLang;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      // Fallback to default language
      const defaultTranslations = translationFile[defaultLanguage];
      if (defaultTranslations) {
        value = defaultTranslations;
        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k];
          } else {
            return {};
          }
        }
      } else {
        return {};
      }
    }
  }

  return typeof value === 'object' && value !== null ? value : {};
}

