export type Locale = 'cs' | 'en';

export interface LocalizedText {
  cs: string;
  en: string;
}

export interface SocialLinks {
  twitter?: string;
  github?: string;
  web?: string;
  linkedin?: string;
}

export interface Speaker {
  id: string;
  name: string;
  bio: LocalizedText;
  company: string;
  links?: SocialLinks;
  photo_url: string;
}

export interface Talk {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  speakerId: string;
  topicIds: string[];
  yearId: string;
  stage: 'A' | 'B' | 'C';
  time: string;
  language: Locale;
  youtubeId: string;
}

export interface Workshop {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  speakerId: string;
  yearId: string;
  capacity: number;
  duration: number; // minutes
  price: string;
  audience: LocalizedText;
  program: LocalizedText;
  date: string;
  time: string;
}

export interface Year {
  id: string;
  year: number;
  location: string;
  date: string;
  claim: LocalizedText;
}

export interface Topic {
  id: string;
  name: LocalizedText;
}

export interface BlogPost {
  id: string;
  title: LocalizedText;
  perex: LocalizedText;
  content: string;
  authorId: string;
  date: string;
}

export interface FrontKonData {
  years: Year[];
  speakers: Speaker[];
  topics: Topic[];
  talks: Talk[];
  workshops: Workshop[];
  blogPosts: BlogPost[];
}

