"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeader';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const projects = [
  {
    title: 'Aura Artifact',
    desc: 'A powerful full-stack web application designed with a sleek UI and robust backend architecture. Features seamless data integration and responsive design for an optimal user experience.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    img: '/images/aura-artifact.png',
    link: 'https://aura-artifact.vercel.app/',
    github: 'https://github.com/noorispeace1/aura-artifact',
    serverGithub: 'https://github.com/noorispeace1/aura-artifact-server',
    large: false,
    category: 'fullstack'
  },
  {
    title: 'Scholar Stack',
    desc: 'An expert-led course platform empowering students to master new skills. Features a comprehensive learning management system with responsive UI and secure backend.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    img: '/images/scholar stack.png',
    link: 'https://scholar-stack-xi.vercel.app/',
    github: 'https://github.com/noorispeace1/scholar-stack',
    serverGithub: 'https://github.com/noorispeace1/scholar-stack-server',
    large: false,
    category: 'fullstack'
  },
  {
    title: 'Talentist Velo',
    desc: 'A dynamic talent acquisition platform and job board engineered with Next.js, featuring secure user authentication, responsive component-driven UI, and streamlined data flows connecting job seekers with recruiters.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    img: '/images/talentist_mockup.png',
    link: 'https://talentist-velo.vercel.app/',
    github: 'https://github.com/noorispeace1/talentist-velo',
    large: false,
    category: 'frontend'
  },
  {
    title: 'Novamed NSJS',
    desc: 'A robust healthcare and medicine delivery platform built for scale. Implements seamless product management, user authentication, and optimized performance for medical e-commerce.',
    tags: ['React', 'Next.js', 'Stripe', 'MongoDB'],
    img: '/images/novamed_mockup.png',
    link: 'https://novamed-nsjs.vercel.app/',
    github: 'https://github.com/noorispeace1/novamed-nsjs',
    large: false,
    category: 'backend'
  },
  {
    title: 'Rent Desh',
    desc: 'An innovative rental platform for Bangladesh empowering users to securely list and rent properties or equipment. Built with a responsive modern UI, robust backend, and advanced search features.',
    tags: ['React', 'Next.js', 'AWS', 'Node.js'],
    img: '/images/rentdesh_mockup.png',
    link: 'https://rent-desh.vercel.app/',
    github: 'https://github.com/noorispeace1/rent-desh-',
    large: true,
    category: 'fullstack'
  },
  {
    title: 'WonderLust',
    desc: 'A modern agency platform with a visually stunning interface and dynamic features. Built to showcase services, manage client interactions, and deliver a premium digital experience.',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB'],
    img: '/images/wonderlust.png',
    link: '#',
    github: 'https://github.com/noorispeace1/WonderLust',
    serverGithub: 'https://github.com/noorispeace1/wonderlustagency',
    large: false,
    category: 'fullstack'
  },
  {
    title: 'Standard News',
    desc: 'A modern frontend news portal presenting the latest stories and articles in a clean layout. Optimized for readability and quick access to various news categories.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    img: '/images/standard news.png',
    link: 'https://standard-news-next-rugk.vercel.app/category/04',
    github: 'https://github.com/noorispeace1/standard-news-next',
    large: false,
    category: 'frontend'
  },
  {
    title: 'Aurelia Summer',
    desc: 'A vibrant and modern frontend website featuring smooth animations, a responsive grid layout, and an engaging user interface.',
    tags: ['React', 'Tailwind CSS'],
    img: '/images/aura-summer.png',
    link: 'https://aurelia-summer.vercel.app/',
    github: 'https://github.com/noorispeace1/Aurelia-Summer',
    large: false,
    category: 'frontend'
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const counts = {
    all: projects.length,
    frontend: projects.filter(p => p.category === 'frontend').length,
    backend: projects.filter(p => p.category === 'backend').length,
    fullstack: projects.filter(p => p.category === 'fullstack').length,
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.gsap-project-card');
      
      cards.forEach((card, i) => {
        gsap.fromTo(card, 
          { 
            opacity: 0, 
            y: 50, 
            scale: 0.95, 
            filter: "blur(5px)"
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
      
      // Animate Section Header
      gsap.fromTo('.projects-header', 
        { opacity: 0, y: -30 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.projects-header',
            start: "top 85%"
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, [filter]);

  return (
    <section id="projects" className="pt-32" ref={containerRef}>
      <div className="projects-header flex flex-col items-center">
        <SectionHeader
          subtitle="Selected Works"
          title="Featured Projects"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 mb-12">
          {['all', 'frontend', 'backend', 'fullstack'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-primary text-white border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] scale-105' 
                  : 'bg-surface/50 backdrop-blur-md text-on-surface hover:bg-primary/10 hover:border-primary/40 border-on-surface/10 hover:scale-105'
              }`}
            >
              <span>{cat}</span>
              <span className={`flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-black transition-colors ${
                filter === cat 
                  ? 'bg-white text-primary shadow-inner' 
                  : 'bg-on-surface/10 text-on-surface-variant'
              }`}>
                {counts[cat]}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4 md:px-8 perspective-[1000px]">
        {filteredProjects.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className="gsap-project-card group relative flex flex-col overflow-hidden rounded-[2rem] bg-on-surface/[0.03] backdrop-blur-[40px] border border-on-surface/10 hover:border-primary/40 transition-all duration-500 shadow-xl hover:shadow-[0_10px_40px_rgba(var(--primary-rgb),0.15)] hover:-translate-y-2"
          >
            {/* Project Image - Top Section */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Optional overlay just to darken image slightly if needed, but text is below now */}
              <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Content - Bottom Section */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-10 bg-gradient-to-b from-transparent to-background/50">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] uppercase tracking-widest font-bold text-primary shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-on-surface mb-3 tracking-tight group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-on-surface-variant text-sm sm:text-base mb-8 flex-1 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-auto">
                <Link target='_blank' href={project.github} className="btn btn-primary bg-primary/10 hover:bg-primary hover:text-white text-primary border border-primary/30 btn-sm rounded-xl px-4 font-bold tracking-wide gap-2 flex items-center transition-all">
                  <FaGithub size={16} />
                  {project.serverGithub ? 'Client' : 'GitHub'}
                </Link>
                {project.serverGithub && (
                  <Link target='_blank' href={project.serverGithub} className="btn btn-primary bg-primary/10 hover:bg-primary hover:text-white text-primary border border-primary/30 btn-sm rounded-xl px-4 font-bold tracking-wide gap-2 flex items-center transition-all">
                    <FaGithub size={16} />
                    Server
                  </Link>
                )}
                <Link target='_blank' href={project.link} className="btn btn-outline border-on-surface/20 text-on-surface hover:text-primary hover:bg-primary/10 hover:border-primary/50 btn-sm rounded-xl px-4 font-bold tracking-wide gap-2 flex items-center transition-all">
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  Live
                </Link>

                {/* Social Links */}
                <div className="flex items-center gap-1 ml-auto">
                  <Link target='_blank' href="https://www.youtube.com/@AhosanulHaqueNoor-j5i" className="p-2 rounded-full hover:bg-red-500/20 text-on-surface-variant hover:text-red-500 transition-all" title="Watch on YouTube">
                    <FaYoutube size={18} />
                  </Link>
                  <Link target='_blank' href="https://www.linkedin.com/in/ahosanul-haque-noor-b4a02b2a5" className="p-2 rounded-full hover:bg-blue-500/20 text-on-surface-variant hover:text-blue-500 transition-all" title="Discuss on LinkedIn">
                    <FaLinkedin size={18} />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Decorative Corner Icon */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
              <span className="material-symbols-outlined text-white">arrow_outward</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;