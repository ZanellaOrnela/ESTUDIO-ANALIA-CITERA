'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: '#D9C896' }}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Sobre Nosotros */}
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative font-montserrat font-bold" style={{ color: '#0F2D49' }}>
              Cobrá la indemnización que te corresponde
            </h2>
            <p className="text-lg leading-relaxed font-montserrat font-semibold" style={{ color: '#0F2D49' }}>
              Somos un Estudio Jurídico, con más de 25 años de experiencia defendiendo tus derechos. 
              Nos especializamos en reclamos por accidentes y enfermedades de trabajo, reclamos laborales en general, 
              como así también, siniestros de tránsito, y todo lo relacionado con ellos.
            </p>
          </motion.div>





        </motion.div>
      </div>
    </section>
  );
};

export default About;
