import React, { useState, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// ... tus imports (Navbar, Hero, etc.) siguen igual ...
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import About from './components/About';
import Footer from './components/Footer';
import FloatingTools from './components/FloatingTools';
import SectionSeparator from './components/SectionSeparator';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <I18nextProvider i18n={i18n}>
      {/* 👇 AQUÍ ESTÁ EL TRUCO: Agregamos 'overflow-x-hidden' al final de las clases */}
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
        
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        {/* También aseguramos que el main tenga ancho completo pero restringido */}
        <main className="w-full max-w-[100vw] overflow-hidden">
          <Hero />
          <SectionSeparator />
          
          <Projects />
          <SectionSeparator />
          
          <Experience />
          <SectionSeparator />
          
          <TechStack />
          <SectionSeparator />
          
          <About />
        </main>

        <Footer />
        <FloatingTools />

      </div>
    </I18nextProvider>
  );
}