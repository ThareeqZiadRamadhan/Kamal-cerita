import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LifestyleSectionProps {
  image: string;
}

export function LifestyleSection({ image }: LifestyleSectionProps) {
  return (
    <section className="bg-[#CDDC39] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          data-aos="zoom-in"
          className="rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow"
        >
          <div className="overflow-hidden">
            <ImageWithFallback
              src={image}
              alt="Village Life"
              className="w-full h-[400px] md:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
        
        <div className="mt-8 text-center max-w-3xl mx-auto">
          <h2 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[#1B3A1A] uppercase tracking-wider mb-4"
            style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, letterSpacing: '1.5px' }}
          >
            EXPERIENCE AUTHENTIC MADURA
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-[#1B3A1A]" 
            style={{ fontSize: '16px', lineHeight: '1.7', letterSpacing: '0.3px' }}
          >
            Immerse yourself in the vibrant culture and warm hospitality of our village community. 
            From traditional crafts to stunning landscapes, every moment tells a story.
          </p>
        </div>
      </div>
    </section>
  );
}
