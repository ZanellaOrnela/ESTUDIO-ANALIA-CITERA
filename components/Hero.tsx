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
    <div className="relative pt-32 pb-8 bg-[#0F2D49] xl:pt-40 sm:pb-12 lg:pb-20 xl:pb-24 2xl:pb-32">


      <div className="relative z-20">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="w-full text-center">
            <h1 className="font-montserrat text-base font-normal tracking-tight text-white text-opacity-70">
              Abogados especialistas en accidentes y enfermedades de trabajo (ART)
            </h1>
            <p className="mt-6 tracking-tighter text-white">
                <span className="font-montserrat font-bold text-6xl lg:text-7xl">Estudio Jurídico</span><br />
              <span className="font-montserrat font-bold text-7xl lg:text-8xl">Dra. Citera</span>
            </p>
            <p className="mt-12 font-montserrat text-base font-semibold leading-7 text-white text-opacity-70">
              Hacemos tu reclamo de ART de punta a punta con una atención personalizada, consultas virtuales sin cargo y sin adelanto de honorarios. Te representamos en CABA y Provincia de Buenos Aires.
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
              
              <div className="flex items-center space-x-4">
                <a
                  href="https://instagram.com/accidentes.trabajo.art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  <span className="text-white text-sm font-montserrat font-semibold">Instagram</span>
                </a>
                <a
                  href="https://tiktok.com/@accidentes.trabajo.art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  <span className="text-white text-sm font-montserrat font-semibold">TikTok</span>
                </a>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
