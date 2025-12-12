import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Heart, Award, Target } from "lucide-react";

export function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const values = [
    {
      icon: <Heart size={40} />,
      title: "AUTHENTICITY",
      description: "We preserve and celebrate the genuine Madura culture and traditions."
    },
    {
      icon: <Users size={40} />,
      title: "COMMUNITY",
      description: "Our village thrives on unity, cooperation, and mutual support."
    },
    {
      icon: <Award size={40} />,
      title: "EXCELLENCE",
      description: "We strive for the highest quality in our crafts and services."
    },
    {
      icon: <Target size={40} />,
      title: "SUSTAINABILITY",
      description: "We protect our environment and traditions for future generations."
    }
  ];

  return (
    <div className="min-h-screen bg-[#CDDC39]">
      {/* Hero Section */}
      <section className="bg-[#1B3A1A] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            data-aos="fade-down"
            className="text-white uppercase tracking-wider mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 900, letterSpacing: '3px' }}
          >
            ABOUT DESA CERIA
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[#CDDC39] max-w-3xl mx-auto"
            style={{ fontSize: '20px', lineHeight: '1.7', letterSpacing: '0.5px' }}
          >
            Discover the heart and soul of Banyuajuh, where tradition meets innovation
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 
                className="text-[#1B3A1A] uppercase tracking-wider mb-6"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: '2px' }}
              >
                OUR STORY
              </h2>
              <div className="space-y-4 text-[#1B3A1A]" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                <p>
                  Desa Ceria, located in the heart of Banyuajuh, Madura, is a vibrant community 
                  that has preserved its rich cultural heritage for generations. Our village is 
                  renowned for its traditional craftsmanship, particularly in batik weaving and 
                  salt farming.
                </p>
                <p>
                  The name "Ceria" (meaning cheerful) reflects our community's warm spirit and 
                  welcoming nature. We take pride in sharing our traditions with visitors from 
                  around the world while maintaining the authentic essence of Madura culture.
                </p>
                <p>
                  From the thrilling Karapan Sapi (bull racing) competitions to our exquisite 
                  handcrafted batik, every aspect of our village tells a story of dedication, 
                  passion, and community spirit.
                </p>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1720238281684-63c61ad01d3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nfGVufDF8fHx8MTc2MTQ2Mjg2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Village Community"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#1B3A1A] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            data-aos="fade-up"
            className="text-white text-center uppercase tracking-wider mb-12"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: '2px' }}
          >
            OUR VALUES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-[#2d5c2a] p-8 rounded-lg text-center space-y-4 hover:bg-[#3d7c3a] transition-colors"
              >
                <div className="flex justify-center text-[#CDDC39]">
                  {value.icon}
                </div>
                <h3 
                  className="text-white uppercase tracking-wide"
                  style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '1px' }}
                >
                  {value.title}
                </h3>
                <p className="text-white/90" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Heritage */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            data-aos="fade-up"
            className="text-[#1B3A1A] text-center uppercase tracking-wider mb-12"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: '2px' }}
          >
            CULTURAL HERITAGE
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="0" className="bg-white p-8 rounded-lg shadow-lg">
              <h3 
                className="text-[#1B3A1A] uppercase tracking-wide mb-4"
                style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '0.5px' }}
              >
                KARAPAN SAPI
              </h3>
              <p className="text-gray-700" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                The iconic bull racing tradition that showcases the speed and strength of our 
                specially bred Madura cattle. This centuries-old practice is more than a sport—
                it's a celebration of our agricultural heritage.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="bg-white p-8 rounded-lg shadow-lg">
              <h3 
                className="text-[#1B3A1A] uppercase tracking-wide mb-4"
                style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '0.5px' }}
              >
                BATIK MADURA
              </h3>
              <p className="text-gray-700" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                Our distinctive batik patterns tell stories of the sea, nature, and daily life. 
                Each piece is meticulously handcrafted using traditional techniques passed down 
                through generations of master artisans.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-8 rounded-lg shadow-lg">
              <h3 
                className="text-[#1B3A1A] uppercase tracking-wide mb-4"
                style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '0.5px' }}
              >
                SALT FARMING
              </h3>
              <p className="text-gray-700" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                Madura is famous for its salt production, utilizing traditional sun-drying methods 
                that produce the finest quality sea salt. Our farmers continue this ancient practice 
                with pride and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="bg-[#1B3A1A] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1757076952608-4baa9cdf89fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJhdGlrJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NjE0NjI4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Batik Artisan"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div data-aos="fade-left">
              <h2 
                className="text-white uppercase tracking-wider mb-6"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: '2px' }}
              >
                COMMUNITY IMPACT
              </h2>
              <div className="space-y-4 text-white/90" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                <p>
                  Our tourism initiatives directly benefit local artisans, farmers, and families. 
                  By visiting Desa Ceria, you support sustainable livelihoods and help preserve 
                  traditional crafts for future generations.
                </p>
                <p>
                  We invest in education programs that teach young people traditional skills while 
                  preparing them for modern opportunities. This balance ensures our heritage remains 
                  vibrant and relevant.
                </p>
                <p>
                  Every purchase, every visit, and every shared story contributes to the economic 
                  and cultural vitality of our community. Together, we're building a brighter future 
                  while honoring our past.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            data-aos="zoom-in"
            className="text-[#1B3A1A] uppercase tracking-wider mb-6"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: '2px' }}
          >
            VISIT US TODAY
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[#1B3A1A] mb-8"
            style={{ fontSize: '18px', lineHeight: '1.7' }}
          >
            Experience the warmth of Madura hospitality and immerse yourself in our rich cultural heritage.
          </p>
          <button
            data-aos="zoom-in"
            data-aos-delay="200"
            className="bg-[#1B3A1A] text-white hover:bg-[#2d5c2a] px-10 py-4 rounded-md transition-colors"
            style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '1px' }}
            onClick={() => window.location.href = '#contact'}
          >
            CONTACT US
          </button>
        </div>
      </section>
    </div>
  );
}
