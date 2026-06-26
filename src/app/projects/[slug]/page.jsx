"use client";

import React, { use, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import PageTransition from "@/components/PageTransition";
import { flatProjects } from "@/data/projects";

export default function ProjectDetail({ params }) {
  const { slug } = use(params);
  const project = flatProjects.find((p) => p.slug === slug);
  const lenis = useLenis();

  const [selectedView, setSelectedView] = useState(null);
  const [selectedMomentIndex, setSelectedMomentIndex] = useState(null);

  const handleNextMoment = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      if (project?.images?.moments) {
        setSelectedMomentIndex((prev) =>
          prev === project.images.moments.length - 1 ? 0 : prev + 1,
        );
      }
    },
    [project],
  );

  const handlePrevMoment = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      if (project?.images?.moments) {
        setSelectedMomentIndex((prev) =>
          prev === 0 ? project.images.moments.length - 1 : prev - 1,
        );
      }
    },
    [project],
  );

  const handleNextView = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      if (project?.images?.views && selectedView) {
        const currentIndex = project.images.views.indexOf(selectedView);
        if (currentIndex !== -1) {
          const nextIndex = currentIndex === project.images.views.length - 1 ? 0 : currentIndex + 1;
          setSelectedView(project.images.views[nextIndex]);
        }
      }
    },
    [project, selectedView],
  );

  const handlePrevView = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      if (project?.images?.views && selectedView) {
        const currentIndex = project.images.views.indexOf(selectedView);
        if (currentIndex !== -1) {
          const prevIndex = currentIndex === 0 ? project.images.views.length - 1 : currentIndex - 1;
          setSelectedView(project.images.views[prevIndex]);
        }
      }
    },
    [project, selectedView],
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedView !== null || selectedMomentIndex !== null) {
        if (e.key === "Escape") {
          setSelectedView(null);
          setSelectedMomentIndex(null);
        }
      }
      if (selectedMomentIndex !== null) {
        if (e.key === "ArrowRight") handleNextMoment();
        if (e.key === "ArrowLeft") handlePrevMoment();
      }
      if (selectedView !== null && project?.images?.views?.includes(selectedView)) {
        if (e.key === "ArrowRight") handleNextView();
        if (e.key === "ArrowLeft") handlePrevView();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedView, selectedMomentIndex, handleNextMoment, handlePrevMoment, handleNextView, handlePrevView, project]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedView !== null || selectedMomentIndex !== null) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      lenis?.start();
    };
  }, [selectedView, selectedMomentIndex, lenis]);

  if (!project) {
    return (
      <div className="flex-1 bg-brand-sand text-brand-dark flex flex-col justify-center items-center py-24 text-center px-6 min-h-screen">
        <h1
          className="text-3xl font-serif mb-4"
          style={{ fontFamily: '"Canela Light Trial", serif' }}
        >
          Project Not Found
        </h1>
        <p
          className="mb-8 font-light max-w-sm"
          style={{ fontFamily: '"Freight Text", serif' }}
        >
          The project you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/projects"
          className="px-6 py-2.5 rounded-full border border-brand-dark/20 hover:bg-brand-dark/5 text-xs tracking-wider uppercase font-medium transition-colors"
        >
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
            <h1 className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[56px] mb-2 md:mb-4 leading-none font-cormorant">
              {project.title}
            </h1>

            <p
              className="text-[15px] sm:text-[16px] md:text-[17px] font-freight opacity-90 mb-5 md:mb-8"
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
          </div>
        </section>

        {/* 2. Intro & Plan Section */}
        <section className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Description & Metadata */}
            <div className="lg:col-span-5 flex flex-col gap-12 lg:gap-20 lg:border-r lg:border-warm-grey lg:pr-10">
              <p
                className="text-[12px] sm:text-[15px] md:text-[18px] leading-[1.65] text-brand-dark font-montserrat font-light"
                style={{ fontFamily: '"Freight Text", serif' }}
              >
                {project.details}
              </p>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 gap-y-10 gap-x-8 pt-8 border-t border-warm-grey">
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase font-light text-brand-dark/60">
                    LOCATION
                  </span>
                  <span
                    className="text-sm sm:text-[15px] text-brand-dark"
                    style={{ fontFamily: '"Canela Light Trial", serif' }}
                  >
                    {project.location}
                  </span>
                </div>

                {project.client && (
                  <div className="flex flex-col gap-2">
                    <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase font-light text-brand-dark/60">
                      CLIENT
                    </span>
                    <span
                      className="text-sm sm:text-[15px] text-brand-dark"
                      style={{ fontFamily: '"Canela Light Trial", serif' }}
                    >
                      {project.client}
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase font-light text-brand-dark/60">
                    STATUS
                  </span>
                  <span
                    className="text-sm sm:text-[15px] text-brand-dark"
                    style={{ fontFamily: '"Canela Light Trial", serif' }}
                  >
                    {project.status || "Built"}
                  </span>
                </div>

                {project.scope && (
                  <div className="flex flex-col gap-2">
                    <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase font-light text-brand-dark/60">
                      SCOPE
                    </span>
                    <span
                      className="text-sm sm:text-[15px] text-brand-dark"
                      style={{ fontFamily: '"Canela Light Trial", serif' }}
                    >
                      {project.scope}
                    </span>
                  </div>
                )}

                {project.category === "Architecture" && (
                  <div className="flex flex-col gap-2">
                    <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase font-light text-brand-dark/60">
                      ROLE
                    </span>
                    <span
                      className="text-sm sm:text-[15px] text-brand-dark italic"
                      style={{ fontFamily: '"Canela Light Trial", serif' }}
                    >
                      {project.role}
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase font-light text-brand-dark/60">
                    YEAR
                  </span>
                  <span
                    className="text-sm sm:text-[15px] text-brand-dark"
                    style={{ fontFamily: '"Canela Light Trial", serif' }}
                  >
                    {project.year}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Plan Image */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[400px]">
              {project.images?.plan ? (
                <>
                  {[
                    "house-of-courts",
                    "residence-at-hospet",
                    "resort-at-kalimpong",
                  ].includes(project.slug) && (
                    <div className="absolute top-0 right-0 flex flex-col items-center opacity-60 z-10">
                      <svg
                        className={`w-5 h-5 ${
                          project.slug === "house-of-courts"
                            ? "rotate-90"
                            : project.slug === "resort-at-kalimpong"
                              ? "rotate-180"
                              : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path
                          d="M12 2v20M2 12h20M12 2l-3 4h6z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  )}
                  <div
                    className="relative w-full h-full min-h-[300px] md:min-h-[450px] cursor-pointer"
                    onClick={() => setSelectedView(project.images.plan)}
                  >
                    <Image
                      src={project.images.plan}
                      alt="Plan Drawing"
                      fill
                      loading="eager"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-contain p-4 md:p-8"
                    />
                  </div>
                </>
              ) : (
                <div className="w-full h-full min-h-[300px] bg-brand-dark/5 flex items-center justify-center">
                  <span className="text-sm text-brand-dark/40 font-serif">
                    Drawing not available
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 3. Views Gallery */}
        {project.slug !== "resort-at-kalimpong" && project.slug !== "residence-at-hospet" &&
          project.images?.views &&
          project.images.views.length > 0 && (
            <section className="w-full px-2 sm:px-6 md:px-10 mb-16 md:mb-24">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6">
                {project.images.views.map((src, index) => (
                  <div
                    key={index}
                    className={`relative aspect-[4/3] w-full overflow-hidden  cursor-pointer group bg-amber-100 ${
                      project.images.views.length === 2
                        ? "md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-1.5rem)/2)]"
                        : "md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/3)]"
                    }`}
                    onClick={() => setSelectedView(src)}
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

        {/* Long Views (Kalimpong & Hospet) */}
        {(project.slug === "resort-at-kalimpong" || project.slug === "residence-at-hospet") &&
          project.images?.views?.[0] && (
            <section className="w-full max-w-screen-xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 mb-16 md:mb-24">
              <div
                className="relative w-full aspect-[2/1] lg:aspect-[21/9] cursor-pointer"
                onClick={() => setSelectedView(project.images.views[0])}
              >
                <Image
                  src={project.images.views[0]}
                  alt={`${project.title} View 1`}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover"
                />
                {project.slug === "residence-at-hospet" && (
                  <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                )}
              </div>
            </section>
          )}

        {/* Residence at Hospet - Spatial Systems */}
        {project.slug === "residence-at-hospet" && project.images?.views?.length > 1 && (
          <section className="w-full px-2 sm:px-6 md:px-10 mb-16 md:mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-4 sm:w-6 h-px bg-[#122660]" />
              <h2 className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-normal text-[#122660]">
                SPATIAL SYSTEMS
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6">
              {project.images.views.slice(1).map((src, index) => {
                const title = index === 0 ? "Coffered Slab" : index === 1 ? "Jack Arch" : "Vault";
                const desc = index === 0 
                  ? "A coffered concrete slab reduces structural depth while creating a calm, rhythmic ceiling."
                  : index === 1
                  ? "Jack arches span between supports to create wide column-free spaces and frame the view."
                  : "A vaulted entry compresses the approach and opens toward the horizon.";
                
                const itemsCount = project.images.views.slice(1).length;
                const widthClasses = itemsCount === 2
                  ? "md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-1.5rem)/2)]"
                  : "md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/3)]";

                return (
                  <div key={index} className={`flex flex-col gap-1 w-full ${widthClasses}`}>
                    <div
                      className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer group bg-transparent"
                      onClick={() => setSelectedView(src)}
                    >
                      <Image
                        src={src}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center px-2">
                      <h3 className="text-[12px] md:text-[15px] text-brand-dark mb-2" style={{ fontFamily: '"Canela Light Trial", serif' }}>
                        {title}
                      </h3>
                      <p className="font-sans md:px-10 lg:px-20 text-[12px] md:text-[13px] text-brand-dark/80  font-light leading-relaxed"
                      style={{ fontFamily: '"Freight Text", serif' }}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 4. Moments Gallery */}
        {project.images?.moments && project.images.moments.length > 0 && (
          <section className="w-full max-w-screen-xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 mb-8 md:mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-4 sm:w-6 h-px bg-[#122660]" />
              <h2 className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-normal text-[#122660]">
                MOMENTS
              </h2>
            </div>

            <div
              className={`grid w-full gap-4 sm:gap-6 grid-cols-2 md:grid-cols-4 ${project.images.moments.length > 4 ? "lg:grid-cols-6" : "lg:grid-cols-4"}`}
            >
              {project.images.moments.map((moment, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div
                    className="relative aspect-[4/3] w-full overflow-hidden bg-brand-dark/5 cursor-pointer group"
                    onClick={() => setSelectedMomentIndex(index)}
                  >
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

        {/* Resort at Kalimpong - Second View */}
        {project.slug === "resort-at-kalimpong" &&
          project.images?.views?.[1] && (
            <section className="w-full max-w-screen-xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 mb-16 md:mb-24">
              <div
                className="relative w-full aspect-[2/1] lg:aspect-[21/9] cursor-pointer"
                onClick={() => setSelectedView(project.images.views[1])}
              >
                <Image
                  src={project.images.views[1]}
                  alt={`${project.title} View 2`}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-contain"
                />
              </div>
            </section>
          )}

        {/* Section Drawing */}
        {project.images?.sectionDrawing && (
          <section className="w-full max-w-screen-xl mb-16 md:mb-28 mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
            <div
              className="w-full drop-shadow-[0_15px_10px_rgba(0,0,0,0.1)] cursor-pointer"
              onClick={() => setSelectedView(project.images.sectionDrawing)}
            >
              <Image
                src={project.images.sectionDrawing}
                alt={`${project.title} Section Drawing`}
                width={2000}
                height={800}
                priority
                loading="eager"
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="w-full h-auto object-contain"
              />
            </div>
          </section>
        )}

        {/* 5. Blockquote Footer */}
        {project.blockquote && (
          <section className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 mb-24 md:mb-32 flex flex-col md:flex-row items-center md:items-end justify-between gap-55">
            <div className="flex items-start max-w-3xl">
              <div className="w-6 sm:w-10 h-px bg-[#122660] mt-[18px] mr-4 shrink-0" />
              <div className="text-[#122660] text-3xl md:text-4xl font-bold leading-none mt-[-10px] shrink-0 mr-4 sm:mr-6">
                “
              </div>
              <p
                className="text-[14px] sm:text-[16px] md:text-[20px] leading-[1.5] text-brand-dark/90 text-left"
                style={{ fontFamily: '"Canela Light Trial", serif' }}
              >
                {project.blockquote}
              </p>
            </div>

            <Link
              href="/projects"
              className="font-sans  text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-normal text-[#122660] hover:text-brand-dark transition-colors flex items-center gap-3 shrink-0 pb-2"
            >
              VIEW ALL PROJECTS
              <span className="text-[18px] leading-none font-normal block mt-[-2px]">
                →
              </span>
            </Link>
          </section>
        )}

        <AnimatePresence>
          {/* View Modal */}
          {selectedView && (
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Enlarged Project View"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedView(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f4f1ec]/95 backdrop-blur-sm p-4 sm:p-10 cursor-zoom-out"
            >
              <button
                aria-label="Close modal"
                onClick={() => setSelectedView(null)}
                className="absolute top-6 right-6 sm:top-10 sm:right-10 text-brand-dark hover:opacity-70 transition-opacity z-[101]"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Prev/Next Buttons for Views (only if in views gallery) */}
              {project?.images?.views?.includes(selectedView) && (
                <>
                  <button
                    aria-label="Previous view"
                    onClick={handlePrevView}
                    className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 text-brand-dark hover:opacity-70 transition-opacity z-[101] p-4 cursor-pointer"
                  >
                    <svg
                      className="w-8 h-8 sm:w-12 sm:h-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="Next view"
                    onClick={handleNextView}
                    className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 text-brand-dark hover:opacity-70 transition-opacity z-[101] p-4 cursor-pointer"
                  >
                    <svg
                      className="w-8 h-8 sm:w-12 sm:h-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}

              <motion.div
                key={selectedView}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full max-w-6xl aspect-[16/9] max-h-[90vh] cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedView}
                  alt="Enlarged View"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          )}

          {/* Moment Gallery Modal */}
          {selectedMomentIndex !== null && project.images?.moments && (
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Enlarged Moment View"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMomentIndex(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f4f1ec]/95 backdrop-blur-sm p-4 sm:p-10 cursor-zoom-out"
            >
              <button
                aria-label="Close modal"
                onClick={() => setSelectedMomentIndex(null)}
                className="absolute top-6 right-6 sm:top-10 sm:right-10 text-brand-dark hover:opacity-70 transition-opacity z-[101]"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Prev Button */}
              <button
                aria-label="Previous moment"
                onClick={handlePrevMoment}
                className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 text-brand-dark hover:opacity-70 transition-opacity z-[101] p-4 cursor-pointer"
              >
                <svg
                  className="w-8 h-8 sm:w-12 sm:h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Next Button */}
              <button
                aria-label="Next moment"
                onClick={handleNextMoment}
                className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 text-brand-dark hover:opacity-70 transition-opacity z-[101] p-4 cursor-pointer"
              >
                <svg
                  className="w-8 h-8 sm:w-12 sm:h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <motion.div
                key={selectedMomentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full max-w-5xl flex flex-col items-center justify-center cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-[70vh] sm:h-[80vh]">
                  <Image
                    src={project.images.moments[selectedMomentIndex].src}
                    alt={project.images.moments[selectedMomentIndex].caption}
                    fill
                    className="object-contain"
                  />
                </div>
                <p
                  className="text-center text-sm sm:text-base text-brand-dark/90 italic mt-6"
                  style={{ fontFamily: '"Canela Light Trial", serif' }}
                >
                  {project.images.moments[selectedMomentIndex].caption}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </PageTransition>
    </div>
  );
}
