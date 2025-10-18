'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center section-bg-primary">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight" style={{ fontFamily: 'Poppins', fontWeight: 700 }}>
                ESTUDIO JURIDICO ESPECIALIZADO EN{' '}
                <span className="text-gradient">
                  RECLAMOS ANTE ACCIDENTES/ ENFERMEDADES DE TRABAJO, DEFENSAS LABORALES Y SINIESTROS DE TRÁNSITO
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                Abogados con más de 25 años de experiencia defendiendo los derechos de los trabajadores 
                frente a accidentes/enfermedades de trabajo, como así también, reclamos en general. 
                Dentro de nuestros servicios, otro de ellos es asesoramiento frente a siniestros de tránsito, etc.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="btn-3d text-lg flex items-center justify-center space-x-2"
              >
                <span>Contactar ahora</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
