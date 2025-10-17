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
    <section id="hero" className="relative min-h-screen flex items-center section-bg-primary">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bebas-neue text-gray-900 leading-tight">
                ESTUDIO JURIDICO ESPECIALIZADO EN{' '}
                <span className="text-gradient">
                  RECLAMOS ANTE ACCIDENTES/ ENFERMEDADES DE TRABAJO, DEFENSAS LABORALES Y SINIESTROS DE TRÁNSITO
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
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

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/images/hero-section.png"
              alt="Analia Citera - Abogada Especializada"
              width={250}
              height={300}
              className="object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
