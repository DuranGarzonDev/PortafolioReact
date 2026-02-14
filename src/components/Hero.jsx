import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 relative"
      >
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-blue-500 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.5)] mx-auto">
          {/* Reemplaza esta URL con tu foto real más adelante */}
          <img src="./images/Hero.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse"></div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
      >
        Juan Durán
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-6"
      >
        {t('hero.role')}
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed"
      >
        {t('hero.desc')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          className="group flex items-center gap-2 px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          {t('hero.cta')}
          <ArrowDown size={18} className="group-hover:animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;