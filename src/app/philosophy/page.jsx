"use client";

import React from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

export default function Philosophy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <PageTransition>
      <section className="bg-brand-sand w-full min-h-screen select-none">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 pt-8 pb-16 md:pt-12 md:pb-24 flex flex-col gap-12 md:gap-16">
          
          {/* Top Video & Subtitle */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full flex flex-col gap-4 md:gap-6"
          >
            <motion.div 
              variants={itemVariants}
              className="relative w-full aspect-video md:aspect-[21/9] bg-brand-dark/5 overflow-hidden"
            >
              <video
                src="/philosophy/philosophy-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                disableRemotePlayback
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-[13px] sm:text-[15px] tracking-[0.2em] text-brand-dark/90 text-center w-full"
              style={{ fontFamily: '"Canela Light Trial", serif' }}
            >
              Material, memory, atmosphere.
            </motion.p>
          </motion.div>

          {/* Note and Profile Sections Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-14 md:gap-20 text-brand-dark"
          >
            {/* A Note Section */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6 md:pl-[140px] lg:pl-[180px]">
              <h2 
                className="text-3xl sm:text-4xl md:text-[45px] leading-none"
                style={{ fontFamily: '"Canela Light Trial", serif' }}
              >
                A Note
              </h2>
              
              <div 
                className="max-w-[540px] flex flex-col gap-5 text-[15px] sm:text-base md:text-[17px] leading-[1.65] text-brand-dark/95"
                style={{ fontFamily: '"Freight Text", serif' }}
              >
                <p>
                  Architecture, for me, begins with careful observation.
                </p>
                <p>
                  I am drawn to the way light settles on a wall, the texture
                  of a material shaped by time, or the memory a place carries
                  long after we leave it.
                </p>
                <p>
                  Through Sea Salt, I hope to create spaces that feel calm,
                  rooted and enduring. I am interested in architecture that
                  emerges from context, craft and atmosphere.
                </p>
                <p>
                  My work is informed by experiences across homes,
                  hospitality, institutions and interiors, and by a belief that
                  architecture gains depth through lived experience and an
                  honest engagement with material and place.
                </p>
                <p 
                  className="mt-1"
                  style={{ fontFamily: '"Canela Light Trial", serif', fontStyle: 'italic', fontSize: '1.05em' }}
                >
                  — Roshita Sudhir
                </p>
              </div>
            </motion.div>

            {/* Profile Section */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6 md:pl-[140px] lg:pl-[180px]">
              <h2 
                className="text-3xl sm:text-4xl md:text-[45px] leading-none"
                style={{ fontFamily: '"Canela Light Trial", serif' }}
              >
                Profile
              </h2>
              
              <div 
                className="max-w-[540px] flex flex-col gap-5 text-[15px] sm:text-base md:text-[17px] leading-[1.65] text-brand-dark/95"
                style={{ fontFamily: '"Freight Text", serif' }}
              >
                <p>
                  Roshita Sudhir is an architect and the founder of Sea Salt.
                </p>
                <p>
                  She holds a Bachelor of Architecture from <strong className="font-semibold text-brand-dark">NIT Trichy</strong> and
                  a Master of Architecture from <strong className="font-semibold text-brand-dark">CEPT University</strong>. Her
                  professional experience spans residential, hospitality,
                  institutional and interior projects, having worked with
                  boutique practices in <strong className="font-semibold text-brand-dark">Auroville, Mumbai</strong> and <strong className="font-semibold text-brand-dark">Bangalore</strong>.
                </p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>
    </PageTransition>
  );
}
