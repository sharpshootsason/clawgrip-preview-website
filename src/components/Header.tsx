import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import clawGripLogo from '@/assets/clawgrip-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth bg-background/95 backdrop-blur-sm border-b border-border/50 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className={`font-bold text-foreground transition-smooth ${
              isScrolled ? 'text-base' : 'text-xl'
            }`}>
              ClawGrip<sup className="text-xs">™</sup>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#home" 
              className="text-foreground hover:text-accent transition-fast relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#store" 
              className="text-foreground hover:text-accent transition-fast relative group"
            >
              Store
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#reviews" 
              className="text-foreground hover:text-accent transition-fast relative group"
            >
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-accent transition-fast relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90 font-bold">
              Buy
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a 
              href="#home" 
              className="block text-foreground hover:text-accent transition-fast py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#store" 
              className="block text-foreground hover:text-accent transition-fast py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Store
            </a>
            <a 
              href="#reviews" 
              className="block text-foreground hover:text-accent transition-fast py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              className="block text-foreground hover:text-accent transition-fast py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              variant="default" 
              size="sm" 
              className="bg-accent hover:bg-accent/90 font-bold w-full"
            >
              Buy
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;