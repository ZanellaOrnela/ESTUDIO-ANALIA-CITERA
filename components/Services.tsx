'use client';

import { motion } from 'framer-motion';
import { Briefcase, Car, Shield, FileText, Scale } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Demora o negativa de ART",
      description: "La ART no te autoriza estudios, traslados o tratamientos. Intervenimos para exigir cobertura, controlar el alta y calcular la incapacidad."
    },
    {
      icon: FileText,
      title: "Alta apresurada",
      description: "Te dieron el alta sin estar bien. Pedimos reevaluación, pericias y reclamamos la indemnización que corresponde."
    },
    {
      icon: Car,
      title: "Accidente \"in itinere\"",
      description: "Sufriste un siniestro camino al trabajo. Documentamos, probamos el nexo y reclamamos a la ART y terceros si corresponde."
    },
    {
      icon: Shield,
      title: "Secuelas e incapacidad",
      description: "Tenés dolor, limitaciones o pérdida de fuerza. Cuantificamos la incapacidad con peritos y maximizamos el monto a cobrar."
    },
    {
      icon: Scale,
      title: "Empleador incumplidor",
      description: "Falta de registración, diferencias salariales o despido tras el accidente. Accionamos con intimaciones y demanda."
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
    <section id="services" className="section-padding" style={{ backgroundColor: '#F2F2F2' }}>
      <div className="container-custom" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative font-montserrat" style={{ color: '#0F2D49' }}>
              Te defendemos en todos los siniestros de ART
            </h2>
            <p className="text-lg leading-relaxed font-montserrat font-semibold" style={{ color: '#0F2D49' }}>
              Accidentes y enfermedades laborales
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-gray-100"
              >
                {/* Icono */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0F2D49] rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                
                {/* Contenido */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-[#0F2D49] font-montserrat">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#0F2D49] leading-relaxed font-montserrat font-semibold">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Services;
