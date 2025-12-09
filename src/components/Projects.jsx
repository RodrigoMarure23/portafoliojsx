import { ExternalLink, Github } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../hooks/useLanguage";
function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 50,
            }
      }
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="group relative bg-[#0f1629] rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
    >
      {/* Holographic Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-500"></div>

      <div className="relative p-8 space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-mono mb-3">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-3 font-mono group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-slate-400 leading-relaxed">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-800/50 border border-slate-700 text-slate-300 text-sm rounded-md font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Impact */}
        <div className="pt-4 border-t border-cyan-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-emerald-400 font-mono">
                {project.impact}
              </span>
            </div>
            {/* <div className="flex gap-3">
              <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const { t } = useLanguage();
  // Esta línea ahora cargará el array con el nuevo proyecto
  const projects = t("projects.items");

  return (
    <section
      id="projects"
      className="py-24 bg-[#0a0e27] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          transition={{
            duration: 0.6,
          }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400 text-sm font-mono mb-4">
            {t("projects.tag")}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-mono">
            {t("projects.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {t("projects.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Aquí se renderizarán los 7 proyectos, incluyendo el nuevo */}
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
