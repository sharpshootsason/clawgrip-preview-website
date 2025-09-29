import { Button } from '@/components/ui/button';
import clawGripLogo from '@/assets/clawgrip-logo.png';
import boxingWrap from '@/assets/boxing-wrap.png';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Boxing Wrap Full Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale opacity-40"
        style={{ backgroundImage: `url(${boxingWrap})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="mb-8">
          <img 
            src={clawGripLogo} 
            alt="ClawGrip - Premium Grip Solutions" 
            className="h-24 md:h-32 lg:h-40 mx-auto drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 relative z-10">
          Precision. Control. Dominance.
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground mb-8 max-w-2xl mx-auto px-4">
          Experience the ultimate grip technology tested by champions, for champions, from champions.
        </p>

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