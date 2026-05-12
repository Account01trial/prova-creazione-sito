'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Landmark } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Lo Studio', href: '#about' },
    { name: 'Servizi', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Contatti', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Landmark className={`h-8 w-8 ${isScrolled ? 'text-amber-500' : 'text-amber-500'} transition-transform group-hover:scale-105`} />
          <div className="flex flex-col">
            <span className={`font-serif text-xl md:text-2xl font-semibold leading-none ${isScrolled ? 'text-white' : 'text-white'}`}>
              Visconti <span className="font-light italic">& Partners</span>
            </span>
            <span className={`text-[10px] tracking-widest uppercase mt-1 ${isScrolled ? 'text-slate-400' : 'text-slate-300'}`}>
              Dottori Commercialisti
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-wide transition-colors ${
                isScrolled ? 'text-slate-300 hover:text-amber-500' : 'text-slate-100 hover:text-amber-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 transition-colors shadow-sm"
          >
            Iscriviti / Entra
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-[72px] bg-slate-900 border-t border-slate-800"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 pb-32">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-slate-100 hover:text-amber-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
