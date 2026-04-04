"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, Download, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import {
  SiJavascript, SiTypescript, SiPython, SiPhp,
  SiLaravel, SiReact, SiNodedotjs, SiFastapi, SiNextdotjs, SiDjango,
  SiMysql, SiPostgresql, SiMongodb,
  SiGit, SiFigma, SiPostman, SiVercel, SiAngular, SiTailwindcss
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

type Lang = 'ES' | 'EN';

const techStack = [
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 5, category: 'lenguajes' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 4, category: 'lenguajes' },
  { name: 'Python', icon: SiPython, color: '#3776AB', level: 4, category: 'lenguajes' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4', level: 3, category: 'lenguajes' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20', level: 3, category: 'frameworks' },
  { name: 'React', icon: SiReact, color: '#61DAFB', level: 4, category: 'frameworks' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688', level: 4, category: 'frameworks' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 4, category: 'frameworks' },
  { name: 'Django', icon: SiDjango, color: '#092E20', level: 3, category: 'frameworks' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 4, category: 'frameworks' },
  { name: 'Angular', icon: SiAngular, color: '#DD0031', level: 3, category: 'frameworks' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 4, category: 'bases' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 4, category: 'bases' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 3, category: 'bases' },
  { name: 'Git', icon: SiGit, color: '#F05032', level: 4, category: 'herramientas' },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC', level: 5, category: 'herramientas' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', level: 3, category: 'herramientas' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 4, category: 'herramientas' },
  { name: 'Vercel', icon: SiVercel, color: '#ffffff', level: 4, category: 'herramientas' },
  { name: 'GitHub', icon: FaGithub, color: '#ffffff', level: 4, category: 'herramientas' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC', level: 4, category: 'herramientas' },
];

const filterCategories = [
  { key: 'todas', label: 'Todas' },
  { key: 'lenguajes', label: 'Lenguajes' },
  { key: 'frameworks', label: 'Frameworks' },
  { key: 'bases', label: 'Bases de datos' },
  { key: 'herramientas', label: 'Herramientas' },
];

const nexoTechnologies = [
  { name: 'Next.js', color: 'bg-white/10 text-white' },
  { name: 'TypeScript', color: 'bg-blue-500/10 text-blue-400' },
  { name: 'Tailwind', color: 'bg-cyan-500/10 text-cyan-400' },
  { name: 'Prisma', color: 'bg-indigo-500/10 text-indigo-400' },
  { name: 'PostgreSQL', color: 'bg-blue-600/10 text-blue-300' },
  { name: 'Gemini AI', color: 'bg-purple-500/10 text-purple-400' },
];

