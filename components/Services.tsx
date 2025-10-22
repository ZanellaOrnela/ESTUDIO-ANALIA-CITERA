'use client';

import { motion } from 'framer-motion';
import { Briefcase, Car, Shield, FileText, Scale, Bus } from 'lucide-react';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      image: "/images/analia citera foto.jpg", // Imagen local como fallback
      title: "Demora o negativa de ART",
      description: "La ART no te autoriza estudios, traslados o tratamientos. Intervenimos para exigir cobertura, controlar el alta y calcular la incapacidad."
    },
    {
      icon: FileText,
      image: "/images/analia citera foto.jpg", // Imagen local como fallback
      title: "Alta apresurada",
      description: "Te dieron el alta sin estar en condiciones de prestar tareas laborales. Pedimos reevaluación y reclamamos la indemnización que te corresponde"
    },
    {
      icon: Car,
      image: "/images/analia citera foto.jpg", // Imagen local como fallback
      title: "Accidente \"in itinere\"",
      description: "Sufriste un accidente yendo o volviendo del trabajo. Documentamos, probamos el nexo y reclamamos a la ART y terceros si corresponde."
    },
    {
      icon: Shield,
      image: "/images/analia citera foto.jpg", // Imagen local como fallback
      title: "Secuelas e incapacidades",
      description: "Tenés dolor, limitaciones o pérdida de fuerza. Te representamos para maximizar el monto que te corresponde cobrar."
    },
    {
      icon: Scale,
      image: "/images/analia citera foto.jpg", // Imagen local como fallback
      title: "Empleador incumplidor",
      description: "Falta de registración, diferencias salariales o despido. Accionamos con intimaciones y demandas. No dudes en consultarnos para que te asesoremos frente a esta situación y defendamos tus derechos."
    },
    {
      icon: Scale,
      image: "/images/analia citera foto.jpg", // Imagen local como fallback
      title: "Accidente de tránsito",
      description: " Accidente de tránsito o accidente de trayecto. Te representamos para maximizar el monto a cobrar."
    },
    {
      icon: Bus,
      image: "/images/analia citera foto.jpg", // Imagen local como fallback
      title: "Accidentes en transporte público",
      description: "Sufriste un accidente en transporte público. Te asesoramos sobre tus derechos y analizamos para que obtengas la indemnización de todos los responsables ante el mismo."
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
    <section id="services" className="section-padding pb-16 min-h-[800px] bg-[#F2F2F2]">
      <div className="container-custom" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
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
              Te defendemos frente a siniestros y enfermedades de trabajo
            </h2>
            <p className="text-lg leading-relaxed font-montserrat font-semibold" style={{ color: '#0F2D49' }}>
              Accidentes y enfermedades laborales
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {services.map((service, index) => {
              console.log(`Rendering service ${index}: ${service.title}`);
              return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                {/* Imagen */}
                <div className="relative w-full h-56 sm:h-64 bg-gray-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                
                {/* Contenido */}
                <div className="p-4 sm:p-5 space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-[#0F2D49] font-montserrat">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#0F2D49] leading-relaxed font-montserrat font-semibold">
                    {service.description}
                  </p>
                </div>
              </motion.div>
              );
            })}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Services;
