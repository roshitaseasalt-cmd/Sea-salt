"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f4f1ec] border-t border-brand-dark/10 py-6 md:py-8 mt-auto select-none">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 md:gap-0">
        {/* Left: SEA SALT and disciplines */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="font-sans font-bold tracking-[0.25em] text-brand-dark text-[10px] sm:text-[11px] uppercase">
            Sea Salt
          </span>
          <span
            className="text-brand-dark/90 text-[12px] sm:text-[13px]"
            style={{ fontFamily: '"Freight Text", serif' }}
          >
            Architecture &nbsp;·&nbsp; Interiors
          </span>
        </div>

        {/* Right: Instagram | Email and Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-24">
          <div
            className="flex items-center gap-3 text-[12px] sm:text-[13px] text-brand-dark/90"
            style={{ fontFamily: '"Freight Text", serif' }}
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-dark transition-colors"
            >
              Instagram
            </a>
            <span className="text-brand-dark/40">|</span>
            <a
              href="mailto:hello@seasaltstudio.com"
              className="hover:text-brand-dark transition-colors"
            >
              Email
            </a>
          </div>

          <div
            className="text-[12px] sm:text-[13px] text-brand-dark/90"
            style={{ fontFamily: '"Freight Text", serif' }}
          >
            <span>© Sea Salt</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
