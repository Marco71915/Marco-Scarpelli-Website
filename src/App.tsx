/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import marcoscarpelli from './marcoscarpelli.jpeg';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Send, 
  Mail, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Zap, 
  Calculator, 
  Cpu, 
  QrCode, 
  Globe,
  ChevronRight,
  MapPin,
  Award,
  Languages,
  Heart,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EDUCATION, EXPERIENCE, SKILLS } from './constants';
import { Project } from './types';

const IconMap: Record<string, any> = {
  Zap,
  Calculator,
  Cpu,
  QrCode,
  Globe
};

const SectionHeading = ({ children, icon: Icon, subtitle }: { children: React.ReactNode, icon: any, subtitle?: string }) => (
  <div className="mb-20 text-center">
    <div className="flex flex-col items-center gap-4 mb-4">
      <h2 className="text-4xl md:text-5xl font-serif italic">{children}</h2>
    </div>
    {subtitle && <p className="opacity-70 max-w-2xl mx-auto font-medium text-lg">{subtitle}</p>}
    <div className="h-px w-24 bg-current opacity-20 mt-8 mx-auto" />
  </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const Icon = IconMap[project.icon] || Globe;
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative bg-white/10 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-500 backdrop-blur-md"
    >
      <div className="p-8 flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg group-hover:bg-sky-500/20 transition-colors duration-500">
                <Icon className="w-5 h-5 text-sky-300" />
              </div>
              <span className="text-[10px] font-mono text-sky-200 uppercase tracking-widest">
                {project.category}
              </span>
            </div>
            <span className="text-[10px] font-mono text-sky-300 font-bold">
              {project.year}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-300 transition-colors">
            {project.name}
          </h3>
          <p className="text-sky-100/70 text-sm leading-relaxed mb-8">
            {project.desc}
          </p>
        </div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[11px] font-bold text-white hover:text-sky-300 transition-all uppercase tracking-widest"
        >
          Preview <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-sky-500 selection:text-black bg-grid">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-end">
          <div className="hidden md:flex items-center gap-10">
            {['About', 'Projects', 'CV', 'Skills'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-sky-400 transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section - Blu Scuro */}
        <section id="about" className="min-h-screen flex flex-col justify-center bg-[#020617] relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-32">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl"
              >
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-px w-8 bg-sky-500" />
                  <span className="font-mono text-sky-400 text-xs font-bold tracking-[0.4em] uppercase">
                    Academic Portfolio
                  </span>
                  <div className="h-px w-8 bg-sky-500" />
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-black tracking-tighter mb-10 text-white uppercase leading-[1.1]">
                  {PERSONAL_INFO.name}
                </h1>

                <div className="space-y-12">
                  <p className="text-xl md:text-3xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto">
                    {PERSONAL_INFO.bio}
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-6 pt-4">
                    <a href={`https://github.com/${PERSONAL_INFO.github}`} target="_blank" className="group flex items-center gap-3 px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all">
                      <Github className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-widest">GitHub</span>
                    </a>
                    <a href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`} target="_blank" className="group flex items-center gap-3 px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all">
                      <Linkedin className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
                    </a>
                    <a href={`https://instagram.com/${PERSONAL_INFO.instagram}`} target="_blank" className="group flex items-center gap-3 px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all">
                      <Instagram className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-widest">Instagram</span>
                    </a>
                    <a href={`https://t.me/${PERSONAL_INFO.telegram}`} target="_blank" className="group flex items-center gap-3 px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all">
                      <Send className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-widest">Telegram</span>
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mt-20 w-full max-w-2xl relative"
              >
                <div className="relative z-10 aspect-[16/9] bg-slate-900 rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border border-slate-800/50 group">
                  <img 
                    src={marcoscarpelli} 
                    alt={PERSONAL_INFO.name}
                    style={{ objectPosition: '50% 25%' }}  // 50% = centro orizzontale, 25% = vicino alla cima
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section - Gradient from Slate-950 to Slate-900 */}
        <section id="projects" className="py-40 bg-gradient-to-b from-[#020617] to-[#0f172a] relative">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading 
              icon={Zap} 
              subtitle="Bridging the gap between academic research and real-world digital solutions."
            >
              Selected Works
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* CV Section - Gradient from Slate-900 to Blue-900 */}
        <section id="cv" className="py-40 bg-gradient-to-b from-[#0f172a] to-[#1e3a8a]">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading 
              icon={Briefcase} 
              subtitle="A detailed timeline of my professional experience and academic background."
            >
              Curriculum
            </SectionHeading>
            
            <div className="grid lg:grid-cols-2 gap-32">
              <div className="space-y-20 text-center">
                <h3 className="font-mono text-sky-200 text-xs font-black uppercase tracking-[0.5em] mb-12">Experience</h3>
                {EXPERIENCE.map((exp, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="flex flex-col items-center mb-4">
                      <h4 className="text-3xl font-bold group-hover:text-sky-200 transition-colors text-white mb-2">{exp.role}</h4>
                      <span className="font-mono text-sky-200/60 text-sm">{exp.period}</span>
                    </div>
                    <div className="text-sky-300 font-mono text-sm uppercase tracking-widest mb-6">{exp.company}</div>
                    <p className="text-sky-100/80 mb-8 text-lg font-medium leading-relaxed max-w-xl mx-auto">{exp.description}</p>
                    <ul className="space-y-4 inline-block text-left">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-4 text-sky-100/60 text-sm leading-relaxed">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-20 text-center">
                <div>
                  <h3 className="font-mono text-sky-200 text-xs font-black uppercase tracking-[0.5em] mb-12">Education</h3>
                  <div className="space-y-12">
                    {EDUCATION.map((edu, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all flex flex-col items-center"
                      >
                        <div className="font-mono text-sky-300 text-xs mb-4">{edu.period}</div>
                        <h4 className="text-2xl font-bold mb-2 text-white">{edu.degree}</h4>
                        <div className="text-sky-100/70 font-medium mb-4">{edu.institution}</div>
                        <p className="text-sky-100/60 text-sm leading-relaxed max-w-md">{edu.details}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="p-12 bg-white text-[#075985] rounded-[3rem] relative overflow-hidden group shadow-2xl flex flex-col items-center">
                  <div className="relative z-10 w-full">
                    <h3 className="font-serif italic text-4xl mb-8">Certifications</h3>
                    <div className="flex flex-col items-center gap-6">
                      <div className="flex items-center gap-4">
                        <Award className="w-6 h-6" />
                        <span className="font-bold text-lg">Cisco IT Essentials</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Award className="w-6 h-6" />
                        <span className="font-bold text-lg">Marketing & E-Commerce</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-sky-100 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Gradient from Blue-900 to Sky-700 */}
        <section id="skills" className="py-40 bg-gradient-to-b from-[#1e3a8a] to-[#0369a1] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading 
              icon={Code2} 
              subtitle="A versatile toolkit spanning from low-level programming to creative digital design."
            >
              Expertise
            </SectionHeading>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILLS.map((group, idx) => (
                <div key={idx} className="p-10 bg-white/10 border border-white/10 rounded-[2rem] hover:bg-white/20 transition-all shadow-sm backdrop-blur-md">
                  <h3 className="font-mono text-sky-300 text-[10px] font-black uppercase tracking-[0.4em] mb-10">{group.category}</h3>
                  <div className="flex flex-col gap-5">
                    {group.items.map((skill, i) => (
                      <div key={i} className="flex items-center justify-between group/skill">
                        <span className="text-white font-medium group-hover/skill:text-sky-300 transition-colors">{skill}</span>
                        <div className="h-px flex-grow mx-4 bg-white/20 group-hover/skill:bg-sky-300 transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA - Gradient from Sky-700 to Sky-500 */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0369a1] to-[#0ea5e9] border-t border-white/10">
          <div className="absolute inset-0 bg-grid opacity-5" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="flex flex-col items-center gap-12">
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif italic mb-8 tracking-tight text-white">
                  Let's build something <span className="text-sky-950">meaningful</span>
                </h2>
                <p className="text-[#0c4a6e] text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                  I'm always open to discussing new projects, academic collaborations, or digital solutions.
                </p>
              </div>
              
              <div className="flex flex-col items-center gap-10">
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full font-black uppercase tracking-widest hover:bg-sky-950 hover:text-white transition-all duration-300 shadow-2xl shadow-black/10"
                >
                  Get in Touch <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="flex items-center gap-6">
                  <a href={`https://github.com/${PERSONAL_INFO.github}`} target="_blank" className="p-4 bg-white/10 border border-white/10 rounded-2xl text-white hover:bg-sky-950 hover:border-sky-950 transition-all backdrop-blur-sm"><Github className="w-6 h-6" /></a>
                  <a href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`} target="_blank" className="p-4 bg-white/10 border border-white/10 rounded-2xl text-white hover:bg-sky-950 hover:border-sky-950 transition-all backdrop-blur-sm"><Linkedin className="w-6 h-6" /></a>
                  <a href={`https://instagram.com/${PERSONAL_INFO.instagram}`} target="_blank" className="p-4 bg-white/10 border border-white/10 rounded-2xl text-white hover:bg-sky-950 hover:border-sky-950 transition-all backdrop-blur-sm"><Instagram className="w-6 h-6" /></a>
                  <a href={`https://t.me/${PERSONAL_INFO.telegram}`} target="_blank" className="p-4 bg-white/10 border border-white/10 rounded-2xl text-white hover:bg-sky-950 hover:border-sky-950 transition-all backdrop-blur-sm"><Send className="w-6 h-6" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-24 bg-gradient-to-b from-[#0ea5e9] to-[#bae6fd] text-[#0c4a6e] border-t border-sky-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-12">
          <div className="font-montserrat font-bold text-2xl md:text-3xl tracking-[0.2em] text-[#0c4a6e] uppercase">MARCO SCARPELLI</div>
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="space-y-3">
              <div className="font-mono text-[10px] text-sky-700 uppercase tracking-widest">Location</div>
              <div className="text-lg font-bold tracking-wide">{PERSONAL_INFO.location}</div>
            </div>
            <div className="space-y-3">
              <div className="font-mono text-[10px] text-sky-700 uppercase tracking-widest">Email</div>
              <div className="text-lg font-bold tracking-wide">{PERSONAL_INFO.email}</div>
            </div>
          </div>

          <div className="w-full h-px bg-[#0c4a6e]/10" />
          
          <div className="text-sky-700 font-mono text-[10px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
