import { Landmark, Palette, Waves } from "lucide-react";

export function FeatureBanner() {
  const features = [
    {
      icon: <Landmark size={48} />,
      title: "CULTURAL RICHES",
      description: "Villages with unique traditions and heritage"
    },
    {
      icon: <Palette size={48} />,
      title: "AUTHENTIC LOCAL PRODUCTS",
      description: "Batik, Salt, and Traditional Cuisine"
    },
    {
      icon: <Waves size={48} />,
      title: "THE NATURAL CHARM OF MADURA",
      description: "Marine & Agro Tourism"
    }
  ];

  return (
    <section className="bg-[#1B3A1A] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          data-aos="fade-down"
          className="text-white text-center mb-12 uppercase tracking-wider"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: '2px' }}
        >
          WHAT YOU CAN FIND
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="text-center space-y-4 p-6 rounded-lg border-2 border-[#CDDC39] hover:bg-[#2d5c2a] transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex justify-center text-[#CDDC39] transform hover:rotate-12 transition-transform">
                {feature.icon}
              </div>
              <h3 
                className="text-white uppercase tracking-wide"
                style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '1px' }}
              >
                {feature.title}
              </h3>
              <p className="text-white/90" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
