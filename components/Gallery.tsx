'use client';

import { motion } from 'framer-motion';
import ImageCarousel from './ImageCarousel';

const Gallery = () => {
  // Imágenes de la galería
  const images = [
    {
      src: "/images/gallery-1.svg",
      alt: "Estudio Analia Citera - Oficina",
      caption: "Nuestro estudio jurídico"
    },
    {
      src: "/images/gallery-2.svg",
      alt: "Especialistas en derecho laboral",
      caption: "Especialistas en derecho laboral"
    },
    {
      src: "/images/gallery-3.svg",
      alt: "Más de 25 años de experiencia",
      caption: "Más de 25 años defendiendo trabajadores"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="gallery" className="section-padding section-bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="section-title">
              NUESTRO ESTUDIO
            </h2>
            <p className="section-subtitle">
              Conoce nuestro espacio de trabajo y equipo
            </p>
          </motion.div>

          {/* Carousel */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <ImageCarousel 
              images={images}
              autoPlay={true}
              autoPlayInterval={4000}
            />
          </motion.div>

          {/* Additional info */}
          <motion.div 
            variants={itemVariants}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-gray-600 leading-relaxed">
              Nuestro estudio cuenta con instalaciones modernas y un equipo profesional 
              dedicado a brindar la mejor atención a nuestros clientes. 
              Más de 25 años de experiencia nos respaldan.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
