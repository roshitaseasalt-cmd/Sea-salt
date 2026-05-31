"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-[#f3efe6] select-none">
      
      <Header />

      {/* Main Image Banner Area */}
      <main className="flex-1 relative overflow-hidden bg-zinc-900">
        
        {/* Background Atmosphere Image */}
        <Image
          src="/hero_background.png"
          alt="Modern Concrete Villa in Lush Jungle Nestled Beside Reflective Pond"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        
        {/* Contrast Overlay Wash */}
        <div className="absolute inset-0 bg-black/25 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

        {/* Floating Text and Link Card (Optimized for Nest Hub height constraints) */}
        <div className="absolute left-6 sm:left-12 md:left-16 bottom-6 sm:bottom-10 md:bottom-12 max-w-xl text-white z-20 flex flex-col justify-end">
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-[1.2] mb-3 sm:mb-4 text-white"
          >
            Spaces shaped <br />
            through light, <br />
            material and <br />
            quiet experience.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-10 sm:w-12 h-[1px] bg-white mb-3 sm:mb-5"
          />
          
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
            <Link href="/about" className="hover:text-white/70 transition-colors flex items-center gap-1.5 group">
              Studio <span className="font-light group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <span className="text-white/20 select-none">|</span>
            <Link href="/contact" className="hover:text-white/70 transition-colors flex items-center gap-1.5 group">
              Contact <span className="font-light group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Ambient decorative elements */}
        <div className="absolute top-8 right-8 w-24 h-24 border border-white/5 rounded-full pointer-events-none" />
      </main>

      <Footer />
    </div>
  );
}
