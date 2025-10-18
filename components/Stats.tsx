'use client';

import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { number: "250+", label: "SOCIOS COMERCIALES" },
    { number: "500+", label: "CASOS COMPLETADOS" },
    { number: "100%", label: "CLIENTES SATISFECHOS" },
    { number: "25+", label: "PREMIOS GANADOS" }
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestras Áreas De Práctica Legal
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Abogados con más de 25 años de experiencia defendiendo los derechos de los trabajadores 
              frente a accidentes/enfermedades de trabajo, como así también, reclamos en general.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
