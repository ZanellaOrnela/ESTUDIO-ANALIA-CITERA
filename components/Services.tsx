'use client';

import { motion } from 'framer-motion';
import { Briefcase, Car, Shield, FileText, Scale } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Demora o negativa de ART",
      description: "La ART no te autoriza estudios, traslados o tratamientos. Intervenimos para exigir cobertura, controlar el alta y calcular la incapacidad.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Alta apresurada",
      description: "Te dieron el alta sin estar bien. Pedimos reevaluación, pericias y reclamamos la indemnización que corresponde.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Car,
      title: "Accidente \"in itinere\"",
      description: "Sufriste un siniestro camino al trabajo. Documentamos, probamos el nexo y reclamamos a la ART y terceros si corresponde.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Secuelas e incapacidad",
      description: "Tenés dolor, limitaciones o pérdida de fuerza. Cuantificamos la incapacidad con peritos y maximizamos el monto a cobrar.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Scale,
      title: "Empleador incumplidor",
      description: "Falta de registración, diferencias salariales o despido tras el accidente. Accionamos con intimaciones y demanda.",
      color: "from-orange-500 to-orange-600"
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
      <div className="container-custom" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative font-cinzel font-bold" style={{ color: '#1a1a1a' }}>
              Te defendemos en todos los siniestros de ART
            </h2>
            <p className="text-lg leading-relaxed font-montserrat font-semibold" style={{ color: '#1a1a1a' }}>
              Accidentes y enfermedades laborales
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flip-card"
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)' }}>
                    <service.icon className="flip-card-icon" style={{ color: '#BFBFBA' }} />
                    <h3 className="flip-card-title" style={{ color: '#BFBFBA' }}>
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Back */}
                  <div className="flip-card-back" style={{ background: 'linear-gradient(135deg, #BFBFBA 0%, #a8a8a8 100%)' }}>
                    <h3 className="flip-card-title" style={{ color: '#1a1a1a' }}>
                      {service.title}
                    </h3>
                    <p className="flip-card-description" style={{ color: '#1a1a1a' }}>
                      {service.description}
                    </p>
                  </div>
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
