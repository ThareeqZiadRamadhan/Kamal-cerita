import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";


export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const galleryImages = [
    { 
      category: "people",
      title: "Village Leaders",
      description: "Traditional Madura community leaders"
    },
    {
      category: "people",
      title: "Community Gathering",
      description: "Women's cooperative meeting"
    },
    {
      src: "https://images.unsplash.com/photo-1635183067334-c0dbdac46c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWR1cmElMjBjYXR0bGUlMjBpbmRvbmVzaWF8ZW58MXx8fHwxNzYxNDY0MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "culture",
      title: "Madura Cattle",
      description: "Traditional cattle raising"
    },
    {
      src: "https://images.unsplash.com/photo-1603795852953-7e83fcde81a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGN1bHR1cmFsJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzYxNDA2MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "culture",
      title: "Karapan Sapi",
      description: "Bull racing festival"
    },
    {
      src: "https://images.unsplash.com/photo-1757076952608-4baa9cdf89fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJhdGlrJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NjE0NjI4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "crafts",
      title: "Batik Artisan",
      description: "Traditional batik making"
    },
    {
      src: "https://images.unsplash.com/photo-1695640906882-09f71f129912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWElMjBzYWx0JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjE0NjI4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "nature",
      title: "Salt Fields",
      description: "Traditional salt farming"
    },
    {
      src: "https://images.unsplash.com/photo-1706922123796-788389d6db0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwYmVhY2glMjB0cm9waWNhbHxlbnwxfHx8fDE3NjE0NjI4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "nature",
      title: "Coastal Beauty",
      description: "Pristine Madura beaches"
    },
    {
      src: "https://images.unsplash.com/photo-1760637626191-fa20283f6fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNyYWZ0JTIwd29ya3Nob3B8ZW58MXx8fHwxNzYxNDYyODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "crafts",
      title: "Craft Workshop",
      description: "Traditional weaving"
    },
    {
      src: "https://images.unsplash.com/photo-1545105580-06fbbf96241e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBtYXJrZXR8ZW58MXx8fHwxNzYxNDYyODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "culture",
      title: "Local Market",
      description: "Traditional marketplace"
    },
    {
      src: "https://images.unsplash.com/photo-1720238281684-63c61ad01d3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nfGVufDF8fHx8MTc2MTQ2Mjg2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "people",
      title: "Village Life",
      description: "Daily community activities"
    },
    {
      src: "https://images.unsplash.com/photo-1722635941018-a9e7de0a5b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZhYnJpYyUyMHRleHRpbGV8ZW58MXx8fHwxNzYxNDYyODYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "crafts",
      title: "Traditional Textiles",
      description: "Handwoven fabrics"
    },
    {
      src: "https://images.unsplash.com/photo-1699752645940-b4863a76ae86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZlc3RpdmFsJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYxNDY0MDMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "culture",
      title: "Festival Celebration",
      description: "Traditional ceremonies"
    }
  ];

  const categories = ["all", "people", "culture", "crafts", "nature"];

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-[#CDDC39]">
      {/* Hero Section */}
      <section className="bg-[#1B3A1A] py-20 md:py-32 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, #CDDC39 2px, transparent 2px)',
            backgroundSize: '40px 40px',
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
            PHOTO GALLERY
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#CDDC39] max-w-3xl mx-auto"
            style={{ fontSize: '20px', lineHeight: '1.7', letterSpacing: '0.5px' }}
          >
            Explore the vibrant life and rich culture of Desa Ceria through our lens
          </motion.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 sticky top-20 z-40 bg-[#CDDC39]/95 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-md uppercase transition-all ${
                  filter === category
                    ? 'bg-[#1B3A1A] text-white shadow-lg'
                    : 'bg-white text-[#1B3A1A] hover:bg-gray-100'
                }`}
                style={{ fontWeight: 900, letterSpacing: '0.5px', fontSize: '14px' }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative aspect-square overflow-hidden bg-white border-4 border-white">
                    <ImageWithFallback
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-trom-[#1B3A1A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="uppercase" style={{ fontWeight: 900, fontSize: '16px', letterSpacing: '0.5px' }}>
                          {image.title}
                        </h3>
                        <p style={{ fontSize: '13px' }}>{image.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-[#CDDC39] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="uppercase mb-2" style={{ fontWeight: 900, fontSize: '24px', letterSpacing: '1px' }}>
                  {filteredImages[selectedImage].title}
                </h3>
                <p style={{ fontSize: '16px' }}>{filteredImages[selectedImage].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
