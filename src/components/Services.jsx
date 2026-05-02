import React from 'react';
import Image from 'next/image';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

const services = [
  {
    title: 'Modern Web Applications',
    desc: 'I build responsive and scalable web applications using React and Next.js, focusing on clean UI, performance, and smooth user experience.',
    icon: 'terminal',
    bgClass: 'bg-primary/10',
    borderClass: 'border-primary/20',
    textClass: 'text-primary'
  },
  {
    title: 'Authentication & Security',
    desc: 'I implement secure login systems using NextAuth and JWT, including protected routes and role-based access for real-world applications.',
    icon: 'lock',
    bgClass: 'bg-secondary-container/10',
    borderClass: 'border-secondary-container/20',
    textClass: 'text-secondary-container'
  },
  {
    title: 'Full Stack Development (Learning)',
    desc: 'Currently expanding into backend development to build complete full-stack applications with databases, APIs, and server-side logic.',
    icon: 'layers',
    bgClass: 'bg-tertiary/10',
    borderClass: 'border-tertiary/20',
    textClass: 'text-tertiary'
  },
  {
    title: 'UI / Frontend Design',
    desc: 'I design modern, responsive interfaces using Tailwind CSS, focusing on usability, accessibility, and clean visual structure.',
    icon: 'brush',
    bgClass: 'bg-primary/10',
    borderClass: 'border-primary/20',
    textClass: 'text-primary'
  }
];

const Services = () => {
  return (
    <section id="services" className="pt-32 pb-32 space-y-12">
      <SectionHeader
        subtitle="What I can do for you"
        title="Services"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <GlassCard
            key={index}
            className="p-10 rounded-[2rem] group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between min-h-[320px]"
          >
            <div>
              <div className={`w-14 h-14 rounded-2xl ${service.bgClass} flex items-center justify-center mb-8 border ${service.borderClass}`}>
                <span className={`material-symbols-outlined ${service.textClass} text-3xl`}>
                  {service.icon}
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold text-on-surface mb-4">
                {service.title}
              </h3>

              <p className="text-on-surface-variant leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>

            <div className="flex justify-end mt-8">
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                arrow_forward
              </span>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* CTA Section */}
      <GlassCard className="mt-32 rounded-3xl overflow-hidden h-[420px] relative">
        <Image
          alt="Developer workspace"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9xP9ij3nec_wqrpQGzGOWY-bj72azJuHDnL4RiEWx6D5FsP8v0OI7NF2Tlu6cp9Uxbm-1MVG5EEexK5i-I6ajZpu-bjWZz18Yl4wq_ev8EtymsQ38eOvJKNQ3fSawxS47tH95alB7Y0ErvJ3qS-AiNafYShschaa6B30Q7uXakdLna8qZ1ZT1qx_IIHMcCrc3YkIbByQi-gIdZJ9S8KT_TIztFcCIkUzXBPAYgQRBb-9HBfN4wezhq64Ij_L7RejezKg_ML2oQhw"
          fill
        />

        <div className="relative z-10 h-full flex flex-col justify-end p-12 bg-gradient-to-t from-background to-transparent">
          <h2 className="font-display text-4xl font-bold text-on-surface leading-tight">
            Let’s build something meaningful together.
          </h2>

          <p className="text-on-surface-variant text-lg max-w-2xl mt-3">
            I’m currently focusing on real-world React and Next.js projects while improving my full-stack skills.
            Open to internships, collaborations, and freelance opportunities.
          </p>
        </div>
      </GlassCard>
    </section>
  );
};

export default Services;