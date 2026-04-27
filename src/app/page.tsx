import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import AboutSnapshot from '@/components/sections/AboutSnapshot';
import MineralsShowcase from '@/components/sections/MineralsShowcase';
import OperationsOverview from '@/components/sections/OperationsOverview';
import SustainabilityHighlight from '@/components/sections/SustainabilityHighlight';

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <StatsBar />
      <AboutSnapshot />
      <MineralsShowcase />
      <OperationsOverview />
      <SustainabilityHighlight />
    </main>
  );
}


