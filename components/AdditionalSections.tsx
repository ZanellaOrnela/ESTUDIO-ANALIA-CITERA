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
      <section className="section-padding min-h-[400px]" style={{ backgroundColor: '#0F2D49' }}>
        <div className="container-custom" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="py-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative font-montserrat" style={{ color: '#D9C896' }}>
                Transformamos tu reclamo en resultados concretos
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4" style={{ color: '#D9C896' }} />
                <h4 className="text-lg font-bold mb-2 font-montserrat" style={{ color: '#D9C896' }}>Indemnización</h4>
                <p className="text-sm font-montserrat font-semibold" style={{ color: '#D9C896' }}>
                  Buscamos el mayor monto posible según tu incapacidad, salarios y tablas vigentes.
                </p>
              </div>
              
              <div className="text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4" style={{ color: '#D9C896' }} />
                <h4 className="text-lg font-bold mb-2 font-montserrat" style={{ color: '#D9C896' }}>Cobertura médica</h4>
                <p className="text-sm font-montserrat font-semibold" style={{ color: '#D9C896' }}>
                  Tratamientos, rehabilitación, medicación y traslados a cargo de la ART.
                </p>
              </div>
              
              <div className="text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4" style={{ color: '#D9C896' }} />
                <h4 className="text-lg font-bold mb-2 font-montserrat" style={{ color: '#D9C896' }}>Acompañamiento</h4>
                <p className="text-sm font-montserrat font-semibold" style={{ color: '#D9C896' }}>
                  Te guiamos paso a paso frente a este reclamo, ante la ART, tu empleador y terceros si corresponde.
                </p>
              </div>
              
              <div className="text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4" style={{ color: '#D9C896' }} />
                <h4 className="text-lg font-bold mb-2 font-montserrat" style={{ color: '#D9C896' }}>Costos y tiempos</h4>
                <p className="text-sm font-montserrat font-semibold" style={{ color: '#D9C896' }}>
                  Consultas SIN CARGO y sin adelantar honorarios. Estamos siempre a tu disposición.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="section-padding min-h-[500px]" style={{ backgroundColor: '#D9C896' }}>
        <div className="container-custom" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="py-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 relative font-montserrat" style={{ color: '#0F2D49' }}>
                Proceso simple en 3 pasos
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#0F2D49] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold" style={{ color: '#D9C896' }}>1</span>
                </div>
                <h4 className="text-lg font-bold mb-3 font-montserrat" style={{ color: '#0F2D49' }}>Paso 1</h4>
                <p className="text-sm font-montserrat font-semibold" style={{ color: '#0F2D49' }}>
                  Contanos qué te pasó (videollamada o WhatsApp). Revisamos viabilidad y próximos pasos, sin costo.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#0F2D49] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold" style={{ color: '#D9C896' }}>2</span>
                </div>
                <h4 className="text-lg font-bold mb-3 font-montserrat" style={{ color: '#0F2D49' }}>Paso 2</h4>
                <p className="text-sm font-montserrat font-semibold" style={{ color: '#0F2D49' }}>
                  Reunimos estudios y pruebas. Presentamos reclamos ante la ART, compañía aseguradora, empleadores y cualquier otro responsable, si es necesario, iniciamos reclamos judiciales.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#0F2D49] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold" style={{ color: '#D9C896' }}>3</span>
                </div>
                <h4 className="text-lg font-bold mb-3 font-montserrat" style={{ color: '#0F2D49' }}>Paso 3</h4>
                <p className="text-sm font-montserrat font-semibold" style={{ color: '#0F2D49' }}>
                  Buscamos que obtengas el mejor resultado posible frente al suceso que te ha acontecido.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Presentación Dra. Citera */}
      <section className="section-padding min-h-[600px]" style={{ backgroundColor: '#F2F2F2' }}>
        <div className="container-custom" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="py-8"
          >
            <motion.div variants={itemVariants} className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Imagen de la Dra. Citera - Centrada */}
                <div className="order-1 lg:order-1 flex justify-center w-full">
                  <div className="relative w-full max-w-sm mx-auto flex justify-center">
                    <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/images/analia citera foto.jpg"
                        alt="Dra. Citera Analía"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Contenido de texto - Derecha */}
                <div className="order-2 lg:order-2 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat" style={{ color: '#0F2D49' }}>
                      Dra. Citera Analía
                    </h2>
                    <div className="w-20 h-1 bg-[#D9C896] mx-auto lg:mx-0"></div>
                    <p className="text-lg font-montserrat font-semibold" style={{ color: '#0F2D49' }}>
                      Titular del Estudio
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed font-montserrat" style={{ color: '#0F2D49' }}>
                      Abogada con <strong>25 años de experiencia</strong>, egresada con medalla de honor. 
                      Cuenta con dos maestrías en Derecho Laboral y Civil para brindar la mejor defensa a sus clientes.
                    </p>
                    
                    <p className="text-base leading-relaxed font-montserrat" style={{ color: '#0F2D49' }}>
                      <strong>Atención personalizada</strong> de principio a fin: trata directamente cada tema 
                      y te acompaña en todas las instancias del proceso legal.
                    </p>
                  </div>
                  
                  {/* Características destacadas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#D9C896] rounded-full"></div>
                      <span className="text-sm font-montserrat font-semibold" style={{ color: '#0F2D49' }}>Medalla de Honor</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#D9C896] rounded-full"></div>
                      <span className="text-sm font-montserrat font-semibold" style={{ color: '#0F2D49' }}>Doble Maestría</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#D9C896] rounded-full"></div>
                      <span className="text-sm font-montserrat font-semibold" style={{ color: '#0F2D49' }}>25 Años Experiencia</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#D9C896] rounded-full"></div>
                      <span className="text-sm font-montserrat font-semibold" style={{ color: '#0F2D49' }}>Atención Directa</span>
                    </div>
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
