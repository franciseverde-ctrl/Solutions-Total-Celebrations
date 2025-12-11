import React, { useState, useEffect } from 'react';
    import { Menu, X, Phone, Instagram } from 'lucide-react';
    
    const Header: React.FC = () => {
      const [isScrolled, setIsScrolled] = useState(false);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const navLinks = [
        { name: 'Nosotros', href: '#nosotros' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Galería', href: '#galeria' },
        { name: 'Testimonios', href: '#testimonios' },
        { name: 'Contacto', href: '#contacto' },
      ];
    
      return (
        <header 
          className={`fixed w-full z-50 transition-all duration-500 ${
            isScrolled 
              ? 'bg-soft-white/95 backdrop-blur-md shadow-lg shadow-burgundy-light/10 py-4 text-burgundy-dark' 
              : 'bg-transparent py-8 text-white'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
            {/* Logo */}
            <div className="flex flex-col">
              <a href="#" className={`font-serif text-2xl md:text-3xl font-bold tracking-widest ${isScrolled ? 'text-burgundy' : 'text-white'}`}>
                SOLUTION
              </a>
              <span className={`text-[10px] uppercase tracking-[0.3em] ${isScrolled ? 'text-gold' : 'text-white/80'}`}>
                Total Celebration
              </span>
            </div>
    
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`text-sm uppercase tracking-widest hover:text-gold transition-colors ${isScrolled ? 'font-medium text-burgundy-dark' : 'font-light text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/" 
                className={`border px-6 py-2 text-sm uppercase tracking-widest transition-all ${
                  isScrolled 
                    ? 'border-burgundy text-burgundy hover:bg-burgundy hover:text-white' 
                    : 'border-white text-white hover:bg-white hover:text-burgundy'
                }`}
              >
                Cotizar
              </a>
            </nav>
    
            {/* Mobile Toggle */}
            <button 
              className="md:hidden focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
    
          {/* Mobile Menu */}
          <div className={`md:hidden fixed inset-0 bg-soft-white z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col justify-center items-center space-y-8`}>
            <button 
              className="absolute top-8 right-6 text-burgundy-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-serif text-3xl text-burgundy-dark hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-6 mt-8">
              <a href="#" className="text-burgundy hover:text-gold"><Instagram size={24} /></a>
              <a href="#" className="text-burgundy hover:text-gold"><Phone size={24} /></a>
            </div>
          </div>
        </header>
      );
    };
    
    export default Header;