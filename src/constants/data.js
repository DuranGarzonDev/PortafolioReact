// Iconos genéricos (Lucide)
import { Cpu, Wifi, Phone } from 'lucide-react';

// Iconos de Marcas (React Icons)
import { 
  SiReact, 
  SiAngular, 
  SiPython, 
  SiNodedotjs, 
  SiPostgresql, 
  SiMongodb, 
  SiAmazon, // <--- CAMBIO AQUÍ (Antes era SiAmazonaws)
  SiGit, 
  SiCplusplus, 
  SiTailwindcss, 
  SiCss3, 
  SiLinux 
} from 'react-icons/si';

export const DATA = {
  es: {
    hero: {
      role: "Desarrollador de Software & Ing. Sistemas",
      desc: "Especializado en soluciones de software eficientes, arquitectura escalable y optimización de redes. Experto en transformar lógica compleja en código limpio.",
      cta: "Ver Proyectos",
    },
    about: {
      title: "Sobre Mí",
      bio: "Ingeniero de Sistemas enfocado en el desarrollo de soluciones de software eficientes. Cuento con experiencia práctica en mantenimiento de aplicaciones y un historial comprobado de éxito en concursos de desarrollo, donde lideré el diseño de arquitectura de software. Busco aplicar mis conocimientos de Python, Angular y Cloud (AWS), junto con mis habilidades de resolución de problemas, para contribuir a la creación de productos tecnológicos de alto impacto.",
      skillsTitle: "Habilidades Blandas",
      skills: [
        "Comunicación Asertiva",
        "Resolución de Problemas",
        "Liderazgo y Trabajo en Equipo",
        "Ética Profesional",
        "Gestión de Proyectos"
      ]
    },
    experience: {
      work: [
        {
          id: 1,
          role: "Junior Software Developer",
          org: "Institución Educativa Rural Los Mesones",
          date: "2022 - 2024",
          location: "Colombia (Remoto)",
          details: [
            "Diseñé e implementé scripts de Python para diagnosticar y resolver más de 15 incidentes críticos, aumentando la continuidad operativa en un 70%.", 
            "Desarrollé y mantuve una base de conocimiento centralizada en Notion, reduciendo el tiempo de resolución de tickets de soporte en un 40%.", 
            "Colaboré con un equipo multifuncional para recopilar requisitos y entregar soluciones de software alineadas a las necesidades del usuario."
          ]
        }
      ],
      education: [
        {
          id: 1,
          degree: "Grado en Ingeniería Informática (Movilidad)",
          institution: "Universidad de La Laguna",
          date: "Sep 2025 - Feb 2026",
          location: "Tenerife, España",
          details: ["3° Puesto Competencia Local de Desarrollo", "Computación de Alto Rendimiento", "Colaboración Internacional"]
        },
        {
          id: 2,
          degree: "Ingeniería de Sistemas",
          institution: "Universidad Francisco de Paula Santander",
          date: "2022 - Presente",
          location: "Ocaña, Colombia",
          details: ["Enfoque en Arquitectura de Software", "Líder de Proyectos Académicos", "Promedio Distinguido"]
        },
        {
          id: 3,
          degree: "Técnico en Sistemas",
          institution: "Instituto Técnico Industrial Lucio Pabón Núñez",
          date: "2019 - 2021",
          location: "Ocaña, Colombia",
          details: ["Mantenimiento de Infraestructura TI", "Soporte de Hardware y Software", "Fundamentos de Programación"]
        }
      ]
    },
    projects: [
      {
        id: 1,
        title: "Bwelfare",
        desc: "Plataforma integral dirigida al manejo de los recursos humanos dentro de las organizaciones.",
        tech: ["Angular", "PostgreSQL", "MongoDB", "AWS", "Git"],
        image: "https://placehold.co/600x400/2563eb/ffffff?text=Bwelfare",
        demoLink: "https://github.com/DuranGarzonDev/BWelfareBusiness",
      },
      {
        id: 2,
        title: "Optimización de Conectividad Jamundí",
        desc: "Propuesta técnica presentada a MinTIC para solucionar problemas críticos de red en zonas rurales.",
        tech: ["Network Analysis", "Python", "Packet Tracer", "Data Viz"],
        image: "https://placehold.co/600x400/dc2626/ffffff?text=Proyecto+MinTIC",
        demoLink: "https://github.com/DuranGarzonDev/jamundi-conectada",
      },
      {
        id: 3,
        title: "Advent of Code Solutions",
        desc: "Resolución de algoritmos complejos de optimización y lógica matemática (Reactor, Christmas Tree Farm).",
        tech: ["Python", "C++", "Algoritmos", "Lógica"],
        image: "https://placehold.co/600x400/05b4a9/ffffff?text=Algoritmos",
        demoLink: "https://github.com/DuranGarzonDev/AdventoCodeProgram",
      }
    ],
    techStackTitle: "Stack Tecnológico",
    footer: "No se disfruta el progreso, realmente es difícil, pero considera el cómo te sentirás con el resultado de los logros, gracias a ese progreso que pesa el día de hoy."
  },
  en: {
    hero: {
      role: "Software Developer & Systems Engineer",
      desc: "Specialized in efficient software solutions, scalable architecture, and network optimization. Expert in transforming complex logic into clean code.",
      cta: "View Projects",
    },
    about: {
      title: "About Me",
      bio: "Systems Engineer focused on efficient software solution development. I have practical experience in application maintenance and a proven track record of success in development competitions, leading software architecture design. I aim to apply my Python, Angular, and Cloud (AWS) knowledge, along with my problem-solving skills, to contribute to high-impact technological products.",
      skillsTitle: "Soft Skills",
      skills: [
        "Assertive Communication",
        "Problem Solving",
        "Leadership & Teamwork",
        "Work Ethic",
        "Project Management"
      ]
    },
    experience: {
      work: [
        {
          id: 1,
          role: "Junior Software Developer",
          org: "Rural Educational Institution 'Los Mesones'",
          date: "2022 - 2024",
          location: "Colombia (Remote)",
          details: [
            "Designed and implemented Python scripts to diagnose and resolve over 15 critical software incidents, increasing system uptime by 70%.", 
            "Developed and maintained a centralized knowledge base using Notion, reducing technical support ticket resolution time by 40%.", 
            "Collaborated with a cross-functional team to gather requirements and deliver software solutions that met user needs."
          ]
        }
      ],
      education: [
        {
          id: 1,
          degree: "Computer Engineering Degree (Intl. Mobility)",
          institution: "University of La Laguna",
          date: "Sep 2025 - Feb 2026",
          location: "Tenerife, Spain",
          details: ["3rd Place Local Dev Competition", "High Performance Computing", "International Collaboration"]
        },
        {
          id: 2,
          degree: "Systems Engineering",
          institution: "Universidad Francisco de Paula Santander",
          date: "2022 - Present",
          location: "Ocaña, Colombia",
          details: ["Software Architecture Focus", "Academic Project Lead", "Distinguished GPA"]
        },
        {
          id: 3,
          degree: "Systems Technician",
          institution: "Lucio Pabón Núñez Technical Institute",
          date: "2019 - 2021",
          location: "Ocaña, Colombia",
          details: ["IT Infrastructure Maintenance", "Hardware & Software Support", "Programming Fundamentals"]
        }
      ]
    },
    projects: [
       {
        id: 1,
        title: "Bwelfare",
        desc: "Comprehensive platform aimed at Human Resources management within organizations.",
        tech: ["Angular", "PostgreSQL", "MongoDB", "AWS", "Git"],
        image: "https://placehold.co/600x400/2563eb/ffffff?text=Bwelfare",
        demoLink: "https://github.com/DuranGarzonDev/BWelfareBusiness",
      },
      {
        id: 2,
        title: "Jamundí Connectivity Optimization",
        desc: "Technical proposal presented to MinTIC to solve critical network issues in rural areas.",
        tech: ["Network Analysis", "Python", "Data Analysis"],
        image: "https://placehold.co/600x400/dc2626/ffffff?text=MinTIC+Project",
        demoLink: "https://github.com/DuranGarzonDev/jamundi-conectada",
      },
      {
        id: 3,
        title: "Advent of Code Solutions",
        desc: "Resolution of complex optimization algorithms and mathematical logic (Reactor, Christmas Tree Farm).",
        tech: ["Python", "Algorithms", "Logic"],
        image: "https://placehold.co/600x400/05b4a9/ffffff?text=Algorithms",
        demoLink: "https://github.com/DuranGarzonDev/AdventoCodeProgram",
      }
    ],
    techStackTitle: "Tech Stack",
    footer: "Progress is not always enjoyable; it is truly hard. But consider how you will feel with the results of your achievements, thanks to the weight of the progress you carry today."
  },
  // Global Data
  techStack: [
    { name: "React", icon: SiReact, time: "2 Years" },
    { name: "Angular", icon: SiAngular, time: "1 Year" },
    { name: "Python", icon: SiPython, time: "3 Years" },
    { name: "Node.js", icon: SiNodedotjs, time: "1 Year" },
    { name: "PostgreSQL", icon: SiPostgresql, time: "2 Years" },
    { name: "MongoDB", icon: SiMongodb, time: "1 Year" },
    { name: "AWS", icon: SiAmazon, time: "1 Year" }, // <--- CAMBIO AQUÍ TAMBIÉN
    { name: "Git", icon: SiGit, time: "3 Years" },
    { name: "C++", icon: SiCplusplus, time: "1 Year" },
    { name: "Tailwind CSS", icon: SiTailwindcss, time: "1 Year" },
    { name: "CSS3", icon: SiCss3, time: "3 Years" },
    { name: "Linux", icon: SiLinux, time: "3 Years" }, 
    { name: "Systems Ops", icon: Cpu, time: "4 Years" },
    { name: "Networks", icon: Wifi, time: "3 Years" },
  ]
};