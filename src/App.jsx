import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Footer from './components/Footer';
import FloatingTools from './components/FloatingTools';
import Process from './components/Process';
import { content } from './constants/data';

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'es');
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  const copy = content[language];

  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('portfolio-theme', theme); }, [theme]);
  useEffect(() => { document.documentElement.lang = language === 'es' ? 'es-CO' : 'en'; localStorage.setItem('portfolio-language', language); }, [language]);

  return <div className="site-shell">
    <a className="skip-link" href="#main">{copy.skip}</a>
    <Navbar copy={copy.nav} language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
    <main id="main"><Hero copy={copy.hero} manifesto={copy.manifesto} /><Projects copy={copy.projects} /><Process copy={copy.process} /><Experience copy={copy.path} /><About copy={copy.about} /></main>
    <Footer copy={copy.contact} footer={copy.footer} back={copy.back} /><FloatingTools label={copy.back} />
  </div>;
}
