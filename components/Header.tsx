'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    { name: 'Servicios', href: 'services', hasDropdown: true },
    { name: 'Quiénes Somos', href: 'about' },
    { name: 'Por qué Elegirnos', href: 'why-choose' },
    { name: 'Testimonios', href: 'testimonials' },
    { name: 'Contacto', href: 'contact' },
    { name: 'Galería', href: 'gallery' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold text-xl">
                Estudio Citera
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </nav>

          {/* Right side - Search, Phone, CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button className="text-white hover:text-gray-300 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            
            {/* Phone */}
            <div className="text-white text-sm">
              +54 9 11 5318-9897
            </div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gray-800 text-white px-6 py-2 rounded font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>CONSULTA GRATUITA</span>
                <span>→</span>
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden py-4 border-t border-gray-700"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-gray-300 font-medium transition-colors duration-200 text-left"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gray-800 text-white px-6 py-2 rounded font-medium hover:bg-gray-700 transition-colors duration-200 text-center"
              >
                CONSULTA GRATUITA
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;