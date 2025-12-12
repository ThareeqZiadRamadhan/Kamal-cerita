import { Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface NewsItem {
  title: string;
  date: string;
  image: string;
}

interface NewsSectionProps {
  news: NewsItem[];
}

export function NewsSection({ news }: NewsSectionProps) {
  return (
    <section id="news" className="bg-[#1B3A1A] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          data-aos="fade-down"
          className="text-white text-center mb-12 uppercase tracking-wider"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: '2px' }}
        >
          LATEST NEWS & EVENTS
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div 
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 100}
              className="bg-[#2d5c2a] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
            >
              <div className="overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-[#CDDC39]">
                  <Calendar size={18} />
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>{item.date}</span>
                </div>
                <h3 
                  className="text-white uppercase tracking-wide"
                  style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '0.5px' }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
