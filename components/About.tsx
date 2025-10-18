'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Target, Heart, Users } from 'lucide-react';

const About = () => {
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
    <section id="about" className="section-padding section-bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Quiénes Somos */}
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            <h2 className="section-title">
              QUIÉNES SOMOS
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Somos un estudio con más de 25 años de experiencia defendiendo tus derechos. 
              Nos especializamos en reclamos por accidentes y enfermedades de trabajo, 
              reclamos laborales en general, como así también, siniestros de tránsito, y todo lo relacionado. 
              Cientos de causas ganadas a lo largo de tantos años, como la opinión de nuestros clientes 
              que nos respaldan, nos vuelven a elegir y nos recomiendan, es el mejor aval de nuestro servicio.
            </p>
          </motion.div>

          {/* Grid de información */}
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 items-stretch"
          >
            {/* Presentación */}
            <motion.div 
              variants={itemVariants}
              className="parent-3d"
            >
              <div className="card-3d-spectacular bg-gradient-to-br from-slate-100 to-slate-200">
                <div className="glass-effect"></div>
                <div className="content-3d">
                  <h3 className="text-xl font-bebas-neue text-gray-900 mb-4">Presentación</h3>
                  <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                    La Dra. Citera siempre se ha destacado por su capacidad, habiendo egresado con medalla de honor, 
                    actualizándose permanentemente, cuenta en su haber con dos maestrías, tanto en el Derecho Laboral, 
                    como Civil, a los efectos de brindarle la mejor y eficiente defensa a sus clientes. 
                    La Dra. Citera se encarga personalmente de cada tema.
                  </p>
                </div>
                <div className="logo-3d">
                  <span className="circle-3d circle-3d-3" style={{background: 'rgba(148, 163, 184, 0.4)', display: 'grid', placeContent: 'center'}}>
                    <GraduationCap className="h-6 w-6 text-slate-600" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Misión */}
            <motion.div 
              variants={itemVariants}
              className="parent-3d"
            >
              <div className="card-3d-spectacular bg-gradient-to-br from-sky-100 to-sky-200">
                <div className="glass-effect"></div>
                <div className="content-3d">
                  <h3 className="text-xl font-bebas-neue text-gray-900 mb-4">Misión</h3>
                  <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                    Defender con rapidez, claridad y rigor jurídico a cada trabajador y víctima de tránsito, 
                    maximizando su indemnización, siempre tratando de conseguir el mejor resultado para cada cliente.
                  </p>
                </div>
                <div className="logo-3d">
                  <span className="circle-3d circle-3d-3" style={{background: 'rgba(56, 189, 248, 0.4)', display: 'grid', placeContent: 'center'}}>
                    <Target className="h-6 w-6 text-sky-600" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Valores */}
            <motion.div 
              variants={itemVariants}
              className="parent-3d"
            >
              <div className="card-3d-spectacular bg-gradient-to-br from-blue-100 to-blue-200">
                <div className="glass-effect"></div>
                <div className="content-3d">
                  <h3 className="text-xl font-bebas-neue text-gray-900 mb-4">Valores Centrales</h3>
                  <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                    Empatía y escucha activa desde la primera consulta. Transparencia total sobre pasos, 
                    plazos y montos. Estrategia legal sólida basada en experiencia, cientos de casos y clientes 
                    nos respaldan. Comunicación constante y lenguaje claro.
                  </p>
                </div>
                <div className="logo-3d">
                  <span className="circle-3d circle-3d-3" style={{background: 'rgba(59, 130, 246, 0.4)', display: 'grid', placeContent: 'center'}}>
                    <Heart className="h-6 w-6 text-blue-600" />
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
