import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import {
  FaReact,
  FaNodeJs,
  FaRobot,
  FaProjectDiagram,
  FaCloud,
  FaTools,
  FaDatabase,
  FaLink,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiGooglecloud,
} from "react-icons/si";

// -----------------------------------------------------------------
// LÓGICA MÓVIL (Para la duración condicional del carrusel)
// -----------------------------------------------------------------
const MOBILE_BREAKPOINT = 760;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      // Esta validación debe ocurrir solo en el cliente
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        console.log("pantalla: ", window.innerWidth);
        console.log("valor pantalla: ", window.innerWidth < MOBILE_BREAKPOINT);
      }
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};
// -----------------------------------------------------------------

export function Hero() {
  const { t } = useLanguage();
  const isMobile = useIsMobile(); // <-- Obtenemos el estado móvil

  // Duración ajustada: 40s para móvil, 80s para escritorio para que sea legible
  const animationDuration = isMobile ? 4 : 15;

  const [displayText, setDisplayText] = useState("");
  const fullText = t("hero.title");

  // Efecto de escritura
  useEffect(() => {
    setDisplayText("");
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [fullText]);

  // Handlers de Scroll
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Definición del Stack de Tecnologías
  const stack = [
    { name: "React", icon: <FaReact className="text-4xl text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-400" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-4xl text-sky-400" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-4xl text-yellow-300" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-4xl text-green-500" />,
    },
    {
      name: "Automatización",
      icon: <FaRobot className="text-4xl text-amber-400" />,
    },
    { name: "Redux", icon: <SiRedux className="text-4xl text-purple-400" /> },
    {
      name: "Teamwork",
      icon: <FaProjectDiagram className="text-4xl text-blue-300" />,
    },
    { name: "Emarsys", icon: <FaCloud className="text-4xl text-sky-300" /> },
    { name: "SAP", icon: <FaTools className="text-4xl text-slate-300" /> },
    { name: "SQL", icon: <FaDatabase className="text-4xl text-indigo-300" /> },
    { name: "NoSQL", icon: <SiMongodb className="text-4xl text-green-500" /> },
    {
      name: "React Hooks",
      icon: <FaReact className="text-4xl text-cyan-400" />,
    },
    {
      name: "Microservicios",
      icon: <FaProjectDiagram className="text-4xl text-teal-300" />,
    },
    { name: "API REST", icon: <FaLink className="text-4xl text-amber-300" /> },
    { name: "Docker", icon: <FaDocker className="text-4xl text-blue-400" /> },
    {
      name: "Google Cloud",
      icon: <SiGooglecloud className="text-4xl text-red-300" />,
    },
  ];

  // Duplicamos el stack 4 veces para asegurar un carrusel muy largo y sin cortes visibles
  const animatedStack = [...stack, ...stack, ...stack, ...stack];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0e27] pt-4 pb-30 sm:pb-64 overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
        style={{
          animationDelay: "1s",
        }}
      ></div>

      {/* 1. CONTENEDOR PRINCIPAL DE TEXTO Y BOTONES */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-4 z-10">
        <div className="text-center space-y-2">
          {/* Nombre y Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{ marginTop: "4rem" }}
              className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm font-mono mb-6"
            >
              {t("hero.available")}
            </div>
            <h1 className="text-6xl lg:text-4xl font-bold font-mono mb-4">
              <span className="text-white">Rodrigo</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Marure Sánchez
              </span>
            </h1>
          </motion.div>

          {/* Typing Effect Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl lg:text-4xl text-slate-300 font-mono"
          >
            {displayText}
            <span className="animate-pulse text-cyan-400">|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="
                text-base        
                sm:text-lg       
                lg:text-xl      
                text-slate-400 
                max-w-[90%]      
                sm:max-w-2xl    
                mx-auto 
                leading-relaxed
            "
          >
            {t("hero.description")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            <button
              onClick={scrollToProjects}
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all font-mono"
            >
              {t("hero.viewProjects")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/30 transition-all font-mono"
            >
              {t("hero.getInTouch")}
            </button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-6 pt-8"
          >
            {/* Links de contacto (Mail, Phone, Linkedin, Github) */}
            <a
              href="mailto:rodrigo142398@gmail.com"
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-mono text-sm">rodrigo142398@gmail.com</span>
            </a>
            <a
              href="tel:5647154515"
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-mono text-sm">564-715-4515</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigo-marure-sanchez-8b0791230/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* 2. CARRUSEL DE TECNOLOGÍA (Corregido para duración y loop) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className=" pt-3 w-full overflow-hidden relative bottom-1 z-0 top-0 p"
      >
        <motion.div
          className="flex gap-2"
          // CAMBIO CLAVE: Animamos -50% para un loop completo con 4 duplicaciones
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            // DURACIÓN CONDICIONAL APLICADA AQUÍ
            duration: animationDuration,
            ease: "linear",
            repeat: Infinity,
          }}
          // CAMBIO CLAVE: Forzamos el ancho a 400% para que quepan todos los duplicados
          style={{ width: "400%" }}
        >
          {animatedStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              // Retraso de aparición más rápido
              transition={{ delay: 0.3 + index * 0.05 }}
              className="flex flex-col min-w-[120px] items-center bg-slate-900/60 p-2 rounded-xl shadow-lg hover:shadow-cyan-500/20"
            >
              {tech.icon}
              <span className="mt-2 text-white font-semibold text-sm">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
