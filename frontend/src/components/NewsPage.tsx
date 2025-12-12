import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImageWithFallback } from "./figma/ImageWithFallback"; 
import { Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

interface NewsItem {
  _id: string;
  title: string;
  slug: string;
  date: string;
  location: string;
  attendees: string;
  description: string;
  image: string;
  category: string;
  content?: string; // Tanda tanya artinya opsional (mungkin ada mungkin ngga)
}

export function NewsPage() {
  // 2. GUNAKAN INTERFACE DI USESTATE
  // Artinya: "Variable ini adalah Array yang isinya objek NewsItem"
  const [newsData, setNewsData] = useState<NewsItem[]>([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/news');
        const data = await response.json();
        setNewsData(data);
        setLoading(false);
      } catch (error) {
        console.error("Gagal ambil data:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Tampilan Loading sederhana
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-[#CDDC39] text-[#1B3A1A] font-bold text-xl">Loading Events...</div>;
  }

  return (
    <div className="min-h-screen bg-[#CDDC39]">
      {/* Hero Section - TETAP SAMA */}
      <section className="bg-[#1B3A1A] py-20 md:py-32 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{ backgroundImage: 'radial-gradient(circle, #CDDC39 1px, transparent 1px)', backgroundSize: '50px 50px' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white uppercase tracking-wider mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 900, letterSpacing: '3px' }}
          >
            LATEST NEWS & EVENTS
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-[#CDDC39] max-w-3xl mx-auto"
             style={{ fontSize: '20px', lineHeight: '1.7', letterSpacing: '0.5px' }}
          >
            Stay updated with all the exciting events and happenings in Desa Ceria
          </motion.p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 3. LOOPING DATA DARI DATABASE */}
            {newsData.map((item, index) => (
              <motion.div
                key={item._id} // MongoDB pakai _id
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#CDDC39] text-[#1B3A1A] px-4 py-2 rounded-md shadow-md"
                    style={{ fontWeight: 900, fontSize: '12px', letterSpacing: '0.5px' }}
                  >
                    {item.category}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 
                    className="text-[#1B3A1A] uppercase tracking-wide"
                    style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '0.5px' }}
                  >
                    {item.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      {/* Format Tanggal */}
                      <span style={{ fontSize: '14px' }}>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} />
                      <span style={{ fontSize: '14px' }}>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={16} />
                      <span style={{ fontSize: '14px' }}>{item.attendees}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 line-clamp-3" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                  
                  {/* TOMBOL LINK KE DETAIL */}
                  <Link to={`/news/${item.slug}`} className="block w-full">
                    <button className="w-full bg-[#1B3A1A] text-white py-3 rounded-md hover:bg-[#2d5c2a] transition-colors"
                      style={{ fontWeight: 700, letterSpacing: '0.5px' }}
                    >
                      LEARN MORE
                    </button>
                  </Link>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}