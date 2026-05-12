'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informazioni Contatto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-amber-500 uppercase mb-3">Prenota una consulenza</h2>
            <h3 className="text-4xl font-serif mb-8 text-white">Siamo pronti ad ascoltare le esigenze della tua impresa.</h3>
            <p className="text-slate-400 mb-12">
              Contattaci per fissare un incontro preliminare in studio oppure tramite videoconferenza. Un partner sarà a tua disposizione.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 text-amber-500 rounded">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Sede Principale</h4>
                  <p className="text-slate-400">Via Montenapoleone, 21<br />20121 Milano (MI), Italia</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 text-amber-500 rounded">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Telefono</h4>
                  <p className="text-slate-400">+39 02 1234 5678<br />Lun - Ven, 09:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 text-amber-500 rounded">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email Diretta</h4>
                  <p className="text-slate-400 font-mono text-sm">segreteria@viscontipartners.it<br />PEC: viscontipartners@pec.it</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Contatto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 shadow-2xl relative"
          >
            <h4 className="text-2xl font-serif text-slate-900 mb-6">Invia una richiesta</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full border-b-2 border-slate-200 bg-transparent py-2 text-slate-900 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Azienda (Opzionale)</label>
                  <input 
                    type="text" 
                    className="w-full border-b-2 border-slate-200 bg-transparent py-2 text-slate-900 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Nome Azienda S.r.l."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full border-b-2 border-slate-200 bg-transparent py-2 text-slate-900 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="mario.rossi@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Telefono</label>
                  <input 
                    type="tel" 
                    className="w-full border-b-2 border-slate-200 bg-transparent py-2 text-slate-900 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="+39 333 000 0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Messaggio</label>
                <textarea 
                  rows={4}
                  className="w-full border-b-2 border-slate-200 bg-transparent py-2 text-slate-900 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Descrivi brevemente la tua esigenza..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-4 px-8 transition-colors flex justify-center items-center gap-2 group tracking-wide"
                >
                  Invia Messaggio Sicuro
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-wider">
                  I tuoi dati sono protetti e trattati secondo la privacy policy.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
