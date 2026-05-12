'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Come posso fissare una prima consulenza orientativa?',
    a: 'Puoi compilare il form nella sezione Contatti, inviarci un\'email o chiamare direttamente la segreteria. Fisseremo un appuntamento in studio o in videocall entro 48 ore lavorative per analizzare le tue esigenze.',
  },
  {
    q: 'Vi occupate anche di startup e PMI innovative?',
    a: 'Assolutamente sì. Abbiamo un team dedicato che segue la costituzione, l\'accesso ai bandi, il reperimento di agevolazioni fiscali e la certificazione come startup/PMI innovativa in Camera di Commercio.',
  },
  {
    q: 'Offrite consulenza per operazioni internazionali?',
    a: 'Sì, forniamo assistenza per l\'internazionalizzazione d\'impresa, transfer pricing, stabili organizzazioni e regime fiscale per i lavoratori impatriati, collaborando con corrispondenti esteri selezionati.',
  },
  {
    q: 'Quali sono i vostri settori di specializzazione?',
    a: 'Pur offrendo servizi trasversali, abbiamo maturato un\'expertise profonda nei settori: manifatturiero, Real Estate, e-commerce, servizi digitali, cliniche mediche e agenzie retail.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-amber-600 uppercase mb-3">Domande Frequenti</h2>
          <h3 className="text-4xl font-serif text-slate-900">Hai qualche dubbio?</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-slate-200"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-semibold pr-8 font-serif text-lg ${isOpen ? 'text-amber-600' : 'text-slate-800'}`}>
                    {faq.q}
                  </span>
                  <span className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
