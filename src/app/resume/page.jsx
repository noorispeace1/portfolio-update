"use client";
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import gsap from 'gsap';

export default function ResumePage() {
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef(null);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2.5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleReset = () => setZoom(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // GSAP Professional Entrance Animation
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0e12] selection:bg-primary-container selection:text-white">
      {/* Glow Elements matching homepage */}
      <div className="absolute blur-[80px] -z-10 opacity-15 bg-primary w-[500px] h-[500px] top-[-100px] left-[-100px] rounded-full pointer-events-none"></div>
      
      <Navbar />

      <main className="max-w-6xl mx-auto pt-32 px-4 md:px-8 pb-10 flex flex-col items-center min-h-[90vh]">
        
        {/* Toolbar */}
        <div className="w-full flex justify-center items-center gap-2 mb-6 sticky top-24 z-40">
          <div className="flex items-center bg-[#1a1c20]/90 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-lg">
            <button onClick={handleZoomOut} className="btn btn-sm btn-ghost btn-circle text-white hover:bg-white/10" title="Zoom Out">
              <span className="material-symbols-outlined text-[20px]">zoom_out</span>
            </button>
            <button onClick={handleReset} className="btn btn-sm btn-ghost btn-circle text-white hover:bg-white/10" title="Reset Zoom">
              <span className="material-symbols-outlined text-[20px]">refresh</span>
            </button>
            <button onClick={handleZoomIn} className="btn btn-sm btn-ghost btn-circle text-white hover:bg-white/10" title="Zoom In">
              <span className="material-symbols-outlined text-[20px]">zoom_in</span>
            </button>
            
            <div className="w-[1px] h-6 bg-white/20 mx-2 md:mx-4"></div>
            
            <a 
              href="/resume.pdf" 
              download="Ahosanul_Haque_Noor_Resume.pdf" 
              className="btn btn-sm bg-[#a370f7] hover:bg-[#8e52f5] text-white border-none rounded-lg gap-2 flex items-center shadow-[0_0_15px_rgba(163,112,247,0.4)] px-4 sm:px-6"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              Download
            </a>
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="w-full max-w-4xl flex-1 rounded-2xl shadow-2xl relative flex justify-center mt-4 mb-20 bg-transparent">
          <div 
            className="transition-transform duration-300 ease-out origin-top w-full flex justify-center"
            style={{ 
              transform: `scale(${zoom})`, 
            }}
          >
            {/* Aspect ratio container for A4 (1:1.414). Hidden overflow to clip scrollbar. */}
            <div 
              ref={containerRef}
              className="w-full max-w-[850px] aspect-[1/1.414] bg-white shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden rounded-xl"
            >
              <iframe 
                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit" 
                className="absolute top-0 left-0 h-full border-none pointer-events-none"
                style={{ width: 'calc(100% + 18px)' }}
                scrolling="no"
                title="Resume Preview"
              />
              {/* Invisible overlay to prevent iframe scrolling and allow CSS zoom to work smoothly */}
              <div className="absolute inset-0 z-10"></div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
