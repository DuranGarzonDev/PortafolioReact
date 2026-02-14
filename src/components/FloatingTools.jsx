import React, { useState, useEffect } from 'react';
import { ArrowUp, Type, Eye, Accessibility } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingTools = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  // Controlar Scroll
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) setShowScroll(true);
      else setShowScroll(false);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Controlar Efectos Globales
  useEffect(() => {
    document.documentElement.style.filter = grayscale ? 'grayscale(100%)' : 'none';
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [grayscale, fontSize]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-end">
      
      {/* Menú de Accesibilidad */}
      <AnimatePresence>
        {showMenu && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 mb-2 min-w-[200px]"
          >
            <h4 className="text-xs font-bold text-slate-400 uppercase mb-3 tracking-wider">Accesibilidad</h4>
            
            {/* Control Tamaño Letra */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-700 dark:text-slate-200 flex items-center gap-2">
                <Type size={16} /> Tamaño
              </span>
              <div className="flex gap-1 bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
                <button onClick={() => setFontSize(Math.max(80, fontSize - 10))} className="px-2 hover:bg-white dark:hover:bg-slate-600 rounded text-sm">-</button>
                <button onClick={() => setFontSize(Math.min(130, fontSize + 10))} className="px-2 hover:bg-white dark:hover:bg-slate-600 rounded text-sm">+</button>
              </div>
            </div>

            {/* Control Grayscale */}
            <button 
              onClick={() => setGrayscale(!grayscale)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${grayscale ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200'}`}
            >
              <span className="flex items-center gap-2"><Eye size={16}/> Escala de Grises</span>
              {grayscale && <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botones Principales */}
      <div className="flex gap-3">
        {/* Botón Accesibilidad */}
        <button 
          onClick={() => setShowMenu(!showMenu)}
          className={`p-3 rounded-full shadow-lg transition-all ${showMenu ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-white hover:bg-slate-50'}`}
          title="Herramientas de Accesibilidad"
        >
          <Accessibility size={24} />
        </button>

        {/* Botón Subir */}
        <AnimatePresence>
          {showScroll && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={scrollToTop}
              className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all hover:-translate-y-1"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default FloatingTools;