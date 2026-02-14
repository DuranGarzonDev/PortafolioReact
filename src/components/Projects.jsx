import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, X } from 'lucide-react';
import { DATA } from '../constants/data';

const Projects = () => {
  const { i18n } = useTranslation();
  // Seleccionamos los datos según el idioma actual
  const projects = DATA[i18n.language].projects;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4">
        
        {/* Título de Sección con Animación */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-800 dark:text-white"
        >
          <span className="text-blue-600">&lt;</span> 
            Projects 
          <span className="text-blue-600"> /&gt;</span>
        </motion.h2>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-800 transition-all duration-300 flex flex-col"
            >
              {/* Imagen del Proyecto */}
              <div className="h-48 overflow-hidden relative cursor-pointer" onClick={() => setSelectedProject(project)}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold border border-white px-4 py-2 rounded-full">Ver Detalles</span>
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-1">
                  {project.desc}
                </p>

                {/* Tags de Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones de Acción */}
                <div className="flex gap-3 mt-auto">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="p-2 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300"
                  >
                    <Code2 size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de Detalles (Pop-up) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative border border-slate-700"
              onClick={(e) => e.stopPropagation()} // Evitar cierre al hacer click dentro
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover" />
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{selectedProject.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {selectedProject.desc}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Stack Tecnológico</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-xl font-bold transition-colors"
                >
                  Ver Proyecto Completo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;