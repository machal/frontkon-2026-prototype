import type { Locale, Speaker, Talk, Topic } from '@/data/types';
import { getText, mapTopics } from '@/utils/content';

type Props = {
  talk: Talk;
  speaker: Speaker | undefined;
  topics: Topic[];
  lang: Locale;
  base?: string;
};

export function TalkCard({ talk, speaker, topics, lang, base = '/' }: Props) {
  const talkHref = `${base.replace(/\/$/, '')}/${lang}/talks/${talk.id}/`;
  const speakerHref = speaker ? `${base.replace(/\/$/, '')}/${lang}/speakers/${speaker.id}/` : '#';

  return (
    <div className="card" style={{ background: '#fff', display: 'flex', flexDirection: 'column', height: '100%' }}>
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
}

