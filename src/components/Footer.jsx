"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="h-12 bg-[#f4f1ec] border-t border-brand-dark/10 text-brand-dark/70 flex items-center justify-between px-6 sm:px-12 text-[9px] sm:text-[10px] md:text-xs tracking-widest font-serif w-full select-none mt-auto">
      <div>
        <span>© Sea Salt</span>
      </div>
      <div className="flex items-center gap-4">
        <span>Bangalore, India</span>
        <span className="text-brand-dark/40 select-none">|</span>
        <a href="tel:+917094744989" className="hover:text-brand-dark transition-colors font-medium">+91 70947 44989</a>
      </div>
    </footer>
  );
}
