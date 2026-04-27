"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollNavbar } from '@/hooks/useScrollNavbar';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Operations', href: '/operations' },
  { name: 'Minerals', href: '/minerals' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'Investors', href: '/investors' },
];

export default function Navbar() {
  const isScrolled = useScrollNavbar(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isScrolled ? 'rgba(10, 22, 40, 0.95)' : 'rgba(10, 22, 40, 0)',
          paddingTop: isScrolled ? '12px' : '24px',
          paddingBottom: isScrolled ? '12px' : '24px',
          borderBottomColor: isScrolled ? 'rgba(201, 146, 42, 0.2)' : 'rgba(201, 146, 42, 0)',
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors backdrop-blur-md border-b shadow-2xl`}
        style={{
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <span className="text-2xl font-sans font-bold tracking-tighter text-white">
              75 <span className="text-emerald-primary">MINERALS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold text-white/70 hover:text-emerald-primary transition-colors uppercase tracking-[0.2em]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link 
              href="/contact"
              className="bg-emerald-primary hover:bg-emerald-primary hover:brightness-110 text-white px-8 py-3 rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-emerald-primary z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-navy-deep flex flex-col items-center justify-center space-y-8 p-6"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-heading text-white hover:text-emerald-primary transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="pt-8"
            >
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-emerald-primary hover:brightness-110 text-white px-12 py-4 rounded-full text-lg font-bold uppercase tracking-widest transition-all"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
