"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f3efe6]">
      <Header />
      <PageTransition>
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 w-full flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Text Content Column */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 font-serif-elegant"
              >
                Let's create <br />
                <span className="text-gradient">something iconic.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-lg text-[#1c1c1c]/75 font-light leading-relaxed mb-12 max-w-md font-serif-elegant"
              >
                Whether you have a fully-formed idea or are just starting to map out your digital footprint, we would love to collaborate.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex flex-col gap-6 font-light"
              >
                <div>
                  <span className="block text-xs uppercase tracking-widest text-[#1c1c1c]/60 font-semibold mb-1 font-sans-elegant">Email Us</span>
                  <a href="mailto:hello@seasaltstudio.com" className="text-xl hover:text-amber-800 transition-colors font-serif-elegant">
                    hello@seasaltstudio.com
                  </a>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-[#1c1c1c]/60 font-semibold mb-1 font-sans-elegant">Call Us</span>
                  <a href="tel:+919879598000" className="text-xl hover:text-amber-800 transition-colors font-serif-elegant">
                    +91 98795 98000
                  </a>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-[#1c1c1c]/60 font-semibold mb-1 font-sans-elegant">Our Studio</span>
                  <span className="text-xl block font-serif-elegant">
                    Surat, India
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="p-8 md:p-12 rounded-3xl border border-[#1c1c1c]/10 bg-white/20 backdrop-blur-xs self-start"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-[#1c1c1c]/5 rounded-full flex items-center justify-center mx-auto mb-6 text-[#1c1c1c]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 font-serif-elegant">Message Sent!</h3>
                  <p className="text-[#1c1c1c]/70 font-light max-w-sm mx-auto">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#1c1c1c]/80 font-sans-elegant">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#1c1c1c]/10 bg-white/40 focus:border-[#1c1c1c]/30 focus:outline-none transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#1c1c1c]/80 font-sans-elegant">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#1c1c1c]/10 bg-white/40 focus:border-[#1c1c1c]/30 focus:outline-none transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#1c1c1c]/80 font-sans-elegant">How can we help?</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#1c1c1c]/10 bg-white/40 focus:border-[#1c1c1c]/30 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#1c1c1c] hover:bg-zinc-800 text-white font-medium shadow-md transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </section>
      </PageTransition>
      <Footer />
    </div>
  );
}
