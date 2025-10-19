'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Scale, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Inicio', href: 'hero' },
    { name: 'Quiénes Somos', href: 'about' },
    { name: 'Servicios', href: 'services' },
    { name: 'Por Qué Elegirnos', href: 'why-choose' },
    { name: 'Galería', href: 'gallery' },
    { name: 'Testimonios', href: 'testimonials' },
    { name: 'Contacto', href: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F2D49] backdrop-blur-md bg-[#0F2D49]/95 transition-all duration-300">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <div className="w-64 h-24 rounded flex items-center justify-center">
              <img 
                src="/images/WhatsApp Image 2025-10-06 at 16.22.05_28e5fbe4.jpg" 
                alt="Logo Estudio Citera" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-xs font-montserrat font-semibold text-white hover:text-[#D9C896] transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm px-4 py-2 flex items-center space-x-2 font-montserrat font-semibold rounded-3xl bg-[#D9C896] text-[#0F2D49] hover:bg-[#C4B082] transition-all duration-300 transform hover:scale-105"
            >
              <span>Contactar</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/20 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-[#0F2D49] border-white/20 transition-colors duration-200">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left font-montserrat font-semibold py-2 text-white hover:text-[#D9C896] transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-sm px-4 py-2 flex items-center justify-center space-x-2 font-montserrat font-semibold rounded-3xl bg-[#D9C896] text-[#0F2D49] hover:bg-[#C4B082] transition-all duration-300 transform hover:scale-105"
              >
                <span>Contactar</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
