"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

export default function Contact() {
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
        {/* Main Hero Container */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 pt-3 pb-8 md:pt-4 md:pb-12">
          
          {/* Top Hero Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-14 items-center mb-6 md:mb-8"
          >
            {/* Left Column: Heading and description */}
            <div className="md:col-span-5 flex flex-col items-start pr-0 md:pr-4">
              <motion.span
                variants={itemVariants}
                className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] text-brand-dark/80 uppercase font-bold mb-2"
              >
                CONTACT
              </motion.span>
              
              <motion.h1
                variants={itemVariants}
                className="font-serif text-[40px] sm:text-[46px] md:text-[52px] lg:text-[58px] font-semibold leading-[1.12] text-brand-dark tracking-wide mb-4"
              >
                Let's begin <br />
                a conversation.
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
                We'd love to hear about your vision. Whether it's a home, a space or a landscape — we're here to create something meaningful, together.
              </motion.p>
            </div>

            {/* Right Column: Circular Cutout Image */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-7 w-full aspect-[1.3] relative overflow-hidden bg-brand-dark/5"
            >
              <Image
                src="/contact/contact-hero.png"
                alt="Architecture Reflection in Water"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover object-center"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Collaborations Banner Divider (Border below the text) */}
          <div className="text-center pb-4 border-b border-brand-dark/15 mb-6 md:mb-8">
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] text-brand-dark/80 uppercase font-bold">
              FOR PROJECT ENQUIRIES AND COLLABORATIONS
            </span>
          </div>

          {/* Info Columns Grid (Removed bottom border and decreased pb) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 pb-4 md:pb-6"
          >
            {/* Column 1: Studio */}
            <motion.div
              variants={itemVariants}
              className="md:pr-8 lg:pr-12 md:border-r border-brand-dark/15 flex flex-col items-start"
            >
              {/* House Outline Icon */}
              <svg
                className="w-6 h-6 text-brand-dark mb-2.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              
              <span className="font-sans text-[10px] sm:text-[11px] tracking-wider text-brand-dark/75 uppercase font-bold mb-2">
                STUDIO
              </span>
              
              <span className="font-serif text-xl sm:text-2xl text-brand-dark font-semibold">
                Sea Salt Studio
              </span>
            </motion.div>

            {/* Column 2: Address */}
            <motion.div
              variants={itemVariants}
              className="md:px-8 lg:px-12 md:border-r border-brand-dark/15 flex flex-col items-start"
            >
              {/* Pin Outline Icon */}
              <svg
                className="w-6 h-6 text-brand-dark mb-2.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              
              <span className="font-sans text-[10px] sm:text-[11px] tracking-wider text-brand-dark/75 uppercase font-bold mb-2">
                ADDRESS
              </span>
              
              <p className="font-serif text-[17px] sm:text-[18px] text-brand-dark font-medium leading-relaxed">
                Door no: 76/1,<br />
                3rd Cross Road,<br />
                P & T Colony,<br />
                RT Nagar,<br />
                Bengaluru,<br />
                Karnataka 560032
              </p>
            </motion.div>

            {/* Column 3: Email and Phone */}
            <motion.div
              variants={itemVariants}
              className="md:pl-8 lg:pl-12 flex flex-col items-start gap-5"
            >
              {/* Email Sub-block */}
              <div className="flex flex-col items-start">
                {/* Mail Outline Icon */}
                <svg
                  className="w-6 h-6 text-brand-dark mb-2.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                
                <span className="font-sans text-[10px] sm:text-[11px] tracking-wider text-brand-dark/75 uppercase font-bold mb-2">
                  EMAIL
                </span>
                
                <a
                  href="mailto:roshitasudhir@gmail.com"
                  className="font-serif text-lg sm:text-xl text-brand-dark hover:text-amber-800 transition-colors font-semibold"
                >
                  roshitasudhir@gmail.com
                </a>
              </div>

              {/* Phone Sub-block */}
              <div className="flex flex-col items-start">
                {/* Phone Outline Icon */}
                <svg
                  className="w-6 h-6 text-brand-dark mb-2.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                
                <span className="font-sans text-[10px] sm:text-[11px] tracking-wider text-brand-dark/75 uppercase font-bold mb-2">
                  PHONE
                </span>
                
                <a
                  href="tel:+917094744989"
                  className="font-serif text-lg sm:text-xl text-brand-dark hover:text-amber-800 transition-colors font-semibold"
                >
                  +91 70947 44989
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Wabi-Sabi Banner Section (Moved to top right under info columns) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-[#EAE6DF]/85 border border-brand-dark/10 flex flex-col md:flex-row items-stretch mt-4 mb-8 md:mb-10 overflow-hidden"
          >
            {/* Banner Left Image */}
            <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative min-h-[220px] md:min-h-[300px]">
              <Image
                src="/contact/contact-detail.png"
                alt="Wabi-Sabi Decor"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            
            {/* Banner Right Content */}
            <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-14 lg:p-16 flex flex-col justify-center items-start">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-[28px] lg:text-[30px] font-semibold leading-[1.25] text-brand-dark tracking-wide">
                Let's shape spaces that feel rooted, relevant and enduring.
              </h2>
              
              <p className="font-serif text-sm sm:text-base text-brand-dark font-medium leading-relaxed mt-3">
                We are here to listen, explore and design with care, clarity and intention.
              </p>
              
              <p className="font-serif text-sm sm:text-base text-brand-dark/80 font-semibold mt-5 italic">
                We look forward to hearing from you.
              </p>
            </div>
          </motion.div>

          {/* Blockquote Quote Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center text-center mt-4 mb-2"
          >
            {/* Stylized Double Quotes Icon in deep logo navy */}
            <div className="text-[#1F3E6C] text-5xl md:text-6xl font-bold leading-none mb-1">
              “
            </div>
            
            <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold tracking-wide text-brand-dark max-w-2xl px-4 leading-relaxed">
              Every meaningful project begins with a conversation.
            </p>
          </motion.div>

        </div>
      </section>
    </PageTransition>
  );
}
