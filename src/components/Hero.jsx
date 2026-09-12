import { ArrowDownRight, ArrowUpRight, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../constants/data';

const MotionDiv = motion.div;
const MotionFigure = motion.figure;

export default function Hero({ copy, manifesto }) {
  const reduce = useReducedMotion();
  const enter = reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: .7 } };
  return <>
    <section className="hero section-frame" id="top">
      <MotionDiv className="hero-copy" {...enter}>
        <p className="eyebrow"><span className="status-dot"/>{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="hero-intro">{copy.intro}</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">{copy.primary}<ArrowDownRight size={18}/></a><a className="button button-quiet" href={`mailto:${profile.email}`}>{copy.secondary}<ArrowUpRight size={18}/></a></div>
        <div className="hero-meta"><span><MapPin size={16}/>{copy.locationLabel} {profile.location}</span><span className="availability">{copy.availability}</span></div>
      </MotionDiv>
      <MotionFigure className="portrait-wrap" initial={reduce ? {} : { opacity: 0, rotate: 2 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: .9, delay: .15 }}>
        <div className="portrait-shape"><img src={profile.portrait} alt={copy.portraitAlt} /></div>
        <figcaption>{profile.name}<br/><span>Software · Data · Systems</span></figcaption>
      </MotionFigure>
    </section>
    <section className="manifesto section-frame" aria-labelledby="manifesto-title">
      <p className="vertical-label" id="manifesto-title">{manifesto.label}</p>
      <div><blockquote>{manifesto.text}</blockquote><ul className="principles">{manifesto.principles.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul></div>
    </section>
  </>;
}
