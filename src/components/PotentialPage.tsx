import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";

export function PotentialPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const potentials = [
    {
      title: "KARAPAN SAPI",
      subtitle: "Bull Racing Heritage",
      description: "Experience the thrilling traditional bull racing that has been a Madura heritage for centuries. This iconic sport showcases the speed, strength, and breeding quality of Madura cattle.",
      features: ["Professional Racing Arena", "Annual Championships", "Cultural Performances", "Local Cattle Breeding"],
      image: "https://images.unsplash.com/photo-1603795852953-7e83fcde81a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGN1bHR1cmFsJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzYxNDA2MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "BATIK MADURA",
      subtitle: "Traditional Textile Art",
      description: "Explore our authentic Madura batik collections, handcrafted by local artisans with unique patterns. Each piece tells a story of our cultural heritage and artistic excellence.",
      features: ["Handcrafted Designs", "Natural Dyes", "Master Artisans", "Custom Orders Available"],
      image: "https://images.unsplash.com/photo-1757076952608-4baa9cdf89fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJhdGlrJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NjE0NjI4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "SALT FARMING",
      subtitle: "Traditional Harvesting",
      description: "Witness traditional salt farming methods that have sustained our community for generations. Our farmers use ancient techniques to produce the finest quality sea salt.",
      features: ["Organic Sea Salt", "Traditional Methods", "Sustainable Practices", "Farm Visits Available"],
      image: "https://images.unsplash.com/photo-1695640906882-09f71f129912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWElMjBzYWx0JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjE0NjI4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "BEACH TOURISM",
      subtitle: "Coastal Paradise",
      description: "Relax on pristine beaches with crystal clear waters and stunning coastal views. Perfect for swimming, snorkeling, and enjoying breathtaking sunsets.",
      features: ["Clean Beaches", "Water Sports", "Sunset Views", "Local Seafood"],
      image: "https://images.unsplash.com/photo-1706922123796-788389d6db0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwYmVhY2glMjB0cm9waWNhbHxlbnwxfHx8fDE3NjE0NjI4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "TRADITIONAL CRAFTS",
      subtitle: "Artisan Workshops",
      description: "Learn and participate in traditional craft-making workshops led by master artisans. Discover the art of weaving, pottery, and woodcarving.",
      features: ["Hands-on Workshops", "Expert Instructors", "Authentic Materials", "Take Home Creations"],
      image: "https://images.unsplash.com/photo-1760637626191-fa20283f6fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNyYWZ0JTIwd29ya3Nob3B8ZW58MXx8fHwxNzYxNDYyODYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "CULINARY HERITAGE",
      subtitle: "Traditional Cuisine",
      description: "Taste the authentic flavors of Madura with traditional dishes prepared using centuries-old recipes and fresh local ingredients.",
      features: ["Traditional Recipes", "Cooking Classes", "Farm-to-Table", "Food Tours"],
      image: "https://images.unsplash.com/photo-1545105580-06fbbf96241e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBtYXJrZXR8ZW58MXx8fHwxNzYxNDYyODYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="min-h-screen bg-[#CDDC39]">
      {/* Hero Section */}
      <section className="bg-[#1B3A1A] py-20 md:py-32 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #CDDC39 0px, #CDDC39 10px, transparent 10px, transparent 20px)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white uppercase tracking-wider mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 900, letterSpacing: '3px' }}
          >
            VILLAGE POTENTIAL
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#CDDC39] max-w-3xl mx-auto"
            style={{ fontSize: '20px', lineHeight: '1.7', letterSpacing: '0.5px' }}
          >
            Discover the unique opportunities and attractions that make Desa Ceria special
          </motion.p>
        </div>
      </section>

      {/* Potential Items */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {potentials.map((potential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-lg overflow-hidden shadow-2xl"
                >
                  {/* Decorative border */}
                  <div className="absolute inset-0 border-8 border-white z-10 rounded-lg" />
                  <div className="overflow-hidden">
                    <ImageWithFallback
                      src={potential.image}
                      alt={potential.title}
                      className="w-full h-[400px] object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#1B3A1A]/50 via-transparent to-transparent" />
                </motion.div>
                {/* Decorative corner */}
                <div className={`absolute ${index % 2 === 0 ? '-bottom-4 -right-4' : '-bottom-4 -left-4'} w-32 h-32 bg-[#1B3A1A] opacity-20 rounded-full blur-2xl`} />
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="inline-block bg-[#1B3A1A] text-[#CDDC39] px-4 py-2 rounded-md mb-4"
                    style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '1px' }}
                  >
                    {potential.subtitle}
                  </div>
                  <h2 
                    className="text-[#1B3A1A] uppercase tracking-wider mb-4"
                    style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: '2px' }}
                  >
                    {potential.title}
                  </h2>
                  <p className="text-[#1B3A1A]" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                    {potential.description}
                  </p>
                  <ul className="space-y-3 mt-6">
                    {potential.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + (idx * 0.1) }}
                        className="flex items-center gap-3 text-[#1B3A1A]"
                      >
                        <div className="w-2 h-2 bg-[#1B3A1A] rounded-full" />
                        <span style={{ fontSize: '15px', fontWeight: 600 }}>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-[#1B3A1A] text-white px-8 py-4 rounded-md hover:bg-[#2d5c2a] transition-colors shadow-lg"
                    style={{ fontSize: '16px', fontWeight: 900, letterSpacing: '0.5px' }}
                  >
                    EXPLORE MORE
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
