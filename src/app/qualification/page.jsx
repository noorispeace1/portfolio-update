"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Qualification from '@/components/Qualification';

export default function QualificationPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-primary-container selection:text-white flex flex-col">
      {/* Glow Elements */}
      <div className="absolute blur-[80px] -z-10 opacity-15 bg-primary w-[500px] h-[500px] top-[-100px] left-[-100px] rounded-full"></div>
      <div className="absolute blur-[80px] -z-10 opacity-15 bg-secondary-container w-[400px] h-[400px] bottom-0 right-[-100px] rounded-full"></div>

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto pt-24 px-4 md:px-8 w-full pb-20">
        <Qualification />
      </main>

      <Footer />
    </div>
  );
}
