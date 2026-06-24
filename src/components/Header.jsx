"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsHovered, setProjectsHovered] = useState(false);
  const pathname = usePathname();
  const isContactOrPhilosophy =
    pathname === "/contact" || pathname === "/philosophy";

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      {/* Spacer to prevent content jump when header becomes fixed */}
      <div className="h-[72px] w-full shrink-0" />

      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 h-[72px] border-b border-brand-dark/10 bg-[#f4f1ec] flex items-center justify-between px-4 sm:p-6 md:p-10 z-50 select-none"
      >
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
            src="/sea salt logo.png"
            alt="Sea Salt Studio Logo"
            width={500}
            height={64}
            priority
            className="h-fit w-auto sm:max-w-[160px] md:max-w-[240px] lg:max-w-[300px] object-contain"
          />
        </Link>

        {/* Right Links */}
        <div className="z-20">
          {isContactOrPhilosophy && (
            <Link
              href="/projects?tab=architecture"
              className="text-[11px] sm:text-xs tracking-widest font-sans uppercase font-medium text-brand-dark/80 hover:text-brand-dark transition-colors flex items-center gap-1 group"
            >
              View Projects{" "}
              <span className="font-light group-hover:translate-x-1 transition-transform">
                —→
              </span>
            </Link>
          )}
        </div>
      </motion.header>

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
