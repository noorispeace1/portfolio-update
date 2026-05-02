"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle bg-surface/50 backdrop-blur-md border border-on-surface/10 text-on-surface hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="flex items-center justify-center"
      >
        <span className="material-symbols-outlined text-[24px]">
          {theme === 'dark' ? 'dark_mode' : 'light_mode'}
        </span>
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
