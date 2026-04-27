"use client";

import React from 'react';
import { MineralCategory } from '@/types';
import { motion } from 'framer-motion';

export default function MineralCard({ mineral }: { mineral: MineralCategory }) {
  return (
    <div className="group relative bg-navy-mid/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 h-full flex flex-col justify-between hover:border-emerald-primary/30 transition-all duration-500 overflow-hidden shadow-xl">
      {/* Background Decor */}
      <div 
        className="absolute -top-10 -right-10 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity"
        style={{ color: mineral.color }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>

      <div className="space-y-4 relative z-10">
        <div 
          className="w-12 h-1 bg-emerald-primary rounded-full transition-all duration-500 group-hover:w-20"
          style={{ backgroundColor: mineral.color }}
        ></div>
        <h3 className="text-2xl font-heading text-white">{mineral.name}</h3>
        <p className="text-sm text-stone/60 leading-relaxed">
          {mineral.description}
        </p>
      </div>

      <div className="pt-8 flex items-center justify-between">
        <span className="text-[10px] text-emerald-primary uppercase tracking-[0.2em] font-bold">Grade A+</span>
        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-emerald-primary group-hover:text-navy-deep transition-all duration-300">
          <span className="text-xs">→</span>
        </div>
      </div>
    </div>
  );
}
