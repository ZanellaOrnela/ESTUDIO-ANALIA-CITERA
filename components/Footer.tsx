'use client';

import { motion } from 'framer-motion';
import { Scale, Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Linkedin } from 'lucide-react';

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
      url: "https://www.facebook.com/share/1FPgZMXT5j/"
    },
    {
      platform: "LinkedIn",
      username: "Analía Citera",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/anal%C3%ADa-citera-954647248/"
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
      
      <div className="container-custom relative z-10 py-12" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              </div>
              
              {/* Redes sociales */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 bg-[#0F2D49] text-white rounded-full hover:bg-[#0F2440] transition-all duration-200 text-xs sm:text-sm"
                  >
                    <social.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="font-montserrat font-semibold">{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>


        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
