'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Protegiendo Sus Derechos En El Campo De{' '}
                <span className="text-blue-600">
                  Derecho Laboral
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Abogados con más de 25 años de experiencia defendiendo los derechos de los trabajadores 
                frente a accidentes/enfermedades de trabajo, como así también, reclamos en general. 
                Dentro de nuestros servicios, otro de ellos es asesoramiento frente a siniestros de tránsito, etc.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-white text-gray-900 px-8 py-4 rounded font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2 border border-gray-300"
              >
                <span>RESERVAR CITA</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          {/* Imágenes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-4">
              {/* Imagen 1 - Abogada en escritorio */}
              <div className="col-span-1">
                <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-section.png"
                    alt="Abogada en escritorio"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
              </div>
              
              {/* Imagen 2 - Escala de justicia */}
              <div className="col-span-1">
                <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <div className="text-6xl">⚖️</div>
                  </div>
                </div>
              </div>
              
              {/* Imagen 3 - Estatua de justicia */}
              <div className="col-span-1">
                <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <div className="text-6xl">🏛️</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;