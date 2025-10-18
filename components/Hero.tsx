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
      {/* Fondo granulado sutil */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Columna 1 - Título */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight" style={{ fontFamily: 'Poppins', fontWeight: 700 }}>
              Abogados especialistas en accidentes y enfermedades de trabajo (ART)
            </h1>
          </motion.div>

          {/* Columna 2 - Subtítulo y Botón */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left space-y-6"
          >
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
              Hacemos tu reclamo de ART de punta a punta con una atención personalizada, consultas virtuales sin cargo y sin adelanto de honorarios. Te representamos en CABA y Provincia de Buenos Aires.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="btn-3d text-lg flex items-center justify-center space-x-2"
              >
                <span>Consulta Inmediata</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* 4 imágenes verticales - Alineadas a la derecha */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-end mt-16"
        >
          <div className="grid grid-cols-4 gap-4 max-w-2xl">
          <div className="relative h-80 w-full border-2 border-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/images/hero-section.png"
              alt="Imagen 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 w-full border-2 border-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/images/hero-section.png"
              alt="Imagen 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 w-full border-2 border-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/images/hero-section.png"
              alt="Imagen 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 w-full border-2 border-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/images/hero-section.png"
              alt="Imagen 4"
              fill
              className="object-cover"
            />
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
