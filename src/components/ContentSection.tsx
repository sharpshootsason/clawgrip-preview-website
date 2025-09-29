import { Button } from '@/components/ui/button';
import { Check, Shield, Lock, Zap } from 'lucide-react';

const ContentSection = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Features Section */}
      <section id="directory" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-accent flex-shrink-0" />
              <p className="text-lg md:text-xl text-left">Resistant and breathable material</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-accent flex-shrink-0" />
              <p className="text-lg md:text-xl text-left">Support for fingers and knuckles</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-accent flex-shrink-0" />
              <p className="text-lg md:text-xl text-left">Designed for combat sports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Maximum protection</h3>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Firm adjustment</h3>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Unique style</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 px-4">
            What Champions Are Saying
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-card border border-border">
              <p className="text-muted-foreground mb-4">
                "Flibber jab wokka shimmy grip pow! Never felt such zoomzoom in my fingertips. Absolutely bonkers performance!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JS</span>
                </div>
                <div>
                  <p className="font-semibold">Jibber Smith</p>
                  <p className="text-sm text-muted-foreground">UFC Champion</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <p className="text-muted-foreground mb-4">
                "Wobble gobble grip magic! My hands feel like they've been blessed by the grip gods. Phenomenal stuff!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">BB</span>
                </div>
                <div>
                  <p className="font-semibold">Blobby McGrip</p>
                  <p className="text-sm text-muted-foreground">MMA Fighter</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <p className="text-muted-foreground mb-4">
                "Squeezle beezle fantastic grip wizardry! Changed my whole game, now I'm unstoppable in the octagon!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">WF</span>
                </div>
                <div>
                  <p className="font-semibold">Wibbly Fighter</p>
                  <p className="text-sm text-muted-foreground">UFC Contender</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-accent/10 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 px-4">
            Ready to Elevate Your Game?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Join thousands of fighters who've already discovered the ClawGrip advantage. 
            Your competition won't know what hit them.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 w-full sm:w-auto"
            >
              Shop Here Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-bold transition-all duration-300 w-full sm:w-auto"
            >
              Learn More
            </Button>
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