export interface Year {
  id: string;
  year: number;
  location: string;
  date: string;
}

export interface Speaker {
  id: string;
  name: string;
  bio: string;
  company: string;
  twitter?: string;
  github?: string;
  website?: string;
  linkedin?: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
}

export interface Talk {
  id: string;
  title: string;
  description: string;
  duration: number;
  speakerId: string;
  topicIds: string[];
  yearId: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  language: string;
  youtubeId: string;
}

export interface FrontKonData {
  years: Year[];
  speakers: Speaker[];
  topics: Topic[];
  talks: Talk[];
}


