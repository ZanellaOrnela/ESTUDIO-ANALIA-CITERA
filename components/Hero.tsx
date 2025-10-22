'use client';

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
    <div className="relative pt-32 pb-8 bg-[#0F2D49] xl:pt-40 sm:pb-12 lg:pb-20 xl:pb-24 2xl:pb-32">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/a (1) copy.png"
          alt="Fondo del Estudio Jurídico"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="relative z-20">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="w-full text-center">
            <h1 className="font-montserrat text-base font-normal tracking-tight text-white text-opacity-70">
              Abogados especialistas en accidentes y enfermedades de trabajo (ART)
            </h1>
            <p className="mt-6 tracking-tighter text-white">
                <span className="font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Estudio Jurídico</span><br />
              <span className="font-montserrat font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Dra. Citera</span>
            </p>
            <p className="mt-12 font-montserrat text-base font-semibold leading-7 text-white text-opacity-70">
              Hacemos tu reclamo ante la ART, seguros y empleadores, con una atención personalizada,. Consultas virtuales sin cargo y sin adelanto de honorarios. Te representamos en CABA y Provincia de Buenos Aires.
            </p>
             <div className="flex flex-col sm:flex-row items-center justify-center mt-5 space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={scrollToContact}
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-6
                  py-3
                  font-montserrat
                  text-base
                  font-semibold
                  transition-all
                  duration-200
                  border-2 border-transparent
                  rounded-full
                  sm:leading-8
                  bg-[#D9C896]
                  sm:text-lg
                  text-[#0F2D49]
                  hover:bg-opacity-90
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D9C896] focus:ring-offset-secondary
                "
                role="button"
              >
                Consulta Inmediata
              </button>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
