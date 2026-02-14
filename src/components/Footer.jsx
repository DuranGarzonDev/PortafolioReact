import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, Instagram, Heart, Phone, Wheat, ChartArea, } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5 }}
    className="p-3 bg-slate-800 dark:bg-slate-800/50 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all shadow-lg border border-slate-700"
    aria-label={label}
  >
    <Icon size={20} />
  </motion.a>
);

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-slate-900 relative overflow-hidden">
      
      {/* Efecto de fondo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 text-center">
        
        {/* Título de Contacto */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-8"
        >
          Let's <span className="text-blue-500">Connect</span>
        </motion.h2>

        {/* Iconos Sociales */}
        <div className="flex justify-center gap-6 mb-12">
          {/* Reemplaza los '#' con tus enlaces reales */}
          <SocialLink href="mailto:juangarzonmani@gmail.com" icon={Mail} label="Email" />
          <SocialLink href="https://github.com/DuranGarzonDev" icon={Github} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/juangdev" icon={Linkedin} label="LinkedIn" />
          <SocialLink href="https://instagram.com/jddurangarzon" icon={Instagram} label="Instagram" />
          <SocialLink href="https://wa.me/34657230662" icon={Phone} label="Whatsapp" />
        </div>

        {/* La Frase Filosófica */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12 p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50 relative"
        >
          <span className="text-4xl text-blue-500 absolute top-4 left-4 font-serif opacity-20">“</span>
          <p className="text-slate-300 italic text-lg leading-relaxed font-light">
            {t('footer')}
          </p>
          <span className="text-4xl text-blue-500 absolute bottom-4 right-4 font-serif opacity-20">”</span>
        </motion.div>

        {/* Copyright */}
        <div className="text-slate-500 text-sm flex flex-col md:flex-row items-center justify-center gap-2">
          <p>© {new Date().getFullYear()} Juan Durán. All rights reserved.</p>
          <span className="hidden md:block">•</span>
          <p className="flex items-center gap-1">
            Built with <Heart size={12} className="text-red-500 fill-red-500" /> in Colombia
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;