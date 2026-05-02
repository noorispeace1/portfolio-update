"use client";
import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "", initial, whileInView, viewport, transition, ...props }) => {
  const baseClasses = "bg-on-surface/[0.03] backdrop-blur-[40px] border border-on-surface/10";
  
  if (initial || whileInView) {
    return (
      <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={viewport || { once: true }}
        transition={transition}
        className={`${baseClasses} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default GlassCard;
