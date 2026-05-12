'use client';

import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-900">
      {/* Background Image overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="https://picsum.photos/seed/office/1920/1080"
          alt="Office Background"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-block py-1 px-3 border border-amber-500/30 text-amber-500 text-xs font-semibold tracking-widest uppercase mb-6 bg-amber-500/10 backdrop-blur-sm">
              Consulenza Strategica e Fiscale
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
              L'Eccellenza Fiscale <br />
              <span className="text-slate-400 italic">al Servizio del tuo Business.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
          >
            Affianchiamo aziende e professionisti con soluzioni su misura. Dalla gestione contabile ordinaria alle più complesse operazioni straordinarie, il nostro studio offre autorevolezza e innovazione.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-amber-600 text-white font-medium hover:bg-amber-700 transition flex items-center justify-center gap-2 group"
            >
              Richiedi una Consulenza
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-slate-600 text-white font-medium hover:border-slate-400 hover:bg-slate-800 transition flex items-center justify-center"
            >
              Scopri i Servizi
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400"
      >
        <span className="text-xs tracking-widest uppercase mb-2">Scorri</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
}
