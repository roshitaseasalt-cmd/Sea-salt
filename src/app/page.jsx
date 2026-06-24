"use client";
 
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PulseLoader } from "react-spinners";
 
export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Fallback: ensure the loader doesn't stay forever if the video event doesn't fire
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-1 relative overflow-hidden bg-zinc-900 select-none">
      
      {/* Loading Screen */}
      <AnimatePresence>
        {!isVideoLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-zinc-900"
          >
            <PulseLoader color="#ffffff" size={10} speedMultiplier={0.7} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Atmosphere Video */}
      <video
        src="/Home page video.mp4"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Contrast Overlay Wash */}
      <div className="absolute inset-0 bg-black/25 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

      {/* Floating Text and Link Card (Optimized for Nest Hub height constraints) */}
      <div className="absolute left-6 sm:left-12 md:left-16 bottom-6 sm:bottom-10 md:bottom-12 max-w-xl text-white z-20 flex flex-col justify-end">
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide leading-[1.2] mb-3 sm:mb-4 text-white"
        >
          Spaces shaped <br />
          through light, <br />
          material and <br />
          quiet experience.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="font-serif text-[11px] sm:text-xs md:text-sm text-white/80 font-light leading-relaxed max-w-xs sm:max-w-sm md:max-w-md mb-6 sm:mb-8"
        >
          Sea Salt Studio creates architecture, interiors and landscapes that are rooted in atmosphere, material sensitivity and lived experience.
        </motion.p>
        
        {/* Sub Navigation Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center gap-3 sm:gap-4 md:gap-5 text-[9px] sm:text-[10px] md:text-xs tracking-[0.2em] font-semibold text-white/90 uppercase"
        >
          <Link href="/projects" className="hover:text-white/70 transition-colors flex items-center gap-1.5 group">
            Selected Work <span className="font-light group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <span className="text-white/20 select-none">|</span>
          <Link href="/philosophy" className="hover:text-white/70 transition-colors flex items-center gap-1.5 group">
            Philosophy <span className="font-light group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <span className="text-white/20 select-none">|</span>
          <Link href="/contact" className="hover:text-white/70 transition-colors flex items-center gap-1.5 group">
            Contact <span className="font-light group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Ambient decorative elements */}
      <div className="absolute top-8 right-8 w-24 h-24 border border-white/5 rounded-full pointer-events-none" />
    </div>
  );
}
