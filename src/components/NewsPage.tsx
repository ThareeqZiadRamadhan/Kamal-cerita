import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

export function NewsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const allNews = [
    {
      title: "ANNUAL KARAPAN SAPI CHAMPIONSHIP 2025",
      date: "November 15, 2025",
      location: "Desa Ceria Main Arena",
      attendees: "5000+ Expected",
      description: "The most anticipated event of the year! Watch as the finest Madura bulls compete in this traditional racing competition. Experience the thrill, culture, and excitement of this centuries-old tradition.",
      image: "https://images.unsplash.com/photo-1603795852953-7e83fcde81a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGN1bHR1cmFsJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzYxNDA2MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Festival"
    },
    {
      title: "BATIK WORKSHOP WITH MASTER ARTISANS",
      date: "December 1, 2025",
      location: "Cultural Center Banyuajuh",
      attendees: "Limited to 50 participants",
      description: "Learn the intricate art of traditional Madura batik from master craftsmen. This hands-on workshop covers traditional techniques, pattern designs, and natural dyeing methods.",
      image: "https://images.unsplash.com/photo-1757076952608-4baa9cdf89fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJhdGlrJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NjE0NjI4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Workshop"
    },
    {
      title: "TRADITIONAL SALT HARVEST FESTIVAL",
      date: "October 20, 2025",
      location: "Coastal Salt Fields",
      attendees: "Open to All",
      description: "Celebrate the salt harvesting season with traditional ceremonies, demonstrations of ancient farming techniques, and taste the finest sea salt produced by local farmers.",
      image: "https://images.unsplash.com/photo-1695640906882-09f71f129912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWElMjBzYWx0JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjE0NjI4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Festival"
    },
    {
      title: "COASTAL CLEAN-UP & BEACH FESTIVAL",
      date: "November 5, 2025",
      location: "Banyuajuh Beach",
      attendees: "Community Event",
      description: "Join us in preserving our beautiful coastline! Morning beach clean-up followed by cultural performances, traditional games, and local food festival.",
      image: "https://images.unsplash.com/photo-1706922123796-788389d6db0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwYmVhY2glMjB0cm9waWNhbHxlbnwxfHx8fDE3NjE0NjI4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Community"
    },
    {
      title: "MADURA CULINARY FESTIVAL",
      date: "December 10, 2025",
      location: "Village Square",
      attendees: "Food Lovers Welcome",
      description: "Savor the authentic flavors of Madura cuisine. From sate to soto, experience traditional dishes prepared by local chefs using time-honored recipes and fresh ingredients.",
      image: "https://images.unsplash.com/photo-1545105580-06fbbf96241e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBtYXJrZXR8ZW58MXx8fHwxNzYxNDYyODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Food"
    },
    {
      title: "TRADITIONAL CRAFT EXHIBITION",
      date: "November 25, 2025",
      location: "Desa Ceria Museum",
      attendees: "Open to Public",
      description: "Showcase of traditional Madura crafts including weaving, pottery, and woodcarving. Meet the artisans and purchase authentic handmade products.",
      image: "https://images.unsplash.com/photo-1760637626191-fa20283f6fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNyYWZ0JTIwd29ya3Nob3B8ZW58MXx8fHwxNzYxNDYyODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Exhibition"
    }
  ];

  return (
    <div className="min-h-screen bg-[#CDDC39]">
      {/* Hero Section */}
      <section className="bg-[#1B3A1A] py-20 md:py-32 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
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
            backgroundSize: '50px 50px',
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
            {allNews.map((item, index) => (
              <motion.div
                key={index}
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
                      <span style={{ fontSize: '14px' }}>{item.date}</span>
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
                  <p className="text-gray-700" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                  <button className="w-full bg-[#1B3A1A] text-white py-3 rounded-md hover:bg-[#2d5c2a] transition-colors"
                    style={{ fontWeight: 700, letterSpacing: '0.5px' }}
                  >
                    LEARN MORE
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
