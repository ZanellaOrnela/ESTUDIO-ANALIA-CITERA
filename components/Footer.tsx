'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ver Los Últimos Estudios De Casos De Nuestros Clientes
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gray-900 text-white px-8 py-4 rounded font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Consulta Gratuita</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => scrollToSection('testimonials')}
                className="bg-white text-gray-900 px-8 py-4 rounded font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2 border border-gray-300"
              >
                <span>VER TODOS LOS ESTUDIOS DE CASOS</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-8 border-t border-gray-300"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-600 text-center md:text-left">
                <p className="text-sm">
                  © 2024 Estudio Citera. Todos los derechos reservados.
                </p>
                <p className="text-xs mt-1 text-gray-500">
                  Defendiendo tus derechos desde 1999
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm text-gray-600">
                <span>Especialistas en Derecho Laboral</span>
                <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>25+ Años de Experiencia</span>
                <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>Atención Personalizada</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;