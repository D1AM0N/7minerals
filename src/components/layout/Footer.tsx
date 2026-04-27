"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-emerald-primary/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Column 1: Brand */}
        <div className="space-y-6">
          <Link href="/" className="text-2xl font-sans font-bold tracking-tighter text-white">
            75 <span className="text-emerald-primary">MINERALS</span>
          </Link>
          <p className="text-stone/50 text-sm leading-relaxed font-sans">
            Leading the transformation of the Nigerian mining sector through sustainable exploration and world-class management of natural resources.
          </p>
        </div>

        {/* Column 2: Company */}
        <div className="space-y-6">
          <h4 className="text-emerald-primary text-xs font-bold uppercase tracking-[0.2em]">Company</h4>
          <ul className="space-y-4">
            {['About Us', 'Operations', 'Our Minerals', 'Sustainability'].map((link) => (
              <li key={link}>
                <Link href="#" className="text-stone/70 text-sm hover:text-emerald-primary transition-colors font-sans">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: ESG/Legal */}
        <div className="space-y-6">
          <h4 className="text-emerald-primary text-xs font-bold uppercase tracking-[0.2em]">Governance</h4>
          <ul className="space-y-4">
            {['ESG Policy', 'Ethics & Compliance', 'Investors', 'Privacy Policy'].map((link) => (
              <li key={link}>
                <Link href="#" className="text-stone/70 text-sm hover:text-emerald-primary transition-colors font-sans">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="space-y-6">
          <h4 className="text-emerald-primary text-xs font-bold uppercase tracking-[0.2em]">Contact Info</h4>
          <ul className="space-y-4 font-sans text-sm text-stone/70">
            <li>12A Corporate Tower, Ikoyi,<br />Lagos, Nigeria</li>
            <li>contact@75minerals.com</li>
            <li>+234 (0) 800 MINERALS</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-[10px] text-stone/30 uppercase tracking-widest font-sans">
          © 2026 75 Minerals. All Rights Reserved.
        </span>
        <div className="flex items-center gap-4">
          <span className="text-[10px] text-emerald-primary uppercase tracking-[0.3em] font-bold">
            Nigerian Resources • Global Standard
          </span>
        </div>
      </div>
    </footer>
  );
}
