"use client";

import React from 'react';
import Link from 'next/link';

const SectionTag = ({ text, variant = 'default' }: { text: string, variant?: 'default' | 'white' }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${
    variant === 'white' ? 'border-white/30 text-white' : 'border-emerald-primary/30 text-emerald-primary'
  }`}>
    <div className={`w-1 h-1 rounded-full ${variant === 'white' ? 'bg-white' : 'bg-emerald-primary'}`}></div>
    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{text}</span>
  </div>
);

export default function SustainabilityHighlight() {
  return (
    <section className="bg-emerald-primary w-full py-24 relative overflow-hidden">
      {/* Abstract Nature Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <SectionTag text="ESG RESPONSIBILITY" variant="white" />
          <h2 className="text-4xl md:text-5xl font-heading text-white leading-tight">
            Preserving the Environment <br />
            <span className="italic">While Empowering Lives</span>
          </h2>
          <p className="text-white/80 font-sans leading-relaxed max-w-xl">
            Our commitment to sustainability goes beyond compliance. We implement reforestation programs, water purification systems, and educational initiatives in every region we operate. 
          </p>
          <div className="pt-4 flex flex-wrap gap-6">
            <Link 
              href="/sustainability"
              className="bg-white text-emerald-primary px-8 py-3 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-emerald-primary hover:brightness-110 hover:text-white transition-all duration-300"
            >
              2025 Impact Report
            </Link>
            <Link 
              href="/communities"
              className="border border-white/20 text-white px-8 py-3 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-emerald-primary transition-all"
            >
              Community Initiatives
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="aspect-square bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center items-center text-center space-y-2 border border-white/10">
              <span className="text-3xl font-heading text-white">45%</span>
              <span className="text-[9px] uppercase tracking-widest text-white/60">Water Recycled</span>
            </div>
            <div className="aspect-square bg-emerald-primary rounded-2xl p-8 flex flex-col justify-center items-center text-center space-y-2">
              <span className="text-3xl font-heading text-navy-deep">250k</span>
              <span className="text-[9px] uppercase tracking-widest text-navy-deep/60">Trees Planted</span>
            </div>
          </div>
          <div className="pt-12 space-y-4">
            <div className="aspect-square bg-navy-mid/30 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center items-center text-center space-y-2 border border-white/10">
              <span className="text-3xl font-heading text-white">100%</span>
              <span className="text-[9px] uppercase tracking-widest text-white/60">Local Labor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
