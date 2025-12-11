import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-elegant-black text-white pt-20 pb-10 border-t border-burgundy/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-3xl mb-2">SOLUTION</h3>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">Total Celebration</p>
            <p className="text-white/80 font-light text-sm leading-relaxed max-w-xs">
              Creando experiencias extraordinarias y momentos atemporales en Cartagena de Indias.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="uppercase tracking-widest text-sm font-medium mb-6 text-white">Contacto</h4>
            <div className="space-y-4 text-white/80 font-light text-sm">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-gold" />
                <span>Bocagrande, Cra 3 #4-15, Cartagena</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold" />
                <span>+57 (300) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold" />
                <span>contacto@solutiontotal.com</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="uppercase tracking-widest text-sm font-medium mb-6 text-white">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-gold hover:border-gold hover:text-white transition-all text-white/80">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-gold hover:border-gold hover:text-white transition-all text-white/80">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/40 text-xs font-light tracking-wide">
          <p>&copy; {new Date().getFullYear()} Solution Total Celebration. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;