"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaYoutube, FaCode } from 'react-icons/fa';

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nameRef.current) nameRef.current.value = "";
    if(emailRef.current) emailRef.current.value = "";
    if(subjectRef.current) subjectRef.current.value = "";
    if(messageRef.current) messageRef.current.value = "";
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-8 pt-32 pb-20">
      <div className="flex flex-col items-center mb-16">
        <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
           <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
           GET IN TOUCH
        </div>
        <h2 className="text-4xl md:text-5xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-white to-[#d4bfff]">
          Let&apos;s Connect
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Side */}
        <div className="space-y-8">
          <div>
            <h4 className="text-[10px] sm:text-xs font-bold tracking-widest text-primary uppercase mb-3">Get in touch</h4>
            <h3 className="text-3xl sm:text-4xl md:text-[2.75rem] font-display font-bold text-on-surface mb-4 leading-[1.1] tracking-tight">
              Let&apos;s build something <span className="text-primary">great</span> together.
            </h3>
            <p className="text-on-surface-variant text-sm sm:text-base max-w-md leading-relaxed">
              My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll get back to you!
            </p>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#120822]/80 border border-on-surface/10 hover:border-primary/30 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-[#1a0b33] border border-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold mb-1">Email</p>
                <p className="text-xs sm:text-sm font-semibold text-on-surface tracking-wide">ahosanulhaquenoor@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#120822]/80 border border-on-surface/10 hover:border-primary/30 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-[#1a0b33] border border-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[18px]">call</span>
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold mb-1">Phone</p>
                <p className="text-xs sm:text-sm font-semibold text-on-surface tracking-wide">+8801851600159</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#120822]/80 border border-on-surface/10 hover:border-primary/30 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-[#1a0b33] border border-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold mb-1">Location</p>
                <p className="text-xs sm:text-sm font-semibold text-on-surface tracking-wide">Khulna, Bangladesh</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase mb-4 mt-8">Find me on</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <FaGithub />, name: 'GitHub', link: 'https://github.com/noorispeace1' },
                { icon: <FaLinkedin />, name: 'LinkedIn', link: 'https://www.linkedin.com/in/ahosanul-haque-noor-b4a02b2a5' },
                { icon: <FaYoutube />, name: 'YouTube', link: 'https://www.youtube.com/@AhosanulHaqueNoor-j5i' },
                { icon: <FaCode />, name: 'LeetCode', link: '#' },
              ].map((social) => (
                <Link 
                  key={social.name} 
                  href={social.link} 
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#120822] border border-on-surface/10 text-on-surface-variant hover:text-white hover:border-primary/50 transition-all text-xs font-semibold tracking-wide"
                >
                  {social.icon}
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <div className="bg-[#120822] rounded-[1.5rem] p-6 sm:p-8 border border-white/5 shadow-xl h-full flex flex-col">
            <h3 className="text-lg font-bold text-on-surface mb-8 flex items-center gap-3 tracking-wide">
              <span className="w-8 h-8 rounded-lg bg-[#1a0b33] border border-white/5 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[16px]">mail</span>
              </span>
              Send me a message
            </h3>

            <form className="space-y-6 flex-1 flex flex-col" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    ref={nameRef}
                    className="w-full bg-[#1a0b33] border border-white/5 rounded-xl px-5 py-3.5 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="Your Name"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    ref={emailRef}
                    className="w-full bg-[#1a0b33] border border-white/5 rounded-xl px-5 py-3.5 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="Your Email"
                    type="email"
                  />
                </div>
              </div>
              
              <div>
                <input
                  ref={subjectRef}
                  className="w-full bg-[#1a0b33] border border-white/5 rounded-xl px-5 py-3.5 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
                  placeholder="Subject"
                  type="text"
                />
              </div>

              <div className="flex-1">
                <textarea
                  ref={messageRef}
                  className="w-full h-full min-h-[160px] bg-[#1a0b33] border border-white/5 rounded-xl px-5 py-4 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 rounded-xl bg-[#8a42f5] hover:bg-[#9d60f5] text-white font-bold tracking-wide text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(138,66,245,0.4)] mt-2"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                Send Message &rarr;
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
