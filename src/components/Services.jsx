import { Code, Workflow, Database, Plug, Boxes, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../hooks/useLanguage";
const serviceIcons = [Code, Plug, Workflow, Boxes, Database, Zap];
function ServiceCard({ service, index, icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const Icon = icon;
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
      className="group relative bg-[#0f1629] p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all overflow-hidden"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>

      <div className="relative">
        <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl mb-6 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
          <Icon className="w-8 h-8 text-cyan-400" />
        </div>

        <h3 className="text-xl font-bold text-white mb-3 font-mono group-hover:text-cyan-400 transition-colors">
          {service.title}
        </h3>

        <p className="text-slate-400 leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="space-y-2">
          {service.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-2 text-sm text-slate-400"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
              <span className="font-mono">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const { t } = useLanguage();
  const services = t("services.items");
  return (
    <section
      id="services"
      className="py-24 bg-[#0a0e27] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

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
            {t("services.tag")}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-mono">
            {t("services.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {t("services.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              icon={serviceIcons[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
