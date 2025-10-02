import { Button } from '@/components/ui/button';
import clawGripLogo from '@/assets/clawgrip-logo.png';
import boxingWrap from '@/assets/boxing-wrap.png';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Boxing Wrap Full Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale opacity-20"
        style={{ backgroundImage: `url(${boxingWrap})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20">
        <div className="mb-12">
          <img 
            src={clawGripLogo} 
            alt="ClawGrip - Premium Grip Solutions" 
            className="h-20 md:h-28 lg:h-36 mx-auto opacity-90"
          />
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-sm sm:text-base md:text-lg uppercase tracking-[0.3em] text-foreground/70 font-light">
            Boxing | Grappling | MMA
          </h1>
          
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-bold tracking-tight leading-tight">
            Gear for Warriors<br/>Built To Dominate
          </p>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Sports bandages created by champions, for champions.
          </p>

          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/80 text-white px-12 py-6 text-base uppercase tracking-wider font-semibold transition-all duration-300"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;