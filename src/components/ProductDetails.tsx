import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Product {
  title: string;
  description: string;
  image: string;
  highlight: string;
}

interface ProductDetailsProps {
  products: Product[];
}

export function ProductDetails({ products }: ProductDetailsProps) {
  return (
    <section className="bg-[#CDDC39] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          data-aos="fade-up"
          className="text-[#1B3A1A] text-center mb-12 uppercase tracking-wider"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: '2px' }}
        >
          FIND OUT MORE
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 
                  className="text-[#1B3A1A] uppercase tracking-wide"
                  style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '0.5px' }}
                >
                  {product.title}
                </h3>
                <p 
                  className="text-[#ff1493] uppercase tracking-wide"
                  style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.5px' }}
                >
                  {product.highlight}
                </p>
                <p className="text-gray-700" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  {product.description}
                </p>
                <Button 
                  className="w-full bg-[#1B3A1A] text-white hover:bg-[#2d5c2a] rounded-md mt-2"
                  style={{ fontWeight: 700 }}
                >
                  SEE DETAILS
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
