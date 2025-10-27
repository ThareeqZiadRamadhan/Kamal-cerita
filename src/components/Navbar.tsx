import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import appLogo from '../assets/logo-nav.png'

interface NavbarProps {
  currentPage: 'home' | 'about' | 'news' | 'potential' | 'contact' | 'gallery';
  onNavigate: (page: 'home' | 'about' | 'news' | 'potential' | 'contact' | 'gallery') => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'about' | 'news' | 'potential' | 'contact' | 'gallery') => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`sticky top-0 z-50 shadow-md transition-all duration-300 ${
        scrolled 
          ? 'bg-[#CDDC39]/95 backdrop-blur-md' 
          : 'bg-[#CDDC39]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="shrink-0 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
          <img 
            src={appLogo} 
            alt="Logo Desa Ceria" 
            className="h-20 w-20" 
          />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => handleNavClick('home')}
                className={`text-[#1B3A1A] hover:text-black transition-all hover:scale-110 ${currentPage === 'home' ? 'border-b-2 border-[#1B3A1A]' : ''}`}
                style={{ fontWeight: 600, letterSpacing: '0.5px' }}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className={`text-[#1B3A1A] hover:text-black transition-all hover:scale-110 ${currentPage === 'about' ? 'border-b-2 border-[#1B3A1A]' : ''}`}
                style={{ fontWeight: 600, letterSpacing: '0.5px' }}
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('news')}
                className={`text-[#1B3A1A] hover:text-black transition-all hover:scale-110 ${currentPage === 'news' ? 'border-b-2 border-[#1B3A1A]' : ''}`}
                style={{ fontWeight: 600, letterSpacing: '0.5px' }}
              >
                Latest News
              </button>
              <button 
                onClick={() => handleNavClick('potential')}
                className={`text-[#1B3A1A] hover:text-black transition-all hover:scale-110 ${currentPage === 'potential' ? 'border-b-2 border-[#1B3A1A]' : ''}`}
                style={{ fontWeight: 600, letterSpacing: '0.5px' }}
              >
                Village Potential
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className={`text-[#1B3A1A] hover:text-black transition-all hover:scale-110 ${currentPage === 'contact' ? 'border-b-2 border-[#1B3A1A]' : ''}`}
                style={{ fontWeight: 600, letterSpacing: '0.5px' }}
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={() => handleNavClick('gallery')}
              className="bg-[#1B3A1A] text-white hover:bg-[#2d5c2a] rounded-md px-6 hover:scale-105 transition-transform"
              style={{ fontWeight: 700 }}
            >
              Gallery
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#1B3A1A] hover:text-black p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#CDDC39]/95 backdrop-blur-md border-t-2 border-[#1B3A1A]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left px-3 py-2 text-[#1B3A1A] hover:bg-[#b8c634] transition-colors ${currentPage === 'home' ? 'bg-[#b8c634]' : ''}`}
              style={{ fontWeight: 600 }}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`block w-full text-left px-3 py-2 text-[#1B3A1A] hover:bg-[#b8c634] transition-colors ${currentPage === 'about' ? 'bg-[#b8c634]' : ''}`}
              style={{ fontWeight: 600 }}
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('news')}
              className={`block w-full text-left px-3 py-2 text-[#1B3A1A] hover:bg-[#b8c634] transition-colors ${currentPage === 'news' ? 'bg-[#b8c634]' : ''}`}
              style={{ fontWeight: 600 }}
            >
              Latest News
            </button>
            <button 
              onClick={() => handleNavClick('potential')}
              className={`block w-full text-left px-3 py-2 text-[#1B3A1A] hover:bg-[#b8c634] transition-colors ${currentPage === 'potential' ? 'bg-[#b8c634]' : ''}`}
              style={{ fontWeight: 600 }}
            >
              Village Potential
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`block w-full text-left px-3 py-2 text-[#1B3A1A] hover:bg-[#b8c634] transition-colors ${currentPage === 'contact' ? 'bg-[#b8c634]' : ''}`}
              style={{ fontWeight: 600 }}
            >
              Contact
            </button>
            <div className="px-3 py-2">
              <Button 
                onClick={() => handleNavClick('gallery')}
                className="w-full bg-[#1B3A1A] text-white hover:bg-[#2d5c2a]" 
                style={{ fontWeight: 700 }}
              >
                Gallery
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
