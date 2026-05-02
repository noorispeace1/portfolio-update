"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const stats = [
  { label: 'Experience', value: '1+ Year', sub: 'Learning & Building Web Apps' },
  { label: 'Practice', value: '1000+ Hours', sub: 'Frontend Development Practice' },
  { label: 'Projects', value: '10+ Projects', sub: 'Personal & Learning Projects' },
  { label: 'Growth', value: 'Daily', sub: 'Improving React & Next.js Skills' },
];

import GlassCard from './GlassCard';

const Stats = () => {
  const statsRef = useRef([]);

  useEffect(() => {
    statsRef.current.forEach((el, i) => {
      if (el) {
        gsap.to(el, {
          y: 15,
          duration: 2 + i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.1,
        });
      }
    });
  }, []);

  return (
    <div className="grid 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-4 
  gap-4 sm:gap-6 
  mb-20 sm:mb-32 
  max-w-7xl mx-auto 
  px-4 sm:px-6 lg:px-8"
    >
      {stats.map((stat, index) => (
        <GlassCard
          key={index}
          ref={(el) => (statsRef.current[index] = el)}
          className="p-4 sm:p-6 lg:p-8 rounded-2xl 
                 group hover:border-primary/50 
                 transition-colors text-center sm:text-left"
        >
          <div className="text-on-surface-variant/70 
                      text-[10px] sm:text-xs 
                      uppercase font-semibold 
                      mb-1 sm:mb-2 
                      tracking-wider font-display">
            {stat.label}
          </div>

          <div className="text-2xl sm:text-3xl lg:text-4xl 
                      font-bold text-on-surface 
                      mb-1 font-display">
            {stat.value}
          </div>

          <div className="text-on-surface-variant 
                      text-xs sm:text-sm">
            {stat.sub}
          </div>
        </GlassCard>
      ))}
    </div>
  );
};


export default Stats;
