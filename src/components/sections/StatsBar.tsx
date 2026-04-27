"use client";

import React from 'react';
import { useCountUp } from '@/hooks/useCountUp';

const StatItem = ({ label, value, suffix = "" }: { label: string, value: number, suffix?: string }) => {
  const count = useCountUp(value);
  return (
    <div className="flex flex-col items-center text-center p-6 border-x border-navy-deep/10 first:border-l-0 last:border-r-0">
      <span className="text-4xl md:text-5xl font-heading font-bold text-navy-deep">
        {count}{suffix}
      </span>
      <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-navy-deep/60 mt-2">
        {label}
      </span>
    </div>
  );
};

export default function StatsBar() {
  return (
    <section className="bg-emerald-primary w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 py-8">
        <StatItem label="Active Licenses" value={12} suffix="+" />
        <StatItem label="Hectares" value={2500} suffix="+" />
        <StatItem label="HSE Compliance" value={100} suffix="%" />
        <StatItem label="Mining Regions" value={8} />
      </div>
    </section>
  );
}
