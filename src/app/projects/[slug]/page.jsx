"use client";

import React, { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projectsData = {
  "oceanic-branding": {
    title: "Oceanic Branding",
    category: "Brand Identity",
    client: "Deep Ocean Initiative",
    year: "2025",
    description: "A complete visual and sensory rebrand for a deep-sea marine exploration initiative.",
    color: "from-zinc-800 to-zinc-700",
    details: "This project involved research into bioluminescent design systems, deep-water topography maps translated into vector graphics, and a sustainable packaging suite using seaweed-based polymers."
  },
  "coastal-living-app": {
    title: "Coastal Living",
    category: "Web & Mobile App",
    client: "Shoreline Retreats",
    year: "2026",
    description: "Designing a premium booking and curation app for coastal retreats and wellness travel.",
    color: "from-zinc-700 to-zinc-650",
    details: "Coastal Living is a native-first booking platform designed with premium micro-interactions. The interface uses fluid motion patterns mimicking ocean waves to establish a relaxed, luxurious browsing experience."
  },
  "salt-flats-exhibition": {
    title: "Salt Flats Exhibition",
    category: "Spatial Experience",
    client: "Arte-Terra Foundation",
    year: "2025",
    description: "Immersive projection and architectural lighting installations in desert environments.",
    color: "from-zinc-650 to-zinc-600",
    details: "Crafted as a site-specific installation, we designed lighting algorithms that respond dynamically to wind speed, temperature, and local salt crystal formations to map visual art onto the landscape."
  },
  "tide-analytics": {
    title: "Tide Analytics",
    category: "Data Visualization",
    client: "Global Maritime Council",
    year: "2026",
    description: "Real-time maritime climate analytics platform mapping oceanic currents and patterns.",
    color: "from-zinc-850 to-zinc-700",
    details: "We built high-performance canvas visualizers that digest millions of floating buoy data points in real time. The resulting interface provides researchers and logistics companies with predictive wave modeling."
  }
};

export default function ProjectDetail({ params }) {
  const { slug } = use(params);
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f3efe6]">
        <Header />
        <PageTransition>
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 text-center flex-1">
            <h1 className="text-3xl font-bold mb-4 font-serif-elegant">Project Not Found</h1>
            <p className="text-[#1c1c1c]/60 mb-8 font-serif-elegant">The project you are looking for does not exist or has been moved.</p>
            <Link href="/projects" className="px-6 py-3 rounded-full bg-[#1c1c1c] hover:bg-zinc-800 text-white font-medium">
              Back to Projects
            </Link>
          </div>
        </PageTransition>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f3efe6]">
      <Header />
      <PageTransition>
        <article className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 w-full flex-1">
          {/* Breadcrumb / Back button */}
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-[#1c1c1c] font-medium mb-12 hover:underline font-serif-elegant">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          {/* Project Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
            <div className="lg:col-span-2">
              <span className="text-xs font-semibold tracking-widest text-[#1c1c1c]/60 uppercase mb-3 block font-sans-elegant">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 font-serif-elegant">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-[#1c1c1c]/80 font-light leading-relaxed font-serif-elegant">
                {project.description}
              </p>
            </div>
            
            {/* Metadata Sidebar Card */}
            <div className="p-8 rounded-2xl border border-[#1c1c1c]/10 bg-white/20 backdrop-blur-xs flex flex-col justify-between gap-6">
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#1c1c1c]/45 mb-1">Client</span>
                <span className="font-medium text-[#1c1c1c] font-serif-elegant">{project.client}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#1c1c1c]/45 mb-1">Year</span>
                <span className="font-medium text-[#1c1c1c] font-serif-elegant">{project.year}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#1c1c1c]/45 mb-1">Role</span>
                <span className="font-medium text-[#1c1c1c] font-serif-elegant">{project.category}</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Frame */}
          <div className="relative overflow-hidden rounded-2xl aspect-[21/9] bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 border border-[#1c1c1c]/5 mb-16">
            <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-40 mix-blend-multiply`} />
          </div>

          {/* Project Body Narrative */}
          <div className="max-w-3xl mx-auto py-8">
            <h3 className="text-2xl font-bold mb-6 font-serif-elegant">The Challenge & Approach</h3>
            <p className="text-[#1c1c1c]/75 leading-relaxed font-light text-lg mb-8 font-serif-elegant">
              {project.details}
            </p>
            <p className="text-[#1c1c1c]/75 leading-relaxed font-light text-lg font-serif-elegant">
              At Sea Salt Studio, we approach each project by identifying the authentic core of the brand. We then design an ecosystem around it, mapping out client interfaces, digital components, and physical design systems to ensure cohesive communication at every touchpoint.
            </p>
          </div>
        </article>
      </PageTransition>
      <Footer />
    </div>
  );
}