const socialLinks = [
  { name: 'Email', icon: FaEnvelope, href: 'mailto:xavier.gutierrez1606@gmail.com', color: '#EA4335', hoverBg: 'hover:bg-red-500/10 hover:border-red-500/50' },
  { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/angel-guti%C3%A9rrez-b65922202', color: '#0A66C2', hoverBg: 'hover:bg-blue-500/10 hover:border-blue-500/50' },
  { name: 'GitHub', icon: FaGithub, href: 'https://share.google/bWqbxn6FT45ktsKPs', color: '#ffffff', hoverBg: 'hover:bg-white/10 hover:border-white/50' },
  { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/50764086483', color: '#25D366', hoverBg: 'hover:bg-green-500/10 hover:border-green-500/50' },
];

const content = {
  ES: {
    nav: [
      { key: 'inicio', label: 'Inicio' },
      { key: 'proyectos', label: 'Proyectos' },
      { key: 'habilidades', label: 'Habilidades' },
      { key: 'contacto', label: 'Contacto' },
    ],
    hero: {
      badge: 'Disponible para proyectos',
      name: 'Angel Gutiérrez',
      prefix: 'Soy ',
      description: 'Creo aplicaciones web modernas, escalables y eficientes, combinando experiencia en frontend, backend y bases de datos.',
      downloadCV: 'Descargar CV',
      contact: 'Contactar',
    },
    stats: [
      { value: '1', label: 'Proyecto realizado' },
      { value: '2+', label: 'Años de experiencia' },
      { value: '100%', label: 'Compromiso' },
    ],
    projects: { subtitle: 'PORTAFOLIO', title: 'Proyectos', highlight: 'realizados', desc: 'Algunos de mis trabajos más recientes' },
    skills: { subtitle: 'STACK TÉCNICO', title: 'Habilidades', highlight: 'técnicas', desc: 'Tecnologías con las que trabajo a diario' },
    contact: { subtitle: 'HABLEMOS', title: '¿Tienes un proyecto en mente?', desc: 'Estoy disponible para freelance y oportunidades laborales. ¡Contáctame!' },
    nexoDesc: 'Plataforma de gestión financiera personal con IA integrada. Organiza ingresos, gastos y metas de ahorro con inteligencia artificial que te guía hacia mejores decisiones financieras.',
    viewProject: 'Ver proyecto',
    footer: '© 2026 Angel Gutiérrez. Todos los derechos reservados.',
  },
  EN: {
    nav: [
      { key: 'inicio', label: 'Home' },
      { key: 'proyectos', label: 'Projects' },
      { key: 'habilidades', label: 'Skills' },
      { key: 'contacto', label: 'Contact' },
    ],
    hero: {
      badge: 'Available for projects',
      name: 'Angel Gutiérrez',
      prefix: "I'm ",
      description: 'I create modern, scalable and efficient web applications, combining experience in frontend, backend and databases.',
      downloadCV: 'Download CV',
      contact: 'Contact',
    },
    stats: [
      { value: '1', label: 'Project completed' },
      { value: '2+', label: 'Years of experience' },
      { value: '100%', label: 'Commitment' },
    ],
    projects: { subtitle: 'PORTFOLIO', title: 'Completed', highlight: 'projects', desc: 'Some of my most recent work' },
    skills: { subtitle: 'TECH STACK', title: 'Technical', highlight: 'skills', desc: 'Technologies I work with daily' },
    contact: { subtitle: "LET'S TALK", title: 'Have a project in mind?', desc: "I'm available for freelance and job opportunities. Contact me!" },
    nexoDesc: 'Personal financial management platform with integrated AI. Organize income, expenses and savings goals with artificial intelligence that guides you towards better financial decisions.',
    viewProject: 'View project',
    footer: '© 2026 Angel Gutiérrez. All rights reserved.',
  },
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Lang>('ES');
  const [activeSection, setActiveSection] = useState('inicio');
  const [activeFilter, setActiveFilter] = useState('todas');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const t = content[language];

  const typingWords = useMemo(() => language === 'ES'
    ? ['Desarrollador Fullstack', 'Diseñador de Interfaces', 'Desarrollador Web']
    : ['Fullstack Developer', 'UI/UX Designer', 'Web Developer'],
    [language]);

  useEffect(() => {
    const word = typingWords[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
        }
      }
    }, isDeleting ? 80 : 120);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, typingWords]);

  const filteredTech = useMemo(() => {
    if (activeFilter === 'todas') return techStack;
    return techStack.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'proyectos', 'habilidades', 'contacto'];
      const scrollPos = window.scrollY + 100;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/AngelGutiérrezHoja deVida2025.pdf';
    link.download = 'Angel_Gutierrez_CV_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      {/* Ambient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000" />
      </div>

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/80 backdrop-blur-xl border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Image src="/ag-logo.png" alt="AG Logo" width={40} height={40} className="rounded-lg shadow-lg shadow-cyan-500/20" />
              <div className="hidden sm:block">
                <span className="font-semibold text-lg block leading-tight">Angel Gutiérrez</span>
                <span className="text-xs text-cyan-400/80">
                  {currentText}<span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {t.nav.map(item => (
                <button key={item.key} onClick={() => scrollTo(item.key)}
                  className={`relative text-sm font-medium transition-all duration-300 group ${activeSection === item.key ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}>
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 transition-opacity duration-300 ${activeSection === item.key ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                </button>
              ))}
              <button onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}
                className="px-3 py-1.5 text-xs font-medium border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all">
                {language === 'ES' ? 'EN' : 'ES'}
              </button>
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300 hover:text-white transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-cyan-500/10">
              <nav className="flex flex-col space-y-3">
                {t.nav.map(item => (
                  <button key={item.key} onClick={() => scrollTo(item.key)}
                    className={`text-left text-sm font-medium transition-colors ${activeSection === item.key ? 'text-cyan-400' : 'text-gray-300'}`}>
                    {item.label}
                  </button>
                ))}
                <button onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}
                  className="text-left px-3 py-1.5 text-xs border border-cyan-500/30 text-cyan-400 rounded-lg w-fit">
                  {language === 'ES' ? 'EN' : 'ES'}
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ── Hero ── */}
      <section id="inicio" className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium">{t.hero.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">{t.hero.name}</h1>

          <div className="text-xl sm:text-2xl font-light text-gray-300 mb-6 h-9">
            <span className="text-gray-400">{t.hero.prefix}</span>
            <span className="text-cyan-400 font-medium">{currentText}<span className="animate-pulse ml-0.5">|</span></span>
          </div>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">{t.hero.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button onClick={downloadCV}
              className="group px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-teal-500 font-semibold rounded-xl hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105">
              <Download size={18} className="group-hover:animate-bounce" />
              <span>{t.hero.downloadCV}</span>
            </button>
            <button onClick={() => scrollTo('contacto')}
              className="px-7 py-3.5 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-cyan-400/50 hover:text-white hover:bg-cyan-500/5 transition-all duration-300">
              {t.hero.contact}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto">
            {t.stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">{s.value}</div>
                <div className="text-xs sm:text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proyectos ── */}
      <section id="proyectos" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">{t.projects.subtitle}</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              {t.projects.title}{' '}
              <span className="italic bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">{t.projects.highlight}</span>
            </h2>
            <p className="text-gray-400 mt-3">{t.projects.desc}</p>
          </div>

          {/* Nexo Card */}
          <div className="group bg-[#111827] rounded-2xl border border-gray-800 overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
            <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden bg-gradient-to-br from-emerald-900/20 via-[#111827] to-teal-900/10">
              <Image src="/projects/nexo-preview.png" alt="Nexo - Finanzas Inteligentes" fill
                className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 900px" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {nexoTechnologies.map(tech => (
                  <span key={tech.name} className={`px-3 py-1 text-xs font-medium rounded-full ${tech.color}`}>{tech.name}</span>
                ))}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Nexo — Finanzas Inteligentes</h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">{t.nexoDesc}</p>
              <a href="https://nexo-finanzas.vercel.app" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group/link">
                <span>{t.viewProject}</span>
                <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stack Técnico ── */}
      <section id="habilidades" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">{t.skills.subtitle}</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              {t.skills.title}{' '}
              <span className="italic bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">{t.skills.highlight}</span>
            </h2>
            <p className="text-gray-400 mt-3">{t.skills.desc}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filterCategories.map(cat => (
              <button key={cat.key} onClick={() => setActiveFilter(cat.key)}
                className={`px-5 py-2 text-sm font-medium rounded-lg border transition-all duration-300 ${
                  activeFilter === cat.key
                    ? 'bg-white text-gray-900 border-white shadow-lg'
                    : 'text-gray-300 border-gray-700 hover:border-gray-500 hover:text-white'
                }`}>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredTech.map(tech => {
              const Icon = tech.icon;
              return (
                <div key={tech.name}
                  className="group bg-[#111827] rounded-xl border border-gray-800 p-5 sm:p-6 flex flex-col items-center text-center hover:border-gray-600 hover:bg-[#1a2332] transition-all duration-300 hover:scale-[1.03]">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gray-800/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} style={{ color: tech.color }} />
                  </div>
                  <span className="text-gray-300 text-sm font-medium mb-3 group-hover:text-white transition-colors">{tech.name}</span>
                  <div className="flex space-x-1.5">
                    {[1, 2, 3, 4, 5].map(dot => (
                      <span key={dot} className="w-2 h-2 rounded-full transition-all duration-300"
                        style={{ backgroundColor: dot <= tech.level ? tech.color : '#374151', opacity: dot <= tech.level ? 1 : 0.4 }} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-[#111827] rounded-2xl border border-gray-800 p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500" />
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">{t.contact.subtitle}</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-4">{t.contact.title}</h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto">{t.contact.desc}</p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {socialLinks.map(link => {
                const SocialIcon = link.icon;
                return (
                  <a key={link.name} href={link.href}
                    target={link.name !== 'Email' ? '_blank' : undefined}
                    rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center space-x-2 px-5 py-3 border border-gray-700 rounded-xl text-gray-300 transition-all duration-300 ${link.hoverBg} hover:text-white group`}>
                    <SocialIcon size={18} style={{ color: link.color }} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 px-4 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;