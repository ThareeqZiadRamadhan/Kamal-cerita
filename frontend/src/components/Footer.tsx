import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1B3A1A] text-white py-16 relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, #CDDC39 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 
              className="uppercase tracking-wide"
              style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '1px' }}
            >
              DESA CERIA
            </h3>
            <p className="text-white/80" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              Discover the authentic charm of Madura through rich culture, 
              traditional crafts, and stunning landscapes.
            </p>
          </motion.div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 
              className="uppercase tracking-wide text-[#CDDC39]"
              style={{ fontSize: '16px', fontWeight: 900, letterSpacing: '0.5px' }}
            >
              QUICK LINKS
            </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-white/80 hover:text-[#CDDC39] transition-colors" style={{ fontSize: '14px' }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/80 hover:text-[#CDDC39] transition-colors" style={{ fontSize: '14px' }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/potential" className="text-white/80 hover:text-[#CDDC39] transition-colors" style={{ fontSize: '14px' }}>
                    Village Potential
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-white/80 hover:text-[#CDDC39] transition-colors" style={{ fontSize: '14px' }}>
                    Latest News
                  </Link>
                </li>
              </ul>
            </div>

          {/* Destinations */}
          <div className="space-y-4">
            <h4 
              className="uppercase tracking-wide text-[#CDDC39]"
              style={{ fontSize: '16px', fontWeight: 900, letterSpacing: '0.5px' }}
            >
              DESTINATIONS
            </h4>
            <ul className="space-y-2">
              <li className="text-white/80" style={{ fontSize: '14px' }}>Karapan Sapi Arena</li>
              <li className="text-white/80" style={{ fontSize: '14px' }}>Batik Exhibition Center</li>
              <li className="text-white/80" style={{ fontSize: '14px' }}>Salt Farming Fields</li>
              <li className="text-white/80" style={{ fontSize: '14px' }}>Beach Tourism</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 
              className="uppercase tracking-wide text-[#CDDC39]"
              style={{ fontSize: '16px', fontWeight: 900, letterSpacing: '0.5px' }}
            >
              CONTACT US
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/80" style={{ fontSize: '14px' }}>
                <MapPin size={18} className="shrink-0 mt-1" />
                <span>Desa Ceria, Banyuajuh, Madura, Indonesia</span>
              </li>
              <li className="flex items-center gap-2 text-white/80" style={{ fontSize: '14px' }}>
                <Phone size={18} />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-2 text-white/80" style={{ fontSize: '14px' }}>
                <Mail size={18} />
                <span>info@desaceria.id</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 pt-4">
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="text-white hover:text-[#CDDC39] transition-colors"
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="text-white hover:text-[#CDDC39] transition-colors"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="text-white hover:text-[#CDDC39] transition-colors"
              >
                <Twitter size={24} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8 text-center">
          <p className="text-white/60" style={{ fontSize: '14px' }}>
            © 2025 Desa Ceria - Cerita Banyuajuh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
