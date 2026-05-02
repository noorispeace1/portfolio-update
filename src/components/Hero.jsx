"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import GlassCard from './GlassCard';

const Hero = () => {
  return (
    <section
      id="hero"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-20 sm:pb-28 lg:pb-32 relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">

        {/* Content Column */}
        <div className="md:col-span-7 space-y-6 sm:space-y-8">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-[14px]">bolt</span>
            Available for new projects
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-on-surface leading-tight sm:leading-[1.1] tracking-tight font-display"
          >
            Hi, I'm Ahosanul Haque Noor{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-container">
              Full Stack Developer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base lg:text-lg font-normal text-on-surface-variant max-w-xl leading-relaxed"
          >
            I build modern, fast, and responsive web applications using React
            and Next.js. I focus on clean UI design, smooth user experience,
            and performance optimization.
            <br /><br />
            Currently, I’m improving my full-stack skills and preparing for
            opportunities in professional software development teams.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4"
          >
            {/* Primary */}
            <button className="btn btn-primary px-6 sm:px-8 py-3 sm:py-4 h-auto rounded-xl shadow-lg shadow-primary/20">
              Let’s Work Together
            </button>
            {/* Resume Download */}
            <a
              href="/resume.pdf" // put your CV in /public folder
              download
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 text-sm sm:text-base font-medium"
            >
              <span className="material-symbols-outlined text-[18px]">
                download
              </span>
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Image Column */}
        <div className="md:col-span-5 relative flex justify-center mt-6 lg:mt-0">

          <GlassCard
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden w-full max-w-[360px] mx-auto aspect-[3/4]"
          >
            <Image
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="High-end professional portrait of Noor"
              src="https://i.ibb.co.com/cctyTNsz/my.jpg"
              fill
              sizes="(max-width: 640px) 100vw, 360px"
              priority
            />
          </GlassCard>

          {/* Decorative Element */}
          <GlassCard
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 12 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="
              absolute 
              top-0 right-0 
              translate-x-1/4 -translate-y-1/4 
              sm:translate-x-1/3 sm:-translate-y-1/3
              w-12 h-12 
              sm:w-14 sm:h-14 
              lg:w-16 lg:h-16 
              rounded-2xl flex items-center justify-center 
              z-20
            "
          >
            <span
              className="material-symbols-outlined text-primary text-xl sm:text-2xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              deployed_code
            </span>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};

export default Hero;