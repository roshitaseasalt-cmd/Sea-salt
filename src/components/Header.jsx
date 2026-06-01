"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsHovered, setProjectsHovered] = useState(false);

  return (
    <>
      <header className="relative h-[72px] border-b border-brand-dark/10 bg-[#f4f1ec] flex items-center justify-between px-4 sm:p-6 md:p-10 z-50 select-none">
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
            className="w-6 h-px bg-brand-dark"
          />

          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-px bg-brand-dark"
          />

          <motion.span
            animate={
              menuOpen
                ? { rotate: -45, y: -7, width: 24 }
                : { rotate: 0, y: 0, width: 16 }
            }
            transition={{ duration: 0.25 }}
            className="h-px bg-brand-dark group-hover:w-6 transition-all"
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
              sm:max-w-[160px]
              md:max-w-[240px]
              lg:max-w-[300px]
              object-contain
            "
          />
        </Link>

        {/* Right Links */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-[11px] sm:text-xs md:text-sm font-serif text-brand-dark/80 z-20">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-dark transition-colors"
          >
            <span className="hidden sm:inline">Instagram</span>
            <span className="sm:hidden">IG</span>
          </a>

          <span className="text-brand-dark/20">|</span>

          <a
            href="mailto:hello@seasaltstudio.com"
            className="hover:text-brand-dark transition-colors"
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
            className="fixed inset-0 bg-[#f4f1ec] z-40 flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col gap-6 text-center">
              {[
                { name: "Home", href: "/" },
                { name: "Selected Work", href: "/projects?tab=architecture" },
                { name: "Philosophy", href: "/philosophy" },
                { name: "Studio (About)", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item, index) => {
                if (item.name === "Selected Work") {
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className="relative flex flex-col items-center"
                      onMouseEnter={() => setProjectsHovered(true)}
                      onMouseLeave={() => setProjectsHovered(false)}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="font-serif text-3xl md:text-4xl hover:text-amber-800 transition-colors"
                      >
                        {item.name}
                      </Link>

                      {/* Desktop Hover Submenu */}
                      <div
                        className={`hidden md:flex flex-col gap-2 mt-2.5 transition-all duration-300 overflow-hidden ${projectsHovered ? "max-h-24 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
                      >
                        <Link
                          href="/projects?tab=architecture"
                          onClick={() => {
                            setProjectsHovered(false);
                            setMenuOpen(false);
                          }}
                          className="font-sans text-[14px] hover:text-amber-800 tracking-widest uppercase text-brand-dark font-medium transition-colors py-0.5"
                        >
                          Architecture
                        </Link>
                        <Link
                          href="/projects?tab=interiors"
                          onClick={() => {
                            setProjectsHovered(false);
                            setMenuOpen(false);
                          }}
                          className="font-sans text-[14px] hover:text-amber-800 tracking-widest uppercase text-brand-dark font-medium transition-colors py-0.5"
                        >
                          Interior Design
                        </Link>
                      </div>

                      {/* Mobile Visible Submenu */}
                      <div className="flex md:hidden flex-col gap-1.5 mt-2">
                        <Link
                          href="/projects?tab=architecture"
                          onClick={() => setMenuOpen(false)}
                          className="font-sans text-[14px] hover:text-amber-800 tracking-widest uppercase text-brand-dark font-medium transition-colors py-0.5"
                        >
                          Architecture
                        </Link>
                        <Link
                          href="/projects?tab=interiors"
                          onClick={() => setMenuOpen(false)}
                          className="font-sans text-[14px] hover:text-amber-800 tracking-widest uppercase text-brand-dark font-medium transition-colors py-0.5"
                        >
                          Interior Design
                        </Link>
                      </div>
                    </motion.div>
                  );
                }

                return (
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
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
