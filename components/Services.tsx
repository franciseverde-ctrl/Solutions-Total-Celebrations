import React from 'react';
import Section from './Section';
import { Wine, Briefcase, Heart, Music } from 'lucide-react';

const services = [
  {
    icon: <Heart size={32} strokeWidth={1} />,
    title: "Bodas de Destino",
    description: "Creamos experiencias románticas inolvidables en los escenarios más mágicos de Cartagena. Desde la ceremonia hasta la última canción."
  },
  {
    icon: <Briefcase size={32} strokeWidth={1} />,
    title: "Eventos Corporativos",
    description: "Lanzamientos de marca, cenas de gala y congresos con un nivel de sofisticación que elevará la imagen de su empresa."
  },
  {
    icon: <Wine size={32} strokeWidth={1} />,
    title: "Fiestas Privadas",
    description: "Aniversarios, cumpleaños exclusivos y celebraciones sociales diseñadas a medida para anfitriones exigentes."
  },
  {
    icon: <Music size={32} strokeWidth={1} />,
    title: "Producción Integral",
    description: "Nos encargamos de todo: diseño floral, iluminación arquitectónica, entretenimiento de primer nivel y catering gourmet."
  }
];

const Services: React.FC = () => {
  return (
    <Section id="servicios" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Nuestros Servicios</span>
        <h2 className="font-serif text-4xl md:text-5xl text-elegant-black mb-6">Curaduría de Experiencias</h2>
        <p className="text-gray-600 font-light text-lg">
          Ofrecemos un servicio 360° para garantizar que usted sea un invitado más en su propia celebración.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group p-8 border border-gray-100 hover:border-burgundy/20 bg-soft-white hover:bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-default"
          >
            <div className="text-burgundy mb-6 group-hover:scale-110 transition-transform duration-500">
              {service.icon}
            </div>
            <h3 className="font-serif text-2xl text-elegant-black mb-4 group-hover:text-burgundy transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-500 font-light leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;