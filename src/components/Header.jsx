"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative h-[72px] border-b border-[#1c1c1c]/10 bg-[#f2efe9] flex items-center justify-between px-4 sm:px-6 md:px-10 z-50 select-none">
        {/* Left: Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 justify-center items-start group p-2 -ml-2 focus:outline-none z-20"
          aria-label="Toggle Navigation Menu"
        >
          <motion.span
            animate={
              menuOpen
                ? { rotate: 45, y: 7, width: 24 }
                : { rotate: 0, y: 0, width: 24 }
            }
            transition={{ duration: 0.25 }}
            className="w-6 h-[1px] bg-[#1c1c1c]"
          />

          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-[1px] bg-[#1c1c1c]"
          />

          <motion.span
            animate={
              menuOpen
                ? { rotate: -45, y: -7, width: 24 }
                : { rotate: 0, y: 0, width: 16 }
            }
            transition={{ duration: 0.25 }}
            className="h-[1px] bg-[#1c1c1c] group-hover:w-6 transition-all"
          />
        </button>

        {/* Center Logo */}
        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[64px] p-1 flex items-center justify-center overflow-hidden"
        >
          <Image
            src="/Sea salt logo.png"
            alt="Sea Salt Studio Logo"
            width={500}
            height={64}
            priority
            className="
              h-fit
              w-auto
              max-w-[180px]
              sm:max-w-[160px]
              md:max-w-[240px]
              lg:max-w-[300px]
              object-contain
            "
          />
        </Link>

        {/* Right Links */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-[11px] sm:text-xs md:text-sm font-serif text-[#1c1c1c]/80 z-20">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1c1c1c] transition-colors"
          >
            <span className="hidden sm:inline">Instagram</span>
            <span className="sm:hidden">IG</span>
          </a>

          <span className="text-[#1c1c1c]/20">|</span>

          <a
            href="mailto:hello@seasaltstudio.com"
            className="hover:text-[#1c1c1c] transition-colors"
          >
            Email
          </a>
        </div>
      </header>

      {/* Fullscreen Menu */}
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
              {[
                { name: "Home", href: "/" },
                { name: "Selected Work", href: "/projects" },
                { name: "Philosophy", href: "/philosophy" },
                { name: "Studio (About)", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-3xl md:text-4xl hover:text-amber-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
