'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Menu as MenuIcon, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenEventModal: () => void;
}

export function Navbar({ onOpenEventModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-[300] bg-[#FDFBF7] bg-opacity-100 transition-all duration-300 border-b ${
        scrolled
          ? 'border-[#2B1E16]/10 shadow-[0_4px_20px_rgba(43,30,22,0.06)]'
          : 'border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-10 h-10 rounded-full bg-white border border-[#2B1E16]/15 flex items-center justify-center group-hover:border-[#B07A3B] transition-all shadow-[0_2px_8px_rgba(43,30,22,0.06)]">
            <Coffee className="w-5 h-5 text-[#B07A3B] group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-[0.2em] font-serif text-[#211611] group-hover:text-[#B07A3B] transition-colors">
              COAL &amp; COFFEE
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#B07A3B] font-medium">
              Rooftop &amp; Grill • Uttara
            </span>
          </div>
        </motion.a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * idx }}
              className="hover:text-[#B07A3B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B07A3B] hover:after:w-full after:transition-all after:duration-300"
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
            className="text-xs font-semibold text-stone-700 hover:text-[#211611] px-4 py-2 rounded-full border border-[#2B1E16]/15 hover:border-[#B07A3B] transition-all bg-white/60"
          >
            Private Events
          </button>
          <a
            href="#location"
            className="bg-[#241812] hover:bg-[#3D291F] text-[#FDFBF7] font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 shadow-[0_4px_15px_rgba(36,24,18,0.15)] hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>Book an Evening</span>
            <ChevronRight className="w-4 h-4 text-[#C48D3F]" />
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="#location"
            className="bg-[#241812] text-[#FDFBF7] font-bold text-xs px-3.5 py-2 rounded-full md:hidden"
          >
            Book
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white border border-[#2B1E16]/15 text-stone-700 hover:text-[#211611] hover:border-[#B07A3B] transition-colors"
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
            className="lg:hidden bg-[#FDFBF7] border-b border-[#2B1E16]/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-stone-700 hover:text-[#B07A3B] transition-colors py-1 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEventModal();
                  }}
                  className="w-full bg-white hover:bg-stone-50 text-stone-700 font-semibold py-3 rounded-full text-center border border-[#2B1E16]/15 text-sm"
                >
                  Inquire Private Events
                </button>
                <a
                  href="#location"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#241812] hover:bg-[#3D291F] text-[#FDFBF7] font-semibold py-3 rounded-full text-center transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                >
                  <span>Book an Evening</span>
                  <ChevronRight className="w-4 h-4 text-[#C48D3F]" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

