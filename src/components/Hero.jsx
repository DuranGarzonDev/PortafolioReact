import { ArrowDown } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../constants/data';

const MotionDiv = motion.div;

export default function Hero({ copy, manifesto }) {
  const reduce = useReducedMotion();

  return <>
    <section className="cover" id="top" aria-label={copy.eyebrow}>
      <picture className="cover-art">
        <source media="(max-width: 700px)" srcSet="/images/web-mobile-main.jpg" />
        <img src="/images/web-pc-main.jpg" alt="" fetchPriority="high" />
      </picture>
      <div className="cover-shade" />
      <MotionDiv className="cover-actions" initial={reduce ? {} : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: .6 }}>
        <a href="#projects">{copy.primary}<ArrowDown size={17}/></a>
        <span>{profile.location}</span>
      </MotionDiv>
    </section>

    <section className="opening-scene section-frame">
      <div className="opening-copy">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="hero-intro">{copy.intro}</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">{copy.primary}</a><a className="button button-quiet" href={`mailto:${profile.email}`}>{copy.secondary}</a></div>
      </div>
      <motion.figure className="character-frame" initial={reduce ? {} : { opacity: 0, y: 50, rotate: 2 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .7 }}>
        <img src="/images/frame-personal.png" alt={copy.illustrationAlt} loading="lazy" />
      </motion.figure>
    </section>

    <section className="manifesto section-frame" aria-labelledby="manifesto-title">
      <p className="scene-number">01 / IDEA</p>
      <div><p className="eyebrow" id="manifesto-title">{manifesto.label}</p><blockquote>{manifesto.text}</blockquote><ul className="principles">{manifesto.principles.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul></div>
    </section>
  </>;
}
