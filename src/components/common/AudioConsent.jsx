"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function AudioConsent({ videoRef, isVisible }) {
  const [showPopup, setShowPopup] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const preference = localStorage.getItem("audioPreference");

    if (preference) {
      if (preference === "enabled" && videoRef?.current) {
        videoRef.current.muted = false;
        videoRef.current.play().catch((err) => {
          // Gracefully fallback to muted if browser blocks autoplay
          console.warn("Audio autoplay blocked by browser policy.", err);
          videoRef.current.muted = true;
        });
      }
      return;
    }

    if (isVisible) {
      // Delay showing the popup to allow the loader to finish its exit transition
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, videoRef]);

  const handleEnableSound = () => {
    localStorage.setItem("audioPreference", "enabled");
    if (videoRef?.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {
        videoRef.current.muted = true;
      });
    }
    setShowPopup(false);
  };

  const handleContinueSilent = () => {
    localStorage.setItem("audioPreference", "muted");
    if (videoRef?.current) {
      videoRef.current.muted = true;
    }
    setShowPopup(false);
  };

  const animationVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 16 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 8,
      transition: { duration: 0.4 }
    }
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed bottom-6 left-4 sm:left-6 z-[100] w-[calc(100vw-32px)] sm:w-[300px] lg:w-[320px] p-6 sm:p-7 bg-[var(--color-brand-sand)]/85 backdrop-blur-md border border-[var(--color-brand-dark)]/10 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
        >
          <div className="flex flex-col gap-3 text-[var(--color-brand-dark)]">
            <h3 className="font-serif-elegant text-lg font-normal leading-tight">
              Experience with ambient sound?
            </h3>
            <p className="font-sans-elegant text-[13px] font-light leading-relaxed opacity-80">
              The atmosphere of this space is enhanced with carefully selected ambient audio.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-3">
              <button
                onClick={handleEnableSound}
                className="w-full sm:w-auto px-5 py-2.5 bg-[var(--color-brand-dark)] text-[var(--color-brand-sand)] text-[10px] tracking-[0.15em] uppercase transition-opacity hover:opacity-85 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-[var(--color-brand-dark)] rounded-sm"
              >
                Enable Sound
              </button>
              <button
                onClick={handleContinueSilent}
                className="w-full sm:w-auto px-5 py-2.5 text-[var(--color-brand-dark)] text-[10px] tracking-[0.15em] uppercase opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-[var(--color-brand-dark)] rounded-sm"
              >
                Continue Silent
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
