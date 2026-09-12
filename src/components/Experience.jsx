import { useState } from 'react';

export default function Experience({ copy }) {
  const [tab, setTab] = useState('work');
  const entries = tab === 'work' ? copy.work : copy.education;
  return <section className="path section-frame" id="path">
    <div className="section-heading"><div><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}</h2></div></div>
    <div className="path-layout"><div className="tab-list" role="tablist"><button className={tab === 'work' ? 'active' : ''} onClick={() => setTab('work')} role="tab" aria-selected={tab === 'work'}>{copy.workLabel}<span>{copy.work.length}</span></button><button className={tab === 'education' ? 'active' : ''} onClick={() => setTab('education')} role="tab" aria-selected={tab === 'education'}>{copy.educationLabel}<span>{copy.education.length}</span></button></div>
      <div className="timeline">{entries.map(entry => <article className="timeline-item" key={entry.role}><time>{entry.period}</time><div><h3>{entry.role}</h3><p className="timeline-place">{entry.place}</p><p className="timeline-location">{entry.location}</p>{entry.note && <p>{entry.note}</p>}{entry.bullets && <ul>{entry.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}</div></article>)}</div>
    </div>
  </section>;
}
