"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutSnapshot() {
  return (
    <section className="bg-stone py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-emerald-primary text-xs font-bold uppercase tracking-[0.4em]">Corporate Strategy</span>
            <h2 className="text-5xl md:text-6xl font-heading text-navy-deep leading-tight">
              Vision for <span className="italic">2030</span>
            </h2>
          </div>
          <p className="text-lg text-navy-mid/70 font-sans leading-relaxed max-w-xl">
            Our strategic roadmap is built on three pillars: technological integration, sustainable environmental practices, and local community empowerment. We aim to double our production capacity while achieving carbon neutrality across all primary mining operations by the end of the decade.
          </p>
          <div className="pt-4">
            <Link 
              href="/about"
              className="group inline-flex items-center gap-3 text-sm font-bold text-navy-deep uppercase tracking-widest hover:text-emerald-primary transition-colors"
            >
              Our History 
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>

        {/* Right Styled Image Box */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-navy-mid opacity-20"></div>
          <div className="relative aspect-[4/3] overflow-hidden bg-navy-mid rounded-sm shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1518173946687-a4c8a9b746f5?auto=format&fit=crop&q=80" 
              alt="Mining Site" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-emerald-primary/10 -z-10 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
