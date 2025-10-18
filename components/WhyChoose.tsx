'use client';

import { motion } from 'framer-motion';
import { MessageCircle, GraduationCap, DollarSign } from 'lucide-react';

const WhyChoose = () => {
  const reasons = [
    {
      icon: MessageCircle,
      title: "Comunicación directa",
      subtitle: "Hablás siempre con la Dra. Citera. Te explica en lenguaje simple qué hacer y qué esperar.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Estrategia que gana",
      subtitle: "Pericias, evidencia médica y negociación firme para maximizar tu cobro.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: DollarSign,
      title: "Sin adelantos",
      subtitle: "Consultas virtuales sin cargo. No pagás honorarios por adelantado.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageCircle,
      title: "CABA y Provincia",
      subtitle: "Te defendemos en CABA y en la Provincia de Buenos Aires.",
      color: "from-red-500 to-red-600"
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
    <section id="why-choose" className="section-padding section-bg-alt">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-20"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            <h2 className="section-title">
              RAZONES PARA ELEGIRNOS
            </h2>
            <p className="section-subtitle">
              Tu problema, resuelto con estrategia y claridad
            </p>
          </motion.div>


          {/* Reasons con contenido original */}
          <motion.div 
            variants={itemVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100"
              >
                <div className={`inline-flex p-3 sm:p-4 rounded-lg bg-gradient-to-r ${reason.color} mb-4 sm:mb-6`}>
                  <reason.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bebas-neue text-gray-900 mb-2">
                  {reason.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {reason.subtitle}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
