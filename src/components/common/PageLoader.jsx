"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({ isLoading }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by rendering a static background until mounted
  if (!mounted) {
    return (
      <div className="fixed inset-0 z-[100] bg-[var(--color-brand-sand)]" />
    );
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="page-loader"
          // Slide up exit transition using clip-path for an elegant architectural reveal
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ 
            clipPath: "inset(0% 0% 100% 0%)",
            transition: { duration: 1.2, ease: [0.85, 0, 0.15, 1], delay: 0.3 } 
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-brand-sand)] overflow-hidden"
        >
          <div className="relative flex flex-col items-center justify-center text-[var(--color-brand-dark)]">
            
            {/* Minimal Typography Reveal */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ 
                  y: "-100%", 
                  opacity: 0, 
                  transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1] } 
                }}
                transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1], delay: 0.1 }}
                className="font-serif-elegant text-2xl md:text-3xl lg:text-4xl tracking-[0.3em] font-light uppercase"
              >
                Sea Salt Studio
              </motion.h1>
            </div>

            {/* Architectural Line Animation */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ 
                scaleX: 0, 
                opacity: 0,
                transition: { duration: 0.6, ease: [0.85, 0, 0.15, 1] } 
              }}
              transition={{ duration: 1.5, ease: [0.85, 0, 0.15, 1], delay: 0.3 }}
              className="h-[1px] bg-[var(--color-brand-dark)]/40 absolute -bottom-2 left-0 right-0 max-w-[120px] md:max-w-[180px] mx-auto origin-center"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
