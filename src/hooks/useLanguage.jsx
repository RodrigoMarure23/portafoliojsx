import { createContext, useContext, useState, useEffect } from "react";
const LanguageContext = createContext(undefined);
export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem("language");
    return saved === "en" || saved === "es" ? saved : "en";
  });
  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };
  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      downloadCV: "Download CV",
    },

    hero: {
      tag: "<about />",
      available: "Available for opportunities",
      name: "Rodrigo Marure Sánchez",
      title: "Full Stack Developer",
      description:
        "Specialized in designing, developing, and deploying robust web solutions using React, Node.js, and Microservices architecture. 3+ years building scalable systems and automating business processes.",
      viewProjects: "View Projects",
      getInTouch: "Get In Touch",
    },
    skills: {
      tag: "Skills 🫳",
      title: "Technical",
      titleHighlight: "Expertise",
      subtitle: "Full-stack capabilities with 3+ years of hands-on experience",
      categories: {
        frontend: {
          title: "Frontend",
          skills: {
            react: "React.js",
            redux: "Redux",
            javascript: "JavaScript",
            html: "HTML5/CSS3",
            ui: "UI/UX Design",
          },
        },
        backend: {
          title: "Backend & Databases",
          skills: {
            node: "Node.js",
            rest: "REST APIs",
            mysql: "MySQL",
            postgres: "PostgreSQL",
            mongo: "MongoDB",
          },
        },
        architecture: {
          title: "Architecture",
          skills: {
            microservices: "Microservices",
            docker: "Docker",
            cicd: "CI/CD",
            git: "Git/GitHub",
            agile: "Agile/Scrum",
          },
        },
        integrations: {
          title: "Integrations",
          skills: {
            sap: "SAP",
            emarsys: "Emarsys",
            teamwork: "Teamwork",
            analytics: "Google Analytics",
            apis: "Third-party APIs",
          },
        },
        automation: {
          title: "Automation",
          skills: {
            digitization: "Process Digitization",
            email: "Email Automation",
            workflow: "Workflow Optimization",
            sync: "Data Sync",
          },
        },
        testing: {
          title: "Testing & Tools",
          skills: {
            postman: "Postman",
            e2e: "End-to-End Testing",
            debug: "Debugging",
            jira: "Jira",
          },
        },
      },
    },
    projects: {
      tag: "Projects 📚",
      title: "Featured",
      titleHighlight: "Projects",
      subtitle:
        "Real-world solutions delivering measurable business impact at Petco",
      items: [
        {
          title: "Petcozoo - Inventory Management",
          description:
            "Comprehensive platform for inventory control in stores, supplier management, and automated reporting (weekly, monthly, annual). Includes user communication (notifications and chat), role management, and SAP integration for product data synchronization.",
          tech: ["React", "Node.js", "Docker", "MongoDB", "SAP", "Emarsys"],
          impact: "Real-time inventory tracking across multiple locations",
          category: "Enterprise System",
        },
        {
          title: "Process Digitization Platform",
          description:
            "Complete automation of contracts, tickets, and employee schedules (hours, breaks, branch rotations). Implemented modern server infrastructure, reducing process time by 70% and minimizing human errors with token validation and file origin control.",
          tech: ["Node.js", "React", "Docker", "Security Tokens"],
          impact: "70% reduction in processing time",
          category: "Automation",
        },
        {
          title: "Corporate Management Suite",
          description:
            "Internal tools for managing coupons, planograms, floorplans, and contracts (suppliers, influencers, hiring processes). Built with microservices architecture and CI/CD pipelines for scalability and efficient maintenance.",
          tech: [
            "React.js",
            "Node.js",
            "MongoDB",
            "MySQL",
            "SAP",
            "Microservices",
          ],
          impact: "Streamlined operations for multiple departments",
          category: "Business Tools",
        },
        {
          title: "Vaccine Management System",
          description:
            "Complete platform for appointment management, role administration, payments, and contracts. Features security validations, role management, and process automation to improve operational efficiency.",
          tech: ["React.js", "Node.js", "MongoDB", "Docker", "REST APIs"],
          impact: "Automated healthcare appointment system",
          category: "Healthcare",
        },
        {
          title: "Modular Intranet",
          description:
            "Internal communication channel centralizing news, recognition, and access to corporate tools (SAP, vacations, contracts, internal developments, org charts, calendars). Scalable microservices architecture with continuous CI/CD.",
          tech: ["React.js", "Node.js", "Docker", "Microservices"],
          impact: "Unified communication hub for entire organization",
          category: "Internal Platform",
        },
        {
          title: "System Integrations",
          description:
            "Implementation of connections between corporate platforms including SAP, Teamwork, Google Analytics, and Emarsys. Enables automation of push notifications, dynamic email sending, and data synchronization.",
          tech: ["Node.js", "SAP", "Teamwork", "Emarsys", "Google Analytics"],
          impact: "Seamless data flow across enterprise systems",
          category: "Integration",
        },
      ],
    },
    experience: {
      tag: "Experience 😎",
      title: "Professional",
      titleHighlight: "Journey",
      subtitle: "Building scalable systems and delivering business value",
      educationTitle: "Education",
      languagesTitle: "Languages",
      jobs: [
        {
          role: "Web Developer",
          company: "Petco",
          period: "Oct 2023 - Nov 2025",
          type: "Full-time",
          achievements: [
            "Led end-to-end web development projects from conception to production deployment",
            "Collaborated with multiple departments to create digital solutions optimizing internal processes",
            "Implemented scalable tools and automations increasing operational efficiency and reducing human errors",
            "Built solutions using React.js, Node.js, microservices, CI/CD, and Docker",
            "Improved user experience and strengthened corporate operations through innovative digital solutions",
          ],
        },
        {
          role: "Web Development Intern",
          company: "Petco",
          period: "Apr 2023 - Oct 2023",
          type: "Internship",
          achievements: [
            "Developed internal web platforms for comprehensive store personnel management",
            "Implemented modules for schedule control, incidents, and breaks",
            "Created automatic approval system via email integrated with HR workflows",
            "Built with React.js for agile, responsive interface and Node.js for backend validations",
            "Applied functional design principles, data security, and operational efficiency",
          ],
        },
      ],
      education: {
        degree: "Computer Engineering",
        institution: "National Autonomous University of Mexico (UNAM)",
        period: "Apr 2019 - Oct 2023",
        location: "Mexico City",
      },
      languages: {
        spanish: {
          name: "Spanish",
          level: "Native",
        },
        english: {
          name: "English",
          level: "B1 - Intermediate",
        },
      },
    },
    services: {
      tag: "<services />",
      title: "What I",
      titleHighlight: "Deliver",
      subtitle:
        "Comprehensive technical solutions to accelerate your digital transformation",
      items: [
        {
          title: "Custom Web Development",
          description:
            "End-to-end development of robust web applications using React, Node.js, and modern JavaScript. From concept to production deployment with focus on scalability and performance.",
          highlights: [
            "React.js & Redux",
            "Node.js APIs",
            "Responsive Design",
            "Performance Optimization",
          ],
        },
        {
          title: "System Integration",
          description:
            "Seamless integration with enterprise platforms including SAP, Emarsys, Teamwork, and Google Analytics. Expert in connecting disparate systems and automating data flow.",
          highlights: [
            "SAP Integration",
            "Third-party APIs",
            "Data Synchronization",
            "Real-time Updates",
          ],
        },
        {
          title: "Process Automation",
          description:
            "Digital transformation through intelligent automation. Streamline workflows, eliminate manual tasks, and reduce processing time by up to 70% with custom automation solutions.",
          highlights: [
            "Workflow Digitization",
            "Email Automation",
            "Document Processing",
            "Token Security",
          ],
        },
        {
          title: "Microservices Architecture",
          description:
            "Design and implementation of scalable microservices infrastructure. Build maintainable, distributed systems with Docker, CI/CD pipelines, and modern DevOps practices.",
          highlights: [
            "Docker Containers",
            "CI/CD Pipelines",
            "Scalable Design",
            "Git Workflows",
          ],
        },
        {
          title: "Database Solutions",
          description:
            "Expert database design and optimization for both relational (MySQL, PostgreSQL) and non-relational (MongoDB) systems. Ensure data integrity, performance, and scalability.",
          highlights: [
            "MySQL & PostgreSQL",
            "MongoDB",
            "Data Modeling",
            "Query Optimization",
          ],
        },
        {
          title: "Agile Development",
          description:
            "Full SDLC expertise with Agile methodologies (Scrum/Kanban). From requirements analysis to deployment, delivering iterative value with continuous integration and testing.",
          highlights: [
            "Scrum & Kanban",
            "Jira Management",
            "Code Reviews",
            "Quality Assurance",
          ],
        },
      ],
    },
    contact: {
      tag: "Contact 📲📩",
      title: "Let's Build",
      titleHighlight: "Together",
      subtitle:
        "Open to full-time opportunities, contract work, and interesting projects. Let's discuss how I can help your team succeed.",
      emailTitle: "Email Me",
      phoneTitle: "Call Me",
      linkedinTitle: "LinkedIn",
      linkedinSubtitle: "Connect professionally",
      githubTitle: "GitHub",
      githubSubtitle: "View my code",
      downloadCV: "Download Full CV",
      quickMessage: "Quick Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      sendButton: "Send Message",
    },
  },
  es: {
    nav: {
      about: "Acerca",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
      downloadCV: "Descargar CV",
    },
    hero: {
      available: "🏢 Disponible para oportunidades",
      name: "Rodrigo Marure Sánchez",
      title: "Desarrollador Full Stack | Frontend + Backend",
      description:
        "Especializado en el diseño, desarrollo y despliegue de soluciones web robustas utilizando React, Node.js y arquitectura de Microservicios. Más de 3 años construyendo sistemas escalables y automatizando procesos de negocio.",

      viewProjects: "Ver Proyectos",
      getInTouch: "Contactar",
    },
    skills: {
      tag: "Habilidades 🫳",
      title: "Experiencia",
      titleHighlight: "Técnica",
      subtitle:
        "Capacidades full-stack con más de 3 años de experiencia práctica",
      categories: {
        frontend: {
          title: "Frontend",
          skills: {
            react: "React.js",
            redux: "Redux",
            javascript: "JavaScript",
            html: "HTML5/CSS3",
            ui: "Diseño UI/UX",
          },
        },
        backend: {
          title: "Backend y Bases de Datos",
          skills: {
            node: "Node.js",
            rest: "APIs REST",
            mysql: "MySQL",
            postgres: "PostgreSQL",
            mongo: "MongoDB",
          },
        },
        architecture: {
          title: "Arquitectura",
          skills: {
            microservices: "Microservicios",
            docker: "Docker",
            cicd: "CI/CD",
            git: "Git/GitHub",
            agile: "Agile/Scrum",
          },
        },
        integrations: {
          title: "Integraciones",
          skills: {
            sap: "SAP",
            emarsys: "Emarsys",
            teamwork: "Teamwork",
            analytics: "Google Analytics",
            apis: "APIs de terceros",
          },
        },
        automation: {
          title: "Automatización",
          skills: {
            digitization: "Digitalización de Procesos",
            email: "Automatización de Correos",
            workflow: "Optimización de Flujos",
            sync: "Sincronización de Datos",
          },
        },
        testing: {
          title: "Testing y Herramientas",
          skills: {
            postman: "Postman",
            e2e: "Testing End-to-End",
            debug: "Depuración",
            jira: "Jira",
          },
        },
      },
    },
    projects: {
      tag: "Proyectos 📚",
      title: "Proyectos",
      titleHighlight: "Destacados",
      subtitle: "Soluciones del mundo real entregando impacto medible en Petco",
      items: [
        {
          title: "Petcozoo - Gestión de Inventarios",
          description:
            "Plataforma integral para el control de inventarios en tiendas, gestión de proveedores y reportes automatizados (semanales, mensuales, anuales). Incluye comunicación entre usuarios (notificaciones y chat), gestión de roles e integración con SAP para sincronización de datos de productos.",
          tech: ["React", "Node.js", "Docker", "MongoDB", "SAP", "Emarsys"],
          impact:
            "Seguimiento de inventario en tiempo real en múltiples ubicaciones",
          category: "Sistema Empresarial",
        },
        {
          title: "Plataforma de Digitalización de Procesos",
          description:
            "Automatización completa de contratos, tickets y horarios de empleados (horas, descansos, rotaciones entre sucursales). Implementación de infraestructura de servidor moderna, reduciendo el tiempo de proceso en un 70% y minimizando errores humanos con validación de tokens y control de origen de archivos.",
          tech: ["Node.js", "React", "Docker", "Tokens de Seguridad"],
          impact: "70% de reducción en tiempo de procesamiento",
          category: "Automatización",
        },
        {
          title: "Suite de Gestión Corporativa",
          description:
            "Herramientas internas para gestión de cupones, planogramas, floorplans y contratos (proveedores, influencers, procesos de contratación). Construido con arquitectura de microservicios y pipelines CI/CD para escalabilidad y mantenimiento eficiente.",
          tech: [
            "React.js",
            "Node.js",
            "MongoDB",
            "MySQL",
            "SAP",
            "Microservicios",
          ],
          impact: "Operaciones optimizadas para múltiples departamentos",
          category: "Herramientas de Negocio",
        },
        // AÑADIDO: Plataforma de control de promociones
        {
          title: "Plataforma de Control de Promociones",
          description:
            "Diseño e implementación Full Stack de una plataforma robusta para la administración centralizada de promociones en diversas marcas. Incluye la generación masiva de cupones, gestión de envíos de correos electrónicos, seguimiento en tiempo real del uso de cupones y generación de reportes detallados para la explotación y análisis de datos de marketing.",
          tech: [
            "React.js",
            "Node.js",
            "APIs REST",
            "PostgreSQL/MySQL", // Asumo un RDBMS por los reportes
            "Reportes",
            "Emailing",
          ],
          impact:
            "Administración integral de la estrategia de Marketing Digital.",
          category: "Marketing y Data",
        },
        {
          title: "Sistema de Gestión de Vacunas",
          description:
            "Plataforma completa para gestión de citas, administración de roles, pagos y contratos. Incluye validaciones de seguridad, gestión de roles y automatización de procesos para mejorar la eficiencia operativa.",
          tech: ["React.js", "Node.js", "MongoDB", "Docker", "APIs REST"],
          impact: "Sistema automatizado de citas médicas",
          category: "Salud",
        },
        {
          title: "Intranet Modular",
          description:
            "Canal de comunicación interna centralizando noticias, reconocimientos y acceso a herramientas corporativas (SAP, vacaciones, contratos, desarrollos internos, organigramas, calendarios). Arquitectura escalable de microservicios con CI/CD continuo.",
          tech: ["React.js", "Node.js", "Docker", "Microservicios"],
          impact: "Hub de comunicación unificado para toda la organización",
          category: "Plataforma Interna",
        },
        {
          title: "Integraciones de Sistemas",
          description:
            "Implementación de conexiones entre plataformas corporativas incluyendo SAP, Teamwork, Google Analytics y Emarsys. Permite automatización de notificaciones push, envío dinámico de correos y sincronización de datos.",
          tech: ["Node.js", "SAP", "Teamwork", "Emarsys", "Google Analytics"],
          impact:
            "Flujo de datos sin interrupciones entre sistemas empresariales",
          category: "Integración",
        },
      ],
    },
    experience: {
      tag: "Experiencia 😎",
      title: "Trayectoria",
      titleHighlight: "Profesional",
      subtitle:
        "Construyendo sistemas escalables y entregando valor de negocio",
      educationTitle: "Educación",
      languagesTitle: "Idiomas",
      jobs: [
        {
          role: "Desarrollador Web",
          company: "Petco",
          period: "Oct 2023 - Nov 2025",
          type: "Tiempo Completo",
          achievements: [
            "Lideré proyectos de desarrollo web end-to-end desde la concepción hasta el despliegue en producción",
            "Colaboré con múltiples departamentos para crear soluciones digitales optimizando procesos internos",
            "Implementé herramientas escalables y automatizaciones aumentando la eficiencia operativa y reduciendo errores humanos",
            "Construí soluciones utilizando React.js, Node.js, microservicios, CI/CD y Docker",
            "Mejoré la experiencia del usuario y fortalecí las operaciones corporativas mediante soluciones digitales innovadoras",
          ],
        },
        {
          role: "Becario de Desarrollo Web",
          company: "Petco",
          period: "Abr 2023 - Oct 2023",
          type: "Prácticas",
          achievements: [
            "Desarrollé plataformas web internas para gestión integral del personal en tiendas",
            "Implementé módulos para control de horarios, incidencias y descansos",
            "Creé sistema de aprobaciones automáticas vía correo electrónico integrado con flujos de RH",
            "Construido con React.js para interfaz ágil y responsiva y Node.js para validaciones backend",
            "Apliqué principios de diseño funcional, seguridad de datos y eficiencia operativa",
          ],
        },
      ],
      education: {
        degree: "Ingeniería en Computación",
        institution: "Universidad Nacional Autónoma de México (UNAM)",
        period: "Abr 2019 - Oct 2023",
        location: "Ciudad de México",
      },
      languages: {
        spanish: {
          name: "Español",
          level: "Nativo",
        },
        english: {
          name: "Inglés",
          level: "B1 - Intermedio",
        },
      },
    },
    services: {
      tag: "Habilidades y ventajas 👾",
      title: "Lo Que",
      titleHighlight: "Ofrezco",
      subtitle:
        "Soluciones técnicas integrales para acelerar tu transformación digital",
      items: [
        {
          title: "Desarrollo Web Personalizado",
          description:
            "Desarrollo end-to-end de aplicaciones web robustas usando React, Node.js y JavaScript moderno. Desde el concepto hasta el despliegue en producción con enfoque en escalabilidad y rendimiento.",
          highlights: [
            "React.js & Redux",
            "APIs Node.js",
            "Diseño Responsivo",
            "Optimización de Rendimiento",
          ],
        },
        {
          title: "Integración de Sistemas",
          description:
            "Integración perfecta con plataformas empresariales incluyendo SAP, Emarsys, Teamwork y Google Analytics. Experto en conectar sistemas dispares y automatizar flujos de datos.",
          highlights: [
            "Integración SAP",
            "APIs de Terceros",
            "Sincronización de Datos",
            "Actualizaciones en Tiempo Real",
          ],
        },
        {
          title: "Automatización de Procesos",
          description:
            "Transformación digital mediante automatización inteligente. Optimiza flujos de trabajo, elimina tareas manuales y reduce el tiempo de procesamiento hasta en un 80% con soluciones de automatización personalizadas.",
          highlights: [
            "Digitalización de Flujos",
            "Automatización de Correos",
            "Procesamiento de Documentos",
            "Seguridad con Tokens",
          ],
        },
        {
          title: "Arquitectura de Microservicios",
          description:
            "Diseño e implementación de infraestructura escalable de microservicios. Construye sistemas distribuidos mantenibles con Docker, pipelines CI/CD y prácticas modernas de DevOps.",
          highlights: [
            "Contenedores Docker",
            "Pipelines CI/CD",
            "Diseño Escalable",
            "Flujos Git",
          ],
        },
        {
          title: "Soluciones de Bases de Datos",
          description:
            "Diseño y optimización experta de bases de datos tanto relacionales (MySQL, PostgreSQL) como no relacionales (MongoDB). Garantiza integridad de datos, rendimiento y escalabilidad.",
          highlights: [
            "MySQL & PostgreSQL",
            "MongoDB",
            "Modelado de Datos",
            "Optimización de Consultas",
          ],
        },
        {
          title: "Desarrollo Ágil",
          description:
            "Experiencia completa en SDLC con metodologías Ágiles (Scrum/Kanban). Desde análisis de requisitos hasta despliegue, entregando valor iterativo con integración y testing continuo.",
          highlights: [
            "Scrum & Kanban",
            "Gestión Jira",
            "Revisiones de Código",
            "Aseguramiento de Calidad",
          ],
        },
      ],
    },
    contact: {
      tag: "Contacto 📲📩",
      title: "Construyamos",
      titleHighlight: "Juntos",
      subtitle:
        "Abierto a oportunidades de tiempo completo, trabajo por contrato y proyectos interesantes. Hablemos sobre cómo puedo ayudar a tu equipo a tener éxito.",
      emailTitle: "Envíame un Email",
      phoneTitle: "Llámame",
      linkedinTitle: "LinkedIn",
      linkedinSubtitle: "Conecta profesionalmente",
      githubTitle: "GitHub",
      githubSubtitle: "Ve mi código",
      downloadCV: "Descargar CV Completo",
      quickMessage: "Mensaje Rápido",
      namePlaceholder: "Tu Nombre",
      emailPlaceholder: "Tu Email",
      messagePlaceholder: "Tu Mensaje",
      sendButton: "Enviar Mensaje",
    },
  },
};
