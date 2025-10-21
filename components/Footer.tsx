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
                <div className="w-64 h-24 rounded flex items-center justify-center">
                  <img
                    src="/images/WhatsApp Image 2025-10-06 at 16.22.05_28e5fbe4.jpg"
                    alt="Logo Estudio Citera"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="h-5 w-5 text-[#0F2D49] flex-shrink-0" />
                  <span className="text-[#0F2D49] text-sm font-semibold font-montserrat">CABA y Provincia de Buenos Aires</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-5 w-5 text-[#0F2D49] flex-shrink-0" />
                  <span className="text-[#0F2D49] text-sm font-semibold font-montserrat">+54 9 11 5318-9897</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-5 w-5 text-[#0F2D49] flex-shrink-0" />
                  <span className="text-[#0F2D49] text-sm font-semibold font-montserrat">analiacitera@yahoo.com.ar</span>
                </div>
              </div>
              
              <div className="text-center text-sm leading-relaxed" style={{ color: '#0F2D49' }}>
                <p className="font-semibold font-montserrat">Especialistas en ART, Laboral y Civil</p>
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
