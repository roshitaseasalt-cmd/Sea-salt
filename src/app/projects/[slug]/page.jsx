"use client";

import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import { flatProjects } from "@/data/projects";

export default function ProjectDetail({ params }) {
  const { slug } = use(params);
  const project = flatProjects.find(p => p.slug === slug);

  if (!project) {
    return (
      <PageTransition>
        <div className="flex-1 bg-[#f4f1ec] text-[#494845] flex flex-col justify-center items-center font-sans py-24 text-center px-6">
          <h1 className="text-3xl font-serif mb-4">Project Not Found</h1>
          <p className="text-[#494845] mb-8 font-light max-w-sm">The project you are looking for does not exist or has been moved.</p>
          <Link href="/projects" className="px-6 py-2.5 rounded-full border border-[#dad7d1] hover:bg-[#dad7d1]/35 text-xs tracking-wider uppercase font-medium transition-colors">
            Back to Projects
          </Link>
        </div>
      </PageTransition>
    );
  }

  // Determine back link based on category
  const backLink = project.category === "Interiors" ? "/projects?tab=interiors" : "/projects?tab=architecture";

  return (
    <div className="w-full bg-[#f4f1ec] text-[#494845] font-sans flex-1 flex flex-col py-16 md:py-24 transition-colors duration-300">
      <PageTransition>
        <article className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1">
          {/* Breadcrumb / Back button */}
          <Link 
            href={backLink} 
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#494845]/80 font-medium mb-12 hover:text-[#494845] transition-colors select-none"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to {project.category}
          </Link>

          {/* Project Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
            <div className="lg:col-span-2">
              <span className="text-xs font-semibold tracking-widest text-[#2b5c8f] uppercase mb-3 block select-none">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-light tracking-wide mb-6 leading-tight select-none">
                {project.title}
              </h1>
              <p className="text-base md:text-lg text-[#494845]/85 font-light leading-relaxed">
                {project.details}
              </p>
            </div>
            
            {/* Metadata Sidebar Card */}
            <div className="p-8 border border-[#dad7d1] bg-[#f4f1ec]/50 backdrop-blur-xs flex flex-col justify-between gap-6">
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#494845]/50 font-semibold mb-1">Location</span>
                <span className="text-sm font-light text-[#494845]">{project.location}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#494845]/50 font-semibold mb-1">Year</span>
                <span className="text-sm font-light text-[#494845]">{project.year}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#494845]/50 font-semibold mb-1">{project.role}</span>
                <span className="text-sm font-light text-[#494845]">{project.architect}</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Frame */}
          <div className="relative overflow-hidden aspect-[21/9] border border-[#dad7d1]/50 mb-16 select-none bg-zinc-200">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Project Body Narrative */}
          <div className="max-w-3xl mx-auto py-8">
            <h3 className="text-xl md:text-2xl font-serif mb-6 font-light text-[#494845]">The Vision & Craft</h3>
            <p className="text-[#494845]/80 leading-relaxed font-light text-base mb-8">
              At Sea Salt Studio, we approach design as a synthesis of memory, materials, and structure. Our workspaces, residences, and installations prioritize natural lighting thresholds and raw sensory details to evoke a feeling of silent timelessness.
            </p>
            <p className="text-[#494845]/80 leading-relaxed font-light text-base">
              Every detail has been curated to maintain physical integrity and aesthetic clarity. By designing custom lighting schemes, structural alignments, and physical finishes, we build environments that are fully integrated, expressive, and durable.
            </p>
          </div>
        </article>
      </PageTransition>
    </div>
  );
}
