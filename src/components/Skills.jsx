import { Code2, Database, Zap, Boxes, Globe, TestTube } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../hooks/useLanguage";
const skillCategories = [
  {
    icon: Code2,
    key: "frontend",
    skills: [
      {
        key: "react",
        level: 99,
      },
      {
        key: "redux",
        level: 99,
      },
      {
        key: "javascript",
        level: 99,
      },
      {
        key: "html",
        level: 99,
      },
      {
        key: "ui",
        level: 99,
      },
    ],
    color: "cyan",
  },
  {
    icon: Database,
    key: "backend",
    skills: [
      {
        key: "node",
        level: 90,
      },
      {
        key: "rest",
        level: 95,
      },
      {
        key: "mysql",
        level: 90,
      },
      {
        key: "postgres",
        level: 95,
      },
      {
        key: "mongo",
        level: 90,
      },
    ],
    color: "purple",
  },
  {
    icon: Boxes,
    key: "architecture",
    skills: [
      {
        key: "microservices",
        level: 90,
      },
      {
        key: "docker",
        level: 90,
      },
      {
        key: "cicd",
        level: 99,
      },
      {
        key: "git",
        level: 99,
      },
      {
        key: "agile",
        level: 97,
      },
    ],
    color: "emerald",
  },
  {
    icon: Globe,
    key: "integrations",
    skills: [
      {
        key: "sap",
        level: 85,
      },
      {
        key: "emarsys",
        level: 99,
      },
      {
        key: "teamwork",
        level: 85,
      },
      {
        key: "analytics",
        level: 95,
      },
      {
        key: "apis",
        level: 98,
      },
    ],
    color: "amber",
  },
  {
    icon: Zap,
    key: "automation",
    skills: [
      {
        key: "digitization",
        level: 99,
      },
      {
        key: "email",
        level: 99,
      },
      {
        key: "workflow",
        level: 96,
      },
      {
        key: "sync",
        level: 97,
      },
    ],
    color: "rose",
  },
  {
    icon: TestTube,
    key: "testing",
    skills: [
      {
        key: "postman",
        level: 98,
      },
      {
        key: "e2e",
        level: 85,
      },
      {
        key: "debug",
        level: 98,
      },
      {
        key: "jira",
        level: 90,
      },
    ],
    color: "indigo",
  },
];
const colorClasses = {
  cyan: "from-cyan-500 to-cyan-600",
  purple: "from-purple-500 to-purple-600",
  emerald: "from-emerald-500 to-emerald-600",
  amber: "from-amber-500 to-amber-600",
  rose: "from-rose-500 to-rose-600",
  indigo: "from-indigo-500 to-indigo-600",
};
function SkillCard({ category, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const Icon = category.icon;
  const { t } = useLanguage();
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
      className="group p-6 bg-[#0f1629] border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all"
    >
      <div
        className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${
          colorClasses[category.color]
        } mb-4`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4 font-mono">
        {t(`skills.categories.${category.key}.title`)}
      </h3>
      <div className="space-y-3">
        {category.skills.map((skill, i) => (
          <div key={skill.key}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-slate-400 font-mono">
                {t(`skills.categories.${category.key}.skills.${skill.key}`)}
              </span>
              <span className="text-xs text-cyan-400 font-mono">
                {skill.level}%
              </span>
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={
                  isInView
                    ? {
                        width: `${skill.level}%`,
                      }
                    : {
                        width: 0,
                      }
                }
                transition={{
                  duration: 1,
                  delay: index * 0.1 + i * 0.1,
                }}
                className={`h-full bg-gradient-to-r ${
                  colorClasses[category.color]
                } rounded-full`}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const { t } = useLanguage();
  return (
    <section
      id="skills"
      className="py-24 bg-[#0a0e27] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

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
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm font-mono mb-4">
            {t("skills.tag")}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-mono">
            {t("skills.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {t("skills.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.key} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
