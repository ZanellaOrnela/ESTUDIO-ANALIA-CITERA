'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Super recomendable. Confiable, y sobre todo buena persona.",
      author: "Adriana Alejandra Marcela Bustos"
    },
    {
      text: "Un lujo Analia, muy correcta en todo. Muy recomendable.",
      author: "Fernando Fole"
    },
    {
      text: "Excelente profesional, súper recomendable.",
      author: "Sol"
    },
    {
      text: "Siempre estaré agradecida... segura de sí misma y, sobre todo, tan honesta y leal... su gran ayuda cambió mi vida; mi realidad hoy se llama gracias a Analía Citera.",
      author: "Ada Gavilan Samaniego"
    },
    {
      text: "Yo a usted le confío mi vida... gran persona Dra. Citera.",
      author: "Guillermo López"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="testimonials" className="section-padding section-bg-alt">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="section-title">
              TESTIMONIOS
            </h2>
            <p className="section-subtitle">
              Lo que dicen nuestros clientes
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative"
              >
                <Quote className="h-8 w-8 text-primary-600 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom section */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-bebas-neue mb-4">
              Más de 25 años defendiendo al trabajador nos respaldan
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
              Cientos de acuerdos y sentencias favorables a lo largo de la trayectoria del Estudio. 
              No dudes en consultarnos, estamos para ayudarte.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Contactar
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
