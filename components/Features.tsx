import React from 'react';
import Section from './Section';

const Features: React.FC = () => {
  return (
    <Section dark className="relative overflow-hidden">
      {/* Background Pattern subtle */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
            ¿Por qué elegir <br/> <span className="text-gold italic">Solution Total?</span>
          </h2>
          <div className="space-y-8">
            <div>
              <h4 className="text-xl uppercase tracking-widest text-white mb-2 font-medium">Exclusividad Garantizada</h4>
              <p className="text-gray-400 font-light">Limitamos el número de eventos por mes para dedicar atención absoluta a cada detalle de su celebración.</p>
            </div>
            <div className="h-[1px] w-full bg-white/10"></div>
            <div>
              <h4 className="text-xl uppercase tracking-widest text-white mb-2 font-medium">Proveedores Premium</h4>
              <p className="text-gray-400 font-light">Acceso a la red más exclusiva de floristas, chefs y artistas en Cartagena y Colombia.</p>
            </div>
            <div className="h-[1px] w-full bg-white/10"></div>
            <div>
              <h4 className="text-xl uppercase tracking-widest text-white mb-2 font-medium">Diseño Atemporal</h4>
              <p className="text-gray-400 font-light">Creamos estéticas que perduran, equilibrando las tendencias actuales con la elegancia clásica.</p>
            </div>
          </div>
        </div>
        <div className="relative h-[500px] w-full">
           <img 
              src="https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=1200&auto=format&fit=crop" 
              alt="Detalle de decoración de lujo" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 border border-white/20 m-4 pointer-events-none"></div>
        </div>
      </div>
    </Section>
  );
};

export default Features;