import React, { useState } from 'react';
import Section from './Section';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    type: 'Boda',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Gracias por su interés. Nos pondremos en contacto pronto.");
  };

  // Styles using the new burgundy palette (border-burgundy-light, placeholder-burgundy-light)
  const inputClasses = "w-full bg-transparent border-b border-burgundy-light/40 py-3 text-burgundy-dark focus:outline-none focus:border-burgundy transition-colors placeholder-burgundy-light/50 font-light";

  return (
    <Section id="contacto" className="bg-burgundy-faint">
      <div className="max-w-4xl mx-auto bg-soft-white p-8 md:p-16 shadow-[0_20px_50px_rgba(90,26,35,0.08)]">
        <div className="text-center mb-12">
          <span className="text-burgundy uppercase tracking-[0.2em] text-sm font-medium">Hablemos</span>
          <h2 className="font-serif text-4xl text-burgundy-dark mt-4">Comience a planear su celebración</h2>
          <p className="text-burgundy-light mt-4 font-light">Déjenos sus datos y nos pondremos en contacto para diseñar una propuesta a medida.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="text-xs uppercase tracking-wider text-burgundy-light mb-2 block">Nombre Completo</label>
              <input 
                type="text" 
                name="name" 
                required
                className={inputClasses}
                placeholder="Ej. Ana García"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-burgundy-light mb-2 block">Correo Electrónico</label>
              <input 
                type="email" 
                name="email" 
                required
                className={inputClasses}
                placeholder="Ej. ana@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="text-xs uppercase tracking-wider text-burgundy-light mb-2 block">Teléfono / WhatsApp</label>
              <input 
                type="tel" 
                name="phone" 
                className={inputClasses}
                placeholder="+57 ..."
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-burgundy-light mb-2 block">Fecha Tentativa</label>
              <input 
                type="date" 
                name="date" 
                className={inputClasses}
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="text-xs uppercase tracking-wider text-burgundy-light mb-2 block">Tipo de Evento</label>
              <select 
                name="type" 
                className={inputClasses}
                value={formData.type}
                onChange={handleChange}
              >
                <option value="Boda">Boda</option>
                <option value="Corporativo">Corporativo</option>
                <option value="Social">Social / Privado</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
             <div>
              <label className="text-xs uppercase tracking-wider text-burgundy-light mb-2 block">Presupuesto Estimado (USD)</label>
              <input 
                type="text" 
                name="budget" 
                className={inputClasses}
                placeholder="Opcional"
                value={formData.budget}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider text-burgundy-light mb-2 block">Cuéntenos sobre su evento</label>
            <textarea 
              name="message" 
              rows={4} 
              className={inputClasses}
              placeholder="Detalles, visión, número de invitados..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="text-center pt-8">
            <Button type="submit" variant="primary" className="min-w-[200px]">
              Enviar Solicitud
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default ContactForm;