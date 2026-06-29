"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeader';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const projects = [
  {
    title: 'Talentist Velo',
    desc: 'A dynamic talent acquisition platform and job board engineered with Next.js, featuring secure user authentication, responsive component-driven UI, and streamlined data flows connecting job seekers with recruiters.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    img: '/images/talentist_mockup.png',
    link: 'https://talentist-velo.vercel.app/',
    github: 'https://github.com/noorispeace1/talentist-velo',
    large: false
  },
  {
    title: 'Novamed NSJS',
    desc: 'A robust healthcare and medicine delivery platform built for scale. Implements seamless product management, user authentication, and optimized performance for medical e-commerce.',
    tags: ['React', 'Next.js', 'Stripe', 'MongoDB'],
    img: '/images/novamed_mockup.png',
    link: 'https://novamed-nsjs.vercel.app/',
    github: 'https://github.com/noorispeace1/novamed-nsjs',
    large: false
  },
  {
    title: 'Rent Desh',
    desc: 'An innovative rental platform for Bangladesh empowering users to securely list and rent properties or equipment. Built with a responsive modern UI, robust backend, and advanced search features.',
    tags: ['React', 'Next.js', 'AWS', 'Node.js'],
    img: '/images/rentdesh_mockup.png',
    link: 'https://rent-desh.vercel.app/',
    github: 'https://github.com/noorispeace1/rent-desh-',
    large: true
  }
];

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.gsap-project-card');
      
      cards.forEach((card, i) => {
        gsap.fromTo(card, 
          { 
            opacity: 0, 
            y: 100, 
            scale: 0.9, 
            rotationX: 15,
            filter: "blur(10px)"
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "expo.out",
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
  }, []);

  return (
    <section id="projects" className="pt-32" ref={containerRef}>
      <div className="projects-header">
        <SectionHeader
          subtitle="Selected Works"
          title="Featured Projects"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4 md:px-8 perspective-[1000px]">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`gsap-project-card ${project.large ? 'lg:col-span-2' : ''} group relative overflow-hidden rounded-[2.5rem] h-[480px] cursor-pointer bg-on-surface/[0.03] backdrop-blur-[40px] border border-on-surface/10 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)] transition-all duration-700 shadow-2xl`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Project Image */}
            <div className="absolute inset-0">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-110 transition-all duration-1000 ease-out"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent group-hover:from-background/90 group-hover:via-background/70 transition-all duration-700"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end transform group-hover:translate-y-[-10px] transition-transform duration-500">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-on-surface/10 border border-on-surface/20 text-[10px] uppercase tracking-widest font-bold text-primary backdrop-blur-md shadow-lg shadow-black/20">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className={`${project.large ? 'text-4xl lg:text-5xl' : 'text-3xl'} font-display font-bold text-on-surface mb-3 leading-tight drop-shadow-md`}>
                {project.title}
              </h3>

              <p className="text-on-surface-variant text-sm sm:text-base max-w-lg mb-8 opacity-80 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3 md:line-clamp-none drop-shadow-md">
                {project.desc}
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-auto">
                <Link target='_blank' href={project.github} className="btn btn-primary bg-primary hover:bg-primary-container text-white border-none shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)] btn-sm sm:btn-md rounded-xl px-4 sm:px-6 font-bold tracking-wide gap-2 flex items-center">
                  <FaGithub size={18} />
                  GitHub
                </Link>
                <Link target='_blank' href={project.link} className="btn btn-outline border-white/20 text-white hover:text-primary hover:bg-white/10 hover:border-primary btn-sm sm:btn-md rounded-xl px-4 sm:px-6 font-bold tracking-wide gap-2 flex items-center backdrop-blur-md transition-all">
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  Live
                </Link>

                {/* Social Links per project as requested */}
                <div className="flex items-center gap-2 ml-auto">
                  <Link target='_blank' href="https://www.youtube.com/@AhosanulHaqueNoor-j5i" className="btn btn-ghost btn-circle btn-sm sm:btn-md bg-white/5 hover:bg-red-500/20 text-white/70 hover:text-red-500 transition-all border border-white/10 backdrop-blur-sm" title="Watch on YouTube">
                    <FaYoutube size={16} />
                  </Link>
                  <Link target='_blank' href="https://www.linkedin.com/in/ahosanul-haque-noor-b4a02b2a5" className="btn btn-ghost btn-circle btn-sm sm:btn-md bg-white/5 hover:bg-blue-500/20 text-white/70 hover:text-blue-500 transition-all border border-white/10 backdrop-blur-sm" title="Discuss on LinkedIn">
                    <FaLinkedin size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Decorative Corner Icon */}
            <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 shadow-xl">
              <span className="material-symbols-outlined text-white">arrow_outward</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;