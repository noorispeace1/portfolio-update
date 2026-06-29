"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Hero = () => {
  const polygonRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);

  const splitText = (text, className) => {
    return text.split(' ').map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.3em]">
        {word.split('').map((char, charIndex) => (
          <span key={charIndex} className={`opacity-0 ${className} inline-block`}>
            {char}
          </span>
        ))}
      </span>
    ));
  };

  useEffect(() => {
    // 3D Flip up animation for title
    gsap.fromTo('.title-char', 
      { opacity: 0, y: 30, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "back.out(1.5)",
        delay: 0.5
      }
    );

    // Slide and fade in for subtitle
    gsap.fromTo('.subtitle-char', 
      { opacity: 0, x: -15, filter: "blur(4px)" },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        stagger: 0.03,
        duration: 0.4,
        ease: "power2.out",
        delay: 1.5 
      }
    );

    // Polygon pulsing animation
    gsap.to(polygonRef.current, {
      opacity: 0.8,
      scale: 1.05,
      rotation: 5,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Image float animation
    gsap.to(imageRef.current, {
      y: -15,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    // System online badge pulse
    gsap.to(badgeRef.current, {
      boxShadow: "0px 0px 20px rgba(77, 31, 133, 0.8)",
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden pt-20">
      
      {/* Background elements */}
      <div 
        ref={polygonRef}
        className="absolute left-[10%] md:left-[25%] top-1/2 -translate-y-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-[#1a0b33] opacity-80 blur-[2px] -z-10"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      ></div>

      {/* Social Links on extreme left */}
      <div className="hidden lg:flex flex-col gap-6 absolute left-0 top-1/2 -translate-y-1/2 border-l-2 border-[#4d1f85]/30 pl-6 z-20">
        {[
          { icon: <FaGithub size={20} />, url: 'https://github.com/noorispeace1' },
          { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/ahosanul-haque-noor-b4a02b2a5' },
          { icon: <FaYoutube size={20} />, url: 'https://www.youtube.com/@AhosanulHaqueNoor-j5i' }
        ].map((item, idx) => (
          <Link key={idx} href={item.url} target="_blank" className="text-on-surface-variant hover:text-[#b58cff] transition-all flex items-center justify-center hover:scale-110">
            {item.icon}
          </Link>
        ))}
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 z-10 pl-0 lg:pl-16 mt-12 md:mt-0">
          <div className="space-y-6">
            <h1 className="font-dot text-4xl sm:text-5xl md:text-6xl text-[#d4bfff] font-bold tracking-widest drop-shadow-[0_0_10px_rgba(212,191,255,0.8)]">
               {splitText("Hi, I'm Noor", "title-char")}
            </h1>
            <h2 className="font-dot text-xl sm:text-2xl md:text-3xl text-[#a370f7] font-bold tracking-[0.1em] drop-shadow-[0_0_8px_rgba(163,112,247,0.6)]">
               {splitText("A Full Stack Web Developer", "subtitle-char")}
            </h2>
          </div>
          
          <p className="text-on-surface-variant max-w-md leading-relaxed text-sm sm:text-base font-medium">
                           I'm currently working as a full stack web developer, sharing my passion for development while continually expanding my own skillset. I build modern, responsive web apps using React, Next.js, and Node.js to deliver seamless user experiences.
          </p>

          <div className="pt-4">
            <Link href="#contact" className="inline-flex items-center gap-3 px-6 py-3 border border-[#4d1f85] bg-[#1a0b33]/60 hover:bg-[#4d1f85]/60 text-[#d4bfff] rounded-lg transition-all duration-300 backdrop-blur-md text-xs sm:text-sm tracking-[0.15em] font-bold shadow-[0_0_20px_rgba(77,31,133,0.4)] group">
              <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform">mail</span>
              CONTACT ME
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end items-center z-10 pr-0 lg:pr-8 mt-10 md:mt-0">
           
           {/* Concentric rings */}
           <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-[#4d1f85]/40 -z-10"></div>
           <div className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] rounded-full border border-[#4d1f85]/20 -z-10 border-dashed"></div>
           
           {/* Connection line going left */}
           <div className="absolute right-[90%] top-1/2 -translate-y-1/2 w-20 md:w-32 h-[1px] bg-[#4d1f85] hidden md:block">
             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-[#a370f7] shadow-[0_0_10px_#a370f7]"></div>
             <div className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-[#a370f7]/50"></div>
           </div>

           {/* Profile Image Wrapper */}
           <div 
             ref={imageRef} 
             className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] rounded-[3rem] overflow-hidden border border-[#4d1f85]/50 shadow-[0_0_40px_rgba(77,31,133,0.3)] bg-[#1a0b33]"
           >
              <Image 
                src="https://i.ibb.co.com/cctyTNsz/my.jpg"
                alt="Noor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 340px"
                priority
              />
              {/* Horizontal blind overlay (scanlines effect) */}
              <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.8) 2px, rgba(0,0,0,0.8) 4px)' }}></div>
           </div>

           {/* System Online badge */}
           <div ref={badgeRef} className="absolute -bottom-4 -right-4 sm:-right-8 bg-[#1a0b33]/90 backdrop-blur-md border border-[#4d1f85] px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-[0_0_15px_rgba(77,31,133,0.5)] z-20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,1)]"></span>
              <span className="text-[10px] sm:text-xs text-[#d4bfff] font-dot tracking-[0.15em] uppercase">SYSTEM_ONLINE</span>
           </div>

        </div>

      </div>
    </section>
  );
};
export default Hero;