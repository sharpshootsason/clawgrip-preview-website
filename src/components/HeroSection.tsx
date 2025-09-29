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
            className="h-24 md:h-32 lg:h-40 mx-auto drop-shadow-2xl opacity-80 animate-fade-in"
          />
        </div>
        
        <div className="max-w-3xl mx-auto animate-scale-in">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 tracking-wide" 
              style={{ textShadow: '0 2px 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)' }}>
            Boxing | Grappling | MMA
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground mb-8 font-semibold tracking-wide"
             style={{ textShadow: '0 2px 15px rgba(255, 255, 255, 0.25)' }}>
            Gear for Warriors - Built To Dominate
          </p>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6"
             style={{ textShadow: '0 1px 10px rgba(0, 0, 0, 0.5)' }}>
            Sports bandages created by champions, for champions.
          </p>

          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold shadow-[0_0_30px_rgba(var(--accent),0.5)] hover:shadow-[0_0_50px_rgba(var(--accent),0.7)] transition-all duration-300 hover:scale-105"
          >
            Buy Now
          </Button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;