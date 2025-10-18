'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Encontré a la Dra. Citera buscando en Google y fue la mejor decisión. Desde el primer día me atendió ella misma, con honestidad, calidez y profesionalismo. Gracias a su ayuda pude resolver mi reclamo con la ART y hoy mi vida cambió para mejor. Eternamente agradecida.",
      author: "⭐ Adriana G."
    },
    {
      text: "Excelente atención, muy buena profesional asesorando en todo el caso y acompañando cada paso. Explica con claridad y siempre está disponible. Súper recomendable.",
      author: "⭐ Alex B."
    },
    {
      text: "Recurri dos veces con la Dra. Citera por distintos casos y en ambos obtuvimos excelentes resultados. Es confiable, clara y muy dedicada. Sin dudas la volvería a elegir.",
      author: "⭐ Iván R."
    },
    {
      text: "Muchas felicidades Analia que este años nuevos que comienza la encuentre con salud igual que a su hija y que siempre triunfe en su trabajo que lo caracteriza como segura de sí misma y sobre todo tan honesta y leal cuando toma un caso como fue el mío. Siempre estaré agradecida a Dios y a la VIRGEN que al azar con mi hijo entramos a Google y vi tu nombre Abogada Analia y le dije a mi hijo: ella. Y como no me equivoqué con usted, mil gracias x ser como hay poco como usted, tan leal, tan sincera y sobre todo sincera. Hoy su gran ayuda mi navidad y mi años nuevos y mi vida cambió y mi realidad hoy se llama gracias a Analia Citera ❤❤😘😘",
      author: "⭐ Whatsapp"
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
              Historias reales, resultados reales
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
              Empezá tu reclamo hoy
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
              Contanos qué te pasó y recibí una evaluación inicial sin cargo. Te guiamos para no perder plazos ni dinero.
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
              Iniciar mi Consulta
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
