"use client";
import React from 'react';
import { motion } from 'framer-motion';

import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

const Qualification = () => {
  return (
    <section
      id="qualification"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 relative"
    >
      <SectionHeader
        subtitle="My personal journey"
        title="Qualification"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative">

        {/* Timeline line (only desktop) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-on-surface/10 hidden md:block"></div>

        {/* ================= EDUCATION ================= */}
        <div className="space-y-10 sm:space-y-14">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-10 md:justify-end"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-on-surface font-display">
              Education
            </h2>
            <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
              school
            </span>
          </motion.div>

          {[
            { year: '2021 - 2023', title: 'Higher School Certificate (HSC)', institution: 'Govt M.U College.Kaliganj,Jhenaidah' },
            { year: '2023 - 2024', title: 'University Certificate (BSC)', institution: 'Green University Of Bangladesh' }
          ].map((item, idx) => (
            <div key={idx} className="relative flex md:justify-end">

              <GlassCard
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-4 sm:p-6 lg:p-8 rounded-xl w-full max-w-md 
                       group hover:border-primary/40 transition-all duration-300"
              >
                <div className="text-primary text-[10px] sm:text-xs font-semibold mb-1 sm:mb-2">
                  {item.year}
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-on-surface mb-1 sm:mb-2 font-display">
                  {item.title}
                </h3>

                <p className="text-on-surface-variant text-xs sm:text-sm">
                  {item.institution}
                </p>
              </GlassCard>

              {/* Dot */}
              <div className="absolute top-1/2 -right-3 translate-x-1/2 -translate-y-1/2 
                          w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full 
                          hidden md:block shadow-[0_0_15px_rgba(179,197,255,0.8)]">
              </div>
            </div>
          ))}
        </div>

        {/* ================= EXPERIENCE ================= */}
        <div className="space-y-10 sm:space-y-14 md:mt-20">

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-10"
          >
            <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
              work
            </span>

            <h2 className="text-xl sm:text-2xl font-semibold text-on-surface font-display">
              Experience
            </h2>
          </motion.div>

          {[
            {
              year: "2025 - Present",
              title: "Junior Web Developer (Learning & Practice)",
              company: "Personal Projects & Programming Hero"
            },
            {
              year: "2024 - 2025",
              title: "Frontend Development Learner (HTML, CSS, JavaScript)",
              company: "Programming Hero"
            }
          ].map((item, idx) => (
            <div key={idx} className="relative flex">

              <GlassCard
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx + 3) * 0.1 }}
                className="p-4 sm:p-6 lg:p-8 rounded-xl w-full max-w-md 
                       group hover:border-primary/40 transition-all duration-300"
              >
                <div className="text-primary text-[10px] sm:text-xs font-semibold mb-1 sm:mb-2">
                  {item.year}
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-on-surface mb-1 sm:mb-2 font-display">
                  {item.title}
                </h3>

                <p className="text-on-surface-variant text-xs sm:text-sm">
                  {item.company}
                </p>
              </GlassCard>

              {/* Dot */}
              <div className="absolute top-1/2 -left-3 -translate-x-1/2 -translate-y-1/2 
                          w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full 
                          hidden md:block shadow-[0_0_15px_rgba(179,197,255,0.8)]">
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


export default Qualification;
