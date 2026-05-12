'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Dott. Alessandro Visconti',
    role: 'Founder & Senior Partner',
    desc: 'Esperto in fiscalità internazionale e operazioni di finanza straordinaria. Ex dirigente in Big Four.',
    image: 'https://picsum.photos/seed/man1/600/750',
  },
  {
    name: 'Dott.ssa Beatrice Rinaldi',
    role: 'Partner, Head of Tax',
    desc: 'Specializzata in interpelli, contenzioso tributario e pianificazione fiscale per gruppi industriali.',
    image: 'https://picsum.photos/seed/woman1/600/750',
  },
  {
    name: 'Dott. Lorenzo Martini',
    role: 'Partner, Audit & Advisory',
    desc: 'Revisore legale, si è distinto nella riorganizzazione di complesse filiere aziendali nel settore manifatturiero.',
    image: 'https://picsum.photos/seed/man2/600/750',
  },
  {
    name: 'Dott.ssa Giulia Ferraro',
    role: 'Senior Associate',
    desc: 'Consulente di riferimento per startup innovative, scale-up e operazioni di venture capital.',
    image: 'https://picsum.photos/seed/woman2/600/750',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-amber-500 uppercase mb-3">La Nostra Squadra</h2>
          <h3 className="text-4xl font-serif text-white mb-6">Le persone dietro i numeri.</h3>
          <p className="text-slate-400">Un team multidisciplinare di professionisti uniti da passione, estetica del rigore e costante aggiornamento professionale.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-slate-800">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay with social links */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
              
              <div className="px-2">
                <h4 className="text-lg font-serif mb-1">{member.name}</h4>
                <div className="text-amber-500 text-sm mb-3 font-medium">{member.role}</div>
                <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-3">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
