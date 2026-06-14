"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import { flatProjects } from "@/data/projects";

export default function ProjectDetail({ params }) {
  const { slug } = use(params);
  const project = flatProjects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="flex-1 bg-brand-sand text-brand-dark flex flex-col justify-center items-center py-24 text-center px-6 min-h-screen">
        <h1 className="text-3xl font-serif mb-4" style={{ fontFamily: '"Canela Light Trial", serif' }}>Project Not Found</h1>
        <p className="mb-8 font-light max-w-sm" style={{ fontFamily: '"Freight Text", serif' }}>The project you are looking for does not exist or has been moved.</p>
        <Link href="/projects" className="px-6 py-2.5 rounded-full border border-brand-dark/20 hover:bg-brand-dark/5 text-xs tracking-wider uppercase font-medium transition-colors">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-brand-sand text-brand-dark flex flex-col min-h-screen select-none">
      <PageTransition>
        
        {/* 1. Hero Image Section */}
        <section className="relative w-full h-[65vh] md:h-[80vh] lg:h-[90vh]">
          {project.images?.hero && (
            <Image
              src={project.images.hero}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          )}
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

          {/* Hero Text */}
          <div className="absolute inset-0 flex flex-col justify-end w-full pb-10 sm:pb-16 max-w-screen-xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 text-white z-10">
            {project.category === "Architecture" && (
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-bold mb-4 opacity-90 font-sans">
                FEATURED PROJECT
              </span>
            )}
            
            <h1 
              className="text-4xl sm:text-5xl md:text-[64px] lg:text-[76px] mb-2 md:mb-4 leading-none"
              style={{ fontFamily: '"Canela Light Trial", serif' }}
            >
              {project.title}
            </h1>
            
            <p 
              className="text-[15px] sm:text-[16px] md:text-[17px] opacity-90 mb-5 md:mb-8"
              style={{ fontFamily: '"Freight Text", serif' }}
            >
              {project.location}
            </p>

            {project.role && (
              <p 
                className="text-[15px] sm:text-[16px] md:text-[17px] opacity-80 mb-8 md:mb-12 italic"
                style={{ fontFamily: '"Canela Light Trial", serif' }}
              >
                {project.role}
              </p>
            )}

            {/* Slider Counter */}
            <div className="flex items-center gap-4 text-xs font-sans tracking-widest opacity-80">
              <span>01</span>
              <div className="w-16 sm:w-20 md:w-24 h-px bg-white/50" />
              <span>{project.category === "Architecture" ? "06" : "07"}</span>
            </div>
          </div>
        </section>

        {/* 2. Intro & Plan Section */}
        <section className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Description & Metadata */}
            <div className="lg:col-span-5 flex flex-col gap-12 lg:gap-20 lg:border-r lg:border-brand-dark/15 lg:pr-10">
              <p 
                className="text-[17px] sm:text-[19px] md:text-[22px] leading-[1.65] text-brand-dark"
                style={{ fontFamily: '"Freight Text", serif' }}
              >
                {project.details}
              </p>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 gap-y-10 gap-x-8 pt-8 border-t border-brand-dark/15">
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase font-light text-brand-dark/60">
                    LOCATION
                  </span>
                  <span className="text-sm sm:text-[15px] text-brand-dark" style={{ fontFamily: '"Canela Light Trial", serif' }}>
                    {project.location}
                  </span>
                </div>
                
                {project.client && (
                  <div className="flex flex-col gap-2">
                    <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase font-light text-brand-dark/60">
                      CLIENT
                    </span>
                    <span className="text-sm sm:text-[15px] text-brand-dark" style={{ fontFamily: '"Canela Light Trial", serif' }}>
                      {project.client}
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase font-light text-brand-dark/60">
                    STATUS
                  </span>
                  <span className="text-sm sm:text-[15px] text-brand-dark" style={{ fontFamily: '"Canela Light Trial", serif' }}>
                    {project.status || "Built"}
                  </span>
                </div>

                {project.scope && (
                  <div className="flex flex-col gap-2">
                    <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase font-light text-brand-dark/60">
                      SCOPE
                    </span>
                    <span className="text-sm sm:text-[15px] text-brand-dark" style={{ fontFamily: '"Canela Light Trial", serif' }}>
                      {project.scope}
                    </span>
                  </div>
                )}
                
                {project.category === "Architecture" && (
                  <div className="flex flex-col gap-2">
                    <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase font-light text-brand-dark/60">
                      ROLE
                    </span>
                    <span className="text-sm sm:text-[15px] text-brand-dark italic" style={{ fontFamily: '"Canela Light Trial", serif' }}>
                      {project.role}
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase font-light text-brand-dark/60">
                    YEAR
                  </span>
                  <span className="text-sm sm:text-[15px] text-brand-dark" style={{ fontFamily: '"Canela Light Trial", serif' }}>
                    {project.year}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Plan Image */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[400px]">
              {project.images?.plan ? (
                <>
                  {project.category === "Architecture" && (
                    <div className="absolute top-0 left-0">
                      <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase font-light text-brand-dark/60">
                        PLAN
                      </span>
                    </div>
                  )}
                  {project.category === "Architecture" && (
                    <div className="absolute top-0 right-0 flex flex-col items-center gap-1 opacity-60">
                      <span className="font-sans text-[7px] sm:text-[8px] tracking-[0.2em] uppercase font-light text-brand-dark/80">
                        NORTH
                      </span>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2v20M2 12h20M12 2l-3 4h6z" fill="currentColor"/>
                      </svg>
                    </div>
                  )}
                  <div className="relative w-full h-full min-h-[300px] md:min-h-[450px]">
                    <Image
                      src={project.images.plan}
                      alt="Plan Drawing"
                      fill
                      className="object-contain p-4 md:p-8"
                    />
                  </div>
                </>
              ) : (
                <div className="w-full h-full min-h-[300px] bg-brand-dark/5 flex items-center justify-center">
                  <span className="text-sm text-brand-dark/40 font-serif">Drawing not available</span>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* 3. Views Gallery */}
        {project.images?.views && project.images.views.length > 0 && (
          <section className="w-full px-2 sm:px-6 md:px-10 mb-16 md:mb-24">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6">
              {project.images.views.map((src, index) => (
                <div 
                  key={index} 
                  className="relative aspect-[4/3] w-full md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/3)] overflow-hidden bg-brand-dark/5"
                >
                  <Image
                    src={src}
                    alt={`${project.title} View ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Moments Gallery */}
        {project.images?.moments && project.images.moments.length > 0 && (
          <section className="w-full max-w-screen-xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 mb-24 md:mb-32">
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-4 sm:w-6 h-px bg-[#122660]" />
              <h3 className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-normal text-[#122660]">
                MOMENTS
              </h3>
            </div>

            <div className={`grid w-full gap-4 sm:gap-6 grid-cols-2 md:grid-cols-4 ${project.images.moments.length > 4 ? 'lg:grid-cols-6' : 'lg:grid-cols-4'}`}>
              {project.images.moments.map((moment, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-dark/5">
                    <Image
                      src={moment.src}
                      alt={moment.caption}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <p 
                    className="text-center text-[11px] sm:text-[12px] md:text-[13px] text-brand-dark/90 italic"
                    style={{ fontFamily: '"Canela Light Trial", serif' }}
                  >
                    {moment.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. Blockquote Footer */}
        {project.blockquote && (
          <section className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 mb-24 md:mb-32 flex flex-col md:flex-row items-center md:items-end justify-between gap-10">
            <div className="flex items-start max-w-3xl">
              <div className="w-6 sm:w-10 h-px bg-[#122660] mt-[18px] mr-4 shrink-0" />
              <div className="text-[#122660] text-5xl md:text-6xl font-bold leading-none mt-[-10px] shrink-0 mr-4 sm:mr-6">
                “
              </div>
              <p 
                className="text-[19px] sm:text-[22px] md:text-[26px] leading-[1.5] text-brand-dark/90 text-left"
                style={{ fontFamily: '"Canela Light Trial", serif' }}
              >
                {project.blockquote}
              </p>
            </div>

            <Link 
              href="/projects" 
              className="font-sans text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-light text-[#122660] hover:text-brand-dark transition-colors flex items-center gap-3 shrink-0 pb-2"
            >
              VIEW ALL PROJECTS 
              <span className="text-[18px] leading-none font-light block mt-[-2px]">→</span>
            </Link>
          </section>
        )}
        
      </PageTransition>
    </div>
  );
}
