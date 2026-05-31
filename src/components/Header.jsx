"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="h-20 sm:h-24 border-b border-[#1c1c1c]/10 flex items-center justify-between px-6 sm:px-12 bg-[#f2efe9] relative z-50 w-full select-none">
        
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
          <div className="relative w-fit  h-auto  flex items-center justify-center">
            <Image
              src="/Sea salt logo.png"
              alt="Sea Salt Studio Logo"
          
              className="w-[200px] h-auto"
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

      {/* Animated Overlay Fullscreen Menu */}
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
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                <Link href="/" onClick={() => setMenuOpen(false)} className="font-serif text-3xl hover:text-amber-800 transition-colors">
                  Home
                </Link>
              </motion.div>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <Link href="/projects" onClick={() => setMenuOpen(false)} className="font-serif text-3xl hover:text-amber-800 transition-colors">
                  Selected Work
                </Link>
              </motion.div>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                <Link href="/philosophy" onClick={() => setMenuOpen(false)} className="font-serif text-3xl hover:text-amber-800 transition-colors">
                  Philosophy
                </Link>
              </motion.div>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                <Link href="/about" onClick={() => setMenuOpen(false)} className="font-serif text-3xl hover:text-amber-800 transition-colors">
                  Studio (About)
                </Link>
              </motion.div>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                <Link href="/contact" onClick={() => setMenuOpen(false)} className="font-serif text-3xl hover:text-amber-800 transition-colors">
                  Contact
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
