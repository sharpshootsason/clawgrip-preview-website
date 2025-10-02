import { Button } from '@/components/ui/button';
import { Check, Shield, Lock, Zap } from 'lucide-react';
import heroBg1 from '@/assets/hero-bg-1.png';

const ContentSection = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Features Section */}
      <section id="directory" className="py-24 px-6 border-t border-border/30">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-card/30 p-12 border border-border/30">
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg text-foreground/90 font-light">
                  Resistant and breathable material
                </p>
              </div>
              
              <div className="flex items-start gap-4 group">
                <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg text-foreground/90 font-light">
                  Support for fingers and knuckles
                </p>
              </div>
              
              <div className="flex items-start gap-4 group">
                <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg text-foreground/90 font-light">
                  Designed for combat sports
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Releases Section */}
      <section className="relative min-h-[600px] flex items-center justify-end overflow-hidden border-t border-border/30">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/80" />
        
        {/* Content */}
        <div className="relative z-10 px-6 py-16 md:pr-16 max-w-xl text-right">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase tracking-wide">
            New Releases
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-light">
            For early rounds, late rounds, and zero distractions.
          </p>
          
          <div className="flex justify-end">
            <Button 
              variant="outline"
              size="lg"
              className="bg-white text-background border-0 hover:bg-white/90 px-12 py-6 text-sm uppercase tracking-widest font-bold transition-all duration-300"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-14 h-14 border border-border/50 flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-base uppercase tracking-wider font-semibold">
                Maximum protection
              </h3>
            </div>

            <div className="text-center space-y-4">
              <div className="w-14 h-14 border border-border/50 flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-base uppercase tracking-wider font-semibold">
                Firm adjustment
              </h3>
            </div>

            <div className="text-center space-y-4">
              <div className="w-14 h-14 border border-border/50 flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-base uppercase tracking-wider font-semibold">
                Unique style
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 uppercase tracking-wider">
            What Champions Are Saying
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-card/20 border border-border/30 transition-all duration-300 hover:border-accent/50">
              <p className="text-foreground/80 mb-6 font-light leading-relaxed">
                "These are the wraps that make me a champion"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/90 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JE</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Joselyn Edwards</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">UFC Fighter</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-card/20 border border-border/30 transition-all duration-300 hover:border-accent/50">
              <p className="text-foreground/80 mb-6 font-light leading-relaxed">
                "These are my members favorites"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/90 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AC</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Austin Childers</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">MMA Fighter and Gym Owner</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-card/20 border border-border/30 transition-all duration-300 hover:border-accent/50">
              <p className="text-foreground/80 mb-6 font-light leading-relaxed">
                "These wraps always end up missing when my bag is open haha.. it's definitely high demand for everyone in here"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/90 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GC</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Gui Cury</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">MMA Fighter and Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide">
              Ready to Elevate Your Game?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Join thousands of fighters who've already discovered the ClawGrip advantage. 
              Your competition won't know what hit them.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/80 text-white px-12 py-6 text-base uppercase tracking-wider font-semibold transition-all duration-300 w-full sm:w-auto"
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border border-border hover:border-foreground hover:bg-foreground hover:text-background px-12 py-6 text-base uppercase tracking-wider font-semibold transition-all duration-300 w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border/30">
        <div className="container mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-light">
            © 2024 ClawGrip. All rights reserved. | Designed for champions by UFC fighters.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContentSection;