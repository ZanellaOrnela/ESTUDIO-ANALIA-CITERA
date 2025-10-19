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
    <header className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg backdrop-blur-md bg-white/95' 
        : 'bg-transparent'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <div className="w-40 h-20 rounded overflow-hidden flex items-center justify-center">
              <img 
                src="/images/ChatGPT Image 18 oct 2025, 09_31_50 p.m..png" 
                alt="Logo Estudio Citera" 
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center 50%', filter: 'brightness(0)' }}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-xs text-gray-700 hover:text-primary-600 font-montserrat font-semibold transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-3d-navbar text-sm px-4 py-2 flex items-center space-x-2 font-montserrat font-semibold"
            >
              <span>Contactar</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-700 hover:text-primary-600 font-montserrat font-semibold py-2 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-3d-navbar w-full text-sm px-4 py-2 flex items-center justify-center space-x-2 font-montserrat font-semibold"
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
