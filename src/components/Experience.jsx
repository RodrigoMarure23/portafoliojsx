import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
function ExperienceCard({
  exp,
  index
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <motion.div ref={ref} initial={{
    opacity: 0,
    x: -50
  }} animate={isInView ? {
    opacity: 1,
    x: 0
  } : {
    opacity: 0,
    x: -50
  }} transition={{
    duration: 0.5,
    delay: index * 0.2
  }} className="relative pl-8 pb-12 border-l-2 border-cyan-500/30 last:pb-0">
      {/* Timeline Dot */}
      <motion.div initial={{
      scale: 0
    }} animate={isInView ? {
      scale: 1
    } : {
      scale: 0
    }} transition={{
      duration: 0.3,
      delay: index * 0.2 + 0.2
    }} className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-[#0a0e27] shadow-lg shadow-cyan-500/50"></motion.div>

      <div className="bg-[#0f1629] rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <span className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-xs font-mono mb-3">
              {exp.type}
            </span>
            <h3 className="text-2xl font-bold text-white mb-2 font-mono">
              {exp.role}
            </h3>
            <div className="flex items-center gap-2 text-slate-400">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span className="font-mono">{exp.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-lg">
            <Calendar className="w-4 h-4" />
            <span className="font-mono text-sm">{exp.period}</span>
          </div>
        </div>

        <ul className="space-y-3">
          {exp.achievements.map((achievement, i) => <motion.li key={i} initial={{
          opacity: 0,
          x: -20
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -20
        }} transition={{
          duration: 0.3,
          delay: index * 0.2 + 0.3 + i * 0.1
        }} className="flex gap-3 text-slate-400">
              <span className="text-cyan-400 mt-1.5 font-mono">›</span>
              <span className="leading-relaxed">{achievement}</span>
            </motion.li>)}
        </ul>
      </div>
    </motion.div>;
}
export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const eduRef = useRef(null);
  const eduInView = useInView(eduRef, {
    once: true,
    margin: "-100px"
  });
  const {
    t
  } = useLanguage();
  const jobs = t('experience.jobs');
  const education = t('experience.education');
  const languages = t('experience.languages');
  return <section id="experience" className="py-24 bg-[#0a0e27] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6
      }} className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm font-mono mb-4">
            {t('experience.tag')}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-mono">
            {t('experience.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">{t('experience.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {jobs.map((exp, index) => <ExperienceCard key={index} exp={exp} index={index} />)}
        </div>

        {/* Education Section */}
        <motion.div ref={eduRef} initial={{
        opacity: 0,
        y: 20
      }} animate={eduInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6
      }} className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 font-mono flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            {t('experience.educationTitle')}
          </h3>
          <div className="bg-[#0f1629] rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h4 className="text-xl font-bold text-white mb-2 font-mono">
                  {education.degree}
                </h4>
                <p className="text-slate-400 mb-2">{education.institution}</p>
                <p className="text-sm text-slate-500 font-mono">{education.location}</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-lg">
                <Calendar className="w-4 h-4" />
                <span className="font-mono text-sm">{education.period}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={eduInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="max-w-4xl mx-auto mt-8">
          <h3 className="text-2xl font-bold text-white mb-8 font-mono">{t('experience.languagesTitle')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0f1629] rounded-xl p-6 border border-cyan-500/20">
              <h4 className="text-lg font-bold text-white mb-2 font-mono">{languages.spanish.name}</h4>
              <p className="text-cyan-400 font-mono text-sm">{languages.spanish.level}</p>
            </div>
            <div className="bg-[#0f1629] rounded-xl p-6 border border-cyan-500/20">
              <h4 className="text-lg font-bold text-white mb-2 font-mono">{languages.english.name}</h4>
              <p className="text-cyan-400 font-mono text-sm">{languages.english.level}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}