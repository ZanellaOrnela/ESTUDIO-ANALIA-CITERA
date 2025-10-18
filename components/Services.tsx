'use client';

import { motion } from 'framer-motion';
import { Briefcase, Car, Shield, FileText, Scale } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Accidentes y enfermedades de trabajo (ART)",
      description: "Asesoramiento y gestión integral del reclamo ante la ART: denuncias, turnos médicos, alta/recidiva, juntas médicas y cálculo de incapacidad. Si sufriste un accidente de trabajo y no le querés reclamar nada a tu empleador, no te preocupes, solo se le reclama a la ART. No aceptes ofertas apresuradas ni firmes documentos sin consultarnos previamente.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Reclamos laborales en general",
      description: "Despidos con o sin causa, diferencias salariales, trabajo en negro, acoso y violencia laboral, registración, horas extra, licencias y maternidad/paternidad. Análisis documental y cálculo de indemnizaciones para negociar con solidez.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Car,
      title: "Siniestros de tránsito",
      description: "Accidentes de auto, moto, peatón, bici, transporte público, etc., incluidos accidentes \"in itinere\". Gestión de reclamos a aseguradoras: daños físicos, incapacidad, reparación del vehículo, tratamientos y gastos. Logrando maximizar el resultado. Revisión de ofertas de ART/aseguradoras. Te orientamos para decidir con información completa antes de aceptar una oferta.",
      color: "from-purple-500 to-purple-600"
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
              ÁREAS DE PRÁCTICA
            </h2>
            <p className="section-subtitle">
              Nuestros servicios legales principales
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid lg:grid-cols-3 gap-8"
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
