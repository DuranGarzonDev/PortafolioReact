import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, AlertTriangle } from 'lucide-react';
import { DATA } from '../constants/data';

const ExperienceItem = ({ item, isAcademic, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative pl-8 md:pl-12 mb-8 last:mb-0"
  >
    {/* Línea conectora */}
    <div className="absolute left-[7px] top-6 bottom-[-32px] w-[2px] bg-slate-300 dark:bg-slate-800 last:hidden"></div>
    
    {/* Icono del punto */}
    <div className={`absolute -left-[9px] top-1 w-8 h-8 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-slate-900 ${isAcademic ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600'}`}>
      {isAcademic ? <GraduationCap size={16} /> : <Briefcase size={16} />}
    </div>
    
    <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all">
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-2 gap-2">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {isAcademic ? item.degree : item.role}
          </h3>
          <p className={`${isAcademic ? 'text-purple-600 dark:text-purple-400' : 'text-blue-600 dark:text-blue-400'} font-medium`}>
            {isAcademic ? item.institution : item.org}
          </p>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-col md:items-end gap-1 mt-1">
          <span className="flex items-center gap-1 bg-white dark:bg-slate-800 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700">
            <Calendar size={12}/> {item.date}
          </span>
          <span className="flex items-center gap-1"><MapPin size={12}/> {item.location}</span>
        </div>
      </div>

      <ul className="space-y-2 mt-4">
        {item.details?.map((detail, i) => (
          <li key={i} className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isAcademic ? 'bg-purple-400' : 'bg-blue-400'}`}></span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  const { i18n } = useTranslation();
  const data = DATA[i18n.language]?.experience;

  if (!data) return null;

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-800 dark:text-white"
        >
          Trayectoria <span className="text-blue-600">Profesional</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Columna 1: Experiencia Laboral */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">
              <Briefcase className="text-blue-500" /> Experiencia Laboral
            </h3>
            <div className="border-l-2 border-slate-100 dark:border-slate-800 ml-3 md:ml-0 md:border-l-0 md:pl-0">
               {data.work?.map((item, index) => (
                 <ExperienceItem key={item.id} item={item} index={index} isAcademic={false} />
               ))}
            </div>
          </div>

          {/* Columna 2: Educación */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">
              <GraduationCap className="text-purple-500" /> Formación Académica
            </h3>
            <div className="border-l-2 border-slate-100 dark:border-slate-800 ml-3 md:ml-0 md:border-l-0 md:pl-0">
               {data.education?.map((item, index) => (
                 <ExperienceItem key={item.id} item={item} index={index} isAcademic={true} />
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;