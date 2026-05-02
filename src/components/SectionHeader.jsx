"use client";
import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ subtitle, title, centered = true, className = "" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`${centered ? "text-center" : ""} mb-24 ${className}`}
    >
      {subtitle && (
        <span className="text-primary font-display text-xs uppercase tracking-widest block mb-4 font-semibold">
          {subtitle}
        </span>
      )}
      <h1 className="text-4xl lg:text-5xl font-bold text-on-surface font-display">
        {title}
      </h1>
    </motion.div>
  );
};

export default SectionHeader;
