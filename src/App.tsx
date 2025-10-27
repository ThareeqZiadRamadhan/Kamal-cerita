import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { NewsPage } from "./components/NewsPage";
import { PotentialPage } from "./components/PotentialPage";
import { ContactPage } from "./components/ContactPage";
import { GalleryPage } from "./components/GalleryPage";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'news' | 'potential' | 'contact' | 'gallery'>('home');

  const handleNavigate = (page: 'home' | 'about' | 'news' | 'potential' | 'contact' | 'gallery') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage key="home" />;
      case 'about':
        return <AboutPage key="about" />;
      case 'news':
        return <NewsPage key="news" />;
      case 'potential':
        return <PotentialPage key="potential" />;
      case 'contact':
        return <ContactPage key="contact" />;
      case 'gallery':
        return <GalleryPage key="gallery" />;
      default:
        return <HomePage key="home" />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}