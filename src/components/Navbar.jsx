import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { profile } from '../constants/data';

export default function Navbar({ copy, language, setLanguage, theme, setTheme }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = () => setOpen(false); window.addEventListener('hashchange', close); return () => window.removeEventListener('hashchange', close); }, []);
  const links = [['#projects', copy.work], ['#path', copy.path], ['#about', copy.about], ['#contact', copy.contact]];
  return <header className="topbar">
    <a className="wordmark" href="#top" aria-label={copy.home}><span>JD</span><strong>{profile.shortName}</strong></a>
    <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Navegación principal">
      {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
    <div className="nav-actions">
      <button className="text-control" onClick={() => setLanguage(language === 'es' ? 'en' : 'es')} aria-label={copy.changeLanguage}>{language === 'es' ? 'EN' : 'ES'}</button>
      <button className="icon-control" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={copy.changeTheme}>{theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}</button>
      <button className="icon-control menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={copy.menu}>{open ? <X size={20}/> : <Menu size={20}/>}</button>
    </div>
  </header>;
}
