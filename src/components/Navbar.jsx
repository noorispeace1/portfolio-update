"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

// Custom N Logo Component (S logo er poriborte)
const NLogo = () => (
  <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-xl bg-primary shadow-lg group">
    <span className="text-2xl font-black text-white transition-transform duration-300 group-hover:scale-110">
      N
    </span>
    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
);

const navLinks = [
  { href: '#hero', label: 'Home', id: 'hero' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#qualification', label: 'Qualification', id: 'qualification' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#services', label: 'Services', id: 'services' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects (shadow/blur)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy with Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-on-surface/10 py-4 shadow-2xl'
          : 'bg-transparent border-transparent py-6'
      } px-4 md:px-8`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden btn btn-ghost btn-circle text-on-surface hover:bg-on-surface/5"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          {/* Updated N Logo Link */}
          <Link href="#hero" className="flex items-center gap-3 hover:opacity-90 transition-all">
            <NLogo />
            <span className="hidden sm:block text-xl font-bold tracking-tighter text-on-surface">
              NOOR<span className="text-primary">.</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center bg-on-surface/5 backdrop-blur-md border border-on-surface/10 rounded-full px-2 py-1">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`px-5 py-2 text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded-full block ${
                    activeSection === link.id
                      ? 'text-on-surface'
                      : 'text-on-surface-variant/70 hover:text-on-surface'
                  }`}
                >
                  {link.label}
                </Link>
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-on-surface/10 p-6 lg:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    onClick={() => setIsMobileMenuOpen(false)}
                    href={link.href}
                    className={`flex items-center justify-between p-4 rounded-2xl transition-all ${
                      activeSection === link.id
                        ? 'bg-primary/20 text-on-surface border border-primary/30'
                        : 'text-on-surface-variant/70 hover:bg-on-surface/5'
                    }`}
                  >
                    <span className="font-bold tracking-widest uppercase text-sm">
                      {link.label}
                    </span>

                    {activeSection === link.id && (
                      <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_var(--primary)]"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;