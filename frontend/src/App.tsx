import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { NewsPage } from "./components/NewsPage";
import { NewsDetailPage } from "./components/NewsDetailPage";
import { PotentialPage } from "./components/PotentialPage";
import { ContactPage } from "./components/ContactPage";
import { GalleryPage } from "./components/GalleryPage";
import { Footer } from "./components/Footer";
import { Toaster } from 'react-hot-toast';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/news')) return 'news';
    if (path === '/about') return 'about';
    if (path === '/potential') return 'potential';
    if (path === '/gallery') return 'gallery';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const handleNavigate = (page: 'home' | 'about' | 'news' | 'potential' | 'contact' | 'gallery') => {
    const targetPath = page === 'home' ? '/' : `/${page}`;
    navigate(targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
return (
    <div className="min-h-screen">
      
      {/* --- CUSTOM MADURA THEME TOAST --- */}
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        toastOptions={{
          // Default Style untuk semua tipe toast
          className: '',
          style: {
            border: '2px solid #CDDC39', // Border Lime tebal
            padding: '16px',
            color: '#FFFFFF', // Teks putih biar kebaca di background gelap
            backgroundColor: '#1B3A1A', // Background Dark Green
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            textTransform: 'uppercase', // Biar kesan tegas/bold
            letterSpacing: '1px',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)', // Bayangan biar ngambang
            borderRadius: '8px',
          },
          // Custom Icon untuk SUKSES
          success: {
            iconTheme: {
              primary: '#CDDC39', // Icon checklist warna Lime
              secondary: '#1B3A1A',
            },
            style: {
              border: '2px solid #CDDC39', // Border Lime
            }
          },
          // Custom Icon untuk ERROR
          error: {
            iconTheme: {
              primary: '#EF4444', // Icon silang merah
              secondary: '#1B3A1A',
            },
            style: {
              border: '2px solid #EF4444', // Border merah kalau error
              color: '#EF4444'
            }
          },
          // Custom Loading
          loading: {
            iconTheme: {
              primary: '#CDDC39',
              secondary: '#1B3A1A',
            },
            style: {
              border: '2px solid #CDDC39',
              color: '#CDDC39'
            }
          }
        }}
      />

      <Navbar 
        currentPage={getCurrentPage()} 
        onNavigate={handleNavigate} 
      />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="/potential" element={<PotentialPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}