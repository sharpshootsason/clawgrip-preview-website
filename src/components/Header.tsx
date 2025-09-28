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
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? 'nav-sticky' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={clawGripLogo} 
              alt="ClawGrip Logo" 
              className={`transition-smooth ${
                isScrolled ? 'h-8' : 'h-10'
              }`}
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#directory" 
              className="text-foreground hover:text-accent transition-fast relative group"
            >
              Directory
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90">
              Shop Here
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-4">
            <a href="#directory" className="text-foreground">Directory</a>
            <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90">
              Shop
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;