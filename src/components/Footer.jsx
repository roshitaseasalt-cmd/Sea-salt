"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#f4f1ec] border-t border-brand-dark/10 text-brand-dark/70 py-6 md:py-8 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 select-none mt-auto">
      {/* Left: Studio and disciplines */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-0.5">
        <span className="font-sans font-semibold tracking-[0.2em] text-brand-dark text-[9px] sm:text-[10px] md:text-[11px]">
          SEA SALT STUDIO
        </span>
        <span className="font-sans text-[8px] sm:text-[9px] text-brand-dark/60 tracking-wider">
          Architecture &nbsp;·&nbsp; Interior &nbsp;·&nbsp; Landscape
        </span>
      </div>

      {/* Center: Copyright */}
      <div className="font-serif text-[11px] sm:text-xs md:text-sm text-brand-dark/80 md:absolute md:left-1/2 md:-translate-x-1/2">
        <span>© Sea Salt Studio</span>
      </div>

      {/* Right: Instagram | Email */}
      <div className="flex items-center gap-3 font-sans tracking-widest text-[9px] sm:text-[10px] md:text-[11px] text-brand-dark/80">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-dark transition-colors"
        >
          Instagram
        </a>
        <span className="text-brand-dark/20 select-none">|</span>
        <a
          href="mailto:hello@seasaltstudio.com"
          className="hover:text-brand-dark transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
