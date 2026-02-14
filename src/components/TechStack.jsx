import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { DATA } from '../constants/data';

const TechStack = () => {
  const { i18n } = useTranslation();
  const techData = DATA.techStack; 

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-800 dark:text-white"
        >
          Tech <span className="text-blue-600">Stack</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {techData.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-[0_5px_15px_rgba(59,130,246,0.15)] transition-all cursor-default"
            >
              {/* Etiqueta Flotante de Experiencia */}
              <div className="absolute -top-3 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg whitespace-nowrap z-10 pointer-events-none">
                {tech.time}
              </div>

              {/* ----- ICONO CORREGIDO ----- */}
              {/* Definimos los colores aquí: oscuro para light mode, BLANCO para dark mode, y azul para hover */}
              <div className="mb-4 text-slate-700 dark:text-white group-hover:text-blue-500 transition-colors duration-300">
                {/* LA CLAVE: style={{ color: 'currentColor' }} 
                    Esto obliga al icono a usar el color de texto definido arriba con Tailwind,
                    ignorando su color original (negro).
                */}
                <tech.icon size={42} style={{ color: 'currentColor' }} />
              </div>

              {/* Nombre */}
              <h3 className="font-semibold text-sm md:text-base text-slate-700 dark:text-slate-200 group-hover:text-blue-500 transition-colors">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;