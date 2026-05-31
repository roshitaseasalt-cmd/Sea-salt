"use client";

import React from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const philosophyPillars = [
  {
    phase: "01 / Discover",
    title: "Understanding the Tide",
    description: "We dive deep into your market dynamics, audience patterns, and authentic history before drawing a single line of code. We believe research guides the compass."
  },
  {
    phase: "02 / Design",
    title: "Molding the Salt",
    description: "Design is not just decoration. We shape responsive, accessible layout systems that speak to your audience and evoke an emotional response, maintaining elegance throughout."
  },
  {
    phase: "03 / Build",
    title: "Curing the Glass",
    description: "Our development team brings designs to life using modern standards. We write clean, optimized code to deliver instant navigation, accessibility, and high performance."
  }
];

export default function Philosophy() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f3efe6]">
      <Header />
      <PageTransition>
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 w-full flex-1">
          {/* Page Header */}
          <div className="max-w-3xl mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 font-serif-elegant"
            >
              How we think and <br />
              <span className="text-gradient">how we execute.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg md:text-xl text-[#1c1c1c]/80 font-light leading-relaxed font-serif-elegant"
            >
              Philosophy guides everything we create. We steer clear of the transient hype to focus on craft, durability, and timeless aesthetic structures.
            </motion.p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {philosophyPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-[#1c1c1c]/10 pb-12 md:pb-16 flex flex-col md:flex-row gap-6 md:gap-16 items-start"
              >
                <div className="font-mono text-sm tracking-wider text-zinc-650 font-bold min-w-[120px] pt-1">
                  {pillar.phase}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif-elegant">{pillar.title}</h3>
                  <p className="text-[#1c1c1c]/75 leading-relaxed font-light text-base md:text-lg max-w-3xl">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </PageTransition>
      <Footer />
    </div>
  );
}
