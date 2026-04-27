"use client";

import { useState, useEffect } from 'react';

/**
 * Hook to detect if the user has scrolled down the page.
 * Useful for changing navbar background or styling on scroll.
 * @param threshold - The scroll distance in pixels before triggering (default: 50)
 * @returns boolean - true if scrolled beyond threshold
 */
export const useScrollNavbar = (threshold: number = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};
