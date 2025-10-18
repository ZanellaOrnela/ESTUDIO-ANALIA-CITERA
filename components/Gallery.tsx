'use client';

import { motion } from 'framer-motion';
import ImageCarousel from './ImageCarousel';

const Gallery = () => {
  // Videos de Instagram con información sobre ART
  const media = [
    {
      src: "https://www.instagram.com/reel/C40WOhjA-xL/?igsh=ZjNxMHMwaTBicnox",
      alt: "¿A quién se reclama…?",
      caption: "¿A quién se reclama frente a un accidente de trabajo?",
      type: 'video' as const
    },
    {
      src: "https://www.instagram.com/reel/C5n0DkbAsfZ/?igsh=MWxnMGs5cXVlZTB6YQ%3D%3D",
      alt: "Alta sin incapacidad",
      caption: "Alta laboral sin incapacidad, ¿se puede reclamar a la ART?",
      type: 'video' as const
    },
    {
      src: "https://www.instagram.com/reel/C4Y2Y6EPL0s/?igsh=MXBjOG9yYmk3cmdkZQ%3D%3D",
      alt: "Trayecto al trabajo",
      caption: "Mito o realidad, ¿existe un límite de tiempo que las ART tienen para cubrirte en el trayecto al trabajo?",
      type: 'video' as const
    },
    {
      src: "https://www.instagram.com/reel/C3z0S1ugQBN/?igsh=YWJkbWk1ejNtZzUx",
      alt: "Criterios de indemnización",
      caption: "¿Qué datos tiene en cuenta la A.R.T. para indemnizarte?",
      type: 'video' as const
    },
    {
      src: "https://www.instagram.com/reel/C3Q8YQ9Pzm2/?igsh=ZWwwdTEzc3o4OHN0",
      alt: "Plazos",
      caption: "¿Cuánto tiempo tenés para reclamar por un accidente de trabajo?",
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
              VIDEOS
            </h2>
            <p className="section-subtitle">
              Respondemos tus dudas clave de ART
            </p>
          </motion.div>

          {/* Carousel */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <ImageCarousel 
              media={media}
              autoPlay={false}
            />
          </motion.div>

          {/* Additional info */}
          <motion.div 
            variants={itemVariants}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-gray-600 leading-relaxed">
              Encuentra respuestas a las preguntas más frecuentes sobre accidentes de trabajo, 
              enfermedades laborales y reclamos ante ART. Nuestros videos te explican paso a paso 
              qué hacer en cada situación.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
