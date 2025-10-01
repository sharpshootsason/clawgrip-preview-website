import { Button } from '@/components/ui/button';
import { Check, Shield, Lock, Zap } from 'lucide-react';

const ContentSection = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Features Section */}
      <section id="directory" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Glass-morphism container */}
          <div className="bg-card/40 p-8 rounded-2xl border-l-4 border-accent shadow-lg">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3 transition-all duration-300 hover:translate-x-2">
                <div className="flex-shrink-0 w-6 flex justify-end">
                  <Check className="w-6 h-6 text-accent drop-shadow-[0_0_8px_rgba(var(--accent),0.6)]" />
                </div>
                <p className="text-lg md:text-xl text-left" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}>
                  Resistant and breathable material
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-3 transition-all duration-300 hover:translate-x-2">
                <div className="flex-shrink-0 w-6 flex justify-end">
                  <Check className="w-6 h-6 text-accent drop-shadow-[0_0_8px_rgba(var(--accent),0.6)]" />
                </div>
                <p className="text-lg md:text-xl text-left" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}>
                  Support for fingers and knuckles
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-3 transition-all duration-300 hover:translate-x-2">
                <div className="flex-shrink-0 w-6 flex justify-end">
                  <Check className="w-6 h-6 text-accent drop-shadow-[0_0_8px_rgba(var(--accent),0.6)]" />
                </div>
                <p className="text-lg md:text-xl text-left" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}>
                  Designed for combat sports
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-card/30 to-card/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card/30 rounded-xl border border-border/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--accent),0.2)] hover:bg-card/50">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(var(--accent),0.3)]">
                <Shield className="w-8 h-8 text-accent drop-shadow-[0_0_10px_rgba(var(--accent),0.8)]" />
              </div>
              <h3 className="text-xl font-bold" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}>
                Maximum protection
              </h3>
            </div>

            <div className="text-center p-6 bg-card/30 rounded-xl border border-border/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--accent),0.2)] hover:bg-card/50">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(var(--accent),0.3)]">
                <Lock className="w-8 h-8 text-accent drop-shadow-[0_0_10px_rgba(var(--accent),0.8)]" />
              </div>
              <h3 className="text-xl font-bold" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}>
                Firm adjustment
              </h3>
            </div>

            <div className="text-center p-6 bg-card/30 rounded-xl border border-border/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--accent),0.2)] hover:bg-card/50">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(var(--accent),0.3)]">
                <Zap className="w-8 h-8 text-accent drop-shadow-[0_0_10px_rgba(var(--accent),0.8)]" />
              </div>
              <h3 className="text-xl font-bold" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}>
                Unique style
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-card/10 to-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 px-4"
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.4), 0 0 40px rgba(255, 255, 255, 0.1)' }}>
            What Champions Are Saying
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-card/60 border border-border/50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(var(--accent),0.2)] hover:border-accent/50">
              <p className="text-muted-foreground mb-4" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}>
                "These are the grips that make me a champion"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4 shadow-[0_0_15px_rgba(var(--accent),0.5)]">
                  <span className="text-white font-bold">JE</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)' }}>Joselyn Edwards</p>
                  <p className="text-sm text-muted-foreground">UFC Fighter</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card/60 border border-border/50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(var(--accent),0.2)] hover:border-accent/50">
              <p className="text-muted-foreground mb-4" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}>
                "These are my members favorites"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4 shadow-[0_0_15px_rgba(var(--accent),0.5)]">
                  <span className="text-white font-bold">AC</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)' }}>Austin Childers</p>
                  <p className="text-sm text-muted-foreground">MMA Fighter and Gym Owner</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card/60 border border-border/50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(var(--accent),0.2)] hover:border-accent/50">
              <p className="text-muted-foreground mb-4" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}>
                "These wraps always end up missing when my bag is open haha.. it's definitely high demand for everyone in here"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4 shadow-[0_0_15px_rgba(var(--accent),0.5)]">
                  <span className="text-white font-bold">GC</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)' }}>Gui Cury</p>
                  <p className="text-sm text-muted-foreground">MMA Fighter and Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent relative overflow-hidden">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="bg-card/20 p-8 rounded-2xl border border-accent/20 shadow-[0_0_50px_rgba(var(--accent),0.15)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 px-4"
                style={{ textShadow: '0 4px 30px rgba(255, 255, 255, 0.2), 0 0 60px rgba(var(--accent), 0.3)' }}>
              Ready to Elevate Your Game?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
               style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
              Join thousands of fighters who've already discovered the ClawGrip advantage. 
              Your competition won't know what hit them.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-bold shadow-[0_0_30px_rgba(var(--accent),0.5)] hover:shadow-[0_0_50px_rgba(var(--accent),0.8)] transition-all duration-300 hover:scale-110 w-full sm:w-auto"
              >
                Shop Here Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-accent bg-background/50 text-accent hover:bg-accent hover:text-white px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--accent),0.4)] w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 ClawGrip. All rights reserved. | Designed for champions by UFC fighters.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContentSection;