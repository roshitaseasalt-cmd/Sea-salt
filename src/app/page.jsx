"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-[#f3efe6] select-none">
      
      {/* Header Section */}
      <header className="h-20 sm:h-24 border-b border-[#1c1c1c]/10 flex items-center justify-between px-6 sm:px-12 bg-[#f2efe9] relative z-50">
        
        {/* Left: Custom Elegant Hamburger */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 justify-center items-start group p-2 -ml-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <motion.span 
            animate={menuOpen ? { rotate: 45, y: 7, width: 24 } : { rotate: 0, y: 0, width: 24 }}
            transition={{ duration: 0.25 }}
            className="w-6 h-[1px] bg-[#1c1c1c]"
          />
          <motion.span 
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-[1px] bg-[#1c1c1c]"
          />
          <motion.span 
            animate={menuOpen ? { rotate: -45, y: -7, width: 24 } : { rotate: 0, y: 0, width: 16 }}
            transition={{ duration: 0.25 }}
            className="h-[1px] bg-[#1c1c1c] group-hover:w-6 transition-all"
          />
        </button>

        {/* Center: Brand Logo */}
        <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block select-none">
          <div className="relative w-44 sm:w-56 h-12 sm:h-14 flex items-center justify-center">
            <Image
              src="/Sea salt logo.png"
              alt="Sea Salt Studio Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Right: Instagram & Email Links */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-serif text-[#1c1c1c]/80">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-amber-850 transition-colors"
          >
            Instagram
          </a>
          <span className="text-[#1c1c1c]/20">|</span>
          <a 
            href="mailto:hello@seasaltstudio.com" 
            className="hover:text-amber-850 transition-colors"
          >
            Email
          </a>
        </div>
      </header>

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

      {/* Footer Section */}
      <footer className="h-12 bg-[#141414] border-t border-white/[0.03] text-white/50 flex items-center justify-between px-6 sm:px-12 text-[9px] sm:text-[10px] md:text-xs tracking-widest font-serif relative z-30">
        <div>
          <span>© Sea Salt Studio</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Surat, India</span>
          <span className="text-white/10 select-none">|</span>
          <a href="tel:+919879598000" className="hover:text-white/80 transition-colors">+91 98795 98000</a>
        </div>
      </footer>

      {/* Animated Overlay Mobile/Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#f2efe9] z-40 flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col gap-6 text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Link 
                  href="/" 
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-3xl hover:text-amber-800 transition-colors"
                >
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link 
                  href="/projects" 
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-3xl hover:text-amber-800 transition-colors"
                >
                  Selected Work
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link 
                  href="/philosophy" 
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-3xl hover:text-amber-800 transition-colors"
                >
                  Philosophy
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link 
                  href="/about" 
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-3xl hover:text-amber-800 transition-colors"
                >
                  Studio (About)
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link 
                  href="/contact" 
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-3xl hover:text-amber-800 transition-colors"
                >
                  Contact
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
