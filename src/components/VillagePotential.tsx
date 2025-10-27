import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Potential {
  title: string;
  description: string;
  image: string;
}

interface VillagePotentialProps {
  potentials: Potential[];
}

export function VillagePotential({ potentials }: VillagePotentialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + slidesToShow >= potentials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, potentials.length - slidesToShow) : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="potential" className="bg-[#CDDC39] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 
            data-aos="fade-right"
            className="text-[#1B3A1A] uppercase tracking-wider"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: '2px' }}
          >
            EXPLORE THE POTENTIAL OF THE VILLAGE
          </h2>
          
          <div className="hidden md:flex gap-2">
            <button
              onClick={prevSlide}
              className="bg-[#1B3A1A] text-white p-3 rounded-md hover:bg-[#2d5c2a] transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#1B3A1A] text-white p-3 rounded-md hover:bg-[#2d5c2a] transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` 
            }}
          >
            {potentials.map((potential, index) => (
              <div 
                key={index} 
                className="shrink-0 px-3"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full hover:shadow-2xl transition-all hover:scale-105">
                  <div className="overflow-hidden">
                    <ImageWithFallback
                      src={potential.image}
                      alt={potential.title}
                      className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 
                      className="text-[#1B3A1A] uppercase tracking-wide"
                      style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '0.5px' }}
                    >
                      {potential.title}
                    </h3>
                    <p className="text-gray-700" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                      {potential.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(potentials.length / slidesToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * slidesToShow)}
              className={`w-3 h-3 rounded-full transition-all ${
                Math.floor(currentIndex / slidesToShow) === index 
                  ? 'bg-[#1B3A1A] w-8' 
                  : 'bg-[#1B3A1A]/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
