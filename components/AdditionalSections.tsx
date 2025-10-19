'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const AdditionalSections = () => {
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
    <>
      {/* Transformamos tu reclamo en resultados concretos */}
      <section className="section-padding" style={{ backgroundColor: '#143259' }}>
        <div className="container-custom" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-16"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative font-cinzel font-bold" style={{ color: '#D9C896' }}>
                Transformamos tu reclamo en resultados concretos
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4" style={{ color: '#D9C896' }} />
                <h4 className="text-lg font-bold mb-2 font-cinzel font-bold" style={{ color: '#D9C896' }}>Indemnización</h4>
                <p className="text-sm font-montserrat font-semibold" style={{ color: '#D9C896' }}>
                  Buscamos el mayor monto posible según tu incapacidad, salarios y tablas vigentes.
                </p>
              </div>
              
              <div className="text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4" style={{ color: '#D9C896' }} />
                <h4 className="text-lg font-bold mb-2 font-cinzel font-bold" style={{ color: '#D9C896' }}>Cobertura médica</h4>
                <p className="text-sm font-montserrat font-semibold" style={{ color: '#D9C896' }}>
                  Tratamientos, rehabilitación, medicación y traslados a cargo de la ART.
                </p>
              </div>
              
              <div className="text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4" style={{ color: '#D9C896' }} />
                <h4 className="text-lg font-bold mb-2 font-cinzel font-bold" style={{ color: '#D9C896' }}>Acompañamiento</h4>
                <p className="text-sm font-montserrat font-semibold" style={{ color: '#D9C896' }}>
                  Te guiamos paso a paso: qué papeles juntar, qué decir y qué evitar.
                </p>
              </div>
              
              <div className="text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4" style={{ color: '#D9C896' }} />
                <h4 className="text-lg font-bold mb-2 font-cinzel font-bold" style={{ color: '#D9C896' }}>Costos y tiempos</h4>
                <p className="text-sm font-montserrat font-semibold" style={{ color: '#D9C896' }}>
                  Consultas SIN CARGO, sin adelantar honorarios y con actualización frecuente del estado del caso.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="section-padding" style={{ backgroundColor: '#D9C896' }}>
        <div className="container-custom" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-16"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 relative font-cinzel font-bold" style={{ color: '#143259' }}>
                Proceso simple en 3 pasos
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#143259] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold" style={{ color: '#D9C896' }}>1</span>
                </div>
                <h4 className="text-lg font-bold mb-3 font-cinzel font-bold" style={{ color: '#143259' }}>Paso 1</h4>
                <p className="text-sm font-montserrat font-semibold" style={{ color: '#143259' }}>
                  Contanos qué te pasó (videollamada o WhatsApp). Revisamos viabilidad y próximos pasos, sin costo.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#143259] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold" style={{ color: '#D9C896' }}>2</span>
                </div>
                <h4 className="text-lg font-bold mb-3 font-cinzel font-bold" style={{ color: '#143259' }}>Paso 2</h4>
                <p className="text-sm font-montserrat font-semibold" style={{ color: '#143259' }}>
                  Reunimos estudios y pruebas. Presentamos reclamos ante ART y, si hace falta, iniciamos acción judicial.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#143259] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold" style={{ color: '#D9C896' }}>3</span>
                </div>
                <h4 className="text-lg font-bold mb-3 font-cinzel font-bold" style={{ color: '#143259' }}>Paso 3</h4>
                <p className="text-sm font-montserrat font-semibold" style={{ color: '#143259' }}>
                  Negociamos y cobramos. Te informamos cada avance y cerramos con el mejor resultado posible.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Presentación Dra. Citera */}
      <section className="section-padding" style={{ backgroundColor: '#F2F2F2' }}>
        <div className="container-custom" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Contenido de texto */}
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 relative font-cinzel font-bold" style={{ color: '#143259' }}>
                    Dra. Citera Analía — Titular del Estudio
                  </h2>
                  <p className="text-lg leading-relaxed font-montserrat font-semibold" style={{ color: '#143259' }}>
                    Dra. Citera Analía, abogada, con 25 años de experiencia, siempre se ha destacado por su capacidad, 
                    habiendo egresado con medalla de honor, actualizándose permanentemente, cuenta en su haber con dos maestrías, 
                    tanto en el Derecho Laboral, como Civil, a los efectos de brindarle la mejor y eficiente defensa a sus clientes. 
                    La atención es personalizada de principio a fin: trata directamente cada tema y te acompaña en todas las instancias.
                  </p>
                </div>
                
                {/* Imagen de la Dra. Citera */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative w-80 h-96 rounded-lg overflow-hidden">
                    <Image
                      src="/images/analia citera foto.jpg"
                      alt="Dra. Citera Analía"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AdditionalSections;
