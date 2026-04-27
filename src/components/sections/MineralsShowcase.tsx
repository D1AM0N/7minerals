"use client";

import React from 'react';
import MineralCard from './MineralCard';
import { mineralCategories } from '@/data';

export default function MineralsShowcase() {
  return (
    <section className="bg-navy-deep py-24 md:py-32 relative overflow-hidden">
      {/* Faint Geometric SVG Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-emerald-primary text-xs font-bold uppercase tracking-[0.4em]">Resource Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-heading text-white">Prime Mineral Extractions</h2>
          <p className="text-stone/60 font-sans leading-relaxed">
            From industrial minerals to energy-dense resources, our portfolio represents the diversity and wealth of Nigeria's geological terrain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mineralCategories.slice(0, 3).map((mineral) => (
            <MineralCard key={mineral.id} mineral={mineral} />
          ))}
        </div>

        <div className="text-center pt-8">
          <button className="text-emerald-primary border-b border-emerald-primary/30 pb-2 text-sm font-bold uppercase tracking-widest hover:text-white hover:border-white transition-all">
            View Complete Catalog
          </button>
        </div>
      </div>
    </section>
  );
}
