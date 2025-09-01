"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail, Phone, Globe, Code, Database, Layers, Smartphone, Zap, Star, ArrowRight } from 'lucide-react';

interface ContentType {
    ES: {
        nav: {
            inicio: string;
            sobre: string;
            habilidades: string;
            servicios: string;
            contacto: string;
        };
        hero: {
            greeting: string;
            name: string;
            description: string;
            cta2: string;
        };
        about: {
            title: string;
            description: string;
        };
        skills: {
            title: string;
            languages: string;
            frameworks: string;
            databases: string;
        };
        services: {
            title: string;
            items: string[];
        };
        contact: {
            title: string;
            subtitle: string;
            name: string;
            email: string;
            message: string;
            send: string;
        };
        footer: {
            rights: string;
        };
    };
    EN: {
        nav: {
            inicio: string;
            sobre: string;
            habilidades: string;
            servicios: string;
            contacto: string;
        };
        hero: {
            greeting: string;
            name: string;
            description: string;
            cta2: string;
        };
        about: {
            title: string;
            description: string;
        };
        skills: {
            title: string;
            languages: string;
            frameworks: string;
            databases: string;
        };
        services: {
            title: string;
            items: string[];
        };
        contact: {
            title: string;
            subtitle: string;
            name: string;
            email: string;
            message: string;
            send: string;
        };
        footer: {
            rights: string;
        };
    };
}

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState<'ES' | 'EN'>('ES');
    const [activeSection, setActiveSection] = useState('inicio');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            const subject = `Contacto desde Portfolio - ${formData.name}`;
            const body = `
Nombre: ${formData.name}
Email: ${formData.email}

Mensaje:
${formData.message}

---
Enviado desde el portfolio de Ángel Gutiérrez
            `;

            const mailtoLink = `mailto:xavier.gutierrez1606@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            window.location.href = mailtoLink;
            
            setFormData({ name: '', email: '', message: '' });
            setSubmitStatus('success');
            
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const content: ContentType = {
        ES: {
            nav: {
                inicio: 'Inicio',
                sobre: 'Sobre mí',
                habilidades: 'Habilidades',
                servicios: 'Servicios',
                contacto: 'Contacto'
            },
            hero: {
                greeting: 'Hola, soy',
                name: 'Angel Gutiérrez',
                description: 'Creo aplicaciones web modernas, escalables y eficientes, combinando experiencia en frontend, backend y bases de datos.',
                cta2: 'Descargar CV'
            },
            about: {
                title: 'Sobre mí',
                description: 'Soy licenciado en Desarrollo de Software. Tengo experiencia en proyectos personales y freelance, trabajando principalmente con JavaScript, PHP y Python, aplicando frameworks modernos como Laravel, Next.js y React. Me apasiona crear soluciones digitales prácticas que ayuden a las personas y empresas a crecer.'
            },
            skills: {
                title: 'Habilidades técnicas',
                languages: 'Lenguajes',
                frameworks: 'Frameworks & Librerías',
                databases: 'Bases de datos'
            },
            services: {
                title: 'Servicios',
                items: [
                    'Desarrollo de aplicaciones web a medida',
                    'Creación de APIs y servicios backend escalables',
                    'Integración de bases de datos SQL y NoSQL',
                    'Diseño y desarrollo de interfaces con React/Next.js',
                    'Mantenimiento y optimización de aplicaciones existentes',
                    'Consultoría técnica y optimización de rendimiento'
                ]
            },
            contact: {
                title: 'Contacto',
                subtitle: '¿Listo para trabajar juntos?',
                name: 'Nombre',
                email: 'Correo electrónico',
                message: 'Mensaje',
                send: 'Enviar mensaje'
            },
            footer: {
                rights: '© 2025 Angel Gutiérrez – Desarrollador Fullstack'
            }
        },
        EN: {
            nav: {
                inicio: 'Home',
                sobre: 'About',
                habilidades: 'Skills',
                servicios: 'Services',
                contacto: 'Contact'
            },
            hero: {
                greeting: 'Hi, I\'m',
                name: 'Angel Gutiérrez',
                description: 'I create modern, scalable and efficient web applications, combining experience in frontend, backend and databases.',
                cta2: 'Download CV'
            },
            about: {
                title: 'About me',
                description: 'I have a degree in Software Development. I have experience in personal and freelance projects, working mainly with JavaScript, PHP and Python, applying modern frameworks like Laravel, Next.js and React. I\'m passionate about creating practical digital solutions that help people and businesses grow.'
            },
            skills: {
                title: 'Technical skills',
                languages: 'Languages',
                frameworks: 'Frameworks & Libraries',
                databases: 'Databases'
            },
            services: {
                title: 'Services',
                items: [
                    'Custom web application development',
                    'Scalable backend APIs and services creation',
                    'SQL and NoSQL database integration',
                    'Interface design and development with React/Next.js',
                    'Maintenance and optimization of existing applications',
                    'Technical consulting and performance optimization'
                ]
            },
            contact: {
                title: 'Contact',
                subtitle: 'Ready to work together?',
                name: 'Name',
                email: 'Email',
                message: 'Message',
                send: 'Send message'
            },
            footer: {
                rights: '© 2025 Ángel Gutiérrez – Fullstack Developer'
            }
        }
    };

    const t = content[language];

    // Typing animation words
    const typingWords = language === 'ES'
        ? ['Licenciado', 'Desarrollador', 'Diseñador Web']
        : ['Graduate', 'Developer', 'Web Designer'];

    // Typing animation effect
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
        }, isDeleting ? 100 : 150);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, typingWords]);

    const skillsData = [
        {
            category: t.skills.languages, items: [
                { name: 'JavaScript', level: 90, color: 'bg-gradient-to-r from-orange-400 to-orange-600' },
                { name: 'PHP', level: 70, color: 'bg-gradient-to-r from-emerald-400 to-emerald-600' },
                { name: 'Python', level:80 , color: 'bg-gradient-to-r from-blue-400 to-blue-600' },
                { name: 'TypeScript', level: 80, color: 'bg-gradient-to-r from-amber-400 to-amber-600' },
            ]
        },
        {
            category: t.skills.frameworks, items: [
                { name: 'Laravel', level: 80, color: 'bg-gradient-to-r from-red-400 to-red-600' },
                { name: 'Next.js', level: 85, color: 'bg-gradient-to-r from-gray-600 to-gray-800' },
                { name: 'React', level: 80, color: 'bg-gradient-to-r from-cyan-400 to-cyan-600' },
                { name: 'Django', level: 80, color: 'bg-gradient-to-r from-emeral-300 to-green-500' }
            ]
        },
        {
            category: t.skills.databases, items: [
                { name: 'PostgreSQL', level: 90, color: 'bg-gradient-to-r from-indigo-400 to-indigo-600' },
                { name: 'MongoDB', level: 70, color: 'bg-gradient-to-r from-green-400 to-green-600' }
            ]
        }
    ];

    const services = [
        { 
            icon: <Code className="w-8 h-8" />, 
            title: t.services.items[0],
            gradient: 'from-orange-500 to-red-500',
            shadowColor: 'shadow-orange-500/25'
        },
        { 
            icon: <Database className="w-8 h-8" />, 
            title: t.services.items[1],
            gradient: 'from-emerald-500 to-teal-500',
            shadowColor: 'shadow-emerald-500/25'
        },
        { 
            icon: <Layers className="w-8 h-8" />, 
            title: t.services.items[2],
            gradient: 'from-blue-500 to-indigo-500',
            shadowColor: 'shadow-blue-500/25'
        },
        { 
            icon: <Smartphone className="w-8 h-8" />, 
            title: t.services.items[3],
            gradient: 'from-purple-500 to-pink-500',
            shadowColor: 'shadow-purple-500/25'
        },
        { 
            icon: <Globe className="w-8 h-8" />, 
            title: t.services.items[4],
            gradient: 'from-amber-500 to-orange-500',
            shadowColor: 'shadow-amber-500/25'
        },
        { 
            icon: <Zap className="w-8 h-8" />, 
            title: t.services.items[5],
            gradient: 'from-cyan-500 to-blue-500',
            shadowColor: 'shadow-cyan-500/25'
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['inicio', 'sobre', 'habilidades', 'servicios', 'contacto'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const downloadCV = () => {
        // Descargar PDF desde la carpeta public
        const link = document.createElement('a');
        link.href = '/AngelGutiérrezHoja deVida2025.pdf';
        link.download = 'Angel_Gutierrez_CV_2025.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900/20 to-slate-900">
            {/* Animated background particles */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-40 right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-orange-500/20 shadow-lg shadow-orange-500/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                                <span className="text-white font-bold text-lg">AG</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">{t.hero.name}</h1>
                                <p className="text-sm text-orange-300/80">
                                    {currentText}
                                    <span className="animate-pulse text-orange-400">|</span>
                                </p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {Object.entries(t.nav).map(([key, value]) => (
                                <button
                                    key={key}
                                    onClick={() => scrollToSection(key)}
                                    className={`relative text-sm font-medium transition-all duration-300 hover:text-orange-300 ${
                                        activeSection === key 
                                            ? 'text-orange-300' 
                                            : 'text-white'
                                    } group`}
                                >
                                    {value as string}
                                    {activeSection === key && (
                                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                                    )}
                                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            ))}
                            <button
                                onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}
                                className="px-4 py-2 text-sm bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/25 transform hover:scale-105"
                            >
                                {language}
                            </button>
                        </nav>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white hover:text-orange-300 transition-colors"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t border-orange-500/20">
                            <nav className="flex flex-col space-y-4">
                                {Object.entries(t.nav).map(([key, value]) => (
                                    <button
                                        key={key}
                                        onClick={() => scrollToSection(key)}
                                        className={`text-left text-sm font-medium transition-colors hover:text-orange-300 ${
                                            activeSection === key ? 'text-orange-300' : 'text-white'
                                        }`}
                                    >
                                        {value as string}
                                    </button>
                                ))}
                                <button
                                    onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}
                                    className="text-left px-3 py-1 text-sm bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg transition-colors w-fit"
                                >
                                    {language}
                                </button>
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-8">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
                            <Star className="w-4 h-4 text-orange-400 mr-2" />
                            <span className="text-orange-300 text-sm font-medium">{t.hero.greeting}</span>
                        </div>
                        
                        <h2 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent mb-4">
                            {t.hero.name}
                        </h2>
                        
                        <div className="text-2xl sm:text-3xl font-light text-orange-100 mb-6">
                            <span className="text-orange-300">Soy </span>
                            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-semibold">
                                {currentText}
                                <span className="animate-pulse text-orange-400">|</span>
                            </span>
                        </div>
                        
                        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                            {t.hero.description}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button 
                            onClick={downloadCV}
                            className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-orange-500/25 transform hover:scale-105"
                        >
                            <Download size={20} className="group-hover:animate-bounce" />
                            <span>{t.hero.cta2}</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button 
                            onClick={() => scrollToSection('contacto')}
                            className="px-8 py-4 border-2 border-orange-400/50 text-orange-300 font-semibold rounded-xl hover:bg-orange-400/10 hover:border-orange-400 transition-all duration-300 backdrop-blur-sm"
                        >
                            Contactar
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent text-center mb-12">
                        {t.about.title}
                    </h3>
                    <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 shadow-xl shadow-orange-500/10">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            {t.about.description}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            {['Desarrollo Web', 'Backend', 'Frontend', 'APIs', 'Bases de Datos'].map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-300 text-sm rounded-full backdrop-blur-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent text-center mb-12">
                        {t.skills.title}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {skillsData.map((category, idx) => (
                            <div key={idx} className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20 shadow-xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105">
                                <h4 className="text-xl font-semibold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6 text-center">
                                    {category.category}
                                </h4>
                                <div className="space-y-6">
                                    {category.items.map((skill, skillIdx) => (
                                        <div key={skillIdx} className="group/skill">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">
                                                    {skill.name}
                                                </span>
                                                <span className="text-orange-300 text-sm font-semibold">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden shadow-inner">
                                                <div
                                                    className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out shadow-lg transform origin-left group-hover/skill:scale-x-105`}
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent text-center mb-12">
                        {t.services.title}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, idx) => (
                            <div key={idx} className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20 shadow-xl ${service.shadowColor} hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1 cursor-pointer overflow-hidden`}>
                                {/* Background gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                                
                                {/* Icon with gradient background */}
                                <div className={`relative z-10 w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 text-white shadow-lg ${service.shadowColor} group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                                        {service.title}
                                    </p>
                                </div>

                                {/* Hover effect border */}
                                <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -m-0.5`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
                            {t.contact.title}
                        </h3>
                        <p className="text-xl text-orange-300">{t.contact.subtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 shadow-xl shadow-orange-500/10">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="group">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder={t.contact.name}
                                        required
                                        className="w-full px-4 py-4 bg-slate-800/50 border border-orange-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 group-hover:border-orange-500/40"
                                    />
                                </div>
                                <div className="group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder={t.contact.email}
                                        required
                                        className="w-full px-4 py-4 bg-slate-800/50 border border-orange-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 group-hover:border-orange-500/40"
                                    />
                                </div>
                                <div className="group">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={6}
                                        placeholder={t.contact.message}
                                        required
                                        className="w-full px-4 py-4 bg-slate-800/50 border border-orange-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 resize-none transition-all duration-300 group-hover:border-orange-500/40"
                                    ></textarea>
                                </div>
                                
                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-300 text-sm">
                                        ¡Perfecto! Se abrirá tu cliente de email para enviar el mensaje.
                                    </div>
                                )}
                                
                                {submitStatus === 'error' && (
                                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-sm">
                                        Hubo un problema. Por favor, contacta directamente a xavier.gutierrez1606@gmail.com
                                    </div>
                                )}
                                
                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    <span>{isSubmitting ? 'Enviando...' : t.contact.send}</span>
                                    {!isSubmitting && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20 shadow-xl shadow-orange-500/10">
                                <h4 className="text-2xl font-semibold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
                                    Enlaces profesionales
                                </h4>
                                <div className="space-y-4">
                                    <a 
                                        href="https://share.google/bWqbxn6FT45ktsKPs" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="group flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-slate-700/30"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl flex items-center justify-center group-hover:from-slate-500 group-hover:to-slate-700 transition-all duration-300 shadow-lg">
                                            <Github size={24} />
                                        </div>
                                        <div>
                                            <span className="font-medium">GitHub</span>
                                            <p className="text-sm text-gray-400">Proyectos y código</p>
                                        </div>
                                        <ArrowRight size={16} className="ml-auto group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                                    </a>

                                    <a 
                                        href="https://www.linkedin.com/in/angel-guti%C3%A9rrez-b65922202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="group flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-slate-700/30"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/25">
                                            <Linkedin size={24} />
                                        </div>
                                        <div>
                                            <span className="font-medium">LinkedIn</span>
                                            <p className="text-sm text-gray-400">Perfil profesional</p>
                                        </div>
                                        <ArrowRight size={16} className="ml-auto group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                                    </a>

                                    <a 
                                        href="https://wa.me/50764086483" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="group flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-slate-700/30"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-800 rounded-xl flex items-center justify-center group-hover:from-green-500 group-hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-500/25">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <span className="font-medium">WhatsApp</span>
                                            <p className="text-sm text-gray-400">+507 6408-6483</p>
                                        </div>
                                        <ArrowRight size={16} className="ml-auto group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                                    </a>

                                    <a 
                                        href="mailto:xavier.gutierrez1606@gmail.com" 
                                        className="group flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-slate-700/30"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-xl flex items-center justify-center group-hover:from-red-500 group-hover:to-red-700 transition-all duration-300 shadow-lg shadow-red-500/25">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <span className="font-medium">Email</span>
                                            <p className="text-sm text-gray-400">xavier.gutierrez1606@gmail.com</p>
                                        </div>
                                        <ArrowRight size={16} className="ml-auto group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                                    </a>
                                </div>
                            </div>

                            {/* Stats or additional info */}
                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20 shadow-xl shadow-orange-500/10">
                                <h5 className="text-lg font-semibold text-white mb-4">¿Por qué elegirme?</h5>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                                        <span className="text-gray-300 text-sm">Respuesta rápida en menos de 24h</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                                        <span className="text-gray-300 text-sm">Código limpio y documentado</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                                        <span className="text-gray-300 text-sm">Soporte técnico post-entrega</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                                        <span className="text-gray-300 text-sm">Metodologías ágiles</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-orange-500/20 bg-black/20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">AG</span>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">{t.footer.rights}</p>
                                <p className="text-gray-500 text-xs">Panamá • Disponible para proyectos</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <button 
                                onClick={downloadCV}
                                className="group px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 text-orange-300 rounded-xl hover:from-orange-500/30 hover:to-red-500/30 hover:border-orange-400 transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
                            >
                                <Download size={16} className="group-hover:animate-bounce" />
                                <span className="text-sm font-medium">{t.hero.cta2}</span>
                            </button>
                            
                            <button 
                                onClick={() => scrollToSection('inicio')}
                                className="p-3 bg-slate-800/50 border border-orange-500/20 text-orange-300 rounded-xl hover:bg-slate-700/50 hover:border-orange-400 transition-all duration-300 backdrop-blur-sm group"
                            >
                                <ArrowRight size={16} className="rotate-[-90deg] group-hover:translate-y-[-2px] transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Custom CSS for animation delays */}
            <style jsx>{`
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
};

export default Portfolio;