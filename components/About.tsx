import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="nosotros">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-burgundy"></span>
            <span className="text-burgundy uppercase tracking-[0.2em] text-sm font-medium">Quiénes Somos</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-burgundy-dark mb-8 leading-tight">
            Excelencia y detalle en cada celebración
          </h2>
          <p className="text-burgundy-light mb-6 leading-relaxed font-light text-lg">
            Solution Total Celebration nace de la pasión por transformar sueños en realidades tangibles. Ubicados en el corazón de Cartagena, somos una firma boutique dedicada a la planificación y producción de eventos de alto nivel.
          </p>
          <p className="text-burgundy-light mb-8 leading-relaxed font-light text-lg">
            Nuestra filosofía se basa en la personalización absoluta. No creemos en fórmulas preestablecidas; creemos en contar tu historia a través de una estética refinada, una gastronomía exquisita y una logística impecable.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-12 border-t border-burgundy-light/30 pt-8">
            <div>
              <span className="block font-serif text-4xl text-burgundy mb-2">10+</span>
              <span className="text-sm uppercase tracking-wider text-burgundy-light">Años de Experiencia</span>
            </div>
            <div>
              <span className="block font-serif text-4xl text-burgundy mb-2">500+</span>
              <span className="text-sm uppercase tracking-wider text-burgundy-light">Eventos Exitosos</span>
            </div>
          </div>
        </div>

        {/* Image Content - Editorial Style */}
        <div className="lg:w-1/2 relative">
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop" 
              alt="Evento de lujo en Cartagena" 
              className="w-full h-[600px] object-cover object-center shadow-xl shadow-burgundy-dark/10"
            />
          </div>
          {/* Decorative Element */}
          <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 border-2 border-gold -z-0 hidden md:block"></div>
        </div>
      </div>
    </Section>
  );
};

export default About;