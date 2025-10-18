'use client';

import { motion } from 'framer-motion';
import ImageCarousel from './ImageCarousel';

const Gallery = () => {
  // Videos de la galería con enlaces directos a Google Drive
  const media = [
    {
      src: "https://drive.google.com/file/d/1w738IRwPmMjxm7uP8RYFhxz8kNSz23GO/view?usp=sharing",
      alt: "Video 1 - Estudio Analia Citera",
      caption: "Nuestro estudio jurídico",
      type: 'video' as const
    },
    {
      src: "https://drive.google.com/file/d/1QjmZZHkvGK_z1ZF9iFnrihKGghnIvrYI/view?usp=sharing",
      alt: "Video 2 - Especialistas en derecho laboral",
      caption: "Especialistas en derecho laboral",
      type: 'video' as const
    },
    {
      src: "https://drive.google.com/file/d/1TiNC2MBZJkSdEajoLxLusNjqX3tUM29V/view?usp=sharing",
      alt: "Video 3 - Más de 25 años de experiencia",
      caption: "Más de 25 años defendiendo trabajadores",
      type: 'video' as const
    },
    {
      src: "https://drive.google.com/file/d/1hLCVHgab7n6odLjC5QWUtB8PuenBDnPj/view?usp=sharing",
      alt: "Video 4 - Defensas laborales",
      caption: "Defensas laborales especializadas",
      type: 'video' as const
    },
    {
      src: "https://drive.google.com/file/d/1ak3n-XAbUXl0mDjm6jx08pZuSWMdk7Et/view?usp=sharing",
      alt: "Video 5 - Siniestros de tránsito",
      caption: "Siniestros de tránsito",
      type: 'video' as const
    },
    {
      src: "https://drive.google.com/file/d/15aVmxSZ9pFEQO6ma-a7wuaniknc5KDwE/view?usp=sharing",
      alt: "Video 6 - Consultas y asesoramiento",
      caption: "Consultas y asesoramiento",
      type: 'video' as const
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
              NUESTROS VIDEOS
            </h2>
            <p className="section-subtitle">
              Conoce más sobre nuestro trabajo y servicios
            </p>
          </motion.div>

          {/* Carousel */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <ImageCarousel 
              media={media}
              autoPlay={true}
              autoPlayInterval={6000}
            />
          </motion.div>

          {/* Additional info */}
          <motion.div 
            variants={itemVariants}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-gray-600 leading-relaxed">
              Descubre más sobre nuestros servicios a través de estos videos informativos. 
              Conoce nuestro enfoque profesional y la experiencia que nos respalda 
              en cada caso que manejamos.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
