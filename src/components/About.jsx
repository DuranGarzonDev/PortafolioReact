import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { User, CheckCircle2 } from 'lucide-react';
import { DATA } from '../constants/data';

const About = () => {
  const { i18n } = useTranslation();
  const data = DATA[i18n.language]?.about;

  if (!data) return null;

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Foto Sticker y Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-3">
              <User className="text-blue-500" size={32} />
              {data.title}
            </h2>

            {/* Texto Bio */}
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {data.bio}
            </p>

            {/* Foto Estilo Sticker */}
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-300"></div>
              <img 
                src="/images/Cara.jpg" 
                alt="Profile" 
                className="relative w-64 h-64 object-cover rounded-2xl border-4 border-white dark:border-slate-800 shadow-xl rotate-[-3deg] group-hover:rotate-0 transition-transform duration-300" 
              />
            </div>
          </motion.div>

          {/* Columna Derecha: Soft Skills */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
              {data.skillsTitle}
            </h3>

            <div className="space-y-4">
              {data.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-200 text-lg">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;