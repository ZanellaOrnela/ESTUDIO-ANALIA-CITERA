'use client';

import { motion } from 'framer-motion';
import { Scale, Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      platform: "Instagram",
      username: "accidentes.trabajo.art",
      icon: Instagram,
      url: "https://instagram.com/accidentes.trabajo.art"
    },
    {
      platform: "TikTok", 
      username: "accidentes.trabajo.art",
      icon: MessageCircle, // Usando MessageCircle como icono genérico para TikTok
      url: "https://tiktok.com/@accidentes.trabajo.art"
    },
    {
      platform: "Facebook",
      username: "Accidentes trabajo ART",
      icon: Facebook,
      url: "https://facebook.com/Accidentes-trabajo-ART"
    }
  ];


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative" style={{ backgroundColor: '#F2F2F2' }}>
      
      <div className="container-custom relative z-10" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-8"
        >
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-8"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-40 h-20 rounded overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/ChatGPT Image 18 oct 2025, 09_31_50 p.m..png"
                    alt="Logo Estudio Citera"
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center 50%', filter: 'brightness(0)' }}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mb-6">
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#1a1a1a] flex-shrink-0" />
                  <span className="text-[#1a1a1a] text-sm font-medium font-montserrat font-semibold">CABA y Provincia de Buenos Aires</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <Phone className="h-5 w-5 text-[#1a1a1a] flex-shrink-0" />
                  <span className="text-[#1a1a1a] text-sm font-medium font-montserrat font-semibold">+54 9 11 5318-9897</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3 sm:col-span-2 lg:col-span-1">
                  <Mail className="h-5 w-5 text-[#1a1a1a] flex-shrink-0" />
                  <span className="text-[#1a1a1a] text-sm font-medium font-montserrat font-semibold">analiacitera@yahoo.com.ar</span>
                </div>
              </div>
              
              <div className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>
                <p className="font-medium font-montserrat font-semibold">Especialistas en ART, Laboral y Civil</p>
                <p className="mt-1 opacity-70 font-montserrat font-semibold">Defendiendo tus derechos desde 1999</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
