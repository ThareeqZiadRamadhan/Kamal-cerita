import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "./ui/button"; 
import toast from 'react-hot-toast'; // ✅ 1. Import Toast Library

export function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  // 1. STATE FORM
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  // 2. HANDLE INPUT CHANGE
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. HANDLE SUBMIT (Updated with Custom Toast)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const submitPromise = new Promise((resolve, reject) => {
      (async () => {
        try {
          const res = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });

          if (res.ok) {
            // Reset form jika sukses
            setFormData({ name: "", email: "", phone: "", message: "" }); 
            resolve("Success");
          } else {
            reject("Failed");
          }
        } catch {
          reject("Network Error");
        }
      })();
    });

    // 🔥 Panggil Toast Promise
    // Style (Warna Lime & Dark Green) akan otomatis ikut settingan di App.tsx
    await toast.promise(submitPromise, {
      loading: 'SENDING YOUR MESSAGE...',
      success: 'MESSAGE SENT SUCCESSFULLY!',
      error: 'FAILED TO SEND MESSAGE.',
    });

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#CDDC39]">
      {/* Hero Section */}
      <section className="bg-[#1B3A1A] py-20 md:py-32 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'linear-gradient(45deg, transparent 25%, #CDDC39 25%, #CDDC39 50%, transparent 50%, transparent 75%, #CDDC39 75%, #CDDC39)',
            backgroundSize: '60px 60px', opacity: 0.05,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-white uppercase tracking-wider mb-6 text-4xl md:text-6xl font-black">
            GET IN TOUCH
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#CDDC39] max-w-3xl mx-auto text-xl">
            We'd love to hear from you! Reach out for inquiries, bookings, or just to say hello
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* --- CONTACT FORM --- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              className="bg-white rounded-lg p-8 shadow-2xl"
            >
              <h2 className="text-[#1B3A1A] uppercase tracking-wider mb-6 text-2xl md:text-4xl font-black">
                SEND US A MESSAGE
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#1B3A1A] mb-2 font-bold text-sm">YOUR NAME *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#1B3A1A] outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-[#1B3A1A] mb-2 font-bold text-sm">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#1B3A1A] outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[#1B3A1A] mb-2 font-bold text-sm">PHONE NUMBER</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#1B3A1A] outline-none"
                    placeholder="+62 xxx xxxx xxxx"
                  />
                </div>
                <div>
                  <label className="block text-[#1B3A1A] mb-2 font-bold text-sm">MESSAGE *</label>
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#1B3A1A] outline-none resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-[#1B3A1A] text-white hover:bg-[#2d5c2a] py-4 rounded-md flex items-center justify-center gap-2 font-black tracking-wide"
                  >
                    {loading ? "SENDING..." : (
                      <>
                        <Send size={20} /> SEND MESSAGE
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* --- CONTACT INFORMATION --- */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-lg p-8 shadow-2xl">
                <h2 className="text-[#1B3A1A] uppercase tracking-wider mb-6 text-2xl md:text-4xl font-black">CONTACT INFO</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#CDDC39] p-3 rounded-lg"><MapPin size={24} className="text-[#1B3A1A]" /></div>
                    <div>
                      <h3 className="text-[#1B3A1A] font-black mb-1">ADDRESS</h3>
                      <p className="text-gray-700">Banyuajuh<br />Kamal, Bangkalan<br />Madura, East Java, Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#CDDC39] p-3 rounded-lg"><Phone size={24} className="text-[#1B3A1A]" /></div>
                    <div>
                      <h3 className="text-[#1B3A1A] font-black mb-1">PHONE</h3>
                      <p className="text-gray-700">+62 812 3456 7890<br />+62 813 9876 5432</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#CDDC39] p-3 rounded-lg"><Mail size={24} className="text-[#1B3A1A]" /></div>
                    <div>
                      <h3 className="text-[#1B3A1A] font-black mb-1">EMAIL</h3>
                      <p className="text-gray-700">info@kamal.id<br />tourism@Banyuajuh.id</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-2xl">
                <h2 className="text-[#1B3A1A] uppercase tracking-wider mb-6 text-xl md:text-2xl font-black">FOLLOW US</h2>
                <div className="flex gap-4">
                  <a href="#" className="bg-[#CDDC39] p-4 rounded-lg hover:bg-[#1B3A1A] hover:text-[#CDDC39] transition-colors"><Instagram size={28} /></a>
                  <a href="#" className="bg-[#CDDC39] p-4 rounded-lg hover:bg-[#1B3A1A] hover:text-[#CDDC39] transition-colors"><Facebook size={28} /></a>
                  <a href="#" className="bg-[#CDDC39] p-4 rounded-lg hover:bg-[#1B3A1A] hover:text-[#CDDC39] transition-colors"><Youtube size={28} /></a>
                </div>
              </div>

              <div className="bg-[#1B3A1A] rounded-lg p-8 shadow-2xl">
                <h2 className="text-white uppercase tracking-wider mb-6 text-xl md:text-2xl font-black">BUSINESS HOURS</h2>
                <div className="space-y-3 text-white/90 text-sm">
                  <div className="flex justify-between"><span>Monday - Friday</span><span className="font-bold">08:00 - 17:00</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="font-bold">08:00 - 15:00</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="font-bold">09:00 - 14:00</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white rounded-lg p-8 shadow-2xl">
            <h2 className="text-[#1B3A1A] uppercase tracking-wider mb-6 text-center text-2xl md:text-4xl font-black">FIND US ON MAP</h2>
            <div className="bg-gray-200 rounded-lg h-[400px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7917.445617336976!2d112.71130137770994!3d-7.1580115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd803ce3989025b%3A0x83ee2a47f75acde!2sBalai%20RW%20VI%20Perumnas%20Kamal!5e0!3m2!1sid!2sid!4v1761551241444!5m2!1sid!2sid" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}