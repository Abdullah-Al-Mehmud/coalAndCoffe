'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Menu as MenuIcon, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenEventModal: () => void;
}

export function Navbar({ onOpenEventModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Story', href: '#story' },
    { label: 'Vibe', href: '#vibe' },
    { label: 'Menu', href: '#menu' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Events', href: '#events' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0f0f0f]/80 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-10 h-10 rounded-full bg-[#1c140f] border border-[#d4af37]/40 flex items-center justify-center group-hover:border-[#d4af37] transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Coffee className="w-5 h-5 text-[#d4af37] group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-[0.2em] font-serif text-white group-hover:text-[#d4af37] transition-colors">
              COAL &amp; COFFEE
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#d4af37]/80 font-medium">
              Rooftop &amp; Grill • Uttara
            </span>
          </div>
        </motion.a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * idx }}
              className="hover:text-[#d4af37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-3"
        >
          <button
            onClick={onOpenEventModal}
            className="text-xs font-semibold text-neutral-300 hover:text-[#d4af37] px-4 py-2 rounded-full border border-white/10 hover:border-[#d4af37]/40 transition-all"
          >
            Private Events
          </button>
          <a
            href="#location"
            className="bg-[#d4af37] hover:bg-[#e5c158] text-[#0f0f0f] font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>Reserve a Table</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="#location"
            className="bg-[#d4af37] text-[#0f0f0f] font-bold text-xs px-3.5 py-2 rounded-full md:hidden"
          >
            Reserve
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-200 hover:text-white hover:border-[#d4af37]/40 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden backdrop-blur-xl bg-[#0f0f0f]/95 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-neutral-200 hover:text-[#d4af37] transition-colors py-1 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEventModal();
                  }}
                  className="w-full bg-white/5 hover:bg-white/10 text-neutral-200 font-semibold py-3 rounded-full text-center border border-white/10 text-sm"
                >
                  Inquire Private Events
                </button>
                <a
                  href="#location"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#d4af37] hover:bg-[#e5c158] text-[#0f0f0f] font-semibold py-3 rounded-full text-center transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 text-sm"
                >
                  <span>Reserve a Table</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
