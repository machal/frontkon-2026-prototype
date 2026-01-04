import { useMemo, useState, useEffect } from 'react';
import type { Locale, Speaker, Talk, Topic } from '@/data/types';
import { getText, mapTopics } from '@/utils/content';

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
          const talkHref = `${base.replace(/\/$/, '')}/${lang}/talks/${talk.id}/`;
          const speakerHref = speaker ? `${base.replace(/\/$/, '')}/${lang}/speakers/${speaker.id}/` : '#';
          return (
            <div key={talk.id} className="card" style={{ background: '#fff', display: 'flex', flexDirection: 'column', height: '100%' }}>
              {/* Obrázkový náhled - překřížený placeholder */}
              <div style={{ width: '100%', aspectRatio: '16/9', marginBottom: '1rem', background: 'rgba(0, 0, 34, 0.1)', border: '1px solid rgba(0, 0, 34, 0.2)', overflow: 'hidden', position: 'relative' }}>
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  position: 'relative',
                  background: 'rgba(0, 0, 34, 0.05)'
                }}>
                  {/* Překřížené čáry */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    right: '0',
                    height: '1px',
                    background: 'rgba(0, 0, 34, 0.2)',
                    transform: 'rotate(45deg)',
                    transformOrigin: 'center'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    right: '0',
                    height: '1px',
                    background: 'rgba(0, 0, 34, 0.2)',
                    transform: 'rotate(-45deg)',
                    transformOrigin: 'center'
                  }}></div>
                </div>
              </div>
              
              <h3 style={{ fontSize: '24px', fontWeight: 600, color: 'rgb(0, 0, 34)', marginBottom: '0.75rem' }}>
                {getText(talk.title, lang)}
              </h3>
              
              {/* Odkaz na spíkra */}
              {speaker && (
                <a 
                  href={speakerHref}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    marginBottom: '0.75rem',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(0, 0, 34, 0.2)', overflow: 'hidden', background: 'rgba(0, 0, 34, 0.1)', flexShrink: 0 }}>
                    {speaker.photo_url ? (
                      <img src={speaker.photo_url} alt={speaker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%' }}></div>
                    )}
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: '14px', fontWeight: 500, color: 'rgb(0, 0, 34)' }}>{speaker.name}</p>
                    <p style={{ margin: 0, fontSize: '12px', color: 'rgba(0, 0, 34, 0.6)' }}>{speaker.company}</p>
                  </div>
                </a>
              )}
              
              <p style={{ color: 'rgba(0, 0, 34, 0.8)', fontSize: '16px', marginBottom: '0.5rem', lineHeight: '1.5' }}>
                {getText(talk.description, lang)}
              </p>
              
              <p style={{ color: 'rgba(0, 0, 34, 0.6)', fontSize: '14px', marginBottom: '1rem' }}>
                {talk.yearId} · {talk.time} · {mapTopics(topics, talk.topicIds, lang).slice(0, 2).join(', ')}
              </p>
              
              {/* Secondary button na detail přednášky */}
              <div style={{ marginTop: 'auto' }}>
                <a className="btn-secondary" href={talkHref} style={{ display: 'inline-block', textDecoration: 'none' }}>
                  {lang === 'cs' ? 'Detail přednášky' : 'Talk details'}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArchiveFilters;

