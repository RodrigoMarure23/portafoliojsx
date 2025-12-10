import { Mail, Linkedin, Github, FileDown, Send, Phone } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import emailjs from "@emailjs/browser";
import cv from "../cv/cvActual.pdf";
export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const params = {
      name: form.name,
      email: form.email,
      message: form.message,
      title: "Nuevo mensaje de contacto",
      from_name: form.name,
      from_email: form.email,
    };
    const sendToUser = emailjs.send(
      "service_8t4g04j",
      "template_rjo859o",
      params,
      "H36LCNDS_8nqb9K8k"
    );
    const notifyMe = emailjs.send(
      "service_8t4g04j",
      "template_9pqsh6d",
      {
        name: params.name,
        email: "rodrigo142398@gmail.com",
        message: form.message,
        title: "Nuevo reclutador",
      },
      "H36LCNDS_8nqb9K8k"
    );
    Promise.all([sendToUser, notifyMe])
      .then(() => {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => setSent(false))
      .finally(() => setLoading(false));
  };
  return (
    <section
      id="contact"
      className="py-24 bg-[#0a0e27] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

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
          className="max-w-4xl mx-auto"
        >
          <div className="text-center space-y-6 mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm font-mono mb-4">
              {t("contact.tag")}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white font-mono">
              {t("contact.title")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                {t("contact.titleHighlight")}
              </span>
            </h2>
            <p className="text-xl text-slate-400">{t("contact.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.a
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
                duration: 0.5,
                delay: 0.2,
              }}
              href="mailto:rodrigo142398@gmail.com"
              className="group p-8 bg-[#0f1629] border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors font-mono">
                    {t("contact.emailTitle")}
                  </h3>
                  <p className="text-slate-400 text-sm font-mono">
                    rodrigo142398@gmail.com
                  </p>
                </div>
              </div>
            </motion.a>

            <motion.a
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
                duration: 0.5,
                delay: 0.3,
              }}
              href="tel:5647154515"
              className="group p-8 bg-[#0f1629] border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors font-mono">
                    {t("contact.phoneTitle")}
                  </h3>
                  <p className="text-slate-400 text-sm font-mono">
                    564-715-4515
                  </p>
                </div>
              </div>
            </motion.a>
            <motion.a
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
                duration: 0.5,
                delay: 0.4,
              }}
              href="https://www.linkedin.com/in/rodrigo-marure-sanchez-8b0791230/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-[#0f1629] border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                  <Linkedin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors font-mono">
                    {t("contact.linkedinTitle")}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {t("contact.linkedinSubtitle")}
                  </p>
                </div>
              </div>
            </motion.a>
            <motion.a
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
                duration: 0.5,
                delay: 0.5,
              }}
              href="https://github.com/RodrigoMarure23"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-[#0f1629] border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                  <Github className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors font-mono">
                    {t("contact.githubTitle")}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {t("contact.githubSubtitle")}
                  </p>
                </div>
              </div>
            </motion.a>
          </div>

          <motion.div
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
              duration: 0.5,
              delay: 0.6,
            }}
            className="text-center"
          >
            <a
              href={cv}
              download
              className="inline-flex items-center gap-3 px-6 py-5 bg-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-800/50 transition-all font-mono text-lg group"
            >
              <FileDown className="w-6 h-6 group-hover:animate-bounce" />
              {t("contact.downloadCV")}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 p-8 bg-[#0f1629] border border-cyan-500/20 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">
              {t("contact.quickMessage")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t("contact.namePlaceholder")}
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-[#0a0e27] border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-slate-500 font-mono"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("contact.emailPlaceholder")}
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-[#0a0e27] border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-slate-500 font-mono"
                />
              </div>

              <textarea
                rows={4}
                name="message"
                placeholder={t("contact.messagePlaceholder")}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0a0e27] border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors resize-none text-white placeholder-slate-500 font-mono"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all font-mono disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                {loading ? t("contact.sending") : t("contact.sendButton")}
              </button>
            </form>

            {sent === true && (
              <p className="text-green-400 mt-4 font-mono">
                ✔️ {t("contact.success")}
              </p>
            )}

            {sent === false && (
              <p className="text-red-400 mt-4 font-mono">
                ❌ {t("contact.error")}
              </p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
