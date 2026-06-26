"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLoader from "@/components/common/PageLoader";
import AudioConsent from "@/components/common/AudioConsent";
import { useLoadingManager } from "@/hooks/useLoadingManager";

export default function Home() {
  // Use our centralized loading manager with a 4.5s fallback timeout
  const { isFullyLoaded, handleVideoReady } = useLoadingManager(4500);
  const videoRef = useRef(null);

  return (
    <>
      {/* Full-page Luxury Loader */}
      <PageLoader isLoading={!isFullyLoaded} />
      
      {/* Audio Consent Popup */}
      <AudioConsent videoRef={videoRef} isVisible={isFullyLoaded} />

      <div className="flex-1 relative overflow-hidden bg-zinc-900 select-none">
        
        {/* Background Atmosphere Video */}
        <video
          ref={videoRef}
          src="/Home page video.mp4"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoReady}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Contrast Overlay Wash */}
        <div className="absolute inset-0 bg-black/25 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none" />

        {/* Floating Text and Link Card (Optimized for Nest Hub height constraints) */}
        <div className="absolute left-6 sm:left-12 md:left-16 bottom-6 sm:bottom-10 md:bottom-26 max-w-xl text-white z-20 flex flex-col justify-end">
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: isFullyLoaded ? 1 : 0, y: isFullyLoaded ? 0 : 15 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="font-serif text-xl sm:text-3xl md:text-4xl font-normal tracking-wide leading-[1.2] mb-3 sm:mb-10 text-white"
          >
            Spaces shaped <br />
            through light, <br />
            material and <br />
            atmosphere.
          </motion.h1>
          
          
          
          {/* Sub Navigation Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isFullyLoaded ? 1 : 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex items-center gap-3 sm:gap-4 md:gap-5 text-[9px] sm:text-[10px] md:text-[10px] tracking-[0.2em] font-semibold text-white/90 uppercase"
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
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isFullyLoaded ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute top-8 right-8 w-24 h-24 border border-white/5 rounded-full pointer-events-none" 
        />
      </div>
    </>
  );
}
