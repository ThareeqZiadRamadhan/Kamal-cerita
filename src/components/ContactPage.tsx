import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "./ui/button";

export function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#CDDC39]">
      {/* Hero Section */}
      <section className="bg-[#1B3A1A] py-20 md:py-32 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'linear-gradient(45deg, transparent 25%, #CDDC39 25%, #CDDC39 50%, transparent 50%, transparent 75%, #CDDC39 75%, #CDDC39)',
            backgroundSize: '60px 60px',
            opacity: 0.05,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white uppercase tracking-wider mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 900, letterSpacing: '3px' }}
          >
            GET IN TOUCH
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#CDDC39] max-w-3xl mx-auto"
            style={{ fontSize: '20px', lineHeight: '1.7', letterSpacing: '0.5px' }}
          >
            We'd love to hear from you! Reach out for inquiries, bookings, or just to say hello
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg p-8 shadow-2xl"
            >
              <h2 
                className="text-[#1B3A1A] uppercase tracking-wider mb-6"
                style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, letterSpacing: '1.5px' }}
              >
                SEND US A MESSAGE
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-[#1B3A1A] mb-2" style={{ fontWeight: 700, fontSize: '14px' }}>
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#1B3A1A] focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-[#1B3A1A] mb-2" style={{ fontWeight: 700, fontSize: '14px' }}>
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#1B3A1A] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[#1B3A1A] mb-2" style={{ fontWeight: 700, fontSize: '14px' }}>
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#1B3A1A] focus:outline-none transition-colors"
                    placeholder="+62 xxx xxxx xxxx"
                  />
                </div>
                <div>
                  <label className="block text-[#1B3A1A] mb-2" style={{ fontWeight: 700, fontSize: '14px' }}>
                    MESSAGE *
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#1B3A1A] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    className="w-full bg-[#1B3A1A] text-white hover:bg-[#2d5c2a] py-4 rounded-md flex items-center justify-center gap-2"
                    style={{ fontSize: '16px', fontWeight: 900, letterSpacing: '1px' }}
                  >
                    <Send size={20} />
                    SEND MESSAGE
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-lg p-8 shadow-2xl">
                <h2 
                  className="text-[#1B3A1A] uppercase tracking-wider mb-6"
                  style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, letterSpacing: '1.5px' }}
                >
                  CONTACT INFO
                </h2>
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-[#CDDC39] p-3 rounded-lg">
                      <MapPin size={24} className="text-[#1B3A1A]" />
                    </div>
                    <div>
                      <h3 className="text-[#1B3A1A]" style={{ fontWeight: 900, fontSize: '16px', marginBottom: '4px' }}>
                        ADDRESS
                      </h3>
                      <p className="text-gray-700" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                        Desa Ceria, Banyuajuh<br />
                        Kamal, Bangkalan<br />
                        Madura, East Java, Indonesia
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-[#CDDC39] p-3 rounded-lg">
                      <Phone size={24} className="text-[#1B3A1A]" />
                    </div>
                    <div>
                      <h3 className="text-[#1B3A1A]" style={{ fontWeight: 900, fontSize: '16px', marginBottom: '4px' }}>
                        PHONE
                      </h3>
                      <p className="text-gray-700" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                        +62 812 3456 7890<br />
                        +62 813 9876 5432
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-[#CDDC39] p-3 rounded-lg">
                      <Mail size={24} className="text-[#1B3A1A]" />
                    </div>
                    <div>
                      <h3 className="text-[#1B3A1A]" style={{ fontWeight: 900, fontSize: '16px', marginBottom: '4px' }}>
                        EMAIL
                      </h3>
                      <p className="text-gray-700" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                        info@desaceria.id<br />
                        tourism@desaceria.id
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg p-8 shadow-2xl">
                <h2 
                  className="text-[#1B3A1A] uppercase tracking-wider mb-6"
                  style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 900, letterSpacing: '1.5px' }}
                >
                  FOLLOW US
                </h2>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="bg-[#CDDC39] p-4 rounded-lg hover:bg-[#1B3A1A] transition-colors group"
                  >
                    <Instagram size={28} className="text-[#1B3A1A] group-hover:text-[#CDDC39]" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="bg-[#CDDC39] p-4 rounded-lg hover:bg-[#1B3A1A] transition-colors group"
                  >
                    <Facebook size={28} className="text-[#1B3A1A] group-hover:text-[#CDDC39]" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="bg-[#CDDC39] p-4 rounded-lg hover:bg-[#1B3A1A] transition-colors group"
                  >
                    <Youtube size={28} className="text-[#1B3A1A] group-hover:text-[#CDDC39]" />
                  </motion.a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-[#1B3A1A] rounded-lg p-8 shadow-2xl">
                <h2 
                  className="text-white uppercase tracking-wider mb-6"
                  style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 900, letterSpacing: '1.5px' }}
                >
                  BUSINESS HOURS
                </h2>
                <div className="space-y-3 text-white/90" style={{ fontSize: '15px' }}>
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span style={{ fontWeight: 700 }}>08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span style={{ fontWeight: 700 }}>08:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span style={{ fontWeight: 700 }}>09:00 - 14:00</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg p-8 shadow-2xl"
          >
            <h2 
              className="text-[#1B3A1A] uppercase tracking-wider mb-6 text-center"
              style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, letterSpacing: '1.5px' }}
            >
              FIND US ON MAP
            </h2>
        <div className="bg-gray-200 rounded-lg h-[400px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7917.445617336976!2d112.71130137770994!3d-7.1580115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd803ce3989025b%3A0x83ee2a47f75acde!2sBalai%20RW%20VI%20Perumnas%20Kamal!5e0!3m2!1sid!2sid!4v1761551241444!5m2!1sid!2sid" // <-- Ini adalah src yang Anda berikan
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
