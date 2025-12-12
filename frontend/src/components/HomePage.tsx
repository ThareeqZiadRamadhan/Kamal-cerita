import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Hero } from "./Hero";
import { FeatureBanner } from "./FeatureBanner";
import { VillagePotential } from "./VillagePotential";
import { LifestyleSection } from "./LifestyleSection";
//import { ProductDetails } from "./ProductDetails";
import { NewsSection } from "./NewsSection";

export function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  // Village Potential Data
  const potentials = [
    {
      title: "KARAPAN SAPI",
      description: "Experience the thrilling traditional bull racing that has been a Madura heritage for centuries.",
      image: "https://images.unsplash.com/photo-1603795852953-7e83fcde81a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGN1bHR1cmFsJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzYxNDA2MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "BATIK EXHIBITION",
      description: "Explore our authentic Madura batik collections, handcrafted by local artisans with unique patterns.",
      image: "https://images.unsplash.com/photo-1757076952608-4baa9cdf89fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJhdGlrJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NjE0NjI4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "SALT FESTIVAL",
      description: "Witness traditional salt farming methods that have sustained our community for generations.",
      image: "https://images.unsplash.com/photo-1695640906882-09f71f129912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWElMjBzYWx0JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjE0NjI4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "BEACH TOURISM",
      description: "Relax on pristine beaches with crystal clear waters and stunning coastal views.",
      image: "https://images.unsplash.com/photo-1706922123796-788389d6db0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwYmVhY2glMjB0cm9waWNhbHxlbnwxfHx8fDE3NjE0NjI4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "TRADITIONAL CRAFTS",
      description: "Learn and participate in traditional craft-making workshops led by master artisans.",
      image: "https://images.unsplash.com/photo-1760637626191-fa20283f6fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNyYWZ0JTIwd29ya3Nob3B8ZW58MXx8fHwxNzYxNDYyODYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  // Product/Services Data
  /*const products = [
    {
      title: "TOUR PACKAGES",
      highlight: "ALL-INCLUSIVE EXPERIENCE",
      description: "Complete village tour packages including cultural performances, traditional meals, and guided visits to iconic locations.",
      image: "https://images.unsplash.com/photo-1720238281684-63c61ad01d3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nfGVufDF8fHx8MTc2MTQ2Mjg2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "EXCLUSIVE BATIK",
      highlight: "AUTHENTIC HANDCRAFTED",
      description: "Premium quality batik fabrics and garments, featuring unique Madura patterns passed down through generations.",
      image: "https://images.unsplash.com/photo-1722635941018-a9e7de0a5b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZhYnJpYyUyMHRleHRpbGV8ZW58MXx8fHwxNzYxNDYyODYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "ORGANIC SALT",
      highlight: "NATURALLY HARVESTED",
      description: "Pure, high-quality sea salt harvested using traditional methods that preserve natural minerals and flavor.",
      image: "https://images.unsplash.com/photo-1660491260923-4151a8117332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWx0JTIwZmFybWVyJTIwd29ya2luZ3xlbnwxfHx8fDE3NjE0NjI4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];*/

  // News/Events Data
  const news = [
    {
      title: "ANNUAL KARAPAN SAPI CHAMPIONSHIP 2025",
      date: "November 15, 2025",
      image: "https://images.unsplash.com/photo-1603795852953-7e83fcde81a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGN1bHR1cmFsJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzYxNDA2MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "BATIK WORKSHOP WITH MASTER ARTISANS",
      date: "December 1, 2025",
      image: "https://images.unsplash.com/photo-1757076952608-4baa9cdf89fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJhdGlrJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NjE0NjI4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "TRADITIONAL SALT HARVEST FESTIVAL",
      date: "October 20, 2025",
      image: "https://images.unsplash.com/photo-1695640906882-09f71f129912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWElMjBzYWx0JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjE0NjI4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "COASTAL CLEAN-UP & BEACH FESTIVAL",
      date: "November 5, 2025",
      image: "https://images.unsplash.com/photo-1706922123796-788389d6db0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwYmVhY2glMjB0cm9waWNhbHxlbnwxfHx8fDE3NjE0NjI4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "MADURA CULINARY FESTIVAL",
      date: "December 10, 2025",
      image: "https://images.unsplash.com/photo-1545105580-06fbbf96241e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBtYXJrZXR8ZW58MXx8fHwxNzYxNDYyODYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "TRADITIONAL CRAFT EXHIBITION",
      date: "November 25, 2025",
      image: "https://images.unsplash.com/photo-1760637626191-fa20283f6fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNyYWZ0JTIwd29ya3Nob3B8ZW58MXx8fHwxNzYxNDYyODYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div>
      <Hero heroImage="https://images.unsplash.com/photo-1635183067334-c0dbdac46c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWR1cmElMjBjYXR0bGUlMjBpbmRvbmVzaWF8ZW58MXx8fHwxNzYxNDY0MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080" />
      <FeatureBanner />
      <VillagePotential potentials={potentials} />
      <LifestyleSection image="https://images.unsplash.com/photo-1720238281684-63c61ad01d3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nfGVufDF8fHx8MTc2MTQ2Mjg2Mnww&ixlib=rb-4.1.0&q=80&w=1080" />
      {/* <ProductDetails products={products} /> */}
      <NewsSection news={news} />
    </div>
  );
}
