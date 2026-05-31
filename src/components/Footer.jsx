"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="h-12 bg-[#141414] border-t border-white/[0.03] text-white/50 flex items-center justify-between px-6 sm:px-12 text-[9px] sm:text-[10px] md:text-xs tracking-widest font-serif w-full select-none mt-auto">
      <div>
        <span>© Sea Salt Studio</span>
      </div>
      <div className="flex items-center gap-4">
        <span>Surat, India</span>
        <span className="text-white/10 select-none">|</span>
        <a href="tel:+919879598000" className="hover:text-white/80 transition-colors">+91 98795 98000</a>
      </div>
    </footer>
  );
}
