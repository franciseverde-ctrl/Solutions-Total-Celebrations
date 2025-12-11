import React from 'react';
import Section from './Section';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonios" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-burgundy-dark mb-6">Lo que dicen nuestros clientes</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-burgundy-faint p-10 flex flex-col items-center text-center relative hover:bg-soft-white transition-colors duration-300">
            <div className="text-gold flex gap-1 mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={16} fill="#D4A85F" stroke="none" />
              ))}
            </div>
            <p className="font-serif text-xl italic text-burgundy-dark/90 mb-6 leading-relaxed">
              "La atención al detalle fue impecable. Transformaron nuestra visión en una realidad que superó todas las expectativas. Fue la boda de nuestros sueños."
            </p>
            <div>
              <h5 className="uppercase tracking-widest text-burgundy font-bold text-sm">Maria & Alejandro</h5>
              <span className="text-xs text-burgundy-light mt-1 block">Boda en Ciudad Amurallada</span>
            </div>
            {/* Quote decoration */}
            <div className="absolute top-4 left-4 font-serif text-6xl text-burgundy/10 leading-none">“</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;