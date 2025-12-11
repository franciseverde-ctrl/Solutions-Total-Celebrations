import React from 'react';
import Button from './Button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1519225468359-2996bc140cfb?q=80&w=2500&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <p className="text-gold uppercase tracking-[0.3em] text-sm md:text-base mb-4 md:mb-6 font-medium">
          Cartagena de Indias, Colombia
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
          Diseñamos Momentos <br/> <span className="italic font-light">Inolvidables</span>
        </h1>
        <p className="text-gray-100 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          Especialistas en bodas de destino y eventos de lujo donde la sofisticación se encuentra con la magia del Caribe.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button variant="gold" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
            Solicitar Cotización
          </Button>
          <Button variant="white" onClick={() => window.open('https://wa.me/', '_blank')}>
            WhatsApp Directo
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <ArrowDown size={32} strokeWidth={1} />
      </div>
    </div>
  );
};

export default Hero;