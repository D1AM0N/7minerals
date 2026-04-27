"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-deep/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-transparent to-navy-deep z-10" />
        <img 
          src="/images/hero-bg.png" 
          alt="75 Minerals Mining Site" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Top Scrim for Navbar Separation */}
      <div className="absolute top-0 left-0 right-0 h-[160px] bg-gradient-to-b from-navy-deep/90 to-transparent z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <span className="text-emerald-primary text-sm font-bold uppercase tracking-[0.4em]">Nigeria's Leading Resource Partner</span>
          <h1 className="text-5xl md:text-8xl font-heading text-white leading-tight">
            Visualizing the <span className="text-emerald-primary italic">Future</span> <br />
            of Resources
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-stone/80 font-sans max-w-2xl mx-auto leading-relaxed"
        >
          Pioneering sustainable extraction and strategic management of Nigeria's vast mineral wealth through innovation, integrity, and excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
        >
          <button className="bg-white hover:bg-emerald-primary hover:brightness-110 text-navy-deep hover:text-white px-10 py-4 rounded-md text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10">
            Explore Operations
          </button>
          <button className="border border-white/20 hover:border-emerald-primary text-white px-10 py-4 rounded-md text-sm font-bold uppercase tracking-widest transition-all backdrop-blur-sm">
            Our Sustainability
          </button>
        </motion.div>
      </div>

      {/* Animated Gold Divider at Bottom */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
        className="absolute bottom-0 left-0 h-1 bg-emerald-primary z-30 shadow-[0_0_15px_rgba(201,146,42,0.5)]"
      />

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/40 uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-emerald-primary to-transparent"></div>
      </motion.div>
    </section>
  );
}
