import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// 1. Interface sesuai Database
interface PotentialItem {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  details?: string; // Data untuk pop-up
}

export function PotentialPage() {
  const [potentials, setPotentials] = useState<PotentialItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<PotentialItem | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });

    // 2. Fetch Data dari API Backend
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/potential-page');
        const data = await res.json();
        setPotentials(data);
        setLoading(false);
      } catch (err) {
        console.error("Gagal load data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="min-h-screen bg-[#CDDC39] flex items-center justify-center font-bold">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#CDDC39]">
      {/* Hero Section */}
      <section className="bg-[#1B3A1A] py-20 md:py-32 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #CDDC39 0px, #CDDC39 10px, transparent 10px, transparent 20px)' }}
        />
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white uppercase tracking-wider mb-6 text-4xl md:text-6xl font-black"
          >
            VILLAGE POTENTIAL
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#CDDC39] max-w-3xl mx-auto text-xl"
          >
            Discover the unique opportunities and attractions that make Desa Ceria special
          </motion.p>
        </div>
      </section>

      {/* List Items dari Database */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {potentials.map((potential, index) => (
            <motion.div
              key={potential._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <motion.div whileHover={{ scale: 1.05 }} className="relative rounded-lg overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 border-8 border-white z-10 rounded-lg" />
                  <ImageWithFallback
                    src={potential.image}
                    alt={potential.title}
                    className="w-full h-[400px] object-cover"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <div>
                  <div className="inline-block bg-[#1B3A1A] text-[#CDDC39] px-4 py-2 rounded-md mb-4 font-black text-sm tracking-widest">
                    {potential.subtitle}
                  </div>
                  <h2 className="text-[#1B3A1A] uppercase tracking-wider mb-4 text-3xl md:text-5xl font-black">
                    {potential.title}
                  </h2>
                  <p className="text-[#1B3A1A] text-lg leading-relaxed">
                    {potential.description}
                  </p>
                  
                  <ul className="space-y-3 mt-6">
                    {potential.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[#1B3A1A]">
                        <div className="w-2 h-2 bg-[#1B3A1A] rounded-full" />
                        <span className="font-semibold">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Trigger Modal */}
                  <motion.button
                    onClick={() => setSelectedItem(potential)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-[#1B3A1A] text-white px-8 py-4 rounded-md hover:bg-[#2d5c2a] transition-colors shadow-lg font-black tracking-wide"
                  >
                    EXPLORE MORE
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="bg-white rounded-xl overflow-hidden max-w-3xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-red-100 transition z-10"
              >
                <X size={24} />
              </button>

              <div className="h-64 w-full relative">
                 <ImageWithFallback src={selectedItem.image} className="w-full h-full object-cover" alt={selectedItem.title} />
                 <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 pt-20">
                    <h3 className="text-white text-3xl font-black uppercase">{selectedItem.title}</h3>
                 </div>
              </div>

              <div className="p-8 space-y-6">
                 <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-[#1B3A1A] pl-4">
                    {selectedItem.description}
                 </p>
                 
                 {selectedItem.details && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold text-[#1B3A1A] mb-2 uppercase">More Details</h4>
                        <p className="text-gray-600">{selectedItem.details}</p>
                    </div>
                 )}

                 <button onClick={() => setSelectedItem(null)} className="w-full bg-[#1B3A1A] text-white py-3 rounded-lg font-bold hover:bg-[#2d5c2a] transition">
                    CLOSE
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}