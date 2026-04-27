"use client";

import React from 'react';

const regions = [
  { id: "01", name: "Nasarawa", type: "Lithium & Tin", description: "Advanced geological surveys and core sampling." },
  { id: "02", name: "Zamfara", type: "Gold Deposits", description: "Strategic mining projects with international standards." },
  { id: "03", name: "Kogi", type: "Iron Ore & Coal", description: "Industrial scale extraction for manufacturing growth." },
];

export default function OperationsOverview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-emerald-primary text-xs font-bold uppercase tracking-[0.4em]">Strategic Locations</span>
            <h2 className="text-4xl md:text-5xl font-heading text-navy-deep">Our Operations</h2>
          </div>
          <p className="text-navy-mid/60 font-sans max-w-sm">
            Operational centers strategically distributed to maximize efficiency and community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {regions.map((region) => (
            <div key={region.id} className="relative group p-8 bg-stone/50 border border-navy-deep/5 rounded-xl hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Ghost Numeral */}
              <span className="absolute -bottom-4 -right-4 text-9xl font-heading font-bold text-navy-deep opacity-[0.03] select-none group-hover:opacity-[0.07] transition-opacity">
                {region.id}
              </span>

              <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-emerald-primary font-bold">{region.type}</span>
                  <h3 className="text-3xl font-heading text-navy-deep">{region.name}</h3>
                </div>
                <p className="text-sm text-navy-mid/70 leading-relaxed">
                  {region.description}
                </p>
                <div className="pt-4">
                  <button className="text-[11px] font-bold uppercase tracking-widest border-b border-navy-deep/10 pb-1 hover:border-emerald-primary hover:text-emerald-primary transition-all">
                    Explore Site
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
