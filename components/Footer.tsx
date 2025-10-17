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
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern Mejorado */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20"
        >
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-4 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-xl">
                <Scale className="h-10 w-10 text-white" />
              </div>
              <span className="text-4xl font-bebas-neue">Estudio Citera</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">CABA y Provincia de Buenos Aires</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">+54 9 11 5318-9897</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">info@estudiocitera.com</span>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 mt-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-primary-600 rounded-xl transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Bottom Bar Mejorado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="pt-8 border-t border-gray-700"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-center md:text-left">
                <p className="text-sm">
                  © 2024 Estudio Citera. Todos los derechos reservados.
                </p>
                <p className="text-xs mt-1 text-gray-500">
                  Defendiendo tus derechos desde 1999
                </p>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Especialistas en Derecho Laboral</span>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <span>25+ Años de Experiencia</span>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <span>Atención Personalizada</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
