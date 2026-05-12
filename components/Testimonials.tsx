'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Da quando lo Studio Visconti ci affianca, abbiamo ottimizzato i processi amministrativi e ridotto il carico fiscale del 18%. La loro due diligence è stata fondamentale per la nostra ultima acquisizione.",
    author: "Ing. Roberto Fabbri",
    role: "CEO, TechNova S.p.A.",
  },
  {
    quote: "Professionisti impeccabili. Non si limitano a inviare le scadenze F24, ma si propongono proattivamente con strategie di tax planning. Un vero partner strategico per il nostro gruppo.",
    author: "Dott.ssa Elena Moretti",
    role: "CFO, Manifatture Italiane",
  },
  {
    quote: "Ci hanno guidato dall'apertura della Partita IVA fino alla trasformazione in S.r.l. innovativa. Alessandro e il suo team sono sempre disponibili e aggiornatissimi sulle normative.",
    author: "Marco Lorusso",
    role: "Founder, DigitalFlow",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative large quote */}
      <div className="absolute top-10 right-10 text-slate-100/50 pointer-events-none">
        <Quote size={240} strokeWidth={0.5} />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-amber-600 uppercase mb-3">Dicono di noi</h2>
          <h3 className="text-4xl font-serif text-slate-900 mb-6">La fiducia delle imprese italiane.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-slate-50 p-10 border-t-4 border-amber-600"
            >
              <Quote className="text-amber-500 mb-6 w-8 h-8 opacity-40" />
              <p className="text-slate-600 mb-8 italic leading-relaxed font-serif text-lg">"{t.quote}"</p>
              
              <div>
                <div className="font-semibold text-slate-900">{t.author}</div>
                <div className="text-xs uppercase tracking-widest text-amber-600 mt-1">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
