import React from 'react';
import Section from './Section';

const Gallery: React.FC = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-2", height: "h-96" },
    { url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1", height: "h-48" },
    { url: "https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1", height: "h-48" },
    { url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1", height: "h-64" },
  ];

  return (
    <Section id="galeria">
      <div className="text-center mb-16">
        <span className="text-burgundy uppercase tracking-[0.2em] text-sm font-medium">Nuestro Portafolio</span>
        <h2 className="font-serif text-4xl md:text-5xl text-burgundy-dark mt-4">Galería Editorial</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min">
        {images.map((img, idx) => (
          <div key={idx} className={`relative overflow-hidden group ${img.span} ${img.height} w-full`}>
            <img 
              src={img.url} 
              alt="Evento Solution Total Celebration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-burgundy-dark/0 group-hover:bg-burgundy-dark/40 transition-colors duration-500 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 font-serif text-xl tracking-widest translate-y-4 group-hover:translate-y-0 transition-all duration-500 border-b border-white pb-1">
                Ver Evento
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
         <a href="#" className="inline-block border-b border-burgundy-light text-burgundy-light pb-1 uppercase tracking-widest text-xs hover:text-gold hover:border-gold transition-colors">
            Ver Todo el Portafolio
         </a>
      </div>
    </Section>
  );
};

export default Gallery;