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
    <section id="services" className="section-padding section-bg-alt">
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
              TE DEFENDEMOS EN TODOS LOS SINIESTROS DE ART
            </h2>
            <p className="section-subtitle">
              Accidentes y enfermedades laborales
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flip-card"
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front">
                    <service.icon className="flip-card-icon" />
                    <h3 className="flip-card-title">
                      {service.title}
                    </h3>
                    <div className="flip-card-badge">
                      Área Legal
                    </div>
                  </div>
                  
                  {/* Back */}
                  <div className="flip-card-back">
                    <service.icon className="flip-card-icon" />
                    <h3 className="flip-card-title">
                      {service.title}
                    </h3>
                    <p className="flip-card-description">
                      {service.description}
                    </p>
                    <div className="flip-card-badge">
                      Contactar
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white"
          >
            <Scale className="h-16 w-16 mx-auto mb-6" />
            <h3 className="text-2xl font-bebas-neue mb-4">
              ¿Necesitas asesoramiento legal?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              No dudes en consultarnos. Evaluamos tu caso sin compromiso y te explicamos 
              todas las opciones legales disponibles.
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

export default Services;
