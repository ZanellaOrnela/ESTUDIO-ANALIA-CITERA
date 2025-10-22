'use client';

import { motion } from 'framer-motion';
import { Quote, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);

  const testimonials = [
    {
      text: "Encontré a la Dra. Citera buscando en Google y fue la mejor decisión. Desde el primer día me atendió ella misma, con honestidad, calidez y profesionalismo. Gracias a su ayuda pude resolver mi reclamo con la ART y hoy mi vida cambió para mejor. Eternamente agradecida.",
      author: "Adriana G."
    },
    {
      text: "Excelente atención, muy buena profesional asesorando en todo el caso y acompañando cada paso. Explica con claridad y siempre está disponible. Súper recomendable.",
      author: "Alex B."
    },
    {
      text: "Recurri dos veces con la Dra. Citera por distintos casos y en ambos obtuvimos excelentes resultados. Es confiable, clara y muy dedicada. Sin dudas la volvería a elegir.",
      author: "Iván R."
    },
    {
      text: "Muchas felicidades Analia que este años nuevos que comienza la encuentre con salud igual que a su hija y que siempre triunfe en su trabajo que lo caracteriza como segura de sí misma y sobre todo tan honesta y leal cuando toma un caso como fue el mío. Siempre estaré agradecida a Dios y a la VIRGEN que al azar con mi hijo entramos a Google y vi tu nombre Abogada Analia y le dije a mi hijo: ella. Y como no me equivoqué con usted, mil gracias x ser como hay poco como usted, tan leal, tan sincera y sobre todo sincera. Hoy su gran ayuda mi navidad y mi años nuevos y mi vida cambió y mi realidad hoy se llama gracias a Analia Citera ❤❤😘😘",
      author: "Whatsapp"
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
    <section id="testimonials" className="section-padding min-h-[600px]" style={{ backgroundColor: '#D9C896' }}>
      <div className="container-custom" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative font-montserrat" style={{ color: '#0F2D49' }}>
              Historias reales, resultados reales
            </h2>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => {
              const isLong = testimonial.text.length > 150;
              const isExpanded = expandedTestimonial === index;
              const displayText = isLong && !isExpanded 
                ? testimonial.text.substring(0, 150) + '...' 
                : testimonial.text;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#0F2D49] rounded-xl shadow-lg p-8 relative"
                >
                  <Quote className="h-8 w-8 text-white mb-4" />
                  <p className="text-white leading-relaxed mb-6 italic font-montserrat font-semibold">
                    &ldquo;{displayText}&rdquo;
                  </p>
                  {isLong && (
                    <button
                      onClick={() => setExpandedTestimonial(isExpanded ? null : index)}
                      className="flex items-center text-[#D9C896] hover:text-white transition-colors duration-200 mb-4"
                    >
                      {isExpanded ? (
                        <>
                          <span className="text-sm font-montserrat">Ver menos</span>
                          <ChevronUp className="h-4 w-4 ml-1" />
                        </>
                      ) : (
                        <>
                          <span className="text-sm font-montserrat">Ver más</span>
                          <ChevronDown className="h-4 w-4 ml-1" />
                        </>
                      )}
                    </button>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white font-montserrat">{testimonial.author}</p>
                      <div className="flex space-x-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom section */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#0F2D49] rounded-2xl p-8 text-center mt-16"
            style={{ color: '#D9C896' }}
          >
            <h3 className="text-2xl font-bold mb-4 font-montserrat">
              Empezá tu reclamo hoy
            </h3>
            <p className="text-lg max-w-3xl mx-auto mb-6" style={{ color: '#D9C896' }}>
              Contanos qué te pasó y recibí una evaluación inicial sin cargo. Te guiamos para no perder plazos ni dinero.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-[#D9C896] text-[#0F2D49] font-semibold py-3 px-8 rounded-3xl"
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
