import React from 'react';
import { mineralCategories, operations } from '@/data';

export default function VisualTestPage() {
  return (
    <div className="min-h-screen p-8 md:p-16 space-y-16 bg-navy-deep text-white">
      <header className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl mb-4 text-gold font-heading">Design System</h1>
        <p className="text-xl md:text-2xl text-stone/80 font-light max-w-2xl font-sans">
          Foundation for the Nigerian Mineral Resources project. A premium aesthetic balancing corporate stability with natural richness.
        </p>
      </header>

      {/* Colors Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl text-gold font-heading">Color Palette</h2>
          <div className="h-px flex-1 bg-gold/20"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {mineralCategories.map((cat) => (
            <div 
              key={cat.id} 
              style={{ backgroundColor: cat.color }}
              className={`group relative h-40 rounded-xl p-6 flex flex-col justify-end transition-transform hover:scale-[1.02] duration-300 shadow-xl border border-white/5`}
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              </div>
              <span className="text-sm font-medium opacity-70 uppercase tracking-widest">{cat.color}</span>
              <span className="text-xl font-bold">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Operations Section (Using the new mock data) */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl text-gold font-heading">Active Operations</h2>
          <div className="h-px flex-1 bg-gold/20"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {operations.map((op) => (
            <div key={op.id} className="bg-navy-mid/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-4 hover:border-gold/30 transition-colors duration-300">
              <div className="flex justify-between items-start">
                <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-md ${
                  op.status === 'active' ? 'bg-emerald-primary/20 text-emerald-primary border border-emerald-primary/20' :
                  op.status === 'exploration' ? 'bg-gold/20 text-gold border border-gold/20' :
                  'bg-stone/20 text-stone border border-stone/20'
                }`}>
                  {op.status}
                </span>
                <span className="text-[10px] text-stone/40 uppercase tracking-tighter">{op.region}</span>
              </div>
              <h3 className="text-2xl font-heading text-white">{op.name}</h3>
              <p className="text-sm text-stone/70 leading-relaxed min-h-[60px]">
                {op.description}
              </p>
              <div className="pt-4 flex items-center justify-between">
                <div className="w-24 h-1 bg-navy-deep rounded-full overflow-hidden">
                  <div className={`h-full bg-gold ${op.status === 'active' ? 'w-full' : op.status === 'exploration' ? 'w-1/3' : 'w-2/3'}`}></div>
                </div>
                <span className="text-[10px] text-gold font-bold uppercase tracking-widest cursor-pointer hover:underline">Details</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Section */}
      <section className="space-y-8 pb-16">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl text-gold font-heading">Typography Guide</h2>
          <div className="h-px flex-1 bg-gold/20"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-[0.2em] text-gold/60 mb-4 font-sans">Headings: Cormorant Garamond</h3>
            <div className="space-y-4">
              <h1 className="text-6xl font-heading">Display Header</h1>
              <h2 className="text-5xl font-heading text-stone">Secondary Header</h2>
              <p className="text-gold italic text-xl font-heading">The elegance of classic serif for authority.</p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-[0.2em] text-gold/60 mb-4 font-sans">Body: Outfit</h3>
            <div className="space-y-4 text-stone/90 leading-relaxed font-sans">
              <p className="text-2xl font-semibold">Body Large - Premium Interface Font</p>
              <p className="text-lg">
                High-performance sans-serif designed for clarity and modern aesthetics. Perfectly balanced for technical data and descriptive narratives.
              </p>
              <div className="pt-4 flex gap-4">
                <button className="bg-gold text-navy-deep px-8 py-3 rounded-full font-bold hover:bg-white transition-all duration-300 transform active:scale-95">
                  Primary Action
                </button>
                <button className="border border-gold text-gold px-8 py-3 rounded-full font-bold hover:bg-gold/10 transition-all duration-300">
                  Secondary Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

