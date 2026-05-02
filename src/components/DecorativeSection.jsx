import React from 'react';
import Image from 'next/image';

import GlassCard from './GlassCard';

const DecorativeSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassCard className="rounded-3xl overflow-hidden h-96 relative group">
          <Image 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            alt="Innovation Focus" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-NMyJyaUIoha1enp7gd1pYAv05kw-3l50-jr_IAmRh5cxb_tRhkRsmNf08-64OshWw0zNxoL5HK-6o8s2sk5ga-ELGWQCvj0BJVQt5AsTnw4HOFGDvcQ65UWrdKx2q_HQ8B3HQ3qyfO28pTF1aFei03ZCYLW-LV307XCFB45rlARKkDOenurO62lEK8gKDLLFlS8uY83J810Eq4ULK6zi2MhnLvqCAYPX7Bmvc6deDKIVLkTalNJNAPXaBmNLMV78aj6xIBeIAAY"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          <div className="absolute bottom-8 left-8">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Innovation Focus</p>
            <h4 className="text-on-surface text-2xl font-bold font-display">High-Performance Code</h4>
          </div>
        </GlassCard>
        <GlassCard className="rounded-3xl overflow-hidden h-96 relative group">
          <Image 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            alt="Digital Mastery" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4qDODyLLQm-JzG5Qn7k-qOgGz7zC8nVzxqLbGTwYhpJ4zv_HmOVrER9ay9Kv-17G7l2YtKaJW5_UVKdObNDyZMHSOBkwdcwRquVpHrzghXkLi7aHBYBVdYSy-VpfhuNZoP4YuB5EjD3fPN_UUDoJwM5Ci4Wyx1BZWq2pi2D3fPWrLicuNIQjdIqm9Do8TcrfKfllcJndNKjQ6x1F3xETFbp2YYtzSFW2OSiL6pmE_4ko9bdFoW0d4AQWv1KP_o3P5lSIiIZuytu8"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          <div className="absolute bottom-8 left-8">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Digital Mastery</p>
            <h4 className="text-on-surface text-2xl font-bold font-display">Secure Architecture</h4>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};


export default DecorativeSection;
