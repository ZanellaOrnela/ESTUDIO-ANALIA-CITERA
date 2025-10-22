'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, MessageCircle, Linkedin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear mensaje para WhatsApp
    const phoneNumber = "5491153189897"; // Número de WhatsApp del estudio
    const message = `Hola, me gustaría contactar para asesoramiento legal.

Datos del formulario:
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone || 'No proporcionado'}
• Tipo de asesoramiento: ${formData.subject}
• Mensaje: ${formData.message}`;

    // Abrir WhatsApp con el mensaje
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Limpiar formulario después del envío
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

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
    <section id="contact" className="section-padding" style={{ backgroundColor: '#0F2D49' }}>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative font-montserrat font-bold" style={{ color: '#D9C896' }}>
              Estamos online y respondemos rápido
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-[#D9C896] rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 font-montserrat font-bold" style={{ color: '#0F2D49' }}>
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-[#0F2D49] mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0F2D49] font-montserrat font-bold">Ubicación y Horario</h4>
                      <p className="text-[#0F2D49] font-montserrat font-semibold">
                        Atención virtual. Defendemos tanto en CABA, como en la provincia de Buenos Aires. 
                        Horario de contacto: lunes a viernes de 9 a 17 h.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-[#0F2D49] mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0F2D49] font-montserrat font-bold">Email</h4>
                      <p className="text-[#0F2D49] font-montserrat font-semibold">analiacitera@yahoo.com.ar</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-[#0F2D49] mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0F2D49] font-montserrat font-bold">Teléfono</h4>
                      <p className="text-[#0F2D49] font-montserrat font-semibold">+54 9 11 5318-9897</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-[#0F2D49] mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0F2D49] font-montserrat font-bold">Horario de Atención</h4>
                      <p className="text-[#0F2D49] font-montserrat font-semibold">Lunes a Viernes: 9:00 - 17:00</p>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-[#D9C896] border border-gray-300 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 font-montserrat font-bold" style={{ color: '#0F2D49' }}>
                  Contactar
                </h3>
                
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#0F2D49] mb-2 font-montserrat font-semibold">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2D49] focus:border-transparent transition-colors"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#0F2D49] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2D49] focus:border-transparent transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#0F2D49] mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2D49] focus:border-transparent transition-colors"
                        placeholder="+54 11 1234-5678"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#0F2D49] mb-2">
                        Tipo de Asesoramiento *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2D49] focus:border-transparent transition-colors"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="accidente-trabajo">Accidente de Trabajo (ART)</option>
                        <option value="reclamo-laboral">Reclamo Laboral</option>
                        <option value="siniestro-transito">Siniestro de Tránsito</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0F2D49] mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2D49] focus:border-transparent transition-colors resize-none"
                      placeholder="Cuéntanos brevemente tu situación..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-transparent text-[#0F2D49] border-2 border-[#0F2D49] font-semibold py-3 px-6 rounded-3xl hover:bg-[#0F2D49] hover:text-[#D9C896] transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensaje</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Redes Sociales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-montserrat" style={{ color: '#0F2D49' }}>
              Síguenos en nuestras redes
            </h3>
            <p className="text-base mb-6 font-montserrat" style={{ color: '#0F2D49' }}>
              Consejos legales, casos reales y actualizaciones del derecho laboral
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Instagram */}
            <motion.a
              href="https://instagram.com/accidentes.trabajo.art"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex flex-col items-center space-y-4 h-full">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D9C896' }}>
                    <Instagram className="h-8 w-8" style={{ color: '#0F2D49' }} />
                  </div>
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <h4 className="text-lg font-bold font-montserrat" style={{ color: '#0F2D49' }}>Instagram</h4>
                    <p className="text-sm font-montserrat" style={{ color: '#0F2D49' }}>@accidentes.trabajo.art</p>
                    <p className="text-xs mt-2 font-montserrat opacity-70" style={{ color: '#0F2D49' }}>
                      Videos explicativos y casos reales
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* TikTok */}
            <motion.a
              href="https://tiktok.com/@accidentes.trabajo.art"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex flex-col items-center space-y-4 h-full">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D9C896' }}>
                    <MessageCircle className="h-8 w-8" style={{ color: '#0F2D49' }} />
                  </div>
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <h4 className="text-lg font-bold font-montserrat" style={{ color: '#0F2D49' }}>TikTok</h4>
                    <p className="text-sm font-montserrat" style={{ color: '#0F2D49' }}>@accidentes.trabajo.art</p>
                    <p className="text-xs mt-2 font-montserrat opacity-70" style={{ color: '#0F2D49' }}>
                      Contenido dinámico y consejos prácticos
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Facebook */}
            <motion.a
              href="https://www.facebook.com/share/1FPgZMXT5j/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex flex-col items-center space-y-4 h-full">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D9C896' }}>
                    <Facebook className="h-8 w-8" style={{ color: '#0F2D49' }} />
                  </div>
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <h4 className="text-lg font-bold font-montserrat" style={{ color: '#0F2D49' }}>Facebook</h4>
                    <p className="text-sm font-montserrat" style={{ color: '#0F2D49' }}>Accidentes trabajo ART</p>
                    <p className="text-xs mt-2 font-montserrat opacity-70" style={{ color: '#0F2D49' }}>
                      Actualizaciones y noticias legales
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/anal%C3%ADa-citera-954647248/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex flex-col items-center space-y-4 h-full">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D9C896' }}>
                    <Linkedin className="h-8 w-8" style={{ color: '#0F2D49' }} />
                  </div>
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <h4 className="text-lg font-bold font-montserrat" style={{ color: '#0F2D49' }}>LinkedIn</h4>
                    <p className="text-sm font-montserrat" style={{ color: '#0F2D49' }}>Analía Citera</p>
                    <p className="text-xs mt-2 font-montserrat opacity-70" style={{ color: '#0F2D49' }}>
                      Perfil profesional y experiencia
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Caja destacada */}
          <div className="mt-8 p-6 rounded-2xl" style={{ backgroundColor: '#0F2D49' }}>
            <div className="text-center">
              <p className="text-white text-lg font-montserrat font-bold mb-2">
                Contenido exclusivo en nuestras redes
              </p>
              <p className="text-white text-sm font-montserrat opacity-90">
                Videos explicativos, casos reales, consejos prácticos y actualizaciones del derecho laboral. 
                Síguenos para no perderte ningún consejo legal.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
