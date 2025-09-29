import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import clawGripLogo from '@/assets/clawgrip-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
            <img 
              src={clawGripLogo} 
              alt="Claw Grip Logo" 
              className={`transition-smooth ${
                isScrolled ? 'h-6' : 'h-10'
              }`}
            />
            <span className={`font-bold text-foreground transition-smooth ${
              isScrolled ? 'text-base' : 'text-xl'
            }`}>
              Claw Grip <sup className="text-xs">™</sup>
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

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-3">
            <a href="#home" className="text-foreground text-sm">Home</a>
            <a href="#store" className="text-foreground text-sm">Store</a>
            <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90 font-bold">
              Buy
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;