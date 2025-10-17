'use client';

import { motion } from 'framer-motion';
import { MessageCircle, GraduationCap, DollarSign } from 'lucide-react';

const WhyChoose = () => {
  const reasons = [
    {
      icon: MessageCircle,
      title: "Hablamos claro y estamos presentes",
      subtitle: "Claridad y Comunicación",
      description: "Te explicamos cada paso en lenguaje simple: qué presentar, cuándo y para qué. Atención personalizada: la Dra. Citera se encarga personalmente de cada tema, con seguimiento por WhatsApp/email y reuniones virtuales sin traslados.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "25+ años, maestrías y actualización constante",
      subtitle: "Especialización y Trayectoria",
      description: "Combinamos experiencia, práctica con formación académica de posgrado en Derecho Laboral y Civil. Egresada con medalla de honor y dos maestrías, la Dra. Citera integra doctrina, jurisprudencia y pericias para fortalecer tu caso desde el inicio.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: DollarSign,
      title: "Honorarios alineados a tu resultado",
      subtitle: "Estrategia y Tarifas",
      description: "No cobramos honorarios por adelantado. Las consultas son gratuitas y virtuales. Avanzamos cuando existe una estrategia con alta probabilidad de éxito, reduciendo tiempos y costos innecesarios.",
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
              POR QUÉ ELEGIRNOS
            </h2>
            <p className="section-subtitle">
              Resultados, claridad y trato humano
            </p>
          </motion.div>


          {/* Reasons con contenido original */}
          <motion.div 
            variants={itemVariants}
            className="grid lg:grid-cols-3 gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${reason.color} mb-6`}>
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bebas-neue text-gray-900 mb-2">
                  {reason.title}
                </h3>
                
                <h4 className="text-lg font-medium text-primary-600 mb-4">
                  {reason.subtitle}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
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
