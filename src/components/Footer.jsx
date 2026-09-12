import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../constants/data';

export default function Footer({ copy, footer, back }) {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800); };
  return <footer id="contact"><div className="contact section-frame"><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}</h2><p>{copy.text}</p><div className="contact-actions"><a className="button button-inverse" href={`mailto:${profile.email}`}><Mail size={18}/>{copy.email}</a><button className="button button-line" onClick={copyEmail}>{copied ? <Check size={18}/> : <Copy size={18}/>} {copied ? copy.copied : copy.copy}</button></div><span className="timezone">{copy.location}</span></div>
    <div className="footer-bottom section-frame"><p>{footer}</p><div><a href={profile.social.github} target="_blank" rel="noreferrer"><Github size={17}/>GitHub</a><a href={profile.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/>LinkedIn</a><a href={`mailto:${profile.email}`}>Email<ArrowUpRight size={17}/></a></div><a href="#top">{back}</a></div>
  </footer>;
}
