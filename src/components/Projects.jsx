import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { projects } from '../constants/data';

const MotionArticle = motion.article;
const MotionDiv = motion.div;

export default function Projects({ copy }) {
  const [selected, setSelected] = useState(null);
  const closeRef = useRef(null);
  const returnFocusRef = useRef(null);
  const reduce = useReducedMotion();
  useEffect(() => { if (!selected) return; const onKey = e => e.key === 'Escape' && setSelected(null); document.body.classList.add('modal-open'); window.addEventListener('keydown', onKey); closeRef.current?.focus(); return () => { document.body.classList.remove('modal-open'); window.removeEventListener('keydown', onKey); returnFocusRef.current?.focus(); }; }, [selected]);
  const openCase = (project, item) => { returnFocusRef.current = document.activeElement; setSelected({ project, item }); };
  return <section className="projects section-frame" id="projects">
    <div className="section-heading"><div><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}</h2></div><p>{copy.intro}</p></div>
    <div className="project-list">{projects.map((project, index) => { const item = copy.items[project.id] || contentFallback(project.id); return <MotionArticle className={`project-row accent-${project.accent}`} key={project.id} initial={reduce ? {} : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}>
      <div className="project-index">0{index + 1}<span>{project.year}</span></div>
      <div className="project-main"><p className="project-category">{item.category}</p><h3>{item.title}</h3><p>{item.summary}</p><ul className="tag-list">{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul></div>
      <button className="project-open" onClick={() => openCase(project, item)} aria-label={`${copy.details}: ${item.title}`}>{copy.details}<ArrowUpRight size={20}/></button>
    </MotionArticle>; })}</div>
    <AnimatePresence>{selected && <MotionDiv className="case-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={e => e.target === e.currentTarget && setSelected(null)}>
      <MotionArticle className="case-panel" role="dialog" aria-modal="true" aria-labelledby="case-title" initial={reduce ? {} : { x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 28, stiffness: 230 }}>
        <button ref={closeRef} className="case-close" onClick={() => setSelected(null)}><X size={18}/>{copy.close}</button><p className="project-category">{selected.item.category} · {selected.project.year}</p><h2 id="case-title">{selected.item.title}</h2><p className="case-lead">{selected.item.summary}</p>
        {['problem','approach','outcome'].map(key => <div className="case-section" key={key}><span>{copy.labels[key]}</span><p>{selected.item[key]}</p></div>)}
        <div className="case-links"><a className="button button-primary" href={selected.project.repo} target="_blank" rel="noreferrer">{copy.repository}<ArrowUpRight size={18}/></a>{selected.project.secondaryRepo && <a className="button button-quiet" href={selected.project.secondaryRepo} target="_blank" rel="noreferrer">{copy.secondRepository}<ArrowUpRight size={18}/></a>}</div>
      </MotionArticle></MotionDiv>}</AnimatePresence>
  </section>;
}

const contentFallback = id => ({ category: 'Proyecto', title: id, summary: '', problem: '', approach: '', outcome: '' });
