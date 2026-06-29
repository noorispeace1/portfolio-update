"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const marqueeText = "LET'S BUILD SOMETHING GREAT • FULL STACK DEVELOPER • REACT & NEXT.JS EXPERT • ALWAYS OPEN FOR A CHAT • LET'S CREATE TOGETHER • ";
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#090314] overflow-hidden pt-10 border-t border-on-surface/5">
      
      {/* Marquee Section */}
      <div className="relative flex overflow-x-hidden border-b border-white/5 py-4 bg-[#0d061c]">
        <motion.div
          className="flex whitespace-nowrap text-[#392361] font-black text-sm tracking-[0.3em]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          <span>{marqueeText.repeat(5)}</span>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-24 flex flex-col items-center text-center z-10 relative">
        <h4 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-primary uppercase mb-6 opacity-80">
          Let&apos;s work together
        </h4>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary/80 mb-8 tracking-tighter drop-shadow-lg">
          Ahosanul Haque Noor
        </h1>
        
        <p className="text-on-surface-variant/80 text-sm md:text-base max-w-xl leading-relaxed mb-10">
          Passionate full-stack developer creating elegant solutions to complex problems with modern technologies and unparalleled aesthetic focus.
        </p>

        <Link 
          href="#contact" 
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#6929c4] hover:bg-[#7c3aed] text-white rounded-full font-bold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(105,41,196,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:-translate-y-1"
        >
          Start a Conversation
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
        </Link>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-16 text-sm font-semibold tracking-wide text-on-surface-variant/80">
          <Link href="https://github.com/noorispeace1" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
            <FaGithub size={16} /> GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/ahosanul-haque-noor-b4a02b2a5" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
            <FaLinkedin size={16} /> LinkedIn
          </Link>
          <Link href="https://www.youtube.com/@AhosanulHaqueNoor-j5i" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
            <FaYoutube size={16} /> YouTube
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-center items-center relative border-t border-white/5">
        <p className="text-[10px] md:text-[11px] text-on-surface-variant/60 tracking-widest font-medium uppercase text-center mt-4 md:mt-0">
          © {new Date().getFullYear()} • Built with precision by Ahosanul Haque Noor
        </p>

        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop}
          className="absolute right-4 md:right-8 -top-5 w-10 h-10 md:w-12 md:h-12 bg-[#0066ff] hover:bg-[#3385ff] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all hover:-translate-y-2 group"
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined text-[20px] md:text-[24px] group-hover:animate-bounce">
            arrow_upward
          </span>
        </button>
      </div>

    </footer>
  );
};

export default Footer;