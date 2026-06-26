"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

export default function Contact() {
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <PageTransition>
      <section className="bg-brand-sand w-full min-h-screen select-none pt-8">
        
       

        {/* Main Hero Container */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 pb-16 md:pb-24">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-start"
          >
            {/* Left Column: Text content */}
            <div className="md:col-span-5 flex flex-col items-start pt-2 md:pt-6">
              
              <motion.h1
                variants={itemVariants}
                className="text-[44px] sm:text-[50px] md:text-[56px] lg:text-[62px] leading-[1.1] text-brand-dark"
                style={{ fontFamily: '"Canela Light Trial", serif' }}
              >
                Let&apos;s begin<br />
                a conversation.
              </motion.h1>

              <motion.div variants={itemVariants} className="flex flex-col mt-10 md:mt-14 space-y-12 md:space-y-16">
                <p
                  className="text-[15px] sm:text-[16px] md:text-[17px] text-brand-dark/90 leading-[1.65] max-w-[360px]"
                  style={{ fontFamily: '"Freight Text", serif' }}
                >
                  We work across architecture, interiors
                  and landscape, creating spaces that are
                  thoughtful, enduring and deeply connected
                  to their context. If you&apos;d like to discuss
                  a project, we&apos;d be delighted to hear from you.
                </p>

                <div className="flex flex-col space-y-3">
                  <h2
                    className="text-[32px] sm:text-[36px] md:text-[40px] text-brand-dark leading-none"
                    style={{ fontFamily: '"Canela Light Trial", serif' }}
                  >
                    Sea Salt
                  </h2>
                  <p
                    className="text-[15px] sm:text-[16px] md:text-[17px] text-brand-dark/90 leading-[1.65]"
                    style={{ fontFamily: '"Freight Text", serif' }}
                  >
                    Based in Bengaluru,<br />
                    working across India.
                  </p>
                </div>

                <div className="flex flex-col space-y-8 md:space-y-10">
                  <div className="flex flex-col space-y-2.5">
                    <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] text-brand-dark/80 uppercase font-bold">
                      EMAIL
                    </span>
                    <a
                      href="mailto:roshitasudhir@gmail.com"
                      className="text-[15px] sm:text-[16px] md:text-[17px] text-brand-dark hover:text-amber-800 transition-colors"
                      style={{ fontFamily: '"Freight Text", serif' }}
                    >
                      roshita.seasalt@gmail.com
                    </a>
                  </div>

                  <div className="flex flex-col space-y-2.5">
                    <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] text-brand-dark/80 uppercase font-bold">
                      PHONE
                    </span>
                    <a
                      href="tel:+917094744989"
                      className="text-[15px] sm:text-[16px] md:text-[17px] text-brand-dark hover:text-amber-800 transition-colors"
                      style={{ fontFamily: '"Freight Text", serif' }}
                    >
                      +91 70947 44989
                    </a>
                  </div>

                  <div className="flex flex-col space-y-2.5">
                    <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] text-brand-dark/80 uppercase font-bold">
                      INSTAGRAM
                    </span>
                    <a
                      href="https://instagram.com/seasalt.architecture"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] sm:text-[16px] md:text-[17px] text-brand-dark hover:text-amber-800 transition-colors"
                      style={{ fontFamily: '"Freight Text", serif' }}
                    >
                      @seasalt.architecture
                    </a>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Tall Image */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-7 flex flex-col gap-3 w-full h-fit mt-10 md:mt-0"
            >
              <div className="w-full aspect-[2/4] flex justify-center relative bg-brand-dark/5 overflow-hidden">
                <Image
                  src="/contact/contact-door.png"
                  alt="Custom door detail, Chennai"
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              <p
                className="text-[13px] text-brand-dark/80"
                style={{ fontFamily: '"Freight Text", serif' }}
              >
                Custom door detail, Chennai
              </p>
            </motion.div>
          </motion.div>

          <div className="w-full flex justify-end mt-8">
            <Link
              href="/projects"
              className="font-sans text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-normal text-[#122660] hover:text-brand-dark transition-colors flex items-center gap-3 shrink-0 pb-2"
            >
              VIEW ALL PROJECTS
              <span className="text-[18px] leading-none font-normal block mt-[-2px]">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
