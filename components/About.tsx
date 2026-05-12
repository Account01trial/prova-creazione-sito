'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Target, TrendingUp, ShieldCheck } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '25+', label: 'Anni di Esperienza' },
    { value: '500+', label: 'Clienti Seguiti' },
    { value: '€2B+', label: 'Asset Gestiti' },
    { value: '15', label: 'Professionisti' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-amber-600 uppercase mb-3">Lo Studio</h2>
            <h3 className="text-4xl font-serif text-slate-900 mb-6 leading-tight">
              Una tradizione di <span className="italic text-slate-400">autorevolezza</span> e innovazione dal 1998.
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Lo Studio Visconti & Partners nasce con una vocazione chiara: essere il partner strategico per le imprese italiane. Uniamo il rigore accademico e la profonda conoscenza del tessuto imprenditoriale con una forte spinta verso la digitalizzazione e i nuovi modelli di business.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Non ci limitiamo a "tenere i conti". Il nostro approccio è proattivo: anticipiamo i cambiamenti normativi, strutturiamo operazioni di finanza straordinaria e costruiamo solidi scudi di protezione del patrimonio.
            </p>

            <div className="grid sm:grid-cols-2 text-slate-800 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-50 text-amber-600 rounded">
                  <Target size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Focus Obiettivi</h4>
                  <p className="text-sm text-slate-500">Pianificazione cucita sulle tue reali necessità d'impresa.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-50 text-amber-600 rounded">
                  <ShieldCheck size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Tutela Patrimonio</h4>
                  <p className="text-sm text-slate-500">Strategie legali e fiscali per la massima sicurezza.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative bg-slate-100 overflow-hidden group">
              <Image
                src="https://picsum.photos/seed/boardroom/800/1000"
                alt="Boardroom"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply transition-colors group-hover:bg-slate-900/0"></div>
            </div>

            {/* Floating Stats Panel */}
            <div className="absolute -bottom-10 -left-10 lg:-left-20 bg-slate-900 p-8 shadow-2xl grid grid-cols-2 gap-8 text-white w-4/5 sm:w-auto">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-serif text-amber-500 mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
