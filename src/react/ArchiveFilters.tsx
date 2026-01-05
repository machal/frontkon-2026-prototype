import { useMemo, useState, useEffect } from 'react';
import type { Locale, Speaker, Talk, Topic } from '@/data/types';
import { getText, mapTopics } from '@/utils/content';
import { TalkCard } from './TalkCard';

type Props = {
  talks: Talk[];
  speakers: Speaker[];
  topics: Topic[];
  lang: Locale;
  base?: string;
};

export function ArchiveFilters({ talks, speakers, topics, lang, base = '/' }: Props) {
  const [search, setSearch] = useState('');
  const [year, setYear] = useState<string>('all');
  const [topic, setTopic] = useState<string>('all');
  const [sort, setSort] = useState<'time' | 'title'>('time');

  // Načtení year z URL query parametrů
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const yearParam = params.get('year');
    if (yearParam && talks.some(t => t.yearId === yearParam)) {
      setYear(yearParam);
    }
  }, [talks]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const result = talks.filter((talk) => {
      const speaker = speakers.find((s) => s.id === talk.speakerId);
      const matchesSearch =
        !q ||
        getText(talk.title, lang).toLowerCase().includes(q) ||
        getText(talk.description, lang).toLowerCase().includes(q) ||
        speaker?.name.toLowerCase().includes(q);
      const matchesYear = year === 'all' || talk.yearId === year;
      const matchesTopic = topic === 'all' || talk.topicIds.includes(topic);
      return matchesSearch && matchesYear && matchesTopic;
    });

    const sorted = [...result].sort((a, b) => {
      if (sort === 'title') {
        return getText(a.title, lang).localeCompare(getText(b.title, lang));
      }
      return `${a.yearId}-${a.time}`.localeCompare(`${b.yearId}-${b.time}`);
    });

    return sorted; // Show all filtered results
  }, [search, year, topic, sort, talks, speakers, lang]);

  return (
    <div className="card" style={{ gap: '1rem' }}>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
        <div>
          <label className="eyebrow">Search</label>
          <input
            aria-label="Search talks"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,34,0.2)', background: '#fff' }}
          />
        </div>
        <div>
          <label className="eyebrow">Year</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,34,0.2)', background: '#fff' }}
          >
            <option value="all">{lang === 'cs' ? 'Vše' : 'All'}</option>
            {[...new Set(talks.map((t) => t.yearId))].map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="eyebrow">Topic</label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,34,0.2)', background: '#fff' }}
          >
            <option value="all">{lang === 'cs' ? 'Vše' : 'All'}</option>
            {topics.map((t) => (
              <option key={t.id} value={t.id}>
                {getText(t.name, lang)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="eyebrow">Sort</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as 'time' | 'title')}
            style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,34,0.2)', background: '#fff' }}
          >
            <option value="time">{lang === 'cs' ? 'Podle času' : 'By time'}</option>
            <option value="title">{lang === 'cs' ? 'Podle názvu' : 'By title'}</option>
          </select>
        </div>
      </div>

      <div className="grid archive-talks-grid">
        {filtered.map((talk) => {
          const speaker = speakers.find((s) => s.id === talk.speakerId);
          return (
            <TalkCard
              key={talk.id}
              talk={talk}
              speaker={speaker}
              topics={topics}
              lang={lang}
              base={base}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ArchiveFilters;

