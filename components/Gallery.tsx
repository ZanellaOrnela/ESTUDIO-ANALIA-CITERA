'use client';

import { motion } from 'framer-motion';
import ImageCarousel from './ImageCarousel';

const Gallery = () => {
  // Videos de Instagram con información sobre ART
  const media = [
    {
      src: "https://drive.google.com/file/d/1VypPY3QPSBI9R_hUSVdo5ES9yKwTDcsV/view?usp=sharing",
      alt: "¿A quién se reclama…?",
      caption: "¿A quién se reclama frente a un accidente de trabajo?",
      type: 'video' as const
    },
    {
      src: "https://drive.google.com/file/d/1IEZENtxlcvTysLYIq1G2bKGLEqSV9CkI/view?usp=sharing",
      alt: "Alta sin incapacidad",
      caption: "Alta laboral sin incapacidad, ¿se puede reclamar a la ART?",
      type: 'video' as const
    },
    {
      src: "https://drive.google.com/file/d/1YyxqayPcgnlSiMfqaY8ckZSLwOBgmVc5/view?usp=sharing",
      alt: "Trayecto al trabajo",
      caption: "Mito o realidad, ¿existe un límite de tiempo que las ART tienen para cubrirte en el trayecto al trabajo?",
      type: 'video' as const
    },
    {
      src: "https://drive.google.com/file/d/1vwCHY9YwSKaiH1R0TwH8xUz7gvqFhuIe/view?usp=sharing",
      alt: "Criterios de indemnización",
      caption: "¿Qué datos tiene en cuenta la A.R.T. para indemnizarte?",
      type: 'video' as const
    },
    {
      src: "https://drive.google.com/file/d/1OwAZhBkw7i5eFXaZw90pUK2lRgnJLwai/view?usp=sharing",
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
    <section id="gallery" className="section-padding" style={{ backgroundColor: '#F2F2F2' }}>
      <div className="container-custom" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative font-montserrat font-bold" style={{ color: '#0F2D49' }}>
              Respondemos tus dudas clave de ART
            </h2>
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
            <p className="text-lg leading-relaxed font-montserrat font-semibold" style={{ color: '#0F2D49' }}>
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
