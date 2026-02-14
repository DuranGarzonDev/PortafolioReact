import React, { useState, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects'; 
import Experience from './components/Experience'; 
import SectionSeparator from './components/SectionSeparator'; 
import TechStack from './components/TechStack'; 
import About from './components/About'; 
import Footer from './components/Footer'; 
import FloatingTools from './components/FloatingTools'; 

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Al cargar, revisar preferencia del sistema o guardar en localStorage
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-blue-500 selection:text-white">
        
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main className="container mx-auto px-4 md:px-8">
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