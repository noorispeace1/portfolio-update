"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const projectRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    nameRef.current.value = "";
    emailRef.current.value = "";
    projectRef.current.value = "";

  };
  return (
    <section id="contact" className="max-w-7xl mx-auto px-8 ">
      <SectionHeader
        subtitle="Contact Me"
        title="Get in Touch"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Talk to me */}
        <div className="lg:col-span-5 space-y-8">
          <h2 className="text-2xl font-bold text-on-surface mb-8 flex items-center gap-3 font-display">
            <span className="material-symbols-outlined text-primary">chat_bubble</span>
            Talk to me
          </h2>

          {[
            { label: 'Email', value: 'ahosanulhaquenoor@gmail.com', icon: 'mail' },
            { label: 'LinkedIn', value: 'https://www.linkedin.com/in/ahosanul-haque-noor-b4a02b2a5', icon: 'link' },
            { label: 'WhatsApp', value: '+8801851600159', icon: 'chat' }
          ].map((item, idx) => (
            <GlassCard key={idx} className="p-6 rounded-xl flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div>
                <p className="text-on-surface-variant/70 text-xs uppercase tracking-wider font-semibold">{item.label}</p>
                <p className="text-on-surface font-medium">{item.value}</p>
              </div>
            </GlassCard>
          ))}

          <GlassCard className="rounded-2xl overflow-hidden h-64 mt-12 relative">
            <Image
              className="w-full h-full object-cover grayscale opacity-50"
              alt="SOHAN's workspace"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNiWSnOFviz8pbDgHiBPNUuDV6bAleI1H9pKQacXSXhAAD3G-2kfpCY-j80BUn4AWk68VXfEuaDk6z5zUDmiBVzj8w2KAg8SlPdK0ogxxVyDHQQgMPYDhSz71aQdG3_o17TD4QIbY1qbZBh8O8ccEjlK1wDdJbE-MNjB0rDnwXvBRNREhiIcSf4KxLK8MpTWo09CDTi48I2WfzLQQMAW41IBfdVVoibFbQ1iN88gjZLTPYkDIz9R5G5OjFAF_u4WW555eqQERFevA"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          </GlassCard>
        </div>

        {/* Right: Write me your project */}
        <div className="lg:col-span-7">
          <GlassCard className="p-8 rounded-2xl h-full">
            <h2 className="text-2xl font-bold text-on-surface mb-10 flex items-center gap-3 font-display">
              <span className="material-symbols-outlined text-primary">edit_note</span>
              Write me your project
            </h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <label className="absolute -top-3 left-4 px-2 bg-background text-primary text-[10px] font-bold tracking-widest uppercase z-10">Name</label>
                <input
                  ref={nameRef}
                  className="w-full bg-on-surface/5 border border-on-surface/10 rounded-xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                  placeholder="Insert your name"
                  type="text"
                />
              </div>
              <div className="relative group">
                <label className="absolute -top-3 left-4 px-2 bg-background text-primary text-[10px] font-bold tracking-widest uppercase z-10">Email</label>
                <input
                  ref={emailRef}
                  className="w-full bg-on-surface/5 border border-on-surface/10 rounded-xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                  placeholder="Insert your email"
                  type="email"
                />
              </div>
              <div className="relative group">
                <label className="absolute -top-3 left-4 px-2 bg-background text-primary text-[10px] font-bold tracking-widest uppercase z-10">Project</label>
                <textarea
                  ref={projectRef}
                  className="w-full bg-on-surface/5 border border-on-surface/10 rounded-xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none resize-none"
                  placeholder="Write your project details"
                  rows="6"
                ></textarea>
              </div>
              <button onClick={handleSubmit} className="btn btn-primary w-full py-4 h-auto rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3 text-lg font-bold" type="submit">
                Send Message
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};


export default Contact;
