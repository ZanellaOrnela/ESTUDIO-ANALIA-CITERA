'use client';

import { motion } from 'framer-motion';
import { Briefcase, Car, Shield, FileText, Scale, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Abogados Expertos",
      description: "Asesoramiento y gestión integral del reclamo ante la ART: denuncias, turnos médicos, alta/recidiva, juntas médicas y cálculo de incapacidad.",
      number: "01"
    },
    {
      icon: FileText,
      title: "Análisis Financiero",
      description: "Despidos con o sin causa, diferencias salariales, trabajo en negro, acoso y violencia laboral, registración, horas extra, licencias y maternidad/paternidad.",
      number: "02"
    },
    {
      icon: Car,
      title: "Altamente Recomendado",
      description: "Accidentes de auto, moto, peatón, bici, transporte público, etc., incluidos accidentes \"in itinere\". Gestión de reclamos a aseguradoras.",
      number: "03"
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
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Estudio Jurídico De Confianza Y Servicio Completo Para Cada Cliente
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Abogados con más de 25 años de experiencia defendiendo los derechos de los trabajadores 
                frente a accidentes/enfermedades de trabajo, como así también, reclamos en general.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gray-800 text-white px-8 py-4 rounded font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>RESERVAR CITA</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          </div>

          {/* Services Cards */}
          <motion.div 
            variants={itemVariants}
            className="grid lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 p-8 rounded-lg hover:bg-gray-750 transition-colors duration-300"
              >
                <div className="text-6xl font-bold text-gray-400 mb-4">
                  {service.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;