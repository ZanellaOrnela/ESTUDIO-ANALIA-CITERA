'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
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

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Lorem Ipsum Dolor Sit Amet Consectetur Sollicitudin Nunc Amet Non Ac Integer Nibh Adipiscing Justo Cursus. Velit Quis Nisi Viverra Urna Ornare.
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Somos un estudio con más de 25 años de experiencia defendiendo tus derechos. 
                  Nos especializamos en reclamos por accidentes y enfermedades de trabajo, 
                  reclamos laborales en general, como así también, siniestros de tránsito, y todo lo relacionado.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Cientos de causas ganadas a lo largo de tantos años, como la opinión de nuestros clientes 
                  que nos respaldan, nos vuelven a elegir y nos recomiendan, es el mejor aval de nuestro servicio.
                </p>
              </div>

              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-gray-900 px-8 py-4 rounded font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2 border border-gray-300"
              >
                <span>CONOCER MÁS</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>

            {/* Imagen */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative h-96 lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/hero-section.png"
                  alt="Abogada en oficina"
                  fill
                  className="object-cover grayscale"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button className="bg-white/90 hover:bg-white rounded-full p-4 hover:scale-110 transition-transform duration-200">
                    <Play className="h-8 w-8 text-gray-800 ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;