import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="home" className="bg-[#CDDC39] py-16 md:py-24 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#1B3A1A] opacity-5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1B3A1A] opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#1B3A1A] uppercase tracking-wider leading-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, letterSpacing: '2px' }}
            >
              WELCOME TO DESA CERIA
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#1B3A1A] uppercase tracking-wide"
              style={{ fontSize: 'clamp(24px, 3vw, 42px)', fontWeight: 900, letterSpacing: '1.5px' }}
            >
              FEEL THE ENERGY OF MADURA!
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#1B3A1A] max-w-lg" 
              style={{ fontSize: '16px', lineHeight: '1.7', letterSpacing: '0.3px' }}
            >
              Discover the authentic charm of Madura through our rich cultural heritage, 
              traditional crafts, and stunning natural landscapes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                className="bg-[#1B3A1A] text-white hover:bg-[#2d5c2a] px-8 py-6 rounded-md mt-4 hover:scale-105 transition-all shadow-lg hover:shadow-2xl"
                style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '1px' }}
              >
                EXPLORE NOW
              </Button>
            </motion.div>
          </div>

          {/* Right Image with Decorative Frames */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* Top Right Decorative Frame - like painting */}
            <motion.div 
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-6 -right-6 w-40 h-40 z-10"
            >
              <div className="w-full h-full border-t-8 border-r-8 border-[#1B3A1A] rounded-tr-2xl" />
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#CDDC39] opacity-50 rounded-full blur-xl" />
            </motion.div>
            
            {/* Bottom Left Decorative Frame - like painting */}
            <motion.div 
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 w-40 h-40 z-10"
            >
              <div className="w-full h-full border-b-8 border-l-8 border-[#1B3A1A] rounded-bl-2xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#CDDC39] opacity-50 rounded-full blur-xl" />
            </motion.div>
            
            {/* Main Image Container with border like screenshot */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-8 border-white transform hover:scale-105 transition-transform duration-500">
              <ImageWithFallback
                src={heroImage}
                alt="Madura Bull - Symbol of Strength"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1B3A1A]/40 via-transparent to-transparent" />
            </div>

            {/* Animated decorative elements */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 right-10 w-24 h-24 bg-[#ff1493] opacity-20 rounded-full blur-2xl"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-10 left-10 w-32 h-32 bg-[#1B3A1A] opacity-10 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
