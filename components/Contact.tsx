'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
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
    <section id="contact" className="section-padding" style={{ backgroundColor: '#1a1a1a' }}>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative font-cinzel font-bold" style={{ color: '#BFBFBA' }}>
              Estamos online y respondemos rápido
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-[#BFBFBA] rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 font-cinzel font-bold" style={{ color: '#1a1a1a' }}>
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-[#1a1a1a] mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#1a1a1a] font-cinzel font-bold">Ubicación y Horario</h4>
                      <p className="text-[#1a1a1a] font-montserrat font-semibold">
                        Atención virtual. Defendemos tanto en CABA, como en la provincia de Buenos Aires. 
                        Horario de contacto: lunes a viernes de 9 a 17 h.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-[#1a1a1a] mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#1a1a1a] font-cinzel font-bold">Email</h4>
                      <p className="text-[#1a1a1a] font-montserrat font-semibold">analiacitera@yahoo.com.ar</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-[#1a1a1a] mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#1a1a1a] font-cinzel font-bold">Teléfono</h4>
                      <p className="text-[#1a1a1a] font-montserrat font-semibold">+54 9 11 5318-9897</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-[#1a1a1a] mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#1a1a1a] font-cinzel font-bold">Horario de Atención</h4>
                      <p className="text-[#1a1a1a] font-montserrat font-semibold">Lunes a Viernes: 9:00 - 17:00</p>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-[#BFBFBA] border border-gray-300 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 font-cinzel font-bold" style={{ color: '#1a1a1a' }}>
                  Contactar
                </h3>
                
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#1a1a1a] mb-2 font-montserrat font-semibold">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-colors"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-colors"
                        placeholder="+54 11 1234-5678"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                        Tipo de Asesoramiento *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-colors"
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
                    <label htmlFor="message" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-colors resize-none"
                      placeholder="Cuéntanos brevemente tu situación..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-transparent text-[#1a1a1a] border-2 border-[#1a1a1a] font-semibold py-3 px-6 rounded-3xl hover:bg-[#1a1a1a] hover:text-[#BFBFBA] transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensaje</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
