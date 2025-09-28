import { Button } from '@/components/ui/button';
import clawGripLogo from '@/assets/clawgrip-logo.png';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900"></div>
      
      {/* White Strip Background */}
      <div className="hero-strip absolute inset-0 flex items-center justify-center">
        <div className="w-full h-32 hero-strip"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="mb-8">
          <img 
            src={clawGripLogo} 
            alt="ClawGrip - Premium Grip Solutions" 
            className="h-24 md:h-32 lg:h-40 mx-auto drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 relative z-10">
          Precision. Control. Dominance.
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-8 max-w-2xl mx-auto px-4">
          Experience the ultimate grip technology tested by champions, for champions, from champions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            Shop Here
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-black text-black hover:bg-black hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
          >
            View Directory
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;