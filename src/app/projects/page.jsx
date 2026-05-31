"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projects = [
  {
    slug: "oceanic-branding",
    title: "Oceanic Branding",
    category: "Brand Identity",
    description: "A complete visual and sensory rebrand for a deep-sea marine exploration initiative.",
    color: "from-zinc-800 to-zinc-700",
  },
  {
    slug: "coastal-living-app",
    title: "Coastal Living",
    category: "Web & Mobile App",
    description: "Designing a premium booking and curation app for coastal retreats and wellness travel.",
    color: "from-zinc-700 to-zinc-650",
  },
  {
    slug: "salt-flats-exhibition",
    title: "Salt Flats Exhibition",
    category: "Spatial Experience",
    description: "Immersive projection and architectural lighting installations in desert environments.",
    color: "from-zinc-650 to-zinc-600",
  },
  {
    slug: "tide-analytics",
    title: "Tide Analytics",
    category: "Data Visualization",
    description: "Real-time maritime climate analytics platform mapping oceanic currents and patterns.",
    color: "from-zinc-850 to-zinc-700",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f3efe6]">
      <Header />
      <PageTransition>
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 w-full flex-1">
          {/* Page Header */}
          <div className="max-w-3xl mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 font-serif-elegant"
            >
              Selected <span className="text-gradient">Works</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg text-[#1c1c1c]/75 font-light font-serif-elegant"
            >
              A compilation of stories, systems, and platforms crafted for brands who want to define their fields.
            </motion.p>
          </div>

          {/* Portfolio Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {projects.map((project) => (
              <motion.div key={project.slug} variants={itemVariants} className="group">
                <Link href={`/projects/${project.slug}`} className="block select-none">
                  {/* Image Placeholder Frame */}
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 border border-[#1c1c1c]/5 mb-6">
                    {/* Subtle wash overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-40 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out`} />
                    
                    {/* Glass Card Decorative Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#1c1c1c]/10 backdrop-blur-xs">
                      <span className="px-6 py-3 rounded-full bg-[#1c1c1c] text-white font-medium text-sm shadow-md tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        VIEW PROJECT
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold tracking-widest text-[#1c1c1c]/65 uppercase font-sans-elegant">
                      {project.category}
                    </span>
                    <h2 className="text-2xl font-bold group-hover:text-amber-850 transition-colors font-serif-elegant">
                      {project.title}
                    </h2>
                    <p className="text-sm text-[#1c1c1c]/70 font-light line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </PageTransition>
      <Footer />
    </div>
  );
}
