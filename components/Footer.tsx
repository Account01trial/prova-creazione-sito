import { Landmark } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Landmark className="h-6 w-6 text-amber-600" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold leading-none text-white">
                  Visconti <span className="font-light italic">& Partners</span>
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Siamo uno studio commercialistico italiano basato a Milano, focalizzato sulla consulenza direzionale e fiscale per l'eccellenza d'impresa.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Servizi Segnalati</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Revisione e Audit</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Tax compliance</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Due diligence Fiscale</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Gestione Partita IVA</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Operazioni M&A</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Lo Studio</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-amber-500 transition-colors">Chi Siamo</a></li>
              <li><a href="#team" className="hover:text-amber-500 transition-colors">Professionisti</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Lavora con noi</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Informativa Cookie</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Area Riservata</h4>
            <p className="text-sm text-slate-400 mb-4">
              I clienti dello studio possono accedere all'area riservata per consultare bilanci, F24 e documenti.
            </p>
            <button className="w-full border border-slate-700 hover:border-amber-500 hover:text-amber-500 text-slate-300 py-3 text-sm font-medium transition-colors">
              Accesso Portale Clienti
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Studio Visconti & Partners. P.IVA 01234567890. Tutti i diritti riservati.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Linkedin</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">IlSole24Ore Partner</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
