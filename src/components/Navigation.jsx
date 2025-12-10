import { Menu, X, FileDown, Languages } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import cv from "../cv/cvActual.pdf";
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });

      if (isOpen) {
        setTimeout(() => {
          setIsOpen(false);
        }, 200);
      } else {
        setIsOpen(false);
      }
    }
  };
  const navItems = [
    {
      id: "skills",
      label: t("nav.skills"),
    },
    {
      id: "projects",
      label: t("nav.projects"),
    },
    {
      id: "experience",
      label: t("nav.experience"),
    },
    {
      id: "contact",
      label: t("nav.contact"),
    },
  ];
  return (
    <motion.nav
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-xl border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {"🧑‍💻 RODRIGO M.S."}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-cyan-400 transition-colors font-mono text-sm"
              >
                {item.label}
              </button>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0f1629] border border-cyan-500/30 rounded-lg">
              <Languages className="w-4 h-4 text-cyan-400" />
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded text-xs font-mono transition-all ${
                  language === "en"
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                    : "text-slate-400 hover:text-cyan-400"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`px-2 py-1 rounded text-xs font-mono transition-all ${
                  language === "es"
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                    : "text-slate-400 hover:text-cyan-400"
                }`}
              >
                ES
              </button>
            </div>

            <a
              href={cv}
              download
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all font-mono text-sm"
            >
              <FileDown className="w-4 h-4" />
              {t("nav.downloadCV")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-cyan-400 hover:text-cyan-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3 border-t border-cyan-500/20">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded transition-colors font-mono text-sm"
                  >
                    {item.label}
                  </button>
                ))}

                {/* Mobile Language Toggle */}
                <div className="px-4 py-2">
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#0f1629] border border-cyan-500/30 rounded-lg">
                    <Languages className="w-4 h-4 text-cyan-400" />
                    <button
                      onClick={() => setLanguage("en")}
                      className={`flex-1 px-3 py-1.5 rounded text-xs font-mono transition-all ${
                        language === "en"
                          ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                          : "text-slate-400"
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => setLanguage("es")}
                      className={`flex-1 px-3 py-1.5 rounded text-xs font-mono transition-all ${
                        language === "es"
                          ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                          : "text-slate-400"
                      }`}
                    >
                      Español
                    </button>
                  </div>
                </div>

                <a
                  href={cv}
                  download
                  className="flex items-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all font-mono text-sm"
                >
                  <FileDown className="w-4 h-4" />
                  {t("nav.downloadCV")}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
