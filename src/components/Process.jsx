import { motion, useReducedMotion } from 'framer-motion';

const MotionDiv = motion.div;

export default function Process({ copy }) {
  const reduce = useReducedMotion();
  return <section className="process-scene" id="process">
    <div className="process-inner section-frame">
      <motion.div className="process-character" initial={reduce ? {} : { opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }}><img src="/images/frame-de-pie.png" alt={copy.illustrationAlt} loading="lazy" /></motion.div>
      <div className="process-copy"><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}</h2><p className="process-intro">{copy.intro}</p><div className="process-steps">{copy.steps.map(step => <MotionDiv className="process-step" key={step.number} initial={reduce ? {} : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></MotionDiv>)}</div></div>
    </div>
  </section>;
}
