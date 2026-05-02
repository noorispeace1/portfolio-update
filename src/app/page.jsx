"use client";
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Qualification from '@/components/Qualification';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import DecorativeSection from '@/components/DecorativeSection';
import Footer from '@/components/Footer';
import Experience from '@/components/Experience';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-primary-container selection:text-white">
      {/* Glow Elements */}
      <div className="absolute blur-[80px] -z-10 opacity-15 bg-primary w-[500px] h-[500px] top-[-100px] left-[-100px] rounded-full"></div>
      <div className="absolute blur-[80px] -z-10 opacity-15 bg-secondary-container w-[400px] h-[400px] bottom-0 right-[-100px] rounded-full"></div>

      <Navbar />

      <main className="max-w-7xl mx-auto pt-20 px-4 md:px-8">
        <Hero />
        <Stats />
        <About></About>
        <Experience></Experience>
        <Qualification />
        <Projects />
        <Services />
        <Contact />
        <DecorativeSection />
      </main>

      <Footer />
    </div>
  );
}

