"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import GlassCard from './GlassCard';
import { FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start ">

      {/* Profile Sidebar */}
      <aside className="md:col-span-5 space-y-8 md:sticky md:top-28">
        <GlassCard
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-8 rounded-3xl overflow-hidden relative group"
        >
          <div className="avatar mb-6 w-full">
            <div className="w-full rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 relative aspect-square">
              <Image
                alt="Noor Professional Portrait"
                src="https://i.ibb.co.com/Pv16Y9Tb/Whats-App-Image-2026-05-02-at-12-00-43-PM-1.jpg"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-on-surface leading-tight tracking-tight">
              Noor
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-[2px] bg-primary rounded-full"></div>

              <h3 className="text-lg sm:text-xl font-medium text-primary tracking-wide">
                Full stack developer
              </h3>
            </div>

            <p className="text-on-surface-variant text-base leading-relaxed">
              Passionate about building modern, responsive & scalable web applications.
            </p>

            <div className="flex gap-4 pt-4">
              {[
                {
                  icon: <FaYoutube />,
                  href: "https://www.youtube.com/@AhosanulHaqueNoor-j5i",
                  key: "youtube",
                },
                {
                  icon: <FaGithub />,
                  href: "https://github.com/noorispeace1",
                  key: "github",
                },
                {
                  icon: <FaLinkedin />,
                  href: "https://www.linkedin.com/in/ahosanul-haque-noor-b4a02b2a5",
                  key: "linkedin",
                },
              ].map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  className="btn btn-ghost btn-circle btn-sm bg-on-surface/5 border-on-surface/10 text-primary hover:bg-primary hover:text-on-primary transition-all duration-300"
                >
                  {item.icon}
                </Link>
              ))}
            </div>

            <button className="btn btn-primary w-full mt-6 rounded-xl font-semibold hover:shadow-lg shadow-primary/20 transition-all">
              Hire Me / Let’s Work Together
            </button>
          </div>
        </GlassCard>
      </aside>

      {/* Main Content */}
      <div className="md:col-span-7 space-y-16">

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="font-display text-4xl font-bold text-on-surface">
            About Me
          </h2>

          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              I am a Junior Full-Stack Developer with a strong passion for building modern, responsive, and user-friendly web applications. My journey started with curiosity about how websites work, which led me to learn HTML and CSS, and gradually move into JavaScript, React, and Next.js. I am now expanding my skills toward full-stack development.
            </p>

            <p>
              I enjoy creating clean UI designs and solving real-world problems through code. I am especially interested in frontend development, where I can combine logic and creativity to build smooth and interactive user experiences.
            </p>

            <p>
              Outside of programming, I enjoy exploring new technologies, learning about UI/UX design, and improving my problem-solving skills. I also like spending time on self-development and staying updated with modern tech trends.
            </p>

          </div>
        </motion.div>

        {/* Interests */}
        <div className="space-y-6">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-semibold text-on-surface border-l-4 border-primary pl-4"
          >
            Interests & Personality
          </motion.h3>

          <div className="flex flex-wrap gap-4">
            {[
              "Problem Solving",
              "UI/UX Design",
              "Learning New Tech",
              "Self Growth",
              "Creative Thinking"
            ].map((item, i) => (
              <GlassCard
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-3 rounded-xl text-sm font-medium text-on-surface hover:border-primary/50 transition-all"
              >
                {item}
              </GlassCard>
            ))}
          </div>
        </div>



      </div>
    </section>
  );
};

export default About;