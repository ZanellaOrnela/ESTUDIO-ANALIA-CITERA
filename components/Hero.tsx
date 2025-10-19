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
    <section id="hero" className="relative min-h-screen flex items-center section-bg-primary pt-28">
      {/* Fondo granulado sutil */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container-custom section-padding relative z-10" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-48 items-center justify-items-center">
          {/* Columna 1 - Título */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-relaxed text-left font-cinzel font-bold">
              Estudio Juridico Dra. Citera
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-[#D9C896] text-left mt-4 leading-relaxed font-montserrat font-semibold">
              Abogados especialistas en accidentes y enfermedades de trabajo (ART)
            </h2>
          </motion.div>

          {/* Columna 2 - Subtítulo y Botón */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left space-y-6"
          >
            <p className="text-sm sm:text-base text-white leading-relaxed font-montserrat font-semibold">
              Hacemos tu reclamo de ART de punta a punta con una atención personalizada, consultas virtuales sin cargo y sin adelanto de honorarios. Te representamos en CABA y Provincia de Buenos Aires.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="btn-outline text-base flex items-center justify-center space-x-2"
              >
                <span>Consulta Inmediata</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Imágenes responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-start mt-8"
        >
          {/* Mobile y Tablet: Una sola imagen */}
          <div className="block lg:hidden w-full">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src="https://i.pinimg.com/1200x/58/8e/17/588e1747915c0986323a66dfb3635112.jpg"
                alt="Imagen principal"
                fill
                className="object-cover grayscale"
                style={{ objectPosition: '85% center' }}
              />
            </div>
          </div>

          {/* Desktop: 4 imágenes originales */}
          <div className="hidden lg:grid grid-cols-4 gap-6 max-w-5xl">
            <div className="relative h-64 md:h-80 w-full md:w-56 rounded-lg overflow-hidden">
              <Image
                src="https://img.freepik.com/fotos-gratis/vida-morta-com-a-balanca-da-justica_23-2149776013.jpg"
                alt="Imagen 1"
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="relative h-72 md:h-96 w-full md:w-56 rounded-lg overflow-hidden">
              <Image
                src="https://i.pinimg.com/1200x/58/8e/17/588e1747915c0986323a66dfb3635112.jpg"
                alt="Imagen 2"
                fill
                className="object-cover grayscale"
                style={{ objectPosition: '15% center' }}
              />
            </div>
            <div className="relative h-72 md:h-96 w-full md:w-56 rounded-lg overflow-hidden">
              <Image
                src="https://i.pinimg.com/1200x/58/8e/17/588e1747915c0986323a66dfb3635112.jpg"
                alt="Imagen 3"
                fill
                className="object-cover grayscale"
                style={{ objectPosition: '85% center' }}
              />
            </div>
            <div className="relative h-72 w-full md:w-56 rounded-lg overflow-hidden">
              <Image
                src="https://i.pinimg.com/1200x/f6/6c/8d/f66c8d721cf337f5926b0bcc4280e558.jpg"
                alt="Imagen 4"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
