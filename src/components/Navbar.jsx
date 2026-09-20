import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { profile } from '../constants/data';

export default function Navbar({ copy, language, setLanguage, theme, setTheme }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = () => setOpen(false); window.addEventListener('hashchange', close); return () => window.removeEventListener('hashchange', close); }, []);
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const closeWithEscape = (event) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', closeWithEscape);
    return () => { document.body.classList.remove('menu-open'); window.removeEventListener('keydown', closeWithEscape); };
  }, [open]);
  const links = [['#projects', copy.work], ['#path', copy.path], ['#about', copy.about], ['#contact', copy.contact]];
  return <header className={open ? 'topbar menu-open' : 'topbar'}>
    <a className="wordmark" href="#top" aria-label={copy.home}><span>JD</span><strong>{profile.shortName}</strong></a>
    <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Navegación principal">
      <div className="nav-menu-head"><span>{copy.menu}</span><span>01—04</span></div>
      <div className="nav-link-list">{links.map(([href, label], index) => <a key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span><strong>{label}</strong><ArrowUpRight aria-hidden="true" /></a>)}</div>
      <div className="nav-menu-foot"><span>{profile.shortName}<br />{profile.location}</span><a href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>{copy.contact}<ArrowUpRight aria-hidden="true" /></a></div>
    </nav>
    <div className="nav-actions">
      <button className="text-control" onClick={() => setLanguage(language === 'es' ? 'en' : 'es')} aria-label={copy.changeLanguage}>{language === 'es' ? 'EN' : 'ES'}</button>
      <button className="icon-control" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={copy.changeTheme}>{theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}</button>
      <button className="icon-control menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={copy.menu}>{open ? <X size={20}/> : <Menu size={20}/>}</button>
    </div>
  </header>;
}
