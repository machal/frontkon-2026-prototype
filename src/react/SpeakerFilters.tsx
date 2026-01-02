import { useMemo, useState } from 'react';
import type { Locale, Speaker, Talk } from '@/data/types';
import { getText } from '@/utils/content';

type Props = {
  speakers: Speaker[];
  talks: Talk[];
  lang: Locale;
  base?: string;
};

export function SpeakerFilters({ speakers, talks, lang, base = '/' }: Props) {
  const [search, setSearch] = useState('');
  const [year, setYear] = useState<string>('all');

  const years = Array.from(new Set(talks.map((t) => t.yearId))).sort();

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return speakers.filter((speaker) => {
      const hasYear = year === 'all' || talks.some((t) => t.yearId === year && t.speakerId === speaker.id);
      const matchesSearch =
        !q ||
        speaker.name.toLowerCase().includes(q) ||
        getText(speaker.bio, lang).toLowerCase().includes(q) ||
        speaker.company.toLowerCase().includes(q);
      return hasYear && matchesSearch;
    });
  }, [speakers, talks, search, year, lang]);

  return (
    <div className="card" style={{ gap: '1rem' }}>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
        <div>
          <label className="eyebrow">{lang === 'cs' ? 'Hledat' : 'Search'}</label>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,34,0.2)', background: '#fff' }}
          />
        </div>
        <div>
          <label className="eyebrow">{lang === 'cs' ? 'Rok' : 'Year'}</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,34,0.2)', background: '#fff' }}
          >
            <option value="all">{lang === 'cs' ? 'Vše' : 'All'}</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid">
        {filtered.map((speaker) => (
          <div
            key={speaker.id}
            className="card"
            style={{ background: '#fff' }}
          >
            <h3>{speaker.name}</h3>
            <p className="modal-company">{speaker.company}</p>
            <p className="modal-description">{getText(speaker.bio, lang)}</p>
            <a
              className="btn-secondary"
              href={`${base.replace(/\/$/, '')}/${lang}/speakers/${speaker.id}/`}
              style={{ marginTop: '0.5rem' }}
            >
              {lang === 'cs' ? 'Zobrazit' : 'View'}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpeakerFilters;

