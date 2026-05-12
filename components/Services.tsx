'use client';

import { motion } from 'motion/react';
import { Calculator, Briefcase, Landmark, Scaling, FileSearch, ArrowRightLeft } from 'lucide-react';

const services = [
  {
    icon: <Calculator size={32} strokeWidth={1.5} />,
    title: 'Fisco e Contabilità',
    desc: 'Gestione ordinaria e straordinaria. Dalla tenuta della contabilità alla redazione del bilancio d\'esercizio, fino all\'ottimizzazione del carico fiscale.',
  },
  {
    icon: <Scaling size={32} strokeWidth={1.5} />,
    title: 'Consulenza Aziendale',
    desc: 'Supporto direzionale e strategico. Controllo di gestione, redazione di business plan e analisi dei flussi finanziari per la crescita.',
  },
  {
    icon: <Landmark size={32} strokeWidth={1.5} />,
    title: 'Pianificazione Fiscale',
    desc: 'Strutturazione di strategie Tax compliance per imprese e gruppi societari, minimizzando i rischi e cogliendo opportunità normative.',
  },
  {
    icon: <FileSearch size={32} strokeWidth={1.5} />,
    title: 'Revisione Contabile',
    desc: 'Attività di audit indipendente, due diligence contabile e fiscale, e certificazione dei dati di bilancio per garantire massima trasparenza.',
  },
  {
    icon: <ArrowRightLeft size={32} strokeWidth={1.5} />,
    title: 'Operazioni M&A',
    desc: 'Assistenza in fusioni, scissioni, acquisizioni e conferimenti d\'azienda. Valutazioni di complessi aziendali e quote societarie.',
  },
  {
    icon: <Briefcase size={32} strokeWidth={1.5} />,
    title: 'Gestione Partita IVA',
    desc: 'Consulenza dedicata a liberi professionisti e freelance. Apertura, scelta del regime più vantaggioso (es. forfettario) e adempimenti.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-amber-600 uppercase mb-3">Le Nostre Aree di Intervento</h2>
          <h3 className="text-4xl font-serif text-slate-900 mb-6">Competenze verticali per visioni a lungo termine.</h3>
          <p className="text-slate-600">Offriamo un servizio integrato che abbraccia tutte le necessità finanziarie, societarie e fiscali, per sollevare l'imprenditore dagli oneri burocratici e lasciarlo concentrare sul core business.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-100 transition-all duration-300 group"
            >
              <div className="text-amber-600 mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-transform origin-left">
                {service.icon}
              </div>
              <h4 className="text-xl font-serif font-medium text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
              
              <a href="#contact" className="inline-flex items-center text-sm font-medium text-slate-900 group-hover:text-amber-600 transition-colors">
                Scopri di più <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
