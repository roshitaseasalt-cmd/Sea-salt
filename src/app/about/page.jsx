"use client";

import React from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const values = [
  {
    title: "Tactile Design",
    description: "Even in the digital space, we create experiences that feel tangible, responsive, and grounded."
  },
  {
    title: "Pure Integrity",
    description: "No bloated code or patterns. We build lightweight, efficient architectures designed to perform."
  },
  {
    title: "Dynamic Narratives",
    description: "Every pixel and scroll trigger should contribute to a cohesive story that connects with the user."
  }
];

export default function About() {
  return (
    <PageTransition>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 w-full flex-1">
        {/* Intro Hero */}
        <div className="max-w-3xl mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 font-serif-elegant"
          >
            We build digital products <br />
            <span className="text-gradient">with organic integrity.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg md:text-xl text-[#1c1c1c]/80 font-light leading-relaxed font-serif-elegant"
          >
            Founded on the rugged coastline, Sea Salt Studios was created to bridge the gap between technical excellence and artistic expression. We operate at the intersection of performance and poetry.
          </motion.p>
        </div>

        {/* Studio Image / Grid Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden aspect-[21/9] bg-gradient-to-tr from-zinc-800 to-zinc-650 opacity-20 border border-[#1c1c1c]/10 mb-20"
        />

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 tracking-tight font-serif-elegant">Our Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx + 0.2, duration: 0.6 }}
                className="p-8 rounded-2xl border border-[#1c1c1c]/10 bg-white/20 backdrop-blur-xs"
              >
                <div className="text-zinc-600 font-mono text-sm mb-4 font-semibold">
                  0{idx + 1}.
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif-elegant">{value.title}</h3>
                <p className="text-sm text-[#1c1c1c]/70 font-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
