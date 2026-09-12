export default function About({ copy }) {
  return <section className="about section-frame" id="about">
    <div className="about-copy"><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}</h2>{copy.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
    <div className="capabilities"><div><h3>{copy.focusTitle}</h3><ol>{copy.focuses.map((focus, i) => <li key={focus}><span>{String(i + 1).padStart(2, '0')}</span>{focus}</li>)}</ol></div><div><h3>{copy.stackTitle}</h3><ul className="stack-list">{copy.stack.map(item => <li key={item}>{item}</li>)}</ul></div></div>
  </section>;
}
