"use client";

import React, { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { projectsData } from "@/data/projects";

function ProjectsList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Read active tab from searchParams, default to "architecture"
  const tabParam = searchParams.get("tab");
  const initialTab = tabParam === "interiors" ? "interiors" : "architecture";
  const [activeTab, setActiveTab] = useState(initialTab);

  // Sync tab with URL query parameter
  useEffect(() => {
    if (tabParam === "interiors") {
      setActiveTab("interiors");
    } else {
      setActiveTab("architecture");
    }
  }, [tabParam]);

  const toggleTab = () => {
    const nextTab = activeTab === "architecture" ? "interiors" : "architecture";
    setActiveTab(nextTab);
    router.push(`/projects?tab=${nextTab}`, { scroll: false });
  };

  const currentProjects = projectsData[activeTab];

  return (
    <div className="w-full bg-brand-sand text-brand-dark font-sans flex-1 flex flex-col py-16 md:py-24 transition-colors duration-300">
      <PageTransition>
        <section className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1">
          
          {/* Page Header */}
          <div className="max-w-7xl mb-16 flex items-start justify-between">
            <div className="max-w-2xl">
              <h1 className="text-[40px] font-serif font-semibold text-brand-dark leading-none mb-3 tracking-wide select-none">
                {activeTab === "architecture" ? "Architecture" : "Interiors"}
              </h1>
             
              <p className="text-[12px] font-sans font-normal text-brand-dark leading-relaxed max-w-[280px] select-none">
                {activeTab === "architecture" 
                  ? "Selected works across landscape, hospitality and residential environments." 
                  : "Thoughtful interiors that balance materiality, normal and quiet detail."
                }
              </p>
            </div>
            
            {/* Elegant Circular Recycle Toggle Button */}
            <div className="pt-2 select-none">
              <button
                onClick={toggleTab}
                className="w-11 h-11 rounded-full  bg-transparent hover:bg-[#dad7d1]/35 hover:border-bratext-brand-dark/40 transition-all duration-300 text-brand-dark flex items-center justify-center focus:outline-none group cursor-pointer shadow-none relative"
                title={`Switch to ${activeTab === "architecture" ? "Interiors" : "Architecture"}`}
              >
                <Image
                  src="/icons/TOGGLE ICON.png"
                  alt="Toggle icon"
                  width={96}
                  height={96}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 max-w-none object-cover transition-transform duration-700 ease-out ${activeTab === "interiors" ? "rotate-180" : "rotate-0"}`}
                />
              </button>
            </div>
          </div>

          {/* Projects Listing Row List */}
          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                {currentProjects.map((project, idx) => (
                  <div
                    key={project.slug}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-2 py-2   first:pt-0 last:border-b-0 last:pb-0"
                  >
                    {/* Left Column (Meta Info) */}
                    <div className="lg:col-span-4 border-b-2 border-warm-grey flex flex-col justify-center">
                      <span className="text-[13px] font-sans font-medium tracking-widest text-[#2b5c8f] mb-4 select-none">
                        0{idx + 1}
                      </span>
                      <h2 className="text-[28px] font-serif font-medium text-brand-dark leading-[1.2] mb-1.5 tracking-wide">
                        <Link href={`/projects/${project.slug}`} className="hover:text-[#2b5c8f] transition-colors duration-300">
                          {project.title}
                        </Link>
                      </h2>
                      <div className="text-[12px] text-brand-dark/80 font-sans font-medium tracking-wide mb-6">
                        {project.location}
                      </div>
                      
                      <div className="w-8 h-px bg-brand-dark mb-6" />
                      
                      <div className="flex flex-col gap-4">
                        <div>
                          <span className="block text-[11px] font-sans font-normal italic text-brand-dark/70 mb-0.5">
                            {project.role}
                          </span>
                          <span className="text-[13px] font-sans font-normal text-brand-dark">
                            {project.architect}
                          </span>
                        </div>
                        {activeTab === "interiors" && project.year && (
                          <div>
                            <span className="block text-[11px] font-sans font-normal italic text-brand-dark/70 mb-0.5">
                              Year
                            </span>
                            <span className="text-[13px] font-sans font-normal text-brand-dark">
                              {project.year}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Column (Image View) */}
                    <div className="lg:col-span-8 pb-1 flex items-start">
                      <Link href={`/projects/${project.slug}`} className="block w-full overflow-hidden aspect-[16/10] relative group select-none">
                        <Image
                          src={project.images?.hero}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 58vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                          priority={idx === 0}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </section>
      </PageTransition>
    </div>
  );
}

export default function Projects() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-brand-sand text-brand-dark flex items-center justify-center font-serif text-xl">
        Loading...
      </div>
    }>
      <ProjectsList />
    </Suspense>
  );
}
