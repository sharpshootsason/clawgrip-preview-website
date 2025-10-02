import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import clawGripLogo from '@/assets/clawgrip-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border/30`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-sm uppercase tracking-wider text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </a>
            <a 
              href="#store" 
              className="text-sm uppercase tracking-wider text-foreground/80 hover:text-foreground transition-colors"
            >
              Products
            </a>
          </div>

          {/* Centered Logo */}
          <div className="flex items-center">
            <img 
              src={clawGripLogo} 
              alt="ClawGrip" 
              className="h-8 md:h-10 opacity-90"
            />
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#contact" 
              className="text-sm uppercase tracking-wider text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <button
              onClick={() => navigate('/cart')}
              className="relative text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
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
          <div className="md:hidden py-4 space-y-4 border-t border-border/30">
            <a 
              href="#home" 
              className="block text-sm uppercase tracking-wider text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#store" 
              className="block text-sm uppercase tracking-wider text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#contact" 
              className="block text-sm uppercase tracking-wider text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate('/cart');
              }}
              className="flex items-center gap-2 text-sm uppercase tracking-wider text-foreground/80 hover:text-foreground transition-colors"
            >
              <ShoppingCart size={20} />
              Cart {cartItemCount > 0 && `(${cartItemCount})`}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;