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
    <section id="why-choose" className="section-padding" style={{ backgroundColor: '#0F2D49' }}>
      <div className="container-custom" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-20"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative font-cinzel" style={{ color: '#D9C896' }}>
              Tu problema, resuelto con estrategia y claridad
            </h2>
          </motion.div>


          {/* Reasons con contenido original */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-[#D9C896] rounded-3xl p-8 text-center overflow-hidden"
              >
                {/* Icono decorativo */}
                <div className="w-16 h-16 mx-auto mb-6 bg-[#0F2D49] rounded-full flex items-center justify-center">
                  <reason.icon className="h-8 w-8 text-[#D9C896]" />
                </div>
                
                <h3 className="text-xl font-bold text-[#0F2D49] mb-4 font-cinzel">
                  {reason.title}
                </h3>
                
                <p className="text-base text-[#0F2D49] leading-relaxed font-montserrat font-semibold">
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
