"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

export default function Philosophy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <PageTransition>
      <section className="bg-brand-sand w-full min-h-screen select-none">
        {/* Main Philosophy Container */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 pt-3 pb-8 md:pt-4 md:pb-12">
          {/* 1. Top Hero Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-14 items-center mb-6 md:mb-8"
          >
            {/* Left Column: Title and subtitle */}
            <div className="md:col-span-5 flex flex-col items-start pr-0 md:pr-4">
              <motion.span
                variants={itemVariants}
                className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] text-brand-dark/80 uppercase font-bold mb-2"
              >
                OUR PHILOSOPHY
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="font-serif text-[40px] sm:text-[46px] md:text-[52px] lg:text-[58px] font-semibold leading-[1.12] text-brand-dark tracking-wide mb-4"
              >
                Spaces for <br />
                life as it <br />
                unfolds.
              </motion.h1>

              {/* Line separator */}
              <motion.div
                variants={itemVariants}
                className="w-8 border-b-2 border-brand-dark/80 mb-5"
              />

              <motion.p
                variants={itemVariants}
                className="font-serif text-base sm:text-lg text-brand-dark font-medium leading-relaxed max-w-sm sm:max-w-md"
              >
                We believe good design is not defined by what we see, but by
                what we feel and how we live within it.
              </motion.p>
            </div>

            {/* Right Column: Hero Image (Villa and Reflective Pond) */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-7 w-full aspect-[1.3] relative overflow-hidden bg-brand-dark/5"
            >
              <Image
                src="/hero_background.png"
                alt="Modern concrete architecture with reflective pool"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover object-center"
                priority
              />
            </motion.div>
          </motion.div>

          {/* 2. Middle Grid Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-14 items-start mb-6 md:mb-8"
          >
            {/* Left Description Column */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-5 pr-0 md:pr-4"
            >
              <p className="font-serif text-lg sm:text-[21px] md:text-[23px] lg:text-[25px] font-semibold leading-[1.3] text-brand-dark">
                We create architecture, interiors and landscapes that respond to
                context, climate and culture. Spaces that are calm, sensory and
                deeply rooted in the way people live.
              </p>
            </motion.div>

            {/* Center Story Paragraphs Column */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-4 flex flex-col gap-4 font-serif text-sm sm:text-base text-brand-dark font-medium leading-relaxed"
            >
              <p>
                Our work spans architecture, interiors and landscape — each
                discipline informing the other. We believe that when these
                elements come together in balance, the result is more than a
                building; it becomes an experience that resonates over time.
              </p>
              <p>
                Every project begins with understanding — of the land, the
                climate, the culture and the people who will inhabit the space.
                From this understanding emerges a design language that is
                honest, restrained and timeless.
              </p>
            </motion.div>

            {/* Right Vertical Image Column */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-3 w-full aspect-[0.9] sm:aspect-square relative overflow-hidden bg-brand-dark/5"
            >
              <Image
                src="/philosophy/philosophy-mid.png"
                alt="Minimalist vase branch detail"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* 3. Guiding Principles Header & Row */}
          <div className="border-t border-b border-brand-dark/15 py-3 mb-6 md:mb-8 text-center">
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] text-brand-dark/80 uppercase font-bold">
              OUR GUIDING PRINCIPLES
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 pb-6 md:pb-8 border-b border-brand-dark/15 mb-6 md:mb-8"
          >
            {/* Principle 1: Light */}
            <motion.div
              variants={itemVariants}
              className="md:pr-4 md:border-r border-brand-dark/10 flex flex-col items-start"
            >
              {/* Sun Icon */}
              <svg
                className="w-6 h-6 text-brand-dark mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="4" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
                />
              </svg>
              <span className="font-serif text-[16px] sm:text-[18px] text-brand-dark font-semibold mb-1">
                Light as a Material
              </span>
              <p className="font-serif text-[13px] sm:text-sm text-brand-dark/85 font-medium leading-relaxed">
                We shape spaces to celebrate natural light and its changing
                qualities.
              </p>
            </motion.div>

            {/* Principle 2: Context */}
            <motion.div
              variants={itemVariants}
              className="md:px-4 md:border-r border-brand-dark/10 flex flex-col items-start"
            >
              {/* Arch Icon */}
              <svg
                className="w-6 h-6 text-brand-dark mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 21V10a7 7 0 0114 0v11M3 21h18"
                />
              </svg>
              <span className="font-serif text-[16px] sm:text-[18px] text-brand-dark font-semibold mb-1">
                Respect for Context
              </span>
              <p className="font-serif text-[13px] sm:text-sm text-brand-dark/85 font-medium leading-relaxed">
                We respond to the land, climate and culture, allowing each
                project to belong to its place.
              </p>
            </motion.div>

            {/* Principle 3: Material */}
            <motion.div
              variants={itemVariants}
              className="md:px-4 md:border-r border-brand-dark/10 flex flex-col items-start"
            >
              {/* Cube Icon */}
              <svg
                className="w-6 h-6 text-brand-dark mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m-8-10l8 4m-8-4v10l8 4m0-10v10"
                />
              </svg>
              <span className="font-serif text-[16px] sm:text-[18px] text-brand-dark font-semibold mb-1">
                Honesty in Material
              </span>
              <p className="font-serif text-[13px] sm:text-sm text-brand-dark/85 font-medium leading-relaxed">
                We use materials in their true form, allowing their texture,
                weight and character to speak.
              </p>
            </motion.div>

            {/* Principle 4: Partner */}
            <motion.div
              variants={itemVariants}
              className="md:px-4 md:border-r border-brand-dark/10 flex flex-col items-start"
            >
              {/* Leaf Icon */}
              <svg
                className="w-6 h-6 text-brand-dark mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v18M12 3c4.5 0 9 4 9 9s-4.5 9-9 9M12 3c-4.5 0-9 4-9 9s4.5 9 9 9"
                />
              </svg>
              <span className="font-serif text-[16px] sm:text-[18px] text-brand-dark font-semibold mb-1">
                Nature as Partner
              </span>
              <p className="font-serif text-[13px] sm:text-sm text-brand-dark/85 font-medium leading-relaxed">
                We weave landscape and architecture together to create harmony
                and well-being.
              </p>
            </motion.div>

            {/* Principle 5: Simplicity */}
            <motion.div
              variants={itemVariants}
              className="md:pl-4 flex flex-col items-start"
            >
              {/* Clock Icon */}
              <svg
                className="w-6 h-6 text-brand-dark mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="9" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7v5l3 3"
                />
              </svg>
              <span className="font-serif text-[16px] sm:text-[18px] text-brand-dark font-semibold mb-1">
                Timeless Simplicity
              </span>
              <p className="font-serif text-[13px] sm:text-sm text-brand-dark/85 font-medium leading-relaxed">
                We pursue clarity, proportion and essential beauty that endures.
              </p>
            </motion.div>
          </motion.div>

          {/* 4. Founder's Note Section (Symmetrical 50/50 Banner split container) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-[#EAE6DF] border border-brand-dark/10 flex flex-col md:flex-row items-stretch mb-6 md:mb-8 overflow-hidden"
          >
            {/* Left Column Text with Solid bg-[#EAE6DF] */}
            <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-14 lg:p-16 flex flex-col justify-center items-start bg-[#EAE6DF]">
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] text-brand-dark/80 uppercase font-bold mb-2">
                FOUNDER'S NOTE
              </span>

              <h2 className="font-serif text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[1.2] text-brand-dark tracking-wide mb-4">
                Rooted in experience. <br />
                Guided by purpose.
              </h2>

              {/* Line separator */}
              <div className="w-8 border-b-2 border-brand-dark/80 mb-5" />

              <div className="flex flex-col gap-4 font-serif text-sm sm:text-base text-brand-dark font-medium leading-relaxed">
                <p>
                  Sea Salt Studio is founded by Roshita Sudhir, an architect
                  whose work has been shaped by experience across homes,
                  hospitality, institutions and interiors.
                </p>
                <p>
                  Having studied at NIT Trichy and CEPT University, and worked
                  with practices in Auroville, Mumbai and Bangalore, her
                  approach brings together context, atmosphere, material
                  sensitivity and the quiet rituals of everyday life.
                </p>
                <p>
                  The studio's work is guided by a belief that architecture is
                  not only about form, but about how a space holds light,
                  memory, movement and care.
                </p>
              </div>
            </div>

            {/* Right Column Image */}
            <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative min-h-[260px] md:min-h-[300px]">
              <Image
                src="/philosophy/philosophy-founder.png"
                alt="Founder desk setup detail"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* 5. Bottom Quote Banner (Narrow 60/40 Banner split container) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-[#CFC8BD] grid grid-cols-1 md:grid-cols-[6fr_5fr] items-stretch mb-4 overflow-hidden"
          >
            {/* Banner Left Content with Solid bg-[#EAE6DF], Left-Aligned Quote, wider 60% split, reduced padding */}
            <div className="w-full p-6 sm:p-8 md:py-6 md:px-10 lg:px-12 flex flex-col justify-center items-start bg-transparent">
              <div className="flex items-start gap-3">
                {/* Double Quote Mark (Left aligned, Navy Blue) */}
                <span className="text-[#1F3E6C] text-4xl md:text-5xl font-bold leading-[0.6] select-none pt-1">
                  “
                </span>

                <p className="font-serif text-[11px] sm:text-xs md:text-base  font-semibold leading-normal md:leading-relaxed text-brand-dark max-w-md">
                  We believe architecture is not just about how a space looks,
                  but about how it makes life feel, now and over time.
                </p>
              </div>
            </div>

            {/* Banner Right Image (Narrower 40% split, reduced min-height) */}
            <div className="w-full  relative min-h-[110px] md:min-h-[130px]">
              <Image
                src="/philosophy/philosophy-quote.png"
                alt="Concrete Colonnade Corridor with shadows"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
