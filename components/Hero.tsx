'use client';

import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-32 pb-8 bg-black xl:pt-40 sm:pb-12 lg:pb-20 xl:pb-24 2xl:pb-32">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/images/Gemini_Generated_Image_phinpqphinpqphin.png"
          alt="Imagen principal del estudio jurídico"
          className="object-cover w-full h-full object-[center_80%]"
        />
      </div>

      {/* Polígono de fondo Desktop - derecha */}
      <div 
        className="absolute inset-0 z-10 w-[80%] right-0 hidden lg:block"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          background: 'linear-gradient(to right, #0F2D49 0%, #0F2D49 30%, #0F2D4980 60%, #0F2D4940 80%, transparent 100%)'
        }}
      ></div>

      {/* Polígono de fondo Mobile - arriba a abajo */}
      <div 
        className="absolute inset-0 z-10 lg:hidden"
        style={{
          background: 'linear-gradient(to bottom, #0F2D49 0%, #0F2D49 30%, #0F2D4980 60%, #0F2D4940 80%, transparent 100%)'
        }}
      ></div>

      <div className="relative z-20">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="w-full lg:w-2/3 xl:w-1/2">
            <h1 className="font-montserrat text-base font-normal tracking-tight text-white text-opacity-70">
              Abogados especialistas en accidentes y enfermedades de trabajo (ART)
            </h1>
            <p className="mt-6 tracking-tighter text-white">
              <span className="font-montserrat font-bold text-5xl">Estudio Juridico</span><br />
              <span className="font-montserrat font-bold text-6xl">Dra. Citera</span>
            </p>
            <p className="mt-12 font-montserrat text-base font-semibold leading-7 text-white text-opacity-70">
              Hacemos tu reclamo de ART de punta a punta con una atención personalizada, consultas virtuales sin cargo y sin adelanto de honorarios. Te representamos en CABA y Provincia de Buenos Aires.
            </p>
            <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
              <button
                onClick={scrollToContact}
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-5
                  py-2
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
