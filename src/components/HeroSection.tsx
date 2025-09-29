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
            className="h-24 md:h-32 lg:h-40 mx-auto drop-shadow-2xl opacity-80"
          />
        </div>
        
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 relative z-10">
          Boxing | Grappling | MMA
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground mb-8 max-w-2xl mx-auto px-4 font-semibold">
          Gear for Warriors - Built To Dominate
        </p>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 max-w-xl mx-auto px-4">
          Sports bandages created by champions, for champions.
        </p>

        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Buy Now
        </Button>
      </div>

    </section>
  );
};

export default HeroSection;