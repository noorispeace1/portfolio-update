"use client";
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { 
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiReact, 
  SiTailwindcss, SiRedux, SiNextdotjs, SiFirebase, SiNodedotjs, 
  SiExpress, SiDjango, SiPostgresql, SiMongodb, SiPrisma, SiDocker 
} from 'react-icons/si';

const skillsData = [
  { name: 'JavaScript', category: 'Languages', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', category: 'Languages', icon: SiTypescript, color: '#3178C6' },
  { name: 'Python', category: 'Languages', icon: SiPython, color: '#3776AB' },
  { name: 'C++', category: 'Languages', icon: SiCplusplus, color: '#00599C' },
  
  { name: 'React', category: 'Frontend', icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Redux', category: 'Frontend', icon: SiRedux, color: '#764ABC' },
  { name: 'Next.js', category: 'Frontend', icon: SiNextdotjs, color: '#ffffff' },
  
  { name: 'Node.js', category: 'Backend', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', category: 'Backend', icon: SiExpress, color: '#ffffff' },
  { name: 'Django', category: 'Backend', icon: SiDjango, color: '#092E20' },
  
  { name: 'PostgreSQL', category: 'Database', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', category: 'Database', icon: SiMongodb, color: '#47A248' },
  { name: 'Prisma', category: 'Database', icon: SiPrisma, color: '#ffffff' },
  { name: 'Firebase', category: 'Database', icon: SiFirebase, color: '#FFCA28' },
  
  { name: 'Docker', category: 'Tools & DevOps', icon: SiDocker, color: '#2496ED' },
];

const categories = ['All Technologies', 'Languages', 'Frontend', 'Backend', 'Database', 'Tools & DevOps'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All Technologies');
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  const filteredSkills = activeCategory === 'All Technologies' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.skills-title', 
        { opacity: 0, y: -20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );

      // Filters animation
      gsap.fromTo('.skills-filter', 
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.05, 
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Filter change animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-card', 
        { opacity: 0, scale: 0.5, rotationY: 90 },
        { 
          opacity: 1, 
          scale: 1, 
          rotationY: 0, 
          duration: 0.6, 
          stagger: {
            amount: 0.3,
            from: "random"
          },
          ease: 'back.out(1.2)',
          overwrite: true
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section id="skills" className="pt-32 pb-16 min-h-[80vh] flex flex-col items-center" ref={containerRef}>
      {/* Title */}
      <h2 className="skills-title text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#d4bfff] mb-12 font-display tracking-tighter drop-shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]">
        My Skills
      </h2>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-16 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`skills-filter px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 ${
              activeCategory === category 
                ? 'bg-primary/20 text-primary border border-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]' 
                : 'text-on-surface-variant hover:text-on-surface hover:bg-on-surface/10 border border-transparent'
            }`}
          >
            {activeCategory === category && (
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            )}
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div 
        ref={gridRef}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-10 px-4 max-w-5xl w-full"
        style={{ perspective: '1000px' }}
      >
        {filteredSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={`${skill.name}-${index}`}
              className="skill-card group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-on-surface/[0.02] border border-on-surface/10 hover:border-primary/50 transition-all duration-300 cursor-pointer backdrop-blur-sm"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Hover Glow Effect mimicking the screenshot */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: skill.color, opacity: 'var(--hover-opacity, 0)' }}
              ></div>
              
              {/* Icon Container */}
              <div 
                className="relative z-10 text-4xl sm:text-5xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2"
                style={{ color: 'var(--fallback-color, #a370f7)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = skill.color;
                  e.currentTarget.previousSibling.style.setProperty('--hover-opacity', '0.15');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--fallback-color, #a370f7)';
                  e.currentTarget.previousSibling.style.setProperty('--hover-opacity', '0');
                }}
              >
                <Icon />
              </div>

              {/* Skill Name Tooltip (appears on hover) */}
              <span className="absolute -bottom-6 text-xs font-bold tracking-widest text-on-surface opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
