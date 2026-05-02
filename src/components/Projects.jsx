"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

const projects = [
  // {
  //   title: 'Pixgen',
  //   desc: 'A secure authentication system built with Next.js using Google OAuth. Includes protected routes, session handling, and user profile management.',
  //   tags: ['Next.js', 'NextAuth', 'Google OAuth', 'Auth'],
  //   img: 'https://i.ibb.co.com/LzmBFDTX/Screenshot-2026-05-01-012526.png',
  //   link: 'https://pixgen09.vercel.app',
  //  links: 'https://github.com/sohan24-dev/Pixgen02',
  //   large: false
  // },
  {
    title: 'FoodNest – Restaurant & Food Ordering UI',
    desc: 'A modern restaurant website featuring a clean UI to explore menus, view dishes, and enhance the dining experience with a smooth and user-friendly design',
    tags: ['React', 'Next.js', 'Tailwind'],
    img: 'https://i.ibb.co.com/V8ksBp5/Screenshot-51.png',
    link: 'https://keen-keeper-software.vercel.app',
    links: 'https://github.com/noorispeace1/keen-keeper',
    large: false
  },
  {
    title: 'Contact Hub UI System',
    desc: 'A modern responsive contact UI built with React featuring form validation, real-time input feedback, loading states, and a clean design for smooth and easy communication.',
    tags: ['React', 'UI Design','Next.Js','MOngoDB',"Better Auth"],
    img: 'https://i.ibb.co.com/8DtvDxfT/Screenshot-50.png',
    link: 'https://standard-news-next-rugk.vercel.app',
    links: 'https://github.com/noorispeace1/standard-news-next',
    large: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="pt-32 ">
      <SectionHeader
        subtitle="Selected Works"
        title="Featured Projects"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {projects.map((project, index) => (
          <GlassCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className={`${project.large ? 'lg:col-span-2' : ''} group relative overflow-hidden rounded-[2.5rem] h-[450px] cursor-pointer border-on-surface/5 hover:border-primary/30 transition-all duration-700 shadow-2xl`}
          >
            {/* Project Image */}
            <div className="absolute inset-0">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000 ease-out"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end transform group-hover:translate-y-[-10px] transition-transform duration-500">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-on-surface/5 border border-on-surface/10 text-[10px] uppercase tracking-widest font-bold text-primary backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className={`${project.large ? 'text-4xl' : 'text-2xl'} font-display font-bold text-on-surface mb-4 leading-tight`}>
                {project.title}
              </h3>

              <p className="text-on-surface-variant text-sm max-w-lg mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                {project.desc}
              </p>

              <div className="flex items-center gap-4">
                <Link target='_blank'  href={project.links} className="btn btn-primary btn-sm rounded-xl px-6 font-bold tracking-tight">
                  View Details
                </Link>
                <Link target='_blank' href={project.link} className="btn btn-ghost btn-circle btn-sm bg-on-surface/5 border border-on-surface/10 text-on-surface hover:bg-primary transition-all">
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </Link>
              </div>
            </div>

            {/* Decorative Corner Icon */}
            <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-on-surface/5 backdrop-blur-xl border border-on-surface/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="material-symbols-outlined text-primary">arrow_outward</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;