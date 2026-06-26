"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  LazyMotion,
  domAnimation,
  AnimatePresence,
  motion,
} from "framer-motion";

const logoVariants = {
  hidden: {
    y: 36,
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 75,
      damping: 16,
      mass: 1,
    },
  },
  exit: {
    y: -18,
    opacity: 0,
    scale: 0.985,
    transition: {
      duration: 0.45,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const lineVariants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1.15,
      delay: 0.25,
      ease: "easeInOut",
    },
  },
  exit: {
    scaleX: 0,
    opacity: 0,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
};

export default function PageLoader({ isLoading }) {
  const [mounted, setMounted] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isLoading && logoLoaded) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 1400);

      return () => clearTimeout(timer);
    }
  }, [isLoading, logoLoaded]);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-[100] bg-[var(--color-brand-sand)]" />
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        {showLoader && (
          <motion.div
            layout={false}
            initial={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: {
                duration: 1.25,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            style={{
              willChange: "transform",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[var(--color-brand-sand)]"
          >
            <div className="relative flex flex-col items-center justify-center">
              <motion.div
                layout={false}
                variants={logoVariants}
                initial="hidden"
                animate={logoLoaded ? "visible" : "hidden"}
                exit="exit"
                style={{
                  willChange: "transform, opacity",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
                className="relative z-10 mb-6"
              >
                <Image
                  src="/logo-dot.png"
                  alt="Sea Salt Studios"
                  width={220}
                  height={220}
                  priority
                  draggable={false}
                  onLoad={() => setLogoLoaded(true)}
                  className="w-24 h-auto object-contain select-none md:w-32 lg:w-50"
                />
              </motion.div>

              <motion.div
                layout={false}
                variants={lineVariants}
                initial="hidden"
                animate={logoLoaded ? "visible" : "hidden"}
                exit="exit"
                style={{
                  willChange: "transform, opacity",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
                className="absolute -bottom-2 left-1/2 h-px w-[120px] -translate-x-1/2 origin-center bg-[var(--color-brand-dark)]/40 md:w-[180px]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}